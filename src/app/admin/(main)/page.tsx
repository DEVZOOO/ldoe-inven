import Link from "next/link";

import { VIEW_URL } from "@/constants";

export default function AdminInit() {
  return (
    <>
      <h1>Admin</h1>
      {/* 메뉴 TODO - DB */}
      <ul>
        <li>
          항목 관리
          <ul>
            <li><Link href={VIEW_URL.ADMIN.ITEMS.CREATURES.LIST}>몹 관리</Link></li>
            <li>무기 관리</li>
            <li>음식 관리</li>
          </ul>
        </li>
        <li>
          <Link href={VIEW_URL.ADMIN.USERS.LIST}>사용자 관리</Link>
        </li>
      </ul>
    </>
  );
}
