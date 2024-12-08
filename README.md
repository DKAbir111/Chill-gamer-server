# Chill Gamer: A Game Review Application  

## Project Description  
**Chill Gamer** is a user-friendly game review platform where users can explore, add, and manage game reviews. The platform provides detailed insights into games, allowing users to share their opinions, rate games, and manage their personalized game watchlists. With a clean and responsive UI, the platform offers a seamless and immersive experience, embodying the “chill” theme.  

---

## Live Website  
[Live Demo](#)  
[Live Server][https://chill-gamer-server-sandy.vercel.app/]

---
## Features  

### Core Features  

- **Game Reviews**: Explore reviews with ratings, genres, and detailed descriptions.  
- **Authentication**: Secure user login and registration with email/password and Google login.  
- **Protected Routes**: Private sections for authenticated users, like adding or managing reviews.  
- **Game Watchlist**: Authenticated users can add games to a personal watchlist for easy access.  
- **Add, Update, Delete Reviews**: Authenticated users can add game reviews, update their own reviews, and delete them. They cannot access or modify reviews added by others.  
- **Sorting and Filtering**: Dynamically sort and filter reviews based on rating, year, or genre for efficient browsing.  
- **Dynamic Title Updates**: Dynamically change the website's title based on the current page or action for better navigation.  
- **Persisted State**: By storing the user's previous browsing state, the application automatically redirects users to their desired state after logging in, providing a seamless experience.  
- **Error Handling**: Handles all types of errors effectively, including invalid inputs and unauthorized access, tested through unit testing of all features.  
- **Dark/Light Mode**: Toggle between dark and light themes for user convenience.  
- **Error Page**: A custom 404 page for invalid routes.  
- **Loading Spinner**: Indicates loading states for a better user experience.  
---

### Frontend Features  

- **Responsive Design**: Fully optimized for mobile, tablet, and desktop views using modern CSS frameworks like Tailwind CSS and DaisyUI.  
- **Dynamic Components**:  
  - **Carousel**: A visually engaging banner slider with seamless transitions.  
  - **Highest-Rated Games Section**: Displays top-rated games dynamically fetched from MongoDB.  
  - **User-Friendly Forms**: Simplified forms for adding, updating, and managing reviews.  
- **Interactive Animations**:  
  - Integrated with **Lottie React** for engaging, interactive visuals.  
  - Used **React Simple Typewriter** for dynamic text effects.  
  - Incorporated **React Awesome Reveal** for smooth animations.  
- **Dark/Light Theme Toggle**: Allows users to switch themes, enhancing accessibility and personal preferences.  
- **Notifications**:  
  - Integrated **Toast** and **SweetAlert** for success, error, and confirmation messages.  
  - Custom, visually appealing alerts for actions like review deletion and account creation.  
- **Protected Routes**: Ensures secure navigation by restricting access to private routes based on authentication.  
- **Sorting and Filtering**:  
  - Dropdowns and dynamic components to filter reviews by genres and sort by rating or release year.  
- **Dynamic Title Updates**: Updates the website title dynamically based on the current page or action for enhanced navigation clarity.  
- **Persisted State**: Maintains the user's browsing state across sessions, redirecting them to their desired location after login.  
- **Error Handling**: User-friendly error messages and alerts ensure smooth interactions, even in unexpected scenarios.  
- **404 Page**: A custom "Not Found" page for invalid routes, maintaining consistency in user experience.  
- **Loading Spinner**: Intuitive spinners indicate data fetching and processing states.  

---
### Backend Features  

- **RESTful API**: Designed a robust API with endpoints for:  
  - **User Authentication**: Handles user registration, login, and token-based authorization.  
  - **Review Management**: Create, read, update, and delete operations for game reviews.  
  - **Watchlist Management**: Add and retrieve user-specific watchlist items securely.  

- **Token-Based Authentication**: Implements JWT (JSON Web Token) to verify and manage user sessions, ensuring secure access to protected routes.  
- **Role-Based Data Access**: Ensures users can only manage their reviews and watchlist, safeguarding data integrity.  
- **Error Handling**: Comprehensive error handling for:  
  - Invalid inputs or missing data.  
  - Unauthorized access or token issues.  
  - Database operation failures with descriptive error messages.  
- **Data Validation**:  
  - Validates input data for consistency and security using libraries like **Joi**.  
  - Ensures fields like email, password, ratings, and genres meet the required standards.  
- **Clean and Modular Code**:  
  - Follows the **MVC (Model-View-Controller)** architecture for organized, maintainable code.  
  - Uses middleware for reusable logic, like authentication checks and error handling.  
- **Database Operations**:  
  - Efficient CRUD operations with **MongoDB** and Mongoose ORM.  
  - Optimized queries for fetching highest-rated games and sorting/filtering.  
- **Environment Variables**: Sensitive credentials (e.g., Firebase, MongoDB) are securely stored using **dotenv**.  
- **Dynamic Routing**: Implements routes for all API functionalities with clean and scalable design.  
- **Error Logging**: Logs errors with stack traces for debugging and monitoring purposes.  
- **Scalability**:  
  - Prepared for scaling with optimized queries and modular architecture.  
  - Supports future additions like advanced sorting, filtering, or notification triggers.  
- **Testing**: Comprehensive unit testing ensures every endpoint functions as intended and handles edge cases effectively.  

---

Here’s the full **Tech Stack & Tools** section, incorporating all relevant frontend and backend technologies, packages, and tools used in the project.  

---

### **Tech Stack & Tools**  

#### **Frontend Technologies**  
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)  
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)  
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)  
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)  
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)  
![DaisyUI](https://img.shields.io/badge/DaisyUI-5A4F5A?style=for-the-badge&logo=daisyui&logoColor=white)  
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)  
![React Icons](https://img.shields.io/badge/React_Icons-E91E63?style=for-the-badge&logo=react&logoColor=white)  
![SweetAlert](https://img.shields.io/badge/SweetAlert-FFC107?style=for-the-badge&logo=sweetalert&logoColor=black)  
![Lottie React](https://img.shields.io/badge/Lottie_React-FF6F61?style=for-the-badge&logo=lottie&logoColor=white)  
![React Simple Typewriter](https://img.shields.io/badge/React_Simple_Typewriter-FFD700?style=for-the-badge&logo=react&logoColor=black)  
![React Awesome Reveal](https://img.shields.io/badge/React_Awesome_Reveal-8A2BE2?style=for-the-badge&logo=react&logoColor=white)  

#### **Backend Technologies**  
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)  
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)  
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)  
![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white)  
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON-web-tokens&logoColor=white)  
![Dotenv](https://img.shields.io/badge/Dotenv-4E9A06?style=for-the-badge&logo=dotenv&logoColor=white)  
![Cors](https://img.shields.io/badge/Cors-007ACC?style=for-the-badge&logo=javascript&logoColor=white)  

#### **Design Tools**  
![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)  

#### **Hosting & Deployment**  
![Firebase Hosting](https://img.shields.io/badge/Firebase_Hosting-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)  
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)  
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)  

#### **Additional Features**  
- **Dynamic Title Updates**: Updates the webpage title dynamically based on the current page.  
- **State Management**: Maintains user-specific session data and restores the state for user convenience.  
- **Error Handling**: Comprehensive error validation and clean error responses for all interactions.  
- **Unit Testing**: Ensures all components and APIs work seamlessly across edge cases and normal workflows.  

---

## Installation  

### Prerequisites  
- Node.js and npm installed  
- MongoDB configured locally or through an online service  

### Steps to Run Locally  
1. Clone the repositories:  
   - **Client-Side**: `[https://github.com/DKAbir111/Chill-gamer-client.git]`  
   - **Server-Side**: `[https://github.com/DKAbir111/Chill-gamer-server.git]`  
2. Navigate to each project directory and install dependencies:  
   ```bash
   npm install
   ```  
3. Create an `.env` file in the server folder with the following keys:  
   - Firebase Config Keys  
   - MongoDB URI  
   - JWT Secret  
4. Run the backend server:  
   ```bash
   npm start
   ```  
5. Run the client-side:  
   ```bash
   npm run dev
   ```  
6. Open the application in your browser at the provided local URL.  

---
## Key Highlights  
- Intuitive design for a seamless user experience.  
- Advanced features like sorting, filtering, and user watchlists.  
- Secure and scalable backend.  
- Deployed using modern platforms for reliability and speed.  