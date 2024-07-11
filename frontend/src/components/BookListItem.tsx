import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  useTheme,
  Box,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { Book } from "@/lib/types";
import { useDispatch } from "react-redux";
import { addBook } from "@/redux/features/book-slice";

const BookListItem = ({ book }: { book: Book }) => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const addBookAction = (book: Book) => {
    dispatch(addBook(book));
  };

  const title = {
    fontWeight: "800",
    color: theme.palette.secondary.main,
  };

  const gridContainerStyles = {
    width: "95%",
    margin: "auto",
  };

  const gridItemStyles = {
    marginTop: "0.5rem",
    marginBottom: "0.5rem",
  };

  const buttonStyles = {
    color: theme.palette.background.default,
    backgroundColor: theme.palette.success.main,
    padding: ".5rem 1.3rem",
    borderRadius: "50px",
    fontWeight: "700",
  };

  return (
    <Grid container sx={gridContainerStyles}>
      <Grid container sx={gridItemStyles}>
        <Grid xs={10} sm={2} md={2} sx={{ margin: "auto" }}>
          <CardMedia
            component="img"
            alt={book.title}
            height="100"
            image={`/${book.coverPhotoURL}`}
            title={book.title}
            sx={{ width: "100%", height: "100%" }}
          />
        </Grid>

        <Grid xs={7} sm={8} md={8}>
          <CardContent sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="body2" fontWeight={800} sx={title}>
              {book.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              By {book.author}
            </Typography>
            <Typography variant="body2" color="text.primary">
              Reading Level: {book.readingLevel}
            </Typography>
          </CardContent>
        </Grid>

        <Grid
          xs={5}
          sm={2}
          md={2}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Button
            variant="contained"
            color="primary"
            style={{ marginTop: "10px" }}
            onClick={() => addBookAction(book)}
            sx={buttonStyles}
          >
            Add
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BookListItem;
