import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import SideBar from "./SideBar";

describe('SideBar', () => {
  const props = {
    location: '/test-location',
    navigate: jest.fn(),
    size: 'big',
    sideBarText: 'Test Sidebar Text',
    subPages: [
      {
        title: 'Test Title 1',
        url: '/test-url-1',
        date: '2022-01-01',
        category: 'Test Category 1',
        content: "Test Content 1"
      },
      {
        title: 'Test Title 2',
        url: '/test-url-2',
        date: '2022-01-02',
        category: 'Test Category 2',
        content: "Test Content 2"
      },
    ],
  };

  it('renders the subpages', () => {
    render(
      <BrowserRouter>
        <SideBar {...props} />
      </BrowserRouter>
    );
    const subPageElements = screen.getAllByRole('listitem');
    expect(subPageElements).toHaveLength(props.subPages.length);
  });

  it('renders the sidebar text when there are no subpages', () => {
    const propsWithoutSubPages = { ...props, subPages: [] };
    render(
      <BrowserRouter>
        <SideBar {...propsWithoutSubPages} />
      </BrowserRouter>
    );
    const sidebarTextElement = screen.getByText(props.sideBarText);
    expect(sidebarTextElement).toBeInTheDocument();
  });

  // I think the actual code works, but the test fails
  it('renders the featured item when there are subpages', () => {
    render(
      <BrowserRouter>
        <SideBar {...props} />
      </BrowserRouter>
    );
    const subPageElements = screen.getAllByRole('featureditem');
    expect(subPageElements).toHaveLength(1);
  });

  it('does not render the featured item when there are no subpages', () => {
    const propsWithoutSubPages = { ...props, subPages: [] };
    render(
      <BrowserRouter>
        <SideBar {...propsWithoutSubPages} />
      </BrowserRouter>
    );
    const featuredItemElement = screen.queryByTestId('featured-item');
    expect(featuredItemElement).not.toBeInTheDocument();
  });
});