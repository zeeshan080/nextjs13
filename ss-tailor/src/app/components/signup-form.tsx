'use client'
import { User } from "lucide-react";
import { useForm } from "react-hook-form";
import UserInput from "./user-input";
import { userFormData } from "@/app/types/common";
import { Button } from "@/app/components/ui/button";
import Link from "next/link";
import { signIn } from 'next-auth/react'

type Props = {
};

export default function SignUpForm({}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<userFormData>();

  const onSubmit = ({userEmail,userPassword}: userFormData) => {
    signIn('credentials',
      {
        userEmail,
        userPassword,
        // The page where you want to redirect to after a 
        // successful login
        callbackUrl: `${window.location.origin}/dashboard` 
      }
    )
  };

  return (
    <form className="px-6" onSubmit={handleSubmit(onSubmit)}>
      <div className="w-full py-6 flex justify-center items-center flex-col">
        <div className="rounded-full w-24 h-24 bg-slate-900 flex justify-center items-center">
          <User className="w-16 h-16 text-white" />
        </div>
        <h1 className="text-center mt-4 text-[28px] font-semibold">
         SS-Tailor Sign Up   
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
        error={errors.userEmail}
      />
       <UserInput
        label={"Confirm Password"}
        placeholder={"Enter Confirm Password"}
        type={"password"}
        id={"cpassword"}
        register={register("userPassword", { required: true })}
        error={errors.userEmail}
      />
      <div className="pt-2 flex flex-col gap-y-2 lg:flex-row justify-end items-center">
  
        <Button className="w-full lg:w-[20%]">SIGNUP</Button>
      </div>
      
       <div className="flex justify-center px-4 mt-6">
        <span>
          Already have an account. <Link href={"/sign-in"} className="italic text-blue-500 underline">signin?</Link>
        </span>
      </div> 
      
      
    </form>
  );
}
