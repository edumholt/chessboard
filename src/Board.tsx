import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import Knight from './Knight';
import BoardSquare from './BoardSquare';

function renderPiece(x: number, y: number, [knightX, knightY]: number[]) {
  if (x === knightX && y === knightY) {
    return <Knight />;
  }
}

function renderSquare(i: number, knightPosition: number[]) {
  const x = i % 8;
  const y = Math.floor(i / 8);

  return (
    <div key={i} style={{ width: '12.5%', height: '12.5%' }}>
      <BoardSquare x={x} y={y}>
        {renderPiece(x, y, knightPosition)}
      </BoardSquare>
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
