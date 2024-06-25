<template>
    <div>
        <!-- comment -->
        FriendsView
        <article v-for="friend in getFriends()" :key="friend.id">
            <section :style="{border: `3px solid ${friend.gender == 'male'? 'gold':'green'}`}">
                {{friend.gender}}
                <p :style="{backgroundColor:`${}`}">{{friend.id}}</p>

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