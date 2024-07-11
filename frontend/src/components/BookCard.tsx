import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  useTheme,
} from "@mui/material";
import { Book } from "@/lib/types";

const BookCard = ({ book }: { book: Book }) => {
  const theme = useTheme();

  const cardStyles = {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  };

  const title = {
    fontWeight: "800",
    color: theme.palette.secondary.main,
  };

  return (
    <Card sx={cardStyles}>
      <CardMedia
        component="img"
        alt={book.title}
        height="200"
        image={`/${book.coverPhotoURL}`}
        title={book.title}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="body2" fontWeight={800} sx={title}>
          {book.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          By {book.author}
        </Typography>
        <Typography variant="body2" color="text.primary">
          Reading Level: {book.readingLevel}
        </Typography>
        {/* <Button
          variant="contained"
          color="primary"
          style={{ marginTop: "10px" }}
        >
          Buy
        </Button> */}
      </CardContent>
    </Card>
  );
};

export default BookCard;
