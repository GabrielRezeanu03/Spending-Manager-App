
// Line 1-6: Import the required modules and components
import "./App.css";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";

import { GlobalProvider } from "./context/GlobalState";

function App() {
  // Line 15-23: Render the main application structure
  return (
    // Line 16: Wrap the entire application with the GlobalProvider component
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;


// Imports: The file imports necessary modules and components from React, as well as custom components from the application and the GlobalProvider from the context folder.

// App Component: The App component is defined as a functional component. This component serves as the root component of the application.

// GlobalProvider: The entire application is wrapped inside the GlobalProvider component. This component provides the global state to all components within its tree using the Context API.

// Render Structure: Inside the App component, the main structure of the application is rendered. This includes rendering the Header, Balance, IncomeExpense, TransactionList, and AddTransaction components.

// Component Rendering: Each component is rendered within the JSX structure. These components are responsible for rendering different parts of the application, such as the header, balance, transaction list, and form for adding transactions.