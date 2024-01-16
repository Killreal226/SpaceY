import React, { useEffect, useState } from "react";
import axios from "axios";

export default function EventsMap() {
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


    return (
      <div>
        <h1>Список событий</h1>
        <ul>
          {data.map((item, index) => (
            <li key={index}>
              <strong>{item.title}:</strong> {item.description}
            </li>
    
          ))}
        </ul>
      </div>
    );
  }