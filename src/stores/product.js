import { defineStore } from 'pinia';
import axios from 'axios';

export const useProductStore = defineStore('product', {
  state: () => ({
    groups: [],
    categories: [],
    promotions: [],
    products: []
  }),
  actions: {
    async fetchGroups() {
      try {
        const response = await axios.get('http://localhost:3000/api/groups');
        this.groups = response.data;
      } catch (error) {
        console.error('Failed to fetch groups', error);
      }
    },
    async fetchCategories() {
      try {
        const response = await axios.get('http://localhost:3000/api/categories');
        this.categories = response.data;
      } catch (error) {
        console.error('Failed to fetch categories', error);
      }
    },
    async fetchPromotions() {
      try {
        const response = await axios.get('http://localhost:3000/api/promotions');
        this.promotions = response.data;
      } catch (error) {
        console.error('Failed to fetch promotions', error);
      }
    },
    async fetchProducts() {
      try {
        const response = await axios.get('http://localhost:3000/api/products');
        this.products = response.data;
      } catch (error) {
        console.error('Failed to fetch products', error);
      }
    }
  }
});
