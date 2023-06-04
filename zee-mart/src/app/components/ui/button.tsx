import React from "react";

type Props = {
  childrens: React.ReactNode;
  styles: string;
  btnClick: () => void;
};

export default function Button({ childrens, styles, btnClick }: Props) {
  return (
    <button className={styles} onClick={btnClick}>
      {childrens}
    </button>
  );
}
