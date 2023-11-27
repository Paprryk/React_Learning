function House(props)  {
   console.log("Props:", props);
   console.log("Location:", props.location);
   console.log("Size in ft:", props.size);
   console.log("Price:", props.price);
   return (
    <div>
        <p>Location: {props.location}</p>
        <p>Size in ft: {props.size}</p>
        <p>Price: {props.price}</p>
    </div>
   );
}

export default House;