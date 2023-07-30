import axios from 'axios';
import React,{useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import styles from './User.module.scss'

const User = () => {
    const {id} =useParams()
    const [user,setUser]=useState(null)
    const [lodding,setLoading]=useState(true)
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users/' + id)
        .then(res=>{
            setUser(res.data)
            setLoading(false)
        })
    },[])
const userDetail=lodding ? (<div className={styles.loading} >로딩중...</div>):(
<div className={styles.user}>
    <div className={styles.box}></div>
    <div className={styles.name}>이름: {user.name}</div>
    <div className={styles.email}>메일: {user.email}</div>
    <div className={styles.phone}>핸드폰:  {user.phone}</div>
    <div className={styles.website}>주소: {user.website}</div>
</div>);
    return (
        <div className={styles.container}>
            <h2 className={styles.h2}>User info</h2>
          {
            userDetail
          }
        </div>
    );
};

export default User;