const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;

for (let key of ps) {
    key.style.backgroundColor = backgroundColorBody;
    key.style.color = "#fff";
}
