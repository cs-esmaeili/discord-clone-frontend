import GoogleButton from "@/components/GoogleButton";
import { RiDiscordFill } from "react-icons/ri";


export default function Home() {
  return (
    <div className="flex min-h-screen justify-center items-center relative overflow-hidden ">

      {/* Box in center of screen */}
      <div className="box flex flex-col h-fit gap-40 md:gap-50 justify-center items-center z-10">
        <div className="flex flex-col md:flex-row gap-3 items-center">
          <RiDiscordFill size={100} className="text-foreground" />
          <h1 className="text-4xl md:text-5xl text-foreground text-nowrap">
            Discord Clone
          </h1>

        </div>
        <GoogleButton />
      </div>
      {/* End Box in center of screen */}


      <div className="bg-primary w-250 h-250 rounded-full absolute blur-[170px] opacity-75 top-1/2"></div>

      <div className="bg-primary w-160 h-160 rounded-full absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2  blur-[170px] opacity-75 "></div>

      <div className="bg-primary w-160 h-160 rounded-full absolute top-0 right-0 translate-x-1/2 -translate-y-1/2  blur-[170px] opacity-75 "></div>



    </div>
  );
}
