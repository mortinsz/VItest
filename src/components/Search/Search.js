//     // https://kladr-api.ru/api.php
import React from 'react';
import s from './Search.module.scss'
import { useState, useEffect } from 'react'
import {data} from '../../data'
import uniqid from 'uniqid';

function Search() {
    
    const filterCars = (searchText, listOfCars) => {
        if (!searchText) {
          return listOfCars;
        }
        return listOfCars.filter(({ name }) =>
          name.toLowerCase().includes(searchText.toLowerCase())
        );
      }
    const [searchTerm, setSearchTerm] = useState('');
    const [selected, setSelected] = useState(false)

//     useEffect(() => {
//     fetch(`https://kladr-api.ru/api.php?query=vl&contentType=city&withParent=1&limit=2`, { 
//       headers:{
//         token: 'NeZf85FZFy7a88b8dhRbkDShNH4ZEGAn'
//       }
//     })
//     // fetch(`https://jsonplaceholder.typicode.com/users`)
//     .then(response => response.json())
//     .then(res => console.log(res))
//     .then(list => setStartData(list))

// }, [])

    const [startData, setStartData] = useState([]);
    const [dataList, setDataList] = useState(data);
    
    useEffect(() => {
        const filteredCars = filterCars(searchTerm, data);
        setDataList(filteredCars);
  
    }, [searchTerm]);


const blurehandle = () => {
  setTimeout(() => {
    setSelected(false)
  },3000)
}

        const mapList = dataList.map((text) => (
        <p className={s.search_input_selected__item} key={uniqid()} onClick={() => setSearchTerm(text.name)}>{text.name}</p> ));
        


  return (
    <div className={s.search}>
        <input type="text"
            className={ s.search_input} 
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
            onFocus={() => setSelected(true)}
            onBlur={blurehandle}
            placeholder='Название города'/>
            <div className={selected ? s.search_input_selected : s.search_input_noselected}>
                {mapList}
            </div>
    </div>
  )
}

export default Search



// Реализовать функцию, которая принимает в качестве аргумента объект любой степени вложенности и преобразует все его ключи в верхний регистр. В качестве свойств объекта могут быть: 
// массивы; 
// объекты; 
// массивы объектов;
// объекты с массивами;
// булевые значения;
// строки.
const obj = { "id": "123",
             "retweetCheck": { 
               "result": "OK", 
               "checs": [
                 { "cId": "123" }, 
                 { "cId": "456" } 
               ] 
             },
             "tweetCheck": {
               "result": "OK", 
               "cId": "345", 
               "check": "Fal" 
             }
           };

function keysToCapitalCase(objInProcess) {
  if (!objInProcess || typeof objInProcess !== "object") return null;
  
  if(Array.isArray(objInProcess)) {
    return objInProcess.map(obj => keysToCapitalCase(obj));
  }
  
  const finalObj = {};
  objInProcess = Object.entries(objInProcess); 
  objInProcess.forEach((entry) => {
    let key = entry[0];
    let value = entry[1];
    key = key.toUpperCase()
    if (typeof value == "object") {
      value = keysToCapitalCase(value);
    }
    finalObj[key] = value;
  });
  return finalObj;
}

var finalResponseObj = {Data: keysToCapitalCase(obj)};
console.log(finalResponseObj);