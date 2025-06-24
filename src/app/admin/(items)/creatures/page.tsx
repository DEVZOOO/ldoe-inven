/**
 * Admin 항목관리 - 몹
 */
"use client"

import {useState, useEffect, useCallback} from "react";
import Image from "next/image";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {CommonRes, CreaturesInfo} from "@/types";
import {API_URL, ApiStatus, VIEW_URL} from "@/constants";
import Link from "next/link";
import {H1} from "@/components/heading";

export default function AdminItemsCreatures() {
  const [page, setPage] = useState(1);
  const [list, setList] = useState<CreaturesInfo[]>([]);
  const fetchCreaturesList = useCallback(async () => {
    try {
      const res = await fetch(API_URL.CREATURES.LIST({cnt: 5, page: page}));
      const result: CommonRes<CreaturesInfo[]> = await res.json();
      if (result.status == ApiStatus.SUCCESS) {
        const data = result.data;
        setList((prev) => [...prev, ...data!]);
        // setPage((prev) => prev + 1);
      } else {
        console.error(result);
      }
    } catch(e) {
      console.error(e);
    }
  }, [page]);

  // TODO - page 업데이트
  useEffect(() => {
    console.log("useEffect");
    fetchCreaturesList();
  }, []);

  return (
    <>
      {/* title */}
      <H1>몹 리스트</H1>
      {/* 검색 */}
      <div className="flex justify-between gap-s">
        <div>
          <input type="text"></input>
        </div>
        <div>
          <select>
            <option value="updDt">수정날짜</option>
          </select>
          <button type="button">
            <FontAwesomeIcon icon={faChevronUp}></FontAwesomeIcon>
          </button>
        </div>
      </div>
      {/* 리스트 */}
      <div>
        <table className="table w-full text-center middle text-[0.8em] font-Pretendard">
          <colgroup>
            <col style={{ width: "10%" }}></col>
            <col style={{ width: "15%" }}></col>
            <col></col>
            <col style={{ width: "10%" }}></col>
            <col style={{ width: "10%" }}></col>
            <col style={{ width: "10%" }}></col>
            <col style={{ width: "18%" }}></col>
          </colgroup>
          <thead>
            <tr>
              <th>번호</th>
              <th>이미지</th>
              <th>이름</th>
              <th>체력</th>
              <th>데미지</th>
              <th>방어력</th>
              <th>수정날짜</th>
            </tr>
          </thead>
          <tbody>
          {
              list.length > 0
              && list.map((v, i) => (
                  <tr key={v.cno}>
                    <td>{v.cno}</td>
                    <td>
                      <div className="relative" style={{ aspectRatio: 1 }}>
                        <Image
                            src={v.imgUrl ?? "/file.svg"}
                            alt={v.name}
                            fill
                            style={{ objectFit: "contain" }}
                        ></Image>
                      </div>
                    </td>
                    <td><Link href={VIEW_URL.ADMIN.ITEMS.CREATURES.DETAIL(v.cno)} className="underline">{v.name}({v.nameEn})</Link></td>
                    <td>{v.health}</td>
                    <td>{v.damage}</td>
                    <td>{v.armour}</td>
                    <td>{(v.updDt ?? v.regDt)}</td>
                  </tr>
              ))
          }
          </tbody>
        </table>
      </div>
    </>
  );
}
