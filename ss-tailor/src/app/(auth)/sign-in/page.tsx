import React from "react";
import LoginForm from "../../components/login-form";
type Props = {};

export default function SignIn({}: Props) {

  return (
    <main className="h-screen flex w-full lg:justify-center items-center">
      <section className="w-full lg:w-[40%] bg-white p-4 shadow-md rounded-md">
        <LoginForm />
      </section>
    </main>
  );
}
