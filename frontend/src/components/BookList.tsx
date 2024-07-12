"use client";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { Book } from "@/lib/types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import BookListItem from "@/components/BookListItem";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useTheme } from "@mui/material";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { closeDialog } from "@/redux/features/dialog-slice";

// Displays list of books Teacher can select
const BookList = ({ books }: { books: Book[] }) => {
  const theme = useTheme();
  const [searchQuery, setSearchQuery] = useState("");

  // Get dialog visibility state
  const dialogState = useSelector(
    (state: RootState) => state.dialogReducer.open
  );
  const dispatch = useDispatch();

  // Filter selected books
  const filteredBooks = books.filter((book: Book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleClose = () => {
    dispatch(closeDialog());
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const textFieldStyles = {
    color: theme.palette.secondary.main,
    marginBottom: "16px",
  };

  const dialogStyles = {
    maxWidth: "600px",
    height: "600px",
    margin: "auto",
  };

  return (
    <Dialog onClose={handleClose} open={dialogState} sx={dialogStyles}>
      <DialogTitle>
        <TextField
          autoFocus
          label="Search by Book Title"
          variant="filled"
          fullWidth
          value={searchQuery}
          onChange={handleSearchChange}
          sx={textFieldStyles}
        />
      </DialogTitle>

      <DialogContent>
        <DialogContentText>
          <Box sx={{ width: "100%" }}>
            {filteredBooks.length === 0 ? (
              <Box sx={{ width: "600px", height: "600px" }}>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ width: "95%", margin: "auto" }}
                >
                  No books found.
                </Typography>
              </Box>
            ) : (
              <Box sx={{ width: "100%" }}>
                <Grid container md={12}>
                  {filteredBooks.map((book: Book) => (
                    <BookListItem key={book.id} book={book} />
                  ))}
                </Grid>
              </Box>
            )}
          </Box>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};

export default BookList;
