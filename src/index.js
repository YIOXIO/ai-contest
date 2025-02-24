import './index.css'


function setOpacity(opacityElement) {
    const width = window.innerWidth;
    const minWidth = 320;
    const maxWidth = 1440;
    const minOpacity = 0.1;
    const maxOpacity = 1;
    const opacity = minOpacity + (maxOpacity - minOpacity) * ((width - minWidth) / (maxWidth - minWidth));
    opacityElement.style.opacity = Math.min(Math.max(opacity, minOpacity), maxOpacity);
}




document.querySelectorAll('.opacity').forEach(element => {
    setOpacity(element)
    window.addEventListener('load', () => setOpacity(element));
    window.addEventListener('resize', () => setOpacity(element));
})


document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.prizes__accordion-button');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const content = this.nextElementSibling;

            // Закрываем все открытые блоки
            document.querySelectorAll('.prizes__accordion-content').forEach(item => {
                if (item !== content) {
                    item.classList.remove('active');
                }
            });

            // Открываем/закрываем текущий блок
            content.classList.toggle('active');
        });
    });
});