"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { API_URL } from "@/constants/apiUrl";
import { ApiStatus } from "@/constants/status";
import { CommonRes } from "@/types/api";
import { CreaturesInfo } from "@/types/dto";
import { WeaponsInfo } from "@/types/dto/weapons.dto";

import CtgrySection from "@/components/main/ctgry-section";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [creatures, setCreatures] = useState<CreaturesInfo[]>([]);
  const [weapons, setWeapons] = useState<WeaponsInfo[]>([]);

  useEffect(() => {
    const fetchCreatures = async () => {
      try {
        const res = await fetch(API_URL.CREATURES.LIST(5));
        const result: CommonRes<CreaturesInfo[]> = await res.json();
        if (result.status == ApiStatus.SUCCESS) {
          const data = result.data;
          setCreatures(data!);
        } else {
          console.error(result);
          setIsError(true);
        }
      } catch (err) {
        console.log(err);
        setIsError(true);
      } finally {
        setLoading(false);
      }
    };
    const fetchWeapons = async () => {
      try {
        const res = await fetch(API_URL.WEAPONS.LIST(5));
        const result: CommonRes<WeaponsInfo[]> = await res.json();
        if (result.status == ApiStatus.SUCCESS) {
          const data = result.data;
          setWeapons(data!);
        } else {
          console.error(result);
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchCreatures();
    fetchWeapons();
  }, []);

  return (
    <div className="my-m">
      <CtgrySection title="Creatures">
        {loading ? (
          <div>Loading...</div>
        ) : isError ? (
          <div>Error</div>
        ) : (
          <table className="w-full table text-center middle">
            <colgroup>
              <col style={{ width: "80px" }}></col>
              <col></col>
              <col style={{ width: "20%" }}></col>
              <col style={{ width: "20%" }}></col>
            </colgroup>
            <thead>
              <tr>
                <th>ICON</th>
                <th>NAME</th>
                <th>HEALTH</th>
                <th>DAMAGE</th>
              </tr>
            </thead>
            <tbody className="text-[0.8em] font-Pretendard">
              {creatures.map((v, i) => (
                <tr key={v.cno}>
                  <td>
                    <div className="relative" style={{ aspectRatio: 1 }}>
                      <Image
                        src={v.imgUrl ?? "/file.svg"}
                        alt={v.name}
                        layout="fill"
                        style={{ objectFit: "contain" }}
                      ></Image>
                    </div>
                  </td>
                  <td>
                    {v.name}
                    <br></br>({v.nameEn})
                  </td>
                  <td className="text-right">{v.health}</td>
                  <td className="text-right">{v.damage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </CtgrySection>

      <CtgrySection title="Weapons">
        <table className="w-full table text-center middle">
          <colgroup>
            <col style={{ width: "60px" }}></col>
            <col></col>
            <col style={{ width: "20%" }}></col>
            <col style={{ width: "15%" }}></col>
            <col style={{ width: "15%" }}></col>
          </colgroup>
          <thead>
            <tr>
              <th>ICON</th>
              <th>NAME</th>
              <th>DAMAGE</th>
              <th>SPEED</th>
              <th>DPS</th>
            </tr>
          </thead>
          <tbody className="text-[0.8em] font-Pretendard">
            {weapons.map((v, i) => (
              <tr key={v.wno}>
                <td>
                  <Image
                    src={v.imgUrl ?? "/file.svg"}
                    alt={v.name}
                    width={20}
                    height={20}
                    style={{ objectFit: "contain" }}
                  ></Image>
                </td>
                <td>
                  {v.name}
                  <br></br>({v.nameEn})
                </td>
                <td className="text-right">{v.damage}</td>
                <td className="text-right">{v.speed}</td>
                <td className="text-right">{v.dps}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </CtgrySection>

      <CtgrySection title="Food">
        <div>
          {[1, 2, 3, 4, 5].map((v, i) => (
            <div key={i}>
              Food {i}: {v}
            </div>
          ))}
        </div>
      </CtgrySection>
    </div>
  );
}
