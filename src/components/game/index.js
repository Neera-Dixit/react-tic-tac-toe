import React,{Component} from 'react';
import Board from '../board/index';
import Gamecss from './game'

export default class Game extends Component {
    
  constructor(props){
      super(props);
      this.state = {
          squares : Array(9).fill(null),
          xTurn : true
      };
      this.initial=true;
      this.winner=null;
  }
    
    handleSquareClick(event,i){
        let userTurn = this.state.xTurn?'X':'O';
        let squares = [...this.state.squares];
        
        if(squares[i] === null && !this.winner){
            squares[i]=userTurn;
             this.setState({
                squares:squares,
                xTurn: !this.state.xTurn
            });
        
            this.initial=false;   
        }
        
    }
    
    checkWinner(squares){
        let status =false;
        this.prob = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
        
        
        for(let i=0;i<this.prob.length;i++){
            let [a,b,c] = this.prob[i];
            
            if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
                    return !status;
            }
    
        }

        console.log(status);
        return status;
        
    }
            
    render(){
        
         if(!this.initial && this.checkWinner(this.state.squares)){
            this.winner = this.state.xTurn?'O':'X';
        }
        
        return(
            <div>
                <Board handleSquareClick={(event,i)=>this.handleSquareClick(event,i)} squares={this.state.squares}/>
                <div className="dispBlock">
                 <div>Next Turn : {this.state.xTurn?'X':'O'}</div>
                 <div>Winner : {this.winner}</div>
                </div>
            </div>
        )
            
    };
}
