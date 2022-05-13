import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout/Layout'
import { Form, Button, Row, Col, Container } from "react-bootstrap"
import Input from '../../components/UI/Input/Input'
import { login } from "../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
function SigIn(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log('auth :>> ', auth);
  // useEffect(() => {
  //   if (!auth.authenticate) {
  //     dispatch(isUserLoggedIn());
  //   }
  // }, [])

  const userLogin = (e) => {
    console.log('inside userLogin');
    e.preventDefault();
    const user = {
      email, password
    }
    dispatch(login(user));
    
    console.log('auth.authenticate :>> ', auth.authenticate);
    // navigate("/");
  }
  console.log('auth.message :>> ', auth.message);


  useEffect(() => {
    if (auth.authenticate) {
      // setTimeout(() => {
        navigate("/");
      // }, 1000);
    }
  }, [auth.authenticate])

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
                  label="Email"
                  placeholder="Email"
                  value={email}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                />

                <Input
                  label="Password"
                  placeholder="Password"
                  value={password}
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />

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

export default SigIn