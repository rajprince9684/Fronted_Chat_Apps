import { Menu } from '@mui/material';
import React from 'react';

const FileMenu =({anchorE1})=> {
  return (
     <Menu anchorEl={anchorE1} open={Boolean(anchorE1)} onClose={()=>{}}>
      <div
      style={{
        width:"10rem",
      }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime cupiditate qui consequatur ratione accusantium fugit enim nobis necessitatibus sapiente culpa.</div>
     
    sd</Menu> 
    
  );
};

export default FileMenu;