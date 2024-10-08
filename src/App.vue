<template>
  <div class="main">
    <AppLogo />
    <!-- <AppNavbar /> -->
  </div>

  <router-view />
</template>

<style scoped>
.main {
  margin: 0px 0px;
  padding: 0px 4px;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(to right, white, grey);
  height: 80px;
  /* border-left: 5px solid Purple; */
}
</style>

<script setup>
// import AppNavbar from '@/components/AppNavbar.vue'
import AppLogo from '@/components/AppLogo.vue'
// import AppHome from '@/components/AppHome.vue'
// import AppCard from '@/components/AppCard.vue'
</script>
