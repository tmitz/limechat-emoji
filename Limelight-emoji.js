String.prototype.startsWith = function (s) {
    return this.indexOf(s) == 0;
}

Element.prototype.empty = function() {
    while (this.firstChild) this.removeChild(this.firstChild);
}

document.addEventListener("DOMNodeInserted", function(e) {
    var line = e.target;
    switch (line.getAttribute("type")) {
        case "privmsg":
            // emoji
            var imgbase = "https://raw.github.com/tmitz/rails_emoji/master/vendor/assets/images/emojis/";
            var msg = line.getElementsByClassName('message').item(0);
            if (/http:/.test(msg.innerHTML)) return; 
            var emoji = msg.innerHTML.match(/:([\d\w+-_]+):/);
            var icon = document.createElement('img');
            if (!emoji) return;
            icon.className = 'inlineimage';
            icon.src = imgbase + emoji[1] + '.png';
            line.appendChild(icon);
            msg.innerHTML = msg.innerHTML.replace(/:[\d\w+-_]+:/g, '');
            break;
    }
}, false);
