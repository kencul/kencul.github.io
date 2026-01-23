"use client";
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import Card from "@/components/ui/card";
import { twMerge } from 'tailwind-merge';

export default function LiteVideo({className, id, title }) {
    const baseStyles = "w-full mx-auto p-0 overflow-hidden aspect-video";

    return (
    <Card className={twMerge(baseStyles, className)}>
        <LiteYouTubeEmbed 
        id={id} 
        title={title}
        poster="maxresdefault"
        webp={true}
        />
    </Card>
    );
}