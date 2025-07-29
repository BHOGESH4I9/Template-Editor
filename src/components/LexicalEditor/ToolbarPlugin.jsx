// src/components/ToolbarPlugin.jsx
import React from 'react';
import {
  $getSelection,
  $isRangeSelection,
  FORMAT_TEXT_COMMAND,
  $createParagraphNode,
} from 'lexical';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $wrapNodes } from '@lexical/selection';
import { HeadingNode, $createHeadingNode } from '@lexical/rich-text';
import { $createQuoteNode } from '@lexical/rich-text';
import { $isLinkNode, TOGGLE_LINK_COMMAND } from '@lexical/link';

export default function ToolbarPlugin() {
  const [editor] = useLexicalComposerContext();

  const format = (formatType) => {
    editor.dispatchCommand(FORMAT_TEXT_COMMAND, formatType);
  };

  const insertHeading = (tag) => {
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        $wrapNodes(selection, () => $createHeadingNode(tag));
      }
    });
  };

  const insertParagraph = () => {
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        $wrapNodes(selection, () => $createParagraphNode());
      }
    });
  };

  const insertQuote = () => {
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        $wrapNodes(selection, () => $createQuoteNode());
      }
    });
  };

  const toggleLink = () => {
    const url = window.prompt('Enter a URL');
    if (url) {
      editor.dispatchCommand(TOGGLE_LINK_COMMAND, url);
    }
  };

  return (
    <div className="toolbar">
      <button onClick={() => format('bold')}>Bold</button>
      <button onClick={() => format('italic')}>Italic</button>
      <button onClick={() => format('underline')}>Underline</button>
      <button onClick={() => insertHeading('h1')}>H1</button>
      <button onClick={() => insertHeading('h2')}>H2</button>
      <button onClick={insertQuote}>Quote</button>
      <button onClick={insertParagraph}>Paragraph</button>
      <button onClick={toggleLink}>Link</button>
    </div>
  );
}
