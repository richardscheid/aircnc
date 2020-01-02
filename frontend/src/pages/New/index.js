import React, { useState } from "react";

export default function New() {
  const [price, setPrice] = useState("");
  const [techs, setTechs] = useState("");
  const [company, setCompany] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="company">Company *</label>
      <input
        id="company"
        placeholder="Your awesome company"
        value={company}
        onChange={event => setCompany(event.target.value)}
      />

      <label htmlFor="techs">Technologies *</label>
      <input
        id="techs"
        placeholder="Which technologies are used?"
        value={techs}
        onChange={event => setTechs(event.target.value)}
      />

      <label htmlFor="price">Price *</label>
      <input
        id="price"
        placeholder="Daily Price"
        value={price}
        onChange={event => setPrice(event.target.value)}
      />

      <button type="submit" className="btn">
        Save
      </button>
    </form>
  );
}
