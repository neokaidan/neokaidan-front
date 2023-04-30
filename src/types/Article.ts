import { Tag } from "./Tag";

export type Article = {
    id: number;
    image: string;
    likes: number;
    watching: number;
    tags: Tag[];
    title: string;
    text: string;
};
