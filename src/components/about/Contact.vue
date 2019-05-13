<template>
    <div class="card text-drak bg-light mb-3">
        <div class="card-header">联系我们</div>
        <div class="card-body">
            <h4 class="card-title">联系我们</h4>
            <p class="card-text">353737287@qq.com</p>
            <router-link :to="{name:'personName'}">电话</router-link>
            <router-link :to="{name:'phone'}">联系人</router-link>
            <router-view></router-view>
        </div>
    </div>
</template>

