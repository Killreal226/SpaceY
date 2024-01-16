import React, { useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom"
import "./capecanaveral.css"
import Label from "./img/label.png"

export default function Home() {
    const [data, setData] = useState([]);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState([]);
    const [photo1, setPhoto1] = useState("");
    const [photo2, setPhoto2] = useState("");
    const [photo3, setPhoto3] = useState("");
    const [photo4, setPhoto4] = useState("");
    const [photo5, setPhoto5] = useState("");
  
    useEffect(() => {
      axios.get("http://127.0.0.1:8000/api/v1/Cape_Canaveral") 
        .then(response => {
          setData(response.data);
          setTitle(response.data.title);
          setContent(response.data.content.split('\\n'));
          setPhoto1(response.data.photo_1);
          setPhoto2(response.data.photo_2);
          setPhoto3(response.data.photo_3);
          setPhoto4(response.data.photo_4);
          setPhoto5(response.data.photo_5);
        })
        .catch(error => {
          console.error("Ошибка при получении данных:", error);
        });
    }, []);

    

    return(
        <div>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div><img src={Label} className="label_company_map" alt="Эмблема" /></div>
            </Link>
            <div className="gray-rectangle-place"></div>
            <h1 className="title-place">{title}</h1>
            <div className="title-container">
              <div className="left-content">
                <p>{content[0]}</p>
              </div>
              <div class="right-content">
                <img src={photo1} alt="Ваше изображение" className="img-place"></img>
              </div>
            </div>
            <div className="container-2">
              <div class="right-content-2">
                <img src={photo2} alt="Ваше изображение" className="img-place-2"></img>
              </div>
              <div className="left-content-2">
                <p>{content[1]}</p>
              </div>
            </div>
            <div className="container-3">
              <div className="left-content-3">
                <p>{content[3]}</p>
              </div>
              <div class="right-contenе-3">
                <img src={photo3} alt="Ваше изображение" className="img-place-3"></img>
              </div>
            </div>
            <div className="container-4">
              <div class="right-content-4">
                <img src={photo4} alt="Ваше изображение" className="img-place-4"></img>
              </div>
              <div className="left-content-4">
                <p>{content[2]}</p>
              </div>
            </div>
            <div className="container-5">
              <div className="left-content-5">
                <p>{content[4]}</p>
              </div>
              <div class="right-contenе-5">
                <img src={photo5} alt="Ваше изображение" className="img-place-5"></img>
              </div>
            </div>
        </div>
        
    )
}