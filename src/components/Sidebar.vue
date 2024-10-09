<template>
  <div class="sidebar">
    <button class="compose" @click="$emit('show-modal')">
      Compose
    </button>
    <ul>
      <li>
        <router-link to="{ name: 'Inbox' }">
          <font-awesome-icon icon="fas fa-inbox" />
          Inbox
        </router-link>
      </li>
      <li>
        <router-link to="{ name: 'Starred' }">
          <font-awesome-icon icon="fas fa-star" />
          Starred
        </router-link>
      </li>
      <li>
        <router-link to="{ name: 'Snoozed' }">
          <font-awesome-icon icon="fas fa-clock" />
          Snoozed
        </router-link>
      </li>
      <li>
        <router-link to="{ name: 'Sent' }">
          <font-awesome-icon icon="fas fa-paper-plane" />
          Sent
        </router-link>
      </li>
      <li>
        <router-link to="{ name: 'Drafts' }">
          <font-awesome-icon icon="fas fa-pencil-alt" />
          Drafts
        </router-link>
      </li>
      <li>
        <router-link to="{ name: 'Chats' }">
          <font-awesome-icon icon="fas fa-comment" />
          Chats
        </router-link>
      </li>
      <li>
        <router-link to="{ name: 'Spam' }">
          <font-awesome-icon icon="fas fa-exclamation-circle" />
          Spam
        </router-link>
      </li>
      <li>
        <router-link to="{ name: 'Trash' }">
          <font-awesome-icon icon="fas fa-trash" />
          Trash
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
  emits: ['show-modal'],
  components: { FontAwesomeIcon },
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