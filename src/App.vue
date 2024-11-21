<template>
  <div class="Wrapper">
    <!-- Render Category Components based on currentGroupName -->
    <div class="Container" v-if="!loading && !error">
      <CategoryComponent
        v-for="category in categories"
        :key="category.id"
        :color="category.color"
        :name="category.name"
        :productCount="category.productCount"
        :image="category.image"
      />
    </div>

    <!-- Render Promotion Components -->
    <div class="PromotionContainer" v-if="!loading && !error">
      <PromotionComponent
        v-for="promotion in promotions"
        :key="promotion.id"
        :color="promotion.color"
        :title="promotion.title"
        :image="promotion.image"
      />
    </div>

    <!-- Loading and Error Handling -->
    <div v-if="loading">Loading...</div>
    <div v-if="error">{{ error }}</div>
  </div>

  <RouterView />
</template>

<script>
import CategoryComponent from "./components/Category.vue";
import PromotionComponent from "./components/Promotion.vue";
import { RouterView } from "vue-router";
import { useProductStore } from "./stores/Product";
import { mapState } from "pinia"; // Import mapState from Pinia

export default {
  components: {
    CategoryComponent,
    PromotionComponent,
  },

  data() {
    return {
      currentGroupName: 'Group A',  // Default group name
      currentCategoryId: 1,         // Default category ID
      loading: true,                // Track loading state
      error: null,                  // Track error state
    };
  },

  computed: {
    // Use mapState to map getters from the store to computed properties
    ...mapState(useProductStore, {
      promotions: 'promotions', // Fetch promotions directly from the store

      // Dynamically filter categories and products based on the current group and category
      categories(store) {
        return store.getCategoriesByGroup(this.currentGroupName);
      },
      productsByCategory(store) {
        return store.getProductsByCategory(this.currentCategoryId);
      },
      productsByGroup(store) {
        return store.getProductsByGroup(this.currentGroupName);
      },
      popularProducts(store) {
        return store.getPopularProducts;
      },
    }),
  },

  mounted() {
    // Fetch data from the API when the component is mounted
    const productStore = useProductStore();
    productStore.fetchCategories();
    productStore.fetchPromotions();
    productStore.fetchProducts();
  },
};
</script>

<style scoped>
.Wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  padding: 0px 20px;
}

.Container {
  width: 83%;
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 50px;
}

.PromotionContainer {
  width: 85%;
  display: flex;
  justify-content: space-evenly;
}
</style>
