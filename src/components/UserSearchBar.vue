<template>
    <div class="search-bar">
        <input
            type="text"
            v-model="searchQuery"
            @input="emitSearchQuery"
            placeholder="Rechercher des utilisateurs..."
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
    margin-bottom: 4rem;
}
.search-bar input {
    padding: 10px;
    border: 1px solid #585454;
    background-color: #0f0f0f;
    border-radius: 5px;
    width: 22rem;
    color: var(--light-color);
    font-size: 16px;
}

@media (max-width: 468px) {
    .search-bar input {
        width: -webkit-fill-available;
    }
}
</style>
