// components
import Brand from "./filtred/Brand";
import Color from "./filtred/Color";
import Price from "./filtred/Price";
import Size from "./filtred/Size";

export default function Filtred() {
  return (
    <div className="rounded-[10px] p-[15px] bg-white shadow-jj w-[280px] flex flex-col divide-y">
      <Price />
      <Size />
      <Brand />
      <Color />
    </div>
  );
}