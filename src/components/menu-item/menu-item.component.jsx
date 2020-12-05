import React from 'react';
import './menu-item.styles.scss';

const MenuItem=({id,imageUrl,title,size})=>(
    <div className={`${size} menu-item`}>
        <div key={id} className='background-image' alt='' style={{backgroundImage:`url(${imageUrl})`}}/>
        <div className='content'>
          <h1 className='title'>{title.toUpperCase()}</h1>
          <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
)
export default MenuItem;