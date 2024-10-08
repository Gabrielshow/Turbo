<template>
  <div>
    <h1>Inbox</h1>
    <ul>
      <li v-for="email in emails" :key="email.id">
        {{ email.subject }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      emails: [],
    };
  },
  mounted() {
    this.getEmails();
  },
  methods: {
    getEmails() {
      axios.get('http://localhost:3000/email')
        .then((response) => {
          this.emails = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>