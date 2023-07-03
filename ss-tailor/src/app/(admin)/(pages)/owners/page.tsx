import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
  } from "@/app/components/ui/card";
  import Image from "next/image";
  import logo from "@/app/assets/images/ss-tailor.png";
  import { Button } from "@/app/components/ui/button";
  import {
    User,
    Phone,
    CalendarCheck2,
    Wallet,
    Palette,
    Plus,
  } from "lucide-react";
  import Link from "next/link";
  import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/app/components/ui/dialog";
  
  type Props = {};
  
  export default function Clothes({}: Props) {
    const handleDelete = () => {};
    return (
      <section className="rounded-md bg-white mt-2 h-screen">
        <div className="flex w-full justify-end p-4">
          <Link
            href={"/owners/add-owner"}
            className="flex justify-center items-center bg-slate-900 text-white px-3 py-2 rounded-md"
          >
            <Plus className="w-4 h-4 mr-1" />
            ADD OWNER
          </Link>
        </div>
        <div className="grid grid-flow-col-1 lg:grid-cols-3 gap-10 p-4 ">
          <Card className="shadow-lg col-span-1">
            <CardHeader className="bg-slate-900 rounded-t-md">
              <Image src={logo} alt={""} />
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-2">
              <div>
                <div className="flex gap-2 items-center p-2">
                  <User className="w-4 h-4" />
                  <span>Zeeshan Aziz</span>
                </div>
                <div className="flex gap-2 items-center  p-2">
                  <Phone className="w-4 h-4" />
                  <span>0333 1711109</span>
                </div>
              </div>
              <div>
                <div className="flex gap-2 items-center p-2">
                  <Wallet className="w-4 h-4" />
                  <span>1500 Rs</span>
                </div>
                <div className="flex gap-2 items-center  p-2">
                  <Palette className="w-4 h-4" />
                  <span>Blue</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="flex gap-2 items-center">
                <CalendarCheck2 className="w-4 h-4" />
                <span>24 Jun 2023</span>
              </div>
              <Dialog>
                <DialogTrigger className="rounded-md bg-slate-900 text-white py-[7px] px-[13px] text-[16px]">Delete</DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Are you sure you want to delete?</DialogTitle>
                    <DialogDescription>
                      This action cannot be undone. This will permanently delete
                      cloth data and remove your data from our servers.
                    </DialogDescription>
                  </DialogHeader>
                <DialogFooter className="flex gap-5 w-full">
                  <Button className="py-[2px] w-[15%]">Confirm</Button>
                  <DialogTrigger className="py-[2px] border-[1px] border-gray-400 rounded-md w-[15%]">Cancel</DialogTrigger>
                </DialogFooter>
                </DialogContent>
              </Dialog>
            </CardFooter>
          </Card>
          <Card className="shadow-lg col-span-1">
            <CardHeader className="bg-slate-900 rounded-t-md">
              <Image src={logo} alt={""} />
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-2">
              <div>
                <div className="flex gap-2 items-center p-2">
                  <User className="w-4 h-4" />
                  <span>Zeeshan Aziz</span>
                </div>
                <div className="flex gap-2 items-center  p-2">
                  <Phone className="w-4 h-4" />
                  <span>0333 1711109</span>
                </div>
              </div>
              <div>
                <div className="flex gap-2 items-center p-2">
                  <Wallet className="w-4 h-4" />
                  <span>1500 Rs</span>
                </div>
                <div className="flex gap-2 items-center  p-2">
                  <Palette className="w-4 h-4" />
                  <span>Blue</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="flex gap-2 items-center">
                <CalendarCheck2 className="w-4 h-4" />
                <span>24 Jun 2023</span>
              </div>
              <Button>Delete</Button>
            </CardFooter>
          </Card>
          <Card className="shadow-lg col-span-1">
            <CardHeader className="bg-slate-900 rounded-t-md">
              <Image src={logo} alt={""} />
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-2">
              <div>
                <div className="flex gap-2 items-center p-2">
                  <User className="w-4 h-4" />
                  <span>Zeeshan Aziz</span>
                </div>
                <div className="flex gap-2 items-center  p-2">
                  <Phone className="w-4 h-4" />
                  <span>0333 1711109</span>
                </div>
              </div>
              <div>
                <div className="flex gap-2 items-center p-2">
                  <Wallet className="w-4 h-4" />
                  <span>1500 Rs</span>
                </div>
                <div className="flex gap-2 items-center  p-2">
                  <Palette className="w-4 h-4" />
                  <span>Blue</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="flex gap-2 items-center">
                <CalendarCheck2 className="w-4 h-4" />
                <span>24 Jun 2023</span>
              </div>
              <Button>Delete</Button>
            </CardFooter>
          </Card>
        </div>
      </section>
    );
  }
  