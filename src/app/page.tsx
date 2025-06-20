"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { API_URL } from "@/constants";
import { ApiStatus } from "@/constants";
import { CommonRes } from "@/types/api";
import { CreaturesInfo, FoodInfo, WeaponsInfo } from "@/types/dto";

import CtgrySection from "@/components/main/ctgry-section";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [creatures, setCreatures] = useState<CreaturesInfo[]>([]);
  const [weapons, setWeapons] = useState<WeaponsInfo[]>([]);
  const [weaponsLoading, setWeaponsLoading] = useState(true);
  const [food, setFood] = useState<FoodInfo[]>([]);
  const [foodLoading, setFoodLoading] = useState(true);

  useEffect(() => {
    const fetchCreatures = async () => {
      try {
        const res = await fetch(API_URL.CREATURES.LIST({cnt: 5}));
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
      } finally {
        setWeaponsLoading(false);
      }
    };

    const fetchFood = async () => {
      try {
        const res = await fetch(API_URL.FOOD.LIST(5));
        const result: CommonRes<FoodInfo[]> = await res.json();
        if (result.status == ApiStatus.SUCCESS) {
          const data = result.data;
          setFood(data!);
        } else {
          console.error(result);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setFoodLoading(false);
      }
    };

    fetchCreatures();
    fetchWeapons();
    fetchFood();
  }, []);

  return (
    <div className="my-m">
      {/* 몹 리스트 */}
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
                        fill
                        style={{ objectFit: "contain" }}
                      ></Image>
                    </div>
                  </td>
                  <td>
                    {v.name}
                    <br></br>
                    {v.nameEn}
                  </td>
                  <td className="text-right">{v.health}</td>
                  <td className="text-right">{v.damage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </CtgrySection>

      {/* 무기 리스트 */}
      <CtgrySection title="Weapons">
        {weaponsLoading ? (
          <div>Loading...</div>
        ) : (
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
                    <br></br>
                    {v.nameEn}
                  </td>
                  <td className="text-right">{v.damage}</td>
                  <td className="text-right">{v.speed}</td>
                  <td className="text-right">{v.dps}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </CtgrySection>

      {/* 음식 리스트 */}
      <CtgrySection title="Food">
        {foodLoading ? (
          <div>Loading...</div>
        ) : (
          <table className="w-full table text-center middle">
            <colgroup>
              <col style={{ width: "60px" }}></col>
              <col></col>
              <col style={{ width: "15%" }}></col>
              <col style={{ width: "15%" }}></col>
              <col style={{ width: "15%" }}></col>
            </colgroup>
            <thead>
              <tr>
                <th>ICON</th>
                <th>NAME</th>
                <th>HEALTH</th>
                <th>HUNGER</th>
                <th>THIRST</th>
              </tr>
            </thead>
            <tbody className="text-[0.8em] font-Pretendard">
              {food.map((v) => (
                <tr key={v.fno}>
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
                    <br></br>
                    {v.nameEn}
                  </td>
                  <td className="text-right">{v.health}</td>
                  <td className="text-right">{v.hunger}</td>
                  <td className="text-right">{v.thirst}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </CtgrySection>
    </div>
  );
}
