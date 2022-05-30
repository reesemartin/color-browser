import SideNav from './SideNav'
import Search from '../../views/Search'
import ColorDetail from '../../views/ColorDetail'
import { Routes, Route } from 'react-router-dom'

const MainContent = () => {
  return (
    <div className="h-full relative flex items-stretch">
      <SideNav />
      <div className="p-6 pt-16 grow">
        <div className="max-w-7xl m-auto">
          <Routes>
            <Route path="/" element={<Search />} />
            <Route path="/color/:colorHex" element={<ColorDetail />} />
            <Route path="*" element={<Search />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default MainContent
