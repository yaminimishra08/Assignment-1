// Import React library
import React from "react";

// Functional component
function Task5({name, age, email}) {
    return (
        <div>
            {/* Heading of the Task 1*/}
            <h1>Task 5: User Details</h1>

            {/*Display User Details with props*/}
            <p><b>Name:</b> {name}</p>
            <p><b>Age:</b> {age}</p>
            <p><b>Email:</b> {email}</p>
        </div>
    );
}

//Exporting the components so further it can be used
export default Task5;
