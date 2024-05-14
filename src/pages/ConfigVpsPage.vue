<template>
    <div class="page-container">
        <UserNavbar />

        <div class="container m-auto">
            <div class="row">
                <div class="col-10 d-flex justify-content-center align-items-center bg-custom">
                    <div class="col-md-10 p-3">
                        <form>
                            <div class="row p-custom">
                                <h4 class="text-white mb-3">Configuración de servidor</h4>
                                <div class="col-md-6">
                                    <!--Hostname-->
                                    <div class="mb-5">
                                        <label>Hostname</label>
                                        <br>
                                        <input type="text" class="p-2" placeholder="Hostname" required>
                                    </div>
                                    <!--Sistema Operativo-->
                                    <div class="mb-5">
                                        <label>Sistema operativo</label>
                                        <br>
                                        <select class="form-select" required>
                                            <option selected>---</option>
                                            <option value="CentOs">CentOs</option>
                                            <option value="Debian">Debian</option>
                                            <option value="Ubuntu">Ubuntu</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <!--Password Admin-->
                                    <div class="mb-3">
                                        <label>Contraseña de administrador</label>
                                        <br>
                                        <input type="password" class="p-2" required>
                                    </div>
                                </div>
                            </div>
                            <div class="row p-custom">
                                <h4 class="text-white mb-3">Configuración opcional</h4>
                                <div class="col-md-6">
                                    <div class="mb-5">
                                        <label>(Opcional) Agregar vCore</label>
                                        <br>
                                        <select class="form-select">
                                            <option selected>---</option>
                                            <option value="1vCore $3.000 CLP">1vCore $3.000 CLP</option>
                                            <option value="2vCore $6.000 CLP">2vCore $6.000 CLP</option>
                                            <option value="3vCore $9.000 CLP">3vCore $9.000 CLP</option>
                                        </select>
                                    </div>
                                    <div class="mb-5">
                                        <label>(Opcional) Agregar RAM</label>
                                        <br>
                                        <select class="form-select">
                                            <option selected>---</option>
                                            <option value="2 GB $2.000 CLP">2 GB $2.000 CLP</option>
                                            <option value="4 GB $4.000 CLP">4 GB $4.000 CLP</option>
                                            <option value="6 GB $6.000 CLP">6 GB $6.000 CLP</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <label>(Opcional) Agregar memoria SSD</label>
                                    <br>
                                    <select class="form-select">
                                        <option selected>---</option>
                                        <option value="25 GB $2.000 CLP">25 GB $2.000 CLP</option>
                                        <option value="50 GB $4.000 CLP">50 GB $4.000 CLP</option>
                                        <option value="100 GB $8.000 CLP">100 GB $8.000 CLP</option>
                                    </select>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-light m-4" id="continue-button">
                                Continuar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <div class="main-about-us">
            <MainAboutUs />
        </div>
    </div>
</template>

<style scoped>
.bg-custom {
    background: linear-gradient(#0084ff, #0ad3fe);
    border-radius: 25px;
    margin: 5% 9%;
}

.p-custom {
    padding: 24px 4px 24px 4px;
}

h4 {
    font-weight: 700;
    font-family: Arial, Helvetica, sans-serif;
}

input {
    width: 90%;
    border: none;
    border-radius: 5px;
}

label {
    color: white;
    font-weight: 600;
    font-size: large;
}

select {
    width: 90%;
    border: none;
    border-radius: 5px;
}

#continue-button {
    color: #07155e;
    border: none;
    font-weight: 700;
    font-size: larger;
    float: right;
    padding-left: 20px;
    padding-right: 20px;
    font-family: Arial, Helvetica, sans-serif;
}

#continue-button:hover {
    background-color: #07155e;
    color: white;
    border: none;
    font-weight: 700;
    font-size: larger;
    float: right;
    padding-left: 20px;
    padding-right: 20px;
    font-family: Arial, Helvetica, sans-serif;
}
</style>

<script setup>
import UserNavbar from '@/components/UserNavbar.vue';
import MainAboutUs from '@/components/MainAboutUs.vue';
</script>