# Blog App

## Introduction

The Blog App is a full-stack web application designed to allow users to create, view, and manage blog posts. It features user authentication, rich text editing, and a responsive design that ensures a great experience on both desktop and mobile devices.

## Features

- **User Authentication:** Secure user registration and login using OAuth with Google.
- **Create and Manage Posts:** Authenticated users can create, edit, and delete their own blog posts.
- **Rich Text Editing:** Advanced text editor for creating and formatting blog content.
- **Responsive Design:** Fully responsive layout that works seamlessly on any device.
- **Comment System:** Users can comment on blog posts and interact with other users.
- **Search and Filter:** Easily search and filter through blog posts by title, author, or tags.
- **API Integration:** Backend API integration to handle data operations securely and efficiently.

## Technologies Used

### Frontend

- **React:** JavaScript library for building user interfaces.
- **Vite:** Next-generation frontend tooling.
- **React Router:** For handling in-app navigation.
- **Axios:** Promise-based HTTP client for the browser and Node.js.
- **CSS Modules:** For scoped and modular CSS.

### Backend

- **Node.js:** JavaScript runtime built on Chrome's V8 engine.
- **Express:** Fast, unopinionated, minimalist web framework for Node.js.
- **MongoDB:** NoSQL database for storing blog posts and user data.
- **Mongoose:** Elegant MongoDB object modeling for Node.js.
- **JWT:** JSON Web Tokens for secure authentication.
- **OAuth2:** Google OAuth2 for user authentication.

### Development Tools

- **Vite:** Build tool that aims to provide a faster and leaner development experience for modern web projects.
- **ESLint:** Pluggable linting utility for JavaScript and JSX.
- **Prettier:** Code formatter to ensure consistent code style.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/blog-app.git
   cd blog-app
   ```

2. **Install dependencies for the client:**

   ```bash
   cd client
   npm install
   ```

3. **Install dependencies for the server:**

   ```bash
   cd ../server
   npm install
   ```

4. **Set up environment variables:**
   Create a `.env` file in the `server` directory and add your MongoDB URI, JWT secret, and Google OAuth credentials.

   ```env
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   ```

5. **Run the development server:**

   ```bash
   npm run dev
   ```

6. **Run the Vite development server:**

   ```bash
   cd ../client
   npm run dev
   ```

7. **Open your browser and navigate to:**
   ```
   http://localhost:5173
   ```

## Usage

1. **Register/Login:**

   - Use the "Login with Google" button to authenticate yourself.
   - After successful login, you will be redirected to the home page.

2. **Create a Post:**

   - Click on the "Create Post" button.
   - Fill in the title and content of your blog post using the rich text editor.
   - Click "Submit" to publish your post.

3. **View Posts:**

   - Navigate to the home page to view all blog posts.
   - Click on a post title to view its details.

4. **Edit/Delete Posts:**
   - Navigate to "My Posts" to view and manage your posts.
   - Click "Edit" to update a post or "Delete" to remove it.

## Contributing

We welcome contributions from the community! If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch with your feature or bugfix.
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes.
   ```bash
   git commit -m 'Add some feature'
   ```
4. Push to the branch.
   ```bash
   git push origin feature-name
   ```
5. Create a new Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact

If you have any questions or feedback, feel free to reach out to us at [your-email@example.com].

```

Replace `your-username`, `your_mongodb_uri`, `your_jwt_secret`, `your_google_client_id`, `your_google_client_secret`, and `your-email@example.com` with the appropriate values for your project. This will create a comprehensive `README.md` file for your GitHub repository.
```
