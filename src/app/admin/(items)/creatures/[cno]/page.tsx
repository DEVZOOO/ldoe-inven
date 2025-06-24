/**
 * Admin 항목관리 - 몹 등룩/수정
 */
"use client";

import React, {useEffect, useState} from "react";
import {useParams} from "next/navigation";
import Link from "next/link";
import {CommonRes, CreaturesInfo} from "@/types";
import {API_URL, VIEW_URL} from "@/constants";
import {H1} from "@/components/heading";

export default function AdminItemCreaturesEdit() {
    const {cno} = useParams();
    const [item, setItem] = useState<CreaturesInfo | undefined>(undefined);

    useEffect(() => {
        const fetchCreatures = async () => {
            const res = await fetch(API_URL.CREATURES.DETAIL(Number(cno)), {
                cache: 'no-store',
            });
            const result: CommonRes<CreaturesInfo> = await res.json();
            setItem(result.data!);
        };
        fetchCreatures();
    }, [cno]);
    return (<>
        <H1>등록/수정</H1>
        {
            item ?<form>
                <div className="flex flex-col">
                    <label>번호
                        <input type="text" name="cno" value={item.cno} readOnly={true}></input>
                    </label>
                    <label>
                        이미지 URL
                        <input type="text" name="imgUrl" value={item.imgUrl}></input>
                    </label>
                    <label>
                        * 이름
                        <input type="text" name="name" value={item.name}></input>
                    </label>
                    <label>
                        * 이름(영문)
                        <input type="text" name="nameEn" value={item.nameEn}></input>
                    </label>
                    <label>
                        * 피
                        <input type="number" name="health" value={item.health}></input>
                    </label>
                    <label>
                        * 데미지
                        <input type="text" name="damage" value={item.damage}></input>
                    </label>
                    <label>
                        * 방어력
                        <input type="text" name="armour" value={item.armour}></input>
                    </label>
                    <label>
                        출몰맵(구분자 ,)
                        <input type="text" name="found" value={item.found?.replaceAll("|", ",")}></input>
                    </label>
                    <label>
                        영문 wiki URL
                        <input type="text" name="url" value={item.url}></input>
                    </label>
                    <label>
                        등록날짜
                        <input type="text" value={item.regDt} disabled={true}></input>
                    </label>
                    <label>
                        수정날짜
                        <input type="text" value={item.updDt} disabled={true}></input>
                    </label>
                </div>
                <div className="mt-m">
                    <button type="button"><Link href={VIEW_URL.ADMIN.ITEMS.CREATURES.LIST}>목록</Link></button>
                    <button type="button">저장</button>
                </div>
            </form>
                : <div>Loading...</div>
        }

    </>);
}
