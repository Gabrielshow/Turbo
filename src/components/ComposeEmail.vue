<template>
  <div class="modal" v-if="show">
    <div class="modal-content">
      <div class="modal-header">
        <h1>Compose Email</h1>
        <button @click="$emit('close')">Close</button>
      </div>
      <form @submit.prevent="sendEmail">
        <div class="modal-body">
          <div class="form-group">
            <label>To:</label>
            <input type="email" v-model="to" class="form-control" />
          </div>
          <div class="form-group">
            <label>Subject:</label>
            <input type="text" v-model="subject" class="form-control" />
          </div>
          <div class="form-group">
            <label>Body:</label>
            <textarea v-model="body" class="form-control" rows="15"></textarea>
          </div>
        </div>
        <div class="modal-footer">
          <button type="submit" class="btn btn-primary">Send</button>
        </div>
      </form>
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
  top: 80px; 
  left: 30%; 
  width: 70%; 
  height: calc(100vh - 80px); /* Adjusted to take up the full height of the viewport minus the navbar height */
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  overflow-y: auto; /* Added to make the modal window scrollable */
}

.modal-content {
  width: 100%;
  height: 100%;
  padding: 20px;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
  border-bottom: 1px solid #ccc;
}

.modal-header h1 {
  font-size: 18px;
  font-weight: bold;
  margin: 0;
}

.modal-header button {
  background-color: #fff;
  border: none;
  padding: 10px;
  cursor: pointer;
}

.modal-body {
  padding: 20px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 10px;
}

.form-control {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.form-control:focus {
  border-color: #aaa;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.modal-footer {
  padding: 20px;
  border-top: 1px solid #ccc;
}

.btn {
  background-color: #4CAF50;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn:hover {
  background-color: #3e8e41;
}

.btn-primary {
  background-color: #4CAF50;
  color: #fff;
}
</style>