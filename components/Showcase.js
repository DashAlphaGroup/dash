import { Tooltip } from "@mui/material";
import Head from "next/head";
import Image from "next/image";

function CustomImage({ src, name }) {
  return (
    <Tooltip title={name} placement="top">
      <div
        className="flex items-center border mx-2 p-2 px-8 rounded-md shadow-sm
       transition duration-300 hover:-translate-y-1 hover:shadow-lg"
      >
        <div>
          <Image src={src} alt={name} width={100} height={100} />
        </div>
      </div>
    </Tooltip>
  );
}

export default function Showcase({ children }) {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl mb-10">
          Utilizamos as mesma tecnologias dos sites abaixo
        </h1>
        <div className="flex">
          <CustomImage src={`/empresas/chatGPT.png`} name={"ChatGPT"} />
          <CustomImage src={`/empresas/max.png`} name={"Max"} />
          <CustomImage src={`/empresas/nike.png`} name={"Nike"} />
          <CustomImage src={`/empresas/nvidia.png`} name={"Nvidia"} />
          <CustomImage src={`/empresas/nu.png`} name={"Nubank"} />
          <CustomImage src={`/empresas/spotify.png`} name={"Spotify"} />
          <CustomImage src={`/empresas/tiktok.png`} name={"TikTok"} />
        </div>
      </div>
    </>
  );
}
