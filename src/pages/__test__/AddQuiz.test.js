import { render, screen, cleanup } from '@testing-library/react'
import AddQuiz from './../AdminDashboard/AddQuiz';

test('should render classes component', () => {
    render(<AddQuiz />);
    const cartElement = screen.getByTestId('quiz');
    expect(cartElement).toBeInTheDocument();
})