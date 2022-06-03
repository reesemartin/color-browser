import { Color } from '../model/colors'
import { Link } from 'react-router-dom'

type ColorCardProps = {
  color: Color
  className?: string
}

const ColorCard: React.FC<ColorCardProps> = ({ color, className }) => {
  return (
    <Link
      to={{
        pathname: `/color/${encodeURIComponent(color.hex)}`,
      }}
      className={`block w-full xs:w-40 bg-white drop-shadow-md rounded-lg overflow-hidden  ${className ? className : ''}`}>
      <div className="h-40" style={{ background: color.hex }}></div>
      <div className="px-4 py-2 text-xl">{color.hex}</div>
    </Link>
  )
}

export default ColorCard
