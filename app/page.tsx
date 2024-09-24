import styles from "./page.module.css";
import Image from "next/image";
import ButtonLink from "./_components/ButtonLink";
import NewsList from "./_components/NewsList";
import { News } from "./_libs/microcms";

const data: {
  contents: News[];
} = {
  contents: [
    {
      id: "1",
      title: "渋谷にオフィスを移転しました!",
      category: {
        name: "更新情報",
      },
      publishedAt: "2023/05/19",
      createdAt: "2023/05/19",
    },
    {
      id: "2",
      title: "当社CEOの誕生日です!",
      category: {
        name: "更新情報",
      },
      publishedAt: "2023/05/19",
      createdAt: "2023/05/19",
    },
    {
      id: "3",
      title: "テスト記事です",
      category: {
        name: "更新情報",
      },
      publishedAt: "2023/04/01",
      createdAt: "2023/04/01",
    },
  ],
};

export default function Home() {
  // トップページのNews表示件数を２件に絞る
  const sliceData = data.contents.slice(0, 2);

  // tsxファイルはJavaScriptをより扱いやすくした言語（基本的な構文は一緒）なのでJavaScriptの定数や式も当然書ける
  const name = "Yuuya";

  // return内にはHTMLのようなマークアップを書ける！（React => JSXと言うマークアップ構文の恩恵）
  // JavaScriptを書いたり、参照するときは{}で囲む
  return (
    <>
      <section className={styles.top}>
        <div>
          <h1 className={styles.title}>Hello {name}!</h1>
          <p className={styles.description}>始めよう！</p>
        </div>
        <Image
          className={styles.bgimg}
          src="/img-mv.jpg"
          alt=""
          width={4000}
          height={1200}
        />
      </section>
      <section className={styles.news}>
        <h2 className={styles.newsTitle}>News</h2>
        <NewsList news={sliceData} />
        <div className={styles.newsLink}>
          <ButtonLink href="/news">もっとみる</ButtonLink>
        </div>
      </section>
    </>
  );
}
