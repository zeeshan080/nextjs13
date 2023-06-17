import React from "react";
import ExperienceCard from "./experience-card";

type Props = {};

export default function Experience({}: Props) {
  return (
    <section className="p-8 body-font">
      <div className="container px-5 py-14 mx-auto bg-white rounded-lg shadow-md">
        <div className="flex flex-wrap -m-4 text-center">
          <ExperienceCard
            svg={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-presentation text-indigo-500 w-12 h-12 mb-3 inline-block"
              >
                <path d="M2 3h20" />
                <path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" />
                <path d="m7 21 5-5 5 5" />
              </svg>
            }
            titleValue={"100"}
            titleHead={"Projects"}
          />
          <ExperienceCard
            svg={
                <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke-width="2"
                className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                viewBox="0 0 24 24"
              >
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
              </svg>
            }
            titleValue={"30"}
            titleHead={"Clients"}
          />
          <ExperienceCard
          svg={
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-bookmark text-indigo-500 w-12 h-12 mb-3 inline-block"
          >
            <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
          </svg>
          }
          titleValue={"4"}
          titleHead={"Experience"}
        /><ExperienceCard
        svg={
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-coffee text-indigo-500 w-12 h-12 mb-3 inline-block"
          >
            <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
            <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
            <line x1="6" x2="6" y1="2" y2="4" />
            <line x1="10" x2="10" y1="2" y2="4" />
            <line x1="14" x2="14" y1="2" y2="4" />
          </svg>

        }
        titleValue={"100"}
        titleHead={"Cups of Coffee"}
      />
         
          
        </div>
      </div>
    </section>
  );
}
