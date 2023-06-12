import logo from './logo.svg';
import './App.css';
import Animal from "./components/Animal";

function App() {
  // you can do a normal comment like this for javascript that isn't jsx (ie js that is not "returned" can still be //s)
  return (
    <section>
      <h1>The Sapphire Animal Adoption Agency</h1>
      <h2>Animal Listings</h2>
      {/* I want to list */} 
      <Animal></Animal>
      <Animal></Animal>
      <Animal></Animal>
      <Animal></Animal>
      <Animal></Animal>
      <Animal></Animal>
    </section>

  );
}

export default App;
