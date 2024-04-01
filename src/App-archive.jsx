// import { Suspense } from "react";
// import React from "react";
// import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
// const Landing = React.lazy(() => import("./pages/Landing"));
// const Dashboard = React.lazy(() => import("./pages/Dashboard"));

// export function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <Suspense fallback={<div>Loading...</div>}>
//           <Routes>
//             <Route path="/dashboard" element={<Dashboard />}></Route>
//             <Route path="/" element={<Landing />}></Route>
//           </Routes>
//         </Suspense>
//       </BrowserRouter>
//     </>
//   );
// }
// function Appbar() {
//   const navigate = useNavigate();
//   return (
//     <>
//       <div style={{ backgroundColor: "blue", color: "white" }}>Hello world</div>
//       <button
//         onClick={() => {
//           navigate("/");
//         }}
//       >
//         Landing page
//       </button>
//       <button
//         onClick={() => {
//           navigate("/dashboard");
//         }}
//       >
//         Dashboard
//       </button>
//     </>
//   );
// }

// export default App;
