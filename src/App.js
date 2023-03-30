//Make the necessary imports
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import BlogDetails from "./pages/BlogDetails";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

// initialize apollo client
const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache()
})

function App() {
  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <div className="w-screen bg-gray-100 h-screen overflow-y-auto">
          <div className="w-4/5 mx-auto mt-4"> 
            <Header />
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="blog/:id" element={<BlogDetails />} />
            </Routes>
          </div>
        </div>
      </ApolloProvider>
    </BrowserRouter>
  );
}

export default App;

