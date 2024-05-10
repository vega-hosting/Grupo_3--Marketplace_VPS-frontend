<template>
  <nav class="navbar navbar-expand-lg shadow-lg primary-bg-custom">
    <div class="container-fluid">
      <RouterLink to="/">
        <img src="..\assets\Logo de navbar.png" class="left-align img-fluid" style="width: 16rem; height: 5rem" />
      </RouterLink>

      <div class="right-align">
        <button @click="showPopover = !showPopover" class="btn btn-light btn-m fw-bold m-1 secondary-text">
          Iniciar sesión
        </button>

        <div v-if="showPopover" class="shadow-lg popover">
          <div class="text-white p-2 primary-bg-custom rounded-3">
            <img src="..\assets\Logo de navbar.png" class="img-fluid" id="img-popover" />
            <br /><br />
            <p class="text-center fw-semibold fs-6">Inicie sesión como</p>
            <p class="text-center">
              <RouterLink to="/login" class="btn fw-bold rounded-5" id="boton-usuario-popover">
                Usuario
              </RouterLink>
            </p>
            <p class="text-center">
              <RouterLink to="/loginAdmin" class="btn fw-bold rounded-5" id="boton-admin-popover">
                Administrador
              </RouterLink>
            </p>
          </div>
        </div>
        <RouterLink to="/register" class="btn btn-light btn-m fw-bold m-1 secondary-text">
          Registrarse
        </RouterLink>
      </div>
    </div>
  </nav>
</template>


<style scoped>
.primary-bg-custom {
  background-color: #07155e;
}

.secondary-text {
  color: #07155e;
}

.popover {
  position: absolute;
  border: 1px solid;
  margin: 15px 5px;
  z-index: 999;
  border-radius: 10px;
}

#boton-usuario-popover {
  background-color: #0AD3FF;
  width: 150px;
  height: 40px;
}

#boton-admin-popover {
  background-color: #73FF9A;
  width: 150px;
  height: 40px;
}
</style>

<!--Parte Logica-->
<script setup>
import { ref } from 'vue';

const showPopover = ref(false);
</script>