import React, { useState } from "react";
import Soon from "../Soon"; // Soon 배열 가져오기

import Styles from "./Sooncontent.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Sooncontent = () => {
  let [sooncon, setSooncon] = useState(Soon); // Soon 배열을 초기 상태로 설정
  const settings = {
    dots: false,
    infinite: true,
    speed: 3300,
    slidesToShow: 5,
    slidesToScroll: 1,
    pauseOnFocus: true,
    pauseOnHover: true,
    autoplay: true, //자동시작 (boolean) -default:false
    autoplaySpeed: 2000,
    
   
  };
  return (
    <div className={Styles.soonWrap}>
      <div className={Styles.titleBox}>
        <span className={Styles.titleBoxtxt}>개봉 예정작</span>
      </div>
      <div className={Styles.conBox}>
        <ul className={Styles.conWrap}>
          <Slider {...settings}>
            {sooncon.map((item, idx) => {
              return (
                <li key={idx}>
                  <div>
                    <img src={item.img} alt={item.title} />
                  </div>
                  <span>{item.title}</span>
                </li>
              );
            })}
          </Slider>
        </ul>
      </div>
    </div>
  );
};

export default Sooncontent;
