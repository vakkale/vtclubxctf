/* 
The Page component is a wrapper for each page of the website.
It is used to set the page title, subtitle, content, sub-content, etc.
*/

import React, { FC } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import SideBar from './components/SideBar';

interface PageProps {
    title: string;              // Page title
    subtitle?: string;          // Optional
    background: string;         // Background image URL
    yPos?: string;              // Optional (background image position)
    hasSubPages?: boolean       // Optional
    content: string;            // Page content (markdown format)
    url: string;                // Page URL (used for routing, relative to the root)
    sideBarText?: string;       // Optional, only used if there are no sub-pages
    subPages?: {
        title: string;          // Sub-content title
        content: string;        // Sub-content (markdown format)
        tags?: string[];        // Optional
        url: string;            // Sub-content URL (used for routing, relative to the main page)
        featuredImage?: string; // Optional
        date?: string;          // Optional
        category?: string;      // Optional
    }[];
    meta?: {
        description: string;    // Page description (for SEO)
        keywords: string[];     // Page keywords (for SEO)
        author: string;         // Page author (for SEO)
        updatedAt: string;      // Page last update date (for SEO)
      };
}

const Page: FC<PageProps> = (props) => {
    const location = useLocation();
    const navigate = useNavigate();
  
    return (
      <div>
        {/* Add your page content here */}
      </div>
    );
  };
  
  export default Page;