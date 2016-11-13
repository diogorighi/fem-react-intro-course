const React = require('react')
const { Link } = require('react-router')

const ShowCard = (props) => (
  <Link to={`/details/${props.imdbID}`}>
    <div className='show-card'>
      <img className='show-card-img' src={`public/img/posters/${props.poster}`} />
      <div className='show-card-text'>
        <h3 className='show-card-title'>{props.title}</h3>
        <h4 className='show-card-year'>({props.year})</h4>
        <p className='show-card-description'>{props.description}</p>
      </div>
    </div>
  </Link>
)

const { string } = React.PropTypes

ShowCard.propTypes = {
  poster: string.isRequired,
  title: string.isRequired,
  year: string.isRequired,
  description: string.isRequired,
  imdbID: string.isRequired
}

module.exports = ShowCard
