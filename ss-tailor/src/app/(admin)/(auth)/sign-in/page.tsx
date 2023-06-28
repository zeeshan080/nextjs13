import { Button } from "@/app/components/ui/button";
import React from "react";
import UserInput from "../../components/ui/user-input";
import Link from "next/link";
import { User } from "lucide-react";

type Props = {};

export default function SignIn({}: Props) {
  return (
    <main className="h-screen flex w-full lg:justify-center items-center">
      <section className="w-full lg:w-[40%] bg-white p-4 shadow-md rounded-md">
        <form className="px-6">
          <div className="w-full py-6 flex justify-center items-center flex-col">
            <div className="rounded-full w-24 h-24 bg-slate-900 flex justify-center items-center">
              <User className="w-16 h-16 text-white"/>
            </div>
            <h1 className="text-center mt-4 text-[28px] font-semibold">
              Admin Login
            </h1>
          </div>
          <UserInput
            label={"Email"}
            placeholder={"Enter Email"}
            type={"email"}
            id={"email"}
          />
          <UserInput
            label={"Password"}
            placeholder={"Enter Password"}
            type={"password"}
            id={"password"}
          />
          <div className="pt-2 flex flex-col gap-y-2 lg:flex-row justify-between items-center">
            <div>
              <span className="italic pl-2 text-[14px]">forgot Password?</span>
              <Link
                className="underline pl-2 text-[14px] text-blue-500"
                href={""}
              >
                Click Me
              </Link>
            </div>
            <Button className="w-full lg:w-[20%]">LOGIN</Button>
          </div>
        </form>
      </section>
    </main>
  );
}
