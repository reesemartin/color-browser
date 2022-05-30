import { Link } from 'react-router-dom'
import { SideNavToggle } from './SideNav'
import { SearchTool } from '../SearchTool'

const Header = () => {
  return (
    <div className="md:flex justify-between bg-theme-darkGray text-white p-6 py-3">
      <div className="flex justify-between mb-6 md:mb-0">
        <div>
          <Link
            className="block"
            to={{
              pathname: `/`,
            }}>
            <img src="/helpful-human-logo.svg" alt="Helpful Human" className="w-10" />
          </Link>
        </div>
        <div className="md:hidden flex items-center justify-end">
          <SideNavToggle />
        </div>
      </div>
      <div>
        <SearchTool />
      </div>
    </div>
  )
}

export default Header
