import React, { useState, useMemo } from "react";
import camera from "../../assets/camera.svg";
import api from "../../services/api";

import "./styles.css";

export default function New({ history }) {
  const [price, setPrice] = useState("");
  const [techs, setTechs] = useState("");
  const [company, setCompany] = useState("");
  const [thumbnail, setThumbnail] = useState("");

  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }, [thumbnail]);

  async function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData();
    const user_id = localStorage.getItem("user");

    data.append("techs", techs);
    data.append("price", price);
    data.append("company", company);
    data.append("thumbnail", thumbnail);

    await api.post("spots", data, {
      headers: { user_id }
    });

    history.push("/dashboard");
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
