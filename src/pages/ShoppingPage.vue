<template>
    <div class="page-container">
        <UserNavbar />

        <div class="container mt-3 mb-3">
            <div class="row">
                <div class="col-md-9">
                    <!--Info config server-->
                    <div class="col-md-11">
                        <div class="bg-info-server">
                            <p id="info-server">
                                <span class="fw-semibold">Hostname:</span>
                                <br /><br />
                                <span class="fw-semibold">Sistema operativo:</span>
                                <br /><br />
                                <span class="fw-semibold">vCore adicional:</span>
                                <br /><br />
                                <span class="fw-semibold">Memoria RAM adicional:</span>
                                <br /><br />
                                <span class="fw-semibold">Memoria de almacenamiento adicional:</span>
                            </p>
                        </div>
                    </div>
                    <!--Facturacion-->
                    <div class="col-md-12 mb-3">
                        <div class="row mt-3">
                            <div class="col-md-10">
                                <div class="row">
                                    <div class="col-md-3 mb-3">
                                        <div class="check-custom text-center">
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="billing"
                                                    value="1 Mes" />
                                                <label class="form-check-label">1 Mes</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-3 mb-3">
                                        <div class="check-custom text-center">
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="billing"
                                                    value="3 Mes" />
                                                <label class="form-check-label">3 Mes</label>
                                                <p class="mt-2 fw-semibold">Ahorras 8%</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-3 mb-3">
                                        <div class="check-custom text-center">
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="billing"
                                                    value="6 Mes" />
                                                <label class="form-check-label">6 Mes</label>
                                                <p class="mt-2 fw-semibold">Ahorras 15%</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-3 mb-3">
                                        <div class="check-custom text-center">
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="billing"
                                                    value="12 Mes" />
                                                <label class="form-check-label">12 Mes</label>
                                                <p class="mt-2 fw-semibold">Ahorras 25%</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--Info plan VPS-->
                <div class="col-md-3">
                    <div class="p-3 bg-info-plan">
                        <div class="p-4">
                            <div class="text-center">
                                <img src="../assets/carrito.png" class="img-fluid" id="cart-shop" />
                            </div>
                            <br>
                            <div>
                                <h4 class="text-center fw-semibold">Plan: VPS-2</h4>
                                <ul>
                                    <li>vCore: 2</li>
                                    <li>RAM: 4GB</li>
                                    <li>Espacio: 60 GB SSD</li>
                                    <li>Velocidad: 500 Mbit/s</li>
                                </ul>
                            </div>
                            <div class="text-center">
                                <img src="../assets/Icono plan.png" class="img-fluid" id="icon" />
                            </div>
                            <br>
                            <h4 class="text-center fw-semibold">$6.990 CLP</h4>
                            <div class="text-center">
                                <button class="btn btn-light" id="purchase-button">Comprar</button>
                            </div>
                        </div>
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
.bg-info-server {
    background: linear-gradient(#53C4FF, #7BC5EB);
    width: 100%;
    border-radius: 10px;
}

.bg-info-plan {
    background-color: #46BFFF;
    width: 100%;
    border-radius: 10px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 700;
}

#info-server {
    padding: 15px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: larger;
}

.check-custom {
    background-color: #07155E;
    color: white;
    width: 100%;
    height: 100%;
    padding: 25px;
    border-radius: 35px;
    font-family: Arial, Helvetica, sans-serif;
}

#cart-shop {
    height: 20%;
    width: 30%;
}

#icon {
    height: 100%;
    width: 50%;
}

#purchase-button {
    color: #07155E;
    font-family: Arial, Helvetica, sans-serif;
    font-size: x-large;
    font-weight: 700;
    border-radius: 25px;
}
</style>

<script setup>
import UserNavbar from '@/components/UserNavbar.vue';
import MainAboutUs from '@/components/MainAboutUs.vue';
</script>