class TicTacToe {
    constructor() {
        this.arr = [
            [null,null,null],
            [null,null,null],
            [null,null,null]
        ];  
        this.player = 'x'; 
        this.win = null; 
        this.Turns = false;
        this.finish = false;
        this.draw = false;
    }

    getCurrentPlayerSymbol() {
         return this.player;

    }

    nextTurn(rowIndex, columnIndex) {
            if(this.arr[rowIndex][columnIndex]==null){
            this.arr[rowIndex][columnIndex] = this.player;
            if(this.player=='o'){
             this.player ='x';
            }else {
                this.player ='o';
            }
        }
        if( this.arr[0][0]==this.arr[0][1]&&this.arr[0][0]==this.arr[0][2]&&this.arr[0][2]!=null ||
            this.arr[0][0]==this.arr[1][0]&&this.arr[1][0]==this.arr[2][0]&&this.arr[2][0]!=null ||
            this.arr[0][0]==this.arr[1][1]&&this.arr[0][0]==this.arr[2][2]&&this.arr[2][2]!=null ||
            this.arr[0][1]==this.arr[1][1]&&this.arr[0][1]==this.arr[2][1]&&this.arr[2][1]!=null ||
            this.arr[1][0]==this.arr[1][1]&&this.arr[1][0]==this.arr[1][2]&&this.arr[1][2]!=null ||
            this.arr[0][2]==this.arr[1][1]&&this.arr[0][2]==this.arr[2][0]&&this.arr[2][0]!=null ||
            this.arr[2][0]==this.arr[2][1]&&this.arr[2][0]==this.arr[2][2]&&this.arr[2][2]!=null ||
            this.arr[0][2]==this.arr[1][2]&&this.arr[1][2]==this.arr[2][2]&&this.arr[2][2]!=null){
                if(this.player=='o'){
                    this.win ='x';
                }else { this.win = 'o';}
            }
        for(var i=0; i<3; i++){
            for(var j=0; j<3; j++){
                if(this.arr[i][j]==null){
                    this.Turns = false;
                    return  this.Turns;
                }
            }
        }
        this.Turns = true;
    }

    isFinished() {
        if(this.win!=null){
            this.finish = true;
        };
        if(this.Turns){
            this.finish  = true;
        }
        return this.finish;
    }

    getWinner() {  
        return this.win;    
    }

    noMoreTurns() {    
        return  this.Turns;
    }

    isDraw() {
         if(this.Turns && this.win==null){
            this.draw = true;
         }  
         return this.draw;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.arr[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
