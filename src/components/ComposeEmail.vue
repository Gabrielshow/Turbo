<template>
  <div class="modal" v-if="show">
    <div class="modal-content">
      <div class="modal-header">
        <h1>Compose Email</h1>
        <button @click="$emit('close')">X</button>
      </div>
      <form @submit.prevent="sendEmail">
        <div class="modal-body">
          <div class="form-group">
            <label>To:</label>
            <input type="text" v-model="to" class="form-control"
              placeholder="Enter email addresses separated by commas" />
            <small class="text-danger" v-if="errors.to">{{ errors.to }}</small>
          </div>
          <div class="form-group">
            <label>Subject:</label>
            <input type="text" v-model="subject" class="form-control" />
            <small class="text-danger" v-if="errors.subject">{{ errors.subject }}</small>
          </div>
          <div class="form-group">
            <label>Body:</label>
            <textarea v-model="body" class="form-control" rows="15"></textarea>
            <small class="text-danger" v-if="errors.body">{{ errors.body }}</small>
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
// import axios from 'axios';
// import { validateEmail } from '../utils/validation';

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
      errors: {
        to: "",
        subject: "",
        body: "",
      },
    };
  },
  methods: {
    validateEmail(email) {
      const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return re.test(email);
    },
    sendEmail() {
      this.errors = {
        to: "",
        subject: "",
        body: "",
      };

      const toEmails = this.to.split(",");
      const emails = toEmails.map(email => email.trim());

      if (emails.length === 0) {
        this.errors.to = "Please enter at least one email address.";
        return;
      }

      for (const email of emails) {
        if (!this.validateEmail(email)) {
          this.errors.to = "Please enter valid email addresses separated by commas.";
          return;
        }
      }

      if (this.subject.length === 0) {
        this.errors.subject = "Please enter a subject.";
        return;
      }

      if (this.body.length === 0) {
        this.errors.body = "Please enter a message.";
        return;
      }

      if (window.Email) {
      window.Email.send({
      Host : "smtp.elasticemail.com",
      Username: "everythinggrand24@gmail.com",
      Password: "00A41F02DD997CCE5819B23FFA54533C9C95",
      To : this.to,
      From : "everythinggrand24@gmail.com",
      Subject : this.subject, 
      Body : this.body
      }).then(
        message => alert(message)
      );  
      this.$emit('close-modal');
      }

      // axios.post('http://localhost:8000/api/send-email', mail)
      //   .then((response) => {
      //     console.log(response.data);
      //     this.$emit('close-modal');
      //     alert('Email sent successfully!');
      //   })
      //   .catch((error) => {
      //     console.error(error);
      //     alert('Error sending email: ' + error.message);
      //   });
    },
}};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 80px;
  left: 30%;
  width: 70%;
  height: calc(100vh - 80px);
  /* Adjusted to take up the full height of the viewport minus the navbar height */
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 2px rgba(44, 88, 99, 0.2);
  z-index: 1000;
  overflow-y: auto;
  /* Added to make the modal window scrollable */
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
  box-shadow: none;
  /* outline: none; */
  transition: all 2s ease-in;

}

.form-control:focus {
  border-color: #aaa;
  box-shadow: 0 0 2px rgba(58, 155, 123);
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

.text-danger {
  color: red;
}
</style>