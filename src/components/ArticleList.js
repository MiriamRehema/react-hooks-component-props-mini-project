import React from 'react';
import Article from './Article'; // Make sure to import your Article component

function ArticleList({ posts }) {
  return (
    <main>
      {posts.map((post, index) => (
        <Article key={index} title={post.title} content={post.content} />
      ))}
    </main>
  );
}

export default ArticleList;
