import React from 'react';
// import BrandSectionOne from '../SliderElements/BrandSlider/BrandSectionOne';
// import HeroOne from './HeroOne';
import NavigationSliderArea from '../SliderElements/NavigationSlider/NavigationSliderArea';
import FaqArea from '../faq/FaqArea';
import FindMusicianArea from './FindMusicianArea';
import TextScrollArea from '../SliderElements/TextScrollSlider/TextScrollArea';
import PopularAreaOne from '../SliderElements/PopularSlider/PopularAreaOne';
import WorkArea from './WorkArea';
import TrendingareaOne from './TrendingareaOne';
import FunctionBandsSectionOne from './FunctionBandsSectionOne';
import TestimonialSliderOne from '../SliderElements/TestimonialSlider/TestimonialSliderOne';
import LatestNewsOne from './LatestNewsOne';
import PartnerAreaSliderOne from '../SliderElements/PartnerAreaSlider/PartnerAreaSliderOne';
import CtaArea from './CtaArea';
import SpecialEventSliderOne from '../SliderElements/SpecialEventSlider/SpecialEventSliderOne';

const HomeMainArea = () => {
    return (
        <>
            {/* <BrandSectionOne /> */}
            {/* <HeroOne /> */}
            <FindMusicianArea />
            <NavigationSliderArea />
            <TextScrollArea />
            <TrendingareaOne />
            {/* <PopularAreaOne /> */}
            <WorkArea />
            <FunctionBandsSectionOne />
            {/* <SpecialEventSliderOne /> */}
            {/* <TestimonialSliderOne /> */}
            {/* <LatestNewsOne /> */}
            <FaqArea />
            <PartnerAreaSliderOne />
            <CtaArea />
        </>
    );
};

export default HomeMainArea;