import { render } from '@testing-library/react';

import App from './index';

describe('App', () => {
  it('默认', () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
});
