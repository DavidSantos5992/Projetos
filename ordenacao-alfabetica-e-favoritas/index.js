var app = new Vue({
    el: '#app',

    template: ``,

    data: {

        screen: 0,

        modalActive: 0,

        modal: true,

        forSale: [
            {
                name: 'Aaaaaaa',
                rarity: 'common',/* common rare legendary */
                photo: 'icon',
                favorite: false,
            },
            {
                name: 'Bbbbbbb',
                rarity: 'rare',
                photo: 'icon',
                favorite: false,
            },

            {
                name: 'Ccccccc',
                rarity: 'legendary',
                photo: 'icon',
                favorite: false,

            },

            {
                name: 'Ddddddd',
                rarity: 'legendary',
                photo: 'icon',
                favorite: false,

            },
         
            {
                name: 'Ddddddd',
                rarity: 'legendary',
                photo: 'icon',
                favorite: false,

            },

        ],

        selectedFilter: '',

        temp : {
            name: '',
            rarity: '',
            photo: 'icon',
            favorite: false,
        }

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

        /* insertCustomModal(text, type) {
            this.customModal.text = text
            this.customModal.type = type
            this.insertModal(1)
        },
 */
      
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
            this.modal = nextModal
        },

        closeUI() {
            this.modal = false
        },

        zera(){
            this.temp.name = ''
            this.temp.rarity = ''
        },

        insertItem() {

            let element = JSON.parse(JSON.stringify(this.temp))

            console.log(element.name)
            console.log(element.rarity)

            this.forSale.push(element)
            this.insertModal(false)
            this.zera()
        },

   

    },



    mounted() {

        this.sortPosition(this.forSale)

        document.addEventListener('keydown', (event) => {
            const keyName = event.key;

            if (app.modal && keyName == 'Escape') {
                app.closeUI()
            }

        });

    },

});