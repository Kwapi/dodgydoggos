$('img').click(function () {
    alert('bork bork');

    // track everything / control everyone
    ga('send', {
        hitType: 'click',
        eventCategory: 'Doggo',
        eventAction: 'borked',
    });

});




// hack away doggo
console.log('%c       ', 'font-size: 200px; background: url(https://media.tenor.com/images/da40fc8893eabfdb611d6677388a3472/tenor.gif) no-repeat;');
