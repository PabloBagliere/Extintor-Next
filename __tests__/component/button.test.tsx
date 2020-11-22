import { fireEvent, screen, render } from '@testing-library/react';
import Button from 'component/Button';

const mock = {
  className: 'clase',
  children: 'test',
  onClick: jest.fn(),
};

describe('Test component button', function () {
  it('Check if it puts the children', () => {
    const { container } = render(
      <Button className={mock.className} onClick={mock.onClick}>
        <div>{mock.children}</div>
      </Button>
    );
    expect(container.firstChild?.textContent).toBe(mock.children);
  });

  it('Check if it puts the class', () => {
    const { container } = render(
      <Button className={mock.className} onClick={mock.onClick}>
        <div>{mock.children}</div>
      </Button>
    );
    expect(container.firstChild).toHaveClass(mock.className);
  });

  it('should render without throwing an error', async () => {
    render(
      <Button className={mock.className} onClick={mock.onClick}>
        <div>{mock.children}</div>
      </Button>
    );
    expect(screen.getByText(mock.children)).toBeVisible();
  });

  it('calls onClick prop when clicked', () => {
    render(
      <Button className={mock.className} onClick={mock.onClick}>
        <div>{mock.children}</div>
      </Button>
    );
    fireEvent.click(screen.getByText(mock.children));
    expect(mock.onClick).toHaveBeenCalledTimes(1);
  });
});
