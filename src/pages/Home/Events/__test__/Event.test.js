import { render, screen } from '@testing-library/react';
import Events from '../Events';

test('should render the correct amount of incomplete tasks', () => {
    render(<Events title="event" />);
    const eventElement = screen.getByText(/event/i);
    expect(eventElement).toBeInTheDocument();
});
