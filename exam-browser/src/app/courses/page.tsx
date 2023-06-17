import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import Link from "next/link";

type Props = {};

export default function Courses({}: Props) {
  const courseData: { id: string; name: string }[] = [
    {
      id: "01",
      name: "Blockchain",
    },
    {
      id: "02",
      name: "Metaverse and Web 3.0",
    },
  ];
  const userName = "Zeeshan Aziz";
  return (
    <main className="m-8">
      <div className="p-3">
        <h1 className="text-green-700 text-[32px] font-bold">Welcome, {userName}</h1>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Your Course's</CardTitle>
        </CardHeader>
        <CardContent>
          {courseData.map((course) => {
            return (
              <div className="" key={course.id}>
                <Link href={`courses/${course.name}/quizzes`}>{course.name}</Link>
              </div>
            );
          })}
        </CardContent>
      </Card>
    </main>
  );
}
