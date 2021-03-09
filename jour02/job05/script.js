const foot = document.querySelector('.footer')




window.addEventListener('scroll', () => {

    if ( window.scrollY >340)
        {
            footer.classList.add('scroll')
        }
        
    if ( window.scrollY <340)
        {
            footer.classList.remove('scroll')
        }

    if ( window.scrollY >680)
        {
            footer.classList.add('scroll2')
        }

    if ( window.scrollY <680)
        {
            footer.classList.remove('scroll2')
        }
    
});