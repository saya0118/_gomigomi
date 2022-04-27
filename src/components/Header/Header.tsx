import React, { useState, useEffect } from "react";
import axios from "axios";

export const Header = () => {
  const [image, setImage] = useState<any>([]);
  const api: string | undefined = process.env.REACT_APP_ACCESS_KEY
  const url = `https://api.unsplash.com/search/photos?query=travel&client_id=${api}`;
  console.log(process.env)

  useEffect(() => {
    axios.get(url).then((res) => {
      const data = res.data.results;
      var randomId = Math.floor(Math.random() * data.length);
      setImage(data[randomId]);
    });
  }, []);

  return (
    <div className="h-16">
      <img src={image?.urls?.full} alt="unsplash images" className="filter grayscale"/>
      <div className="flex justify-between w-full content-center h-16 items-center absolute">
        <h1 className="ml-10">Voyage Notes</h1>
        <ul className="flex">
          <li className="mr-10">
            <a>Home</a>
          </li>
          <li className="mr-10">
            <a>About</a>
          </li>
          <li className="mr-10">
            <a>Diary</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
