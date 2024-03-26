export function isWebp(){
    function testWebP(callback){
        let webP = new Image();
        webP.onLoad=webP.oneerror=function(){
            callback(webP.height==2);
        };
        webP.src="data:image/webp;base64"
    }
    testWebP(function(support){
        let className=support===true ?'webp':'no-webp';
        document.documentElement.classList.add(className);
    })
}