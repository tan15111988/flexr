var scrolled,nav=document.getElementById("nav"),menu=document.getElementById("menu"),menuLinks=document.getElementsByTagName("li"),menuShowing;window.onscroll=function(){window.pageYOffset>60&&!scrolled?(scrolled=!0,window.innerWidth>740?nav.classList.add("shrink-large"):nav.classList.add("shrink-small")):window.pageYOffset<60&&scrolled&&(scrolled=!1,nav.classList.remove("shrink-large"),nav.classList.remove("shrink-small"))},window.onresize=function(){window.innerWidth<740&&scrolled?(nav.classList.remove("shrink-large"),nav.classList.add("shrink-small")):window.innerWidth>740&&scrolled&&(nav.classList.add("shrink-large"),nav.classList.add("shrink-small"))},window.onload=function(){window.innerWidth>740&&window.pageYOffset>60&&(nav.classList.add("shrink-large"),nav.classList.add("shrink-small"))},document.getElementById("poma").onclick=function(n){n.stopPropagation(),menuShowing=!0,menu.classList.add("show-menu")},menu.onclick=function(n){n.stopPropagation()},document.body.onclick=function(){menuShowing&&(menuShowing=!1,menu.classList.remove("show-menu"))};for(var i=0;i<menuLinks.length;i++)menuLinks[i].onclick=function(){menuShowing&&(menuShowing=!1,menu.classList.remove("show-menu"))};
