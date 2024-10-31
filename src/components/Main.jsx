import React, { useState } from 'react';
import './Main.css';
import 'boxicons';
import axios from 'axios';
import Card from './Card';

const Main = () => {
    const  [search, setSearch] = useState("");
    const [bookData, setBookData] = useState([]);
    const searchBook = (e) => {
        if (e.key === "Enter") {
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyBpvxz_wqCjiNmsDz6dL5K7gP4_6PkAn_E'+'&maxResults=40')
            .then(res => setBookData(res.data.items))
            .catch(err => console.log(err));
        }
    }
  return (
    <>
        {/* Header */}
        <div className='header'>
            <div className="row1">
                <h1>A room without books is like <br/>
                    a body without soul.
                </h1>

            </div>
            <div className="row2">
                <h2>Find Your Book</h2>
                <div className="search">
                    <input type="text" placeholder='Enter Your Book Name'
                    value={search} onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={searchBook}/>
                    <button><box-icon name='search'></box-icon></button>
                </div>
                <img src="../../public/imgs/bg2.png" alt="" />
            </div>
        </div>
        {/* Container */}
        <div className="container">
          {
            <Card book={bookData}/>
          }
        </div>
    </>

  )
}

export default Main
