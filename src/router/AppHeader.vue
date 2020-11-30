<template>
    <div>
        <button v-show="loggedIn">Logout</button>
    </div>
</template>

<script>
export default {
    //name: 'component-name',
    //parent: '',
    components: {},
    directives: {},
    filters: {},
    mixins: [],
    props: {},
    data: function () 
    { 
        return {
            loggedIn: false
        } 
    },
    computed: {},
    watch: {},
    beforeCreate: function () {},
    created: function () {},
    beforeMount: function () {},
    mounted: function () {},
    beforeUpdate: function () {},
    updated: function () {},
    activated: function () {},
    deactivated: function () {},
    beforeDestroy: function () {},
    destroyed: function () {},
    methods: {},
}
</script>

<style lang="scss" scoped>
    
</style>