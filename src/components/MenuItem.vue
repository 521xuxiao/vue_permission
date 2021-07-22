<template>
    <div>
        <el-submenu :index="item.name" v-if="item.children && item.children.length">
            <template slot="title">
                <i class="el-icon-location"></i>
                <span>{{item.meta.name}}</span>
            </template>
            <template v-for="(innerItem, innerIndex) in item.children" v-if="item.children && item.children.length">
                <MenuItem :item="innerItem" :key="innerIndex"></MenuItem>
            </template>
        </el-submenu>
        <template v-else>
            <el-menu-item :index="item.link || item.path">{{item.meta.name}}</el-menu-item>
        </template>
    </div>
</template>

<script>
    export default {
        name: "MenuItem",
        props: {
            item: Object
        }
    }
</script>

<style scoped>

</style>
