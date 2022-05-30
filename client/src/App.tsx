import './App.css'
import Header from './components/layout/Header'
import MainContent from './components/layout/MainContent'

const App = () => {
  return (
    <div className="h-full">
      <div className="h-full flex flex-col">
        <Header />
        <div className="grow">
          <MainContent />
        </div>
      </div>
    </div>
  )
}

export default App
