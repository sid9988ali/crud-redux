// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { deleteUser, showUser } from "../features/userDetailSlice";
// const Read=()=>{

//     const dispatch=useDispatch();
//     const {users,loading}=useSelector((state)=>state.app)

//     useEffect(()=>{
//         console.log('users from show=',users);
//         dispatch(showUser());
//     },[])

//     return (
//         <div>
//           <table>
//             <thead>
//               <tr>
//                 <th>Name</th>
//                 <th>Email</th>
//                 <th>Age</th>
//                 <th>Gender</th>
//               </tr>
//             </thead>
//             <tbody>
//               {users.map((ele) => (
//                 <tr key={ele.id}>
//                   <td>{ele.name}</td>
//                   <td>{ele.email}</td>
//                   <td>{ele.age}</td>
//                   <td>{ele.gender}</td>
//                   <button onClick={()=>dispatch(deleteUser(ele.id))}>delete</button>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       );
      

// }
// export default Read;





import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, showUser } from "../features/userDetailSlice";
import { Table, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { deleteAllUsers } from "../features/userDetailSlice";




const Read = () => {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.app);

const deleting =useSelector((state)=>state.app.deleting);

  useEffect(() => {
    dispatch(showUser());
  }, []);

  const handleDeleteAll=()=>{
    dispatch(deleteAllUsers)
  }

  return (
    <Container className="mt-3">
      <Row className="justify-content-center">
        <Col xs={12} md={8}>
          <h4 className="text-center font-weight-bold text-primary">
            All Users List
          </h4>
          <Table striped bordered responsive>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Action</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((ele) => (
                <tr key={ele.id}>
                  <td>{ele.name}</td>
                  <td>{ele.email}</td>
                  <td>{ele.age}</td>
                  <td>{ele.gender}</td>
                  <Link to={`/edit/${ele.id}`}>
                  <td><Button>Edit <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
</svg></Button></td></Link>
                  <td>
                    <Link>   <Button
                      onClick={() => dispatch(deleteUser(ele.id))}
                      variant="danger"
                    >Delete  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
                  </svg>
                      
                    </Button> </Link>
                   
                  </td>
                  
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
      {/* <Button onClick={handleDeleteAll}>Delete All</Button> */}
      <button onClick={handleDeleteAll} disabled={deleting}>
        Delete All
      </button>
      {deleting && <span>Deleting all users...</span>}
    </Container>
  );
};

export default Read;
