<template>
  <div class="modal" v-if="show">
    <div class="modal-content">
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
      <button @click="$emit('close')">Close</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: {
    show: {
      type: Boolean,
      required: true,
    },
  },
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
      axios.post('https://turbo-backend-58if.onrender.com/send-email', mail)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 500px;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  z-index: 1000;
}

.modal-content {
  width: 100%;
  height: 100%;
  padding: 20px;
}
</style>