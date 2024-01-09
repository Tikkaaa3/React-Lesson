import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Contact } from "./pages/Contact";
import { Navbar } from "./pages/navbar";
import { useState, createContext } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const AppContext = createContext()

function App() {
  const [username, setUsername] = useState('')
  const client = new QueryClient({defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }})
  return (
    <AppContext.Provider value={{ username, setUsername }}>
      <div className="App">
        <QueryClientProvider client={client}>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
            </Routes>
          </Router>
        </QueryClientProvider>
      </div>
    </AppContext.Provider>
  );
}

export default App;
