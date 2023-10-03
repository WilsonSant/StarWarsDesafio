"use client";

import React from "react";
import RegisterForm from "./RegisterForm";
import Footer from "./Footer";
import { useAtom } from "jotai";
import {
  guestIdAtom,
  isGuestAtom,
  languageAtom,
  userAtom,
} from "@/atoms/global";
import { Form } from "antd";
import { generateRandomNumber } from "../../../fable/utils/Guest.fs.js";
import { useRouter } from "next/navigation.js";

function Register() {
  const router = useRouter();
  const [currentLanguage] = useAtom(languageAtom);
  const [userName, setUserName] = useAtom(userAtom);
  const [isGuest, setIsGuest] = useAtom(isGuestAtom);
  const [guestId, setGuestId] = useAtom(guestIdAtom);
  const [form] = Form.useForm();

  function logGuest() {
    setIsGuest(true);
    setGuestId(generateRandomNumber());
    router.push("/grid");
  }

  function handleClick() {
    form.validateFields().then((values) => {
      setUserName(values.userName);
      setIsGuest(false);
      router.push("/grid");
    });
  }

  return (
    <div className="flex bg-[#4CAED9] rounded p-5 border-white border-2 flex-col">
      <RegisterForm {...{ currentLanguage, form }} />
      <Footer {...{ currentLanguage, logGuest, handleClick }} />
    </div>
  );
}

export default Register;
