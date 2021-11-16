var app = new Vue({
    el: "#vueapp",
    data: {
        lesson: lesson,
        showproduct: true,
        filter: '',
        sort: '',
        terms: false,
        Country: {
            UK: 'united kingdom',
            IN: 'India',
            US: 'United states of america',
            CA: 'Canada',
            AUS: 'Australia'
        },
        order: {
            firstName: '',
            lastName: '',
            address: '',
            city: '',
            postcode: '',
            Country: '',
            method: 'Home Address',
            business: 'Business Address',
            home: 'Home Address',
            gift: 'Send As A Gift',
            sendGift: 'Send As A Gift',
            dontSendGift: 'Do Not Send As A Gift'
        },
        cart: [],

        options: [
            { label: 'Default', value: 'none' },
            { label: 'Most Rated', value: 'rating' },
            { label: 'least Rated', value: 'leastrated' },
            { label: 'price(high to low)', value: 'price(high to low)' },
            { label: 'price(low to high)', value: 'price(low to high)' },


        ],
        errors: [],
        name: null,
        age: null,
        movie: null

    },
    methods: {
        additem(id) {
            if (lesson[id].space > 0) {
                this.space = --lesson[id].space;


                this.cart.push(id);
            }
        },

        showcheckout() {
            this.showproduct = this.showproduct ? false : true;
        },
        canaddtocart(aProduct) {

            return aProduct.space > this.cartCount(aProduct.id);
        },
        cartCount(id) {
            let count = 0;
            for (var i = 0; i < this.cart.length; i++) {
                if (this.cart[i] === id) {
                    count++;
                }
            }
            return count;
        },


        submitForm() {
            alert('Submitted');
        },
        checkForm: function (e) {
            if (this.firstName && this.lastName && this.address && this.city && this.postcode) return true;
            this.errors = [];
            if (!this.firstName) this.errors.push("First Name required.");
            if (!this.lastName) this.errors.push("Last Name required.");
            if (!this.address) this.errors.push("Address required.");
            if (!this.city) this.errors.push("City required.");
            if (!this.postcode) this.errors.push("Postcode required.");

            e.preventDefault();
        },
        removeButton(index) {
            // this.lesson[index].space++;
            for (let i = 0; i < this.cart.length; i++) {
                if (this.cart[i] == index) {
                    this.cart.splice(i, 1);
                    console.log(i + " " + index);
                    break;

                }
            }
        }






    },
    computed: {
        isDisabled() {

        },
        cartItemCount() {
            return this.cart.length || '';
        },

        getlesson() {

            var lesson = this.lesson.filter((lesson) => {
                return lesson.subject.toLowerCase().includes(this.filter.toLowerCase());
            });

            if (this.sort == 'rating') {
                return lesson.sort(function (a, b) {
                    return b.rating - a.rating
                });

            }
            else if (this.sort == 'leastrated') {
                return lesson.sort(function (a, b) {
                    return a.rating - b.rating
                });

            }
            else if (this.sort == 'price(high to low)') {
                return lesson.sort(function (a, b) {
                    return b.price - a.price
                });

            }
            else if (this.sort == 'price(low to high)') {
                return lesson.sort(function (a, b) {
                    return a.price - b.price
                });

            }

            else {
                return lesson;
            }

        }
    }
})