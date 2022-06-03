import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Color, getColor } from '../model/colors'
import { Loading } from '../components/Loading'
import { CustomButton } from '../components/CustomButton'
import ColorCard from '../components/ColorCard'

type MainColorCardProps = {
  color: Color
}

const MainColorCard: React.FC<MainColorCardProps> = ({ color }) => {
  return (
    <div className="block w-full bg-white drop-shadow-md rounded-lg border border-theme-darkGray overflow-hidden">
      <div className="h-40 xs:h-80 sm:h-[50vh]" style={{ background: color.hex }}></div>
      <div className="p-4 xs:p-8 text-3xl">{color.hex}</div>
    </div>
  )
}

const ColorDetail: React.FC = () => {
  const navigate = useNavigate()
  const { colorHex } = useParams()
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>('')
  const [color, setColor] = useState<Color>()

  useEffect(() => {
    if (colorHex) {
      getColor(colorHex)
        .then((x) => {
          setLoading(false)
          setColor(x)
        })
        .catch((err) => {
          setError(err.message)
          setColor(undefined)
        })
    } else {
      setError('Missing required color hex to look up')
    }
  }, [colorHex])

  return (
    <div>
      {error.length > 0 && <div className="text-red-600">{error}</div>}
      {!error.length && loading && <Loading className="min-h-96 py-32" />}
      {!error.length && !loading && !color && <div className="text-red-600">Color not found</div>}
      {!error.length && !loading && color && (
        <div>
          <MainColorCard color={color} />
          <div className="flex flex-wrap justify-center gap-4 sm:gap-x-12 sm:gap-y-6 my-6">
            {color.family?.colors
              ?.filter((siblingColor) => siblingColor.hex !== color.hex && siblingColor.hue === color.hue)
              .map((siblingColor) => (
                <ColorCard key={siblingColor.hex + siblingColor.hue} color={siblingColor} className="inline-block" />
              ))}
          </div>
          <CustomButton
            onClick={() => {
              navigate(`/`)
            }}
            className="w-auto m-auto mt-8 px-16">
            Clear
          </CustomButton>
        </div>
      )}
    </div>
  )
}

export default ColorDetail
