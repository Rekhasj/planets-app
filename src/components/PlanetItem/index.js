import './index.css'

const PlanetItem = props => {
  const {planetSliderDetails} = props

  const {name, imageUrl, description} = planetSliderDetails
  return (
    <div className="slide-card">
      <img alt={`planet ${name}`} src={imageUrl} className="img" />
      <h1>{name}</h1>

      <p>{description}</p>
    </div>
  )
}
export default PlanetItem
