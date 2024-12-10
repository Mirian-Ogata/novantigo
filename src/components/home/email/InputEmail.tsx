import ButtonPrincipal from "../../shared/ButtonPrincipal";
import InputTexto from "../../shared/InputTexto";

export default function InputEmail() {
  return (
    <div className="flex flex-1 gap-2">
      <InputTexto placeholder="Digite seu e-mail" />
      <ButtonPrincipal>Enviar</ButtonPrincipal>
    </div>
  );
}
