import React from 'react';
import starWarsLogo from './assets/images/star-wars-logo.png'
import { usePlanetDetails } from './effects'
import { PlanetDetalhe } from './components'
import { Search } from './views'

function App() {
  
  const [planet, getPlanet, isLoading] = usePlanetDetails();
  
  function clearPlanet() {
    getPlanet(null)
  }

  return (
    <>
      <img className="main_logo" src={starWarsLogo} alt="Star Wars: React App" />
      {planet ? (
        <PlanetDetalhe  planet={planet} isLoading={isLoading} onClose={clearPlanet} onNext={getPlanet} />
      ) : (
        <Search onSelect={getPlanet} />
      )}
    </>
  );
}

export default App;
