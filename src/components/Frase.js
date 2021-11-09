import React from 'react';
import PropTypes from 'prop-types';

const Frase = ({frase, guardarcargando}) => {

    setTimeout(() => {
        // elimina spinner
        guardarcargando(true);
    }, 300);

    return (
        <h2>{frase.quote}</h2>
        //     <p>{frase.author}</p>
        //     <p>{frase.series}</p>
     );
}

Frase.prototype = {
    frase: PropTypes.object.isRequired,
    guardarcargando: PropTypes.func.isRequired
}

export default Frase;

