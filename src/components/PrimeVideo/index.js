// Write your code here
// Write your code here

import MovieSlider from '../MoviesSlider'

import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  return (
    <div className="background-color-for">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="prime-video-styling"
      />
      <MovieSlider moviesList={moviesList} />
    </div>
  )
}

export default PrimeVideo
