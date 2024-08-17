import React from 'react';

export interface CarouselIndicatorProps {
    activeIndex: number;
    length: number;
    maxIndicatorVisible?: number;
    onSetActiveIndex: (index: number) => void;
    children?: React.ReactNode; 
}

function CarouselIndicator({ activeIndex, length, maxIndicatorVisible = 5, onSetActiveIndex }: CarouselIndicatorProps) {
    const maxIndicator = length > maxIndicatorVisible ? maxIndicatorVisible : length;

    return (
        <div className="carousel-indicator">
            {Array.from(Array(maxIndicator), (_, index) => (
                <div
                    key={index}
                    className={`carousel-indicator-dots ${activeIndex === index ? 'w-4 opacity-100' : 'w-2 opacity-50'}`}
                    onClick={() => onSetActiveIndex(index)}
                />
            ))}
        </div>
    );
}

export default CarouselIndicator;
