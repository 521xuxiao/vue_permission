<template>
    <div>
        <div class="wrap">
            <li>
                <span>用户名：</span>
                <el-input v-model="username"></el-input>
            </li>
            <li>
                <span>密码：</span>
                <el-input v-model="password"></el-input>
            </li>
            <li>
                <el-button @click="login">登录</el-button>
            </li>
        </div>
    </div>
</template>

<script>
    import {logins} from "@/api/index.js";
    export default {
        name: "Login",
        data() {
            return{
                username: '',
                password: ''
            }
        },
        methods: {
            async login() {
                let data = await logins(this.username);
                console.log(data.token);
                this.$store.commit("SET_TOKEN", data.token);
                this.$router.replace("/");
            }
        }
    }
</script>

<style scoped lang="scss">
.wrap{
    width: 600px;
    border: 1px solid #999;
    margin: 200px auto 0;
    padding: 200px 100px;
    li{
        margin: 10px 0;
    }
}
</style>
