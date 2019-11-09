let nav = document.getElementById('navigation');
let elements = nav.getElementsByTagName('li');

for (let i = 0; i < elements.length; i++) {
    elements[i].onclick = function(argument) {
        if (elements[i].id === 'background') {
            elements[i].id+="-blue";
            document.getElementById('body').style.background = 'blue';
        } else if (elements[i].id === 'background-blue') {
            elements[i].id = 'background';
            document.getElementById('body').style.background = 'white';
        }

        if (elements[i].id === 'text-color') {
            elements[i].id += '-yellow';
            document.getElementById('text').style.color = 'yellow';
        } else if (elements[i].id === 'text-color-yellow') {
            elements[i].id = 'text-color';
            document.getElementById('text').style.color = 'black';
        }

        if (elements[i].id === 'fontsize') {
            elements[i].id += '-50px';
            document.getElementById('text').style.fontSize = '50px';
        } else if (elements[i].id === 'fontsize-50px') {
            elements[i].id = 'fontsize';
            document.getElementById('text').style.fontSize = '30px';
        }
    }
}