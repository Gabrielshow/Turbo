<template>
    <div class="logo"> 
        <h1>Turbo</h1>
    </div>
</template>

<script></script>
<style>
.logo h1{
    background: linear-gradient(to right, #489, #781, #201);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    transition: all 0.3s ease-in-out;
}

.logo h1:hover {
  background: linear-gradient(to right, #424, #398);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  backdrop-filter: blur(5px);
  transition: all 0.3s ease-in-out;
}
</style>