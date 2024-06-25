<template>
    <div v-if="typeof passedData == 'object'">
        <slot name="make"></slot>
        <p>{{passedData.model}}</p>
        <p>{{passedData.color}}</p>
        <p>{{passedData.year}}</p>
        <slot></slot>
    </div>
    <div v-else>
        <slot name="head"></slot>
        <p>{{consoleProps.manufacturer}}</p>
        <p>{{consoleProps.release_year}}</p>
        <p>{{consoleProps.price}}</p>
        <slot></slot>
    </div>
</template>

<script>
export default {
    props:['passedData','consoleProps']
}
</script>

<style>

</style>