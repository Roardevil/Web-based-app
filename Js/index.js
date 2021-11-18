var app = new Vue({
    el: "#vueapp",
    data: {
        lesson: lesson,
        showproduct: true,
        ascending: true,
        sortBy: 'location',


        searchValue: '',
        name: null,
        Phonenumber: null,



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
        canaddtocart(alesson) {
            console.log("iuhiyheiuh   " + this.lesson[alesson].space + "yuguyguy  " + alesson);

            return this.lesson[alesson].space > 4;
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

            if (this.name.match(/[A-Za -z]/) && this.Phonenumber.match(/[0-9]/) && this.Phonenumber.length >= 10) {
                console.log("sucess")
                return false;

            }



            else {
                return true;

            }
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