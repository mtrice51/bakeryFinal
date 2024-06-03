const stars=document.querySelectorAll('.star');

stars.forEach(star => {
    star.addEventListener('click', (e) => {
        const rating = parseInt(e.target.getAttribute('data-value'));
        console.log("You rated:", rating);
        stars.forEach((s, index) => {
            if(index<rating){
                s.classList.add('rated');
            }else{
                s.classList.remove('rated');
            }
            })
        })
    })