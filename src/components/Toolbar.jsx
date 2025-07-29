import React, { useEffect, useRef, useState } from 'react';
import { ButtonGroup, OverlayTrigger, Tooltip, Dropdown } from 'react-bootstrap';
import {
  BsTypeBold, BsTypeItalic, BsTypeUnderline, BsTypeStrikethrough, BsCode, BsBlockquoteLeft,
  BsListUl, BsListOl, BsImage, BsLink, BsTable, BsArrowCounterclockwise, BsArrowClockwise,
  BsTextParagraph, BsX, BsDash, BsCheck2Square, BsJustifyLeft,
  BsJustifyRight, BsJustify, BsDownload
} from 'react-icons/bs';
import { FaAlignCenter } from 'react-icons/fa';
import { MdFormatColorText, MdFormatColorFill } from 'react-icons/md';
import html2pdf from 'html2pdf.js';
import { HexColorPicker } from 'react-colorful';
import '../styles/Toolbar.css';

const Toolbar = ({ editor, selectedTemplate }) => {
  const fileInputRef = useRef(null);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [colorMode, setColorMode] = useState(null);
  const [textColor, setTextColor] = useState('#000000');
  const [bgColor, setBgColor] = useState('#ffffff');
  const colorPickerRef = useRef(null);

  if (!editor) return null;

  const headingLevels = [1, 2, 3, 4, 5, 6];
  const lineHeights = ['1', '1.15', '1.5', '2'];
  const margins = ['normal', 'wide', 'extra-wide'];
  const fontSizes = ['8pt', '10pt', '12pt', '14pt', '16pt', '18pt', '24pt', '36pt']; // Predefined font sizes

  const applyLineHeight = (height) => {
    const editorEl = document.querySelector('.ProseMirror');
    if (editorEl) editorEl.style.lineHeight = height;
  };

  const applyMargin = (type) => {
    const editorWrapper = document.querySelector('.editor-wrapper');
    if (editorWrapper) {
      editorWrapper.classList.remove('padding-normal', 'padding-wide', 'padding-extra-wide');
      editorWrapper.classList.add(`padding-${type}`);
    }
  };


  const handleImageUpload = () => {
    fileInputRef.current.click();
  };

  const onFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64 = reader.result;
        editor.chain().focus().setImage({ src: base64 }).run();
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDownloadPDF = () => {
    const content = document.getElementById('editor-content');
    if (!content) return alert('Editor content not found!');

    content.classList.add('pdf-clean');
    const options = {
      margin: [0.5, 0.5, 0.5, 0.5],
      filename: `${selectedTemplate?.name || 'template'}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
    };

    html2pdf().set(options).from(content).save().then(() => {
      content.classList.remove('pdf-clean');
    });
  };

  const handleColorChange = (color) => {
    if (!editor) return;
    editor.chain().focus();

    if (colorMode === 'text') {
      editor.chain().setColor(color).run();
      setTextColor(color);
    } else {
      editor.chain().setHighlight({ color }).run();
      setBgColor(color);
    }
  };

  const clearTextColor = () => {
    if (!editor) return;
    editor.chain().focus().unsetColor().run();
    setTextColor('#000000');
    setShowColorPicker(false);
  };

  const clearBackground = () => {
    if (!editor) return;
    editor.chain().focus().unsetHighlight().run();
    setBgColor('#ffffff');
    setShowColorPicker(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        colorPickerRef.current &&
        !colorPickerRef.current.contains(event.target)
      ) {
        setShowColorPicker(false);
      }
    };

    if (showColorPicker) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showColorPicker]);

  const buttons = [
    { icon: <BsArrowCounterclockwise />, action: () => editor.chain().focus().undo().run(), label: 'Undo' },
    { icon: <BsArrowClockwise />, action: () => editor.chain().focus().redo().run(), label: 'Redo' },
    { icon: <BsJustifyLeft />, action: () => editor.chain().focus().setTextAlign('left').run(), isActive: editor.isActive({ textAlign: 'left' }), label: 'Align Left' },
    { icon: <FaAlignCenter />, action: () => editor.chain().focus().setTextAlign('center').run(), isActive: editor.isActive({ textAlign: 'center' }), label: 'Align Center' },
    { icon: <BsJustifyRight />, action: () => editor.chain().focus().setTextAlign('right').run(), isActive: editor.isActive({ textAlign: 'right' }), label: 'Align Right' },
    { icon: <BsJustify />, action: () => editor.chain().focus().setTextAlign('justify').run(), isActive: editor.isActive({ textAlign: 'justify' }), label: 'Justify' },
    { icon: <BsTypeBold />, action: () => editor.chain().focus().toggleBold().run(), isActive: editor.isActive('bold'), label: 'Bold' },
    { icon: <BsTypeItalic />, action: () => editor.chain().focus().toggleItalic().run(), isActive: editor.isActive('italic'), label: 'Italic' },
    { icon: <BsTypeUnderline />, action: () => editor.chain().focus().toggleUnderline().run(), isActive: editor.isActive('underline'), label: 'Underline' },
    { icon: <BsTypeStrikethrough />, action: () => editor.chain().focus().toggleStrike().run(), isActive: editor.isActive('strike'), label: 'Strikethrough' },
    { icon: <BsTextParagraph />, action: () => editor.chain().focus().setParagraph().run(), isActive: editor.isActive('paragraph'), label: 'Paragraph' },
    { icon: <BsBlockquoteLeft />, action: () => editor.chain().focus().toggleBlockquote().run(), isActive: editor.isActive('blockquote'), label: 'Blockquote' },
    { icon: <BsCode />, action: () => editor.chain().focus().toggleCodeBlock().run(), isActive: editor.isActive('codeBlock'), label: 'Code Block' },
    { icon: <BsListUl />, action: () => editor.chain().focus().toggleBulletList().run(), isActive: editor.isActive('bulletList'), label: 'Bullet List' },
    { icon: <BsListOl />, action: () => editor.chain().focus().toggleOrderedList().run(), isActive: editor.isActive('orderedList'), label: 'Ordered List' },
    { icon: <BsCheck2Square />, action: () => editor.chain().focus().toggleTaskList().run(), isActive: editor.isActive('taskList'), label: 'Task List' },
    {
      icon: <BsLink />,
      action: () => {
        const url = window.prompt('Enter URL');
        if (url) editor.chain().focus().setLink({ href: url }).run();
      },
      isActive: editor.isActive('link'),
      label: 'Insert Link',
    },
    { icon: <BsImage />, action: handleImageUpload, label: 'Insert Image' },
    { icon: <BsTable />, action: () => editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run(), label: 'Insert Table' },
    { icon: <BsDash />, action: () => editor.chain().focus().setHorizontalRule().run(), label: 'Horizontal Rule' },
    { icon: <BsX />, action: () => editor.chain().focus().setHardBreak().run(), label: 'Hard Break' },
    { icon: <BsDownload />, action: handleDownloadPDF, label: 'Download PDF' },
  ];

  return (
    <div className="toolbar bg-white border-bottom shadow-sm d-flex flex-wrap align-items-center gap-2 px-3 py-2">
      {/* Heading, Line Height, Margin, Font Size */}
      <Dropdown>
        <Dropdown.Toggle variant="outline-primary" size="sm" className="rounded-pill">Heading</Dropdown.Toggle>
        <Dropdown.Menu className="shadow-sm">
          {headingLevels.map(level => (
            <Dropdown.Item key={level} onClick={() => editor.chain().focus().toggleHeading({ level }).run()} active={editor.isActive('heading', { level })}>
              Heading {level}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown>
        <Dropdown.Toggle variant="outline-primary" size="sm" className="rounded-pill">Line Height</Dropdown.Toggle>
        <Dropdown.Menu className="shadow-sm">
          {lineHeights.map(height => (
            <Dropdown.Item key={height} onClick={() => applyLineHeight(height)}>{height}</Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown>
        <Dropdown.Toggle variant="outline-primary" size="sm" className="rounded-pill">Margin</Dropdown.Toggle>
        <Dropdown.Menu className="shadow-sm">
          {margins.map(margin => (
            <Dropdown.Item key={margin} onClick={() => applyMargin(margin)}>{margin}</Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>

      {/* Text Color Picker */}
      <div className="position-relative text-center">
        <Dropdown show={showColorPicker && colorMode === 'text'}>
          <Dropdown.Toggle
            variant="outline-primary"
            size="sm"
            className="rounded-pill d-flex align-items-center gap-1"
            onClick={() => {
              setColorMode('text');
              setShowColorPicker(prev => (colorMode !== 'text' ? true : !prev));
            }}
          >
            <MdFormatColorText size={18} />
            <span style={{ fontSize: '0.75rem' }}>A</span>
            <div style={{
              height: 8, width: 16, backgroundColor: textColor,
              borderRadius: 2, border: '1px solid #ccc',
            }} />
          </Dropdown.Toggle>

          <Dropdown.Menu className="shadow-sm p-2">
            <HexColorPicker color={textColor} onChange={handleColorChange} />
            <button className="btn btn-sm btn-outline-secondary mt-1 w-100" onClick={clearTextColor}>
              Clear Text Color
            </button>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      {/* Background Color Picker */}
      <div className="position-relative text-center">
        <Dropdown show={showColorPicker && colorMode === 'background'}>
          <Dropdown.Toggle
            variant="outline-primary"
            size="sm"
            className="rounded-pill d-flex align-items-center gap-1"
            onClick={() => {
              setColorMode('background');
              setShowColorPicker(prev => (colorMode !== 'background' ? true : !prev));
            }}
          >
            <MdFormatColorFill size={18} />
            <div style={{
              height: 8, width: 16, backgroundColor: bgColor,
              borderRadius: 2, border: '1px solid #ccc',
            }} />
          </Dropdown.Toggle>

          <Dropdown.Menu className="shadow-sm p-2">
            <HexColorPicker color={bgColor} onChange={handleColorChange} />
            <button className="btn btn-sm btn-outline-secondary mt-1 w-100" onClick={clearBackground}>
              Clear Background
            </button>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      {/* Toolbar Buttons */}
      <ButtonGroup className="d-flex flex-wrap gap-2">
        {buttons.map(({ icon, action, isActive, label }, index) => (
          <OverlayTrigger key={index} placement="top" overlay={<Tooltip>{label}</Tooltip>}>
            <button
              className={`btn btn-sm ${isActive ? 'btn-primary' : 'btn-outline-primary'} rounded-pill`}
              onClick={action}
            >
              {icon}
            </button>
          </OverlayTrigger>
        ))}
      </ButtonGroup>

      <input type="file" accept="image/*" ref={fileInputRef} onChange={onFileChange} style={{ display: 'none' }} />
    </div>
  );
};

export default Toolbar;