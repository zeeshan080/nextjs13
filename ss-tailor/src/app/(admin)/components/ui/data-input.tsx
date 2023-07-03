"use client";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Textarea } from "@/app/components/ui/ui/textarea";
import { Noto_Nastaliq_Urdu } from "next/font/google";

const noto = Noto_Nastaliq_Urdu({
  subsets: ["arabic"],
});

type Props = {
  id: string;
  label: string;
  urdu_label: string;
  type: string;
  isTextArea?: boolean;
  placeholder: string;
  register: any; // Register function from react-hook-form
  error: any; // Error object from react-hook-form
};

export default function DataInput({
  id,
  label,
  urdu_label,
  type,
  isTextArea = false,
  placeholder,
  register,
  error,
}: Props) {
  return (
    <div>
      <div className={`${isTextArea ? 'items-start my-2' : 'items-center my-1'} flex  gap-2`}>
        <Label htmlFor={id} className={`${isTextArea ? 'w-[18%]' : 'w-[28%]'}  flex gap-2 items-center`}>
          <span className="text-[16px]">{label}</span>{" "}
          <span className={`${noto.className} text-[14px]`}>
            ({urdu_label})
          </span>
        </Label>
        {isTextArea ? (
          <Textarea
            id={id}
            type={type}
            className="w-[82%]"
            placeholder={placeholder}
            {...register}
          />
        ) : (
          <Input
            id={id}
            type={type}
            className="w-[74%]"
            placeholder={placeholder}
            {...register}
          />
        )}
      </div>
      <div className="flex justify-end">
        {error && (
          <span className="text-[#FF0000] text-[12px]">
            This field is required.
          </span>
        )}
      </div>
    </div>
  );
}
