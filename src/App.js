 // Import React
import React from "react";
//Styling
import './App.css';
//Importing Task1 components
import Task1 from "./tasks/Task1";

//Importing Task2 components
import Task2 from "./tasks/Task2";

//Importing Task3 components
import Task3 from "./tasks/Task3";

//Importing Task4 components
import Task4 from "./tasks/Task4";

//Importing Task5 components
import Task5 from "./tasks/Task5";

//Importing Task6 components
import Task6 from "./tasks/Task6";

function App() {
  return (
    <div className="App">
          {/* Rendering Task1 */}
          <Task1 />

          {/* Rendering Task2 */}
          <Task2 />

          {/* Rendering Task3 */}
          <Task3 />

          {/* Rendering Task4 */}
          <Task4 />

          {/* Rendering Task4 */}
          <Task5 
          name="Yamini Mishra" 
          age={19} 
          email="yaminimishra0804@gmail.com" />

          {/* Rendering Task6 */}
          <Task6 />
    </div>
  );
}

//Export app component
export default App;