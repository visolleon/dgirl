(function (g) {
	g.onload = function () {
		var ie = !!window.ActiveXObject;
		var w = document.getElementById('words');
			p = document.getElementById('poster');

		if(ie) {
			$(w).hide();
			$(p).show();
		}
		else {
			setTimeout(function () {
				$(w).addClass('animated bounceOut');
				setTimeout(function () {
					$(w).remove();
					$(p).show();
					$(p).addClass('animated bounceInUp');
				}, 1000)
			}, 1500);
		}
	}
})(window);