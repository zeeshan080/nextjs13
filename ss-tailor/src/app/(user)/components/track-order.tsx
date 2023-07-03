import { Button } from "@/app/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/components/ui/dialog";
import { Input } from "@/app/components/ui/input";
import { Label } from "@radix-ui/react-label";
import React from "react";

type Props = {};

export default function TrackOrder({}: Props) {
  return (
    <div>
      <Dialog>
        <DialogTrigger>Track Order</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>TRACK YOUR ORDER DETAILS HERE</DialogTitle>
            <DialogDescription>
              <div>
                <Label>Order ID:</Label>
                <Input placeholder="Enter Order ID here" />
              </div>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button type="submit">Check Status</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
