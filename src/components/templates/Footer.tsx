import { Icon } from "@iconify/react/dist/iconify.js";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-lightOrange">
      <div className="flex flex-1 flex-row justify-around py-14">
        <div className="flex flex-col">
          <Image
            src="./Logo.svg"
            height={25}
            width={208}
            alt="Logo-Novantigo"
          />
          <h2 className="flex pt-6 justify-start items-center">
            Siga em nossas rede sociais:
          </h2>
          <div className="flex bg-acqua w-16 h-0.5 border rounded-sm border-acqua my-2"></div>
          <div className="flex justify-start items-center gap-2">
            <Link href="*">
              <Icon
                icon="fe:facebook"
                width="32"
                height="32"
                className="text-orange"
              />
            </Link>
            <Link href="*">
              <Icon
                icon="mdi:pinterest"
                width="32"
                height="32"
                className="text-orange"
              />
            </Link>
            <Link href="*">
              <Icon
                icon="mdi:instagram"
                width="32"
                height="32"
                className="text-orange"
              />
            </Link>
            <Link href="*">
              <Icon
                icon="ri:youtube-fill"
                width="32"
                height="32"
                className="text-orange"
              />
            </Link>
          </div>
        </div>
        <div className="grid-cols-2 flex items-center">
          <div>
            <h2 className="text-orange text-2xl font-medium">Links Úteis</h2>
            <div className="bg-acqua w-16 h-0.5 border rounded-sm border-acqua my-2"></div>
            <div className="flex flex-col gap-4">
              <Link href="*">Personalização de Luminárias</Link>
              <Link href="*">Perguntas Frequentes</Link>
              <Link href="*">Frente, Envio e Produção</Link>
              <Link href="*">Políticas de Trocas e Devoluções</Link>
              <Link href="*">Segurança e Privacidade</Link>
            </div>
          </div>
          <div className="bg-orange w-px h-72 mx-32 "></div>
          <div>
            <div>
              <h2 className="text-orange text-2xl font-medium">Fale Conosco</h2>
              <div className="bg-acqua w-16 h-0.5 border rounded-sm border-acqua my-2"></div>
              <div className="flex flex-col gap-4">
                <Link href="*" className="flex flex-row gap-2">
                  <Icon
                    icon="ic:baseline-whatsapp"
                    width="24"
                    height="24"
                    className="text-orange"
                  />
                  (11) 2502 - 0449
                </Link>
                <Link href="*" className="flex flex-row gap-2">
                  <Icon
                    icon="mdi:email-outline"
                    width="24"
                    height="24"
                    className="text-orange"
                  />
                  atendimente@novantigo.com.br
                </Link>
              </div>
            </div>
            <div className="mt-14">
              <h2 className="text-orange text-2xl font-medium">
                Horário de Atendimento
              </h2>
              <div className="bg-acqua w-16 h-0.5 border rounded-sm border-acqua my-2"></div>
              <h3>Segunda à Sexta: 09h00 - 18h00</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-1 bg-orange w-auto h-px mx-6"></div>
      <div className="flex flex-col justify-center items-center py-6">
        <h2 className="font-light">
          © Copyright | Novantigo® 2024 | CNPJ.: 43.090.352/0001-98
        </h2>
      </div>
    </footer>
  );
}
