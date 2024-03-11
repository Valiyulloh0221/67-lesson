import { useState, useEffect } from "react";
import axios from "axios";
import './galeriya.scss'

function Post() {
  const [comment, setComment] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/photos?_page=1&_limit=10`
        );
        setComment(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="galeriya">
      <div className="header">
        <marquee direction="left">
          <h1>Galary area </h1>
        </marquee>
      </div>
      <div className="container">
        <div className="todos">
          {comment?.map((item, index) => {
            if (item?.albumId === item?.albumId) {
              return (
                <div className="todos-content" key={index}>
                  <div>
                    <h5>Albom id: {item.id}</h5>
                    <h5>Title: {item.title}</h5>
                  </div>
                  <div>
                    <img className="photos" src={item.url} alt="" />
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default Post;
