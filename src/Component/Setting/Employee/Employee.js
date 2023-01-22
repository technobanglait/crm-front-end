import React from 'react';
import '../Settings.css';
import { Container, Form, Row, Col } from 'react-bootstrap';
import BtnSubmit from '../../Utilities/Button/BtnSubmit';
import EmployeeList from './EmployeeList';
import { TextField } from '@mui/material';
import { Dayjs } from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
const Employee = () => {
    return (
        <Container className='SettingDiv'>
            <h5>Employee Entry</h5>    
            <hr/>
            <Form className='SettingForm'>
                {/* EMPLOYEE INFO */}
                <Row className="mb-3">
                    <Form.Group as={Col} xs={12} md={6} lg={3}>
                        <Form.Label>Employee Code</Form.Label>
                        <Form.Control size="sm" type="text" />
                    </Form.Group>

                    <Form.Group as={Col} xs={12} md={6} lg={3}>
                        <Form.Label>Employee Name <span className='redText'>*</span></Form.Label>
                        <Form.Control size="sm" type="text" />
                    </Form.Group>

                    <Form.Group as={Col} xs={12} md={6} lg={3} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control size="sm" type="email"  />
                    </Form.Group>

                    <Form.Group as={Col} xs={12} md={6} lg={3}>
                        <Form.Label>Mobile No</Form.Label>
                        <Form.Control size="sm" type="Number" onInput={(e) => {
                            e.target.value = (e.target.value)
                                .toString()
                                .slice(0, 11);
                        }}/>
                    </Form.Group>
                </Row>


                {/* ADDRESS INFO */}
                <Row className="mb-3">
                    <Form.Group as={Col} xs={12} md={6} lg={3}>
                        <Form.Label>Present Address</Form.Label>
                        <Form.Control size="sm" as="textarea" rows={2} />
                    </Form.Group>

                    <Form.Group as={Col} xs={12} md={6} lg={3}>
                        <Form.Label>Permanent Address</Form.Label>
                        <Form.Control size="sm"  as="textarea" rows={2} />
                    </Form.Group>

<Form.Group as={Col} xs={12} md={6} lg={3}>
                        <Form.Label>Designation <span className='redText'>*</span></Form.Label>
                        <Form.Select size="sm" >
                            <option>Select</option>
                            <option>...</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} xs={12} md={6} lg={3}>
                        <Form.Label>Joining Date</Form.Label>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
        
        renderInput={(params) => <TextField size="small" {...params} />}
      /></LocalizationProvider>
                    </Form.Group>
                </Row>


                {/* MARKET INFO */}
                <Row className="mb-3">
                    
                <Form.Group as={Col} xs={12} md={6} lg={3}>
                        <Form.Label>Blood Group</Form.Label>
                        <Form.Control size="sm" type="text"/>
                    </Form.Group>
                        
                    <Form.Group as={Col} xs={12} md={6} lg={3} controlId="formGridEmail">
                        <Form.Label>Father's Name</Form.Label>
                        <Form.Control size="sm" type="email"  />
                    </Form.Group>

                    <Form.Group as={Col} xs={12} md={6} lg={3}>
                        <Form.Label>Proprietor Name</Form.Label>
                        <Form.Control type="text" size="sm"/>
                    </Form.Group>


                    <Form.Group as={Col} xs={12} md={6} lg={3}>
                        <Form.Label>Owner Name</Form.Label>
                        <Form.Control size="sm" type="text"/>
                    </Form.Group>

                    <Form.Group as={Col} xs={12} md={6} lg={3}>
                        <Form.Label>Telephone No</Form.Label>
                        <Form.Control size="sm" type="Number"/>
                    </Form.Group>
                </Row>

                {/* CREDIT INFO */}
                <Row className="mb-3">
                    
                    <Form.Group as={Col} xs={12} md={6} lg={3}>
                        <Form.Label>Credit Days</Form.Label>
                        <Form.Control type="text" size="sm"/>
                    </Form.Group>


                    <Form.Group as={Col} xs={12} md={6} lg={3}>
                        <Form.Label>License</Form.Label>
                        <Form.Control size="sm" type="text" required/>
                    </Form.Group>

                    <Form.Group as={Col} xs={12} md={6} lg={3}>
                        <Form.Label>Status</Form.Label>
                        <Form.Select size="sm" >
                            <option>Select</option>
                            <option>...</option>
                        </Form.Select>
                    </Form.Group>
                </Row>

                {/* DROPDOWN INFO */}
                <Row className="mb-3">
                    <Form.Group as={Col} xs={12} md={6} lg={3}>
                        <Form.Label>Zone Name</Form.Label>
                        <Form.Select size="sm" >
                            <option>Select</option>
                            <option>...</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} xs={12} md={6} lg={3}>
                        <Form.Label>Region Name</Form.Label>
                        <Form.Select size="sm" >
                            <option>Select</option>
                            <option>...</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} xs={12} md={6} lg={3}>
                        <Form.Label>Depot Name</Form.Label>
                        <Form.Select size="sm" >
                            <option>Select</option>
                            <option>...</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} xs={12} md={6} lg={3}>
                        <Form.Label>Territory Name</Form.Label>
                        <Form.Select size="sm" >
                            <option>Select</option>
                            <option>...</option>
                        </Form.Select>
                    </Form.Group>
                </Row>

                {/* <Button variant="primary" type="submit">
                    Submit
                </Button> */}
                <br/><hr/>
                <Row>
                    <Col xs={10}></Col>
                    <Col xs={2}>
                        <BtnSubmit btnText={'Submit'}/>
                    </Col>
                </Row>
                
            </Form>

            <div className='SettingList'>
                <EmployeeList/>
            </div>

        </Container>
    );
};

export default Employee;