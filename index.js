var app = new Vue({
    el: "#vueapp",
    data: {
        lesson: lesson,
        showproduct: true,
        ascending: true,
        sortBy: 'location',
        searchValue: '',
        sucess: '',

        order: {
            name: '',
            phone: '',


        },



        cart: [],






    },
    methods: {
        additem(id) {
            if (lesson[id].space > 0) {
                this.space = --lesson[id].space;


                this.cart.push(id);
            }
        },
        isdisable(cet) {
            return this.lesson[cet].space === 0;

        },


        showcheckout() {
            this.showproduct = this.showproduct ? false : true;
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
        submit() {
            this.sucess = "order placed";
        },




        removeButton(index) {
            this.lesson[index].space++;
            for (let i = 0; i < this.cart.length; i++) {
                if (this.cart[i] == index) {
                    this.cart.splice(i, 1);
                    break;

                }
            }
        },








    },
    computed: {

        submitform() {

            //var letters = /^[A-Za-z]+$/;

            if (this.order.name.match(/[a-z]/) && this.order.phone.match(/[0-9]/) && this.order.phone.length >= 10)


                return false;

            else


                return true;
        },




        cartItemCount() {
            return this.cart.length || '';
        },


        getlesson() {

            let searchlesson = this.lesson

            // Process search input
            if (this.searchValue != '' && this.searchValue) {
                searchlesson = searchlesson.filter((lesson) => {
                    return lesson.subject
                        .toLowerCase()
                        .includes(this.searchValue.toLowerCase())
                })
            }



            // Sort by alphabetical order
            searchlesson = searchlesson.sort((a, b) => {
                if (this.sortBy == 'location') {
                    let fa = a.location.toLowerCase(), fb = b.location.toLowerCase()

                    if (fa < fb) {
                        return -1
                    }
                    if (fa > fb) {
                        return 1
                    }
                    return 0


                } else if (this.sortBy == 'price') {
                    return a.price - b.price
                }


                else if (this.sortBy == 'space') {
                    return a.space - b.space
                }
            })


            // Show sorted array in descending or ascending order
            if (!this.ascending) {
                searchlesson.reverse()
            }

            return searchlesson
        }
    },




})