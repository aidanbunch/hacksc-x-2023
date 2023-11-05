import { Plus } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const colorMap = {
  Low: "#3F7EF7",
  Medium: "#FF8A00",
  High: "#F00",
};

function generateRandomRoom() {
  const letters = ["A", "B", "C", "D", "E", "F", "G"];
  const numbers = Array.from({ length: 10 }, (_, i) => i + 1);

  const randomLetter = letters[Math.floor(Math.random() * letters.length)];
  const randomNum = numbers[Math.floor(Math.random() * numbers.length)];

  return `${randomLetter}${randomNum}`;
}

export default function KanbanCard({ data }: { data: any }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="border border-gray-200 hover:bg-gray-100 transition cursor-pointer rounded-xl p-4 space-y-3">
          <div className="flex flex-row items-center space-x-2">
            <img
              src={
                `https://avatars.jakerunzer.com/${data.Name}` ||
                "https://pbs.twimg.com/profile_images/1627857941058715648/Kx8g3iVI_400x400.jpg"
              }
              className="w-7 h-7 rounded-full"
            />
            <p className="text-md flex flex-row items-center flex-wrap space-x-1">
              <span className="font-medium">{data.Name}</span>
              <span className="text-muted-foreground">in</span>
              <span className="font-medium">Room {generateRandomRoom()}</span>
            </p>
          </div>
          <p className="text-lg font-medium">Difficulty breathing</p>
          <div className="flex flex-row flex-wrap items-center">
            <span className="border border-gray-200 mr-1 mb-1  rounded-full flex flex-row items-center space-x-2 py-0.5 px-2 w-auto">
              <span
                className={`w-1 h-1 rounded-full bg-[${
                  colorMap[data.Priority]
                }]`}
              ></span>
              <span
                className={`font-medium text-sm text-[${
                  colorMap[data.Priority]
                }]`}
              >
                {data.Priority}
              </span>
            </span>
            <span className="border border-gray-200 mr-1 mb-1  rounded-full flex flex-row items-center space-x-1 py-0.5 px-2 w-auto">
              <img src="/assets/timer.svg" className="w-4 h-4" />
              <span className="font-medium text-sm text-[#8D5BD9]">
                2 min ETA
              </span>
            </span>
            <span className="mr-1 mb-1  bg-gray-100 transition hover:bg-gray-200 rounded-full flex flex-row items-center space-x-1 py-0.5 px-2 w-auto cursor-pointer">
              <Plus className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-500">Assign doctor</span>
            </span>
          </div>
          <div>
            <Input
              className="rounded-xl"
              type="text"
              placeholder="Send a message"
            />
          </div>
        </div>
      </SheetTrigger>
      <SheetContent style={{ width: "500px" }}>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
