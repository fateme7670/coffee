import { infoTabs } from "@/utils/constant";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Explnation from "./Explnation";
import MoreInfo from "./MoreInfo";
import Comments from "./Comments";
import { ProductProps } from "@/utils/types";


export default function Tabs({
  id,
  longDescription,
  weight,
  suitableFor,
  smell,
  comments,
}: ProductProps) {
  return (
    <div className="container h-auto text-black w-full pt-24 px-4">
      <div className="w-full ">
        <TabGroup defaultValue="coffee" className="w-full ">
          <TabList className="flex gap-4 mx-auto justify-center">
            {infoTabs.map((item) => (
              <Tab
                value={item.value}
                key={item.value}
                className="rounded-full text-center py-1 px-3 text-sm/6 font-semibold text-black focus:outline-none data-[selected]:bg-white/10 data-[hover]:bg-white/5 data-[selected]:data-[hover]:bg-white/10 data-[focus]:outline-1 data-[focus]:outline-white"
              >
                {item.label}
              </Tab>
            ))}
          </TabList>
          <TabPanels className="mt-3">
            <TabPanel className="rounded-xl  bg-white/5 p-3">
              <Explnation longDescriptions={longDescription} />
            </TabPanel>

            <TabPanel className="rounded-xl  bg-white/5 p-3">
              <MoreInfo 
              
              weight={weight}
              suitableFor={suitableFor}
              smell={smell}
              />
            </TabPanel>

            <TabPanel className="rounded-xl  bg-white/5 p-3">
              <Comments comments={comments} id={id}/>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
}
