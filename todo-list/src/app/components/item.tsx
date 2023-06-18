import React from "react";

type Props = {
  title: string;
  icon: React.ReactNode;
};

export default function Item({ title, icon }: Props) {
  return (
    <li className="flex flex-col items-center justify-center w-14">
      {icon}
      <span className="text-[9px]">{title}</span>
    </li>
  );
}
