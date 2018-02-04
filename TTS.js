new (function () {
    var ext = this; ext.speak_text = function (text, callback) {
        var u = new SpeechSynthesisUtterance(text.toString());
        u.onend = function (event) {
            if (typeof callback == "function") callback() 
        };
        speechSynthesis.speak(u)
    };
    ext.TTSenabled = function () {
        return window.SpeechSynthesisUtterance != undefined
    }; ext._shutdown = function () { }; ext._getStatus = function () {
        if (window.SpeechSynthesisUtterance === undefined) {
            return {status: 1, msg: 'Your browser does not support text to speech. Try using Google Chrome or Safari.' }
        } return { status: 2, msg: 'Ready' }
    };
    var descriptor = { blocks: [['w', 'speak %s', 'speak_text', 'Hello!'], ['b', 'text to speech enabled', 'TTSenabled']], };
    ScratchExtensions.register('Text to Speech', descriptor, ext) })();
