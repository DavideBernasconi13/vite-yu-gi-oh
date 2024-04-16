import { reactive } from 'vue';

export const store = reactive({
    apiUrl: 'https://db.ygoprodeck.com/api/v7/',
    endpoint: {
        link: 'cardinfo.php'
    },
    option: {
        params: {
            num: 20,
            offset: 0
        }
    },
    cards: []
})