import { Extension } from '@tiptap/core';
import TextStyle from '@tiptap/extension-text-style';

// Color extension for text color
export const Color = Extension.create({
  name: 'color',

  addOptions() {
    return {
      HTMLAttributes: {},
    };
  },

  addAttributes() {
    return {
      color: {
        default: null,
        parseHTML: element => element.style.color || null,
        renderHTML: attributes => {
          if (!attributes.color) {
            return {};
          }
          return { style: `color: ${attributes.color}` };
        },
      },
    };
  },

  parseHTML() {
    return [
      {
        style: 'color',
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ['span', HTMLAttributes, 0];
  },

  addCommands() {
    return {
      setColor:
        color =>
        ({ commands }) => {
          return commands.setMark(this.name, { color });
        },
      unsetColor:
        () =>
        ({ commands }) => {
          return commands.unsetMark(this.name);
        },
    };
  },
});