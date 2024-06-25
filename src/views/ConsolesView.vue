<template>
  Consoles View

  <section>
    <article id="comp" v-for="console in consoles()" :key="console.name">
   
        <card-comp-vue :console-props="console">
            <template #head>
                <h1>{{console.name}}</h1>
            </template>
            
            <template #default>
                <h1>Best Seller:{{console.best_selling_game}}</h1>
            </template>
        </card-comp-vue>
    </article>
  </section>
</template>
<script>
import CardCompVue from "@/components/CardComp.vue";
export default {
  components: {
    CardCompVue,
  },
  methods: {
    consoles() {
      return this.$store.state.consoles;
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
<style>
#comp {
    width: 200px;
    height: 250px;
    border: 3px solid brown;
    border-radius: 10%;
    margin-top: 10px;
}
section{
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(250px, 1fr));
}

</style>