<template>
<div class="setting-item">
    <div class="search-box">
        <div class="search-box-left">
                <Select style="width: 200px;" v-model="searchData.theme" :placeholder="$L('选项类型')">
                    <Option v-for="(item, index) in typeList" :value="item.value" :key="index">{{$L(item.name)}}</Option>
                </Select>
            <Select style="width: 200px;" v-model="searchData.theme" :placeholder="$L('全部状态')">
                <Option v-for="(item, index) in statusList" :value="item.value" :key="index">{{$L(item.name)}}</Option>
            </Select>
                <Input style="width: 200px;" v-model="searchData.remark" search :placeholder="$L('搜索')"/>
        </div>





        <Icon type="md-refresh" size="20"/>
    </div>
    <Divider />
    <Row class="plugin-row" :gutter="16">
        <Col :xxl="8" :xl="12" :lg="24">
            <div class="plugin-box">
                <div class="plugin-box-top">
                    <imgView class="img-icon" src="images/logo.png"></imgView>
                    <div class="plugin-title">
                        <h3>Dootask</h3>
                        <h4>轻量级的开源在线项目任务管理工具</h4>
                    </div>
                    <Button type="primary" ghost>安装</Button>
                </div>
                <div class="plugin-box-bottom">
                    <Tag color="green">green</Tag>
                </div>
            </div>
        </Col>

        <Col :xxl="8" :xl="12" :lg="24">
            <div class="plugin-box">
                <div class="plugin-box-top">
                    <imgView class="img-icon" src="images/logo.png"></imgView>
                    <div class="plugin-title">
                        <h3>Dootask</h3>
                        <h4>轻量级的开源在线项目任务管理工具</h4>
                    </div>
                    <Button type="primary" ghost>安装</Button>
                </div>
                <div class="plugin-box-bottom">
                    <Tag color="green">green</Tag>
                </div>
            </div>
        </Col>

        <Col :xxl="8" :xl="12" :lg="24">
            <div class="plugin-box">
                <div class="plugin-box-top">
                    <imgView class="img-icon" src="images/logo.png"></imgView>
                    <div class="plugin-title">
                        <h3>Dootask</h3>
                        <h4>轻量级的开源在线项目任务管理工具</h4>
                    </div>
                    <Button type="primary" ghost>安装</Button>
                </div>
                <div class="plugin-box-bottom">
                    <Tag color="green">green</Tag>
                </div>
            </div>
        </Col>

        <Col :xxl="8" :xl="12" :lg="24">
            <div class="plugin-box">
                <div class="plugin-box-top">
                    <imgView class="img-icon" src="images/logo.png"></imgView>
                    <div class="plugin-title">
                        <h3>Dootask</h3>
                        <h4>轻量级的开源在线项目任务管理工具</h4>
                    </div>
                    <Button type="primary" ghost>安装</Button>
                </div>
                <div class="plugin-box-bottom">
                    <Tag color="green">green</Tag>
                </div>
            </div>
        </Col>

        <Col :xxl="8" :xl="12" :lg="24">
            <div class="plugin-box">
                <div class="plugin-box-top">
                    <imgView class="img-icon" src="images/logo.png"></imgView>
                    <div class="plugin-title">
                        <h3>Dootask</h3>
                        <h4>轻量级的开源在线项目任务管理工具</h4>
                    </div>
                    <Button type="primary" ghost>安装</Button>
                </div>
                <div class="plugin-box-bottom">
                    <Tag color="green">green</Tag>
                </div>
            </div>
        </Col>
    </Row>
</div>
</template>

<script>
export default {
    name: "plugin",
    data(){
        return{
            searchData:{
                remark:'',
            },

            typeList:[],
            statusList:[],
        }
    },
}
</script>

<style scoped lang="scss">
.search-box{
    display: flex;
    justify-content: space-between;
    align-items: center;
    .search-box-left{
        display: flex;
        gap: 16px;
    }
    i{
        cursor: pointer;
    }
}
.ivu-divider{
    background: #F4F4F5;
}
.plugin-row{
    .ivu-col{
        margin-bottom: 16px;
    }
    .plugin-box{
        padding: 24px;
        border: 1px solid #F4F4F5;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        gap: 16px;
        .plugin-box-top{
            display: flex;
            gap: 16px;
            .img-icon{
                width: 60px;
                height: 60px;
            }
            .plugin-title{
                h3{
                    font-size: 18px;
                    margin-bottom: 8px;
                }
                h4{
                    font-size: 14px;
                    font-weight: normal;
                    color: #909399;
                }
            }
            .ivu-btn-primary{
                margin-left: auto;
            }
        }
        .plugin-box-bottom{
            padding-left: 76px;
        }
    }
}

</style>
