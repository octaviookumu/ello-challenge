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

const BooksPage = ({ books }: { books: Book[] }) => {
  const theme = useTheme();
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();

  const filteredBooks = books.filter((book: Book) =>
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
    color: theme.palette.secondary.main,
  };

  const buttonStyle = {
    color: "white",
    backgroundColor: theme.palette.warning.main,
  };

  return (
    <Container>
      <BooksList books={filteredBooks} />
      <div className="flex items-center justify-between ">
        <Typography variant="h2" gutterBottom sx={title}>
          Books
        </Typography>

        <Button variant="outlined" onClick={handleClickOpen}>
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
      />

      {filteredBooks.length === 0 ? (
        <Typography variant="body1" color="text.secondary">
          No books found.
        </Typography>
      ) : (
        <Grid container spacing={4} className="mb-6">
          {filteredBooks.map((book: Book) => (
            <Grid item key={book.id} xs={12} sm={4} md={3}>
              <BookCard book={book} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default BooksPage;
