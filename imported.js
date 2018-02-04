new (function () {
        var ext = this; ext._shutdown = function () { };
        ext._getStatus = function () {
            return { status: 2, msg: 'Ready' } };
            ext.trueBlock = function () {return true };
            var descriptor = { blocks: [['b', 'enabled?', 'trueBlock'],] };
            ScratchExtensions.register('extension registered?', descriptor, ext) })();
