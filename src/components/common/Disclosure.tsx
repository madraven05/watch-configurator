import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import React, { Children, ReactNode } from "react";
import { FaAngleDown } from "react-icons/fa6";

interface PanelDisclosureProps {
  title?: string,
  children: ReactNode;
}

const PanelDisclosure: React.FC<PanelDisclosureProps> = ({children, title="Open"}) => {
  return (
    <Disclosure as="div" defaultOpen={true}>
      <DisclosureButton className="p-2 rounded-lg outline outline-stone-800/10 hover:outline-stone-800/50 group flex w-full items-center justify-between">
        <span className="text-sm font-thin group-data-[hover]:font-normal">
          {title}
        </span>
        <FaAngleDown className="text-xs group-data-[hover]:font-normal transition duration-150 ease-in-out group-data-[open]:rotate-180" />
      </DisclosureButton>
      <DisclosurePanel transition className='mt-4 p-2 outline rounded-lg outline-stone-800/10 data-[closed]:opacity-0 data-[closed]:-translate-y-3 transition duration-200 ease-in-out'>
        {children}
      </DisclosurePanel>
    </Disclosure>
  );
};

export default PanelDisclosure;
