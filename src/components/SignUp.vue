<template>
    <div>
        <img class="logo" src="../assets/resto-logo.jpg" />
        <h3>Sign Up</h3>
        <div class="register">
            <input type="text" placeholder="Enter Name" v-model="name">
            <input type="email" placeholder="Enter Email" v-model="email">
            <input type="password" placeholder="Enter Password" v-model="password">
            <button @click="signUp">Sign Up</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name : "SignUp",
    data() 
    {
        return {
            name: '',
            email: '',
            password: ''
        }
    },
    methods: {
        async signUp()
        {
            console.warn(this.name, this.email, this.password);

            let result = await axios.post('http://localhost:3000/user', {
                name : this.name,
                email: this.email,
                password: this.password
            });

            console.warn(result);

            if(result.status == 201){
                alert('Sign Up done');
            }

            localStorage.setItem("user-info", JSON.stringify(result.data ));
            this.$router.push({name: 'Home'})
        }
    }
    
}
</script>
<style>
    .logo {
        width: 200px;
        height: 200px;
    }
    .register input {
        display: block;
        margin: auto;
        width: 300px;
        height: 40px;
        margin-bottom: 30px;
        border: 1px solid skyblue;
    }

    .register button {
        width: 310px;
        height: 40px;
        color: white;
        background-color: skyblue;
        border: 1px solid skyblue;
        cursor: pointer;
    }
</style>