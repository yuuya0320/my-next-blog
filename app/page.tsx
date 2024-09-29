import styles from "./page.module.css";
import Image from "next/image";
import { getNewsList } from "./_libs/microcms";
import { TOP_NEWS_LIMIT } from "./_constants";
import ButtonLink from "./_components/ButtonLink";
import NewsList from "./_components/NewsList";

export const revalidate = 60;

export default async function Home() {
  // tsxファイルはJavaScriptをより扱いやすくした言語（基本的な構文は一緒）なのでJavaScriptの定数や式も当然書ける
  const name = "Yuuya";

  const data = await getNewsList({
    limit: TOP_NEWS_LIMIT,
  });

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
        <NewsList news={data.contents} />
        <div className={styles.newsLink}>
          <ButtonLink href="/news">もっとみる</ButtonLink>
        </div>
      </section>
    </>
  );
}
