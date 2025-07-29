import React, { useEffect, useState } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import Highlight from '@tiptap/extension-highlight';
import {
  Table,
  TableRow,
  TableCell,
  TableHeader,
} from '@tiptap/extension-table';
import HorizontalRule from '@tiptap/extension-horizontal-rule';
import HardBreak from '@tiptap/extension-hard-break';
import TaskList from '@tiptap/extension-task-list';
import TaskItem from '@tiptap/extension-task-item';
import TextAlign from '@tiptap/extension-text-align';
import Heading from '@tiptap/extension-heading';
import Toolbar from './Toolbar';
import { Color } from '@tiptap/extension-color';
import FontSize from '@tiptap/extension-font-size';
import { TextStyle } from '@tiptap/extension-text-style';

import '../styles/editor.css';

const EditorApp = ({ selectedTemplate }) => {
  const [inputValues, setInputValues] = useState({});

  const editor = useEditor({
    extensions: [
      StarterKit.configure({ heading: false }),
      Heading.configure({ levels: [1, 2, 3, 4, 5, 6] }),
      Underline,
      Link,
      Image,
      TextStyle,
      Color.configure({ types: ['textStyle'] }), 
      Highlight.configure({ multicolor: true }), 
      Table.configure({ resizable: true }),
      TableRow,
      TableCell,
      TableHeader,
      HorizontalRule,
      HardBreak,
      TaskList,
      TaskItem.configure({ nested: true }),
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      FontSize.configure(),
    ],
    content: '<p>Start writing here...</p>',
  });

  useEffect(() => {
    if (selectedTemplate) {
      const initialInputs = {};
      selectedTemplate.fields.forEach((field) => {
        initialInputs[field] = '';
      });
      setInputValues(initialInputs);
      editor?.commands.setContent('<p>Please complete the input fields above to generate and preview your template content here....</p>');
    }
  }, [selectedTemplate]);

  useEffect(() => {
    const handleTabKey = (e) => {
      if (e.key === 'Tab' && document.activeElement.closest('.ProseMirror')) {
        e.preventDefault();
        editor?.chain().focus().insertContent('\u00A0\u00A0\u00A0\u00A0').run();
      }
    };
    document.addEventListener('keydown', handleTabKey);
    return () => document.removeEventListener('keydown', handleTabKey);
  }, [editor]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updatedValues = { ...inputValues, [name]: value };
    setInputValues(updatedValues);

    const rendered = selectedTemplate.content(updatedValues);
    editor?.commands.setContent(rendered);
  };

  return (
    <div className="editor-wrapper">
      {selectedTemplate && selectedTemplate.fields.length > 0 && (
        <div className="template-form mb-3 p-3 bg-light rounded border">
          <h5 className="mb-3">Fill {selectedTemplate?.name} Details: </h5>
          <div className="row g-2">
            {selectedTemplate.fields.map((field) => (
              <div className="col-md-6" key={field}>
                <input
                  type="text"
                  className="form-control"
                  placeholder={field.replace(/([A-Z])/g, ' $1')}
                  name={field}
                  value={inputValues[field] || ''}
                  onChange={handleInputChange}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      <Toolbar editor={editor} selectedTemplate={selectedTemplate} />
      <EditorContent editor={editor} className="editor-area" id="editor-content" />
    </div>
  );
};

export default EditorApp;