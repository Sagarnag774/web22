
import React, { useState } from 'react';

const ContactPage: React.FC = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-teal font-poppins">Get in Touch</h1>
            <p className="mt-4 text-lg text-gray-600">Have questions or want to partner with us? We'd love to hear from you.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gray-50 p-8 rounded-lg">
                {submitted ? (
                    <div className="flex flex-col items-center justify-center h-full text-center">
                         <h2 className="text-3xl font-bold text-teal">Message Sent!</h2>
                        <p className="mt-4 text-gray-700">Thank you for reaching out. We've received your message and will get back to you as soon as possible.</p>
                        <button onClick={() => setSubmitted(false)} className="mt-6 bg-soft-orange text-gray-800 font-bold py-2 px-6 rounded-full hover:bg-opacity-90 transition-colors">Send Another Message</button>
                    </div>
                ) : (
                    <>
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700">Full Name</label>
                                <input type="text" id="contact-name" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal focus:border-teal"/>
                            </div>
                            <div>
                                <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700">Email</label>
                                <input type="email" id="contact-email" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal focus:border-teal"/>
                            </div>
                            <div>
                                <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700">Message</label>
                                <textarea id="contact-message" rows={5} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal focus:border-teal"></textarea>
                            </div>
                            <button type="submit" className="w-full bg-teal text-white font-bold py-3 px-4 rounded-full hover:bg-dark-teal transition-colors duration-300 text-lg">Send Message</button>
                        </form>
                    </>
                )}
            </div>
            <div className="space-y-8">
                <div className="bg-pastel-green p-8 rounded-lg">
                    <h3 className="text-xl font-bold text-teal">Our Shelter</h3>
                    <p className="mt-2 text-gray-700">123 Puppy Lane<br/>HappyTails City, ST 54321</p>
                </div>
                <div className="bg-pastel-green p-8 rounded-lg">
                    <h3 className="text-xl font-bold text-teal">Contact Info</h3>
                    <p className="mt-2 text-gray-700">Email: <a href="mailto:contact@petresq.org" className="text-soft-orange hover:underline">contact@petresq.org</a></p>
                    <p className="mt-1 text-gray-700">Phone: (123) 456-7890</p>
                </div>
                 <div className="rounded-lg overflow-hidden h-64">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.296173003295!2d-73.98782368459379!3d40.75807997932697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6434227%3A0x83f6f6996d5a1caf!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1618335352345!5m2!1sen!2sus" 
                        width="100%" 
                        height="100%" 
                        style={{border:0}} 
                        allowFullScreen={true} 
                        loading="lazy"
                        title="Google Map of Times Square (placeholder)"
                    ></iframe>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
