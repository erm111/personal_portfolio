import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Contact from '../components/sections/Contact';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

jest.mock('@emailjs/browser');
jest.mock('react-hot-toast');

describe('Contact Form Tests', () => {
  const mockForm = {
    reset: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
    jest.spyOn(React, 'useRef').mockReturnValue({ current: mockForm });
  });

  test('displays loading toast while sending message', async () => {
    render(<Contact />);
    
    // Fill out the form
    await userEvent.type(screen.getByLabelText(/name/i), 'John Doe');
    await userEvent.type(screen.getByLabelText(/email/i), 'john@example.com');
    await userEvent.type(screen.getByLabelText(/message/i), 'Test message');

    // Submit the form
    fireEvent.submit(screen.getByRole('button', { name: /send message/i }));

    // Verify loading toast is shown
    expect(toast.loading).toHaveBeenCalledWith('Sending message...');
  });

  test('displays success toast when email is sent successfully', async () => {
    (emailjs.sendForm as jest.Mock).mockResolvedValueOnce({ text: 'Success' });
    
    render(<Contact />);
    
    // Fill and submit form
    await userEvent.type(screen.getByLabelText(/name/i), 'John Doe');
    await userEvent.type(screen.getByLabelText(/email/i), 'john@example.com');
    await userEvent.type(screen.getByLabelText(/message/i), 'Test message');
    fireEvent.submit(screen.getByRole('button', { name: /send message/i }));

    await waitFor(() => {
      expect(toast.success).toHaveBeenCalledWith(
        'Message sent successfully!',
        expect.objectContaining({
          duration: 4000,
          position: 'top-center',
          style: expect.objectContaining({
            background: '#4CAF50',
            color: '#fff'
          })
        })
      );
    });
  });

  test('displays error toast when email fails to send', async () => {
    (emailjs.sendForm as jest.Mock).mockRejectedValueOnce(new Error('Failed'));
    
    render(<Contact />);
    
    // Submit form without filling it (to test error case)
    fireEvent.submit(screen.getByRole('button', { name: /send message/i }));

    await waitFor(() => {
      expect(toast.error).toHaveBeenCalledWith(
        'Failed to send message. Please try again.',
        expect.objectContaining({
          duration: 4000,
          position: 'top-center',
          style: expect.objectContaining({
            background: '#f44336',
            color: '#fff'
          })
        })
      );
    });
  });

  test('form is reset after successful submission', async () => {
    (emailjs.sendForm as jest.Mock).mockResolvedValueOnce({ text: 'Success' });
    
    render(<Contact />);
    
    // Submit form
    fireEvent.submit(screen.getByRole('button', { name: /send message/i }));

    await waitFor(() => {
      expect(mockForm.reset).toHaveBeenCalled();
    });
  });
});
