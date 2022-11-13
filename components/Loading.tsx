import Image from "next/image";
//
import loading from "../utils/jj-loading.gif";

export default function LLoading() {
  return (
    <div className="h-full flex items-center justify-center">
      <Image height={110} width={110} src={loading} alt="loading" />
    </div>
  );
}
