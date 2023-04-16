import { Tag } from "./Tag";

export interface Article {
    id: number;
    image: string;
    likes: number;
    watching: number;
    tags: Tag[];
    title: string;
    text: string;
}
