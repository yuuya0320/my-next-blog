import { getNewsList } from "@/app/_libs/microcms";
import { NEWS_LIST_LIMIT } from "@/app/_constants";
import NewsList from "@/app/_components/NewsList";
import Pagination from "@/app/_components/Pagination";
import SearchField from "@/app/_components/SearchField";

type Props = {
  searchParams: {
    q?: string;
  };
};

export default async function Page({ searchParams }: Props) {
  const { contents: news, totalCount } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
    q: searchParams.q,
  });

  return (
    <>
      <SearchField />
      <NewsList news={news} />
      <Pagination totalCount={totalCount} />
    </>
  );
}
