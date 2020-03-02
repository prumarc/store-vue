import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        registrations:[],
        users:[
            {id:1,name:'Marcos',register:false},
            {id:2,name:'Andres',register:false},
            {id:3,name:'Manuel',register:false},
            {id:4,name:'Luis',register:false}
        ]
    },
    getters: {
        unregisteredUsers(state){
            return state.users.filter(user => {
                return !user.register;
            });
        },
        registrations(state){
            return state.registrations;
        }
    },
    mutations:{
        register(state, userId){
            const user = state.users.find(user=>{
                return user.id == userId;
            });
            console.log(userId)
            user.register = true;
            const registration = {
                userId:userId, 
                name:user.name, 
                date:'2020-03-01 12:00:00'
            };
            state.registrations.push(registration);
        },
        unregister(state, userId){
            alert(userId)
            const user = state.users.find(user=>{
                return user.id == userId;
            });
            user.register = false;
            const registration = state.registrations.find(registration =>{
                return registration.userId == userId;
            });
            state.registrations.splice(state.registrations.indexOf(registration), 1);
        }
    }
});