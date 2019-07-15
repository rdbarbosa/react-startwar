const planetsURL = 'https://swapi.co/api/planets'

export const search = async q => {
  const res = await fetch(`${planetsURL}/?search=${q}`)
  const { results = [] } = await res.json()

  return results.map(p => ({
    ...p,
    // For some reason API doesnt return id
    id: p.url.slice(0, -1).split('/planets/')[1],
  }))
}

export const getDetails = async id => {
  const res = await fetch(`${planetsURL}/${id}`)
  const item = await res.json()
  item.id = item.url.slice(0, -1).split('/planets/')[1]
  let nomefilmes = []
  await Promise.all(item.films.map(async f => {
    getFilmes(f)
    const filmes = await fetch(f)
    const filme = await filmes.json()
    nomefilmes.push(filme.title)
  }))
  
  item.filme = nomefilmes
  console.log(item)
  // await Promise.all(planet)
  return item
}


export const getFilmes = async url => {
  const res = await fetch(url)

  return res.json()
}