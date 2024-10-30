"use client"
import Banners from "../Components/Banners"
import ProductsSlider from "../Components/ProductsSlider"
import OffersPage from "../Components/OffersPage"
import MainBanners  from "../Components/MainBanners"
import ProductBox from "../Components/ProductBox"
import MiddleBanners from "../Components/MiddleBanners"
import MainSlider from "../Components/MainSlider"
import { BsArrow90DegDown } from "react-icons/bs";
import Services from "../Components/Services"
import Banner2 from "../Components/Banner2"
import { useEffect } from 'react';
import Popular from "../Components/Popular"
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {

  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: 'top-center'
      })
    } ;
   initAOS();
  },[]);

  return (
   <main className="min-h-screen">
   <Banners/>
    <div className="mt-20 w-[95%] mx-auto flex gap-10 bg-[#151515] rounded-xl " id="discount-section">
      <OffersPage/>
   <ProductsSlider/>
   </div>
   <MainBanners/>
   <ProductBox/>
   <MiddleBanners/>
   <span className="lg:mr-12 mr-4 mt-16 text-md md:text-xl lg:text-2xl font-bold flex ">جدید ترین محصولات <BsArrow90DegDown className="mt-4 text-lg md:text-2xl font-bold mr-2" /></span>
   <div className="mt-10 w-[95%] mx-auto flex gap-10 bg-[#181818] rounded-xl">
    <MainSlider/>
   </div>
    <Popular/>
    <Services/>
   <Banner2/>
   </main>
  );
}
