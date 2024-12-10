import Image from "next/image";

export type BannerPrincipalProps = {
  imagem: string;
  alt: string;
};

export default function BannerPrincipal({ imagem, alt }: BannerPrincipalProps) {
  return <Image src={imagem} alt={alt} />;
}
