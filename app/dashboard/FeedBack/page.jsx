import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'John Doe',
      message: 'This platform helped me easily navigate through the insurance options available for my farm. The AI chat assistant made the process so much smoother!',
      image: '/user1.jpg',
    },
    {
      name: 'Jane Smith',
      message: 'I was able to learn more about my rights and secure better insurance coverage for my crops. Highly recommend this platform!',
      image: '/user2.jpg',
    },
    {
      name: 'James Lee',
      message: 'The resources provided were incredibly helpful, and I can now make more informed decisions for my farm’s future.',
      image: '/user3.jpg',
    },
  ];

  return (
    <div className="mt-10 text-center">
      <h3 className="text-3xl font-bold text-gray-800">What Our Users Say</h3>
      <div className="flex space-x-6 mt-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="p-6 bg-gray-100 rounded-lg shadow-lg flex flex-col items-center"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-20 h-20 rounded-full mb-4"
            />
            <p className="text-lg font-semibold">{testimonial.name}</p>
            <p className="text-sm text-gray-600">{testimonial.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
