<template>
    <div className="navbar">
        <div className="logo-container">
            <button className="menu" @click="handleSidebar"> place</button>
            <AppLogo />
        </div>
        <div class="group">
            <input placeholder="Search mail" v-model="query"/>
            <button> Signup </button>
            <button class="login"> Login
            </button>
        </div>
    </div>

</template>

<script>

import AppLogo from '@/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  },
  emit: 'close-sidebar',
  methods: {
        closeSidebar() {
            this.$emit('close-sidebar');
        }
},
    data() {
        return {
            query: '',
            isSidebarOpen: true,
        };
        }
}

</script>


<style scoped>
.navbar {
    width: 100vw;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    gap: 40px;
    justify-content: space-between;
    background-color: #f0f0f0;
    border-bottom: 1px solid #ccc;
}

.logo-container {
    display: flex;
    flex-direction: row;
    gap: 16px;
    justify-content: space-between;
}

.menu {
    border-radius: 50%;
    height: 50px;
    width: 50px;
    cursor: pointer;

}

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