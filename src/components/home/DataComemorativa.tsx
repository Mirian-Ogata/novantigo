import Image from "next/image";

export default function DataComemorativa() {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="pb-10 text-center">
        <h2 className="text-2xl font-semibold text-acqua">Data Comemorativa</h2>
        <p className="py-2 text-base font-normal text-brown">
          Texto explicativo
        </p>
      </div>
      <div className="flex items-center justify-center gap-6">
        <div className="flex flex-col items-center justify-center">
          <Image
            src={
              "https://img.freepik.com/free-photo/cute-christmas-sock-table_23-2147955686.jpg?uid=R138672655&ga=GA1.1.1818924498.1725973277&semt=ais_hybrid"
            }
            height={300}
            width={300}
            alt="natal"
          />
          <h3 className="py-2 text-base font-normal text-green">
            Decrição do Produto Teste 1
          </h3>
          <strong className="text-base text-salmon">R$ 0,00</strong>
          <span className="text-sm font-light text-brown">12x R$ 0,00</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image
            src={
              "https://img.freepik.com/free-photo/decorative-christmas-background-with-letters-circle-stars_23-2147718988.jpg?uid=R138672655&ga=GA1.1.1818924498.1725973277&semt=ais_hybrid"
            }
            height={300}
            width={300}
            alt="natal"
          />
          <h3 className="py-2 text-base font-normal text-green">
            Decrição do Produto Teste 2
          </h3>
          <strong className="text-base text-salmon">R$ 0,00</strong>
          <span className="text-sm font-light text-brown">12x R$ 0,00</span>
        </div>
      </div>
    </div>
  );
}
