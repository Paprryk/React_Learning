import logo from './logo.svg';
import './App.css';
import Trainer from "./components/Trainer.jsx";
import Student from "./components/Student.jsx";
import House from "./components/House.jsx";
import trainers from "./data/trainers.json"
import kings from "./data/kings.json"
import King from "./components/KingsSolution.jsx"

console.log("Trainers:",trainers);

function App() {

  const kingsComponents = [];
  for (const king of kings) {
    console.log("Kings:", king);
    kingsComponents.push(
      <King key={
        king.nm + king.cty + king.hse +king.yrs}
        name={king.nm}
        city={king.cty}
        house={king.hse}
        years={king.yrs} />
    )
  }

  const trainerComponents = [];
  // looping through each trainer in the json file
  for (const trainer of trainers) {
    console.log("trainer:", trainer);
    // add a blank trainer into the array
    trainerComponents.push(
      <Trainer key={
        trainer.name + " " + trainer.specialism} 
        name={trainer.name} 
        age={trainer.age} 
        specialism={trainer.specialism} />
    );
  }

  return (
    <div>
      <h2>Testing React!</h2>
      <h1>Houses for sale:</h1>
       <ul>
       <li><House location="Cardiff" size="120ft2" price="£150,000"/></li>
       <li><House location="Middlesbrough" size="500ft2" price="£300,000"/></li>
       <li><House location="Central London" size="300ft2" price="£1,500,000"/></li>
       <li><House location="Newcastle" size="200ft2" price="£800,000"/></li>
       </ul>
       {trainerComponents}
       {kingsComponents}
    </div>
    );
}

export default App;
