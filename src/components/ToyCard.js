import React from "react";

function ToyCard({toy, setToys, handleDelete, onUpdateToy}) {
  const {id, name, image, likes} = toy

  function deleteToy() {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE",
    })
    handleDelete(id)
  }

  function handleToyLike() {
    const updateObj = {likes: toy.likes +1}
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updateObj)
    })
    .then((r) => r.json())
    .then((updatedToy) => {
      onUpdateToy(updatedToy)
    })
  }



  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={handleToyLike}>Like {"<3"}</button>
      <button className="del-btn" onClick={deleteToy}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
