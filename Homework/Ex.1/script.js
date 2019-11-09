document.querySelector('#search').oninput = debounce( function () {
    let val = this.value.trim();
    let elasticElem = document.querySelectorAll('.elastic li');
    if(val != ' ') {
        elasticElem.forEach(function (elem) {
            if(elem.innerText.startsWith(val) != true) {
                elem.classList.add('hide');
            } else {
                elem.classList.remove('hide');
            }
        });
    } else {
        elasticElem.forEach(function (elem) {
            elem.classList.remove('hide');
        });
    }
}, 1000);

function debounce(fn, interval) {
    let timer;
    return function debounced() {
        clearTimeout(timer);
        let args = arguments;
        let that = this;
        timer = setTimeout(function callOriginalFn() {
            fn.apply(that, args);
        }, interval);
    };
}