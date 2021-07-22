<template>
    <div class="pox">
        <div class="pox_left">
            header
        </div>
        <div class="pox_right" @click="outLogin">登出</div>
    </div>
</template>

<script>
    export default {
        name: "Header",
        methods: {
            outLogin() {
                // 清空session里面的数据
                sessionStorage.clear();
                // 清空vuex里面的token
                this.$store.commit("CLEAR_TOKEN");
                // 清空vuex里面的路由权限
                this.$store.commit("CLEAR_PERMISSIONS");
                // 清空vuex里面的菜单
                this.$store.commit("CLEAR_MENUS");
                this.$router.replace("/login");
                this.$message.success("退出登录成功");
                setTimeout(()=>{
                    window.location.reload();
                }, 800);
            }
        }
    }
</script>

<style scoped lang="scss">
.pox{
    display: flex;
    justify-content: space-between;
    align-items: center;
    .pox_left{
        /*float: left;*/
    }
    .pox_right{
        padding-right: 20px;
        user-select: none;
        cursor: pointer;
    }
}
</style>
