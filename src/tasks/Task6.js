// Import React library
import React from "react";
import ProductItem from "./ProductItem";

// Functional component
function Task6() {
    const products = [
        { name: "A Song of Ice and Fire", price: 2754 },
        { name: "The Vampire Diaries", price: 20275 },
        { name: "The Lord of the Rings", price: 2000 },
    ];

    return (
    <div>
        {/* Heading of the Task 6*/}
        <h1>Product List</h1>
        
        {/*Display Product List with Parent-Child Components*/}
        {products.map((product) => (
            <ProductItem
            key={product.name}
            name={product.name}
            price={product.price} 
        />
      ))}
    </div>
  );
}

//Exporting the components so further it can be used
export default Task6;