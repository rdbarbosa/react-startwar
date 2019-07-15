import React from 'react';
import PropTypes from 'prop-types';
import './planetDetails.css';

const PlanetDetalhe = ({planet, onClose, onNext}) => (
    <section className="planet-details">
        <h2 className="planet-details__header">{planet.name}</h2>
        <div className="planet-details__clear" onClick={onClose}>
            X
        </div>
        <div className="planet-details__sections">
            {planet.filme.map(f => (<p key={f}>{f}</p>))}
        </div>
        <div className="planet-details__sections">

        </div>
        <button onClick={() => onNext(Number(planet.id) + 1)}>Next</button>
    </section>
)

PlanetDetalhe.propTypes = {
    planet: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        diameter: PropTypes.string,
        climate: PropTypes.string,
        terrain: PropTypes.string,
        population: PropTypes.string,
        // filme: PropTypes.array,
        // hair_color: PropTypes.string,
        // skin_color: PropTypes.string,
    }),
    onClose: PropTypes.func,
}

export default PlanetDetalhe