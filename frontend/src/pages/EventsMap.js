import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import L from "leaflet"
import {Link} from "react-router-dom"

import "leaflet/dist/leaflet.css"
import "./eventsmap.css"
import Header from "../components/Header";

import spaceport from "../img/rocket.png"
import event from "../img/event.png"
import observatory from "../img/observatory.png"
import space_agency from "../img/space_agency.png"
import institute from "../img/institute.png"
import planetarium from "../img/planetarium.png"
import Label from "../img/label.png"

export default function EventsMap() {
  const mapDivRef = useRef(null);
  const mapRef = useRef(null);
  const [data, setData] = useState([]);
  
    useEffect(() => {
      // Отправляем запрос на бекенд при загрузке компонента
      axios.get("http://127.0.0.1:8000/api/v1/events_map/") 
        .then(response => {
          setData(response.data);
        })
        .catch(error => {
          console.error("Ошибка при получении данных:", error);
        });
    }, []);


    useEffect(() => {
      if (!mapDivRef.current) return;
    
      // Создаем карту только при первом рендере
      if (!mapRef.current) {
        const map = L.map(mapDivRef.current, {
          zoomControl: false,
          maxBoundsViscosity: 1.0
        }).setView([51.505, -0.09], 2);
    
        const Stadia_StamenToner = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.{ext}', {
          minZoom: 2,
          maxZoom: 14,
          attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          ext: 'png',
          noWrap: true
        });
    
        Stadia_StamenToner.addTo(map);
        mapRef.current = map; // Сохраняем ссылку на карту
      }
    
      // Создаем маркеры на основе данных из списка data
      data.forEach((item) => {
        const { title, category, slug, description, latitude, longitude, photo_1 } = item;

        let icon;

        switch (category) {
          case 'event':
            icon = event;
            break;
          case 'spaceport':
            icon = spaceport;
            break;
          case 'observatory':
            icon = observatory;
            break;
          case 'space_agency':
            icon = space_agency;
            break;
          case 'institute':
            icon = institute;
            break;
          case 'planetarium':
            icon = planetarium;
            break;
          default:
            icon = event;
            break;
        }
    
        var myIcon = L.icon({
          iconUrl: icon,
          iconSize: [38, 38]
        });
    
        var marker = L.marker([latitude, longitude], {
          icon: myIcon
        });
    
        var popup = marker
          .bindPopup(
            `<a href="/${slug}" class="link">${title}</a><br /><img src="${photo_1}" class="label" alt="Эмблема"/><br /><div class="description">${description}</div>`
          )
          .openPopup();
    
        popup.addTo(mapRef.current);
      });
    
      return () => {
        // Уничтожаем карту при размонтировании компонента
        if (mapRef.current) {
          mapRef.current.remove();
          mapRef.current = null; // Обнуляем ссылку
        }
      };
    }, [data]);

  return (
    <div className="page-map">
      <header className="header-map">
        <Header/>
      </header>
      <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
        <div><img src={Label} className="label_company_map" alt="Эмблема" /></div>
      </Link>
      <div ref={mapDivRef} style={{ width: "100%", height: "100vh" }} className="map"></div>
      <div className="gray-rectangle-map"></div>
    </div>
  );
}