import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import React from "react";

type Props = {};

export default function SignIn({}: Props) {
  return (
    <main className="w-screen h-screen flex justify-center items-center">
      <div className="w-[50%]">
        <Card>
          <CardHeader>
            <CardTitle className="p-4">SignIn</CardTitle>
            <CardContent>
              <form className="flex flex-col items-end gap-y-3">
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      type="text"
                      id="email"
                      placeholder="Enter Email*"
                      required
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      type="password"
                      id="password"
                      placeholder="Enter Password*"
                      required
                    />
                  </div>
                </div>
                  <Button className="px-5 py-1">SIGN IN</Button>
              </form>
            </CardContent>
          </CardHeader>
        </Card>
      </div>
    </main>
  );
}
