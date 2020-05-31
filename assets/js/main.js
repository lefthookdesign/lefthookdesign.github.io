//list of all projects in "work" folder
  var projects = [
    {
      "title": "Website",
      "subtitle":"Cascade Land Survey",
      "thumbnail": "/work/cascadelandsurvey-website/featured-tile.png",
      "link": "/work/cascadelandsurvey-website.html"
    },
    {
      "title": "Logo Design",
      "subtitle":"Cascade Land Survey",
      "thumbnail": "/work/cascadelandsurvey-logo/featured-tile.png",
      "link": "/work/cascadelandsurvey-logo.html"
    },
    {
      "title": "Packaging Design",
      "subtitle":"Table Rock Dairy",
      "thumbnail": "/work/tablerockdairy-packaging/featured-tile.png",
      "link": "/work/tablerockdairy-packaging.html"
    },
    {
      "title": "Business Cards",
      "subtitle":"Table Rock Dairy",
      "thumbnail": "/work/tablerockdairy-print/featured-tile.png",
      "link": "/work/tablerockdairy-print.html"
    },
    {
      "title": "Logo Design",
      "subtitle":"Table Rock Dairy",
      "thumbnail": "/work/tablerockdairy-logo/featured-tile.png",
      "link": "/work/tablerockdairy-logo.html"
    },
    {
      "title": "App Design",
      "subtitle":"Smart Home Concept",
      "thumbnail": "/work/ui-smarthome/featured-tile.png",
      "link": "/work/ui-smarthome.html"
    },
    {
      "title": "Print Design",
      "subtitle":"Royal Digits",
      "thumbnail": "/work/royaldigits-print/featured-tile.jpg",
      "link": "/work/royaldigits-print.html"
    },
    {
      "title": "Branding",
      "subtitle":"Royal Digits",
      "thumbnail": "/work/royaldigits-logo/featured-tile.png",
      "link": "/work/royaldigits-logo.html"
    },
    {
      "title": "Logo Design",
      "subtitle":"Scotty Labs",
      "thumbnail": "/work/scottylabs-logo/social-share.jpg",
      "link": "/work/scottylabs-logo.html"
    },
    {
      "title": "Wedding Invitations",
      "subtitle":"Mr & Mrs Hill",
      "thumbnail": "/work/wedding-hill/featured-tile.png",
      "link": "/work/wedding-hill.html"
    },

    {
      "title": "App Redesign",
      "subtitle":"TSA Concept",
      "thumbnail": "/work/ui-tsa-concept/featured-tile.jpg",
      "link": "/work/ui-tsa-concept.html"
    },
    {
      "title": "App Design",
      "subtitle":"Music Player",
      "thumbnail": "/work/ui-musicplayer/featured-tile.png",
      "link": "/work/ui-musicplayer.html"
    }
  ];

function initPage() {
  $("#nav").load("closet/header.html");
  $("#nav-mobile").load("closet/header-mobile.html");
  $("#footer").load("closet/footer.html");
  //hide and show the work menu on hover
  $("a#work").hover(function(){
      $("#work-slider").classList.toggle("work-slider-active");
  }
  $(window).scroll(function() {
    if ($(window).scrollTop() >= $('#hero').outerHeight() - 200) {
      $("#nav, #nav-mobile").addClass("scrolled");
    } else {
      $("#nav, #nav-mobile").removeClass("scrolled");
    }
  });
  setTimeout(function(){
    projects.forEach(function(project) {
        $('#slide-group').append(
          '<div class="slide col-sm-2 xs-padding">'+
            '<a href="' + project.link + '" class="">'+
              '<div class="bg-image" style="background-image: url(' + project.thumbnail + ');">'+
                '<img class="full-width" src="assets/img/square.png"/>'+
              '</div>'+
            '</a>'+
          '</div>'
        );
    });
  },10)
}


//mobile navigation menus
function menuList() {
  var element = document.getElementById("menu-list");
  element.classList.toggle("show-menu");
}

function closeMenu() {
  var element = document.getElementById("menu-list");
  element.classList.toggle("show-menu");
}
