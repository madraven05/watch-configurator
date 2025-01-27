import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import React, { ReactNode } from "react";
import { FaAngleUp } from "react-icons/fa6";

interface PanelDisclosureProps {
  title?: string,
  children: ReactNode;
}

const PanelDisclosure: React.FC<PanelDisclosureProps> = ({children, title="Open"}) => {
  return (
    <Disclosure as="div" className="p-4 outline outline-stone-800/10 hover:outline-stone-800/50" defaultOpen={false}>
      <DisclosureButton className="hover:cursor-pointer rounded-lg group flex w-full items-center justify-between">
        <span className="text-sm font-semibold">
          {title}
        </span>
        <FaAngleUp className="text-sm group-data-[hover]:font-normal transition duration-150 ease-in-out group-data-[open]:rotate-180" />
      </DisclosureButton>
      <DisclosurePanel transition className='mt-4 data-[closed]:opacity-0 data-[closed]:-translate-y-3 transition duration-200 ease-in-out'>
        {children}
      </DisclosurePanel>
    </Disclosure>
  );
};

export default PanelDisclosure;
