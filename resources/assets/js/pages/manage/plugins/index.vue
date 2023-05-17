<template>
    <div class="page-setting">
        <iframe :src="menu?.path" frameborder="0" style="width: 100%;height: 100%;"></iframe>
    </div>
</template>

<script>
import {mapState} from "vuex";

export default {
    data() {
        return {
            menus:{}
        }
    },

    mounted() {
        console.log(this.menu)
    },

    computed: {
        ...mapState(['userInfo', 'userIsAdmin', 'clientNewVersion', 'plugins']),
    
        menu() {
            if(this.$route.name == 'manage-plugins') {
                this.menus = this.plugins.menus[this.$route.query.index]['position'][this.$route.query.type];
            }
            return this.menus
        }

    },

    watch: {
        
    },

    methods: {
        
    }
}
</script>
