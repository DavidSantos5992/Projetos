<template>
    <div class="default-box" :class="{highligth}">
        <slot/>
    </div>
</template>

<script>

    export default {
        props: {
            highligth: {
                type: Boolean,
                default: false,
            }
        }
    }

</script>

<style scoped>

.default-box {
      @apply flex items-center justify-center bg-red-200 h-52 w-full sm:rounded sm:shadow border-red-500;
}

.default-box.highligth {
    @apply bg-green-500
}

</style>