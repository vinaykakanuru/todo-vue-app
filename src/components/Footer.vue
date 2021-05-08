<template>
    <footer>
        <p>Copyright &copy; 2021</p>
        <!-- If we use <a with href> tag then page reloads for About route so use vue-route -->
        <router-link to="/about">About</router-link>
    </footer>
</template>

<script>

</script>

<style scoped>
 a {
     color: #333,
 }

 footer{
     margin-top: 30px;
     text-align: center;
 }
</style>