<template>
    <div>
        FriendsView
        <article>
            {{getFriends()}}
        </article>
    </div>
</template>
<script>
export default {
    methods:{
        getFriends(){
            return this.$store.state.friends
        }
    }
}
</script>
<style>
    
</style>