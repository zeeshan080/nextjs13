import Link from "next/link";
import { Oswald } from "next/font/google";

const oswald = Oswald({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});
export default function Home() {
  return (
    <main className={` w-screen h-screen`}>
      <div className="flex justify-center items-center flex-col gap-y-2 w-full h-full">
        <Link
          href={"/auth/signIn"}
          className={`${oswald.className}  py-2 px-6 bg-blue-800  rounded-[5px] hover:bg-blue-900`}
        >
          <h2 className="text-[24px] font-medium text-gray-50 pb-1">

          Let's get started
          </h2>
        </Link>
        <h1 className={`${oswald.className} text-[28px] font-semibold`}>Online Quiz System</h1>
      </div>
    </main>
  );
}
