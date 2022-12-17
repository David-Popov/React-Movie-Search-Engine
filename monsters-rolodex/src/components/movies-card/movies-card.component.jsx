import './movies-card.component.css';


const MoviesCard = (props) => {
        const {movies} = props
        const imgUrl = 'https://image.tmdb.org/t/p/w500/'
        return (
            <div className="card-container">
            {movies.map((e) => {
                return <div key={e.id} className='card'>
                <img src = {`${imgUrl + e.poster_path}`} />
                <h1 >{e.original_title}</h1>
                <p>{e.Plot}</p>
                 <div className='rating'>
                  <span className='date'>{e.release_date}</span>
                  <span className='vote'><i className="fa-solid fa-star"></i> {e.vote_average}</span>
                 </div>
                </div>
              })}
            </div>
        );
}

export default MoviesCard