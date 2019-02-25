var vm = new Vue({
    el: '#app',
    data: {
        p_error: "",
        Contador1: 0,
        Contador2: 0,
        Contador3: 0,
        Contador4: 0,
        Contador5: 0,
        Contador6: 0,
        Contador7: 0,
        Contador8: 0,
        Contador9: 0,
        Contador10: 0,


        calificacion: {
            nombre: '',
            nota: 0,
            aprueba: ''
        },
        Calificaciones: []
    },

    computed: {
        c_aprobados: function () {
            var lista = this.Calificaciones.filter(function (x) {
                return x.nota > 5;

            });

            lista = lista.sort(function (a, b) {
                if (a.nombre > b.nombre) {
                    return 1;
                }
                if (a.nombre < b.nombre) {
                    return -1;
                }
                // a must be equal to b
                return 0;
            });
            return lista;

        },
        c_desaprobados: function () {
            var lista = this.Calificaciones.filter(function (x) {
                return x.nota < 6;

            });

            lista = lista.sort(function (a, b) {
                if (a.nombre > b.nombre) {
                    return 1;
                }
                if (a.nombre < b.nombre) {
                    return -1;
                }
                // a must be equal to b
                return 0;
            });
            return lista;

        },
        c_nombreburros: function () {
            var lista = this.c_desaprobados.map(function (x) {

                return x.nombre;

            });
            return lista;

        },
        c_mejoresnotas: function () {
            var altasnotas = this.c_aprobados.filter (function (x) {
                return x.nota > 7
            });
            return altasnotas;
        },

    },

    

    methods: { 
        agregarcalificacion: function () {
            this.p_error = "";
            var nota = parseInt(this.calificacion.nota);
            if (!this.calificacion.nombre) {
                this.p_error = "Ingrese un Nombre";
                return;
            }
            if (nota < 1 || nota > 10) {
                this.p_error = "La nota tiene que ser entre 1 a 10";
                return;
            }

            switch  (nota) {
                case 1:
                    this.Contador1 = this.Contador1 + 1;
                    break;
                case 2:
                    this.Contador2 = this.Contador2 + 1;
                    break;
                case 3:
                    this.Contador3 = this.Contador3 + 1;
                    break;
                case 4:
                    this.Contador4 = this.Contador4 + 1;
                    break;
                case 5:
                    this.Contador5 = this.Contador5 + 1;
                    break;
                case 6:
                    this.Contador6 = this.Contador6 + 1;
                    break;
                case 7:
                    this.Contador7 = this.Contador7 + 1;
                    break;
                case 8:
                    this.Contador8 = this.Contador8 + 1;
                    break;
                case 9:
                    this.Contador9 = this.Contador9 + 1;
                    break;
                case 10:
                    this.Contador10 = this.Contador10 + 1;
                    break;
                default:
                    break;
            }

            if (this.calificacion.nota < 6) {
                this.calificacion.aprueba = 'No';
            } else {
                this.calificacion.aprueba = 'Si';
            }
            this.calificacion.nota = nota;

            this.Calificaciones.push(this.calificacion);
            this.calificacion = {
                nombre: '',
                nota: 0
            };

        }
    }
});

