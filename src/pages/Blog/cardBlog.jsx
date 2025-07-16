import React from 'react';
import { useParams, Link } from 'react-router-dom';
import blogs from './blogs'; // import shared blog data
import { Card } from 'react-bootstrap';

function CardBlog() {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) {
    return <div className='container py-5'><h2>Blog not found.</h2></div>;
  }

  return (
    <div className='container py-5'>
      <Link to="/blog" className='btn btn-outline-danger mb-4'>Back to Blogs</Link>
      <Card className='shadow border-0'>
        <Card.Img variant="top" src={blog.img} />
        <Card.Body>
          <Card.Title className='fs-2 text-danger'>{blog.title}</Card.Title>
          <Card.Text>{blog.description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardBlog;
