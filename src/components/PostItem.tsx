import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { FunctionComponent } from "react";

export type PostItemProps = {
  title: string;
};

export const PostItem: FunctionComponent<PostItemProps> = ({ title } : PostItemProps) => {
  return (
  <Card sx={{ width: 720 }}>
    <CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
  );
};