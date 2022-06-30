import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import { Movie } from "../components/Move"

function Movies(props) {
    const {movies = []} = props;
    return (
        <div className="movies">
            {movies.length ? movies.map((movie) => <Movie key={movie.imdbID} {...movie}/>) : (<h4>Nothing search =(</h4>
            )}
        </div>
    );
}

export{Movies}