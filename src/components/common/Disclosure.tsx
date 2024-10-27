import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import React, { Children, ReactNode } from "react";
import { FaAngleDown } from "react-icons/fa6";

interface PanelDisclosureProps {
  title?: string,
  children: ReactNode;
}

const PanelDisclosure: React.FC<PanelDisclosureProps> = ({children, title="Open"}) => {
  return (
    <Disclosure as="div" defaultOpen={false}>
      <DisclosureButton className="group flex w-full items-center justify-between">
        <span className="text-base font-thin group-data-[hover]:text-white/80">
          {title}
        </span>
        <FaAngleDown className="text-xs group-data-[hover]:fill-white/50 transition duration-150 ease-in-out group-data-[open]:rotate-180" />
      </DisclosureButton>
      <DisclosurePanel className='mt-2'>
        {children}
      </DisclosurePanel>
    </Disclosure>
  );
};

export default PanelDisclosure;
