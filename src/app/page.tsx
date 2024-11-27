import Image from "next/image";
import Banner from "@/components/home/Banner";

export const metadata = {
  noLayout: true
}

export default function Home() {
  return (
    <div className="w-full">
     <Banner/>
    </div>
  );
}
