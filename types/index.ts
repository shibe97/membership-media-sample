import {
  MicroCMSListResponse,
  MicroCMSImage,
  MicroCMSListContent,
} from 'microcms-js-sdk';

export type Article = {
  title?: string;
  body?: string;
  thumbnail?: MicroCMSImage;
  private: boolean;
};

export declare type ArticleList = MicroCMSListResponse<Article>;
export declare type ArticleListDetail = Article & MicroCMSListContent;
