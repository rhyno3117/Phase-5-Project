import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {useState} from 'react'

function Signup() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
  
    const navigate = useNavigate();
  
    function handleSubmit(e) {
      e.preventDefault();
      fetch("/api/users", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          password,
        }),
      })
        .then(response => {
          if (!response.ok) {
            throw ValueError("Network response error");
          }
          return response.json();
        })
        .then(data => {
          setName(data);
          navigate('/UploadCloset');
        })
        .catch(error => {
          console.log("error", error.message);
        });
    }
  
    return (
      <Container component="main" sx={{
        height: '80vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Box
          sx={{
            marginTop: 8,
            width: '90vw'
          }}
        >
          <Grid container>
            <CssBaseline />
            <Grid
              item
              xs={false}
              sm={4}
              md={5}
              sx={{
                backgroundPosition: "center",
              }}
            />
            <Grid
              item
              xs={12}
              sm={8}
              md={5}
              component={Paper}
              elevation={6}
              square
            >
              <Box
                sx={{
                  my: 8,
                  mx: 4,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography component="h1" variant="h5">
                  Sign Up
                </Typography>
                <Box
                  component="form"
                  noValidate
                  onSubmit={handleSubmit}
                  sx={{ mt: 1 }}
                >
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="user"
                    label="User"
                    name="user"
                    autoComplete="user"
                    autoFocus
                    onChange={(e) => setName(e.target.value)}
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    // onClick={() => navigate('/UploadCloset')}

                  >
                    Sign In
                  </Button>
                  <Grid container display={'flex'} justifyContent={'space-between'} margin={'0 auto'}>
                    <Grid item>
                    <Button style={{ marginLeft: '100px' }} onClick={() => navigate('/Login')}>
                      Already have an account?
                    </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    );
  }
  
  export default Signup;
  