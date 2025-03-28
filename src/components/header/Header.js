import React, { useEffect, useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
    const [movieList, setMovieList] = useState([]);
    const type = "popular"; // Example type, replace with actual logic

    useEffect(() => {
        const getData = () => {
            fetch("...")
                .then(res => res.json())
                .then(data => setMovieList(data.results));
        };
        getData();
    }, [type]);

    return (
        <div className="header">
            <div className="headerLeft">
                <Link to="/"><img className="header__icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/PopcornPlay_Logo_2016.svg/2560px-PopcornPlay_Logo_2016.svg.png" /></Link>
                <Link to="/movies/popular" style={{textDecoration: "none"}}><span>Popular</span></Link>
                <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span>Top Rated</span></Link>
                <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span>Upcoming</span></Link>
            </div>
        </div>
    );
};

export default Header;