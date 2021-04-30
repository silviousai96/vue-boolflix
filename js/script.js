var app = new Vue(
    {
        el: '#root',
        data: {
            movies: [],
        },
        methods: {

        },
        mounted() {
            axios
            .get('https://api.themoviedb.org/3/search/movie?api_key=7f4db2e84c6497f875534433bb139d8d&query=star')
            .then((response) => {
                const result = response.data.results;
                console.log(result);
                this.movies = result;
            });
        }
    }
);