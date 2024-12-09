import ButtonPrincipal from "./ButtonPrincipal";

interface InputTextoProps {
  placeholder: string;
}

export default function InputTexto({ placeholder }: InputTextoProps) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="bg-lightGray flex flex-1 rounded p-2.5 text-base font-light"
    ></input>
  );
}
