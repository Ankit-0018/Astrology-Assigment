import Image from "next/image"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


export function HeroCards() {
  return (
    <div className="w-full justify-center items-center flex flex-col gap-4 sm:col-span-2 md:grid md:grid-cols-3 ">
 <Card className="w-full">
      <CardHeader  className="text-center">
        <div className="flex justify-center">

        <Image 
        src="/service1.png"
        width={50}
        height={50}
        alt="Service 1"
        
        />
        </div>
        <CardTitle>Birth Chart Analysis</CardTitle>
        <CardDescription>
         Complete personality analysis and life <br />path guidance through your cosmic blueprint
        </CardDescription>
      </CardHeader>
    </Card>
 <Card className="w-full ">
      <CardHeader  className="text-center">
        <div className="flex justify-center">

        <Image 
        src="/service2.png"
        width={50}
        height={50}
        alt="Service 1"
        
        />
        </div>
        <CardTitle>Birth Chart Analysis</CardTitle>
        <CardDescription>
         Complete personality analysis and life <br />path guidance through your cosmic blueprint
        </CardDescription>
      </CardHeader>
    </Card>
 <Card className="w-full">
      <CardHeader className="text-center">
        <div className="flex justify-center">

        <Image 
        src="/service3.png"
        width={50}
        height={50}
        alt="Service 1"
        
        />
        </div>
        <CardTitle>Birth Chart Analysis</CardTitle>
        <CardDescription>
         Complete personality analysis and life <br />path guidance through your cosmic blueprint
        </CardDescription>
      </CardHeader>
    </Card>
    </div>
   
  )
}
