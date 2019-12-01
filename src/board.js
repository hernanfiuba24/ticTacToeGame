import React from 'react';
import Square from './square'
import './judge'
import { calculateWinner } from './judge';

export default class Board extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            isTimeToX: true,
        };
    }

    handleClick(i) {
        const squares = this.state.squares.slice();
        if(calculateWinner(squares) || squares[i]) {
            return null
        }

        squares[i] = this.state.isTimeToX ? 'X' : 'O';
        this.setState({
            squares: squares,
            isTimeToX: !this.state.isTimeToX,
        });
    }

    renderSquare(i) {
        return (
            <Square
                value={this.state.squares[i]}
                onClick={() => this.handleClick(i)}
            />
        );
    }

    render() {
        const winner = calculateWinner(this.state.squares)
        let status
        if (winner) {
            status = 'Winner: ' + winner
        } else {
            status = "Next player: " + (this.state.isTimeToX ? 'X' : 'O');
        }

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        )
    }
}