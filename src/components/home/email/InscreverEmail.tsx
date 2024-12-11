import InputEmail from "./InputEmail";
import { Icon } from "@iconify/react/dist/iconify.js";
import TitleEmail from "./TitleEmail";

export default function InscreverEmail() {
  return (
    <div className="flex items-center justify-center py-12">
      <div className="flex w-[70vw] items-center gap-8">
        <TitleEmail />
        <InputEmail />
      </div>
    </div>
  );
}
