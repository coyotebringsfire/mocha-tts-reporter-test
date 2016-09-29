var should=require('should'),
	debug=require('debug')('mocha:ttsreporter:test'),
	async=require('async');

describe("ttsreporter test passes", function() {
	var passCount=5;

	async.times( passCount, function(n, next) {
		it("should pass: "+n, function doIt(done) {
			setTimeout(function() {
				done();
				next();
			}, 500);
		});
	}, function(err) {
		debug("done");
	});
});
