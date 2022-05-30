import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from '../../state/hooks'
import { updateSideNavOpen } from '../../state/sideNavOpenSlice'
import { ColorFamily, listColorFamilies, getRandomColorHex } from '../../model/colors'
import { Loading } from '../Loading'
import { CustomButton } from '../CustomButton'

export const SideNavToggle: React.FC = () => {
  const sideNavOpen = useAppSelector((state) => state.sideNavOpen)
  const dispatch = useAppDispatch()

  const setSideNavOpen = (newSideNavOpen: boolean) => {
    dispatch(updateSideNavOpen(newSideNavOpen))
  }

  return (
    <div>
      <div
        className="group"
        onClick={() => {
          setSideNavOpen(!sideNavOpen)
        }}>
        <svg
          className="cursor-pointer h-8 w-8"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor">
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
        </svg>
      </div>
    </div>
  )
}

type SideNavItemProps = {
  link: string
  children: React.ReactNode
  setSideNavOpen: Function
}

const SideNavItem: React.FC<SideNavItemProps> = ({ link, children, setSideNavOpen }) => {
  return (
    <li>
      <Link
        to={{
          pathname: link,
        }}
        onClick={() => setSideNavOpen(false)}
        className="block py-2 px-6 hover:bg-gray-300 transition-all">
        {children}
      </Link>
    </li>
  )
}

const SideNav: React.FC = () => {
  const navigate = useNavigate()
  const sideNavOpen = useAppSelector((state) => state.sideNavOpen)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>('')
  const [colorFamilies, setColorFamilies] = useState<ColorFamily[]>([])
  const dispatch = useAppDispatch()

  const customSort = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'brown', 'gray']

  const setSideNavOpen = (newSideNavOpen: boolean) => {
    dispatch(updateSideNavOpen(newSideNavOpen))
  }

  const closeSideNav = (e: KeyboardEvent) => {
    let keycode = e.key
    if (keycode === 'Escape') {
      setSideNavOpen(false)
    }
  }

  useEffect(() => {
    listColorFamilies()
      .then((x) => {
        setLoading(false)
        setColorFamilies(x.families)
      })
      .catch((err) => {
        setError(err.message)
      })

    document.body.addEventListener('keydown', closeSideNav)

    // cleanup this component
    return () => {
      document.body.removeEventListener('keydown', closeSideNav)
    }
  }, [])

  return (
    <div
      className={`h-full w-full md:w-60 md:pt-16 shrink-0 md:static fixed z-50 top-0 left-0 bg-theme-lightGray md:border-r border-theme-gray md:drop-shadow-md transition-all duration-500 ${
        sideNavOpen ? '' : '-left-full'
      }`}>
      <div className="md:hidden text-right md:pt-2 md:pr-2">
        <div
          className="inline-block text-gray-900 group text-lg cursor-pointer p-2 pt-5 pr-5"
          tabIndex={-1}
          onClick={() => setSideNavOpen(false)}>
          <svg
            className="h-10 w-10 md:h-8 md:w-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </svg>
        </div>
      </div>
      <div className="text-gray-900 text-left text-xl">
        {error.length > 0 && <div className="text-red-600">{error}</div>}
        {!error.length && loading && <Loading className="min-h-32 py-12" />}
        {!error.length && !loading && (
          <div>
            <div className="px-6">
              <CustomButton
                onClick={() => {
                  getRandomColorHex().then((hex) => {
                    navigate(`/color/${encodeURIComponent(hex)}`)
                    setSideNavOpen(false)
                  })
                }}
                className="mb-6">
                Random Color
              </CustomButton>
            </div>
            <ul>
              {colorFamilies
                .sort((a, b) => {
                  for (let i = 0; i < customSort.length; i++) {
                    const sortColor = customSort[i]
                    if (b.name.toLowerCase() === sortColor) {
                      return 1
                    }
                    if (a.name.toLowerCase() === sortColor) {
                      return -1
                    }
                  }

                  // standard alpha sort
                  return a.name.toLowerCase().localeCompare(a.name.toLowerCase())
                })
                .map((x, i) => {
                  return (
                    <SideNavItem key={i} link={`/family/${x.name}`} setSideNavOpen={setSideNavOpen}>
                      {x.name}
                    </SideNavItem>
                  )
                })}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default SideNav
