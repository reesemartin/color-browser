import 'dotenv/config'
import { writeFile } from 'fs/promises'
import { fileURLToPath } from 'url'
import * as path from 'path'
import listColors from './../lib/colorGenerator.js'

export const generateDBFileContents = (hues  = 36, shades = 10) => {
  const colors = listColors(hues, shades)
  const fileContents = `const colors = ${JSON.stringify(colors)}\nexport default colors`
  return fileContents
}

const dbInit = async () => {
  const fileContents = generateDBFileContents(process.env.HUES, process.env.SHADES)
  return await writeFile(path.join(path.dirname(fileURLToPath(import.meta.url)), 'colors.js'), fileContents, {
    encoding: 'utf8',
  })
}

export default dbInit
