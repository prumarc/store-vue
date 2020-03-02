<template>
    <div>
        <h3>Users</h3>
        <div v-for="user in users" v-bind:key="user.id">
            <h4>{{user.name}}</h4>
            <button v-on:click="registerUser(user)">Register {{user.name}}</button>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    name:'users',
    computed: mapGetters({
            users:'unregisteredUsers'
        }),
    methods:{
        registerUser(user){
            this.$store.commit('register', user.id);
        }
    }
}
</script>
<style scoped>
li {
    font-size :14px;
    font-weight: bold;
}
</style>