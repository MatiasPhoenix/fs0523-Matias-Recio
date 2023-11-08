fetch('https://striveschool-api.herokuapp.com/books')
.then(res => res.json())
.then(res => {

    res.forEach(element => {
        let card = document.createElement('div');
        card.className = 'card col-12 col-md-6 col-xl-4';
        document.querySelector('.container').append(card);
        card.innerHTML = `<img class="h-75 card-img-top" src="${element.img}" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">${element.title}</h5>
            <p class="card-text">${element.price}</p>
            <a href="#" class="btn text-center btn-primary">Add to cart</a>`

        // let image = document.getElementsByClassName('card-img-top');
        
        // image.src = element.img;
        // document.querySelector('.cardImage').append(image);

        // let title = document.getElementsByClassName('.card-title');
        // title = element.title;
        // document.querySelector('.card-title').append(title);

        // let prices = document.getElementsByClassName('.card-text');
        // prices = element.price;
        // document.querySelector('.card-text').append(prices);
    });
    

})