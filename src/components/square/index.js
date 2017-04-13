import squareCss from './square.css';
import React,{Component} from 'react';

export default function Square(props){
   
    return (
        <button className='square' onClick={props.onClick}>
            <span>{props.value}</span>
        </button>
    );
}