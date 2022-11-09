'use strict';
/*jshint multistr: true */

class DomElement {
    constructor(selector, height, width, bg, fontSize) {
        this.selector = selector;
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
    }

    newMethod() {

        const string = this.selector;

        if (string.indexOf('.') === 0) {

            const newElement = document.createElement('div');

            document.body.append(newElement);
            newElement.className = string.replace('.', '');
            newElement.textContent = '貴様は弱くない、私は強すぎるだけだ';
            newElement.style.cssText = 'height: ' + this.height + '; \
            width: ' + this.width + '; \
            background: ' + this.bg + '; \
            font-size: ' + this.fontSize;

        }
        if (string.indexOf('#') === 0) {

            const newElement = document.createElement('p');
            document.body.append(newElement);
            newElement.setAttribute('id', string.replace('#', ''));
            newElement.textContent = 'you are not bad, but not good either';
            newElement.style.cssText = 'height: ' + this.height + '; \
            width: ' + this.width + '; \
            background: ' + this.bg + '; \
            font-size: ' + this.fontSize;

        }
    }
}
const newObject = new DomElement('#selector', '4000px', '200px', 'blue', '44px');
newObject.newMethod();