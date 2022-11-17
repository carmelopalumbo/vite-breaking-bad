import { reactive } from 'vue'

export const store = reactive({
    bbData: [],
    apiUrl: "https://www.breakingbadapi.com/api/characters",
    isLoad: false,
    selectedCategory: "Breaking Bad"
});