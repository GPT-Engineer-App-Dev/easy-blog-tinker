import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const blogPosts = {
  1: {
    title: "My First Blog Post",
    content: "This is the beginning of my blogging journey. I'm excited to share my thoughts and experiences with you all. In this post, I'll be discussing why I decided to start a blog and what you can expect from my future posts.",
    date: "2023-03-15"
  },
  2: {
    title: "Reflections on Web Development",
    content: "As I delve deeper into web development, I'm constantly amazed by the ever-evolving landscape of technologies and best practices. In this post, I'll share some of my recent learnings and challenges in the world of web development.",
    date: "2023-03-20"
  },
  3: {
    title: "The Importance of User Experience",
    content: "User experience is at the heart of every successful website. In this post, we'll explore why UX matters so much and how you can improve the user experience of your own projects. We'll cover topics such as intuitive design, accessibility, and performance optimization.",
    date: "2023-03-25"
  }
};

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts[id];

  if (!post) {
    return <div className="container mx-auto px-4 py-8">Post not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/" className="flex items-center text-blue-500 hover:underline mb-4">
        <ArrowLeft className="mr-2" size={20} />
        Back to Home
      </Link>
      <article className="prose lg:prose-xl mx-auto">
        <h1>{post.title}</h1>
        <p className="text-gray-500">{post.date}</p>
        <div className="mt-4">
          {post.content.split('\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
