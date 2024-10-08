<template>
  <div>
    <h1>Compose Email</h1>
    <form @submit.prevent="sendEmail">
      <label>To:</label>
      <input type="email" v-model="to" />
      <br />
      <label> Subject: </label>
      <input type="text" v-model="subject" />
      <br />
      <label>Body:</label>
      <textarea v-model="body"></textarea>
      <br />
      <button type="submit">Send</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      to: "",
      subject: "",
      body: "",
    };
  },
  methods: {
    sendEmail() {
      const mail = {
        to: this.to,
        subject: this.subject,
        body: this.body,
      };
      axios.post('/api/send-email', mail)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
}
</script>