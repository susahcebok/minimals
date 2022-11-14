window.onload = function() {
    var script = document.currentScript || function () {
        var t = document.getElementsByTagName("script");
        return t[t.length - 1]
    }();
    // Float direction
    function getFloatDir() {
        if (script.hasAttribute("data-float")) {
    
            var floatDir = script.getAttribute("data-float");
            var floatDirections = floatDir.split("-");
            return floatDirections;
    
        } else return ["right", "bottom"];
    }
    
    if (script.hasAttribute("data-href")) {
    
        var link = script.getAttribute("data-href");
        buildAtt(getFloatDir(), link);
    
    } else buildAtt(getFloatDir(), "https://www.wkmn.dev");
    
    function buildAtt(t, l) {
        var e = document.createElement("div");
        e.id = "wkmn_warpper", e.innerHTML = '<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"><style>.wkmn_att{z-index:1000;display:flex;font-family:"Bebas Neue",cursive!important;padding:20px 16px;font-size:20px;line-height:1rem;font-weight:500;height:2.8rem;align-items:center;cursor:pointer;background:#fff;border:1px solid #e3e3e3;box-sizing:border-box;border-radius:5px;text-decoration:none;color:#000!important;white-space:nowrap;margin-left:auto;position:fixed;' + t[0] + ':10px;' + t[1] + ':10px;box-shadow:10px 10px 17px 0 rgba(0,0,0,.46);-webkit-box-shadow:10px 10px 17px 0 rgba(0,0,0,.46);-moz-box-shadow:10px 10px 17px 0 rgba(0,0,0,.46)}.wkmn_att img{margin-right:.5rem;height:100%;width:auto;min-width:25px;min-height:25px}.wkmn_att:hover{background-color:#f5f5f5;box-shadow:10px 10px 17px 0 rgba(0,0,0,.67);-webkit-box-shadow:10px 10px 17px 0 rgba(0,0,0,.67);-moz-box-shadow:10px 10px 17px 0 rgba(0,0,0,.67)}</style><a class="wkmn_att" target="_blank" href="' + l + '"><img alt="Black sqaure, rounded corners, W-K on top of M-N." src="https://wkmnjs.wkmn.app/wkmn.svg"> WKMN Product</a>', document.body.appendChild(e), console.log("Thanks for viewing a WKMN product. For more visit www.wkmn.dev :)")
    }
}
