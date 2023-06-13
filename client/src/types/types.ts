export interface Reply {
  _id: string;
  creator: string;
  creatorPicture: string;
  content: string;
  likes: Array<string>;
  createdAt: Date;
  postId: string;
}

export interface Post {
  _id: string;
  creator: string;
  creatorPicture: string;
  content: string;
  likes: Array<string>;
  createdAt: Date;
  replies: Array<string>;
}
