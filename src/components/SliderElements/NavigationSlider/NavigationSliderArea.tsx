"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import FooterLogo from '../../../../public/assets/img/logo/footer-logo.png';
import FooterDot from '../../../../public/assets/img/header/menu-dot.png';
import Image from 'next/image';
import { imageLoader } from '@/hooks/ImageLoader';
//swiper-slider
import { SwiperSlide, Swiper } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css/bundle';
import OffcanvasArea from '@/components/common/offcanvas-area/OffcanvasArea';
import SearchPopup from '@/components/home-3/SearchPopup';

const NavigationSliderArea = () => {
    const [isOpenInfoSidebar, setIsOpenInfoSidebar] = useState(false)
    const [openSearchPopup, setOpenSearchPopup] = useState(false)
    const handleInfoToggle = () => {
        setIsOpenInfoSidebar(!isOpenInfoSidebar)
    }
    const SerchPopupToggle = () => {
        setOpenSearchPopup(!openSearchPopup)
    }
    return (
        <>
            <div className="ms-navigation-area fix">
                <div className=" ms-navigation-wrap ms-bg-3">
                    <div className="d-none d-xl-block">
                        <div className="ms-nl-wrap ms-bg-5">
                            <div className="">
                                
                            </div>
                            <div className="ms-nl-item">
                                <button className="ms-dot-toggle ms-cp sidebar__toggle">
                                    <Image src={FooterDot} loader={imageLoader} loading='lazy' width={40} height={38}
                                        alt="menu dot" />
                                </button>
                            </div>
                            <div className="ms-nl-item">
                                <div className="ms-nl-search">
                                    {/* <button onClick={SerchPopupToggle} className="ms-search-btn"><i className="flaticon-loupe"></i> Find */}
                                    <button className="ms-search-btn"><i className="flaticon-loupe"></i> Find
                                        Your Favorite Type of DJ</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ms-navigation-slider">
                        <div className="ms-ns-active marquee-slide">
                            <Swiper
                                modules={[Autoplay]}
                                slidesPerView={"auto"}
                                speed={10000}
                                loop={true}
                                autoplay={{
                                    delay: 0
                                }}
                                allowTouchMove={false}
                                effect='slide'
                            >

                                <SwiperSlide>
                                    <div className="ms-ns-slick">
                                        <h3 className="ms-ns-title ms-text-stroke"><Link href="#">Hip-Hop</Link></h3>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="ms-ns-slick">
                                        <h3 className="ms-ns-title ms-text-stroke"><Link href="#">House</Link></h3>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="ms-ns-slick">
                                        <h3 className="ms-ns-title ms-text-stroke"><Link href="#">Arabic</Link></h3>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="ms-ns-slick">
                                        <h3 className="ms-ns-title ms-text-stroke"><Link href="#">Chill Vibe</Link></h3>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="ms-ns-slick">
                                        <h3 className="ms-ns-title ms-text-stroke"><Link href="#">Wedding</Link></h3>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="ms-ns-slick">
                                        <h3 className="ms-ns-title ms-text-stroke"><Link href="#">R & B</Link></h3>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="ms-ns-slick">
                                        <h3 className="ms-ns-title ms-text-stroke"><Link href="#">EDM</Link></h3>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="ms-ns-slick">
                                        <h3 className="ms-ns-title ms-text-stroke"><Link href="#">Trance</Link></h3>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="ms-ns-slick">
                                        <h3 className="ms-ns-title ms-text-stroke"><Link href="#">Party</Link></h3>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="ms-ns-slick">
                                        <h3 className="ms-ns-title ms-text-stroke"><Link href="#">Afro</Link></h3>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="ms-ns-slick">
                                        <h3 className="ms-ns-title ms-text-stroke"><Link href="#">Russian</Link></h3>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="ms-ns-slick">
                                        <h3 className="ms-ns-title ms-text-stroke"><Link href="#">European</Link></h3>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="ms-ns-slick">
                                        <h3 className="ms-ns-title ms-text-stroke"><Link href="#">Pop</Link></h3>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div >
            <OffcanvasArea isOpenInfoSidebar={isOpenInfoSidebar} setIsOpenInfoSidebar={setIsOpenInfoSidebar} />
            <div onClick={() => setIsOpenInfoSidebar(false)}
                className={isOpenInfoSidebar ? "offcanvas__overlay overlay-open" : "offcanvas__overlay"}></div>

            <SearchPopup openSearchPopup={openSearchPopup} setOpenSearchPopup={setOpenSearchPopup} />
            <div onClick={() => setOpenSearchPopup(false)}
                className={openSearchPopup ? "offcanvas__overlay overlay-open" : "offcanvas__overlay"}></div>

        </>
    );
};

export default NavigationSliderArea;