/**
 * Quick DOM Text Editing 1.0
 * Описание: Зажать клавишу "Ctrl" и кликнуть по тексту который требуется отредактировать.
 */
document.addEventListener('mousedown', function () {
    var handlers = {
        'click': function (event) {
            event.preventDefault();
            event.stopPropagation();
        },

        'blur': function () {
            this.contentEditable = false;
            this.style.backgroundColor = '';
            this.removeEventListener('blur', handlers.blur);
            this.removeEventListener('click', handlers.click);
        }
    }

    return function (event) {
        if (event.ctrlKey) {
            if (event.target.contentEditable != 'true') {
                event.target.contentEditable = true;
                event.target.style.backgroundColor = 'lemonchiffon';
                event.target.addEventListener('blur', handlers.blur);
                event.target.addEventListener('click', handlers.click);
                event.stopPropagation();
            }
        }
    }
}(), true);