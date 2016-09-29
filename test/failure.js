var should=require('should'),
	debug=require('debug')('mocha:ttsreporter:test'),
	async=require('async');

describe("ttsreporter test failures", function() {
	var failCount=5;

	async.times( failCount, function(n, next) {
		it("should fail: "+n, function doIt(done) {
			setTimeout(function() {
				should.fail();
				done();
				next();
			}, 500);
		});
	}, function(err) {
		debug("done");
	});
});
