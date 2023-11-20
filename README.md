# Keeper-React

The Keeper Web App is a MERN Stack (MongoDB, Express, React, and Node) based application designed to help users with creating and deleting notes.

## Features

- Create and delete notes with ease.
- Intuitive user interface for a seamless note-taking experience.
- Responsive design for a consistent user experience across devices.
- Utilizes the power of MERN Stack for efficient and scalable development.

## Project Structure

The project structure is organized as follows:

- **backend**: This directory contains the server-side code.
  - **server.js**: The main entry point for the Express server.
  - **routes**: Contains route handlers for handling API requests.
  - **models**: Mongoose models for defining the MongoDB schema.

- **frontend**: This directory contains the client-side React code.
  - **src**: Main source code directory.
    - **components**: React components for building the user interface.
    - **index.js**: Entry point for rendering the React app.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

To run this application, you need to have Node.js and MongoDB installed on your machine.

- Node.js: [Download and Install Node.js](https://nodejs.org/)
- MongoDB: [Download and Install MongoDB](https://www.mongodb.com/try/download/community)
  - create a Database with the name of "stickyNotes"

### Installation

1. Clone the repository:

   ```shell
   git clone https://github.com/yourusername/keeper-web-app.git
   ```

2. Navigate to the project directory:

   ```shell
   cd keeper-web-app
   ```

3. Install dependencies for both the frontend and backend:

   ```shell
   cd frontend
   npm install
   cd ../backend
   npm install
   ```

4. Start the backend server:

   ```shell
   cd backend
   node server.js
   ```

5. Start the React app:

   ```shell
   cd ../frontend
   npm start
   ```

6. Open your web browser and visit [http://localhost:3001](http://localhost:3001) to access the Keeper Web App.

## Usage

- Create new notes with the "Add" button.
- Delete notes by clicking the trash icon.
- Enjoy a simple and efficient note-taking experience.

## Built With

- MongoDB - NoSQL database for storing notes.
- Express - Web application framework for the server.
- React - JavaScript library for building user interfaces.
- Node.js - JavaScript runtime for the server.

## Contributing

If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature: `git checkout -b feature/your-feature-name`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Create a pull request.

## Acknowledgments

- Thanks to the MERN Stack for providing a robust development stack.
- Special thanks to our contributors for their valuable contributions.

Finally, I would like to express my gratitude to the Web development course instructor Angela Yu for her guidance and support throughout the development of this project.  

## Contact

If you have any questions or want to get in touch, please contact at fatimariaz_gatech@outlook.com.

Experience efficient note-taking with the Keeper Web App!
