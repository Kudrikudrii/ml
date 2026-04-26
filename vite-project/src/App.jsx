import { QueryClient, QueryClientProvider } from '@tanstack/react-query'   
import TestPage from './pages/TestPage'

const queryClient = new QueryClient()

const App = () => {

  return (
    <QueryClientProvider client={queryClient}>
        <TestPage />
    </QueryClientProvider>
  )
}

export default App
