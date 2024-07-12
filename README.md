# Ello Engineering Challenge

/public - contains book assets
/src
/app
  /page.tsx - fetches data
/components - houses book components
/lib - has apollo client and theme
/redux - handles dialog and books state

👋 Hello Again,
Above is a rough draft of the project structure and what it contains for ease in navigation.

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
