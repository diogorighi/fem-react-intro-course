const React = require('react')
const Header = require('./Header')
const ShowCard = require('./ShowCard')
const { arrayOf, object, string } = React.PropTypes
const { connector } = require('./Store')

const Search = (props) => (
  <div style={{textAlign: 'left'}} className='container'>
    <Header showSearch />
    <div className='shows'>
      {props.shows
        .filter((show) => `${show.title} ${show.description}`.toUpperCase().indexOf(props.searchTerm.toUpperCase()) >= 0)
        .map((show) => (
          <ShowCard {...show} key={show.imdbID} />
      ))}
    </div>
  </div>
)

Search.propTypes = {
  shows: arrayOf(object),
  searchTerm: string
}

module.exports = connector(Search)
