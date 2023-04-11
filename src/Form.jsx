import React, { useState } from "react";

const Form = ({ addColor }) => {
  const [color, setColor] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (color) {
      addColor(color);
    }
  };
  return (
    <section className="container">
      <h4>Color generator</h4>
      <form className="color-form" action="" onSubmit={handleSubmit}>
        {/* <label htmlFor="color">Color</label> */}
        <input
          type="color"
          onChange={(e) => setColor(e.target.value)}
          value={color}
        />
        <input
          type="text"
          name="color"
          onChange={(e) => setColor(e.target.value)}
          value={color}
          placeholder="#f15025"
        />

        {/* <div>
          <label htmlFor="">Text</label>
          <input
            value={text}
            type="text"
            name="text"
            onChange={(e) => setText(e.target.value)}
          />
        </div> */}
        <button className="btn" type="submit" style={{ background: color }}>
          changer color
        </button>
      </form>
    </section>
  );
};

export default Form;
