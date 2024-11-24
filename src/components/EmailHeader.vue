<template>
    <div class="email-header">
        <div @click="setActive"> Primary </div>
        <div @click="setActive"> Promotions </div>
        <div @click="setActive"> Social</div>
        <div @@click="setActive">  Updates </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            active: false,
        }
    }
}
</script>

<style>
.email-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #ccc;
}
</style>