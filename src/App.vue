<template>
<<<<<<< HEAD
  <div class="app-container">
    <!-- Featured Categories Section -->
    <menuComponent :title="'Featured Categories'" :nav="productStore.groups || []"/>

    <div class="container">
      <CategoryComponent 
        v-for="(category, index) in categories" :key="index" 
        :color="category.color"  
        :name="category.name"
        :quantity="category.quantity"
        :picture="category.picture"
      />
    </div>

    <!-- Promotions Section -->
    <div class="promotion-container">
      <PromotionComponent 
        v-for="(promotion, index) in promotions" :key="index" 
        :color="promotion.color"  
        :text="promotion.text"
        :picture="promotion.picture"
        :buttonColor="promotion.buttonColor"
        :btnName="promotion.btnName"
      />
    </div>

    <!-- Popular Products Section -->
    <menuComponent :title="'Popular Products'" :nav="productStore.groups || []"/>

    <div class="products">
      <Product 
        class="items"
        v-for="(product, index) in products"
        :key="index"
        :name="product.name"
        :rating="product.rating"
        :size="product.size"
        :image="product.image"
        :price="product.price"
        :promotionAsPercentage="product.promotionAsPercentage"
        :categoryId="product.categoryId"
        :instock="product.instock"
        :countSold="product.countSold"
        :group="product.group"
      />
    </div>

    <RouterView/>
  </div>
</template>

<script>
import CategoryComponent from './components/Category.vue';
import PromotionComponent from './components/Promotion.vue';
import Product from './components/Product.vue';
import menuComponent from './components/Menu.vue';
import { useProductStore } from "./stores/product";
import { onMounted } from "vue";
import { mapState } from "pinia";
=======
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
>>>>>>> bc8fb1650250dbaaa978518ae89a7e859d1d1507

export default {
  components: {
    CategoryComponent,
    PromotionComponent,
<<<<<<< HEAD
    Product,
    menuComponent
  },
  setup() {
    const productStore = useProductStore();
    
    onMounted(() => {
      productStore.fetchGroups();
      productStore.fetchCategories();
      productStore.fetchPromotions();
      productStore.fetchProducts();
    });
    
    return { productStore };
  },
  computed: {
    ...mapState(useProductStore, {
      groups: 'groups',
      categories: 'categories',
      promotions: 'promotions',
      products: 'products',
    })
  }
=======
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
>>>>>>> bc8fb1650250dbaaa978518ae89a7e859d1d1507
};
</script>
<style scoped>
<<<<<<< HEAD
/* Global Styles */
body {
  font-family: 'Arial', sans-serif;
  background-color: #f4f4f4;
  margin: 0;
  padding: 0;
}

.app-container {
  max-width: 100%px;
  margin: 0 auto;
  padding: 20px;
}

/* Headings */
h2 {
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 20px;
}

h3 {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 15px;
}

/* Section Styles (Categories, Promotions, Products) */
.container, .promotion-container, .products {
  display: flex;
  flex-wrap: wrap;         /* Allow wrapping for responsiveness */
  gap: 20px;               /* Space between items */
  justify-content: center; /* Center align items */
  margin-bottom: 30px;     /* Add spacing between sections */
}

/* Shared Card Styles */
.category, .promotion, .product {
  width: 300px;            /* Fixed width for consistency */
  border-radius: 8px;      /* Rounded corners for a modern look */
  background-color: white; /* White background for contrast */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s; /* Smooth hover effects */
  margin-bottom: 20px;
}

.category:hover, .promotion:hover, .product:hover {
  transform: translateY(-5px); /* Lift effect on hover */
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); /* Enhance shadow on hover */
}

/* Image Styles */
.category img, .promotion img, .product img {
  width: 100%;
  height: auto;
  border-bottom: 1px solid #ddd; /* Add a separator line */
}

/* Text Styles */
.text {
  color: #333;
  font-size: 18px;
  text-align: center;
  padding: 15px;
  font-weight: 500;        /* Slightly bold for emphasis */
}

/* Button Styles */
.button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s; /* Smooth transitions */
}

.button:hover {
  background-color: #0056b3;
  transform: scale(1.05);  /* Slight zoom effect on hover */
}

/* Promotion Component Button Style */
.promotion .btn {
  width: 100%;
  height: 100%;
=======
.Wrapper {
>>>>>>> bc8fb1650250dbaaa978518ae89a7e859d1d1507
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  padding: 15px;
}
<<<<<<< HEAD
=======

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
>>>>>>> bc8fb1650250dbaaa978518ae89a7e859d1d1507
</style>
