// When working with color values it can sometimes be useful to extract the individual red, green, and blue (RGB) component values for a color. Implement a function that meets these requirements:

// Accepts a case-insensitive hexadecimal color string as its parameter (ex. "#FF9933" or "#ff9933")
// Returns a Map<String, int> with the structure {r: 255, g: 153, b: 51} where r, g, and b range from 0 through 255
// Note: your implementation does not need to support the shorthand form of hexadecimal notation (ie "#FFF")

function hexStringToRGB(hexString: string): {
  r: number;
  g: number;
  b: number;
} {
  let a = hexString.split('').splice(0, 1);

  console.log(Array.from(hexString));

  return { r: 0, g: 0, b: 0 };
}

hexStringToRGB('#FF9933');
