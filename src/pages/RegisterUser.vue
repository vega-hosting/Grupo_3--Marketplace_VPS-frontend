<template>
    <section class="page-container pl-2">
        <div class="container m-auto">
            <div class="row">
                <div class="col-10 d-flex justify-content-center align-items-center bg-custom">
                    <div class="col-md-10 p-3">
                        <form>
                            <div class="row p-custom">
                                <div class="col-md-6">
                                    <!--Nombre completo del usuario-->
                                    <div class="mb-3">
                                        <label>Nombre completo</label>
                                        <br>
                                        <input type="text" class="p-2" placeholder="Nombre completo">
                                    </div>
                                    <!--Email del usuario-->
                                    <div class="mb-3">
                                        <label>Correo electrónico</label>
                                        <br>
                                        <input type="email" class="p-2" placeholder="Correo electrónico">
                                    </div>
                                    <!--N° de telefono-->
                                    <div class="mb-3">
                                        <label>N° Telefonico</label>
                                        <br>
                                        <input type="tel" class="p-2" placeholder="Número de telefono">
                                    </div>
                                    <!--Nombre de la compañia asociada al usuario-->
                                    <div class="mb-3">
                                        <label>
                                            Nombre de la compañía (Opcional)
                                        </label>
                                        <br>
                                        <input type="text" class="p-2" placeholder="Nombre de la compañia">
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <!--Ciudad del usuario-->
                                    <div class="mb-3">
                                        <label>Ciudad</label>
                                        <br>
                                        <input type="text" class="p-2" placeholder="Ciudad">
                                    </div>
                                    <!--Direccion del usuario-->
                                    <div class="mb-3">
                                        <label>Dirección</label>
                                        <br>
                                        <input type="text" class="p-2" placeholder="Dirección">
                                    </div>
                                    <!--contraseña del usuario-->
                                    <div class="mb-3">
                                        <label>Contraseña</label>
                                        <br>
                                        <input type="password" class="p-2">
                                    </div>
                                    <!--confirmacion de la contraseña del usuario-->
                                    <div class="mb-3">
                                        <label>
                                            Confirmar contraseña
                                        </label>
                                        <br>
                                        <input type="password" class="p-2">
                                    </div>
                                </div>
                            </div>
                            <div class="col ">
                                <button type="submit" class="btn btn-light m-4" id="registration-button">Registrar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.bg-custom {
    background: linear-gradient(#0084FF, #0084FF, #0AD3FF);
    border-radius: 30px;
}
input {
    width: 90%;
    border: none;
    border-radius: 5px;
}

label{
    color: white;
    font-weight: 600;
    font-size: large;
}
.p-custom{
    padding: 24px 4px 24px 4px;
}
.pl-2{
    padding-left: 11%;
}
#registration-button {
    color: #07155E;
    border: none;
    font-weight: 700;
    font-size: large;
    float: right;
    padding-left: 20px;
    padding-right: 20px;
    font-family: Arial, Helvetica, sans-serif;
}

#registration-button:hover {
    background-color: #07155E;
    color: white;
    border: none;
    font-weight: 700;
    font-size: large;
    float: right;
    padding-left: 20px;
    padding-right: 20px;
    font-family: Arial, Helvetica, sans-serif;
}
</style>

<script setup>

</script>