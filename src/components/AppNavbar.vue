<template>
    <div class="group">
        <input placeholder="Search mail" v-model="query"/>
        <button> Signup </button>
        <button class="login"> Login
        </button>
    </div>

</template>

<script>
import { ref } from 'vue';
const query = ref("");

</script>


<style scoped>
.group {
    display: flex;
    justify-content: space-between;
    align-items: center;

}

button.group {
    outline: none;
    border: 1px solid linear-gradient(#434, #302, #908);
    border-radius: 2px;
    cursor: pointer;
    height: 40px;
    width: 20px;
}

button.group:hover {
    transform: scale(1.1);
}

button.group.login {
    background: turquoise;
}
</style>