// import React, { useState } from 'react';
// import { Paper, TextField, Container, Radio, FormControlLabel, Button } from '@mui/material';
// import { styled } from '@mui/system';

// const StyledPaper = styled(Paper)`
//   padding: 20px;
//   box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.4);
//   margin-top: 20px;
// `;

// const Create2 = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [age, setAge] = useState(18);
//   const [gender, setGender] = useState('');
//   const [currentData, setCurrentData] = useState(null);

//   const handleAddData = () => {
//     const newData = {
//       name,
//       email,
//       age,
//       gender
//     };

//     setCurrentData(newData);

//     setName('');
//     setEmail('');
//     setAge(18);
//     setGender('');
//   };

//   const handleAgeChange = (e) => {
//     const newAge = parseInt(e.target.value, 10);
//     setAge(newAge < 18 ? 18 : newAge);
//   };

//   return (
//     <Container maxWidth="sm">
//       <StyledPaper>
//         <TextField
//           label="Name"
//           variant="outlined"
//           fullWidth
//           margin="normal"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <TextField
//           label="Email"
//           variant="outlined"
//           fullWidth
//           margin="normal"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <TextField
//           type="number"
//           label="Age"
//           variant="outlined"
//           fullWidth
//           margin="normal"
//           value={age}
//           onChange={handleAgeChange}
//           inputProps={{
//             min: 18,
//             step: 1,
//           }}
//         />
//         <div>
//           <FormControlLabel
//             control={<Radio />}
//             label="Male"
//             value="male"
//             checked={gender === 'male'}
//             onChange={() => setGender('male')}
//           />
//           <FormControlLabel
//             control={<Radio />}
//             label="Female"
//             value="female"
//             checked={gender === 'female'}
//             onChange={() => setGender('female')}
//           />
//         </div>
//         <div>
//           <Button variant="contained" size="large" onClick={handleAddData}>
//             Add
//           </Button>
//         </div>
//       </StyledPaper>
      
//       <div>
//         {currentData && (
//           <div>
//             <h5>Last user</h5>
//             <p>{`Name: ${currentData.name}`}</p>
//             <p>{`Email: ${currentData.email}`}</p>
//             <p>{`Age: ${currentData.age}`}</p>
//             <p>{`Gender: ${currentData.gender}`}</p>
//             <hr />
//           </div>
//         )}
//       </div>
//     </Container>
//   );
// };

// export default Create2;


import React, { useState } from 'react';
import { Paper, TextField, Container, Radio, FormControlLabel, Button } from '@mui/material';
import { styled } from '@mui/system';

const StyledPaper = styled(Paper)`
  padding: 20px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.4);
  margin-top: 20px;
`;

const Create2 = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState(18);
  const [gender, setGender] = useState('');
  const [currentData, setCurrentData] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [ageError, setAgeError] = useState('');
  const [genderError, setGenderError] = useState('');

  const handleLogin = () => {
    // Simulated login logic
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Simulated logout logic
    setIsLoggedIn(false);
    setCurrentData(null);
  };

  const handleAddData = () => {
    // Reset error messages
    setNameError('');
    setEmailError('');
    setAgeError('');
    setGenderError('');

    // Simple form validation
    if (!name) {
      setNameError('Name is required.');
    }

    if (!email) {
      setEmailError('Email is required.');
    }

    if (!age) {
      setAgeError('Age is required.');
    }

    if (!gender) {
      setGenderError('Gender is required.');
    }

    if (name && email && age && gender) {
      const newData = {
        name,
        email,
        age,
        gender
      };

      setCurrentData(newData);

      setName('');
      setEmail('');
      setAge(18);
      setGender('');
    }
  };

  const handleAgeChange = (e) => {
    const newAge = parseInt(e.target.value, 10);
    setAge(newAge < 18 ? 18 : newAge);
  };

  return (
    <Container maxWidth="sm">
      <StyledPaper>
        {isLoggedIn ? (
          <>
            <h3>Welcome, User!</h3>
            <Button variant="outlined" onClick={handleLogout}>
              Logout
            </Button>
            <br />
            <br />
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              margin="normal"
              value={name}
              onChange={(e) => setName(e.target.value)}
              error={Boolean(nameError)}
              helperText={nameError}
              required
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={Boolean(emailError)}
              helperText={emailError}
              required
            />
            <TextField
              type="number"
              label="Age"
              variant="outlined"
              fullWidth
              margin="normal"
              value={age}
              onChange={handleAgeChange}
              inputProps={{
                min: 18,
                step: 1,
              }}
              error={Boolean(ageError)}
              helperText={ageError}
              required
            />
            <div>
              <FormControlLabel
                control={<Radio />}
                label="Male"
                value="male"
                checked={gender === 'male'}
                onChange={() => setGender('male')}
              />
              <FormControlLabel
                control={<Radio />}
                label="Female"
                value="female"
                checked={gender === 'female'}
                onChange={() => setGender('female')}
              />
            </div>
            {genderError && <p style={{ color: 'red' }}>{genderError}</p>} {/* Error message for gender */}
            <div>
              <Button variant="contained" size="large" onClick={handleAddData}>
                Add
              </Button>
            </div>
          </>
        ) : (
          <>
            <h3>Please log in to access the form.</h3>
            <Button variant="contained" onClick={handleLogin}>
              Login
            </Button>
          </>
        )}
      </StyledPaper>

      <div>
        {currentData && (
          <div>
            <h5>Last user</h5>
            <p>{`Name: ${currentData.name}`}</p>
            <p>{`Email: ${currentData.email}`}</p>
            <p>{`Age: ${currentData.age}`}</p>
            <p>{`Gender: ${currentData.gender}`}</p>
            <hr />
          </div>
        )}
      </div>
    </Container>
  );
};

export default Create2;
