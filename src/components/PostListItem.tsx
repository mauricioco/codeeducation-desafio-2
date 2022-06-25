import { Box, Card, CardActionArea, CardContent, Modal, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { FunctionComponent, useState } from "react";
import theme from "../theme";

export type PostItemProps = {
  title: string;
  body: string;
};

const modalStyle = makeStyles({
  root: {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    backgroundColor: theme.palette.background.default,
    border: '2px solid #000',
    boxShadow: '24',
    padding: '2em',
  }
});

export const PostListItem: FunctionComponent<PostItemProps> = ({ title, body } : PostItemProps) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const modalClasses = modalStyle();

  return (
    <Box p={0.5}>
      <Card sx={{ display: 'flex', flexBasis: 'auto' }} >
          <CardActionArea onClick={handleOpen}>
            <CardContent>
              <Typography id="modal-modal-title" gutterBottom variant="h5" component="div">
                {title}
              </Typography>
            </CardContent>
          </CardActionArea>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={modalStyle} className={modalClasses.root}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                {title}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {body}
              </Typography>
            </Box>
          </Modal> 
      </Card>
    </Box>
  );
};