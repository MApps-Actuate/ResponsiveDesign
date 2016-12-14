$(document).ready(function() {
    actuate.load('viewer');

    var context   = 'ResponsiveDesign';
    var iHub      = 'http://localhost:8700/iportal';
    var rptDesign = 'Applications/Responsive Design/Report Designs/Classic Models Responsive.rptdesign';
    var reqOps    = new actuate.RequestOptions();
    var viewer;
    var paramsDownloaded = false;

    var bookmarks = ['MTMChart',
                     'TopCountry',
                     'TopProduct',
                     'CustomerOrders',
                     'OfficeTotal'];

    actuate.initialize( iHub, reqOps==undefined?null:reqOps, 'Administrator', 'Password1', myInit);
	
	if(typeof window.orientation !== 'undefined'){
		$(window).on("orientationchange", resizeCharts);
	}else{
		$(window).resize(resizeCharts);
	}

    function myInit()  {
        try {
            var config = new actuate.viewer.UIConfig();
                config.setContentPanel(new actuate.viewer.BrowserPanel());

            var uiOptions = new actuate.viewer.UIOptions();
                uiOptions.enableToolBar(false);

            viewer = [new actuate.Viewer('viewerContainer0'),
                      new actuate.Viewer('viewerContainer1'),
                      new actuate.Viewer('viewerContainer2'),
                      new actuate.Viewer('viewerContainer3'),
                      new actuate.Viewer('viewerContainer4')];

            for(var i=0;i<viewer.length;i++) {
                viewer[i].setReportDesign(rptDesign);
                viewer[i].setReportletBookmark(bookmarks[i]);
                viewer[i].setUIOptions(uiOptions);
				viewer[i].setHeight(400);
                viewer[i].setWidth($("#vc"+i).width());
                viewer[i].submit();
            }
        }catch(err){
            console.log(err);
        }
    }
	
    function resizeCharts(){
		for(var i=0; i<viewer.length; i++) {
			$('#viewerContainer' + i).css("width", "100%");
			viewer[i].setWidth($('#vc' + i).width());
			viewer[i].submit();
		}
    }
});