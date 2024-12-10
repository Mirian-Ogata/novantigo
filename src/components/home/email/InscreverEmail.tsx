import InputEmail from "./InputEmail";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function InscreverEmail() {
  return (
    <div className="flex w-screen items-center justify-center py-12">
      <div className="flex w-[70vw] items-center gap-8">
        <div className="flex items-center justify-start gap-2 pb-4">
          <div>
            <Icon
              icon="mdi:email-plus-outline"
              width="32"
              height="32"
              className="text-green"
            />
            <span className="text-xl font-semibold text-orange">
              Inscreva seu E-mail
            </span>
            <p>
              Receba novidades em primeira mão, e tenha acesso às melhores
              ofertas!
            </p>
          </div>
        </div>
        <InputEmail />
      </div>
    </div>
  );
}
