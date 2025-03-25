import { render } from '@testing-library/react';
import Greeting from './Greeting';

describe('Greeting', () => {
  it('should render greeting message', () => {
    const { getByText } = render(<Greeting name="John" />);
    expect(getByText('Hello, John!')).toBeInTheDocument();
  });
});
