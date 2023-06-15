import './AnimalList.css';
import PropTypes from 'prop-types';
import Animal from './Animal';

const AnimalList = ({ listOfAnimals }) => {
    return (
    <section className="AnimalList">
        <h2>Animal List</h2>
        <ul className="AnimalList__list">
            {listOfAnimals.map((creature) => (
                <li key={creature.id}>
                    <Animal
                        name={ creature.name }
                        species={ creature.species }
                        photo={ creature.photo }
                    />
                </li>
        ))}
        </ul>
        <img src="http://placekitten.com/g/200/100" alt="Cat2"></img>
    </section>)
};

AnimalList.propTypes = {
    listOfAnimals: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
        })
    )
}

export default AnimalList;