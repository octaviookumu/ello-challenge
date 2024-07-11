"use client";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
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

const BooksList = ({ books }: { books: Book[] }) => {
  const theme = useTheme();
  const [searchQuery, setSearchQuery] = useState("");
  const dialogState = useSelector(
    (state: RootState) => state.dialogReducer.open
  );
  const dispatch = useDispatch();

  const filteredBooks = books.filter((book: Book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleClose = () => {
    dispatch(closeDialog());
    console.log("close");
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const textFieldStyle = {
    color: theme.palette.secondary.main,
  };

  const dialogStyle = {
    maxWidth: "600px",
    height: "600px",
    margin: "auto",
  };

  return (
    <Dialog onClose={handleClose} open={dialogState} sx={dialogStyle}>
      <DialogTitle>
        <TextField
          autoFocus
          label="Search by Book Title"
          variant="filled"
          fullWidth
          value={searchQuery}
          onChange={handleSearchChange}
          style={{ marginBottom: "16px" }}
          sx={textFieldStyle}
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

export default BooksList;
