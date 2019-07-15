import { useState } from 'react'
import { search, getDetails } from './services/planets'

export function usePlanetSearch() {
  const [results, setResults] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  async function searchPlanets(term) {
    setIsLoading(true)
    const data = await search(term)
    setResults(data)
    setIsLoading(false)
  }

  return [{ results, isLoading }, searchPlanets]
}

export function usePlanetDetails() {
  const [planet, setPlanet] = useState(null)

  function getPlanet(id) {
    if (id === null) {
      setPlanet(null)
    } else {
      getDetails(id).then(setPlanet)
    }
  }

  return [planet, getPlanet]
}