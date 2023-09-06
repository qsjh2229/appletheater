import React, { useState } from "react"
import styles from "./AboutRev.module.scss"
import AboutMap from "./AboutMap"

const AboutRev = () => {
   const [comment, setComment] = useState("")
   const [commenttxt, setCommenttxt] = useState([])
   const onClickhandelr=()=>{
      setCommenttxt((prevCommenttxt) => [...prevCommenttxt, comment]);
      console.log(commenttxt)
      setComment(""); // 입력 필드 초기화

  }
  
   const oncChangeHncler = (e) => {
      setComment(e.target.value)
   }
   const onSubmit = (e) => {
      e.preventDefault()
   }
   console.log(comment)


   return (
      <div className={styles.revbox}>
         <form className={styles.inputbox} onSubmit={onSubmit}>
            <input className={styles.input} type='text' value={comment} onChange={oncChangeHncler} />
            <button onClick={onClickhandelr}>등록하기</button>
         </form>
         <div className={styles.retxtbox}>
            <AboutMap commenttxt={commenttxt} setCommenttxt={setCommenttxt} > </AboutMap>
         </div>
      </div>
   )
}

export default AboutRev
