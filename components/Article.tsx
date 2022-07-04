import { FC } from 'react';
import Image from 'next/image';
import type { ArticleListDetail } from '../../types';

type Props = {
  data: ArticleListDetail;
};

const Article: FC<Props> = ({ data }) => {
  const { thumbnail, title, body, publishedAt } = data;
  return (
    <main>
      {thumbnail !== undefined && <Image src={thumbnail.url} alt="" />}
      <h1>{title}</h1>
      <p>{publishedAt}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: body || '',
        }}
      />
    </main>
  );
};

export default Article;
