// Import React library
import React from "react";

// Functional component
function ProductItem(props) {
  return (
    <div>
      <p><b>Name:</b> {props.name}</p>
      <p><b>Price:</b> ₹{props.price}</p>
      <hr />
    </div>
  );
}

//Exporting the components so further it can be used
export default ProductItem;