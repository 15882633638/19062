<template>
<div id="box">
    <button v-on:click='href'>跳转界面</button>
</div>
    
</template>
<script>

export default {
    name:'newworld',
    methods: {
        href(){
          this.$router.push('./hello/789/post/123')
        }
    }
}
</script>
<style scoped>

    .box{
        width: 300px;
        height: 300px;
        background-color: green;
        font-size:30px;
        color: white;
        text-align: center;
        line-height: 300px
    }
</style>