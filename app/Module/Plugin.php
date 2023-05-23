<?php

namespace App\Module;


/**
 * 插件
 */
class Plugin
{
    /**
     * 生成 DockerCompose.yml
     */
    public static function generateDockerCompose()
    {
        $json = file_get_contents(base_path('plugin/plugin.conf.json'));
        $json = json_decode($json,true);

        // DockerCompose
        $ipd = 20;
        $appId = env('APP_ID');
        $appIppr = env('APP_IPPR');
        $array = [];
        $dockerCompos = file_get_contents(base_path('docker-compose.yml'));
        foreach ( $json['dockerCompose'] as $name => $value){

            if( strpos($dockerCompos,"{$name}:") ){
                return false;
            }

            $ipd = $ipd + 1;
            $arr = [
                <<<EOF
                  {$name}:
                    container_name: "dootask-$name-{$appId}"
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
                    // dump($val);
                    // $val
                    $environment[] = <<<EOF
                          {$key}:{$val}
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
                        ipv4_address: "{$appIppr}.{$ipd}"
                    restart: unless-stopped
                EOF;
            
            $array[] = implode("\n", $arr);
        }
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
        foreach ( $json['dockerCompose'] as $name => $value){
            $file_path =  base_path("docker/nginx/conf.d/plugin/{$name}.conf");
            if (file_exists($file_path)) unlink($file_path);
            file_put_contents( $file_path ,
                <<<EOF
                location /$name/ {
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
                    proxy_pass http://$name/;
                }
                EOF
            );
        }
    }
}
