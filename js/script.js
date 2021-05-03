var app = new Vue(
    {
        el: '#root',
        data: {
            movies: [],
            userSearch: '',
        },
        methods: {
            search() {
                if(this.userSearch.length > 0) {
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
                })
                this.userSearch = '';
                }
                
            }
        },
        mounted() {
        }
    }
);