import backgroundImg from "@/public/background.png";
import Image from "next/image";
import Navbar from "@/app/_components/Navbar";
import Sidebar from "@/app/_components/Sidebar";
export default function Page() {
  return (
    <div className="relative h-screen">
      <Image
        src={backgroundImg}
        alt="backgroundimg"
        fill
        placeholder="blur"
        className="object-cover z-0 filter blur-[2px]"
      />
      <Navbar />
      <Sidebar />
    </div>
  );
}
