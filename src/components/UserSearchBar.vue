<template>
    <div class="search-bar">
        <input
            type="text"
            v-model="searchQuery"
            @input="emitSearchQuery"
            placeholder="Search users..."
        />
    </div>
</template>

<script>
export default {
    data() {
        return {
            searchQuery: "",
        };
    },
    methods: {
        emitSearchQuery() {
            this.$emit("search", this.searchQuery.trim().toLowerCase());
        },
    },
};
</script>

<style scoped>
.search-bar {
    margin-bottom: 20px;
}
input[type="text"] {
    /* width: 100%; */
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
}
</style>
