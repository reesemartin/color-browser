import { useEffect, useState } from 'react'
import { Color, listColors } from '../model/colors'
import ColorCard from '../components/ColorCard'
import { Loading } from '../components/Loading'
import { Paging } from './Paging'

const ColorList: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>('')
  const [colors, setColors] = useState<Color[]>([])
  const [colorsTotal, setColorsTotal] = useState<number>(0)
  const [pagesTotal, setPagesTotal] = useState<number>(0)
  const [currentPage, setCurrentPage] = useState<number>(1)

  const limit = 12

  useEffect(() => {
    listColors(limit, (currentPage - 1) * 12)
      .then((x) => {
        setLoading(false)
        setColors(x.colors)
        setColorsTotal(x.colorsTotal)
      })
      .catch((err) => {
        setError(err.message)
        setColors([])
        setColorsTotal(0)
      })
  }, [currentPage])

  useEffect(() => {
    setPagesTotal(Math.ceil(colorsTotal / limit))
  }, [colorsTotal])

  return (
    <div>
      {error.length > 0 && <div className="text-red-600">{error}</div>}
      {!error.length && loading && <Loading className="min-h-96 py-32" />}
      {!error.length && !loading && (
        <div>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-x-12 sm:gap-y-6">
            {colors.map((color) => (
              <ColorCard key={color.hex + color.hue} color={color} />
            ))}
          </div>
          <Paging pagesTotal={pagesTotal} currentPage={currentPage} setPage={setCurrentPage} />
        </div>
      )}
    </div>
  )
}

export default ColorList
