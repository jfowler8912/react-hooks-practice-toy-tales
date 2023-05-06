import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, setToys, onUpdateToy}) {
  function handleDelete(id) {
    const updatedArray = toys.filter(toy => toy.id !== id)
    setToys(updatedArray)
  }
  const renderToys = toys.map (toy =>
    <ToyCard 
    key={toy.id}
    toy={toy}
    setToys={setToys}
    handleDelete={handleDelete}
    onUpdateToy={onUpdateToy}    
    />
    )
  return (
    <div id="toy-collection">{renderToys}</div>
  );
}

export default ToyContainer;
