import React, { useState } from 'react';
import './Sidebar.css';
import { Link, useNavigate } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';

const Subbar = ({data}) => {

    const [showDropdown, setShowDropdown] = useState(false);
    const navigator = useNavigate();
    const handleShow =() =>{
        setShowDropdown(!showDropdown)
    }
   
    const navigatePath=(path)=>{
        navigator(path)
    }

    return (
        <div key={data.key}>
        <div className='navMenu'  onClick={data.subNav ? handleShow : (e)=>navigatePath(data.path)}>
         <Row className='g-2'>
                 <Col xs={3}>
                     <div className='navIconDiv'>{data.icon}</div> 
                 </Col>
                 <Col>
                 <div className='navTitleDiv'>
                     {data.title}
                 </div>
                 </Col>
             </Row>
         </div>
         { showDropdown && data.subNav.map(item=>(
            <div key={item.key} className='subMenu' onClick={(e)=>navigatePath(item.path)}>
                <Row>
                    <Col>
                        <div className='subTitleDiv'>
                            {item.title}
                        </div>
                    </Col>
                </Row>
            </div>
        ))}

     </div>
    );
};

export default Subbar;