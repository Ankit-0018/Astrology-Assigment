import { Testimonial } from "@/app/types/landing";


export default function CorousalCard({ name , imageUrl , feedback } : Testimonial) {
console.log("Rendering CorousalCard for:", name , imageUrl)


  return (
    <div
      className="relative h-[350px] w-full rounded-lg overflow-hidden shadow-lg bg-cover bg-center"
      style={{ backgroundImage: `url(${imageUrl}) ` }}
    >
      <div className="absolute inset-0 bg-opacity-40 p-4 flex flex-col justify-end">
        <p className="text-sm text-foreground font-light">{name}</p>
        <h3 className="text-xl text-foreground font-semibold">{feedback}</h3>
      </div>
    </div>
  );
}