// a compiled list of useful functions

// strictBool == false will search for near matches (indexOf)
// strictBool == true will search for exact name matches
function getLayerInThisComp(name, strictBool) {
    for(var i = 1; i <= app.project.activeItem.numLayers; i++) {
        if(strictBool) {
        if(app.project.activeItem.layer(i).name == name) {
            return app.project.activeItem.layer(i);
            }
        } else {
         if(app.project.activeItem.layer(i).name.indexOf(name) != -1) {
            return app.project.activeItem.layer(i);
            }   
            }
        }
    }

function getLayerNameInComp(name, comp, strictBool) {
    for(var i = 1; i <= comp.numLayers; i++) {
        if(strictBool) {
        if(comp.layer(i).name == name) {
            return comp.layer(i);
            }
        } else {
         if(comp.layer(i).name.indexOf(name) != -1) {
            return comp.layer(i);
            }   
            }
        }
    }

function rgbToHex(rgb) {
    return "#"+((1 << 24) + (rgb[0] << 16) + (rgb[1] << 8) + rgb[2]).toString(16).slice(1);
    }

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

function osCheck() {
        var os = $.os;
        var match = os.indexOf("Windows");
        if(match != (-1)) {
                var userOS = "PC";
            } else {
                 var userOS = "MAC";
                }
            return userOS;
    }