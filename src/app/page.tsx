"use client";

import CtgrySection from "@/components/main/ctgry-section";
import { ApiStatus } from "@/constants/status";
import { CommonRes } from "@/types/api";
import { CreaturesInfo } from "@/types/dto";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [creatures, setCreatures] = useState<CreaturesInfo[]>([]);

  useEffect(() => {
    const fetchCreatures = async () => {
      try {
        const res = await fetch("/api/creatures?cnt=5");
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
    fetchCreatures();
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
              <col style={{ width: "10%" }}></col>
              <col></col>
              <col style={{ width: "20%" }}></col>
              <col style={{ width: "20%" }}></col>
            </colgroup>
            <thead>
              <tr>
                <th>NO</th>
                <th>NAME</th>
                <th>HEALTH</th>
                <th>DAMAGE</th>
              </tr>
            </thead>
            <tbody className="text-[0.8em] font-Pretendard">
              {creatures.map((v, i) => (
                <tr key={v.cno}>
                  <td>{creatures.length - i}</td>
                  <td>
                    {v.name}
                    <br></br>({v.nameEn})
                  </td>
                  <td>{v.health}</td>
                  <td>{v.damage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </CtgrySection>

      <CtgrySection title="Weapons">
        <div>
          {[1, 2, 3, 4, 5].map((v, i) => (
            <div key={i}>
              Weapon {i}: {v}
            </div>
          ))}
        </div>
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
