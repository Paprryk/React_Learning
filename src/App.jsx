import logo from './logo.svg';
import './App.css';
import Trainer from "./components/Trainer.jsx";
import Student from "./components/Student.jsx";
import House from "./components/House.jsx";
import data from "./data.json"

console.log("Trainers:",data);

function App() {
  return (
    <div>
      <h2>Testing React!</h2>
      <Trainer />
      <Student />
      <Trainer />
      <Student />
      <h1>Houses for sale:</h1>
       <ul>
       <li><House location="Cardiff" size="120ft2" price="£150,000"/></li>
       <li><House location="Middlesbrough" size="500ft2" price="£300,000"/></li>
       <li><House location="Central London" size="300ft2" price="£1,500,000"/></li>
       <li><House location="Newcastle" size="200ft2" price="£800,000"/></li>
       </ul>
    </div>
    );
}

export default App;
