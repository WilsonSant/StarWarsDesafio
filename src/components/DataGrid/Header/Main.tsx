import {
  guestIdAtom,
  isGuestAtom,
  languageAtom,
  userAtom,
} from "@/atoms/global";
import { useAtom } from "jotai";
import Image from "next/image";
import React from "react";
import { getHelloMessage } from "../../../../fable/utils/components/Header.fs.js";

function Header() {
  const [currentLanguage] = useAtom(languageAtom);
  const [isGuest] = useAtom(isGuestAtom);
  const [guestId] = useAtom(guestIdAtom);
  const [userName] = useAtom(userAtom);
  return (
    <div className="flex justify-between">
      <div className="mb-5">
        <p className="bold text-3xl">
          {" "}
          {getHelloMessage(isGuest, currentLanguage, userName, guestId)}{" "}
        </p>
      </div>
      <div className="flex flex-row space-x-5 cursor-pointer">
        <Image src="/fi_search.svg" alt="Search" width={24} height={24} />
        <Image src="/fi_bell.svg" alt="Bell" width={24} height={24} />
        <Image src="/profile.svg" alt="Profile" width={40} height={40} />
      </div>
    </div>
  );
}

export default Header;
