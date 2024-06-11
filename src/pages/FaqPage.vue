<template>
    <div class="page-container">
        <MainNavbar />

        <div class="container-fluid p-3 mt-5 mb-5" id="seccion-faq">
            <h4>Preguntas frecuentes</h4>
            <br />
            <div class="row justify-content-center p-3" id="justificado">
                <div>
                    <!--Pregunta-->
                    <button @click="toggleAnswer(1)" class="button-answer w-100">
                        <h6><strong>Q:</strong> ¿Qué es un servidor VPS y cómo funciona?</h6>
                    </button>
                    <!--Respuesta-->
                    <p v-if="showAnswer[1]" class="content-answer p-2">
                        <strong>A:</strong> Un servidor VPS es como tener tu propio espacio
                        en internet. Funciona compartiendo un gran servidor en partes más
                        pequeñas, como apartamentos en un edificio. Cada parte es
                        independiente y te ofrece recursos como si fuera tu propio servidor,
                        pero a un costo más bajo que uno dedicado. Es una manera flexible y
                        económica de alojar tu sitio web o aplicaciones en línea.
                    </p>
                </div>
                <br> <br>
                <div>
                    <!--Pregunta-->
                    <button @click="toggleAnswer(2)" class="button-answer w-100">
                        <h6>
                            <strong>Q:</strong> ¿Es posible escalar los recursos (como CPU, RAM,
                            almacenamiento) en el futuro si lo necesito?
                        </h6>
                    </button>
                    <!--Respuesta-->
                    <p v-if="showAnswer[2]" class="content-answer p-2">
                        <strong>A:</strong> Sí, en la mayoría de los casos, es posible
                        escalar los recursos de tu servidor VPS según tus necesidades. Esto
                        significa que si en algún momento necesitas más potencia de
                        procesamiento, memoria RAM o espacio de almacenamiento, puedes
                        solicitar una actualización de tu plan. Nuestro equipo técnico
                        estará disponible para ayudarte con este proceso y asegurarse de que
                        tu servidor tenga los recursos adecuados para satisfacer tus
                        requisitos en todo momento.
                    </p>
                </div>
                <br> <br>
                <div>
                    <!--Pregunta-->
                    <button @click="toggleAnswer(3)" class="button-answer w-100">
                        <h6>
                            <strong>Q:</strong> ¿Cuáles son las ventajas de un servidor VPS
                            sobre otras opciones de alojamiento?
                        </h6>
                    </button>
                    <!--Respuesta-->
                    <p v-if="showAnswer[3]" class="content-answer p-2">
                        <strong>A:</strong> Un servidor VPS es una opción de alojamiento que
                        ofrece más privacidad y control que el alojamiento compartido. Te
                        brinda tus propios recursos dedicados, lo que significa que no te
                        verás afectado por otros usuarios en el servidor. Además, puedes
                        ajustar fácilmente los recursos según tus necesidades. En pocas
                        palabras, un servidor VPS te da más flexibilidad y rendimiento que
                        otras opciones de alojamiento compartido.
                    </p>
                </div>
                <br> <br>
                <div>
                    <!--Pregunta-->
                    <button @click="toggleAnswer(4)" class="button-answer w-100">
                        <h6>
                            <strong>Q:</strong> ¿Cómo se factura el servicio? ¿Es mensual, anual
                            u otro tipo de plan?
                        </h6>
                    </button>
                    <!--Respuesta-->
                    <p v-if="showAnswer[4]" class="content-answer p-2">
                        <strong>A:</strong> Ofrecemos flexibilidad en la facturación para
                        adaptarnos a las necesidades de nuestros clientes. Tenemos opciones
                        de facturación mensual, trimestral, semestral y anual. Esto
                        significa que puedes elegir la duración que mejor se ajuste a tus
                        necesidades y presupuesto. Si prefieres pagar mes a mes para mayor
                        flexibilidad, o si deseas aprovechar descuentos por compromisos a
                        largo plazo, tenemos opciones para ti.
                    </p>
                </div>
            </div>
        </div>

        <div class="main-about-us">
            <MainAboutUs />
        </div>
    </div>
</template>

<style scoped>

#seccion-faq {
    background-color: #0084FF;
    color: #F5F5F5;
    flex: 1;
}

.button-answer {
    color: #043d6c;
    border: 1px solid white;
    border-radius: 5px 5px 0 0;
    text-align: left;
}

.content-answer{
    border: 1px solid white;
    border-radius: 0 0 5px 5px;
}

#justificado {
    text-align: justify;
}
</style>

<script setup>
import { ref } from 'vue';

import MainNavbar from '@/components/MainNavbar.vue';
import MainAboutUs from '@/components/MainAboutUs.vue';

const showAnswer = ref([]);

const toggleAnswer = (index) => {
    showAnswer.value[index] = !showAnswer.value[index];
};
</script>