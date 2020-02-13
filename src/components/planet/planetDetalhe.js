import React from 'react';
import PropTypes from 'prop-types';
import { Load } from '../'
import './planetDetails.css';

const PlanetDetalhe = ({planet, isLoading, onClose, onNext}) => (
    <Load isLoading={isLoading}>
        <section className="planet-details">
            <h2 className="planet-details-header">{planet.name}</h2>
            <div className="planet-details-clear" onClick={onClose}>
                X
            </div>
            <div className="planet-details-sections">
                <div className="planet-details-detail">
                    Population: {planet.population}
                </div>
                <div className="planet-details-detail">
                    Climate: {planet.climate}
                </div>
                <div className="planet-details-detail">
                    Terrain: {planet.terrain}
                </div>
            </div>
            
            <div className="planet-details-sections">
                <h3 className="planet-details-header">Featured in {planet.filme.length} films</h3>
                {planet.filme.map(f => (<p key={f}>{f}</p>))}
            </div>
            <div className="planet-details-center">
                <button className="planet-details-btn" onClick={() => onNext(Number(planet.id) + 1)}>Next</button>
            </div>
        </section>
    </Load>
)

PlanetDetalhe.propTypes = {
    planet: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        diameter: PropTypes.string,
        climate: PropTypes.string,
        terrain: PropTypes.string,
        population: PropTypes.string,
        filme: PropTypes.array,
        // hair_color: PropTypes.string,
        // skin_color: PropTypes.string,
    }),
    onClose: PropTypes.func,
}

export default PlanetDetalhe