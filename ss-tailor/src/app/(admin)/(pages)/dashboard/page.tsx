import React from "react";
import AnalyticsChart from "../../components/analytics-chart";
import DataCalender from "../../components/data-calender";
import DataOverview from "../../components/data-overview";

type Props = {};

export default function Dashboard({}: Props) {
  return (
    <section className="py-2">
      <DataOverview/>
      <div className="flex gap-2 w-full">
        <AnalyticsChart />
        <DataCalender/>
      </div>
    </section>
  );
}
