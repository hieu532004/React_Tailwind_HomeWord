import React from 'react';
import { Heart } from 'lucide-react';

interface VideoListProps {
    title: string;
    imgScr: string;
    url: string;
    description: string;
}

export const VideoList: React.FC<VideoListProps> = ({ title, imgScr, url, description }) => {
    return (
        <div className='rounded-lg bg-white p-5 flex items-center'>
            <a href={url}>
                <img src={imgScr} alt={title} className='w-40 rounded-lg' />
            </a>
            <div className='flex items-center justify-between w-[50%]'>
                <div className='ml-2'>
                    <a href={url} className='font-bold hover:underline'>
                        <h2>{title}</h2>
                    </a>
                    <p>{description}</p>
                </div>
                <Heart />
            </div>
        </div>
    );
};