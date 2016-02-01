app.controller('MainController', function () {
	//this.test = "Hello,are you there?"
	this.setActiveImg = function (type) {
		if (this.activeImg === type) {
			this.activeImg = "";
		} else {
			this.activeImg = type;
		}
	}
})