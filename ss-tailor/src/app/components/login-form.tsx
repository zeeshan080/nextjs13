"use client";
import { LogIn, User } from "lucide-react";
import { useForm } from "react-hook-form";
import UserInput from "./user-input";
import { userFormData } from "@/app/types/common";
import { Button } from "@/app/components/ui/button";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

type Props = {};

export default function LoginForm({}: Props) {
  const params = useSearchParams();
  const pageTitle = params.get("userType");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<userFormData>();

  const onSubmit = ({ userEmail, userPassword }: userFormData) => {
    signIn("credentials", {
      userEmail,
      userPassword,
      // The page where you want to redirect to after a
      // successful login
      callbackUrl: `${window.location.origin}/dashboard`,
    });
  };

  return (
    <form className="px-6" onSubmit={handleSubmit(onSubmit)}>
      <div className="w-full py-6 flex justify-center items-center flex-col">
        <div className="rounded-full w-24 h-24 bg-slate-900 flex justify-center items-center">
          <User className="w-16 h-16 text-white" />
        </div>
        <h1 className="text-center mt-4 text-[28px] font-semibold">
          {pageTitle !== "admin" ? "SS-Tailor Sign In" : "Admin Login"}
        </h1>
      </div>
      <UserInput
        label={"Email"}
        placeholder={"Enter Email"}
        type={"email"}
        id={"email"}
        register={register("userEmail", { required: true })}
        error={errors.userEmail}
      />
      <UserInput
        label={"Password"}
        placeholder={"Enter Password"}
        type={"password"}
        id={"password"}
        register={register("userPassword", { required: true })}
        error={errors.userPassword}
      />
      <div className="pt-2 flex flex-col gap-y-2 lg:flex-row justify-between items-center">
        <div>
          <span className="italic pl-2 text-[14px]">forgot Password?</span>
          <Link
            className="underline pl-2 text-[14px] text-blue-500"
            href={"/forgot-password"}
          >
            Click Me
          </Link>
        </div>
        <Button className="w-full lg:w-[20%]">LOGIN</Button>
      </div>
      <div className="flex justify-center mt-8 w-full">
        <Button className="w-[40%] bg-blue-900 shadow-md text-white text-[16px]">
          <LogIn className="mr-2 h-4 w-4" /> Login with Google
        </Button>
      </div>
      {pageTitle !== "admin" ? (
        <div className="flex justify-center px-4 mt-6">
          <span>
            Don't have an account yet.{" "}
            <Link href={"/sign-up"} className="italic text-blue-500 underline">
              signup?
            </Link>
          </span>
        </div>
      ) : (
        ""
      )}
    </form>
  );
}
