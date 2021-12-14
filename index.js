const { createCanvas } = require('canvas');

const getInitialsFromArray = (arr) => {
  let textResult = '';

  for (var i in arr) {
    if (i == 0 || i == arr.length - 1) {
      textResult += arr[i].substring(0, 1);
    }
  }

  return textResult;
};

const getInitials = (text) => {
  let input = text.toUpperCase();
  let result = input;

  let inputSeparetedBySpaces = input.split(' ');
  if (inputSeparetedBySpaces.length > 1) {
    result = getInitialsFromArray(inputSeparetedBySpaces);
  } else {
    if (input.length > 2) {
      result = input.substring(0, 2);
    }
  }

  return result;
};

exports.getImageBuffer = ({
  size,
  bgColor,
  color,
  text,
  isRounded,
  type
}) => {
  size = size || 100;
  bgColor = bgColor || '#ffffff';
  color = color || '#000000';
  text = text || 'A A';
  const canvas = createCanvas(size, size, type == 'svg' ? 'svg' : 'pdf');
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, size, size);

  ctx.fillStyle = color;
  ctx.font = `${(size * 50) / 100}px Roboto`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(getInitials(text), size / 2, size / 2);

  if (isRounded) {
    ctx.globalCompositeOperation = 'destination-atop';
    ctx.beginPath();
    ctx.arc(size / 2, size / 2, size / 2, 0, 2 * Math.PI);
    ctx.fill();
  }

  const buffer = canvas.toBuffer(type == 'svg' ? 'image/svg+xml' : 'image/png');
  return buffer;
};