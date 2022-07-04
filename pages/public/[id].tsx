import type { NextPage, GetStaticProps } from 'next';
import { client } from '../../libs/client';
import Article from '../../components/Article';
import type { Article as ArticleType, ArticleListDetail } from '../../types';

export const getStaticPaths = async () => {
  const data = await client.getList<ArticleType>({
    endpoint: 'articles',
    queries: {
      filters: 'private[equals]false',
    },
  });

  const paths = data.contents.map((content) => `/public/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context?.params?.id as string;
  const data = await client.getListDetail<ArticleType>({
    endpoint: 'articles',
    contentId: id,
  });

  return {
    props: {
      data,
    },
  };
};

type Props = {
  data: ArticleListDetail;
};

const PublicId: NextPage<Props> = ({ data }) => {
  return <Article data={data} />;
};

export default PublicId;
