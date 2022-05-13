import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout/Layout'
import { Form, Button, Row, Col, Container } from "react-bootstrap"
import { useDispatch, useSelector } from 'react-redux';
import Input from '../../components/UI/Input/Input'
import {eventList} from "../../redux/actions/actions"
import moment from "moment";
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [dayOfWeek, setDayOfWeek] = useState('');
    const [startDate, setStartDate] = useState('')
    const [result,setResult] = useState([]);
    const [error, setError] = useState('');
    const event = useSelector((state) => state.event);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (!event.loading) {
          setName("");
          setDescription("");
          setEndTime("");
          setStartTime("");
          setStartDate("");
          setDayOfWeek();
        }
      }, [event.loading]);
    
    
    const userLogin = (e) => {
        console.log('inside userLogin');
        e.preventDefault();
        if(name&&description&&startTime&&endTime&&startDate&&dayOfWeek){
        var mili = moment(startDate).valueOf(); 
        const data = new FormData();
        data.append("Name",name);
        data.append("Description",description);
        data.append("startTime",startTime);
        data.append("endTime",endTime);
        data.append("startDate",mili);
        data.append("dayOfWeek",dayOfWeek);
        
        dispatch(eventList(data));
        
        console.log(event);
        const user = {
            name, description, startTime, endTime, mili, dayOfWeek
        }

        console.log(user)
        
        navigate("/calender")
    }else{
        alert("Please fill the form");
    }
    }

    if (event.loading) {
        return <p>Loading...!!!</p>
    }
    return (
        <>
            <Layout>
                <Container>
                    <Row style={{ marginTop: "50px" }}>
                        <Col md={{ span: 6, offset: 3 }}>
                            <Form
                                onSubmit={userLogin}
                            >
                                <Input
                                    label="Name"
                                    placeholder="Name"
                                    value={name}
                                    type="text"
                                    onChange={(e) => setName(e.target.value)}
                                />

                                <Input
                                    label="Description"
                                    placeholder="Description"
                                    value={description}
                                    type="text"
                                    onChange={(e) => setDescription(e.target.value)}
                                />

                                <Input
                                    label="Start time"
                                    placeholder="Start time"
                                    value={startTime}
                                    type="time"
                                    onChange={(e) => setStartTime(e.target.value)}
                                />

                                <Input
                                    label="End Time"
                                    placeholder="End Time"
                                    value={endTime}
                                    type="time"
                                    onChange={(e) => setEndTime(e.target.value)}
                                />

                                <Input
                                    label="Start Date"
                                    placeholder="Start Date"
                                    value={startDate}
                                    type="date"
                                    onChange={(e) => setStartDate(e.target.value)}
                                />

                                {/* <Input
                                    label="Day of the week "
                                    placeholder="Day of the week "
                                    value={dayOfWeek}
                                    type="text"
                                    onChange={(e) => setDayOfWeek(e.target.value)}
                                /> */}
                                <Form.Label>Day of the week</Form.Label>
                                <Form.Select aria-label="Day of the week"
                                        value={dayOfWeek}
                                        onChange={e => {
                                        console.log("e.target.value", e.target.value);
                                        setDayOfWeek(e.target.value);
                                        // this.onChangeColor.bind(this);
                                    }}>
                                    <option>Select Day of the week</option>
                                    <option value="Monday">Monday</option>
                                    <option value="Tuesday">Tuesday</option>
                                    <option value="Wednesday">Wednesday</option>
                                    <option value="Thursday">Thursday</option>
                                    <option value="Friday">Friday</option>
                                    <option value="Saturday">Saturday</option>
                                    <option value="Sunday">Sunday</option>
                                </Form.Select>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </Layout>
        </>
    )
}

export default Home