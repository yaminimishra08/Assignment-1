// Import React library
import React from "react";

const book = [
  {
    objectID: 1,
    title: "A Song of Ice and Fire",
    url: "https://en.wikipedia.org/wiki/A_Song_of_Ice_and_Fire",
    author: "George R. R. Martin",
    num_comments: 60,
    points: 100,
  },
  {
    objectID: 2,
    title: "The Lord of the Rings",
    url: "https://en.wikipedia.org/wiki/The_Lord_of_the_Rings_(film_series)",
    author: "J. R. R. Tolkien",
    num_comments: 55,
    points: 80,
  },
  {
    objectID: 3,
    title: "The Vampire Diaries",
    url: "https://en.wikipedia.org/wiki/The_Vampire_Diaries",
    author: "L. J. Smith",
    num_comments: 45,
    points: 90,
  },
];

function Task4() {
  return (
    <div style={{ padding: "20px" }}>
        {/* Heading of the Task 1*/}
        <h2>Book List</h2>
        
        <table border="1" cellPadding="10" style={{ borderCollapse: "collapse" }}>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>URL</th>
                    <th>Author</th>
                    <th>Comments</th>
                    <th>Points</th>
                    </tr>
                    </thead>

        <tbody>
          {book.map((item) => (
            <tr key={item.objectID}>
              <td>{item.title}</td>
              <td>
                <a href={item.url} target="_blank" rel="noreferrer">
                  View Book
                </a>
              </td>
              <td>{item.author}</td>
              <td>{item.num_comments}</td>
              <td>{item.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

//Exporting the components so further it can be used
export default Task4;