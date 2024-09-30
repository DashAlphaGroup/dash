import Head from "next/head";


function Card({title, desc}) {
  return (
    <div className="flex flex-col   p-6 w-72 border rounded-md mx-2 shadow">
    <p className="text-xl mb-4">{title}</p>
    <p className="text-base">{desc}</p>
  </div>
  )
}


export default function Cards({ children }) {
  return (
    <>
      <div className="flex justify-center m-4">
        <Card title={"Desenvolvimento de site"} desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque aliquam, maxime possimus corporis repellendus magni perferendis totam enim nulla. Tenetur nisi iusto quidem expedita, veritatis eos? Dolore libero odit porro?"}  />
        <Card title={"Desenvolvimento de site"} desc={"Lorem ipsumsicing elit. Atque aliquam, maxime possimus corporis repellendus magni perferendis totam enim nulla. Tenetur nisi iusto quidem expedita, veritatis eos? Dolore libero odit porro?"}  />
        <Card title={"Desenvolvimento de site"} desc={"Lorem ipsum dolor sit amet conssi iusto quidem expedita, veritatis eos? Dolore libero odit porro?"}  />
        <Card title={"Desenvolvimento de site"} desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque aliquam, maxime possimus corporis repellendus magni perferendis totam enim nulla. Tenetur nisi iusto quidem expedita, veritatis eos? Dolore libero odit porro?"}  />
      </div>
    </>
  );
}
