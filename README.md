# Job Portal UI - Mini Task

This is a simple job portal interface built with **React** and **Tailwind CSS**. The application includes features such as authentication, job listings, and a pricing plan page. This is a front-end only project with no back-end integration, focusing on the UI/UX design, form validation, and state management.

## Features

1. **Login Page**

   - Email and password fields for login.
   - "Remember me" checkbox to retain login state (no backend logic).
   - Basic form validation to ensure valid input.

2. **Register Page**

   - Full Name, Email, Mobile, Password, and Confirm Password fields.
   - Form validation to ensure all fields are completed and passwords match.
   - Dummy registration without backend logic.

3. **Job Listing Page**
   - Displays job cards with:
     - Job Title
     - Company Name
     - Location
     - Tags (skills)
     - "View Details" button to navigate to the job details page.
   - A search bar to filter jobs by:
     - Location (dropdown)
     - Skills (multi-select)
4. **Job Details Page**

   - Clicking "View Details" on a job card reveals:
     - Full job description
     - Responsibilities
     - Skills Required
     - "Apply" button (dummy functionality)

5. **Plans Page**
   - Shows different company plans:
     - Plan Name
     - Duration
     - Price
     - Features List
   - "Buy Now" or "Select Plan" button (no payment integration)

## Technologies Used

- **React** - A JavaScript library for building user interfaces.
- **Tailwind CSS** - A utility-first CSS framework for creating responsive, modern UIs.
- **ShadCN UI**: A component library that provides modern UI components for building beautiful user interfaces.
- **Lucide-React**: For using icons in the app.
- **React Hooks**: For managing state and side effects within functional components.
- **React Router** - For handling client-side routing and navigation.
- **React Context API / Redux** - For managing authentication state (optional).
- **Form Validation** - Basic form validation implemented using vanilla JavaScript.
- **LocalStorage / SessionStorage** - Used to persist the authentication state.

## Setup

### Prerequisites

Make sure you have **Node.js** and **npm** installed on your machine. You can download them from [Node.js official website](https://nodejs.org/).

### Clone the repository

```bash
git clone https://github.com/your-username/job-portal-ui.git
cd job-portal-ui
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm start
```

This will start the app at `http://localhost:3000` in your browser.

## Folder Structure

```
/src
  /components       # Reusable components (buttons, form elements, etc.)
  /pages           # Pages such as Login, Register, Job Listings, Job Details, and Plans
  /styles          # Tailwind CSS configurations and custom styles
  /utils           # Utility functions for validation, etc.
  /lib             # Libraries
  /routes          # For handling routes and route guard
  /store           # For handling Redux
  /context         # Authentication state management using React Context API (or Redux if preferred)
  /assets          # Images, icons, and other assets
```

## How to Use

- **Login Page**: Enter your email and password to log in. Use the "Remember me" checkbox to store the login state.
- **Register Page**: Create a new user by filling in the required fields (Full Name, Email, Mobile, Password).
- **Job Listing Page**: View all available job listings. Use the search bar to filter jobs by location or skills.
- **Job Details Page**: Click on "View Details" to see the full job description, responsibilities, and skills required.
- **Plans Page**: View the pricing plans and features for different plans. Click "Select Plan" to simulate selecting a plan.

## Development Notes

- **Responsive Design**: The app is fully responsive, built using **Tailwind CSS** for ease of styling.
- **State Management**: The authentication state is managed through **React Context API** (or **Redux** if preferred). Use `localStorage` to persist the login state.
- **Dummy Login/Registration**: No backend is required for this project. The authentication is handled via local state and `localStorage`.

## Future Enhancements

- Backend integration for authentication and job listings.
- Real payment gateway integration for the "Buy Now" functionality on the Plans page.
- Additional features like saving jobs to a user profile, applying for jobs, etc.
- Enhanced job search filters (e.g., by job type, salary range).

## License

This project is open source and available under the [MIT License](LICENSE).

---
