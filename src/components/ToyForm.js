import React from "react";

function ToyForm(props) {
  const {toyName, toyImage, changeFormName, changeFormImage, submitForm} = props
  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={submitForm}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={toyName}
          onChange={e => changeFormName(e.target.value)}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={toyImage}
          onChange={e => changeFormImage(e.target.value)}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
