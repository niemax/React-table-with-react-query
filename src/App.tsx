import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import BeerTable from "./components/BeerTable";
import queries from "./hooks/useQuery";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <BeerTable />
      </div>
    </QueryClientProvider>
  );
}

export default App;
