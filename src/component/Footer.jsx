import React from 'react';
import styles from './Footer.module.scss'
import { FaSistrix } from "react-icons/fa";
import { BsApple } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";



const Footer = () => {
  return (
    <footer>
      <section >
        <div className={styles.footerTop}>
          <div className={styles.topLft}>
            <ul>
              <li><span>회사소개</span></li>
              <li><span>인재채용</span></li>
              <li><span>사회공헌</span></li>
              <li><span>사업문의</span></li>
              <li><span>이용약관</span></li>
              <li ><span><strong>개인정보 처리 방침</strong></span></li>
              <li ><span>윤리경영</span></li>
            </ul>
          </div>
          <div className={styles.topRit}>
            <button> <FaSistrix className={styles.sIcon}/>영화관 찾기 </button>
          </div>
        </div>
        <div className={styles.footerBtm}>
          <div className={styles.left}>
            <BsApple className={styles.footericon}></BsApple>
          </div>
          <div className={styles.middle}>
            <span>서울특별시 성동구 왕십리로 50, 6층 (성수동1가, 애플 스퀘어) ARS 0544-1070</span>
            <span>대표자명 팀쿠김 · 개인정보보호책임자 스잡스 · 사업자등록번호 211-86-54486478 · 통신판매업신고번호 2023-서울성동-0115</span>
            <span>COPYRIGHT © Apple, Inc. All rights reserved</span>
          </div>
          <div className={styles.right}>
            <BsInstagram className={styles.icon}></BsInstagram>
            <BsYoutube className={styles.icon}></BsYoutube>
            <BsFacebook className={styles.icon}></BsFacebook>
            <BsTwitter className={styles.icon}></BsTwitter>
          </div>
        </div>
      </section>
      
    </footer>
  );
};

export default Footer;