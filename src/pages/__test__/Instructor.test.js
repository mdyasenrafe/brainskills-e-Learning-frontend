import { render, screen, cleanup } from '@testing-library/react'
import Instructor from './../Home/Instructor/Instructor';

test('should render classes component', () => {
    render(<Instructor />);
    const cartElement = screen.getByTestId('instructor');
    expect(cartElement).toBeInTheDocument();
})