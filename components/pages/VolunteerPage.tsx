
import React, { useState } from 'react';

const VolunteerPage: React.FC = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="py-20 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold text-teal font-poppins">Join Our Community of Heroes</h1>
                    <p className="mt-4 text-lg text-gray-600">Volunteers are the heart of PetResQ. By giving your time and talent, you help us save more lives and bring more joy to families.</p>
                </div>

                {submitted ? (
                    <div className="mt-12 bg-white p-12 rounded-lg shadow-lg text-center">
                        <h2 className="text-3xl font-bold text-teal">Thank you for joining PetResQ Volunteers!</h2>
                        <p className="mt-4 text-gray-700">We've received your application and are thrilled to have you on board. Our volunteer coordinator will be in touch with you shortly with next steps. Welcome to the team!</p>
                        <button onClick={() => setSubmitted(false)} className="mt-6 bg-soft-orange text-gray-800 font-bold py-2 px-6 rounded-full hover:bg-opacity-90 transition-colors">Submit Another Application</button>
                    </div>
                ) : (
                    <div className="mt-12 bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Volunteer Registration</h2>
                        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                                <input type="text" id="name" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal focus:border-teal"/>
                            </div>
                            <div>
                                <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age</label>
                                <input type="number" id="age" min="18" required placeholder="Must be 18 or older" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal focus:border-teal"/>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                                <input type="email" id="email" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal focus:border-teal"/>
                            </div>
                            <div>
                                <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                                <input type="text" id="city" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal focus:border-teal"/>
                            </div>
                            <div className="md:col-span-2">
                                <label htmlFor="role" className="block text-sm font-medium text-gray-700">Preferred Role</label>
                                <select id="role" name="role" required className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-teal focus:border-teal sm:text-sm rounded-md">
                                    <option>Select a role</option>
                                    <option>Animal Care & Socialization</option>
                                    <option>Foster Home Provider</option>
                                    <option>Rescue Transport</option>
                                    <option>Adoption Events</option>
                                    <option>Administrative Support</option>
                                </select>
                            </div>
                            <div className="md:col-span-2">
                                <button type="submit" className="w-full bg-teal text-white font-bold py-3 px-4 rounded-full hover:bg-dark-teal transition-colors duration-300 text-lg">Become a Volunteer</button>
                            </div>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

export default VolunteerPage;
