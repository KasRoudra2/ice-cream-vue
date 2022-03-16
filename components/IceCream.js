app.component("ice-cream",{
    props: {
        cart: {
            type: Array,
            required: true,
        }
    },
    template:  `<div>
                   <div class="icecream" id="icecream">
                       <p class="cone"></p>
                       <div id="vanila" v-for="car in cart" :class="car.name.toLowerCase()"></div>
                       <div class="cherry" v-if="cart.length > 0 "></div>
                      <div class="question" v-else></div>
                   </div>
                 </div>`
});