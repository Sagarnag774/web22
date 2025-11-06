
import React from 'react';
import { Pet } from '../types';

interface PetCardProps {
  pet: Pet;
  onAdopt: (pet: Pet) => void;
}

const PetCard: React.FC<PetCardProps> = ({ pet, onAdopt }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 flex flex-col">
      <img src={pet.image} alt={pet.name} className="w-full h-48 object-cover" />
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-2xl font-bold text-teal font-poppins">{pet.name}</h3>
        <p className="text-gray-500">{pet.breed}</p>
        <div className="mt-4 flex-grow">
          <p><span className="font-semibold">Age:</span> {pet.age}</p>
          <p><span className="font-semibold">Location:</span> {pet.location}</p>
        </div>
        <button onClick={() => onAdopt(pet)} className="mt-6 w-full bg-soft-orange text-gray-800 font-bold py-2 px-4 rounded-full hover:bg-opacity-90 transition-colors duration-300">
          Adopt Me
        </button>
      </div>
    </div>
  );
};

export default PetCard;
