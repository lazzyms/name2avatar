# name-to-avatar
**Description**: This package helps you generate a svg/png image buffer from the initials (extracted from name).
### Installation
`npm i name2avatar`
### Usage
    const name2avatar = require('name2avatar');
    const options = {
	    size: 200, // Image size in px
	    bgColor: '#ffffff', // Background color
	    color: '#000000', // Font color
	    text: 'John Doe', // Full name
	    isRounded: true, // want a circular radius?
	    type: 'svg' // or 'png'
    };
    const imgBuffer = name2avatar.getImageBuffer(options);
    
    // Optional
    const  fs = require('fs');
    fs.writeFileSync(`avatar.svg`, imgBuffer);