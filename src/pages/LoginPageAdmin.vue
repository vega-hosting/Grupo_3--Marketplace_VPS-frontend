<template>
    <div class="container-fluid">
        <div class="row justify-content-center align-items-center vh-100">
            <div class="col-md-8">
                <div class="card card-body" id="card-body">
                    <div class="row align-items-center" id="row">
                        <div class="col-md-6 mb-3 mb-md-0">
                            <form @submit.prevent="loginAdmin">
                                <div class="mb-3">
                                    <label for="username" class="form-label text-sm text-white">Nombre de
                                        usuario</label>
                                    <input type="text" id="username" v-model="username" required class="form-control"
                                        placeholder="Ingrese el nombre de usuario">
                                </div>
                                <div class="mb-3">
                                    <label for="password" class="form-label text-sm text-white">Contraseña</label>
                                    <input type="password" id="password" v-model="password" required
                                        class="form-control" placeholder="Ingrese la contraseña">
                                </div>

                            </form>
                        </div>
                        <div class="col-md-6 mb-3 mb-md-0">
                            <img src="../assets/loginVegaHosting.png" id="img" alt="Imagen" class="img-fluid mb-3">
                            <div class="text-center">
                                <p class="text-center">
                                    <RouterLink to="/adminGestion" class="btn fw-bold btn-light rounded" id="boton-admin">
                                        Iniciar sesion
                                    </RouterLink>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
#card-body {
    background-color: green;
    border-radius: 25px;
    padding: 20px;
    width: 90%;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
}

#boton-admin {
    width: 150px;
    height: 40px;
    position: relative;
    top: -1rem;
}

#img {
    width: 80%;
    position: relative;
    left: 10%;
}

#row {
    position: relative;
    left: 5%;
}
</style>
