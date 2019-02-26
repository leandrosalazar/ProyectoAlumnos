var vm = new Vue({
    el: '#app',
    data: {
        p_error:"",
        Nombre: '',
        Nombres: [],
       
    },

    methods: {
        agregarNombre: function () {
            this.p_error = "";   

            if (!this.Nombre) {
                this.p_error = "Escriba su nombre";
                return;
            }

            this.Nombres.push(this.Nombre);

            this.Nombre = "";

            
        },

        InvertirCadena: function (cadena) {
            var x = cadena.length;
            var cadenaInvertida = "";

            while (x >= 0) {
                cadenaInvertida = cadenaInvertida + cadena.charAt(x);
                x--;
            }
            return cadenaInvertida;
        }


    },

    computed: {
        c_vocales: function () {
            var lista = this.Nombres.filter(function (item) {
                return item.charAt(0).toUpperCase() === "A" ||
                    item.charAt(0).toUpperCase() === "E" ||
                    item.charAt(0).toUpperCase() === "I" ||
                    item.charAt(0).toUpperCase() === "O" ||
                    item.charAt(0).toUpperCase() === "U";
            });

            lista = lista.sort(function (a, b) {
                if (a > b) {
                    return 1;
                }
                if (a < b) {
                    return -1;
                }
                // a must be equal to b
                return 0;
            });
            return lista;

        },

        c_consonantes: function () {
            var lista = this.Nombres.filter(function (item) {
                return item.charAt(0).toUpperCase() !== "A" &&
                    item.charAt(0).toUpperCase() !== "E" &&
                    item.charAt(0).toUpperCase() !== "I" &&
                    item.charAt(0).toUpperCase() !== "O" &&
                    item.charAt(0).toUpperCase() !== "U";
            });

            lista = lista.sort(function (a, b) {
                if (a > b) {
                    return 1;
                }
                if (a < b) {
                    return -1;
                }
                // a must be equal to b
                return 0;
            });
            return lista;

        },



    }
});