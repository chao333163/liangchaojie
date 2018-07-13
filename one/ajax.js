function ajax(params) {
    var _default = {
        method: 'GET',
        url: null,
        data: null,
        timeout: 1000,
        dataType: 'json'
    }
    for (var i in params) {
        _default[i] = params[i];
    }
    var xhr = getXHR();
    for (var item in _default.data) {

        if (_default.url.indexOf('?') == -1) {
            _default.url += '?' + Date.now();
        } else {
            _default.url += '&' + Date.now();
        }
    }
    xhr.open(_default.method, _default.url, true);
    if (_default.dataType == 'json') {
        _default.data = JSON.stringify(_default.data);
    }
    _default.data = _default.method == 'GET' ? null : _default.data;
    xhr.send(_default.data);
    return new Promise(function (resolved, reject) {
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var json = xhr.responseText;
                json = _default.dataType == 'json' ? JSON.parse(json) : json;
                resolved(json);
            }
        }
    })
}