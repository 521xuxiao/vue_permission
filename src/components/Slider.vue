<template>
    <div>
        <el-menu router>
            <template v-for="(item, index) in $store.state.menuList">
                <MenuItem :item="item" :key="index"></MenuItem>
            </template>
        </el-menu>
    </div>
</template>

<script>
    import MenuItem from "./MenuItem"
    export default {
        name: "Slider",
        components: {
            MenuItem
        },
        mounted() {
            console.log(this.$store.state.menuList)
        }
    }
</script>

<style scoped>
.el-menu{
    height: 100%;
}
</style>
