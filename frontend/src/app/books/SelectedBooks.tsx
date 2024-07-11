"use client";
import { useState } from "react";
import {
  Typography,
  Grid,
  Container,
  TextField,
  useTheme,
} from "@mui/material";
import BookCard from "@/components/BookCard";
import { Book } from "@/lib/types";
import Button from "@mui/material/Button";
import { openDialog } from "@/redux/features/dialog-slice";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import BooksList from "./BooksList";

// Books selected by Teacher for students
const SelectedBooks = ({ books }: { books: Book[] }) => {
  const theme = useTheme();
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  const selectedBooks = useSelector(
    (state: RootState) => state.bookReducer.books
  );

  const filteredSelectedBooks = selectedBooks.filter((book: Book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleClickOpen = () => {
    dispatch(openDialog());
  };

  const title = {
    marginTop: "2rem",
    color: theme.palette.secondary.main,
  };

  const textFieldStyle = {
    color: "red",
  };

  const buttonStyles = {
    color: theme.palette.background.default,
    backgroundColor: theme.palette.success.main,
    padding: ".8rem 1.5rem",
    borderRadius: "50px",
    fontWeight: "700",
  };

  return (
    <Container>
      <BooksList books={books} />
      <div className="flex items-center justify-between ">
        <Typography variant="h2" gutterBottom sx={title}>
          Books
        </Typography>

        <Button
          variant="contained"
          onClick={handleClickOpen}
          className="add-books-button"
          sx={buttonStyles}
        >
          Add Books
        </Button>
      </div>

      <TextField
        label="Search by Book Title"
        variant="outlined"
        fullWidth
        value={searchQuery}
        onChange={handleSearchChange}
        style={{ marginBottom: "16px" }}
        sx={textFieldStyle}
        color="secondary"
      />

      {filteredSelectedBooks.length === 0 ? (
        <Typography variant="body1" color="text.secondary">
          No books found.
        </Typography>
      ) : (
        <Grid container spacing={4} className="mb-6">
          {filteredSelectedBooks.map((book: Book) => (
            <Grid item key={book.id} xs={12} sm={4} md={3}>
              <BookCard book={book} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default SelectedBooks;
