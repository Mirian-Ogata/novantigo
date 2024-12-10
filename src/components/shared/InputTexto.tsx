interface InputTextoProps {
  placeholder: string;
}

export default function InputTexto({ placeholder }: InputTextoProps) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="flex flex-1 rounded bg-lightGray p-2.5 text-base font-light focus:border-orange"
    ></input>
  );
}
