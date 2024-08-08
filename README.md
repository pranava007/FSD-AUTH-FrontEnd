# User Authentication and Password Management Frontend

This React frontend provides user interfaces for registration, login, and password management. It interacts with the backend API using Axios for data fetching and includes routing and notification handling.

Key Features
User Registration Page:

Description: A form that collects username, email, and password for user registration.
Functionality: Sends a POST request to the backend /register endpoint using Axios.
Notifications: Uses React Toastify to show success or error messages based on the registration outcome.
User Login Page:

Description: A form that collects email and password for user login.
Functionality: Sends a POST request to the backend /login endpoint using Axios.
Notifications: Displays a success message on successful login and navigates the user to a dashboard page.
Forgot Password Page:

Description: A form where the user can input their email to receive a password reset link.
Functionality: Sends a POST request to the backend /forgetPassword endpoint using Axios.
Notifications: Notifies the user that the password reset email has been sent.
Reset Password Page:

Description: A form for updating the user’s password using a token from the email.
Functionality: Sends a POST request to the backend /resetPassword/:id/:token endpoint with the new password.
Notifications: Informs the user whether the password reset was successful or if there was an error.
Technical Stack
React: Used for building user interfaces and component-based structure.
Axios: Handles HTTP requests to the backend API.
React Router DOM: Manages routing and navigation between pages, including private routes.
React Toastify: Provides user-friendly toast notifications for real-time feedback on actions.
Folder Structure
Components: Contains reusable UI components like forms, buttons, and input fields.
Pages: Stores page-specific components like Register, Login, ForgotPassword, and ResetPassword.
Services: Includes Axios setup and API call functions for better code modularity.
Routes: Manages public and private routes using React Router DOM.
Styling
Uses CSS modules or styled-components for scoped and modular styles to ensure consistency across the application.
