// Import React library
import React from "react";

// Functional component
function Task3() {
    // Variable for dynamic greeting
    const message = "Hello, Yamini Mishra!";
      
    return (
        <div>
            {/*Heading of the Task 3*/}
            <h1>Task 3: Dynamic Greeting</h1>
            
            {/* Displaying Dynamic Greeting Message using JSX */}
            <h2>{message}</h2>

        </div>
        );
    }

//Exporting the components so further it can be used
export default Task3;
