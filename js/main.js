document.addEventListener('DOMContentLoaded', function(){

    const signIn = document.querySelector('.signin');
    const modal = document.querySelector('.modal');
    const close = document.querySelector('.close');
    const submit = document.querySelector('.submit');
    const user = document.querySelector('#user');
    const pass = document.querySelector('#pass');

    signIn.addEventListener('click', function() {
        modal.style.display = 'block';
    });

    close.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    submit.addEventListener('click', function(e) {
        user.classList.add('error');
        pass.classList.add('error');
        e.stopPropagation()
    });

    user.addEventListener('click', function(){
        user.classList.remove('error')
    });

    pass.addEventListener('click', function(){
        pass.classList.remove('error')
    });

    modal.addEventListener('click', function(e) {
        if (e.target === user || e.target === pass || e.target === submit) {
            pass
        } else {    
            modal.style.display = 'none';
        }
    });

});