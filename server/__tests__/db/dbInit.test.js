import { generateDBFileContents } from '../../db/dbInit'

describe('generateDBFileContents', () => {
  it('generates contents for a file that matches the provided hue and shade count', () => {
    const expectedContents =
      'const colors = [{"hex":"#2caf2c","hue":120,"family":"Green"},{"hex":"#18d818","hue":120,"family":"Green"},{"hex":"#00ff00","hue":120,"family":"Green"},{"hex":"#3cdd3c","hue":120,"family":"Green"},{"hex":"#70c270","hue":120,"family":"Green"},{"hex":"#2c2caf","hue":240,"family":"Blue"},{"hex":"#1818d8","hue":240,"family":"Blue"},{"hex":"#0000ff","hue":240,"family":"Blue"},{"hex":"#3c3cdd","hue":240,"family":"Blue"},{"hex":"#7070c2","hue":240,"family":"Blue"},{"hex":"#af2c2c","hue":360,"family":"Red"},{"hex":"#d81818","hue":360,"family":"Red"},{"hex":"#ff0000","hue":360,"family":"Red"},{"hex":"#dd3c3c","hue":360,"family":"Red"},{"hex":"#c27070","hue":360,"family":"Red"},{"hex":"#4c3229","hue":16,"family":"Brown"},{"hex":"#7b5142","hue":16,"family":"Brown"},{"hex":"#a66e59","hue":16,"family":"Brown"},{"hex":"#c9a89c","hue":16,"family":"Brown"},{"hex":"#ede2de","hue":16,"family":"Brown"},{"hex":"#3b3b3b","hue":0,"family":"Gray"},{"hex":"#5e5e5e","hue":0,"family":"Gray"},{"hex":"#808080","hue":0,"family":"Gray"},{"hex":"#b3b3b3","hue":0,"family":"Gray"},{"hex":"#e6e6e6","hue":0,"family":"Gray"}]\nexport default colors'
    expect(generateDBFileContents(3, 5)).toEqual(expectedContents)
  })
})
