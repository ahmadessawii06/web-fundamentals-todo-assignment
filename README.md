# To-Do List Web Application

A simple yet functional To-Do List application built with JavaScript, HTML, CSS, and a PHP backend API.

## 📋 Features

- ✅ Add new tasks to your list
- ✅ View all existing tasks
- ✅ Delete tasks with confirmation
- ✅ Real-time status messages
- ✅ Responsive design
- ✅ Persistent data storage via API

## 🚀 Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- GitHub account (for hosting)
- Code editor (VS Code recommended)

### Installation

1. **Clone or download the project**
   ```bash
   git clone https://github.com/your-username/todo-12429664.git
   Open the project folder
   ```

bash
cd todo-12429664
File Structure

text
todo-12429664/
├── index.html # Main HTML file
├── css/
│ └── styles.css # Stylesheet
├── js/
│ └── app.js # Main JavaScript logic
└── README.md # This file
Usage
Open index.html in your browser

Enter a task in the input field

Click "Add Task" or press Enter

To delete a task, click the "Delete" button next to it

Confirm deletion in the dialog box

🔧 Technical Details
JavaScript Implementation
The application uses:

Fetch API for HTTP requests

async/await for asynchronous operations

DOM manipulation for dynamic updates

Event listeners for user interactions

API Endpoints
Base URL: https://portal.almasar101.com/assignment/api

Method Endpoint Purpose
GET /get.php?stdid=12429664&key=nYs43u5f1oGK9 Retrieve all tasks
POST /add.php?stdid=12429664&key=nYs43u5f1oGK9 Add a new task
DELETE /delete.php?stdid=12429664&key=nYs43u5f1oGK9&id=TASK_ID Delete a task
Code Highlights
Configuration: Student ID and API keys stored in constants

Error Handling: Comprehensive try-catch blocks and status messages

User Experience: Confirm dialogs for deletions, loading indicators

Security: Input validation and URL encoding

📁 Project Structure
index.html
Basic HTML structure

Form for adding tasks

Task list container

Status display area

css/styles.css
Responsive layout

Task item styling

Button and form styles

Color scheme and typography

js/app.js
setStatus(): Display status messages

DOMContentLoaded: Load tasks on startup

Form submission: Handle task creation

appendTaskToList(): Render tasks

deleteTask(): Handle task deletion

🧪 Testing
The application has been tested for:

Adding tasks with valid input

Loading tasks on page load

Deleting tasks with confirmation

Handling empty input

Displaying error messages

Responsive design on different screen sizes

🌐 Deployment
Option 1: Local Testing
Simply open index.html in your browser.

Option 2: GitHub Pages
Push code to GitHub repository

Go to repository Settings → Pages

Select main branch and root folder

Save and wait for deployment

Option 3: Netlify/Vercel
Drag and drop the folder to Netlify

Or connect your GitHub repository

📚 Learning Outcomes
This project demonstrates:

Modern JavaScript practices (ES6+)

Asynchronous programming with async/await

REST API integration

DOM manipulation and event handling

Error handling and user feedback

Responsive web design principles

🐛 Troubleshooting
Issue Solution
Tasks not loading Check API endpoint and student ID
Can't add tasks Verify internet connection and API status
Delete not working Ensure DELETE method is allowed
Styling issues Clear browser cache
🤝 Contributing
This is an individual assignment project. However, suggestions are welcome!

📄 License
This project is created for educational purposes as part of a university assignment.

👨‍💻 Author
Ahmad Essawii
Student ID: 12429664
Course: Web Development
Institution: An-Najah National University

🔗 Links
Live Demo (if deployed)

GitHub Repository

API Documentation
