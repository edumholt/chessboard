import React from 'react';
import { useDrag } from 'react-dnd';

import { ItemTypes } from './Constants';

export default function Knight() {
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.KNIGHT },
    collect: monitor => ({
      isDragging: !!monitor.isDragging()
    })
  });

  return (
    <div
      ref={drag}
      style={{
        cursor: 'move',
        fontSize: '4.5rem',
        fontWeight: 'bold',
        opacity: isDragging ? 0.5 : 1
      }}>
      ♘
    </div>
  );
}
