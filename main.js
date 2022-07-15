
    fetch('https://solovey.com.ua/test/data.json')
        .then(res => {return res.json()})
        .then(data => {
            banner(data);
        });



const banner = (info) => {
    const elemLength = info.sneakers.length;
    const container = document.querySelector('.owl-carousel');
   //Render
    for(let i = 0; i < elemLength;i++) {
        const container_item = document.createElement('div');
        const title = document.createElement('h2');
        const price = document.createElement('span');
        const image = document.createElement('img');
        const orderLink = document.createElement('a');
        const orderButton = document.createElement('button');
        orderButton.classList.add('order-button');
        price.classList.add('price');
        title.classList.add('title');
        title.innerHTML = info.sneakers[i].model;
        price.innerHTML = info.currency + info.sneakers[i].price;
        orderButton.innerHTML = "ORDER NOW!";
        image.setAttribute('src', info.sneakers[i].image_url);
        orderLink.setAttribute('href', info.sneakers[i].link);
        orderLink.classList.add('order_link');
        container_item.append(orderLink);
        orderLink.append(title);
        orderLink.append(price);
        orderLink.append(image);
        orderLink.append(orderButton);
        container.append(container_item);
    }
    //use carousel
    let owl = $('.owl-carousel');
    owl.owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        items: 1,
        animateOut: 'fadeOut',
        autoplayTimeout:2500,
        autoplayHoverPause:true,
    });
};



