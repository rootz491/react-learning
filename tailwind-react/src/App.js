import React from "react";
import Button from "./components/Button";
import Notification from "./components/Notification";
import Card from "./components/Card";


function App() {
  return (
    <div className="container space-y-10 bg-gray-100 py-4 min-h-screen m-auto">
      
      
      <Button />

      <Notification />

      <Card />


      <div className="md:w-1/2 w-2/3 m-auto border-2 p-2 text-center rounded-sm">
        <h1 className="text-primary text-lg">Karan Sharma</h1>
        <p className="text-sm">hii there, im doing good</p>
      </div>


    </div>
  );
}

export default App;
