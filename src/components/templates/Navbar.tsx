import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <header className="grid-cols-3 bg-lightOrange p-6 shadow-md">
      <div className="flex flex-1 flex-row items-center justify-between">
        <Link href="/" className="">
          <Image
            src="./Logo.svg"
            height={24}
            width={193}
            alt="Logo-Novantigo"
          />
        </Link>
        <div className="flex gap-10 text-base font-medium uppercase text-brown">
          <Link className="hover:text-orange" href="/">
            início
          </Link>
          <Link className="hover:text-orange" href="/vasos-e-cahepos">
            vasos & cachepôs
          </Link>
          <Link className="hover:text-orange" href="/luminarias-e-lustres">
            luminárias & Lustres
          </Link>
          <Link className="hover:text-orange" href="/decoracoes">
            Decorações
          </Link>
          <Link className="hover:text-orange" href="/brindes">
            Brindes
          </Link>
          <Link className="hover:text-orange" href="/todosOsProdutos">
            Todos os Produtos
          </Link>
        </div>
        <div className="flex flex-row items-center gap-4">
          <Icon
            icon="mingcute:search-ai-line"
            width="32"
            height="32"
            className="text-salmon"
          />
          <Link href="/carrinho">
            <Icon
              icon="map:grocery-or-supermarket"
              width="32"
              height="32"
              className="text-salmon"
            />
          </Link>

          <Icon
            icon="teenyicons:user-square-solid"
            width="32"
            height="32"
            className="text-salmon"
          />
        </div>
      </div>
    </header>
  );
}
