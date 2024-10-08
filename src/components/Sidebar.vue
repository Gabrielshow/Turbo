<template>
  <div class="sidebar">
    <button class="compose" @click="$emit('show-modal')">
      Compose
    </button>
    <ul>
      <li>
        <router-link to="{ name: 'Inbox' }">
          <i class="fa fa-inbox" aria-hidden="true"></i>
          Inbox
        </router-link>
      </li>
      <li>
        <router-link to="{ name: 'Starred' }">
          <i class="fa fa-star" aria-hidden="true"></i>
          Starred
        </router-link>
      </li>
      <li>
        <router-link to="{ name: 'Snoozed' }">
          <i class="fa fa-clock-o" aria-hidden="true"></i>
          Snoozed
        </router-link>
      </li>
      <li>
        <router-link to="{ name: 'Sent' }">
          <i class="fa fa-paper-plane" aria-hidden="true"></i>
          Sent
        </router-link>
      </li>
      <li>
        <router-link to="{ name: 'Drafts' }">
          <i class="fa fa-pencil" aria-hidden="true"></i>
          Drafts
        </router-link>
      </li>
      <li>
        <router-link to="{ name: 'Chats' }">
          <i class="fa fa-comment" aria-hidden="true"></i>
          Chats
        </router-link>
      </li>
      <li>
        <router-link to="{ name: 'Spam' }">
          <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
          Spam
        </router-link>
      </li>
      <li>
        <router-link to="{ name: 'Trash' }">
          <i class="fa fa-trash" aria-hidden="true"></i>
          Trash
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  emits: ['show-modal'],
};
</script>

<style scoped>
.sidebar {
  position: fixed;
  left: 0;
  width: 30%;
  height: 100vh;
  background-color: #f0f0f0;
  /* padding: 20px; */
  border-right: 1px solid #ccc;
}

.compose {
  margin-top: 4px;
  padding-top: 2px;
  margin-left: 4px;
  background: turquoise;
  box-shadow: 2px 2px 2px 1px grey;
  cursor: pointer;
  border-radius: 4px;
  outline: none;
  border: none;
  color: linear-gradient(to right, #489, #781, #201);
  height: 20px;
  transition: all 0.3s ease-in;
}

.compose:hover {
  transform: scale(1.2);
  box-shadow: 1px 1px 2px 1px linear-gradient(to right, #489, #781, #201);
}

li {
  list-style: none;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

li a {
  text-decoration: none;
  color: #333;
}

li a:hover {
  color: #666;
}

i {
  margin-right: 10px;
}
</style>