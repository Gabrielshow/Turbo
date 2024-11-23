<template>
    <div>
        <div v-for="email in emails" :key="email.id">
            <h1>{{ email.subject }}</h1>
            <p> From: {{ email.from }}</p>
            <p> To: {{ email.to }} </p>
            <p> {{ email.body }} </p>
        </div>
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
    created() {
        this.fetchEmails(); 
    },
    methods: {
        async fetchEmails() {
            try {
                const response = await axios.get('http://localhost:3000/emails');
                this.emails = response.data;
            } catch (error) {
                console.error('Error fetching emails:', error);
            }
        },
    },
};
</script>

<style scoped></style>
