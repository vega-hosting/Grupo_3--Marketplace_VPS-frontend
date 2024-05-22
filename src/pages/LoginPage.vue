<template>
    <!--contenedor login-->
    <div class="container-fluid">
        <div class="row justify-content-center align-items-center vh-100">
            <div class="col-md-8">
                <div class="card card-body" id="card">
                    <div class="row align-items-center" id="row">
                        <!--formulario credenciales-->
                        <div class="col-md-6 mb-3 mb-md-0">
                            <form @submit.prevent="login">
                                <!--entrada username-->
                                <div class="mb-3">
                                    <label for="username" class="form-label text-sm text-white">Nombre de
                                        usuario</label>
                                    <input type="text" id="username" v-model="username" required class="form-control"
                                        placeholder="Ingrese el nombre de usuario">
                                </div>
                                <!--entrada password-->
                                <div class="mb-3">
                                    <label for="password" class="form-label text-sm text-white">Contraseña</label>
                                    <input type="password" id="password" v-model="password" required
                                        class="form-control" placeholder="Ingrese la contraseña">
                                </div>
                                <div v-if="error" class="text-danger mt-3">{{ error }}</div>
                            </form>
                        </div>
                        <!--contenedor en columna para la imagen y el boton de inicio sesion-->
                        <div class="col-md-6 mb-3 mb-md-0">
                            <img src="../assets/loginVegaHosting.png" id="img" alt="Imagen" class="img-fluid mb-3">
                            <div class="text-center">
                                <button @click="login" class="btn fw-bold btn-light rounded" id="btn">
                                    Iniciar sesión
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            username: '',
            password: '',
            error: ''
        };
    },
    methods: {
        async login() {
            try {
                const response = await axios.get('http://localhost:3000/user');
                const users = response.data;
                const user = users.find(user => user.name === this.username && user.password === this.password);
                if (user) {
                    sessionStorage.setItem('userId', user.id);
                    this.$router.push('/plans');
                } else {
                    this.error = 'Nombre de usuario o contraseña incorrectos';
                }
            } catch (error) {
                this.error = 'Error al cargar los datos de usuario';
            }
        }
    }
};
</script>

<style>
#card {
    background-color: rgb(16, 28, 84);
    border-radius: 25px;
    padding: 20px;
    width: 90%;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
}

#btn {
    margin-top: 1rem;
    position: relative;
    top: -30px;
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
