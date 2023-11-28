//imports the prop types library from the node_modules folder
import PropTypes from 'prop-types';
// React components must be capital


function Trainer(props)  {
    // Components return in html
    <div>
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>Specialism: {props.specialism}</p>
    </div>
}

Trainer.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    specialism: PropTypes.string,
}
//lets you import the function into another file
export default Trainer;