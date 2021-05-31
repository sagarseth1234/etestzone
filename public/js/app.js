(function($, document, window) {

    $(document).ready(function() {
        $(".slider").flexslider({
            controlNav: true,
            directionNav: false
        });
        $(".menu-toggle").click(function() {
            $(".mobile-navigation").slideToggle();
        });
        $(".mobile-navigation").append($(".main-navigation .menu").clone());

        $(".more-student").height($(".more-student").innerWidth());

        $(".accordion-toggle").click(function() {
            var current = $(this).parent();
            if (!current.hasClass("expanded")) {
                current.siblings(".accordion").removeClass("expanded").find(".accordion-content").slideUp();
                current.addClass("expanded").find(".accordion-content").slideDown();
            } else {
                current.removeClass("expanded");
                current.find(".accordion-content").slideUp();
            }
        });

        if ($(".map").length) {
            $('.map').gmap3({
                    map: {
                        options: {
                            maxZoom: 14,
                            scrollwheel: false
                        }
                    },
                    marker: {
                        address: "40 Sibley St, Detroit",
                    }
                },
                "autofit");
        }
    });

    $(window).resize(function() {
        $(".more-student").height($(".more-student").innerWidth());
    });

    $(window).load(function() {

    });

})(jQuery, document, window);


////////////////////   index.js scripts and functions////////////////////////////////////////

function user() {
    document.getElementById('show_test_series').style.display = "none";
    var x = document.getElementById('auth').style;
    if (x.display == "none") {
        x.display = "block";
    } else {
        x.display = "none"
    }
}


function show_test_series() {
    document.getElementById('auth').style.display = "none";
    var x = document.getElementById('show_test_series').style;
    if (x.display == "none") {
        x.display = "block";
    } else {
        x.display = "none";
    }
}

////////////////////////  bccontact scripts ans functions //////////////////////////////////////////////////////

function cuser() {
    document.getElementById('cshow_test_series').style.display = "none";
    var x = document.getElementById('cauth').style;
    if (x.display == "none") {
        x.display = "block";
    } else {
        x.display = "none"
    }
}


function cshow_test_series() {
    document.getElementById('cauth').style.display = "none";
    var x = document.getElementById('cshow_test_series').style;
    if (x.display == "none") {
        x.display = "block";
    } else {
        x.display = "none";
    }
}

///////////////////////////   login page scripts and functions  /////////////////////////////////////////////////////////////////

function luser() {
    document.getElementById('lshow_test_series').style.display = "none";
    var x = document.getElementById('lauth').style;
    if (x.display == "none") {
        x.display = "block";
    } else {
        x.display = "none"
    }
}


function lshow_test_series() {
    document.getElementById('lauth').style.display = "none";
    var x = document.getElementById('lshow_test_series').style;
    if (x.display == "none") {
        x.display = "block";
    } else {
        x.display = "none";
    }
}


/////////////////////////////    sign up page scripts and functions   ///////////////////////////////////



function suser() {
    document.getElementById('sshow_test_series').style.display = "none";
    var x = document.getElementById('sauth').style;
    if (x.display == "none") {
        x.display = "block";
    } else {
        x.display = "none"
    }
}


function sshow_test_series() {
    document.getElementById('sauth').style.display = "none";
    var x = document.getElementById('sshow_test_series').style;
    if (x.display == "none") {
        x.display = "block";
    } else {
        x.display = "none";
    }
}


/////////////////////////////////////   bd header scripts and functions   ////////////////////////////////////////////

function bdh_user() {
    document.getElementById('bdh_show_test_series').style.display = "none";
    var x = document.getElementById('bdh_auth').style;
    if (x.display == "none") {
        x.display = "block";
    } else {
        x.display = "none"
    }
}


function bdh_show_test_series() {
    document.getElementById('bdh_auth').style.display = "none";
    var x = document.getElementById('bdh_show_test_series').style;
    if (x.display == "none") {
        x.display = "block";
    } else {
        x.display = "none";
    }
}



////////////////////////////////////////////////////////////////////////////////////////////////////