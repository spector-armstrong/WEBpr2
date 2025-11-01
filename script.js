const root = document.querySelector('body');

const background = document.createElement('div');
background.setAttribute('class', 'background');
background.style.height = "100vh";
background.style.backgroundColor = "#1a2a4f";
root.appendChild(background);

const insideBlock = document.createElement('div');
insideBlock.setAttribute('class', 'inside-block');
insideBlock.style.backgroundColor = "#F7A5A5";
insideBlock.style.width = "100vw";
insideBlock.style.margin = "3% 3%";
insideBlock.style.borderRadius = "25px"
background.appendChild(insideBlock);
