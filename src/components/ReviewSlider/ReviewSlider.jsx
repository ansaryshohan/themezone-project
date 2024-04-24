import { Component } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay"
import "swiper/css/pagination";
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import reviewImg1 from "../../../public/testimonial1.png"
import reviewImg2 from "../../../public/testimonial2.png"
import reviewImg3 from "../../../public/testimonial3.png"
import SingleReview from "./SingleReview";
import TopHeader from "../topHeader/TopHeader";




class ReviewSlider extends Component {
  render() {
    return (
      <div className="pt-5 mb-5">
      <TopHeader title="client's say" />
        <Swiper
          cssMode={true}
          navigation={true}
          mousewheel={true}
          keyboard={true}
          autoplay={true}
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        >
          <SwiperSlide><SingleReview image={reviewImg1} name="Patti Netta"/></SwiperSlide>
          <SwiperSlide><SingleReview image={reviewImg2} name="Simanto Chata"/></SwiperSlide>
          <SwiperSlide><SingleReview image={reviewImg3} name="Sorkari Lok"/></SwiperSlide>
        </Swiper>
      </div>
    );
  }
}

export default ReviewSlider;
