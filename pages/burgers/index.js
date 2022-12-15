import Link from "next/link";
import Image from "next/image";
import s from "../../styles/Burgers.module.css";

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/items");
  const data = await res.json();

  return {
    props: { burgers: data },
  };
};

export default function Burgers({ burgers }) {
  return (
    <div>
      <h1>Наши бургеры</h1>
      {burgers.map((burger) => {
        return (
          <Link key={burger.id} href={`http://localhost:3000/burgers/${burger.id}`} className={s.burgerCard}>
            <div className={s.imageContainer}>
              <Image
                src={`${burger.image}`}
                alt={`${burger.name}`}
                width={100}
                height={100}
                layout="responsive"
                objectFit="cover"
              />
            </div>
            <div>
              <h3>{burger.name}</h3>
              <p>{burger.desc}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
