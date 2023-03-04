import { useEffect, useState } from "react";
import styled from "styled-components";

const StyledTable = styled.table`
  border-collapse: collapse;
  width: 80%;

  margin: 0 auto;
  margin-top: 50px;

  th,
  td {
    padding: 8px;
    text-align: left;
    vertical-align: middle;
  }

  th {
    background-color: #f2f2f2;
    font-weight: bold;
  }

  td {
    border: 1px solid #ddd;
  }
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledLabel = styled.label`
  margin-top: 10px;
  font-size: 18px;
`;

const StyledInput = styled.input`
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 20px;
  width: 300px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const StyledActionButton = styled.button`
  padding: 10px 20px;
  margin-left: 10px;
  background-color: ${(props) => props.color};
  color: #fff;
  font-size: 18px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

`;

interface empDataIntefrace {
  eid?: number;
  ename?: string;
  sal?: number;
}
const Employeee = () => {
  const [empData, setEmpData] = useState<empDataIntefrace[]>([]);
  const [empPostData,setEmpPostData]=useState<empDataIntefrace>();
  const [tableDataUpdated,setTableDataUpdated]=useState(0)

  function ds(){
 
      fetch("http://localhost:8888/api/v4/employees", {
        method: "GET",
  
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setEmpData(data);
        })
        .catch((error) => console.log(error));
   
  }
 
    const handleInsert = () => {
      // Handle insert button click here
            
      fetch("http://localhost:8888/api/v4/employees", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(empPostData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          ds();
        })
        .catch((error) => {
          console.error("Error:", error);
        });

      console.log(empPostData)
     
    };
  
    const handleUpdate = () => {
      // Handle update button click here

     fetch(`http://localhost:8888/api/v4/employessupdate/${empPostData?.eid}`, {
      method :'PUT',
      headers: {
        "Content-Type": "application/json",
      },
       body: JSON.stringify(empPostData)
     }).then((respone)=> respone.json())
     .then((data)=>{
      console.log("Success:", data);
      ds();
     })
     .catch((error)=>{
      console.log("Error:",error);
     })

    };
  
    const handleDelete = () => {
      // Handle delete button click here

      fetch(`http://localhost:8888/api/v4/employess/${empPostData?.eid}`, {
        method: 'DELETE',
        headers :
        {
          "Content-Type": "application/json"
        }
      })
      .then((data)=> {
        console.log("Success:", "Data deleted successfully");
        ds();
      })
      .catch((error)=>{console.log(error)});

    };
  
  return (
    <div className="text-center">
             <StyledForm>
      <StyledLabel htmlFor="eid">Employee ID:</StyledLabel>
      <StyledInput type="text" id="eid" name="eid" onChange={(e: any)=>{setEmpPostData({...empPostData, eid: e.target.value})}}/>

      <StyledLabel htmlFor="sname">Employee Name:</StyledLabel>
      <StyledInput type="text" id="sname" name="sname" onChange={(e: any)=>{setEmpPostData({...empPostData, ename: e.target.value})}}/>

      <StyledLabel htmlFor="sal">Salary:</StyledLabel>
      <StyledInput type="text" id="sal" name="sal" onChange={(e: any)=>{setEmpPostData({...empPostData, sal: e.target.value})}}/>

      <StyledButtonContainer>
        <StyledActionButton
          type="button"
          color="#2196f3"
         
          onClick={handleInsert}
        >
          Insert
        </StyledActionButton>

        <StyledActionButton
          type="button"
          color="#ff9800"
          
          onClick={handleUpdate}
        >
          Update
        </StyledActionButton>

        <StyledActionButton
          type="button"
          color="#f44336"
        
          onClick={handleDelete}
        >
          Delete
        </StyledActionButton>
      </StyledButtonContainer>
    </StyledForm>

      <StyledTable>
        <thead>
          <tr>
            <th>EID</th>
            <th>ENAME</th>
            <th>ESALARY</th>
          </tr>
        </thead>
        <tbody>
          {empData.map((val) => (
            <tr key={val.eid}>
              <td> {val.eid} </td>
              <td> {val.ename} </td>
              <td> {val.sal} </td>
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </div>
  );
};

export default Employeee;
