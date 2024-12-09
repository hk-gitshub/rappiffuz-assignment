import React, { useEffect, useState } from "react";
import "./userData.css"
import {signOut } from "firebase/auth";
import auth from "../FirestoreInit";
import Pagination from "../pagination/Pagination";

const UsersData = (props) => {
    const { setLoginStatus } = props;
    const [userData, setUserData] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState();

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`https://reqres.in/api/users?page=${page}`)
                .then(res => res.json())
            // .then(data=>setUserData(data));
            // console.log(response.data);
            setUserData(response.data)
            setTotalPage(response.total_pages);
        }
        fetchData()
    }, [page])

    const handleSignOut = () => {
        // const auth = getAuth();
        signOut(auth).then(() => {
            // Sign-out successful.
            setLoginStatus(false)
            console.log("user sign out succesfully");
        }).catch((error) => {
            // An error happened.
            console.log(error);
        });
    }
    return (
        <div className="data-container">
            <div className="sign-out-btn-container">
                <button className="signout-btn"  onClick={handleSignOut}>Sign out</button>
            </div>
            <div className="data-container-header">
                <h2>Hello ReqRes users!</h2>
            </div>
            <div className="users-data-container">
                {userData.map((data) => {
                    console.log(data);
                    return (
                        <div className="user">
                            <div>{data.first_name}</div>
                            <div>{data.email}</div>
                            <div>
                                <img src={data.avatar} alt="" />
                            </div>
                        </div>
                    )
                })}
            </div>
            {/* <div className="pagination"> */}
            <Pagination count={totalPage} setPage={setPage}/>
            {/* </div> */}
        </div>
    )
}

export default UsersData;

