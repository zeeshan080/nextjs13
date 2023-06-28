import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";

type Props = {
  title: string;
  symbol?:string;
  icon: React.ReactNode;
  amount: number;
  info: string;
};

export default function CustomDataCard({ title,symbol, icon, amount, info }: Props) {
  return (
    <div className="py-2 w-full">
    <Card >
      <CardHeader className="py-4">
        <CardTitle className="flex justify-between items-center">{title} {icon}</CardTitle>
      </CardHeader>
      <CardContent className="text-[38px] font-bold py-1"><span className="text-[20px] font-bold">{symbol}</span> {amount}</CardContent>
      <CardFooter className="text-[12px] text-gray-600">{info}</CardFooter>
    </Card>
    </div>
  );
}
