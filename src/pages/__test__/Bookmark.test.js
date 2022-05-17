import { render, screen, cleanup } from '@testing-library/react'
import Bookmark from './../Bookmark/Bookmark';

test('should render classes component', () => {
    render(<Bookmark />);
    const cartElement = screen.getByTestId('bookmark');
    expect(cartElement).toBeInTheDocument();
})