import { Sandpack } from '@codesandbox/sandpack-react';
import Page from './page/Page.jsx?raw';
import PageCSS from './page/Page.css?raw';

export default () => {
  return (
    <Sandpack
      template="react"
      files={{
        '/App.js': Page,
        '/Page.css': PageCSS,
      }}
    />
  );
};
