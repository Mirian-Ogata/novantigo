interface ButtonPrincipalProps {
  children: string;
}

export default function ButtonPrincipal({ children }: ButtonPrincipalProps) {
  return (
    <button
      type="button"
      className="rounded bg-acqua p-2 text-xl font-semibold text-white hover:bg-orange"
    >
      {children}
    </button>
  );
}
