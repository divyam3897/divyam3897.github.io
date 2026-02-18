// Dean Attali / Beautiful Jekyll 2016

var main = {

  bigImgEl: null,
  numImgs: null,

  init: function () {
    // Shorten the navbar after scrolling a little bit down
    $(window).scroll(function () {
      if ($(".navbar").offset().top > 50) {
        $(".navbar").addClass("top-nav-short");
      } else {
        $(".navbar").removeClass("top-nav-short");
      }
    });

    // On mobile, hide the avatar when expanding the navbar menu
    $('#main-navbar').on('show.bs.collapse', function () {
      $(".navbar").addClass("top-nav-expanded");
    });
    $('#main-navbar').on('hidden.bs.collapse', function () {
      $(".navbar").removeClass("top-nav-expanded");
    });

    // On mobile, when clicking on a multi-level navbar menu, show the child links
    $('#main-navbar').on("click", ".navlinks-parent", function (e) {
      var target = e.target;
      $.each($(".navlinks-parent"), function (key, value) {
        if (value == target) {
          $(value).parent().toggleClass("show-children");
        } else {
          $(value).parent().removeClass("show-children");
        }
      });
    });

    // Ensure nested navbar menus are not longer than the menu header
    var menus = $(".navlinks-container");
    if (menus.length > 0) {
      var navbar = $("#main-navbar ul");
      var fakeMenuHtml = "<li class='fake-menu' style='display:none;'><a></a></li>";
      navbar.append(fakeMenuHtml);
      var fakeMenu = $(".fake-menu");

      $.each(menus, function (i) {
        var parent = $(menus[i]).find(".navlinks-parent");
        var children = $(menus[i]).find(".navlinks-children a");
        var words = [];
        $.each(children, function (idx, el) { words = words.concat($(el).text().trim().split(/\s+/)); });
        var maxwidth = 0;
        $.each(words, function (id, word) {
          fakeMenu.html("<a>" + word + "</a>");
          var width = fakeMenu.width();
          if (width > maxwidth) {
            maxwidth = width;
          }
        });
        $(menus[i]).css('min-width', maxwidth + 'px')
      });

      fakeMenu.remove();
    }

    // show the big header image	
    main.initImgs();

    // Initialize Dark Mode
    main.initDarkMode();

    // Initialize Command Menu
    main.initCmdK();

    // Initialize Publication Filter (if on homepage)
    // Default to 'selected' if buttons exist
    if (document.getElementById('pub-filter-container')) {
      filterPubs('selected');
    }
  },

  initImgs: function () {
    // If the page was large images to randomly select from, choose an image
    if ($("#header-big-imgs").length > 0) {
      main.bigImgEl = $("#header-big-imgs");
      main.numImgs = main.bigImgEl.attr("data-num-img");

      // 2fc73a3a967e97599c9763d05e564189
      // set an initial image
      var imgInfo = main.getImgInfo();
      var src = imgInfo.src;
      var desc = imgInfo.desc;
      main.setImg(src, desc);

      // For better UX, prefetch the next image so that it will already be loaded when we want to show it
      var getNextImg = function () {
        var imgInfo = main.getImgInfo();
        var src = imgInfo.src;
        var desc = imgInfo.desc;

        var prefetchImg = new Image();
        prefetchImg.src = src;
        // if I want to do something once the image is ready: `prefetchImg.onload = function(){}`

        setTimeout(function () {
          var img = $("<div></div>").addClass("big-img-transition").css("background-image", 'url(' + src + ')');
          $(".intro-header.big-img").prepend(img);
          setTimeout(function () { img.css("opacity", "1"); }, 50);

          // after the animation of fading in the new image is done, prefetch the next one
          //img.one("transitioned webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){
          setTimeout(function () {
            main.setImg(src, desc);
            img.remove();
            getNextImg();
          }, 1000);
          //});		
        }, 6000);
      };

      // If there are multiple images, cycle through them
      if (main.numImgs > 1) {
        getNextImg();
      }
    }
  },

  getImgInfo: function () {
    var randNum = Math.floor((Math.random() * main.numImgs) + 1);
    var src = main.bigImgEl.attr("data-img-src-" + randNum);
    var desc = main.bigImgEl.attr("data-img-desc-" + randNum);

    return {
      src: src,
      desc: desc
    }
  },

  setImg: function (src, desc) {
    $(".intro-header.big-img").css("background-image", 'url(' + src + ')');
    if (typeof desc !== typeof undefined && desc !== false) {
      $(".img-desc").text(desc).show();
    } else {
      $(".img-desc").hide();
    }
  },

  initDarkMode: function () {
    const toggle = document.createElement('li');
    toggle.innerHTML = '<a href="javascript:void(0)" id="dark-mode-toggle" title="Toggle Dark Mode"><i class="fa fa-adjust"></i></a>';

    // Append to navbar on desktop, or find a better place. 
    // This template appends to .nav.navbar-nav.navbar-right
    if ($('.navbar-nav.navbar-right').length) {
      $('.navbar-nav.navbar-right').append(toggle);
    }

    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'enabled') {
      document.body.classList.add('dark-mode');
    }

    $('#dark-mode-toggle').on('click', function () {
      document.body.classList.toggle('dark-mode');
      if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
      } else {
        localStorage.setItem('darkMode', 'disabled');
      }
    });
  },

  initCmdK: function () {
    // Basic CMD+K implementation
    console.log("CMD+K initialized");
    document.addEventListener('keydown', function (e) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        console.log("CMD+K pressed");
        e.preventDefault();

        // Create modal if not exists (using vanilla JS to be safe)
        var modal = document.getElementById('cmdk-modal');
        if (!modal) {
          var modalHtml =
            '<div id="cmdk-modal" class="cmdk-overlay" style="display:none;">' +
            '<div class="cmdk-content">' +
            '<input type="text" id="cmdk-input" placeholder="Type a command or search..." autocomplete="off">' +
            '<ul id="cmdk-list">' +
            '<li data-url="/">Home</li>' +
            '<li data-url="/blog">Blog</li>' +
            '<li data-url="https://scholar.google.com/citations?user=DNk4dZkAAAAJ&hl=en">Google Scholar</li>' +
            '<li data-url="https://x.com/dmadaan_">Twitter</li>' +
            '<li data-url="https://github.com/divyam3897">GitHub</li>' +
            '<li onclick="filterPubs(\'all\'); document.getElementById(\'cmdk-modal\').style.display=\'none\';">Show All Publications</li>' +
            '<li onclick="filterPubs(\'selected\'); document.getElementById(\'cmdk-modal\').style.display=\'none\';">Show Selected Publications</li>' +
            '<li onclick="document.body.classList.toggle(\'dark-mode\'); localStorage.setItem(\'darkMode\', document.body.classList.contains(\'dark-mode\') ? \'enabled\' : \'disabled\'); document.getElementById(\'cmdk-modal\').style.display=\'none\';">Toggle Dark Mode</li>' +
            '</ul>' +
            '</div>' +
            '</div>';
          document.body.insertAdjacentHTML('beforeend', modalHtml);
          modal = document.getElementById('cmdk-modal');

          // Close on overlay click
          modal.addEventListener('click', function (e) {
            if (e.target === this) {
              this.style.display = 'none';
            }
          });

          // Navigation logic
          var items = document.querySelectorAll('#cmdk-list li[data-url]');
          items.forEach(function (item) {
            item.addEventListener('click', function () {
              window.location.href = this.getAttribute('data-url');
            });
          });

          // Filter logic
          document.getElementById('cmdk-input').addEventListener('keyup', function () {
            var val = this.value.toLowerCase();
            var listItems = document.querySelectorAll('#cmdk-list li');
            listItems.forEach(function (li) {
              var text = li.textContent.toLowerCase();
              li.style.display = text.indexOf(val) > -1 ? '' : 'none';
            });
          });
        }

        // Toggle visibility
        if (modal.style.display === 'none') {
          modal.style.display = 'flex';
          document.getElementById('cmdk-input').focus();
        } else {
          modal.style.display = 'none';
        }
      }
    });
  }
};

// Global function for filtering publications
window.filterPubs = function (type) {
  // Update buttons
  $('.pub-filter-btn').removeClass('active');
  if (type === 'all') {
    $('.pub-filter-btn:first-child').addClass('active');
    $('.pub-entry').show();
  } else {
    $('.pub-filter-btn:last-child').addClass('active');
    $('.pub-entry').hide();
    $('.pub-entry[data-selected="true"]').show();
  }
};

// 2fc73a3a967e97599c9763d05e564189

document.addEventListener('DOMContentLoaded', main.init);
