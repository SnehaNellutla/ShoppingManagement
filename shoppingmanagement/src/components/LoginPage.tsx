
import { useState } from 'react';

import styled from 'styled-components';

// import { useHistory } from 'react-router-dom';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 24px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 18px;
  margin-bottom: 8px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 2px solid gray;
  border-radius: 5px;
  margin-bottom: 16px;
`;

 const Button = styled.button`
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  background-color: blue;
  color: white;
  cursor: pointer;
`;


const LoginPage=(props : any)=>{


    const [login,setLogin]= useState({
uname:'',
pw:''

    });
    
    
    


    //const history = useHistory();
function verify(event : any){
    event.preventDefault();
    fetch(`http://localhost:8888/api/v4/login?username=${login.uname}` , {
        method : 'GET',
        headers: {
            'Content-Type': 'application/json'
          },
    }).then((response) => response.json())
    .then((data) => {
        console.log(data)

        if(data.password !== login.pw){
            console.log("wrong creadentilas");
           
        }

        else{
      
            //history.push(""); 
            
            window.location.href = "/mainpage";
        }
    })
    .catch((error) => console.log(error));
            



 }

    return(
        <div className="text-center">
        
        <Container>
      <Title>Login</Title>
      <Form>
        <Label> Email:</Label>
        <Input type="text" id="email" placeholder="Enter your email" onChange={(e : any)=>{setLogin({...login, uname: e.target.value})}} />

        <Label >Password:</Label>
        <Input type="password" id="password" placeholder="Enter your password" onChange={(e :any )=>{setLogin({...login, pw: e.target.value})} } />

        <Button type="submit" onClick={verify}>Login</Button>
      </Form>
    </Container>     

        
        </div>

    )
}

export default LoginPage;