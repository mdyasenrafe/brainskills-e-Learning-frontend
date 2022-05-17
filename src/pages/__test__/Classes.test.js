import { render, screen, cleanup } from '@testing-library/react'
import Classes from './../Classes/Classes';

test('should render classes component', () => {
    render(<Classes />);
    const cartElement = screen.getByTestId('classes');
    expect(cartElement).toBeInTheDocument();
})