import React from 'react';
import PropTypes from 'prop-types';
import { Load } from '../'
import './planetDetails.css';

const PlanetDetalhe = ({planet, isLoading, onClose, onNext}) => (
    <Load isLoading={isLoading}>
        <section className="planet-details">
            <h2 className="planet-details__header">{planet.name}</h2>
            <div className="planet-details__clear" onClick={onClose}>
                X
            </div>
            <div className="planet-details__sections">
                <div className="planet-details__detail">
                    População: {planet.population}
                </div>
                <div className="planet-details__detail">
                    Clima: {planet.climate}
                </div>
                <div className="planet-details__detail">
                    Terreno: {planet.terrain}
                </div>
            </div>
            
            <div className="planet-details__sections">
                <h3 className="planet-details__header">Destaque em filmes</h3>
                {planet.filme.map(f => (<p key={f}>{f}</p>))}
            </div>
            <div className="planet-details__center">
                <button className="planet-details__btn" onClick={() => onNext(Number(planet.id) + 1)}>Next</button>
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