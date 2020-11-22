import { render } from '@testing-library/react';
import IndexPage from 'pages/index';

describe('Test Index pages', function () {
  it('should render without throwing an error', () => {
    const { getByText } = render(<IndexPage />);
    const h1Node = getByText('Hola mundo');
    expect(h1Node).toBeVisible();
  });
});
