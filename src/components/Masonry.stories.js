import React from 'react';
import Masonry from './Masonry';
export default {
   title: 'Masonry',
   component: Masonry
}

const images = [
   <img src="http://picsum.photos/200/300/"></img>,
   <img src="http://picsum.photos/200/"></img>,
   <img src="http://picsum.photos/300/200/"></img>,
]
let rand = [];
for(let i = 0; i < 20; i++) {
   rand.push(images[Math.floor(Math.random() * 3)]);
}
export const Default = args => {
   return (
      <Masonry {...args}>
         {rand}
      </Masonry>
   );}