import Image from "next/image";
import bronzeimage from "@/public/bronze_frame_with_bronze_crown.png";
import PlusCircle from "@/public/PlusCircle.png";
import chip from "@/public/chip.png";
import zero from "@/public/000.png";
import space from "@/public/space1.png";
import ranolphBoundary from "@/public/Rectangleronalph.png";
import rtext from "@/public/rtext.png";
import hamburger from "@/public/hamburger.png";
import arrows from "@/public/ArrowsIn.png";

function Navbar() {
  return (
    <nav className="hidden relative z-10   px-5 sm:flex">
      <main className="flex gap-7">
        <div>
          <Image src={bronzeimage} alt="bronzeimg" />
        </div>

        <div className="flex items-center">
          <Image src={chip} alt="chip" className="h-16" />
          <div className="relative  w-28 m-0">
            <Image src={space} alt="space" fill className="object-cover" />
            <Image
              src={zero}
              alt="zero"
              className="h-8 relative z-10 left-[50%] translate-x-[-50%] "
            />
          </div>
          <Image src={PlusCircle} alt="Pluscircle" className="h-16" />
        </div>
      </main>
      {/* FIRST */}
      <main className="absolute h-full left-[50%] translate-x-[-50%]">
        <div className="relative  h-full w-[250px] ">
          <Image
            src={ranolphBoundary}
            alt="ranolphBoundary"
            fill
            className=""
          />
          <Image
            src={rtext}
            alt="ranolphText"
            className=" relative z-10 w-[12rem] left-[50%] translate-x-[-50%] translate-y-[50%]"
          />
        </div>
      </main>
      {/* second */}
      <main className="flex items-center absolute right-5 top-5 ">
        <Image src={arrows} alt="arrrows" />
        <Image src={hamburger} alt="hamburger" />
      </main>
    </nav>
  );
}

export default Navbar;
