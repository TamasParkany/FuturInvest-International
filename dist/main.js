(()=>{const e=document.getElementsByTagName("header")[0],t=document.getElementsByClassName("header-bg")[0],n=document.querySelectorAll(".form"),o=document.getElementById("contact-form");function c(){o.style.display="flex"}n.forEach((e=>e.addEventListener("click",c))),o.addEventListener("click",(function(e){"contact-form"!==e.target.id&&"contact-form"!==e.currentTarget.id||(o.style.display="none")}));let l=window.pageYOffset;window.onscroll=function(){let n=window.pageYOffset;l>n?(e.style.top="0",t.style.top="0"):(e.style.top="-150px",t.style.top="-150px"),l=n}})();