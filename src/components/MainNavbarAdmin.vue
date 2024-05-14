<template>
    <nav class="navbar navbar-expand-lg shadow-lg primary-bg-custom">
        <div class="container-fluid">
            <RouterLink to="/">
                <img src="..\assets\Logo_de_navbar-removebg-preview.png" class="left-align img-fluid"
                    style="width: 16rem; height: 5rem" />
            </RouterLink>

            <div class="right-align">
                <div class="user-avatar" id="user">
                    <img src="../assets/Avatar.png" class="avatar" alt="Avatar">
                    <span class="username">Usuario</span>
                </div>
            </div>
        </div>
    </nav>
</template>

<style scoped>
.primary-bg-custom {
    background-color: green;
}

#user {
    position: relative;
    left: -50%;
}

.user-avatar {
    display: flex;
    align-items: center;
}

.avatar {
    width: 60px; 
    height: 60px; 
    border-radius: 50%;
    margin-right: 10px;
}

.username {
    color: white;
    font-weight: bold;
    font-size: 1.2rem;
}
</style>

<!-- Parte Lógica -->
<script setup>

</script>
