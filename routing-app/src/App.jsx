// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// function Home() {
//   return <h2>Home Page</h2>
// }

// function About() {
//   return <h2>About Page</h2>
// }

// function App() {
//   return (
//     <BrowserRouter>
//       <nav>
//         <Link to="/">Home</Link> | <Link to="/about">About</Link>
//       </nav>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App;

// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import Dashboard from "./Dashboard";
// import Profile from "./Profile";
// import Settings from "./Settings";

// function App() {
//   return (
//     <BrowserRouter>
//       <nav>
//         <Link to="/dashboard">Dashboard</Link>
//       </nav>
//       <Routes>
//         <Route path="/dashboard" element={<Dashboard />}>
//           <Route path="profile" element={<Profile />} />
//           <Route path="settings" element={<Settings />} />
//           <Route />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App;






// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Link,
//   Outlet,
//   useParams,
// } from "react-router-dom";

// function Dashboard() {
//   return (
//     <div>
//       <h1>🏠 Dashboard</h1>
//       <nav>
//         <Link to="profile">Profile</Link> | <Link to="settings">Settings</Link>{" "}
//         | <Link to="users/101">User Details</Link>
//       </nav>
//       <Outlet />
//     </div>
//   );
// }

// function Profile() {
//   return <h2>🤵Profile Page</h2>;
// }

// function Settings() {
//   return <h2>⚙️ Settings Page</h2>;
// }

// function UserDetails() {
//   const { userId } = useParams();
//   return <h2>📄 User Details for User ID: {userId}</h2>;
// }

// function Home() {
//   return <h1>🌍 Welcome to Home Page</h1>
// }

// function NotFound() {
//   return <h1>❌ 404 - Page Not Found</h1>
// }

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />

//         <Route path="/dashboard" element={<Dashboard />}>
//           <Route path="profile" element={<Profile />} />
//           <Route path="settings" element={<Settings />} />
//           <Route path="users/:userId" element={<UserDetails />} />
//         </Route>

//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App;





// Activity 1
// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Link,
// } from "react-router-dom";

// function Home() {
//   return <h2>📚 Welcome to the Book Store</h2>
// }

// function Books() {
//   return <h2>📖 Explore our Book Collection</h2>
// }

// function App() {
//   return (
//     <BrowserRouter>
//       <nav>
//         <Link to="/">Home</Link> | <Link to="/books">Books</Link>
//       </nav>
//       <hr />
//       <Routes>
//         <Route path="/" element={<Home />}/>
//         <Route path="/books" element={<Books />} />
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App;



