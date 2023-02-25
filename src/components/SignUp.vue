<template>
    <div>
        <img class="logo" src="../assets/resto-logo.jpg" />
        <h3>Sign Up</h3>
        <div class="register">
            <input type="text" placeholder="Enter Name">
            <input type="email" placeholder="Enter Email">
            <input type="password" placeholder="Enter Password">
            <button>Sign Up</button>
        </div>
    </div>
</template>

<script>
export default {
    name : "SignUp",
    
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