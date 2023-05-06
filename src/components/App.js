import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])
  const [toyName, setToyName] = useState('')
  const [toyImage, setToyImage] = useState('')


  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  useEffect(fetchToys,[])

  function fetchToys () {
    fetch('http://localhost:3001/toys')
    .then ((r) => r.json())
    .then ((toysData) => setToys(toysData))
  }

  function changeFormName(name) {
    setToyName(name)
  }

  function changeFormImage(image) {
    setToyImage(image)
  }

  function submitForm(e) {
    e.preventDefault()
    fetch('http://localhost:3001/toys',
    {
      method:"POST",
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        name: toyName,
        image: toyImage}
        )
    })
    .then((r) => r.json())
    .then((data) => handleAddToy(data))

  }
  function handleAddToy(newToy) {
    const updatedToysArray = [...toys, newToy]
    setToys(updatedToysArray)
  }

  function handleUpdateToy(updatedToy) {
    const updatedToys = toys.map(toy => toy.id === updatedToy.id ? updatedToy : toy)
    setToys(updatedToys)

  }


  return (
    <>
      <Header />
      {showForm ? <ToyForm toyName={toyName} toyImage={toyImage} changeFormName={changeFormName} changeFormImage={changeFormImage} submitForm={submitForm}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} setToys={setToys} onUpdateToy={handleUpdateToy}/>
    </>
  );
}

export default App;
