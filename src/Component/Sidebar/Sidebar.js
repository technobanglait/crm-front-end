import React, { useState } from 'react';
import { sidebarData } from './SidebarData';
import './Sidebar.css';
import Subbar from './Subbar';

const Sidebar = () => {

    return (
        <div className='Sidebar'>
            {   
                sidebarData.map(data=>(
                   <Subbar data={data} key={data.key}/>
                ))
            }
        </div>
    );
};

export default Sidebar;