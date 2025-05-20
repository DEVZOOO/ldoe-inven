"use client";

import CtgrySection from "@/components/main/ctgry-section";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [creatures, setCreatures] = useState([]);

  useEffect(() => {
    // const fetchCreatures = async () => {
    //   try {
    //     const res = await fetch("/api/creatures");
    //     console.log(res);
    //     const data = await res.json();
    //     console.log(data);
    //     setCreatures(data);
    //   } catch (err) {
    //     console.log(err);
    //   } finally {
    //     setLoading(false);
    //   }
    // };
    // fetchCreatures();
  }, []);

  return (
    <div className="py-s">
      <h1>지구의 마지막 날: 생존(LDOE) 인벤토리 by devzooo</h1>

      <CtgrySection title="Creatures">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div>
            {creatures.map((v, i) => (
              <div key={i}>
                {i} {v}
              </div>
            ))}
          </div>
        )}
      </CtgrySection>

      <section>Weapons</section>

      <section>Food</section>
    </div>
  );
}
