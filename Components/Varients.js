import React, { useState } from "react";

const Color = () => {
  const [colorForm, setColorForm] = useState({
    color_1: "#ff0000",
    color_2: "#00ff00",
  });

  const handleColorChange = (e) => {
    setColorForm({
      ...colorForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddColor = (e) => {
    e.preventDefault();
    // store the colors to the localStorage
    let { color_1, color_2 } = colorForm;
    if (localStorage.getItem("colors")) {
      let colors = JSON.parse(localStorage.getItem("colors"));
      colors.push(color_1, color_2);
      localStorage.setItem("colors", JSON.stringify(colors));
    } else {
      localStorage.setItem("colors", JSON.stringify([color_1, color_2]));
    }
  };
  return (
    <section className="varients flex flex-col justify-center items-start gap-4 border p-8 rounded-md border-gray-300">
      <h1 className="uppercase font-bold text-xl">Varients</h1>
      <h2 className="uppercase font-bold text-xl">Colors</h2>
      <div className="colors flex flex-row justify-center items-center gap-4">
        <input
          type="color"
          name="color_1"
          id="color_1"
          onChange={handleColorChange}
          value={colorForm.color_1}
        />
        <input
          type="color"
          name="color_2"
          id="color_2"
          onChange={handleColorChange}
          value={colorForm.color_2}
        />
        <input
          type="button"
          value="add color"
          onClick={handleAddColor}
          className="
      bg-blue-500 text-white px-2 py-1 text-xs cursor-pointer hover:bg-blue-600 rounded-md capitalize"
        />
      </div>
      <h2 className="uppercase font-bold text-xl">size</h2>
      <div className="size flex justify-center items-center gap-4">
        <input
          type="radio"
          name="size"
          id="small"
          value="small"
          className="cursor-pointer"
        />
        <label htmlFor="small">small</label>
        <input
          type="radio"
          name="size"
          id="medium"
          value="medium"
          className="cursor-pointer"
        />
        <label htmlFor="medium">medium</label>
        <input
          type="button"
          value="add size"
          className="bg-blue-500 text-white px-2 py-1 text-xs cursor-pointer hover:bg-blue-600 rounded-md capitalize"
        />
      </div>
    </section>
  );
};

export default Color;
