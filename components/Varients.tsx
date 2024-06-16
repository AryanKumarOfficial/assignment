import React, { useState } from "react";

const Color = () => {
  const [colorForm, setColorForm] = useState({
    color_1: "#ff0000",
    color_2: "#00ff00",
  });

  const [sizeForm, setSizeForm] = useState({
    size: "small",
  });

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColorForm({
      ...colorForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddColor = (e: React.SyntheticEvent) => {
    e.preventDefault();
    let { color_1, color_2 } = colorForm;
    if (localStorage.getItem("colors")) {
      let colors: string[] = JSON.parse(localStorage.getItem("colors") || "[]");
      colors = colors.filter((c) => c !== color_1 && c !== color_2);
      colors.push(color_1, color_2);
      localStorage.setItem("colors", JSON.stringify(colors));
    } else {
      localStorage.setItem("colors", JSON.stringify([color_1, color_2]));
    }
  };

  const handleSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSizeForm({
      ...sizeForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddSize = (e: React.SyntheticEvent) => {
    e.preventDefault();
    let { size } = sizeForm;
    if (localStorage.getItem("sizes")) {
      let sizes: string[] = JSON.parse(localStorage.getItem("sizes") || "[]");
      sizes = sizes.filter((s) => s !== size);
      sizes.push(size);
      localStorage.setItem("sizes", JSON.stringify(sizes));
    } else {
      localStorage.setItem("sizes", JSON.stringify([size]));
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
          className="hidden"
          value="small"
          onChange={handleSizeChange}
        />
        <label
          htmlFor="small"
          className="cursor-pointer bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors"
        >
          Small
        </label>

        <input
          type="radio"
          name="size"
          id="medium"
          className="hidden"
          value="medium"
          onChange={handleSizeChange}
        />
        <label
          htmlFor="medium"
          className="cursor-pointer bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors"
        >
          Medium
        </label>

        <input
          type="button"
          value="Add Size"
          className="bg-blue-500 text-white px-4 py-2 cursor-pointer hover:bg-blue-600 rounded-md capitalize transition-colors"
          onClick={handleAddSize}
        />
      </div>

      <style jsx>{`
        input[type="radio"]:checked + label {
          background-color: #00fd4c; /* Blue color */
          color: white;
        }
      `}</style>
    </section>
  );
};

export default Color;
