<?php

namespace App\Module;


/**
 * 插件
 */
class Plugin
{

    /**
     * 执行
     */
    public static function execute()
    {

        $res = self::generateDockerCompose();
        if($res){
            self::generateNginxConf();
            // 'docker compose -f "docker-compose-build.yml" up -d --build'
            // './cmd restart'
        }
    }

    /**
     * 生成 DockerCompose.yml
     */
    public static function generateDockerCompose()
    {
        $json = file_get_contents(base_path('plugin/plugin.conf.json'));
        $json = json_decode($json,true);

        // DockerCompose
        $ipd = 20;
        $array = [];
        $nginxLinks = [];
        $dockerCompos = file_get_contents(base_path('docker-compose.yml'));
        
        foreach ( $json['dockerCompose'] as $name => $value){
            
            if( strpos($dockerCompos,"{$name}:") ){
                return false;
            }

            $ipd = $ipd + 1;
            $arr = [
                <<<EOF
                  {$name}:
                    container_name: "dootask-$name-\${APP_ID}"
                    image: "{$value['image']}"
                EOF
            ];
                
            // volumes
            if($value['volumes'] ?? 0){
                $volumes = [];
                foreach($value['volumes'] as $volume){
                    $volumes[] = <<<EOF
                          - {$volume}
                    EOF;
                }
                $volumes = implode("\n", $volumes);
                $arr[] = <<<EOF
                        volumes:
                    {$volumes}
                    EOF;
            }

            // depends_on
            if($value['depends_on'] ?? 0){
                $depends_ons = [];
                foreach($value['depends_on'] as $depends_on){
                    $depends_ons[] = <<<EOF
                          - {$depends_on}
                    EOF;
                }
                $depends_ons = implode("\n", $depends_ons);
                $arr[] = <<<EOF
                        depends_on:
                    {$depends_ons}
                    EOF;
            }

            // platform
            if($value['platform'] ?? 0){
                $arr[] = <<<EOF
                        platform: {$value['platform']}
                    EOF;
            }

            // ports
            if($value['ports'] ?? 0){
                $ports = [];
                foreach($value['ports'] ?? [] as $port){
                    $ports[] = <<<EOF
                          - {$port}
                    EOF;
                }
                $ports = implode("\n", $ports);
                $arr[] = <<<EOF
                        ports:
                    {$ports}
                    EOF;
            }
            
            // environment
            if($value['environment'] ?? 0){
                $environment = [];
                foreach($value['environment'] ?? [] as $key=> $val){
                    $environment[] = <<<EOF
                          {$key}: {$val}
                    EOF;
                }
                $environment = implode("\n", $environment);
                $arr[] = <<<EOF
                        environment:
                    {$environment}
                    EOF;
            }

            // command
            if($value['command'] ?? 0){
                $arr[] = <<<EOF
                        command: {$value['command']}
                    EOF;
            }

            // extnetwork
            $arr[] = 
                <<<EOF
                    networks:
                      extnetwork:
                        ipv4_address: "\${APP_IPPR}.{$ipd}"
                    restart: unless-stopped
                EOF;
            
            $array[] = implode("\n", $arr);

            $nginxLinks[] = 
                <<<EOF
                      - $name
                EOF;
        }

        $dockerCompos = str_replace('#plugin-nginx-links#',implode("\n", $nginxLinks),$dockerCompos);
        $dockerCompos = str_replace('#plugin#',implode("\n\n", $array),$dockerCompos);
        file_put_contents(base_path('docker-compose-build.yml'),$dockerCompos);

        // 
        return $dockerCompos;
    }


    /**
     * 生成 nginx conf
     */
    public static function generateNginxConf()
    {
        $json = file_get_contents(base_path('plugin/plugin.conf.json'));
        $json = json_decode($json,true);
        // 先删
        self::deleteFiles(base_path("docker/nginx/conf.d/").'plugin');
        // 后插
        foreach ( $json['dockerCompose'] as $name => $value){
            if( !isset($value['nginx_proxy']) || !isset($value['nginx_proxy']['enable']) || !isset($value['nginx_proxy']['location']) || !isset($value['nginx_proxy']['proxy_pass'])){
                break;     // 终止循环
            }
            if( !$value['nginx_proxy']['enable'] || !$value['nginx_proxy']['location'] || !$value['nginx_proxy']['proxy_pass']){
                break;     // 终止循环
            }
            $file_path =  base_path("docker/nginx/conf.d/plugin/{$name}.conf");
            file_put_contents( $file_path ,
                <<<EOF
                location {$value['nginx_proxy']['location']} {
                    proxy_http_version 1.1;
                    proxy_set_header X-Real-IP \$remote_addr;
                    proxy_set_header X-Real-PORT \$remote_port;
                    proxy_set_header X-Forwarded-Host \$the_host/office;
                    proxy_set_header X-Forwarded-Proto \$the_scheme;
                    proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
                    proxy_set_header Host \$http_host;
                    proxy_set_header Scheme \$scheme;
                    proxy_set_header Server-Protocol \$server_protocol;
                    proxy_set_header Server-Name \$server_name;
                    proxy_set_header Server-Addr \$server_addr;
                    proxy_set_header Server-Port \$server_port;
                    proxy_set_header Upgrade \$http_upgrade;
                    proxy_set_header Connection \$connection_upgrade;
                    proxy_read_timeout 3600s;
                    proxy_send_timeout 3600s;
                    proxy_connect_timeout 3600s;
                    proxy_pass {$value['nginx_proxy']['proxy_pass']};
                }
                EOF
            );
        }
    }

    // 删除文件
    public static function deleteFiles($dir) {
        // 打开指定目录
        $handle = opendir($dir);
        // 遍历目录中的所有文件
        while (false !== ($entry = readdir($handle))) {
            if ($entry != "." && $entry != "..") {
                $path = $dir . DIRECTORY_SEPARATOR . $entry;
                // 如果该文件是一个文件（而不是子目录），则删除它
                if( !strpos($path,'.gitignore') ){
                    if (is_file($path)) {
                        unlink($path);
                    } else {
                        // 如果该文件是一个子目录，则递归删除其中的所有文件
                        self::deleteFiles($path);
                    }
                }
            }
        }
        // 关闭目录句柄
        closedir($handle);
    }
}
