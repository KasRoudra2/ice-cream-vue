app.component("modal", {
    props: {
        price: {
            type: Number,
            required: true,
        }
    },
    data: function() {
        return {
            name: "",
            address: "",
            phone: "",
        }
       
    },
    template: `<div id="modal">
                <div class="backdrop" @click="hide"></div>
                <div class="modalBody">
                    <div class="formContainer" id="orderForm">
                        <h1>Complete the form below</h1>
                        <form class="orderForm" @submit.prevent="sub">
            <ul>
                <li>
                <input
                    type="text"
                    v-model="name"
                    class="fieldStyle fieldSplit alignLeft"
                    placeholder="Name"
                />
                <input
                    type="text"
                    v-model="phone"
                    class="fieldStyle fieldSplit alignRight"
                    placeholder="Phone no."
                />
                </li>
                <li>
                <input
                    type="hidden"
                    v-model.number="price"
                    class="fieldStyle fieldSplit alignRight"
                />
                </li>
                <li>
                <textarea
                    v-model="address"
                    class="fieldStyle"
                    placeholder="Address"
                ></textarea>
                </li>
                <li>
                <input type="submit" value="Submit" />
                </li>
            </ul>
            </form>
                    </div>
                </div>
            </div>`,
    methods: {
        hide() {
            this.$emit("hide");
        },
        sub() {
            let obj = {
                name: this.name,
                address: this.address,
                phone: this.phone,
                price: this.price,
            }
            console.log(obj);
            this.hide()
            this.$emit("clear")
        }
    }
}).mount("#app")