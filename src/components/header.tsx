"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { SearchInput } from "./input";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-s py-xs bg-main text-white">
      <div>DEVZOOO</div>
      <div className="w-full flex justify-between max-w-[60%] gap-s">
        <SearchInput className="gap-s flex-[1_0_auto]"></SearchInput>
        <button type="button">
          <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
        </button>
      </div>
    </header>
  );
}
