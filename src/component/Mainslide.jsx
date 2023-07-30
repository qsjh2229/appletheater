import React, { useState } from "react";

import { FaThumbsUp } from "react-icons/fa";
import { FaThumbsDown } from "react-icons/fa";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Styles from "./Mainslide.module.css";
import Slider from "react-slick";

const Mainslide = () => {
  const [slideContents, SetSlideContents] = useState([
    {
      id:1,
      img: require("../image/mainslide/mainslide-flash.jpg"),
     
      alt: "영화 플래시 광고 슬라이드",
      title:'플래시',
      des:'시공간이 붕괴된 세계, 차원이 다른 히어로가 온다! 빛보다 빠른 스피드, 물체 투과, 전기 방출, 자체 회복, 천재적인 두뇌까지 갓벽한 능력을 자랑하지만 존재감은 제로, 저스티스 리그에서 궂은일을 도맡아 하는 히어로 ‘플래시’. 어느 날 자신에게 빛보다 빠른 속도로 달리면 시공간 이동 능력이 있음을 알게 된 그는 ‘브루스 웨인’의 만류를 무시한 채 끔찍한 상처로 얼룩진 과거를 바꾸기 위해 시간을 역행한다. 의도치 않은 장소에 불시착한 ‘플래시’는 멀티버스 세상 속 또 다른 자신과 맞닥뜨리고 메타 휴먼이 흔적도 없이 사라지고 모든 것이 뒤엉킨 세상과 마주하게 된다.',
      run:'114분',
      age: '12세 관람가',
      genre:'액션',
      subImg1: require("../image/mainslide/smallFlash1.jpeg"),
      subImg2: require("../image/mainslide/smallFlash2.jpg"),
      subImg3: require("../image/mainslide/smallFlash3.jpg"),
      subImg4: require("../image/mainslide/smallFlash4.jpg"),
    },
    {
      id:2,
      img: require("../image/mainslide/mainslidebarai.jpg"),
      alt: "영화 바비 광고 슬라이드",
      title:'바비',
      des:"원하는 무엇이든 될 수 있는 '바비랜드'에서 살아가던 '바비'가 현실 세계와 이어진 포털의 균열을 발견하게 되고, 이를 해결하기 위해 '켄'과 예기치 못한 여정을 떠나면서 펼쳐지는 이야기 ",
      run:'114분',
      age: '12세 관람가',
      genre:'드라마',
      subImg1: require("../image/mainslide/smallbabi1.jpg"),
      subImg2: require("../image/mainslide/smallbabi2.jpg"),
      subImg3: require("../image/mainslide/smallbabi3.jpg"),
      subImg4: require("../image/mainslide/smallbabi4.jpg"),
    },
    {
      id:3,
      img: require("../image/mainslide/mainslide-milsoo.jpg"),
      alt: "영화 밀수 광고 슬라이드",
      title:'밀수',
      des:"열길 물속은 알아도 한길 사람 속은 모른다! 평화롭던 바닷가 마을 군천에 화학 공장이 들어서면서 하루아침에 일자리를 잃은 해녀들. 먹고 살기 위한 방법을 찾던 승부사 '춘자'(김혜수)는 바다 속에 던진 물건을 건져 올리기만 하면 큰돈을 벌 수 있다는 밀수의 세계를 알게 되고 해녀들의 리더 '진숙'(염정아)에게 솔깃한 제안을 한다. 위험한 일임을 알면서도 생계를 위해 과감히 결단을 내린 해녀 '진숙'은 전국구 밀수왕 '권 상사'를 만나게 되면서 확 커진 밀수판에 본격적으로 빠지게 된다. ",
      run:'129분',
      age: '15세 관람가',
      genre:'범죄',
      subImg1: require("../image/mainslide/smallmilsoo1.jpg"),
      subImg2: require("../image/mainslide/smallmilsoo2.jpg"),
      subImg3: require("../image/mainslide/smallmilsoo3.jpg"),
      subImg4: require("../image/mainslide/smallmilsoo4.jpg"),
    },
    {
      id:4,
      img: require("../image/mainslide/mainslide-themoon.jpg"),
      
      alt: "영화 더문 광소 슬라이드",
      title:'더문',
      des:"선우를 무사 귀환시키기 위해서 5년 전 나래호 사고의 책임을 지고 산에 묻혀 지내던 전임 센터장 ‘김재국’(설경구)이 다시 합류하지만, 그의 힘만으로는 역부족이다. 선우를 구출할 또 다른 희망인 NASA 유인 달 궤도선 메인 디렉터 ‘윤문영’(김희애)에게 도움을 청해보지만 그마저 쉽지 않다. 재국은 또다시 누군가를 잃지 않기 위해 마지막으로 자신의 모든 것을 걸어 보는데…. 우주에 홀로 고립된 대원과 그의 무사 귀환에 모든 것을 건 남자 살기 위한, 살려내기 위한 고군분투가 시작된다. ",
      run:'129분',
      age: '15세 관람가',
      genre:'SF, 액션, 드라마',
      subImg1: require("../image/mainslide/smallFlash1.jpeg"),
      subImg2: require("../image/mainslide/smallFlash2.jpg"),
      subImg3: require("../image/mainslide/smallFlash3.jpg"),
      subImg4: require("../image/mainslide/smallFlash4.jpg"),
    },
   
    {
      id:5,
      img: require("../image/mainslide/mainslide-arial.jpg"),
      alt: "영화 인어공주 광고 슬라이드",
      title:'인어공주',
      des:" ‘에리얼’은 늘 인간들이 사는 바다 너머 세상으로의 모험을 꿈꾼다. 어느 날, 우연히 바다 위로 올라갔다가 폭풍우 속 가라앉는 배에 탄 인간 ‘에릭 왕자’의 목숨을 구해준다. 갈망하던 꿈과 운명적인 사랑을 이루기 위해 용기를 낸 ‘에리얼’은 사악한 바다 마녀 ‘울슐라’와의 위험한 거래를 통해 다리를 얻게 된다. 드디어 바다를 벗어나 그토록 원하던 인간 세상으로 가게 되지만, 그 선택으로 ‘에리얼’과 아틀란티카 왕국 모두 위험에 처하게 되는데…",
      run:'135분',
      age: '전체 관람가',
      genre:'가족',
      subImg1: require("../image/mainslide/smallfish.png"),
      subImg2: require("../image/mainslide/smallfish1.jpg"),
      subImg3: require("../image/mainslide/smallfish2.jpg"),
      subImg4: require("../image/mainslide/smallfish3.jpg"),
      
    },
    
  ]);
  const setting={
    infinite: true,
    autoplay: true,       // 자동 재생 활성화
  autoplaySpeed: 5000,  // 자동 재생 간격 (3초)
   

    dots: true,
    infinite: true,
    speed: 2000, 
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    slidesToScroll: 1, appendDots: (dots) => (
      <div>
        <ul>{dots}</ul>
      </div>
    ),
    dotsClass: `${Styles.customDots} slick-dots`, // 도트 스타일링 클래스 추가,
  }
  return (
    <div className={Styles.mainslide}>
     
        <ul className={Styles.mainSlideBox}>
        <li className={Styles.mainslidecon}>
        
        <Slider
      {...setting }>
         
         {   slideContents.map((tiem ,i)=>{
          return(
            <div className={Styles.contentsbox} >
            {<img
              className={Styles.mainslideImg}
              src={slideContents[i].img}
              alt="이미지"
            />}
            <div className={Styles.mainInfoBox}>
              
                <span className={Styles.maintitle}>{slideContents[i].title}</span>
                <span className={Styles.maindes}>
                {slideContents[i].des}
                <div className={Styles.btnWrap}>
                    <span className={Styles.run}>{slideContents[i].run}</span>
                    <button className={Styles.sBtn}>예약하기</button>
                    <FaThumbsUp className={Styles.up}></FaThumbsUp>
                    <FaThumbsDown className={Styles.down}></FaThumbsDown>
                </div>
                </span>
               
                <div className={Styles.smallImgWrap}>
                <ul>
                    <li><img src={slideContents[i].subImg1} alt="" /></li>
                    <li><img src={slideContents[i].subImg2} alt="" /></li>
                    <li><img src={slideContents[i].subImg3} alt="" /></li>
                    <li><img src={slideContents[i].subImg4} alt="" /></li>
                  </ul>
                </div>
            </div>
          </div> 
          )
         })}
         
          </Slider>
          </li>
        </ul>
     
    </div>
  );
};

export default Mainslide;
