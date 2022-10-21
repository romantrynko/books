import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Link,
  Typography
} from '@mui/material';
import React from 'react';

const BookItem = ({ title, author, _id, price, imageUrl, featured }) => {
  return (
    <Card
      sx={{
        width: '100%',
        height: '100%',
        ':hover': {
          boxShadow: '0 10px 20px #ccc',
          transform: 'scale(1.01)'
        }
      }}>
      <CardActionArea>
        <Box sx={{ position: 'relative' }}>
          {featured && (
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                padding: '10px 20px 10px 10px',
                background: '#F652A0',
                boxShadow: '0 4px 8px 3px rgba(0,0,0,0.5)',
                borderBottomRightRadius: 40,
                color: 'white',
                letterSpacing: 2,
                fontSize: 16
              }}>
              Featured
            </Box>
          )}
          <CardMedia
            component="img"
            height="340"
            image={imageUrl}
            alt="green iguana"
          />
        </Box>
        <CardContent sx={{ padding: '10px' }}>
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
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: 2
            }}>
            <Link href={`/books/${_id}`}>
              <Button
                type="button"
                color="secondary"
                variant="outlined">
                Edit
              </Button>
            </Link>
            <Button
              type="button"
              variant="outlined">
              Delete
            </Button>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default BookItem;
