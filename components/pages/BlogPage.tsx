
import React, { useState } from 'react';
import { BlogPost } from '../../types';
import { BLOG_POSTS_DATA } from '../../constants';

const BlogCard: React.FC<{ post: BlogPost }> = ({ post }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-teal font-poppins">{post.title}</h3>
                <p className="mt-2 text-gray-600 flex-grow">
                    {isExpanded ? post.fullContent : post.excerpt}
                </p>
                <button 
                    onClick={() => setIsExpanded(!isExpanded)} 
                    className="mt-4 text-soft-orange font-bold hover:underline self-start"
                >
                    {isExpanded ? 'Read Less' : 'Read More'}
                </button>
            </div>
        </div>
    );
};

const BlogPage: React.FC = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-teal font-poppins">Learn, Care, and Share</h1>
          <p className="mt-4 text-lg text-gray-600">Your resource for pet care tips, adoption stories, and animal welfare awareness.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS_DATA.map(post => (
                <BlogCard key={post.id} post={post} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
