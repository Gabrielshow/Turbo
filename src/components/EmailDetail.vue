<template>
    <div>
        <h1>{{ email.subject }}</h1>
        <p> From: {{ email.from }}</p>
        <p> To: {{ email.to }} </p>
        <p> {{ email.body }} </p>
    </div>
</template>

<script>
export default {
    props: {
        email: Object,
    },
};
</script>

<style scoped></style>
