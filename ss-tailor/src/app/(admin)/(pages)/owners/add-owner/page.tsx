import OwnerForm from "@/app/(admin)/components/owner-form";

type Props = {};


export default function AddCloth({}: Props) {
  return (
    <section className="m-2 bg-white rounded-md lg:p-4">
      <h1 className="text-[22px] font-bold lg:p-4 text-center">
        Add New Owner
      </h1>
      <OwnerForm/>
    </section>
  );
}
