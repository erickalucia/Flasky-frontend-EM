import logo from './logo.svg';
import './App.css';
import Animal from "./components/Animal";
import AnimalList from "./components/AnimalList"


const listOfAnimals = [
  {
    id: 101,
    name: "Violet",
    species: "Pitbull Mix",
  },
  {
    id: 102,
    name: "Norman",
    species: "Puppy",
    photo: "https://cdn.akc.org/content/hero/pyr_pup_hero.jpg"
  },
  {
    id: 103,
    name: "Furby",
    species: "Cat"
  },
  {
    id: 104,
    name: "Millie",
    species: "Cat"
  },
  {
    id: 105,
    name: "Koda",
    species: "Kitten"
  }
]

function App() {
  // you can do a normal comment like this for javascript that isn't jsx (ie js that is not "returned" can still be //s)
  return (
    <section>
      <h1>The Sapphire Animal Adoption Agency</h1>
      <h2>Animal Listings</h2>
      <AnimalList listOfAnimals={ listOfAnimals }></AnimalList>
    </section>

  );
}

export default App;
