import IMeta from "./i-meta";
import IPost from "./i-post";

 export default interface IRootPostObject {
    posts: IPost[];
    meta?: IMeta;
  }