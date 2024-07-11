"use client";
import { gql } from "@apollo/client";
import createApolloClient from "@/lib/apollo-client";
import { Book } from "@/lib/types";
import SelectedBooks from "@/components/SelectedBooks";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Container } from "@mui/material";

const client = createApolloClient();

export default function Home() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await client.query({
          query: gql`
            query Books {
              books {
                author
                coverPhotoURL
                readingLevel
                title
              }
            }
          `,
        });

        const booksWithIds = data.books.map((book: Book) => ({
          ...book,
          id: uuidv4(),
        }));

        setBooks(booksWithIds);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch books.");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading)
    return (
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100svh",
        }}
      >
        <CircularProgress />
      </Container>
    );
  if (error) return <div>{error}</div>;

  return <SelectedBooks books={books} />;
}
