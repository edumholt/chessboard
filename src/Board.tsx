import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import Knight from './Knight';
import Square from './Square';
import { canMoveKnight, moveKnight } from './Game';

function handleSquareClick(toX: number, toY: number) {
  if (canMoveKnight(toX, toY)) {
    moveKnight(toX, toY);
  }
}

function renderSquare(i: number, [knightX, knightY]: number[]) {
  const x = i % 8;
  const y = Math.floor(i / 8);
  const black = (x + y) % 2 === 1;
  const isKnightHere = knightX === x && knightY === y;
  const piece = isKnightHere ? <Knight /> : null;
  return (
    <div key={i} style={{ width: '12.5%', height: '12.5%' }} onClick={() => handleSquareClick(x, y)}>
      <Square black={black}>{piece}</Square>
    </div>
  );
}

export default function Board({ knightPosition }: { knightPosition: Array<number> }) {
  console.log(knightPosition);
  const squares = [];
  for (let i = 0; i < 64; i++) {
    squares.push(renderSquare(i, knightPosition));
  }
  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ width: '100%', height: '100vh', display: 'flex', flexWrap: 'wrap' }}>{squares}</div>
    </DndProvider>
  );
}
