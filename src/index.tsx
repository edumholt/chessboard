import React from 'react';
import ReactDOM from 'react-dom';

import Board from './Board';
import { observe } from './Game';
import './index.css';

const root = document.getElementById('root');
observe((knightPosition: number[]) => ReactDOM.render(<Board knightPosition={knightPosition} />, root));
