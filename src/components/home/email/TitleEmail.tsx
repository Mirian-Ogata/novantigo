import { Icon } from "@iconify/react/dist/iconify.js";

export default function TitleEmail() {
  return (
    <div>
      <div className="flex items-center justify-start gap-2 pb-4">
        <Icon
          icon="mdi:email-plus-outline"
          width="32"
          height="32"
          className="text-green"
        />
        <span className="text-xl font-semibold text-orange">
          Inscreva seu E-mail
        </span>
      </div>
      <p>
        Receba novidades em primeira mão, e tenha acesso às melhores ofertas!
      </p>
    </div>
  );
}
