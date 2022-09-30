const app = Vue.createApp({
    data() {
        return {
            product: 'socks',
            image: './assets/images/socks_green.jpg',
            url: 'https://www.vuemastery.com/',
            inventory: 1,
            onSale: true
        }
    }
})