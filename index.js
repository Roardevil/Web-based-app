
let app = new Vue({
    el: "#app",
    data: {
        lesson: lesson,
        showproduct: true,
        space: space,

    },




    methods: {
        //  This function decrease the value of stock by 1 every time user click Button

        additem: function () {
            if (lesson.stock >= 0) {
                this.space = --lesson.stock;
            }
        },

    },
    computed: {// This disables the button at 0 stock
        isDisabled() {
            return this.stock === 0;
        }
    }
});