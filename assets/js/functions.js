
window.onload = function(){
    document.querySelectorAll('.faq__spoiler-heading').forEach(function(spoiler){
        spoiler.addEventListener('click', showSpoilerText);
    });
    function showSpoilerText(){
        this.classList.toggle("spoiler-active");
        this.nextElementSibling.classList.toggle("spoiler-active");
    }
}