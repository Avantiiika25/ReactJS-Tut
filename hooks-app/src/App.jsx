import CounterDashboard from "./components/CounterDashboard";
import Dashboard from "./components/Dashboard";
import CounterProvider from "./context/CounterContext";
import UserProvider from "./context/UserProvider";

function App() {
  return (
   //   <UserProvider>
   //      <Dashboard />
   //   </UserProvider>

   <CounterProvider>
      <CounterDashboard />
   </CounterProvider>
  )
}

export default App;