const handleClick = () => {
    allButtons =document.querySelectorAll('.button'); 
    allButtons.forEach(button => { 
        button.addEventListener('click', clickBtn => console.log(clickBtn.target.textContent));
    })
};
