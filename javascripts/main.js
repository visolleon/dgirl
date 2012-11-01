(function (g) {
	g.onload = function () {
		var w = document.getElementById('words');
			p = document.getElementById('poster');
		setTimeout(function () {
			$(w).addClass('animated bounceOut');
			setTimeout(function () {
				$(w).remove();
				$(p).show();
				$(p).addClass('animated bounceInUp');
			}, 1000)
		}, 3000);
	}
})(window);