function Popup(){
    this.oBox = document.getElementById("box");
    this.oTitle = document.getElementById("title");
    this.sureBtn = document.getElementById("sure");
    this.negativeBtn = document.getElementById("negative");
    this.oDel = document.getElementById("del");
    this.oFilter = document.getElementById("filter");
    this.disX = 0;
    this.disY = 0;
    this.init();
}
Popup.prototype.init = function () {
    var that = this;
    this.oTitle.onmousedown = function (e) {
        var e = e || event;
        e.preventDefault ? e.preventDefault() : e.returnValue = false;
        that.down(e);
    }
    this.click();
}

Popup.prototype.down = function (e) {
    var that = this;
    this.disX = e.offsetX;
    this.disY = e.offsetY;
    document.onmousemove = function (e) {
        var e = e || window.event;
        that.move(e);
    };
    document.onmouseup = function () {
        that.up();
    }
}

Popup.prototype.move = function (e){
    this.oBox.style.left = e.clientX - this.disX + 'px';
    this.oBox.style.top = e.clientY - this.disY + 'px';
}

Popup.prototype.up = function (){
    document.onmousemove = null;
    document.onmouseup = null;
}

Popup.prototype.click = function (){
    var that = this;
    this.sureBtn.onclick = function (){
        that.oBox.style.display = "none";
        that.oFilter.style.display = "none";
    }
    this.negativeBtn.onclick = function (){
        that.oBox.style.display = "none";
        that.oFilter.style.display = "none";
    }
    this.oDel.onclick = function (){
        that.oFilter.style.width = document.documentElement.clientWidth+'px';
		that.oFilter.style.height = document.documentElement.clientHeight+'px';
        that.oFilter.style.display = "block";
        that.oBox.style.display = "block"

    }
}
new Popup();


