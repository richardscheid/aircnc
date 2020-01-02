import React, { useState, useMemo } from "react";
import camera from "../../assets/camera.svg";

import "./styles.css";

export default function New() {
  const [price, setPrice] = useState("");
  const [techs, setTechs] = useState("");
  const [company, setCompany] = useState("");
  const [thumbnail, setThumbnail] = useState("");

  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }, [thumbnail]);

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label
        id="thumbnail"
        style={{ backgroundImage: `url(${preview})` }}
        className={thumbnail ? "has-thumbnail" : ""}
      >
        <input
          type="file"
          onChange={event => setThumbnail(event.target.files[0])}
        />
        <img src={camera} alt="Select the imamge" />
      </label>

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
