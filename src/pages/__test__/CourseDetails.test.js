import { render, screen, cleanup } from '@testing-library/react'
import CourseDetails from '../CourseDetails/CourseDetails';

test('should render classes component', () => {
    render(<CourseDetails />);
    const cartElement = screen.getByTestId('courseDetails');
    expect(cartElement).toBeInTheDocument();
})