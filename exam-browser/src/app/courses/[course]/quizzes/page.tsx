"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";
import Link from "next/link";
import { useParams } from "next/navigation";

type Props = {};

export default function Quizzes({}: Props) {
  const params = useParams();
  const quizID = "01"
  return (
    <main className="m-8">
      <div className="text-center p-4 font-bold">
        <h1>Welcome to {params.course}</h1>
        <h2>Class Name: {params.course} Batch 6 to 34 April 2020</h2>
      </div>
      <div className="flex flex-col w-full justify-center items-center">
        <Accordion type="single" collapsible className="w-[60%] mt-6">
          <AccordionItem value="item-1">
            <AccordionTrigger>Module Name: BBC Quizzes</AccordionTrigger>
            <AccordionContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Quiz Title: BBC Blockchain Theory</AccordionTrigger>
                  <AccordionContent>
                    <p>Description</p>
                    <p>Duration</p>
                    <p>Attempts</p>
                    <Link href={`courses/${params.course}/quizzes/verify/?id=${quizID}`}>Continue</Link>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other
              components' aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. It's animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </main>
  );
}
