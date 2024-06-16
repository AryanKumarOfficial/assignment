import React from "react";
import Varient from "@/components/Varients";
import View from "@/components/View";

export default function Home() {
  return (
    <>
      <main className="min-h-screen flex flex-col gap-8 justify-center items-center">
        <Varient />
        <View />
      </main>
    </>
  );
}
