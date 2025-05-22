"use client";

import { Button } from "@/components/button";
import { Input } from "@/components/input";
import Link from "next/link";

export default function AdminInit() {
  return (
    <div className="my-m mx-auto w-fit text-center">
      <div className="flex gap-s items-center">
        <div>비밀번호</div>
        <Input type="password" className="text-left"></Input>
      </div>
      <Button type="button" className="mt-m">
        확인
      </Button>
    </div>
  );
}
