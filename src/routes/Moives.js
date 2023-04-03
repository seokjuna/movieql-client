import { gql, useQuery } from "@apollo/client";

const ALL_MOVIES = gql`
    query getMovies {
        allMovies {
            title
            id
        }
    }
`;

function Moives() {
    const { data, loading, error } = useQuery(ALL_MOVIES); // 선언형 코드
    
    if (loading) {
        return <h1>Loading...</h1>;
    }
    if (error) {
        return <h1>Could not feetch :(</h1>;
    }

    return (
        <ul>
            <h1>Movies</h1>
            {data.allMovies.map(movie => 
                <li key={movie.id}>
                    {movie.title}
                </li>
            )}
        </ul>
    );
}

export default Moives;