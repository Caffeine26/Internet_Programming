// product.js (Store)
import { defineStore } from "pinia";
import axios from "axios";

export const useProductStore = defineStore('product', {
  state: () => ({
    groups: [],
    promotions: [],
    categories: [],
    products: [],
    loading: false,
    error: null,
  }),

  getters: {
    getCategoriesByGroup: (state) => (groupName) => {
      // List all categories by group name
      return state.categories.filter((category) => category.group === groupName);
    },
    getProductsByGroup: (state) => (groupName) => {
      // List all products by group name
      return state.products.filter((product) => product.group === groupName);
    },
    getProductsByCategory: (state) => (categoryId) => {
      // List all products by given categoryId
      return state.products.filter((product) => product.categoryId === categoryId);
    },
    getPopularProducts: (state) => {
      // List products with countSold > 10
      return state.products.filter((product) => product.countSold > 10);
    }
  },

  actions: {
    async fetchCategories() {
      this.loading = true;
      try {
        const response = await axios.get('http://localhost:3000/api/categories');
        this.categories = response.data;
      } catch (error) {
        this.error = 'Error fetching categories';
      } finally {
        this.loading = false;
      }
    },

    async fetchPromotions() {
      this.loading = true;
      try {
        const response = await axios.get('http://localhost:3000/api/promotions');
        this.promotions = response.data;
      } catch (error) {
        this.error = 'Error fetching promotions';
      } finally {
        this.loading = false;
      }
    },

    async fetchProducts() {
      this.loading = true;
      try {
        const response = await axios.get('http://localhost:3000/api/products');
        this.products = response.data;
      } catch (error) {
        this.error = 'Error fetching products';
      } finally {
        this.loading = false;
      }
    }
  }
});
