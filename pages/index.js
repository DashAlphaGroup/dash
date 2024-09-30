import Image from "next/image";
import localFont from "next/font/local";

import Layout from "@/components/Layout";
import Cards from "@/components/Cards";

export default function Home() {
  return (
    <div className="bg-white ">
      <div className="flex justify-center items-center bg-blue ">
        <div className="flex flex-col w-72 py-40 mr-[30%] mt-12 text-white">
          <h1 className="text-7xl">Construimos excelência</h1>
          <p className="text-xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
        </div>
        <div></div>
      </div>

      <div className="flex flex-col items-center">
        <Cards />
        <button className="flex justify-center items-center bg-blue hover:bg-sky-700 text-white font-bold py-2 px-4 rounded">
          Contate nossos especialistas
        </button>
      </div>
      <h1>dwad</h1>
      <h1>dwad</h1>
      <h1>dwad</h1>
      <h1>dwad</h1>
      {/* <h1 className="h-screen">Main</h1> */}
      {/* <h1 className="h-screen">Main</h1> */}
    </div>
  );
}
