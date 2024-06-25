<template>
    <div>
        FriendsView
        <article v-for="friend in getFriends()">
            <section :style="{border: `3px solid ${friend.gender == 'male'? 'gold':'green'}`}">
                {{friend}}

            </section>
        </article>
    </div>
</template>
<script>
export default {
    methods:{
        getFriends(){
            return this.$store.state.friends
        }
    },computed: {
    getInfo() {
      this.$store.dispatch("getInfo");
    },
  },
  mounted() {
    this.getInfo;
  },
}
</script>
<style>
    
</style>