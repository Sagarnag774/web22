
import { Pet, Testimonial, BlogPost } from './types';

export const PETS_DATA: Pet[] = [
  { id: 1, name: 'Buddy', age: '2 years', breed: 'Golden Retriever', location: 'New York, NY', image: 'https://picsum.photos/seed/buddy/400/300' },
  { id: 2, name: 'Lucy', age: '1 year', breed: 'Labrador', location: 'Los Angeles, CA', image: 'https://picsum.photos/seed/lucy/400/300' },
  { id: 3, name: 'Max', age: '3 years', breed: 'German Shepherd', location: 'Chicago, IL', image: 'https://picsum.photos/seed/max/400/300' },
  { id: 4, name: 'Daisy', age: '6 months', breed: 'Beagle', location: 'Houston, TX', image: 'https://picsum.photos/seed/daisy/400/300' },
  { id: 5, name: 'Charlie', age: '5 years', breed: 'Poodle', location: 'Phoenix, AZ', image: 'https://picsum.photos/seed/charlie/400/300' },
  { id: 6, name: 'Sadie', age: '2 years', breed: 'Bulldog', location: 'New York, NY', image: 'https://picsum.photos/seed/sadie/400/300' },
  { id: 7, name: 'Milo', age: '4 years', breed: 'Golden Retriever', location: 'Miami, FL', image: 'https://picsum.photos/seed/milo/400/300' },
  { id: 8, name: 'Zoe', age: '1 year', breed: 'Labrador', location: 'Seattle, WA', image: 'https://picsum.photos/seed/zoe/400/300' },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  { id: 1, name: 'The Smith Family', story: 'Adopting Max was the best decision we ever made. He brought so much joy into our home. The process with PetResQ was seamless!', image: 'https://picsum.photos/seed/smith/100/100' },
  { id: 2, name: 'Jane Doe', story: 'I was looking for a companion, and I found my best friend, Lucy, through PetResQ. The volunteers are so dedicated and helpful.', image: 'https://picsum.photos/seed/jane/100/100' },
  { id: 3, name: 'Mark Johnson', story: 'Fostering with PetResQ has been an incredibly rewarding experience. Seeing these animals find their forever homes is priceless.', image: 'https://picsum.photos/seed/mark/100/100' },
];

export const BLOG_POSTS_DATA: BlogPost[] = [
  { id: 1, title: 'How to Rescue a Stray Dog Safely', image: 'https://picsum.photos/seed/blog1/400/250', excerpt: 'Discover the essential steps to safely approach and rescue a stray dog, ensuring both your and the animal\'s well-being.', fullContent: 'When you encounter a stray dog, it\'s crucial to approach with caution. Move slowly, speak in a calm voice, and avoid direct eye contact, which can be seen as a threat. Offer food and water if available. If the dog is friendly, try to check for a collar or tags. Contact your local animal control or a rescue organization like PetResQ immediately. Do not attempt to handle an injured or aggressive animal yourself.' },
  { id: 2, title: 'Basic Pet Vaccinations Guide', image: 'https://picsum.photos/seed/blog2/400/250', excerpt: 'A simple guide to the core vaccinations your new pet needs to stay healthy and protected from common diseases.', fullContent: 'Core vaccines are essential for all pets. For dogs, this includes rabies, distemper, parvovirus, and adenovirus. For cats, core vaccines protect against rabies, feline distemper, herpesvirus, and calicivirus. Your veterinarian can recommend a vaccination schedule based on your pet\'s age, lifestyle, and location. Keeping vaccinations up-to-date is a key part of responsible pet ownership.' },
  { id: 3, title: 'Why Adoption Beats Buying', image: 'https://picsum.photos/seed/blog3/400/250', excerpt: 'Learn about the wonderful benefits of adopting a pet from a shelter versus buying from a breeder or pet store.', fullContent: 'Adopting a pet saves a life. Shelters are full of loving animals waiting for a second chance. When you adopt, you not only give a deserving animal a home but also free up shelter resources for another animal in need. Adopted pets are often already house-trained and socialized. Plus, adoption fees are much lower than buying from a breeder and typically include vaccinations, spaying/neutering, and microchipping.' },
];
