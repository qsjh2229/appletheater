import { AiFillStar } from "react-icons/ai";
import React, { useState, useEffect } from "react";
import styles from "./AboutRev.module.scss";
import { BsFillHandThumbsDownFill } from "react-icons/bs";
import { BsFillHandThumbsUpFill } from "react-icons/bs";

const AboutMap = (props) => {
  const [commentData, setCommentData] = useState([]);
  const [voteData, setVoteData] = useState([]);

  const upHandler = (commentIdx, voteIdx) => {
    const updatedVoteData = [...voteData];
    updatedVoteData[commentIdx][voteIdx].upVotes += 1;
    setVoteData(updatedVoteData);
  };

  const downHandler = (commentIdx, voteIdx) => {
    const updatedVoteData = [...voteData];
    updatedVoteData[commentIdx][voteIdx].downVotes += 1;
    setVoteData(updatedVoteData);
  };

  useEffect(() => {
    // props.commenttxt 배열의 길이가 변경될 때, commentData와 voteData를 업데이트합니다.
    const newCommentData = props.commenttxt.map((item) => ({ text: item }));
    const newVoteData = newCommentData.map(() => ([
      { upVotes: 0, downVotes: 0 }
    ]));

    setCommentData(newCommentData);
    setVoteData(newVoteData);
  }, [props.commenttxt]);

  return (
    <>
      {commentData.map((comment, commentIdx) => (
        <div className={styles.tBox} key={commentIdx}>
          <div className={styles.star}>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <div className={styles.desRebox}>
            <span>{comment.text}</span>
          </div>
          <div className={styles.infRebox}>
            <div className={styles.idbox}>
              <span className={styles.date}>20230646</span>{" "}
              <span className={styles.id}>영화과 ㅇ채욱</span>
            </div>
            <div className={styles.reBtn}>
              {comment.text &&
                comment.text.split(' ').map((word, voteIdx) => (
                  <div key={voteIdx}>
                    <BsFillHandThumbsUpFill
                      className='rePBtn'
                      onClick={() => upHandler(commentIdx, voteIdx)}
                    />
                    <span> {voteData[commentIdx][voteIdx].upVotes}</span>
                    <BsFillHandThumbsDownFill
                      className='rePBtn'
                      onClick={() => downHandler(commentIdx, voteIdx)}
                    />
                    <span> {voteData[commentIdx][voteIdx].downVotes}</span>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default AboutMap;

