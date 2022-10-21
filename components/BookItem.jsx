import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography
} from '@mui/material';
import React from 'react';

const BookItem = ({ title, author, id, price, imageUrl }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="340"
          image={imageUrl}
          alt="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div">
            {title}
          </Typography>
          <Typography
            gutterBottom
            variant="subtitle2"
            component="div">
            Author: {author}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary">
            Cost: ${price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            type="button"
            variant="outlined">
            Buy
          </Button>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};

export default BookItem;
