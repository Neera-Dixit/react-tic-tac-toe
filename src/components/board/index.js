import React,{Component} from 'react';
import Square from '../square/index';
import boardCss from './board';

export default class Board extends Component {
    
  constructor(props){
      super(props);
  }
    
    renderSquare(i){
        let winNumStatus=this.props.winPattern.indexOf(i)>-1?true:false;
        return (<Square value={this.props.squares[i]} onClick={(event)=>this.props.handleSquareClick(event,i)} winNum={winNumStatus} />);
    }
            
    render(){
        
        return(
            <div className="board">
                <div>
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div>
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div>
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        )
            
    };
}
