// Import React library
import React from "react";

// Functional component
function Task2() {
    //Define current date/time INSIDE the function
    const now = new Date();

    return (
        <div>
            {/* Heading of the Task 2 */}
            <h1>Task 2: Current Date and Time</h1>

            {/*Display current Date*/}
            <p>Date: {now.toLocaleDateString()}</p>

            {/*Display current Time*/}
            <p>Time: {now.toLocaleTimeString()}</p>

        </div>
    );
}

//Exporting the components so further it can be used
export default Task2;