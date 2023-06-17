import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";

type Props = {};

export default function Navbar({}: Props) {
  const userName = "Zeeshan Aziz"
  return (
    <div className="bg-slate-950 text-white">
      <nav className="flex justify-between items-center w-full">
        <h3>K2</h3>
        <div className="w-[10%]">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>{userName}</AccordionTrigger>
              <AccordionContent className="absolute right-0 top-14 bg-white shadow-lg text-black w-[10%] text-center pt-2">
                Logout
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </nav>
    </div>
  );
}
