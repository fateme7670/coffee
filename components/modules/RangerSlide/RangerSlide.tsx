"use client";
import React, { useState } from "react";
import { cn, Tooltip } from "@nextui-org/react";
import { Slider } from "@nextui-org/slider";
interface Props{
  minValue:number,
maxValue:number,
}
const RangerSlide = () => {
  const [minvalue, setMinValue] =useState(0);
  const [maxvalue, setMaxValue] = useState(0);
const handleBtn=()=>{
  alert(maxvalue)
}
  return (
    <div className="relative">
      <Slider
        size="lg"
        label="فیلتر بر اساس قیمت:"
        maxValue={800}
        
        onChange={(maxValue:number | undefined | any) => {
          setMaxValue(maxValue)
          // setMinValue(minValue)
        }}
        step={10}
        showOutline={true}
        startContent={true}
        defaultValue={[0, 800]}
        formatOptions={{ style: "currency", currency: "USD" }}
        classNames={{
          base: "max-w-4xl gap-3",
          filler:
            "bg-gradient-to-r  w-96 h-2 from-red-700 to-slate-500 dark:from-red-950 dark:to-slate-950",
          thumb: [
            "transition-size",
            "bg-gradient-to- from-default-300 to-default-300 ",
            "data-[dragging=true]:shadow-lg data-[dragging=true]:shadow-black/20 border border-2 border-black ",
            "data-[dragging=true]:w-7 data-[dragging=true]:h-7 data-[dragging=true]:after:h-6 data-[dragging=true]:after:w-6",
          ],
        }}
        renderThumb={({ index, ...props }) => (
          <div
            {...props}
            className="group p-1  top-1/2 bg-background border-small border-default-200 dark:border-default-400/50 shadow-medium rounded-full cursor-grab data-[dragging=true]:cursor-grabbing"
          >
            <span
              className={cn(
                "transition-transform bg-gradient-to-br shadow-small rounded-full w-5 h-5 block group-data-[dragging=true]:scale-80",
                index === 0
                  ? "from-red-700 to-red-800 dark:from-red-900 dark:to-red-950" // first thumb
                  : "from-slate-500 to-slate-600 dark:from-slate-800 dark:to-slate-950" // second thumb
              )}
             
            />
          </div>
        )}
      />
      <button onClick={handleBtn} className="bg-slate-100 py-2 mt-12 mb-5 font-shabnam text-subtle-medium rounded-lg px-4">
        فیلتر
      </button>
      <hr />
    </div>

  );
};

export default RangerSlide;
