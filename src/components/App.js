import React from "react";
import blogData from "../data/blog";
import logo from "../assets/logo";
import Header from "../components/Header";
import About from "../components/About";
import ArticleList from "../components/ArticleList";
//import Header from "../components/Header";
import Article from "../components/Article";
console.log(blogData);

//import posts from "../assets/posts"


const posts = [
  { title: 'Post 1', content: 'This is the content of post 1.' },
  { title: 'Post 2', content: 'This is the content of post 2.' },
  // Add more posts as needed
];
function App() {
  return (
    <div className="App">
      <Header name="Underreacted"/>
      <About image={logo}/>
      <About />
      <About about="About this blog" />
      <ArticleList posts={posts} />
      <Article/>

      You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck!
    </div>
  );
}

export default App;
