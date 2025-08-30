"use client";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import Image from "next/image";
import { HeroCards } from "./HeroCards";
import { HeroData } from "@/app/types/landing";

const Hero = () => {

  const [mockHeroData, setMockHeroData] = useState<HeroData | null>(null);

  useEffect(() => {
    const fetchHero = async () => {
    try {
          const response = await fetch("/api/hero");
      const data = await response.json();
      setMockHeroData(data);
      console.log(data);
      
    } catch (error) {
      console.error("Error fetching hero data:", error);
    }
  };
    fetchHero();
  }, []);

  return (
    <>
      <main className="bg-accent-gradient grid gap-6 sm:grid-cols-2 sm:gap-8 items-center  px-10 md:px-18 pb-6">
       

        <div className="flex flex-col gap-5 text-center sm:text-left">
          <h1 className="text-4xl lg:text-6xl font-bold">
            Unlock Your <br />
            <span className="text-primary">Cosmic</span> Destiny
          </h1>
          <p className="text-muted text-sm">
           {mockHeroData?.subtitle}
          </p>

          <div className="flex justify-center sm:justify-start gap-2 ">
            <Button size={"lg"}>{mockHeroData?.ctaText || "Book Now"}</Button>
            <Button size={"lg"} variant={"ghost"}>
              Call Now
            </Button>
          </div>

          <div className="flex justify-center sm:justify-start gap-8 text-2xl font-bold text-primary">
            <p>
              1B+ <br />
              <span className="font-medium text-foreground text-[10px]">
                Followers social media
              </span>
            </p>
            <p>
              800k <br />
              <span className="font-medium text-foreground text-[10px]">
                Registration booked
              </span>
            </p>
            <p>
              25y <br />
              <span className="font-medium text-foreground text-[10px]">
                Year of experience
              </span>
            </p>
          </div>
        </div>

        <div className="relative w-full h-[350px] sm:h-[600px]">
          <Image
            src={`${mockHeroData?.imageUrl || "/heroimage.png"}`}
            alt="Hero Image"
            fill
            priority
            className="object-contain"
          />
       </div>

        <HeroCards />
      </main>
    </>
  );
};

export default Hero;
