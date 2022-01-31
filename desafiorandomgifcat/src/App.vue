<template>
  <div id="app">
    <section>
      <form>
        <div>
          <label for="idTittle">Escribe una palabra: </label>
          <input id="idTitle" type="text" v-model="title" />
        </div>
        <div>
          <label for="idFilter">Selecciona un filtro: </label>
          <select id="idFilter" v-model="filter">
            <option value="blur">blur</option>
            <option value="mono">mono</option>
            <option value="sepia">sepia</option>
            <option value="negative">negative</option>
            <option value="paint">paint</option>
            <option value="pixel">pixel</option>
          </select>
        </div>
        <div>
          <label for="idColor">Selecciona un color: </label>
          <select id="idColor" v-model="color">
            <option value="green">verde</option>
            <option value="red">rojo</option>
            <option value="blue">azul</option>
            <option value="yellow">amarillo</option>
          </select>
        </div>
        <div>
          <label for="idSize">Define un tamaño (300 queda bien): </label>
          <input id="idSize" type="text" v-model="size" />
        </div>
      </form>
    </section>
    <section>
      <button
        type="submit"
        @click="captureUserOptionsAndRunFunctionfetchApiUrlWithUserOptions"
      >
        Generar gato gift
      </button>
    </section>
    <section>
      <DisplayGiftCat v-bind:url="allOptionsCombined" />
    </section>
  </div>
</template>

<script>
import { fetchApiUrlWithUserOptions } from "./api/ApiConnectAndFetchCats.js";
import DisplayGiftCat from "./components/ComponentDisplayCat.vue";
export default {
  name: "App",
  components: {
    DisplayGiftCat,
  },
  data() {
    return {
      title: "",
      filter: "",
      color: "",
      size: "",
      allOptionsCombined: "",
    };
  },
  methods: {
    async captureUserOptionsAndRunFunctionfetchApiUrlWithUserOptions() {
      console.log("click on button ok");
      console.log(
        "1.captureUserOptionsAndRunFunctionfetchApiUrlWithUserOptions"
      );
      const { title, filter, color, size } = this;
      this.allOptionsCombined = await fetchApiUrlWithUserOptions(
        title,
        filter,
        color,
        size
      );
    },
  },
};
</script>

<style></style>
