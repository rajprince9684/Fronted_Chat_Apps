import React from 'react';
import { HelmetProvider } from 'react-helmet-async';

const Title = ({
  title = "Chat App",
  description = 'this is the Chat App called chat',
}) => {
  return (
  <HelmetProvider>
    <title>{title}</title>
    <meta name="description" content={description} />
  </HelmetProvider>
  );
};
export default Title;