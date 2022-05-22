import { Carousel } from "react-bootstrap";
import BannerImg1 from "../assets/images/welcome_banner.webp";
import BannerImg2 from "../assets/images/banner-2.png";

const bannerImgs = [BannerImg1, BannerImg2];

const Banner = () => {
  return (
    <div className="banner p-0">
      <Carousel fade>
        {bannerImgs.map((item, index) => {
          return (
            <Carousel.Item key={index}>
              <img className="d-block w-100" src={item} alt="First slide" />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};
export default Banner;
