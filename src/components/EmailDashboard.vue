<template>
    <main class="main">
    <div> 
        
        <button class="compose">
        Compose
        </button>
        <ul>
            <router-link to='{name: EmailSetting}'><li> Settings </li></router-link>
        </ul>
    </div>
    <EmailList/>
    </main>

</template>

<script>
import EmailList from '@/components/EmailList.vue'
</script>

<style>
.compose {
    background: blue;
    box-shadow: 2px 2px 2px 1px grey;
}

</style>
