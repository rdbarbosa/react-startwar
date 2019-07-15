import React from 'react'
import PropTypes from 'prop-types'
import './searchResults.css'
import Load from '../loading/load'

const SearchResult = ({ results, isLoading, onSelect }) => (
  <section className="results-section">
    <Load isLoading={isLoading}>
      <ul>
        {results.map(res => (
          <li key={res.name} onClick={() => onSelect(res.id)}>
            {res.name}
          </li>
        ))}
      </ul>
    </Load>
  </section>
)

SearchResult.propTypes = {
  isLoading: PropTypes.bool,
  onSelect: PropTypes.func,
  results: PropTypes.array,
}

export default SearchResult