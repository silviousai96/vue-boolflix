var app = new Vue(
    {
        el: '#root',
        data: {
            movies: [],
            series: [],
            userSearch: '',
        },
        methods: {
            search() {
                //chiamata film
                axios
                .get('https://api.themoviedb.org/3/search/movie', {
                    params: {
                        api_key: '7f4db2e84c6497f875534433bb139d8d',
                        query: this.userSearch,
                    }
                })
                
                .then((response) => {
                    const result = response.data.results;
                    console.log(result);
                    this.movies = result;
                }),
                //chiamata serie tv
                axios
                .get('https://api.themoviedb.org/3/search/tv', {
                    params: {
                        api_key: '7f4db2e84c6497f875534433bb139d8d',
                        query: this.userSearch,
                    }
                })
                
                .then((response) => {
                    const result = response.data.results;
                    console.log(result);
                    this.series = result;
                })
                //ripulisco la searchbar
                this.userSearch = '';
            },

            //funzione per arrotondare il voto per eccesso del film/serieTv
            roundedVote(n) {
                return Math.ceil( n / 2);
            }
                                
        },
        mounted() {
        }
    }
);