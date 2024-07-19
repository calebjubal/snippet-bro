import { useGlobalContext } from '@/ContextApi';
import React from 'react'
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import {
    materialDark,
    materialLight,
    atomDark,
    oneDark,
} from "react-syntax-highlighter/dist/cjs/styles/prism"

interface CodeBlockProps {
    language: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ language }) => {
  const {
    darkModeObject: { darkMode },
  } = useGlobalContext();

  const codeString = `
    import React from 'react'
    
    function HelloWorld() {
      return <h1>Hello, World!</h1>
    }
    
    export default HelloWorld;
  `
  return (
    <div className='rounded-md overflow-hidden text-sm'>
      <SyntaxHighlighter
        language={language}
        style={darkMode[1].isSelected ? oneDark : materialLight}
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  )
}

export default CodeBlock
