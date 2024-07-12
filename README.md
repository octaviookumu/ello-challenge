![svgviewer-output](https://github.com/ElloTechnology/backend_takehome/assets/3518127/561bc8d4-bffc-4360-b9ea-61e876bcec93)


# Ello Engineering Challenge

Brief description of the project.

## Project Structure

```bash
/public                   <- Contains book assets
/src
├── app
│   └── page.tsx          <- Fetches data
├── components            <- Houses book components
├── lib                   <- Has Apollo client and theme
├── redux                 <- Handles dialog and books state

## Challenge

The view has the following features in their components:-

1. A search bar that allows users to search for books by title. (SelectedBooks.tsx)
2. A list of search results that displays the book title, author, and a button to add the book to the students reading list. (BookList.tsx)
3. A reading list that displays all the books that the teacher has added. (SelectedBooks.tsx)
4. A button to remove a book from the reading list. (BookCard.tsx)

### Data

To run the frontend switch into `src/frontend` folder and run (Node 18)

```bash
npm run dev
```

### Data

To get access to data that you will use for this challenge you can switch into the `src/backend` folder and run

```bash
npm install
```

Then run the following command to start the server

```bash
npm start
```

To run the frontend switch into `src/frontend` folder and run (Node 18 for Next.js 14)

```bash
npm run dev
```

This start a Graphql server at the url `http://localhost:4000/`, the server has a single query `books` that returns a list of books.

```graphql
query Books {
  books {
    author
    coverPhotoURL
    readingLevel
    title
  }
}
```
