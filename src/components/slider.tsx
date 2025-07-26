import React, { useEffect, useRef, useState } from 'react';
import { Swiper as SwiperClass } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { IData } from '../constants';
import styled from 'styled-components';
import { NavigationOptions } from 'swiper/types';
import { NavButtonInSlider } from '../styles/styled-compontents';
import 'swiper/css';
import 'swiper/css/navigation';

const StyledSwiper = styled(Swiper)`
    width: 100%;
    box-sizing: border-box;
    padding: 0 20px;
    @media (max-width: 768px) {
        padding: 0
    }
`;

interface SliderProps {
  index: number;
  data: IData[];
  isMobile: boolean;
}
export const Slider: React.FC<SliderProps> = ({index, data, isMobile}) => {
    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);

    const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(null);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);
    const handleSlideChange = (swiper: SwiperClass) => {
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
    };
    useEffect(() => {
        if (!swiperInstance) return;
        setIsBeginning(swiperInstance.isBeginning);
        setIsEnd(swiperInstance.isEnd);
        swiperInstance.slideTo(0);
    }, [index, swiperInstance]);
    useEffect(() => {
        if (
            swiperInstance &&
            prevRef.current &&
            nextRef.current &&
            swiperInstance.params.navigation
        ) {
            const navigation = swiperInstance.params.navigation as NavigationOptions;

            navigation.prevEl = prevRef.current;
            navigation.nextEl = nextRef.current;

            swiperInstance.navigation.destroy();
            swiperInstance.navigation.init();
            swiperInstance.navigation.update();
        }
        }, [swiperInstance]);

    return (
        <div key={index} style={{
                position: 'relative',
                display: 'flex',
                margin: !isMobile ? '0 20px' : '',
                padding: '15px',
            }}
        >
            <StyledSwiper
                onSwiper={setSwiperInstance}
                onSlideChange={handleSlideChange}
                modules={[Navigation]}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                style={{
                    margin: !isMobile ? '0 50px' : '70px 0 0 0',
                    height: !isMobile ? '100px' : '250px'
                }}
                freeMode={false}
                centeredSlides={false}
                slideToClickedSlide={true} 
                spaceBetween={50}
                slidesPerView='auto'
                loop={false}
                breakpoints={{
                    1200: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                    },
                    768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                    },
                    0: {
                    spaceBetween: 10,
                    },
                }}
            >
            {data[index].events.map((item) => (
                <SwiperSlide key={data[index].id} style={{ maxWidth: !isMobile ? '300px' : '250px' }}>
                {({ isVisible, isActive }) => (
                    <div
                    style={{
                        opacity: isMobile ? isActive ? 1 : isVisible ? 0.3 : 0.1 : '',
                        transition: 'opacity 0.3s ease',
                    }}
                    >
                    <h3
                        style={{
                        color: '#3877EE',
                        margin: '10px 0',
                        fontSize: !isMobile ? '' : '26px',
                        }}
                    >
                        {item.year}
                    </h3>
                    <div
                        style={{
                        color: '#42567A',
                        fontSize: !isMobile ? '' : '22px',
                        }}
                    >
                        {item.text}
                    </div>
                    </div>
                )}
                </SwiperSlide>

            ))}
            </StyledSwiper>
            {!isMobile ? (
                <>
                <NavButtonInSlider
                className='nav-btn'
                ref={prevRef}
                disabled={isBeginning}
                style={{
                    left: 0,
                    opacity: isBeginning ? 0 : 1,
                }}
                >
                    <span style={{borderColor: '#3877EE'}} className="arrow left"></span>
                </NavButtonInSlider>
                <NavButtonInSlider
                    ref={nextRef}
                    className='nav-btn'
                    disabled = {isEnd}
                    style={{
                        right: 0,
                        opacity: isEnd ? 0 : 1,
                    }}
                >
                    <span style={{borderColor: '#3877EE'}} className="arrow right"></span>
                </NavButtonInSlider>
                </>
            ) : null}
        </div>
    )
}
