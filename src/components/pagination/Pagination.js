import React from 'react';

const Pagination = ({ count, setPage }) => {
    const btns = [];
    for (let i = 0; i < count; i++) {
        btns.push(<button key={i+1} className="page-btn" onClick={()=>setPage(i+1)}>{i + 1}</button>);
    }
    console.log(btns);
    return <div className="page-container">{btns}</div>;
};

export default Pagination;
