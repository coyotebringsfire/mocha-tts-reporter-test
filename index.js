"use strict";
var Mocha=require('mocha'),
	debug=require('debug')("mocha:ttsreporter:test");

var mocha = new Mocha({
	timeout: 10000,
    ui: 'bdd',
    reporter: "mocha-multi",
    reporterOptions: {
	    "mocha-tts-reporter": {
		    stdout: '/dev/null',
		    options: {
		    	testPass: "pass",
		    	testFail: "fail",
		        onSuiteFail: "suite failed",
		        onSuitePass: "suite passed"
		    }

	    },
	    spec: {
		    stdout: "-"
		}
	}
});
mocha.addFile("test/success.js");
mocha.addFile("test/failure.js");
mocha.run();