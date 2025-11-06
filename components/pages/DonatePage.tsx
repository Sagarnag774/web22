
import React, { useState } from 'react';

const DonatePage: React.FC = () => {
    const [submitted, setSubmitted] = useState(false);
    const [amount, setAmount] = useState(25);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="py-20 text-center max-w-2xl mx-auto">
                <h1 className="text-4xl font-extrabold text-teal font-poppins">Thank you for your kindness!</h1>
                <p className="mt-4 text-lg text-gray-600">Your generous donation helps us provide food, shelter, and medical care to animals in need. You are a hero!</p>
                <button onClick={() => setSubmitted(false)} className="mt-8 bg-teal text-white font-bold py-3 px-8 rounded-full hover:bg-dark-teal transition-colors">Make Another Donation</button>
            </div>
        )
    }

  return (
    <div className="bg-pastel-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h1 className="text-4xl font-extrabold text-teal font-poppins">Support Animal Rescue Efforts</h1>
                    <p className="mt-4 text-lg text-gray-700">Your donation, no matter the size, makes a huge difference. It helps us cover essential costs like:</p>
                    <ul className="mt-4 list-disc list-inside space-y-2 text-gray-700">
                        <li>Veterinary care and vaccinations</li>
                        <li>Nutritious food and warm shelter</li>
                        <li>Spay/neuter programs to reduce overpopulation</li>
                        <li>Rescue operations and transportation</li>
                    </ul>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-2xl">
                    <form onSubmit={handleSubmit} className="space-y-6">
                         <div>
                            <label className="block text-sm font-medium text-gray-700">Choose an amount</label>
                            <div className="mt-2 grid grid-cols-3 gap-3">
                                {[10, 25, 50, 100, 250, 500].map(val => (
                                    <button type="button" key={val} onClick={() => setAmount(val)} className={`px-4 py-2 text-sm font-medium border rounded-md transition-colors ${amount === val ? 'bg-teal text-white border-teal' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'}`}>
                                        ${val}
                                    </button>
                                ))}
                            </div>
                         </div>
                        <div>
                            <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Or enter a custom amount</label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <span className="text-gray-500 sm:text-sm">$</span>
                                </div>
                                <input type="number" name="amount" id="amount" value={amount} onChange={e => setAmount(Number(e.target.value))} className="focus:ring-teal focus:border-teal block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md" placeholder="0.00" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                            <input type="text" id="name" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal focus:border-teal"/>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input type="email" id="email" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal focus:border-teal"/>
                        </div>
                        <button type="submit" className="w-full bg-soft-orange text-gray-800 font-bold py-3 px-4 rounded-full hover:bg-opacity-90 transition-colors duration-300 text-lg">Donate Now</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  );
};

export default DonatePage;
