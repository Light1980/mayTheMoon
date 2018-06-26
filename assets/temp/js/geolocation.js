
function fixedLocation() {
    var LAT = 26.61375,LNG = 106.654225;

    var Location = "Guiyang City Guizhou 550001, PRC"



    // 写入时间
    document.getElementById("date").innerHTML = Date();

    // 写入经纬度地点
    document.getElementById("latlng").innerHTML = "Latitude: " +  LAT.toFixed(2) + ", " + "Longitude: " + LNG.toFixed(2) + ". ";

    // 写入地点
    document.getElementById("location").innerHTML = Location;

}

fixedLocation()

/*
    Based on NASA SVS script: https://svs.gsfc.nasa.gov/vis/a000000/a004600/a004604/current_moon.js
 */

/*
======================================================================
get_moon_imagenum()

Initialize the frame number.  If the current date is within the year
2018, the frame number is the (rounded) number of hours since the
start of the year.  Otherwise it's 1.
====================================================================== */


var moon_imagenum;

function get_moon_imagenum()
{
    var now = new Date();
    var year = now.getUTCFullYear();
    if ( year != 2018 ) {
        moon_imagenum = 1;
        return false;
    }
    var janone = Date.UTC( year, 0, 1, 0, 0, 0 );
    moon_imagenum = 1 + Math.round(( now.getTime() - janone ) / 3600000.0 );
    if ( moon_imagenum > 8760 ) moon_imagenum = 8760;
    return false;
}

get_moon_imagenum()


/*
======================================================================
show_moon_image()

Write the img tag that displays the current Moon image defined by
moon_imagenum.  Called from the body at the point where the image
should appear.

This is called when the page is first loaded.  When the image needs to
be replaced later, use replace_moon_image().
====================================================================== */

var address;

function get_moon_image_address()
{
    var fn = "000" + moon_imagenum;
    fn = fn.slice( fn.length - 4 );

    /* prepend this path to the filename, if needed */
    var domain = "https://svs.gsfc.nasa.gov"
    // 根据纬度显示正确月相图
    if (LAT = 1) {
        var path = "/vis/a000000/a004600/a004604/";
    } else {
        var path = "/vis/a000000/a004600/a004605/"
    }


    address = domain + path + "frames/730x730_1x1_30p/moon." + fn + ".jpg";

    var img = document.getElementById("moon_image");
    img.src = address;
}





