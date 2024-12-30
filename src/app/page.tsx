import Image from "next/image";
import Banner from "@/components/home/Banner";
import PopularServices from "@/components/home/PopularServices";
import OurTeam from "@/components/home/OurTeam";

export const metadata = {
  noLayout: true
}

export default function Home() {
  return (
    <div className="w-full">
     <Banner/>
     <PopularServices/>
     <OurTeam/>
    </div>
  );
}
