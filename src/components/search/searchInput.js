import React, { createRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import './searchInput.css'

function SearchInput({ debounce, onChange }) {
  const inputRef = createRef()
  let debounceTimeout = null

  useEffect(() => {
    inputRef.current.focus()
  })

  function debounceInput({ target }) {
    clearTimeout(debounceTimeout)

    debounceTimeout = setTimeout(() => {
      onChange(target.value)
    }, debounce)
  }

  return (
    <input
      type="text"
      ref={inputRef}
      className="search-control"
      onInput={debounceInput}
      placeholder="Pesquise os planetas"
    />
  )
}

SearchInput.propTypes = {
  debounce: PropTypes.number,
  onChange: PropTypes.func,
}

export default SearchInput