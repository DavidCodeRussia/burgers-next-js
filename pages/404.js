import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function NotFoundPage() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("./");
    }, 3000);
  }, []);

  return (
    <div className={"not-found"}>
      <h1>Ой ...</h1>
      <h2>Такой страницы здесь нет!</h2>
      <p>
        Переход на <Link href="/">на главную</Link> страницу произойдет через 3 секунды
      </p>
    </div>
  );
}
