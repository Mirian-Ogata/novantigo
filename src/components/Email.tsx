import { Icon } from "@iconify/react/dist/iconify.js";
import InputTexto from "./shared/InputTexto";
import ButtonPrincipal from "./shared/ButtonPrincipal";

export default function Email() {
  return (
    <div className="flex flex-row items-center justify-center">
      <div className="flex flex-col items-start">
        <div className="gap-2">
          <Icon
            icon="mdi:email-plus-outline"
            width="32"
            height="32"
            className="text-green"
          />
          <span className="pb-4 text-xl font-semibold text-orange">
            Inscreva seu E-mail
          </span>
        </div>
        <p className="text-base font-normal text-brown">
          Receba novidades em primeira mão, e tenha acesso às melhores ofertas!
        </p>
      </div>
      <div className="flex grow items-center gap-2">
        <InputTexto placeholder="Digite seu E-mail" />
        <ButtonPrincipal>Enviar</ButtonPrincipal>
      </div>
    </div>
  );
}
