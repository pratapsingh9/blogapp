import React from 'react';
import { format } from 'date-fns';


export const ArticleCard = ({ image, category, title, author, date }: any) => (
  <div className="mb-8 break-inside-avoid">
    <img src={image} alt={title} className="w-full h-48 object-cover rounded-lg mb-2" />
    <div className="text-sm text-blue-600 uppercase font-semibold mb-1">{category}</div>
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    <div className="flex items-center text-sm text-gray-500">
      <img src={author.avatar} alt={author.name} className="w-6 h-6 rounded-full mr-2" />
      <span>{author.name}</span>
      <span className="mx-2">•</span>
      <span>{format(new Date(date), 'MMMM d, yyyy')}</span>
    </div>
  </div>
);

