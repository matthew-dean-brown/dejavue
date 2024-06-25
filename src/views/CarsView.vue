<template>
    CarsView
  <section>
    <div id="comp" v-for="car in callCars()" :key="car.make">
      <card-comp-vue :passed-data="car">
        <template #make>
            <h1>{{car.make}}</h1>
        </template>
        <template #default>
            <h1>R{{car.price}}</h1>
        </template>
      </card-comp-vue>
    </div>
  </section>
</template>
<script>
import CardCompVue from "@/components/CardComp.vue";

export default {
  components: {
    CardCompVue,
  },
  methods: {
    callCars() {
      return this.$store.state.cars;
    },
  },
  computed: {
    getInfo() {
      this.$store.dispatch("getInfo");
    },
  },
  mounted() {
    this.getInfo;
  },
};
</script>
<style scoped>
#comp {
    width: 200px;
    height: 200px;
    border: 3px solid brown;
    border-radius: 10%;
    margin-top: 10px;
}

section{
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(250px, 1fr));
}
</style>