import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center gap-s py-m font-Pretendard text-s text-white bg-point-bg">
      <div>지구의 마지막 날: 생존(LDOE) 인벤 by devzooo</div>
      <div className="flex items-center justify-center gap-xl">
        <a href="mailto:devzoou@gmail.com">devzoou@gmail.com</a>
        <Link href="/admin">관리자</Link>
      </div>
    </footer>
  );
}
