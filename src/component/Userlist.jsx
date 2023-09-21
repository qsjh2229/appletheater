import React from 'react';
import { Link } from "react-router-dom";
import Styles from './Userlist.module.css'


const Userlist = (props) => {
    return (
        <div>
             {
        props.users.map((user)=>{
            return(
                <div className={Styles.card}key={user.id} >
                    <div className={Styles.cardBody}>
                        <Link className={Styles.link} to={`/users/${user.id}`}> {user.name}</Link>
                   
                    </div>
                </div>
            )

        })
     }
        </div>
    );
};

export default Userlist;