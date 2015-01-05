var cats = [{
    name: 'Json',
    src: 'http://static.squarespace.com/static/52f11fc0e4b0c058f6093d71/t/53ee29dbe4b052f83849a3f3/1408117211608/Animals___Cats_Small_cat_calls_mom_046864_.jpg',
    numOfClick: 0
}, {
    name: 'Oliver',
    src: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcThtVuIQ7CBYssbdwtzZjVLI_uw09SeLmyrxaRQEngnQAked5ZB',
    numOfClick: 0
}]


function createCat(cats) {
    var wrapper = document.getElementsByClassName('wrapper')[0];
    var img;
    var caption;
    var numOfClick;
    for (var i = 0; i < cats.length; ++i) {
        img = document.createElement('img');
        caption = document.createElement('span');
        numOfClick = document.createElement('span');
        img.src = cats[i].src;
        caption.innerText = cats[i].name;
        wrapper.insertBefore(caption, null)
        wrapper.insertBefore(img, null)
        wrapper.insertBefore(numOfClick, null)

        img.addEventListener('click', function(e){
            console.log(e.target);
            var span = e.target.nextSibling.innerText;
            span = span || 0;
            span = parseInt(span) + 1;
            e.target.nextSibling.innerText = span;
        }, false)
    }
    return wrapper;
}
createCat(cats)