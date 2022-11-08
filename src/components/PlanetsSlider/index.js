import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetSlider = props => {
  const {planetsList} = props

  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  // testid="planets"

  return (
    <div className="slider-container">
      <h1 className="planet">PLANETS</h1>

      <Slider {...settings}>
        {planetsList.map(eachPlanet => (
          <PlanetItem planetSliderDetails={eachPlanet} key={eachPlanet.id} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetSlider
