import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  useTheme,
  Box,
} from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Grid from "@mui/material/Grid";
import { Book } from "@/lib/types";
import Divider from "@mui/material/Divider";

const BookListItem = ({ book }: { book: Book }) => {
  const theme = useTheme();

  const cardStyles = {
    display: "flex",
    flexDirection: "row",
    height: "100%",
    width: "100%",
    padding: 0,
  };

  const title = {
    fontWeight: "800",
    color: theme.palette.secondary.main,
  };

  const gridContainerStyle = {
    width: "95%",
    margin: "auto",
  };

  const gridItemStyle = {
    marginTop: "0.5rem",
    marginBottom: "0.5rem",
  };

  return (
    <Grid container sx={gridContainerStyle}>
      <Grid container sx={gridItemStyle}>
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
          >
            Add
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BookListItem;
