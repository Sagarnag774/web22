
import React, { useState, useMemo } from 'react';
import { Pet } from '../../types';
import { PETS_DATA } from '../../constants';
import PetCard from '../PetCard';
import Modal from '../Modal';

const AdoptPage: React.FC = () => {
  const [pets] = useState<Pet[]>(PETS_DATA);
  const [filters, setFilters] = useState({ breed: 'all', location: 'all', age: 'all' });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPet, setSelectedPet] = useState<Pet | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const filteredPets = useMemo(() => {
    return pets.filter(pet => {
      const breedMatch = filters.breed === 'all' || pet.breed === filters.breed;
      const locationMatch = filters.location === 'all' || pet.location.includes(filters.location);
      const ageMatch = filters.age === 'all' || (filters.age === 'puppy' && pet.age.includes('months')) || (filters.age === 'adult' && !pet.age.includes('months'));
      return breedMatch && locationMatch && ageMatch;
    });
  }, [pets, filters]);
  
  const breeds = useMemo(() => ['all', ...Array.from(new Set(pets.map(p => p.breed)))], [pets]);
  const locations = useMemo(() => ['all', ...Array.from(new Set(pets.map(p => p.location.split(', ')[0])))], [pets]);

  const handleAdoptClick = (pet: Pet) => {
    setSelectedPet(pet);
    setIsModalOpen(true);
    setFormSubmitted(false);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPet(null);
  }

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-teal font-poppins">Find Your New Best Friend</h1>
          <p className="mt-4 text-lg text-gray-600">Browse our available pets and start your adoption journey today.</p>
        </div>

        {/* Filters */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="breed" className="block text-sm font-medium text-gray-700">Breed</label>
            <select id="breed" name="breed" onChange={handleFilterChange} className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-teal focus:border-teal sm:text-sm rounded-md">
              {breeds.map(b => <option key={b} value={b}>{b === 'all' ? 'All Breeds' : b}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
            <select id="location" name="location" onChange={handleFilterChange} className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-teal focus:border-teal sm:text-sm rounded-md">
              {locations.map(l => <option key={l} value={l}>{l === 'all' ? 'All Locations' : l}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age</label>
            <select id="age" name="age" onChange={handleFilterChange} className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-teal focus:border-teal sm:text-sm rounded-md">
              <option value="all">All Ages</option>
              <option value="puppy">Puppy / Kitten (Under 1yr)</option>
              <option value="adult">Adult</option>
            </select>
          </div>
        </div>

        {/* Pet Listings */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPets.length > 0 ? (
            filteredPets.map(pet => <PetCard key={pet.id} pet={pet} onAdopt={handleAdoptClick} />)
          ) : (
            <p className="col-span-full text-center text-gray-500 text-xl">No pets match your criteria. Try adjusting the filters!</p>
          )}
        </div>
      </div>
      
      {/* Adoption Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal} title={`Adopt ${selectedPet?.name || ''}`}>
        {formSubmitted ? (
          <div className="text-center p-8">
            <h3 className="text-2xl font-bold text-teal">Thank You!</h3>
            <p className="mt-4 text-gray-600">Your adoption request for {selectedPet?.name} has been received. Our team will contact you within 24-48 hours to discuss the next steps. We're so excited for you!</p>
            <button onClick={closeModal} className="mt-6 bg-teal text-white font-bold py-2 px-6 rounded-full hover:bg-dark-teal transition-colors">Close</button>
          </div>
        ) : (
          <form onSubmit={handleFormSubmit}>
            <p className="mb-4">You're taking the first step to give <span className="font-bold text-teal">{selectedPet?.name}</span> a forever home! Please fill out your details below.</p>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input type="text" id="name" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal focus:border-teal"/>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal focus:border-teal"/>
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                <input type="tel" id="phone" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal focus:border-teal"/>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Short Message (Why do you want to adopt?)</label>
                <textarea id="message" rows={3} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal focus:border-teal"></textarea>
              </div>
              <button type="submit" className="w-full bg-soft-orange text-gray-800 font-bold py-3 px-4 rounded-full hover:bg-opacity-90 transition-colors duration-300">Submit Adoption Request</button>
            </div>
          </form>
        )}
      </Modal>
    </div>
  );
};

export default AdoptPage;
