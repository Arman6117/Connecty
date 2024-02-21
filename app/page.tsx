import { Button } from "@/components/ui/button";
import { url } from "inspector";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="h-screen   w-full">
      <main>
        <div className="w-full h-20 p-10 bg-Peach/40">
          <div>Navbar</div>
        </div>
        <div
          className="    bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: 'url("/assets/topography.svg")' }}
        >
          <div className="p-16 md:flex md:flex-row flex-col  space-y-10 md:space-y-0  ">
            <div className="flex space-y-10 flex-col">
              <h1 className="md:text-7xl tracking-tight text-AlmostBlack text-5xl leading-[4rem] md:leading-[5rem] max-w-3xl  ">
                Chat with anyone in the World with{" "}
                <span className="font-bold tracking-wide underline">
                  Connecty
                </span>
              </h1>
              <p className="text-xl tracking-widest max-w-sm text-AlmostBlack font-semibold">
                Connecting Conversations, Connecting People
              </p>
              <div>
                <Button
                  size={"lg"}
                  className="bg-AlmostBlack text-white rounded-lg "
                >
                  <Link href={"/chats"}>Sign Up Now</Link>
                </Button>
              </div>
            </div>
            <div>
              <Image
                src={"/assets/chat.svg"}
                alt="char svg"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
