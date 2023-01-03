function toggleNav () {
   const menu = document.querySelectorAll('.menu')[0];
   const hamb = document.querySelectorAll('#hamb')[0];
   
   menu.classList.toggle('show-menu');
   hamb.classList.toggle('close-hamb');
}