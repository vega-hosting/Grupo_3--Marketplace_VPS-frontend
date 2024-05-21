<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card bg-custom">
                    <div class="card-body">
                        <form @submit.prevent="addPlan">
                            <div class="row p-custom">
                                <div class="col-md-6">
                                    <!-- Nombre del plan -->
                                    <div class="form-group">
                                        <label for="name">Nombre del Plan</label>
                                        <input type="text" class="form-control" v-model="name"
                                            placeholder="Nombre del Plan" required>
                                    </div>
                                    <!-- vCore -->
                                    <div class="form-group">
                                        <label for="vcore">vCore</label>
                                        <input type="number" class="form-control" v-model="vcore" placeholder="vCore"
                                            required>
                                    </div>
                                    <!-- RAM -->
                                    <div class="form-group">
                                        <label for="ram">RAM (GB)</label>
                                        <input type="number" class="form-control" v-model="ram" placeholder="RAM (GB)"
                                            required>
                                    </div>
                                    <!-- Espacio de almacenamiento -->
                                    <div class="form-group">
                                        <label for="storage">Espacio de Almacenamiento (GB SSD)</label>
                                        <input type="number" class="form-control" v-model="storage"
                                            placeholder="Espacio de Almacenamiento" required>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <!-- Velocidad de conexión -->
                                    <div class="form-group">
                                        <label for="bus">Velocidad de Conexión (Mbit/s)</label>
                                        <input type="number" class="form-control" v-model="bus"
                                            placeholder="Velocidad de Conexión" required>
                                    </div>
                                    <!-- Precio -->
                                    <div class="form-group">
                                        <label for="price">Precio (CLP)</label>
                                        <input type="number" class="form-control" v-model="price" placeholder="Precio"
                                            required>
                                    </div>
                                    <!--Cantidad--->
                                    <div class="form-group">
                                        <label for="quantity">Cantidad (Planes)</label>
                                        <input type="number" class="form-control" v-model="quantity"
                                            placeholder="Cantidad servidores" required>
                                    </div>
                                </div>
                            </div>
                            <div class="text-center">
                                <button type="submit" class="btn fw-bold btn-light mt-4">Agregar Plan</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const name = ref('');
const vcore = ref(0);
const ram = ref(0);
const storage = ref(0);
const bus = ref(0);
const price = ref(0);
const quantity = ref(0);

async function addPlan() {
    try {
        const newPlan = {
            name: name.value,
            vcore: vcore.value,
            ram: ram.value,
            storage: storage.value,
            bus: bus.value,
            price: price.value,
            quantity: quantity.value
        };

        const response = await axios.get(`http://localhost:3000/plans`);
        const existingPlans = response.data;

        let existingPlan = existingPlans.find(plan =>
            plan.name === newPlan.name &&
            plan.vcore === newPlan.vcore &&
            plan.ram === newPlan.ram &&
            plan.storage === newPlan.storage &&
            plan.bus === newPlan.bus &&
            plan.price === newPlan.price
        );

        if (existingPlan) {
            existingPlan.quantity += newPlan.quantity;
            await axios.put(`http://localhost:3000/plans/${existingPlan.id}`, existingPlan);
        } else {
            await axios.post(`http://localhost:3000/plans`, newPlan);
        }

        router.push({ path: '/adminStock' });

    } catch (error) {
        console.error('Error al agregar el plan', error);
        alert('Ocurrió un error al agregar el plan');
    }
}
</script>

<style scoped>
.container {
    padding: 50px;
    position: relative;
    top: 150px;
    left: 10px
}

.card {
    border-radius: 25px;
}

.p-custom {
    padding: 24px 24px 4px;
}

.bg-custom {
    background-color: green;
}

label {
    color: white;
}

input {
    border-radius: 5px;
}
</style>
