import { screen, render } from '@testing-library/react';
import useEvent from '@testing-library/user-event';
import Button from 'component/Button';
import { DTOButton } from 'Utils/ButtonDTO';
import { typesButton } from 'Utils/Data';

const mock: DTOButton = {
  children: 'test',
  onClick: jest.fn(),
  type: typesButton.submit,
  disable: true,
};

describe('Test component button', function () {
  it('Check if it puts the children | string', () => {
    const { container } = render(
      <Button className={mock.className} onClick={mock.onClick}>
        {mock.children}
      </Button>
    );
    expect(container.firstChild?.textContent).toBe(mock.children);
  });

  it('Check if it puts the children | Element', () => {
    const element = <p>{mock.children}</p>;
    const { container } = render(
      <Button className={mock.className} onClick={mock.onClick}>
        {element}
      </Button>
    );
    expect(container.firstChild?.textContent).toBe(mock.children);
  });

  it('should render without throwing an error | not class', () => {
    render(
      <Button className={mock.className} onClick={mock.onClick}>
        {mock.children}
      </Button>
    );
    expect(screen.getByText(mock.children)).toBeVisible();
  });

  it('calls onClick prop when clicked', () => {
    render(
      <Button className={mock.className} onClick={mock.onClick}>
        {mock.children}
      </Button>
    );
    useEvent.click(screen.getByText(mock.children));
    expect(mock.onClick).toHaveBeenCalledTimes(1);
  });

  it('Check if it puts the class', () => {
    mock.className = 'test;';
    const { container } = render(
      <Button className={mock.className} onClick={mock.onClick}>
        {mock.children}
      </Button>
    );
    expect(container.firstChild).toHaveClass(mock.className);
  });
});
