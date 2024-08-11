import React, { useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import CarouselItem from './CarouselItem';
import CarouselIndicater from './CarouselIndicater';

export interface CarouseLProps {
    width?: number;
    height?: number;
    items: React.ReactNode[];
}


function Carousel({width, height, items} : CarouseLProps ) {

    //State Variables
    const [activeIndex , SetActiveIndex] = useState<number>(0);

    // Function to handle clicking the previous button
    function handlePrevItemBtn() {
        SetActiveIndex((prev) => {
            return prev -1 >=0? prev-1 : prev;
        })
    }

    //Function to handle Clicking the Next Button

    function handleNextItemBtn(){
        SetActiveIndex ((prev) => {
            return prev + 1 < items.length ? prev + 1 : prev;
        })
    }


  return (
    <div className='carousel-container mt-10'>

        {/* Previous Button*/}
        {activeIndex > 0 && (
            <button className='carousel-btn-switch-card-left carousel-btn-switch-card'
            onClick={handlePrevItemBtn}
            ><IoIosArrowBack /></button>
        )}

        {/* Carousel */}

        {items?.map((item, index) => (
            <CarouselItem key={index} index={index} activeIndex={activeIndex}>
                {item}
            </CarouselItem>
        ))}



        {/* Next button */}

        { activeIndex < items.length -1 && (
            <button className='carousel-btn-switch-card-right carousel-btn-switch-card'
            onClick={handleNextItemBtn}
              >
             <IoIosArrowBack 
             style={
                {
                    transform: 'rotate(180deg)',
                }
             }
             />
            </button>
        ) }

        {/* Carousel Indicator */}

        <CarouselIndicater
        activeIndex={activeIndex}
        length={items.length}
        onSetActiveIndex={(activeIndex) => {
            SetActiveIndex(activeIndex);
        }}
        >

        </CarouselIndicater>


    </div>
  )
}

export default Carousel