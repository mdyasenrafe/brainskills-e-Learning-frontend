import { render, screen, cleanup } from '@testing-library/react'
import AddEvent from './../AdminDashboard/AddEvent';

test('should render classes component', () => {
    render(<AddEvent />);
    const cartElement = screen.getByTestId('event');
    expect(cartElement).toBeInTheDocument();
})