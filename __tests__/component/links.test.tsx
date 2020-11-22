import { render } from '@testing-library/react';
import Links from 'component/Links';
import DTOLinks from 'Utils/LinksDTO';

const mock: DTOLinks = {
  href: '/test',
  text: 'Prueba',
};

describe('Test component links', function () {
  it('should render without throwing an error | not class', () => {
    const { container } = render(<Links href={mock.href} text={mock.text} />);
    expect(container.firstChild).toBeVisible();
  });

  it('Check if it puts the class', () => {
    mock.className = 'test';
    const { container } = render(
      <Links className={mock.className} href={mock.href} text={mock.text} />
    );
    expect(container.firstChild).toHaveClass(mock.className);
  });

  it('Check if it puts href', () => {
    const { container } = render(
      <Links className={mock.className} href={mock.href} text={mock.text} />
    );
    expect(container.firstChild).toHaveAttribute('href', mock.href);
  });
  it('Check if it puts the text', () => {
    const { container } = render(
      <Links className={mock.className} href={mock.href} text={mock.text} />
    );
    expect(container.firstChild?.textContent).toBe(mock.text);
  });
});
