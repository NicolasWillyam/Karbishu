const sr = ScrollReveal({
    distance: '100px',
    duration: 3000,
    // reset: true,
})


sr.reveal(`.reveal_top`,{
    origin: 'top',
    interval: 100,
})

sr.reveal(`.reveal_left`,{
    origin: 'left',
})

sr.reveal(`.reveal_right`,{
    origin: 'right',
    interval: 100,
})