let hamburgerBtn=document.querySelector(".hamburger-btn"),closeBtn=document.querySelector(".close-btn"),nav=document.querySelector("header nav");function menu(e,t){for(var a,n=document.getElementsByClassName("tabcontent"),s=0;s<n.length;s++)n[s].style.display="none";for(a=document.getElementsByClassName("tablinks"),s=0;s<a.length;s++)a[s].className=a[s].className.replace(" active","");document.getElementById(t).style.display="block",e.currentTarget.className+=" active"}hamburgerBtn.addEventListener("click",function(e){this.style.display="none",e.stopPropagation(),"block"===closeBtn.style.display?(closeBtn.style.display="none",nav.classList.remove("active")):(closeBtn.style.display="block",nav.classList.add("active"))}),closeBtn.addEventListener("click",function(e){e.stopPropagation(),this.style.display="none","block"===hamburgerBtn.style.display?(hamburgerBtn.style.display="none",nav.classList.add("active")):(hamburgerBtn.style.display="block",nav.classList.remove("active"))}),document.addEventListener("click",function(e){e.target.closest("header nav")||e.target===viewMap||(nav.classList.remove("active"),closeBtn.style.display="none",hamburgerBtn.style.display="block")}),document.addEventListener("DOMContentLoaded",function(){var e=document.getElementsByClassName("tablinks");0<e.length&&e[0].click()});let viewMap=document.querySelector(".view-map"),overlayMap=document.querySelector(".overlay-map"),overlayMapClose=document.querySelector(".overlay-map-close");viewMap.addEventListener("click",function(){overlayMap.classList.toggle("active")}),overlayMapClose.addEventListener("click",function(e){e.stopPropagation(),overlayMap.classList.remove("active")}),document.addEventListener("click",function(e){e.target.closest(".custom-modal")||e.target===viewMap||overlayMap.classList.remove("active")});