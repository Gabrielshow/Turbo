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
export default {
    data() {
        return {
            emails: [
                {
                    id: 1, subject: "Email 1"
                },
                { id: 2, subject: "Email 2" },
                {
                    id: 3, subject: "Email 3"
                },
            ],
        };
    },
};

</script>

<style></style>