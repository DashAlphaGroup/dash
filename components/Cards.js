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
        <Card title={"Desenvolvimento de software personalizado"} desc={"Nossa ampla experiência e metodologias garantem soluções de software personalizadas escaláveis ​​e confiáveis ​​que atendem às suas necessidades de negócios."}  />
        <Card title={"Desenvolvimento de aplicações Web e Mobile"} desc={"Plataformas B2B e B2C construídas desde o início, independentemente da complexidade. Desenvolvimento de aplicativos iOS e Android, aplicativos móveis em React."}  />
        <Card title={"Gerenciamento de projetos"} desc={"Os projetos são gerenciados com eficiência desde o início até a conclusão, garantindo a entrega dentro do prazo e do orçamento, além de uma coordenação perfeita em todas as fases."}  />
        <Card title={"Design de UX/UI"} desc={"Nossos processos enfatizam o design centrado no usuário, a pesquisa e a importância de alinhar a UX/UI com a identidade da sua marca, ao mesmo tempo que garantem funcionalidade e engajamento."}  />
      </div>
    </>
  );
}
