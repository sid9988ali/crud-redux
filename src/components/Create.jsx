// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { createUser } from "../features/userDetailSlice";
// import { useNavigate } from "react-router-dom";

//  const Create =()=>{
//     const [users,setUsers]=useState({});
//     const dispatch=useDispatch();
//     const navigate=useNavigate();
//     const getUserData=(e)=>{
//        setUsers({...users,[e.target.name]:e.target.value});
//     }
// const handleSubmit=(e)=>{
//     e.preventDefault();
//     console.log("users===",users);
//     dispatch(createUser(users));
//     navigate('/read')
// }
// return (
// <div>
//     <form onSubmit={handleSubmit}>
//     <label>Name</label>
//     <input type='text' name='name' onChange={getUserData}/>
//     <label>Email</label>
//     <input type="text" name='email' onChange={getUserData}></input>
//     <label>Age</label>
//     <input type="text" name="age" onChange={getUserData}/>
//     <label>Genger</label>
//     <input type="text" name="gender" onChange={getUserData}/>
//     <button type="submit">Add</button>
//     </form>

// </div>
// )

//  }
//  export default Create;




// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { createUser } from "../features/userDetailSlice";
// import { useNavigate } from "react-router-dom";
// import { Container, Form, Button, Toast } from "react-bootstrap";

// const Create = () => {
//   const [users, setUsers] = useState({});
//   const [showToast, setShowToast] = useState(false);

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const getUserData = (e) => {
//     setUsers({ ...users, [e.target.name]: e.target.value });
//     console.log("typing...",users)
//   };


 

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(createUser(users));
//     setShowToast(true);
//     setUsers({});



//   };

//   const handleNavigateRead = () => {
//     navigate("/read");
//   };

//   const handleToastClose = () => {
//     setShowToast(false);
//   };

//   return (
//     <Container className="d-flex justify-content-center mt-3">
//       <div className="p-3 shadow">
//         <h5 className="text-center mb-2">Add User</h5>
//         <Form onSubmit={handleSubmit}>
//           <Form.Group className="mb-2" controlId="name">
//             <Form.Label>Name</Form.Label>
//             <Form.Control
//               type="text"
//               name="name"
//               value={users.name || ""}
//               onChange={getUserData}
//               required
//             />
//           </Form.Group>
//           <Form.Group className="mb-2" controlId="email">
//             <Form.Label>Email</Form.Label>
//             <Form.Control
//               type="email"
//               name="email"
//               value={users.email || ""}
//               onChange={getUserData}
//               required
//             />
//           </Form.Group>
//           <Form.Group className="mb-2" controlId="age">
//             <Form.Label>Age</Form.Label>
//             <Form.Control
//               type="number"
//               name="age"
//               value={users.age || ""}
//               onChange={getUserData}
//               required
//             />
//           </Form.Group>
//         <Form.Group className="mb-2" controlId="gender">
//             <Form.Label>Gender</Form.Label>
//             <Form.Control
//               type="text"
//               name="gender"
//               value={users.gender || ""}
//               onChange={getUserData}
//               required
//             />
//           </Form.Group>
//           <div className="d-flex justify-content-between">
//             <Button type="submit" variant="primary">
//               Add
//             </Button>
//             <Button variant="secondary" onClick={handleNavigateRead}>
//               Go to Read Page
//             </Button>
//           </div>
//         </Form>
//       </div>
//       <Toast
//         show={showToast}
//         onClose={handleToastClose}
//         delay={3000}
//         autohide
//         style={{
//           position: "absolute",
//           top: "20px",
//           right: "20px",
//           minWidth: "200px",
//         }}
//       >
//         <Toast.Header>
//           <strong className="me-auto">Success</strong>
//         </Toast.Header>
//         <Toast.Body>User added successfully!</Toast.Body>
//       </Toast>
//     </Container>
//   );
// };

// export default Create;


// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { createUser } from "../features/userDetailSlice";
// import { useNavigate } from "react-router-dom";
// import { Container, Form, Button, Toast, Col } from "react-bootstrap";

// const Create = () => {
//   const [users, setUsers] = useState({});
//   const [showToast, setShowToast] = useState(false);
//   const [gender, setGender] = useState("female"); // New state for gender selection

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const getUserData = (e) => {
//     setUsers({ ...users, [e.target.name]: e.target.value });
//     console.log("typing...", users);
//   };

//   const handleGenderChange = (e) => {
//     setGender(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(createUser({ ...users, gender }));
//     setShowToast(true);
//     setUsers({});
//     setGender("female"); // Reset gender selection to female after submission
//   };

//   const handleNavigateRead = () => {
//     navigate("/read");
//   };

//   const handleToastClose = () => {
//     setShowToast(false);
//   };

//   return (
//     <Container className="d-flex justify-content-center mt-3">
//       <div className="p-3 shadow">
//         <h5 className="text-center mb-2">Add User</h5>
//         <Form onSubmit={handleSubmit}>
//           <Form.Group className="mb-2" controlId="name">
//             <Form.Label>Name</Form.Label>
//             <Form.Control
//               type="text"
//               name="name"
//               value={users.name || ""}
//               onChange={getUserData}
//               required
//             />
//           </Form.Group>
//           <Form.Group className="mb-2" controlId="email">
//             <Form.Label>Email</Form.Label>
//             <Form.Control
//               type="email"
//               name="email"
//               value={users.email || ""}
//               onChange={getUserData}
//               required
//             />
//           </Form.Group>
//           <Form.Group className="mb-2" controlId="age">
//             <Form.Label>Age</Form.Label>
//             <Form.Control
//               type="number"
//               name="age"
//               value={users.age || ""}
//               onChange={getUserData}
//               required
//             />
//           </Form.Group>
//           <Form.Group as={Col} className="mb-2" controlId="gender">
//             <Form.Label>Gender</Form.Label>
//             <Form.Check
//               type="radio"
//               name="gender"
//               value="female"
//               checked={gender === "female"}
//               label="Female"
//               onChange={handleGenderChange}
//               required
//             />
//             <Form.Check
//               type="radio"
//               name="gender"
//               value="male"
//               checked={gender === "male"}
//               label="Male"
//               onChange={handleGenderChange}
//               required
//             />
//           </Form.Group>
//           <div className="d-flex justify-content-between">
//             <Button type="submit" variant="primary">
//               Add
//             </Button>
//             <Button variant="secondary" onClick={handleNavigateRead}>
//               Go to Read Page
//             </Button>
//           </div>
//         </Form>
//       </div>
//       <Toast
//         show={showToast}
//         onClose={handleToastClose}
//         delay={3000}
//         autohide
//         style={{
//           position: "absolute",
//           top: "20px",
//           right: "20px",
//           minWidth: "200px",
//         }}
//       >
//         <Toast.Header>
//           <strong className="me-auto">Success</strong>
//         </Toast.Header>
//         <Toast.Body>User added successfully!</Toast.Body>
//       </Toast>
//     </Container>
//   );
// };

// export default Create;


import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../features/userDetailSlice";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button, Toast } from "react-bootstrap";
import Toggle from "react-toggle";
import "react-toggle/style.css";

const Create = () => {
  const [users, setUsers] = useState({});
  const [showToast, setShowToast] = useState(false);
  const [isMale, setIsMale] = useState(false); // New state for gender selection

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getUserData = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
    console.log("typing...", users);
  };

  const handleGenderChange = () => {
    setIsMale(!isMale);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const gender = isMale ? "Male" : "Female";
    dispatch(createUser({ ...users, gender }));
    setShowToast(true);
    setUsers({});
    setIsMale(false); // Reset gender selection to female after submission
  };

  const handleNavigateRead = () => {
    navigate("/read");
  };

  const handleToastClose = () => {
    setShowToast(false);
  };

  return (
    <Container className="d-flex justify-content-center mt-3">
      <div className="p-3 shadow">
        <h5 className="text-center mb-2">Add User</h5>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-2" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={users.name || ""}
              onChange={getUserData}
              required
            />
          </Form.Group>
          <Form.Group className="mb-2" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={users.email || ""}
              onChange={getUserData}
              required
            />
          </Form.Group>
          <Form.Group className="mb-2" controlId="age">
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="number"
              name="age"
              value={users.age || ""}
              onChange={getUserData}
              required
            />
          </Form.Group>
          <Form.Group className="mb-2" controlId="gender">
            <Form.Label>Gender</Form.Label>
            <div>
              <Toggle
                checked={isMale}
                onChange={handleGenderChange}
                icons={false}
              />
              <span style={{ marginLeft: "10px" }}>
                {isMale ? "Male" : "Female"}
              </span>
            </div>
          </Form.Group>
          <div className="d-flex justify-content-between">
            <Button type="submit" variant="primary">
              Add
            </Button>
            <Button variant="secondary" onClick={handleNavigateRead}>
              Go to Read Page
            </Button>
          </div>
        </Form>
      </div>
      <Toast
        show={showToast}
        onClose={handleToastClose}
        delay={3000}
        autohide
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          minWidth: "200px",
        }}
      >
        <Toast.Header>
          <strong className="me-auto">Success</strong>
        </Toast.Header>
        <Toast.Body>User added successfully!</Toast.Body>
      </Toast>
    </Container>
  );
};

export default Create;
