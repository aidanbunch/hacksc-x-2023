"use client";

import KanbanCard from "@/components/KanbanCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronDown, Plus } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Tasks() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data/patients.json")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log("data", data);
      });
  }, []);

  return (
    <section className="max-w-5xl mx-auto py-14">
      <h1 className="text-center text-2xl flex flex-row items-center space-x-1">
        <span>Emergency Severity Index</span>
        <span className="flex flex-row items-center space-x-2 text-muted-foreground">
          <span>- Kanban View</span> <ChevronDown className="w-5 h-5" />
        </span>
      </h1>
      <div className="mt-14">
        <div className="grid grid-cols-3 gap-8">
          <div>
            <span className="border border-gray-200 rounded-full flex flex-row items-center space-x-2 py-1 px-3 w-auto">
              <span className="w-1 h-1 rounded-full bg-[#3F7EF7]"></span>
              <span className="font-medium text-md text-[#3F7EF7]">Low</span>
            </span>
            <div className="flex flex-col space-y-4 mt-5">
              {data
                .filter((item) => item.Priority === "Low")
                .map((item, index) => (
                  <KanbanCard key={index} data={item} />
                ))}
            </div>
          </div>
          <div>
            <span className="border border-gray-200 rounded-full flex flex-row items-center space-x-2 py-1 px-3 w-auto">
              <span className="w-1 h-1 rounded-full bg-[#FF8A00]"></span>
              <span className="font-medium text-md text-[#FF8A00]">Medium</span>
            </span>
            <div className="flex flex-col space-y-4 mt-5">
              {data
                .filter((item) => item.Priority === "Medium")
                .map((item, index) => (
                  <KanbanCard key={index} data={item} />
                ))}
            </div>
          </div>
          <div>
            <span className="border border-gray-200 rounded-full flex flex-row items-center space-x-2 py-1 px-3 w-auto">
              <span className="w-1 h-1 rounded-full bg-[#F00]"></span>
              <span className="font-medium text-md text-[#F00]">High</span>
            </span>
            <div className="flex flex-col space-y-4 mt-5">
              {data
                .filter((item) => item.Priority === "High")
                .map((item, index) => (
                  <KanbanCard key={index} data={item} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
