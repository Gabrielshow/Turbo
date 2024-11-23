<template>
  <div class="main">
    <AppNavbar />
  </div>
  <Sidebar @show-modal="showModal = true" />
  <div class="inview">

    <router-view />
  </div>
  <ComposeEmail v-if="showModal" :show="showModal" @close="showModal = false" />
</template>

<script setup>
import AppNavbar from '@/components/AppNavbar.vue'
// import AppLogo from '@/components/AppLogo.vue'
import Sidebar from '@/components/Sidebar.vue'
import ComposeEmail from '@/components/ComposeEmail.vue'

import { ref } from 'vue'

const showModal = ref(false)

</script>

<style scoped>
.main {
  width: 100vw;
  background: linear-gradient(to right, white, grey);
  height: 80px;
  /* border-left: 5px solid Purple; */
}

.inview {
  height: calc(100vh - 80px);
  width: 80%;
  border-radius: 12px;
}
</style>