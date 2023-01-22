import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Header.css';
import { Box, IconButton, Modal } from '@mui/material';


import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockResetIcon from '@mui/icons-material/LockReset';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const Header = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Container fluid className='Header'>
            <Row>
                <Col xs='10'>
                    {/* <div className='headerTitle'>DASHBOARD</div> */}
                </Col>
                <Col>
                    Hello Admin<IconButton onClick={handleOpen}>
                        <AccountCircleIcon className='styleIcon' />
                    </IconButton>
                </Col>
            </Row>
            

            <Modal open={open} onClose={handleClose}>
                <Box className="profileBox">
                    <Row>
                        <Col>Department:</Col>
                        <Col></Col>
                    </Row>
                    <Row>
                        <Col>Mobile:</Col>
                        <Col></Col>
                    </Row>
                    <Row>
                        <Col>Email:</Col>
                        <Col></Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col>Joining Date:</Col>
                        <Col></Col>
                    </Row>
                    <Row>
                        <Col>Job Status:</Col>
                        <Col></Col>
                    </Row>
                    <Row>
                        <Col>Job Nature:</Col>
                        <Col></Col>
                    </Row>
                    <hr className='mt-3'/>

                    <Row>
                        <Col>
                            <IconButton>
                                <LockResetIcon className='styleIcon' /> 
                                <div className='btnText'>
                                    Change Password
                                </div>
                            </IconButton>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <IconButton>
                                <ExitToAppIcon className='styleIcon'/> 
                                <div className='btnText'>
                                    Logout
                                </div>
                            </IconButton>
                        </Col>
                    </Row>
                </Box>
            </Modal>
        </Container>
    );
};

export default Header;