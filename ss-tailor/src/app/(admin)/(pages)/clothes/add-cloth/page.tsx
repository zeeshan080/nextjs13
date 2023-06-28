import DataInput from "@/app/(admin)/components/ui/data-input";
import { Button } from "@/app/components/ui/button";
import { Noto_Nastaliq_Urdu } from "next/font/google";

type Props = {};

const noto = Noto_Nastaliq_Urdu({
  subsets: ["arabic"],
});

export default function AddCloth({}: Props) {
  return (
    <section className="m-2 bg-white rounded-md lg:p-4">
      <h1 className="text-[22px] font-bold lg:p-4 text-center">
        Add New Cloth Data
      </h1>
      <form className="lg:px-5 py-2 w-full flex flex-col items-center gap-y-2">
        <div className="w-[80%]">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-y-2 ">
              <DataInput
                id={"name"}
                label={"Name"}
                urdu_label={"نام"}
                type={"text"}
                placeholder={"Enter Customer Name"}
              />
              <DataInput
                id={"length"}
                label={"Length"}
                urdu_label={"لمبائی"}
                type={"number"}
                placeholder={"Enter Length"}
              />
              <DataInput
                id={"arms"}
                label={"Arms"}
                urdu_label={"بازو"}
                type={"number"}
                placeholder={"Enter Arms Length"}
              />
              <DataInput
                id={"shoulder"}
                label={"Shoulder"}
                urdu_label={"کندھا"}
                type={"number"}
                placeholder={"Enter Shoulder Length"}
              />
              <DataInput
                id={"chest"}
                label={"Chest"}
                urdu_label={"چھاتی"}
                type={"number"}
                placeholder={"Enter Chest Length"}
              />
              <DataInput
                id={"surround"}
                label={"Surround"}
                urdu_label={"گھیرا"}
                type={"number"}
                placeholder={"Enter Surround Length"}
              />
              <DataInput
                id={"collar"}
                label={"Collar"}
                urdu_label={"کالر"}
                type={"number"}
                placeholder={"Enter Collar Length"}
              />
            </div>
            <div>
            <DataInput
                id={"phone"}
                label={"Phone"}
                urdu_label={"فون نمبر"}
                type={"text"}
                placeholder={"Enter Customer Phone Number"}
              />
              <DataInput
                id={"shoulder"}
                label={"Shoulder"}
                urdu_label={"کندھا"}
                type={"number"}
                placeholder={"Enter Shoulder Length"}
              />
              <DataInput
                id={"shalwar"}
                label={"Shalwar"}
                urdu_label={"شلوار"}
                type={"number"}
                placeholder={"Enter Shalwar Length"}
              />
              <DataInput
                id={"cuff"}
                label={"Cuff"}
                urdu_label={"پانچہ"}
                type={"number"}
                placeholder={"Enter Cuff Turnup Length"}
              />
              <DataInput
                id={"front"}
                label={"Front"}
                urdu_label={"سامنے"}
                type={"number"}
                placeholder={"Enter Front Length"}
              />
               <DataInput
                id={"side"}
                label={"Side"}
                urdu_label={"سائیڈ"}
                type={"number"}
                placeholder={"Enter Side Length"}
              />
             
             <DataInput
                id={"shalwar"}
                label={"Shalwar"}
                urdu_label={"شلوار"}
                type={"number"}
                placeholder={"Enter Shalwar Length"}
              />
             <DataInput
                id={"surround"}
                label={"Surround"}
                urdu_label={"گھیرا"}
                type={"number"}
                placeholder={"Enter Surround Length"}
              />
            </div>
          </div>
          <DataInput
                id={"extra"}
                label={"Extra Work"}
                urdu_label={"اضافی کام"}
                type={"text"}
                placeholder={"Enter Data"}
              />
          <div className="w-full flex mt-6 justify-end">

          <Button className="w-[15%]">Save</Button>
          </div>
        </div>
      </form>
    </section>
  );
}
