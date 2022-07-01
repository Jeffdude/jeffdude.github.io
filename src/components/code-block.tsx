import React from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

type Props = {
  children: string;
}

const CodeBlock: React.FC<Props> = ({children}: Props): JSX.Element => {
  return <SyntaxHighlighter language='javascript' style={a11yDark} customStyle={{
    fontSize: "0.6em",
    margin: "1vmin",
  }}>
    {children}
  </SyntaxHighlighter>
}

export default CodeBlock;