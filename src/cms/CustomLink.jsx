import { Node, mergeAttributes } from '@tiptap/core';
import { Link } from 'react-router-dom'; // Import the React Router Link component

const CustomLink = Node.create({
  name: 'customLink',

  defaultOptions: {
    HTMLAttributes: {},
  },

  inline: true,

  group: 'inline',

  draggable: true,

  addAttributes() {
    return {
      href: {
        default: null,
      },
    };
  },

  parseHTML({ node }) {
    return {
      href: node.getAttribute('href'),
    };
  },

  renderHTML({ HTMLAttributes }) {
    const { href } = this.node.attrs;

    if (href && href.startsWith('/')) {
      // For internal links, render the React Router Link component
      return (
        <Link {...mergeAttributes(this.options.HTMLAttributes, HTMLAttributes)} to={href}>
          {this.node.textContent}
        </Link>
      );
    }

    // For external links, render the anchor <a> tag
    return (
      <a {...mergeAttributes(this.options.HTMLAttributes, HTMLAttributes)} href={href}>
        {this.node.textContent}
      </a>
    );
  },
});

export default CustomLink;