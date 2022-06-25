import { List } from "@mui/material";
import { FunctionComponent, useEffect, useState } from "react";
import { Post } from "../util/models";
import { PostItem } from "./PostItem";

const API_URL = process.env.REACT_APP_API_URL as string;

export const PostList: FunctionComponent = () => {

  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch(`${API_URL}/posts`)
      .then(data => data.json())
      .then(data => setPosts(data));
  }, [posts])

  return (
    <List>
      {posts.map((p, ) => (
        <PostItem title={p.title}/>
      ))}
    </List>
  );
};