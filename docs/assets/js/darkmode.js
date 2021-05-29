var darkmode = false;

function switchTheme() {
    const content = document.querySelector('.content');
    if(darkmode == false){
        content.style.setProperty('--themecolor', 'rgba(0, 0, 0, 0.63)');
        content.style.setProperty('--fontcolor', 'rgb(255, 255, 255)');
        darkmode = true;
    }else
    {
        content.style.removeProperty('--themecolor');
        content.style.removeProperty('--fontcolor');
        darkmode = false;
    }
}