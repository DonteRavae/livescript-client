// REACT
import { useState, useRef, ReactNode } from "react";
// INTERNAL
import Icons from "./Icons";

export const SidebarSection = ({
  label,
  placeholder,
  headerOptions,
  children,
  openByDefault = true,
}: {
  openByDefault?: boolean;
  label: string;
  headerOptions?: ReactNode;
  placeholder: string;
  children?: ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(openByDefault);
  const dropdownCaretButtonRef = useRef<HTMLButtonElement>(null);
  const handleSidebarMenuExpansion = () => {
    if (isOpen) {
      dropdownCaretButtonRef.current?.classList.add("animate-rotate");
      dropdownCaretButtonRef.current?.classList.remove(
        "animate-rotate-reverse"
      );
      setIsOpen((prev) => !prev);
    } else {
      dropdownCaretButtonRef.current?.classList.add("animate-rotate-reverse");
      dropdownCaretButtonRef.current?.classList.remove("animate-reverse");
      setIsOpen((prev) => !prev);
    }
  };

  return (
    <section className={"h-auto"}>
      <header className="h-10 flex px-3 py-1 gap-5 bg-stone-800 text-white content-center hover:border-b-gray-300">
        <h3 className="flex-1 text-lg">{label}</h3>
        <menu className="h-full flex gap-3 py-2">{headerOptions}</menu>
        <button
          className={`h-full flex justify-center py-1 ${
            !openByDefault ? "rotate-[-90deg]" : ""
          }`}
          ref={dropdownCaretButtonRef}
          onClick={handleSidebarMenuExpansion}
        >
          <Icons type="caret-down" className="fill-white hover:fill-white/50" />
        </button>
      </header>
      <div
        className={`${
          !isOpen ? "h-0 p-0 hidden" : ""
        } w-full flex justify-center items-center`}
      >
        {children ? children : <h3 className="w-full p-3 text-center">{placeholder}</h3>}
      </div>
    </section>
  );
};

export default SidebarSection;
