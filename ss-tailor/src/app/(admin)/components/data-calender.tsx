import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Calendar } from "@/app/components/ui/calendar";
import React from "react";

type Props = {};

export default function DataCalender({}: Props) {
  return (
    <div className="w-[35%]">
      <Card>
        <CardHeader>
          <CardTitle>Calender</CardTitle>
        </CardHeader>
        <CardContent>
          <Calendar className="w-full"/>
        </CardContent>
      </Card>
    </div>
  );
}
