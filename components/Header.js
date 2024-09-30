import Head from "next/head";

export default function Header({ children }) {
  return (
    <>
      <header className="w-full h-12 p-2 flex items-center justify-between text-white bg-darkBackground
      fixed">
        <div className="flex">
          <p className="p-2">Dash</p>
        </div>

        <div className="flex">
          <p className="p-2">Quem somos</p>
          <p  className="p-2">Projetos</p>
        </div>

      </header>
    </>
  );
}
