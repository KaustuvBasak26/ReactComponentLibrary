/*
    ./src/index.js
    which is the webpack entry file

*/

import React from 'react';
import ReactDOM from 'react-dom';
import Fancy from './react-fancy-component';

console.log('Hey guys and ladies!!')

ReactDOM.render(<Fancy/>, document.getElementById("root"))