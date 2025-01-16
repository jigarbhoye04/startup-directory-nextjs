
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

interface FormValues {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    name: '',
    email: '',
    message: '',
  });
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setIsSuccess(false);
    setErrorMessage('');

    try {
      const response = await emailjs.sendForm(
        'service_at64jza', 
        'template_lmrtjll',
        e.currentTarget as HTMLFormElement,
        'XX6tCOJTqYtM1mIQ6'
      );

      if (response.status === 200) {
        setIsSuccess(true);
        setFormValues({ name: '', email: '', message: '' }); // Clear form fields
      } else {
        setErrorMessage('Failed to send email.');
      }
    } catch (error) {
      console.error('Email sending error:', error);
      setErrorMessage('An error occurred while sending the email.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="container mx-auto px-4 py-8 max-w-md">
      <h2 className="text-2xl font-bold text-center mb-8">Send Email</h2>
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-sm font-medium mb-2">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            required
            value={formValues.name}
            onChange={handleChange}
            className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm font-medium mb-2">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            required
            value={formValues.email}
            onChange={handleChange}
            className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="message" className="text-sm font-medium mb-2">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            required
            rows={4}
            value={formValues.message}
            onChange={handleChange}
            className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          />
        </div>
        <button
          type="submit"
          disabled={isSending}
          className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition"
        >
          {isSending ? 'Sending...' : 'Send Email'}
        </button>
      </div>
      {isSuccess && (
        <div>
          <p className="text-green-500 mt-2">Message sent successfully!</p>
          <p className="text-green-500 mt-2">Thank You!</p>
        </div>
      )}
        {errorMessage && (
        <p className="text-red-500 mt-2">{errorMessage}</p>
      )}
    </form>
  );
};

export default ContactForm;