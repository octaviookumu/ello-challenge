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

const BooksPage = ({ books }: { books: Book[] }) => {
  const theme = useTheme();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBooks = books.filter((book: Book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const title = {
    marginTop: "2rem",
    color: theme.palette.secondary.main,
  };

  const textField = {
    color: theme.palette.secondary.main,
  };

  return (
    <Container>
      <Typography variant="h1" gutterBottom sx={title}>
        Books
      </Typography>

      <TextField
        label="Search by Book Title"
        variant="outlined"
        fullWidth
        value={searchQuery}
        onChange={handleSearchChange}
        style={{ marginBottom: "16px" }}
        sx={textField}
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
