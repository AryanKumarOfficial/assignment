import { useRouter } from "next/router";
import React, { use, useEffect, useState } from "react";

const View = () => {
  const router = useRouter();

  const [colors, setColors] = useState(["#ff0000", "#00ff00"]);
  const [sizes, setSizes] = useState(["small"]);

  useEffect(() => {
    if (localStorage.getItem("colors")) {
      setColors(JSON.parse(localStorage.getItem("colors") || "[]"));
    }
    if (localStorage.getItem("sizes")) {
      setSizes(JSON.parse(localStorage.getItem("sizes") || "[]"));
    }
  }, [router.query]);
  return (
    <>
      <section className="view flex flex-col justify-center items-start gap-4 border p-8 rounded-md border-gray-300">
        <h1 className="uppercase font-bold text-xl">View</h1>
        <h2 className="uppercase font-bold text-xl">Colors</h2>
        <div className="colors flex flex-row justify-center items-center gap-4">
          {colors.map((color, index) => {
            return (
              <div
                key={index}
                className="color"
                style={{
                  backgroundColor: color,
                  width: "50px",
                  height: "50px",
                }}
              />
            );
          })}
        </div>
        <h2 className="uppercase font-bold text-xl">Sizes</h2>
        <div className="sizes flex flex-row justify-center items-center gap-4">
          <div className="size flex justify-center items-center gap-4">
            {sizes.map((size, index) => {
              return (
                <div
                  key={index}
                  className="size cursor-pointer bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors text-xs"
                >
                  {size}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default View;
