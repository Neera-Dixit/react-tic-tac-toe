import squareCss from './square.css';
import React,{Component} from 'react';
import classNames from 'classnames';

export default function Square(props){
   
    var classObj = classNames('square',props.winNum?'bgWhite':'');
    
    return (
        <button className={classObj} onClick={props.onClick}>
            <span>{props.value}</span>
        </button>
    );
}