<template>
  <div class="main">
    <AppLogo />
    <!-- <AppNavbar /> -->
  </div>
  <Sidebar @show-modal="showModal = true" />
  <router-view />
  <ComposeEmail v-if="showModal" :show="showModal" @close="showModal = false" />
</template>

<script setup>
// import AppNavbar from '@/components/AppNavbar.vue'
import AppLogo from '@/components/AppLogo.vue'
import Sidebar from '@/components/SideBar.vue'
import ComposeEmail from '@/components/ComposeEmail.vue'

import { ref } from 'vue'

const showModal = ref(false)
</script>

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