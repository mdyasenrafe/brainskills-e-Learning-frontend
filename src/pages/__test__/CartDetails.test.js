import { render, screen, cleanup } from '@testing-library/react'
import CartDetails from '../Cart/CartDetails';

test('should render classes component', () => {
    render(<CartDetails />);
    const cartElement = screen.getByTestId('cart');
    expect(cartElement).toBeInTheDocument();
})
