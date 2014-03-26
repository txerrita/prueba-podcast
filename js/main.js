document.addEventListener("deviceready", onDeviceReady, false);

//Activate :active state
document.addEventListener("touchstart", function() {
}, false);

function onDeviceReady() {
	navigator.splashscreen.hide();
    var app = new Application();
	app.run();
}

function Application() {
}

Application.prototype = {
    
	run: function() {
		var that = this,
		openLocal = document.getElementById("openLocal"),
		openExternalInAppBrowser = document.getElementById("openExternalInAppBrowser"),
		openPDF = document.getElementById("openPDF"),
		openExternalPDF = document.getElementById("openExternalPDF"),
		openExternalInSystemBrowser = document.getElementById("openExternalInSystemBrowser");
        
		openLocal.addEventListener("click", that.openLocal);		
		openExternalInAppBrowser.addEventListener("click", that.openExternalInAppBrowser);
		openPDF.addEventListener("click", that.openPDF);
		openExternalPDF.addEventListener("click", that.openExternalPDF);
		openExternalInSystemBrowser.addEventListener("click", that.openExternalInSystemBrowser);
	},
    
	openLocal: function() {
		window.open("img/ice.png", "_blank");
	},
 
	openExternalInAppBrowser:  function () {
		window.open("https://m.facebook.com/profile.php?id=199612623402536", "_blank");
	},
    
	openExternalPDF:  function () {
		if (window.navigator.simulator === true) {
			alert("Not Supported in Simulator.");
		}
		else {
			if (device.platform == 'Android') {
				window.open("http://www.telerik.com/whitepapers/appbuilder/approaching-mobile-understanding-the-three-ways-to-build-mobile-apps", "_system");
			}
			else
				window.open("http://www.telerik.com/whitepapers/appbuilder/approaching-mobile-understanding-the-three-ways-to-build-mobile-apps", "_blank");
		}
	},
	
	openPDF: function() {
		if (window.navigator.simulator === true) {
			alert("Not Supported in Simulator.");
		}
		else {
			if (device.platform == 'Android') {
				window.open("whitepaper-mobile-developer-guidance.pdf", "_system");
			}
			else
				window.open("whitepaper-mobile-developer-guidance.pdf", "_blank");
		}
	},
    
	openExternalInSystemBrowser:function () {
		window.open("http://wiki.apache.org/cordova/InAppBrowser", "_system");
	}
}