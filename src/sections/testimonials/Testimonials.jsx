// "use client"

// import { useRef, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// import { Autoplay } from "swiper/modules";
// import { clientReviews } from "@/constants";

// const Testimonials = () => {
//   const swiperRef = useRef(null);

//   const handleNext = () => {
//     swiperRef.current.swiper.slideNext();
//   };

//   const handlePrev = () => {
//     swiperRef.current.swiper.slidePrev();
//   };

//   return (
//     <section className="c-space my-20" id="testimonials">
//       <div className='mt-28 mb-4'>
//         <p className='sm:text-3xl text-3xl font-semibold text-gray_gradient'>What my client says</p>
//       </div>
//       <Swiper
//         ref={swiperRef}
//         autoplay={{
//           delay: 6000,
//           disableOnInteraction: false,
//         }}
//         modules={[Autoplay]}
//         spaceBetween={30}
//         speed={2000}
//         loop={true}
//         effect="slide"
//         breakpoints={{
//           640: {
//             slidesPerView: 1,
//             spaceBetween: 20,
//           },
//           768: {
//             slidesPerView: 2,
//             spaceBetween: 40,
//           },
//           1024: {
//             slidesPerView: 2,
//             spaceBetween: 50,
//           },
//         }}
//         className="client-container"
//       >
//         {clientReviews.map((item) => (
//           <SwiperSlide key={`review-${item.id}`}>
//             <div className="client-review w-full min-w-[220px]">
//               <div className="flex gap-3 mb-5">
//                 <img
//                   src={item.img}
//                   alt="reviewer"
//                   className="w-12 h-12 rounded-full"
//                 />
//                 <div>
//                   <p className="font-semibold text-white-800">{item.name}</p>
//                   <p className="text-white-500 md:text-base text-sm font-light">
//                     {item.position}
//                   </p>
//                 </div>
//               </div>
//               <p className="text-white-800 font-light">{item.review}</p>
//             </div>
//           </SwiperSlide>
//         ))}
//         <div className="flex items-center justify-center sm:justify-start gap-3 mt-10">
//           <button className="arrow-btn" onClick={handlePrev}>
//             <img src="/assets/left-arrow.png" alt="left arrow" />
//           </button>

//           <button className="arrow-btn" onClick={handleNext}>
//             <img src="/assets/right-arrow.png" alt="right arrow" className="w-4 h-4" />
//           </button>
//         </div>
//       </Swiper>
//     </section>
//   );
// };

// export default Testimonials;
