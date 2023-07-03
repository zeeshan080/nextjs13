import React from "react";
import SignUpForm from "@/app/components/signup-form";
type Props = {};

export default function SignUp({}: Props) {

  return (
    <main className="h-screen flex w-full lg:justify-center items-center">
      <section className="w-full lg:w-[40%] bg-white p-4 shadow-md rounded-md">
        <SignUpForm />
      </section>
    </main>
  );
}
