import router from 'next/router';
import React from 'react';

function surveys() {
  return <h1>Dashboard</h1>;
}

surveys.getInitialProps = async (ctx) => {
  const user = ctx.req?.user;

  const redirectUser = (ctx, location) => {
    if (ctx.req) {
      ctx.res.writeHead(302, { Location: location });
      ctx.res.end();
    } else {
      router.push(location);
    }
  };

  if (!user) {
    redirectUser(ctx, '/');
  }

  return {};
};

export default surveys;
