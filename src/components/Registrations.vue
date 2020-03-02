<template>
    <div>
        <h3>Registrations</h3>
        <div v-for="registration in registrations" v-bind:key="registration.userId">
            <h3>{{registration.name}}</h3>
            <button v-on:click="unregister(registration)">Unregister</button>
        </div>
    </div>
</template>
<script>
export default {
    name:'registrations',
    computed:{
        registrations(){
            return this.$store.getters.registrations;
        }
    },
    methods:{
        unregister(registration){
            this.$store.commit('unregister', registration.userId)
        }
    }
}
</script>
<style scoped>
button{
    background-color: red;
    color: white;
}
</style>