import {Post} from "./post";

export interface Topic {
    id: number;
    title: string;
    description: string;
    posts: Post[];
}
