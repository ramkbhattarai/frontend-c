import { Profile } from './profile.model';

export interface Article {
  slug: string;
  description: string;
  text:string;
  imageUrl: string;
  body: string;
  tagList: string[];
  createdAt: string;
  updatedAt: string;
  favorited: boolean;
  favoritesCount: number;
  author: Profile;
}
