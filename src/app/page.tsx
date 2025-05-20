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
    <div className="my-m">
      <CtgrySection title="Creatures">
        {false ? (
          <div>Loading...</div>
        ) : (
          <div>
            {[1, 2, 3, 4, 5].map((v, i) => (
              <div key={i}>
                Creature {i}: {v}
              </div>
            ))}
          </div>
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
