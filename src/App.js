import React from "react";

const commentData = {
  title: "Fake article title.",
  author: "grzm",
  comments: [
    {
      id: 1,
      text: "Example comment here.",
      author: "user2",
      children: [
        {
          id: 2,
          text: "Another example comment text.",
          author: "user3",
          children: [
            {
              id: 3,
              text: "Another example comment text.",
              author: "user4",
              children: [
                {
                  id: 9,
                  text: "Another example comment text.",
                  author: "user4",
                  children: [],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 4,
      text: "Example comment here 2.",
      author: "user5",
      children: [
        {
          id: 99,
          text: "Another example comment text.",
          author: "user4",
          children: [],
        },
      ],
    },
  ],
};

function Comment({ comment }) {
  const onDelete = (id) => {
    console.log(id);
  };
  const nestedComments = (comment.children || []).map((comment) => {
    return (
      <>
        <button onClick={() => onDelete(comment.id)}>X</button>
        <Comment key={comment.id} comment={comment} type="child" />
      </>
    );
  });

  return (
    <div style={{ marginLeft: "25px", marginTop: "10px" }}>
      <span>{comment.id}</span>
      {nestedComments}
    </div>
  );
}

function App() {
  return (
    <div>
      {commentData.comments.map((comment) => {
        return <Comment key={comment.id} comment={comment} />;
      })}
    </div>
  );
}

export default App;
