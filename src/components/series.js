import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Series = ({images, fraseSerie}) => {

    const imageBreaking = images.find(image => image.name === "Breaking Bad");
    const imageBetter = images.find(image => image.name === "Better Call Saul");

    return ( 
        <Fragment>
            <article className={`breaking ${ fraseSerie === imageBreaking.name  ? "active": null }`}>
            <img src={imageBreaking.url} alt={imageBreaking.title} />
            <span></span>
            </article>
            <article className={`better ${ fraseSerie === imageBetter.name  ? "active": null }`}>
            <img src={imageBetter.url} alt={imageBetter.title} />
            <span></span>
            </article>
        </Fragment>
     );
}

Series.propTypes = {
    images: PropTypes.array.isRequired,
    fraseSerie: PropTypes.string
}

export default Series;