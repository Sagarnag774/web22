
export interface Pet {
  id: number;
  name: string;
  age: string;
  breed: string;
  location: string;
  image: string;
}

export interface Testimonial {
  id: number;
  name: string;
  story: string;
  image: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  fullContent: string;
  image: string;
}

export interface ChatMessage {
    sender: 'user' | 'bot';
    text: string;
}
