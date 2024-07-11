import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  useTheme,
} from "@mui/material";
import { Book } from "@/lib/types";
import CardActions from "@mui/material/CardActions";
import { useDispatch } from "react-redux";
import { deleteBook } from "@/redux/features/book-slice";

const BookCard = ({ book }: { book: Book }) => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const handleDelete = (id: string) => {
    dispatch(deleteBook(id));
  };

  const cardStyles = {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  };

  const title = {
    fontWeight: "800",
    color: theme.palette.secondary.main,
  };

  const buttonStyle = {
    color: "white",
    background: theme.palette.error.main,
    marginLeft: "auto",
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
      <CardActions>
        <Button
          size="small"
          sx={buttonStyle}
          variant="contained"
          onClick={() => handleDelete(book.id)}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default BookCard;
