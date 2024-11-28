import './App.css'
import Header from './components/Header'
import { SidebarProvider } from './context/SidebarContext'


function App() {
  
  return (
    
    <SidebarProvider>
      <Header />
      <div className="min-h-screen p-8 max-csm:px-0"></div>
     </SidebarProvider>
  )
}

export default App
