<template>
    <div>
        <h1>Home</h1>
        <button @click="goToMenu" class="btn btn-success">提交</button>
    </div>
</template>
<script>
export default {
    methods:{
        goToMenu(){

            //设置点击返回跳转到上一页
            // this.$router.go(-1)

            //制定跳转的地址
            // this.$router.replace('/menu')

            //制定跳转到路由的名字下
            // this.$router.replace({name:'menuLink'})

            //通过push进行跳转
             this.$router.push('/menu?id=1')
            // this.$router.push({name:'menuLink'})
        }
    }
}
</script>
