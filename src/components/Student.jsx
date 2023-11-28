//imports the prop types library from the node_modules folder
import PropTypes from 'prop-types';
// React components must be capital

function Student(props)  {
    // Components return in html
    <div>
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>Course: {props.course}</p>
    </div>
}

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    course: PropTypes.string,
}

//lets you import the function into another file
export default Student;