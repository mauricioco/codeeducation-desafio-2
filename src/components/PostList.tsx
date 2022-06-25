import { List } from "@mui/material";
import { FunctionComponent, useEffect, useState } from "react";
import { Post } from "../model/post";
import { PostItem } from "./PostItem";

export const PostList: FunctionComponent = () => {

  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    setPosts([
      new Post({title:'have not strogonoff'}),
      new Post({title:'tu tu tu tutuca'}),
      new Post({title:'beeeeetuuucarreroooo'}),
      new Post({title:'diolhos diolhos'}),
      new Post({title:'hodo'})
    ]);
  }, [posts])

  return (
    <List>
      {posts.map((p, ) => (
        <PostItem title={p.title}/>
      ))}
    </List>
  );
};