import React from "react";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import Divider from "@mui/material/Divider";
import login from "../images/login.jpg";

function Login() {
	return (
		<Container>
			<SignInContainer>
				<h2>Login</h2>
				<Button
					style={ButtonStyle}
					variant="outlined"
					startIcon={<GoogleIcon />}>
					Sign in with Google
				</Button>
				<Button
					style={ButtonStyle}
					variant="outlined"
					startIcon={<FacebookIcon />}>
					Sign in with Facebook
				</Button>

				<Divider>Or Sign in with email</Divider>

				<LoginForm>
					<TextField
						autoFocus
						margin="dense"
						id="name"
						label="Email Address"
						type="email"
						fullWidth
						variant="outlined"
					/>
					<TextField
						margin="dense"
						id="password"
						label="Password"
						type="password"
						fullWidth
						variant="outlined"
					/>
					<Button
						variant="contained"
						style={ButtonStyle}>
						Log In
					</Button>
				</LoginForm>
			</SignInContainer>
		</Container>
	);
}

export default Login;

const Container = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	height: 100vh;
	background-color: #c6dec6;
`;

const SignInContainer = styled.div`
	background-color: rgba(255, 255, 255, 0.8);
	padding: 30px;
	width: 30%;
	display: flex;
	flex-direction: column;
	gap: 10px;
	border-radius: 20px;
`;

const LoginForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

const ButtonStyle = {
	padding: "10px",
	margin: "5px",
	borderRadius: "20px",
};
