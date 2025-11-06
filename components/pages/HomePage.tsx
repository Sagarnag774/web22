
import React, { useState, useEffect } from 'react';
import { Page } from '../../App';
import useCounter from '../../hooks/useCounter';
import { TESTIMONIALS_DATA } from '../../constants';
import { Testimonial } from '../../types';

const StatCounter: React.FC<{ end: number; label: string }> = ({ end, label }) => {
    const { count, ref } = useCounter(end, 2000);
    return (
        <div className="text-center">
            <span ref={ref} className="text-4xl md:text-5xl font-bold text-teal">{count.toLocaleString()}+</span>
            <p className="text-gray-500 mt-2">{label}</p>
        </div>
    );
};

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
    <div className="bg-white p-8 rounded-lg shadow-lg text-center min-w-full">
        <img src={testimonial.image} alt={testimonial.name} className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-pastel-green" />
        <p className="text-gray-600 italic">"{testimonial.story}"</p>
        <h4 className="font-bold text-teal mt-4">- {testimonial.name}</h4>
    </div>
);

const HomePage: React.FC<{ setCurrentPage: (page: Page) => void }> = ({ setCurrentPage }) => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="animate-fade-in">
            {/* Hero Section */}
            <section className="relative h-[60vh] md:h-[80vh] bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/seed/hero/1920/1080')" }}>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white p-4">
                    <h1 className="text-4xl md:text-6xl font-extrabold font-poppins drop-shadow-lg">Every Pet Deserves a Home.</h1>
                    <p className="mt-4 text-lg md:text-xl max-w-2xl">Join us in our mission to rescue, foster, and find loving forever homes for animals in need.</p>
                    <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                        <button onClick={() => setCurrentPage('Adopt')} className="bg-soft-orange text-gray-800 font-bold py-3 px-8 rounded-full text-lg hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300 shadow-lg">Adopt Now</button>
                        <button onClick={() => setCurrentPage('Volunteer')} className="bg-teal text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-dark-teal transform hover:scale-105 transition-all duration-300 shadow-lg">Join as Volunteer</button>
                    </div>
                </div>
            </section>

            {/* About Us Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-teal font-poppins">About PetResQ</h2>
                        <p className="mt-4 text-gray-600 text-lg">Our mission is to connect stray, abandoned, and surrendered animals with loving, permanent families. We believe in kindness, empathy, and the power of community to create a better world for pets.</p>
                        <p className="mt-4 text-gray-600">Through our network of dedicated volunteers and foster homes, we provide medical care, rehabilitation, and a safe haven for animals until they find their forever home.</p>
                    </div>
                    <div className="rounded-lg overflow-hidden shadow-xl">
                        <img src="https://picsum.photos/seed/about/600/400" alt="Happy dog with owner" className="w-full h-full object-cover" />
                    </div>
                </div>
            </section>

            {/* Highlights Section */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <StatCounter end={1250} label="Pets Adopted" />
                    <StatCounter end={320} label="Active Volunteers" />
                    <StatCounter end={85000} label="Donations Raised ($)" />
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 bg-pastel-green">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-teal font-poppins mb-12">Success Stories</h2>
                    <div className="relative overflow-hidden">
                       <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}>
                            {TESTIMONIALS_DATA.map((testimonial) => (
                                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
