# Kanban-Board 🚀🚀

Welcome to my Kanban-Board project on GitHub! Join me on this journey of organizing tasks with ease and efficiency. Let's elevate our productivity together through intuitive task management on this personal Kanban board. Feel free to explore, contribute, and tailor it to your workflow needs. Happy organizing! ✨✨

The tool is hosted on https://canaalex.github.io/kanban-board/


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


# Design Documentation
 
## Design Approach

The project is designed to provide a user-friendly interface for managing tasks in a Kanban-style board. The design approach focuses on simplicity and ease of use for handling the daily tasks that a user might have.

## Architecture Overview

The project follows a client-only architecture, where the frontend is built using React.js. The frontend application is developed using Create React App (CRA), providing a convenient setup for building single-page applications. The project does not include a backend server implemented using Node.js and Express.js, as all data processing and user interactions are managed on the client-side. The application follows modern frontend development practices, leveraging React.js for component-based UI development and managing application state.

## Technologies Used

Frontend: React Js, Boostrap, Javascript, CSS, React Beautiful DND, React Icons
Development Tools: Webpack,Babel
Other: UUID

In developing the Kanban board application, a variety of technologies were carefully selected to ensure a seamless and efficient user experience. React JS was used for building the dynamic user interface, allowing for the creation of reusable components and efficient state management. Bootstrap was instrumental in providing responsive design elements and pre-built UI components, ensuring consistency and speeding up development. JavaScript played a crucial role in adding interactivity to the application, handling user events, and manipulating the DOM. CSS was utilized extensively for styling  to create an aesthetically pleasing interface. The integration of React Beautiful DND facilitated intuitive drag-and-drop functionality for the task cards, enhancing workflow management within the Kanban board. React Icons added visual clarity and communication through the inclusion of scalable vector icons. Development tools like Webpack and Babel optimized the build process and ensured compatibility across different browsers. Additionally, the use of UUID for generating unique identifiers for each task maintained data integrity and prevented conflicts within the application.

## User Interface Design

The user interface is designed to be intuitive and visually appealing, with a focus on usability and accessibility. The design has three major parts which is the Header, Action bar and the Kanban Board.

### Header

<img width="1372" alt="Screenshot 2024-05-03 at 16 54 00" src="https://github.com/canaalex/kanban-board/assets/62827365/642d5f0f-dcfa-429c-b427-b916a99244ea">

The header is necessary to reinforce a brand name and help users recognize and remember the application. Having a consistent header across different pages or views of the application improves accessibility and usability. Users can quickly orient themselves and understand where they are within the application.

### Action Bar

<img width="1406" alt="Screenshot 2024-05-03 at 16 54 38" src="https://github.com/canaalex/kanban-board/assets/62827365/69c12861-fd7a-40ed-8299-2d4cd0141344">

The add button in the action bar serves as a clear call to action for users, indicating what action they can take within the application. This clarity helps users understand how to interact with the interface and encourages engagement. Placing the add button in an action bar gives it visual prominence, signaling to users that it represents a primary action within the application. While there is only one button in the action bar currently, having a designated space for primary actions allows for easy scalability as the application grows. Additional buttons or actions to the action bar can be added without cluttering the interface or compromising usability.

### Kanban Board

<img width="1311" alt="Screenshot 2024-05-03 at 16 54 58" src="https://github.com/canaalex/kanban-board/assets/62827365/16ed13ca-333b-4123-a3c2-673e952ff732">

Kanban boards provide a visual representation of tasks and their progress through different stages of a workflow. This visualization helps teams understand the status of each task at a glance and identify bottlenecks or areas where work is piling up. The above Kanban board has three columns with the titles ‘To Do’, ‘Doing’, ‘Done’.
Task Card

The task card has the title and description of the task. The edit and delete buttons are in the card. Placing the buttons within the task card provides immediate context to the user about which task they are editing or deleting. This reduces the chance of error by ensuring that the user performs actions on the intended task.

### Edit Task

<img width="495" alt="Screenshot 2024-05-03 at 16 55 14" src="https://github.com/canaalex/kanban-board/assets/62827365/b2297f68-f954-4468-8b93-91f1d8ac1112">

The edit modal allows users to edit task details such as the title, description, and status. This is crucial for maintaining accurate and up-to-date information about the task. The form Is prefilled with data of the task.

### Add Task

<img width="493" alt="Screenshot 2024-05-03 at 16 55 33" src="https://github.com/canaalex/kanban-board/assets/62827365/f083ccf5-c02e-48fe-9f23-6a4866e612e1">

The ability to quickly add new tasks through the add task modal ensures that all task items are captured and visible within the Kanban system. This prevents tasks from being overlooked or forgotten, and helps to  maintain a comprehensive view of the users workload.

## Features

Drag and Drop: Users can easily move tasks between three different columns or stages of the workflow by dragging and dropping task cards, reflecting changes in their status or progress.
Add Task: Users can create new tasks directly within the Kanban board interface, through the add task modal, allowing the user to quickly capture new task items.
Edit Task: Users can modify the details of existing tasks, such as the title, description, status, to ensure accurate and up-to-date information.
Delete Task: Users have the ability to remove tasks from the Kanban board by clicking the delete button in the task card.

## Code Quality

### Eslint and Prettier Integration
ESLint and Prettier are integrated into the project to enforce code quality standards and ensure consistent code formatting across the codebase. This helps maintain clean and readable code while minimizing errors and inconsistencies.

### Code comments and Documentation

Comprehensive inline comments and documentation are provided throughout the codebase to enhance readability and aid developers in understanding the functionality of each component and module.

## Conclusion
The Kanban Board project employs a robust frontend architecture, leveraging modern technologies and design patterns to deliver a user-friendly and feature-rich application for managing tasks effectively. By adhering to best practices and principles of software design, the project aims to provide a seamless and enjoyable user experience.

