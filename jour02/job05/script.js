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
    if ( window.scrollY >1020)
        {
            footer.classList.add('scroll3')
        }

    if ( window.scrollY <1020)
        {
            footer.classList.remove('scroll3')
        }
    if ( window.scrollY >1360)
        {
            footer.classList.add('scroll4')
        }

    if ( window.scrollY <1360)
        {
            footer.classList.remove('scroll4')
        }
    
});