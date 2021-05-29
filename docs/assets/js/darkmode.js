var darkmode = false;
function switchTheme() {

    const content = document.querySelector('body');
    const footer = document.querySelector('.footer');
    const header = document.querySelector('.header');
    const whiteLight = document.getElementById('whiteLight');
    const darkLight = document.getElementById('darkLight');

    if(darkmode == false){
        content.style.setProperty('--themecolor', 'rgba(0, 0, 0, 0.63)');
        content.style.setProperty('--fontcolor', 'rgb(255, 255, 255)');
        footer.style.setProperty('--themecolor', 'rgba(200, 200, 200, 0.63)');
        header.style.setProperty('--themecolor', 'rgba(200, 200, 200, 0.63)');
        whiteLight.classList.add('hidden')
        darkLight.classList.remove('hidden');
        darkmode = true;
    }else
    {
        content.style.removeProperty('--themecolor');
        content.style.removeProperty('--fontcolor');
        darkLight.classList.add('hidden')
        whiteLight.classList.remove('hidden');
        darkmode = false;
    }
}