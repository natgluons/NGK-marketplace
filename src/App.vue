<template>
    <!-- 1 -->
    <div id="app" style="background-color: #f4f4f4; height:100%">
        <!-- 2 -->
        <div
            style="width: 100%; max-width: 500px; height: 100%; position: fixed; left: 50%; transform: translateX(-50%); background-color: #fff; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
            <Header />
            <div style="height: calc(100% - 75px); width: 100%;">
                <router-view />
            </div>
            <div style="bottom: 0; position: fixed; width: 100%;">
                <NavBar />
            </div>
        </div>
    </div>
</template>

<script>
import Header from './components/Header.vue';
import NavBar from './components/NavBar.vue';

export default {
    name: 'App',
    components: {
        Header,
        NavBar
    }
};
</script>

<style>
/* Global styles can go here */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}
</style>
