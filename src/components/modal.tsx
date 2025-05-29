"use client";

import { useRouter } from "next/navigation";

import styles from "@/styles/modal.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { Button } from "./button";

interface ParamType {
  title?: string;
  showXBtn?: boolean;
  showCloseBtn?: boolean;
  width?: number;
  children?: React.ReactNode;
}

/**
 * 공통 모달
 */
export default function Modal({
  title,
  showXBtn = false,
  showCloseBtn = true,
  width,
  children,
}: ParamType) {
  const router = useRouter();
  return (
    <div className={styles["modal-dim"]}>
      <div className={styles.modal} style={{ width: width + "px" }}>
        {(title || showXBtn) && (
          <div
            className={`${styles["modal-title"]} flex ${
              title ? "justify-between" : "justify-end"
            }`}
          >
            {title}
            {showXBtn && (
              <button onClick={() => router.back()}>
                <FontAwesomeIcon icon={faX}></FontAwesomeIcon>
              </button>
            )}
          </div>
        )}
        <div className={styles["modal-cont"]}>{children}</div>
        {showCloseBtn && (
          <div className={styles["modal-footer"]}>
            <Button onClick={() => router.back()}>CLOSE</Button>
          </div>
        )}
      </div>
    </div>
  );
}
