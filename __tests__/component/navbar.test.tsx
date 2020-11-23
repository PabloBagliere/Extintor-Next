import { render } from '@testing-library/react';
import NavBar from 'component/NavBar';
import DTOLinks from 'Utils/LinksDTO';
const mock: DTOLinks[] = [
  {
    href: '/mock-route',
    text: 'mock-path',
  },
  {
    href: '/test2',
    text: 'Prueba2',
  },
  {
    href: '/test3',
    text: 'Prueba3',
  },
  {
    href: '/test4',
    text: 'Prueba4',
  },
];

describe('Test component Navbar', function () {
  it('should render without throwing an error', () => {
    const { container } = render(<NavBar links={mock} />);
    expect(container.firstChild).toBeVisible();
  });

  it('check that it puts all the text to the "a"', () => {
    const { getAllByRole } = render(<NavBar links={mock} />);
    const a = getAllByRole('link');
    a.forEach((link: HTMLElement, i: number) => {
      expect(link.textContent).toBe(mock[i].text);
    });
  });

  it('check that it puts all the href to the "a"', () => {
    const { getAllByRole } = render(<NavBar links={mock} />);
    const a = getAllByRole('link');
    a.forEach((link: HTMLElement, i: number) => {
      expect(link.getAttribute('href')).toBe(mock[i].href);
    });
  });
});
