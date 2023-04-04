var app = new Vue({
    el: '#app',

    template: ``,

    data: {

        screen: 0,

        modalActive: 0,

        menu: true,

        forSale: [
            {
                name: 'Aaaaaaa',
                rarity: 'common',/* common rare legendary */
                price: 100,
                photo: 'icon',
                type: 'pistol',
                favorite: false,
            },
            {
                name: 'Bbbbbbb',
                rarity: 'rare',
                price: 200,
                photo: 'icon',
                type: 'rifle',
                favorite: false,
            },

            {
                name: 'Ccccccc',
                rarity: 'legendary',
                price: 300,
                photo: 'icon',
                type: 'shotgun',
                favorite: false,

            },

            {
                name: 'Ddddddd',
                rarity: 'legendary',
                price: 400,
                photo: 'icon',
                type: 'shotgun',
                favorite: false,

            },
         
            {
                name: 'Ddddddd',
                rarity: 'legendary',
                price: 400,
                photo: 'icon',
                type: 'shotgun',
                favorite: false,

            },
        ],

        categories: [
            {
                index: 'pistolIcon',
                type: 'pistol'
            },
            {
                index: 'rifle',
                type: 'rifle'
            },
            {
                index: 'rifle',
                type: 'shotgun'
            },
        ],

        selectedFilter: '',

    },

    methods: {

        sortPosition(action) {
            action.sort(function (a, b) {
                let nomeA = a.name.toUpperCase();
                let nomeB = b.name.toUpperCase();

                if (nomeA < nomeB) {
                    return -1;
                }

                if (nomeA > nomeB) {
                    return 1;
                }
            });
            for (let i = 0; i < action.length; i++) {

                if (action[i].favorite) {
                    action.unshift(action[i])
                    action.splice(i + 1, 1)
                }


            };
        },

        /* reordena quando favoritar e desfavoritar */
        setFavorite(element, index, action, array) {
            if (action == 'add') {
                array.unshift(element)
                array.splice(index + 1, 1)
            } else {
                this.sortPosition(array)
            }
        },

        insertCustomModal(text, type) {
            this.customModal.text = text
            this.customModal.type = type
            this.insertModal(1)
        },

        /* setando e removendo filtro */
        chooseFilter(filterType) {

            if (this.selectedFilter == filterType) {
                this.selectedFilter = ''

            } else if (this.selectedFilter != filterType) {
                this.selectedFilter = filterType
            }

            console.log(this.selectedFilter)

        },

        changeScreen(nextScreen) {
            this.screen = nextScreen
            this.selectedFilter = ''

            if (nextScreen == 0) {
                this.sortPosition(this.forSale)
                console.log('aaaa')
            } else if (nextScreen == 1) {
                this.sortPosition(this.mySkins)
                console.log('bbb')
            }
        },

        insertModal(nextModal) {
            this.modalActive = nextModal
        },

        closeUI() {
            this.menu = false
        },

    },



    mounted() {

        this.sortPosition(this.forSale)
        document.addEventListener('keydown', (event) => {
            const keyName = event.key;

            if (app.menu && keyName == 'Escape') {
                app.closeUI()
            }

        });

    },

});