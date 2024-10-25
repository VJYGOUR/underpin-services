import Image from "next/image";
import component2 from "@/public/Component2.png";
import viking from "@/public/viking.png";
import frame from "@/public/frame.png";
import Group39 from "@/public/Group39.png";
import rectangle55 from "@/public/rectangle55.png";
import slotMachine from "@/public/slotMachine.jpg";
import all from "@/public/all.png";
import favorite from "@/public/favorite.jpg";
import ftext from "@/public/favouritetext.png";
import smallslot from "@/public/smallSlot.jpg";
import slotstext from "@/public/slotstext.png";
import frame159 from "@/public/frame159.png";
import fishingt from "@/public/fishingt.png";
import card from "@/public/card.png";
import othertext from "@/public/othertext.png";
function Sidebar() {
  return (
    <>
      <div className="hidden relative z-10   items-center gap-6 sm:flex">
        <Image src={component2} alt="sidebar" className="h-[85%]" />
        <Image src={viking} alt="viking" className=" w-[17%]" />
        <div className="w-full h-full flex  gap-4 overflow-scroll">
          <div className="min-w-[50%]">
            <Image src={frame} alt="frame" className="w-[17rem]" />
            <Image src={frame} alt="frame" className="w-[17rem]" />
          </div>
          <div className="min-w-[50%]">
            <Image src={frame} alt="frame" className="w-[17rem]" />
            <Image src={frame} alt="frame" className="w-[17rem]" />
          </div>
          <div className="min-w-[50%]">
            {" "}
            <Image src={frame} alt="frame" className="w-[17rem]" />
            <Image src={frame} alt="frame" className="w-[17rem]" />
          </div>
          <div className="min-w-[50%]">
            <Image src={frame} alt="frame" className="w-[17rem]" />
            <Image src={frame} alt="frame" className="w-[17rem]" />
          </div>
          <div className="min-w-[50%]">
            <Image src={frame} alt="frame" className="w-[17rem]" />
            <Image src={frame} alt="frame" className="w-[17rem]" />
          </div>
          <div className="min-w-[50%]">
            <Image src={frame} alt="frame" className="w-[17rem]" />
            <Image src={frame} alt="frame" className="w-[17rem]" />
          </div>
          <div className="min-w-[50%]">
            <Image src={frame} alt="frame" className="w-[17rem]" />
            <Image src={frame} alt="frame" className="w-[17rem]" />
          </div>
          <div className="min-w-[50%]">
            <Image src={frame} alt="frame" className="w-[17rem]" />
            <Image src={frame} alt="frame" className="w-[17rem]" />
          </div>
          <div className="min-w-[50%]">
            <Image src={frame} alt="frame" className="w-[17rem]" />
            <Image src={frame} alt="frame" className="w-[17rem]" />
          </div>
          <div className="min-w-[50%]">
            <Image src={frame} alt="frame" className="w-[17rem]" />
            <Image src={frame} alt="frame" className="w-[17rem]" />
          </div>
        </div>
      </div>
      {/* MOBILE */}
      <div className=" relative z-10 h-auto rotate-90 sm:hidden ">
        {/* <Image src={component2} alt="sidebar" className="h-[85%]" /> */}

        <Image src={Group39} alt="sidebar" className="h-[24rem] w-[6rem]" />
        <Image
          src={rectangle55}
          alt="rectangle55"
          className="absolute top-4 w-[3.6rem]  left-5"
        />
        <Image
          src={slotMachine}
          alt="slotmachine"
          className="absolute top-8 left-6 w-[2.8rem] rotate-[-90deg] "
        />
        <Image
          src={all}
          alt="all"
          className="absolute top-12 w-[2.5rem] left-12 rotate-[-90deg] "
        />
        <Image
          src={favorite}
          alt="favorite"
          className="absolute top-[7rem] left-3  w-[3.8rem] rotate-[-90deg]"
        />
        <Image
          src={ftext}
          alt="ftext"
          className="absolute top-[8rem] left-12 w-[3.5rem] rotate-[-90deg] "
        />
        <Image
          src={smallslot}
          alt="smallslot"
          className="absolute top-[10.5rem] left-5  w-[3.5rem] rotate-[-90deg] "
        />
        <Image
          src={slotstext}
          alt="slotstext"
          className="absolute top-[12rem] left-14 w-[2.5rem] rotate-[-90deg] "
        />
        <Image
          src={frame159}
          alt="frame159"
          className="absolute top-[15.5rem] left-6  w-[3.5rem] rotate-[-90deg] "
        />
        <Image
          src={fishingt}
          alt="fishingt"
          className="absolute top-[16.5rem] left-12  w-[3rem] rotate-[-90deg] "
        />
        <Image
          src={card}
          alt="card"
          className="absolute top-[19rem] left-4  w-[3.5rem] rotate-[-90deg]"
        />
        <Image
          src={othertext}
          alt="othertext"
          className="absolute top-[20rem] left-12 w-[2.9rem] rotate-[-90deg]"
        />
      </div>
      <div className="relative top-[-15rem]  left-[50%] translate-x-[-50%]  z-10   sm:hidden">
        <Image
          src={viking}
          alt="viking"
          className="object-cover w-[24rem] h-[22rem] "
        />
      </div>
      <div className="relative mt-12 top-[-15rem] left-[50%] translate-x-[-50%] z-10   sm:hidden">
        <Image src={frame} alt="frame" className="" />
      </div>
    </>
  );
}

export default Sidebar;
