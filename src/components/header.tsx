"use client";

import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { SearchInput } from "./input";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-m py-s bg-main text-white">
      <div>
        <Link href="/" className="text-[1.5em]">
          DEVZOOO
        </Link>
      </div>
      <div className="w-full flex justify-between max-w-[60%] gap-s">
        <SearchInput className="gap-s flex-[1_0_auto]"></SearchInput>
        <button type="button">
          <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
        </button>
      </div>
    </header>
  );
}
