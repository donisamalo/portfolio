import React from 'react';
import { useEffect } from 'react';
import BaseLayout from '@/components/layout/BaseLayout'
import BasePage from '@/components/BasePage';
import Link from 'next/link';

import axios from 'axios';

const Portfolio = ({posts}) => {
  useEffect(() => {
    async function getPost() {
      
    }
  }, [])

  const renderPosts = (posts) => {
    return posts.map(post => 
      <li key={post.id}>
        <Link as={`/portfolio/${post.id}`} href={`/portfolio/[id]`}>
          <a>
            { post.title }
          </a>
        </Link>
      </li>  
    )
  }
  return (
    <BaseLayout>
      <BasePage>
        <h1>Portfolio Page</h1>
        <ul>
          { renderPosts(posts) }
        </ul>
      </BasePage>
    </BaseLayout>
  )
}

Portfolio.getInitialProps = async () => {
  let posts = [];
  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
    posts = res.data;
  } catch (error) {
    console.error(error);
  }
  return { posts: posts.slice(0, 10) };
}



export default Portfolio;
