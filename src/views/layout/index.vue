<template>
    <div id="wrap">
        <Header class="header"></Header>
        <Slider class="slider"></Slider>
        <Content class="box"></Content>
    </div>
</template>

<script>
    import Header from "@/components/Header"
    import Slider from "@/components/Slider"
    import Content from "@/components/content"
    export default {
        name: "Layout",
        components: {
            Header,
            Slider,
            Content
        }
    }
</script>

<style scoped lang="scss">
#wrap{
    height: 100vh;
    .header{
        position: fixed;
        width: 100%;
        height: 70px;
        background: aqua;
        top: 0;
        left: 0;
        z-index:3;
    }
    .slider{
        position: fixed;
        left: 0;
        top: 0;
        width: 200px;
        height: 100%;
        padding-top: 80px;
        z-index:2;
    }
    .box{
        position: fixed;
        height: 100%;
        width: 100%;
        left: 0;
        top: 0;
        padding: 80px 10px 10px 220px;
    }
}
</style>
