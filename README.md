# Task Tracker and Pomodoro Timer Extension

Task Tracker and Pomodoro Timer is a Chrome extension designed to enhance productivity by combining a task management tool with a Pomodoro timer. This extension helps users categorize their tasks, manage their time effectively, and track their productivity over time.

## 🚀 Features
- **Task Management**: Add, categorize, and delete tasks easily.
- **Pomodoro Timer**: Start, pause, reset, and track work intervals with integrated break reminders.
- **Data Persistence**: Tasks and timer states are saved using Chrome Storage APIs, ensuring your progress isn't lost after closing the extension.
- **User-friendly Interface**: Professional violet theme with responsive design.

## 🛠️ Project Setup

### Clone the Repository
```bash
git clone https://github.com/mja8/Task-Tracker-and-Pomodoro-Timer-Chrome-Extension.git
cd task-pomodoro-extension

Install Dependencies
Ensure you have Node.js installed, then run:

command to run : npm install

Build the Extension
Compile the React app and assets for the Chrome extension:

command to run : npm run build

Load the Extension into Chrome
Open chrome://extensions/.
Enable Developer mode.
Click Load unpacked and select the dist folder inside the project directory.

🔧 Running the Project
Development Mode
To run the project in development mode with live reloading:

npm start
This will start a local Webpack dev server. Note that extensions cannot load directly from the dev server, so you'll still need to manually reload the extension from the dist folder.

Build for Production
To generate a production-ready build:

command to run : npm run build

🧰 Technologies Used
React: Frontend framework for building the task manager and timer interface.
Webpack: Bundler to compile and optimize extension files.
Babel: For transpiling modern JavaScript and React JSX.
Chrome Extensions API: To store data and manage background processes.
CSS: Custom styling for a modern, professional UI.

📂 Project Structure
bash
Copy code
task-pomodoro-extension/
├── src/
│   ├── popup/              # React components and UI files for the extension popup
│   │   ├── App.jsx         # Main React component for the popup
│   │   ├── index.js        # Entry point for the React app
│   │   └── index.html      # HTML template for the popup
│   ├── background/         # Background scripts for extension functionality
│   │   └── background.js   # Background worker script
│   ├── styles/             # CSS files for the extension
│       └── popup.css       # Styling for the popup UI
├── dist/                   # Compiled files for the Chrome extension
├── manifest.json           # Extension configuration file
├── webpack.config.js       # Webpack configuration
├── .babelrc                # Babel configuration
├── package.json            # Node.js project metadata
└── README.md               # Project documentation

📸 Screenshots
### Popup UI
![Popup UI](assets/chrome_tab.png)
src/assets/chrome_tab.png

### Tasks Section
![Tasks Section](assets/Task1.png)

### Pomodoro Timer
![Pomodoro Timer](assets/Task2.png)