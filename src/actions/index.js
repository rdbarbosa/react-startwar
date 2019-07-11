const planetsURL = 'https://swapi.co/api/planets'

export const search = async q => {
  const res = await fetch(`${planetsURL}/?search=${q}`)
  const { results = [] } = await res.json()

    return {
        type: "FETCH_PLANETS",
        payload: results.map(p => ({
                ...p,
                id: p.url.slice(0, -1).split('/planets/')[1],
            }))
    }
}

export const getDetails = async id => {
  const res = await fetch(`${planetsURL}/${id}`)
  const item = await res.json()
  let nomefilmes = []
  item.films.map(async f => {
    const filmes = await fetch(f)
    const filme = await filmes.json()
    nomefilmes.push(filme.title)
  })
  item.filme = nomefilmes
  console.log(item)
    return {
        type:"FETCH_PLANET",
        payload: item
    }
}

export const getFilmes = async id => {
  const res = await fetch(`${planetsURL}/${id}`)
  console.log(res.films);
  return res.json()
}