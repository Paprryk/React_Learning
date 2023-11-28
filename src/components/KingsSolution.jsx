//imports the prop types library from the node_modules folder
import PropTypes from 'prop-types';
// React components must be capital


function King(props)  {
    // Components return in html
    return (
    <div>
        <p>Name: {props.name}</p>
        <p>City: {props.city}</p>
        <p>House: {props.house}</p>
        <p>Years: {props.years}</p>
    </div>
    )
}

King.propTypes = {
    name: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    house: PropTypes.string.isRequired,
    years: PropTypes.string.isRequired,
}

//lets you import the function into another file
export default King;