import './Animal.css';
import PropTypes from 'prop-types';
import { useState } from 'react';


const Animal = (props) => {

    const [isBookmarked, setIsBookmarked] = useState(false);

    const altText = `Photo of ${props.name}`;

    const toggleBookmark = () => {
            setIsBookmarked(!isBookmarked);
    }

    // if the animal is bookmarked, the CSS class name shouldbe .bookmarked, if the animsl is not bookmarked, there should be no css class
    let animalBookmarkStyle = 'Animal';
    if (isBookmarked) {
        animalBookmarkStyle = 'Animal bookmarked';
        // we can space separate different css styles, so animal and bookmarked are different css attributes 
    }

    return (
    <section className = {animalBookmarkStyle}>
        <h3>Animal name: { props.name }</h3>
        <p>species: { props.species }</p>
        { props.photo ? <img src= { props.photo } alt={ altText }></img> : "[No Photo]" }
        <button onClick={toggleBookmark}>Bookmark</button>
        <p>Is bookmarked? {isBookmarked ? "yes this animal is bookmarked" : "no this animal is not bookmarked"}</p>
    </section>);
};

Animal.propTypes = {
    name: PropTypes.string,
    species: PropTypes.string.isRequired,
    adopted: PropTypes.bool,
    age: PropTypes.number,
    photo: PropTypes.resetWarningCache
}

export default Animal;