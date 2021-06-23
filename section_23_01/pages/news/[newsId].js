//domain.com/news/something

import { useRouter } from "next/router";

function DetailPage() {
  const router = useRouter();

  const newsId = router.query.newsId;

  // send request to backend API to fetch data with newsId

  return (
    <h1>Detail Page</h1>
  );
}

export default DetailPage;