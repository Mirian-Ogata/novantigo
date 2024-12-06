interface InputTextoProps {
  placeholder: string;
}

export default function InputTexto({ placeholder }: InputTextoProps) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="rounded-md border border-blue-700"
    ></input>
  );
}
