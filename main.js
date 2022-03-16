const app = Vue.createApp({
    data: function() {
        return {
            showModal: false,
            span: `<span style="color:red>Hi</span>`,
            count: 0,
            flavourArray: [
                { id: 1, name: "Vanila", price: 100},
                { id: 2, name: "Chocolate", price: 200},
                { id: 3, name: "Strawberry", price: 300 },
                { id: 4, name: "Orange", price: 400},
                ],
            cart: [] 
        }
    },
    methods: {
        add(id) {
            const item = this.flavourArray.find(x=>x.id===id);
            this.cart.push(item);
        },
        remove(id) {
            const index = this.cart.findIndex(x=>x.id===id);
            index!==-1 && this.cart.splice(index, 1);
        },
        cartDel() {
            this.cart = []
        },
        toggle() {
            this.showModal = !this.showModal;
        },
    },
    computed: {
        total() {
            return this.cart.reduce((total, current)=> total+current.price, 0)
        }
    }
});

