import './App.css'
import Header from './components/Header'
import { LiveUserActivity } from './components/LiveUserActivity'
import { StatsCard } from './components/StatsCard'
import { SidebarProvider } from './context/SidebarContext'
import { statsData } from './data/mockdata'
import { Sidebar } from './layout/Sidebar'


function App() {
  
  return (
    
    <SidebarProvider>
        <Sidebar />
        <Header />
        <div className="min-h-screen p-8 max-csm:px-0">
          <div className="grid min-cmd:grid-cols-3  max-cmd:grid-cols-2   gap-6 max-cumd:grid-cols-2  max-clumd:!grid-cols-1 m-[20px]">
            {statsData.map((stat, index) => (
              <StatsCard
                key={index}
                title={stat.title}
                periods={stat.periods}
              />
            ))}
          </div>
          <div className='my-[30px] mx-[20px]'>
            <LiveUserActivity />
          </div>
        </div>
    </SidebarProvider>

  )
}

export default App
