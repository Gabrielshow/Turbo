<template>
    <div>
        <h1>Email Settings </h1>
        <form @submit.prevent>
            <label> Password: </label>
            <input type="password" v-model="password" />
            <br/>
            <label> Confirm Password: </label>
            <input type="password" v-model="confirmPassword"/>
            <br/>
            <button type="submit">Update</button>

        </form>
    </div>
</template>

<script>
export default {
    data () {
        return {
            password: "",
            confirmPassword: "",
        };
    },
    methods: {
        // updateSetting(){
        //     const mail = new PHPMailer();
        //     mail.updateSettings(this.password, this.confirmPassword);
        // },
    },
}
</script>