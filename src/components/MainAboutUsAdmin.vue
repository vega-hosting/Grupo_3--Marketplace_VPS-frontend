<template>
    <footer class="container-fluid align-items-center bg-footer">
        <div class="container-fluid text-white">
            <div class="row">
                <div class="col-4 text-start p-2">
                    <h5>Soporte técnico</h5>
                    <br />
                    <p>
                        <span class="fw-semibold">Número de contacto:</span> 780 2554 5940
                        <br />
                        <span class="fw-semibold">Correo electrónico:</span>
                        support@vegahosting.com
                    </p>
                </div>

                <div class="col-6 text-end p-2">
                    <br /><br />
                    <RouterLink to="/faq" class="text-white fw-semibold">Preguntas frecuentes</RouterLink>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>
.bg-footer {
    background-color: green;
}
</style>

<script setup>
</script>