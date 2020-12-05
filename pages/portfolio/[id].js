import React from 'react';
import BaseLayout from '@/components/layout/BaseLayout'
import BasePage from '@/components/BasePage'
import axios from 'axios';

import { withRouter } from 'next/router';

const Portfolio = ({portfolio}) => {
  return (
    <BaseLayout>
      <BasePage>
        <h1>Detail Portfolio</h1>
        <h2>{ portfolio.title }</h2>
        <p>BODY: {portfolio.body}</p>
        <p>ID: {portfolio.id}</p>
      </BasePage>
    </BaseLayout>
  )
}

Portfolio.getInitialProps = async ({ query }) => {
  let posts = {};
  try {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${query.id}`)
    posts = res.data;
  } catch (error) {
    console.error(error);
  }
  return { portfolio: posts };
}

export default withRouter(Portfolio);
