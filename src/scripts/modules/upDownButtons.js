module.exports = () => {
  $(".go__to-bottom").on("click", function (e) {
    e.preventDefault();
    let section  = $('section')[1],
        top = $(section).offset().top;
    $('body,html').animate({scrollTop: top}, 800);
    });

$(".go__to-top").on("click", function (e) {
    e.preventDefault();
    let section  = $('section')[0],
        top = $(section).offset().top;
    $('body,html').animate({scrollTop: top}, 800);
    });
}