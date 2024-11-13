import Image from "next/image";
import Cards from "./components/Cards";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mt-20">
      <h1 className="text-7xl font-bold w-fit mx-auto">Campus Cuts</h1>

      <div className="text-lg w-fit mx-auto mt-10">
        The premier haircut platform, so you can get right
      </div>

      <Link href= "/signup">
      <div className="bg-red-500 w-1/4 mx-auto text-center p-4 mt-10 font-bold text-2xl">
        Sign Up
      </div>
      </Link>



      <Cards></Cards>
    </div> 
  );
}