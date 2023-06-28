import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import {Noto_Nastaliq_Urdu} from "next/font/google"

const noto = Noto_Nastaliq_Urdu({
    subsets: ["arabic"]
})

type Props = {
    id:string;
    label:string
    urdu_label: string;
    type: string;
    placeholder:string;
};

export default function DataInput({id,label,urdu_label,type,placeholder}: Props) {
  return (
    <div className="flex items-center gap-2 my-1">
      <Label htmlFor={id} className="w-[28%] flex gap-2 items-center">
        <span className="text-[16px]">{label}</span>{" "}
        <span className={`${noto.className} text-[14px]`}>({urdu_label})</span>
      </Label>
      <Input id={id} type={type} className="w-[74%]" placeholder={placeholder} />
    </div>
  );
}
