const filter = () => {
    const input = document.getElementById('search');
    const filterValue = input.value.toUpperCase();
    const colorList = document.getElementById('color_list');
    const color = colorList.getElementsByTagName('li');

    for(i=0; i<color.length; i++){
        let filterColor = color[i].getElementsByTagName('a')[0];

        if(filterColor.innerHTML.toUpperCase().indexOf(filterValue) > -1){
            color[i].classList.remove('inactive');

        } else {
            color[i].classList.add('inactive');
        }
    }

    const mostAccurateColor = document.querySelector('#color_list li:not(.inactive) a')

    if(mostAccurateColor && filterValue){
        document.title = mostAccurateColor.innerHTML
    } else {
        document.title = 'Color filter';
    }
}

const changeColor = (event) => event.style.color = 'green';

const clearForm = () => {
    document.getElementById('search').value = '';
    document.title = 'Color filter';
}
