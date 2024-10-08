// Write your code here

import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MovieItem from '../MovieItem'

const MovieSlider = props => {
  const {moviesList} = props
  const ActionMovies = moviesList.filter(each => each.categoryId === 'ACTION')
  const comedyMovies = moviesList.filter(each => each.categoryId === 'COMEDY')

  const sliderContainerStyle = {
    width: '100%',

    margin: '0 auto',
    padding: '40px',
  }
  console.log(ActionMovies)
  const settings = {
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  }
  return (
    <div>
      <h1 style={{color: '#ffffff'}}>Action Movies</h1>
      <div style={sliderContainerStyle}>
        <Slider {...settings}>
          {ActionMovies.map(each => (
            <div key={each.id}>
              <MovieItem details={each} key={each.id} />
            </div>
          ))}
        </Slider>
      </div>
      <h1 style={{color: '#ffffff'}}>Comedy Movies</h1>
      <div style={sliderContainerStyle}>
        <Slider {...settings}>
          {comedyMovies.map(each => (
            <div key={each.id}>
              <MovieItem details={each} key={each.id} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default MovieSlider
