/*jslint browser: true, couch: true, devel: true, node: false, passfail: true, white: true, bitwise: true, closure: true, continue: true, debug: true, eqeq: true, evil: true, forin: true, newcap: true, nomen: true, plusplus: true, regexp: true, unparam: true, sloppy: true, stupid: true, sub: true, todo: true, vars: true,esnext: true*/

/* eslint-env browser */
/* eslint-env node  */
/******************************************************************************/
document.addEventListener("DOMContentLoaded", function () {
    /**************************************************************************/
    const cart = document.querySelector('.cart');
    const popUp = document.querySelector('.popUp');
    popUpCheck = setInterval(function () {
        if (window.scrollY >= 9000)
            popUp.style.top = (window.scrollY - 2000) + "px";
    }, 100);


    timePopUp = setInterval(function () {
        popUp.style.top = (window.scrollY + 50) + "px";
    }, 100);

    function taggle() {
        if (popUp.className.indexOf('fadeIn') > -1) {
            popUp.classList.remove('fadeIn');
            popUp.classList.add('fadeOut');

            timePopUp = setInterval(function () {
                popUp.style.top = (window.scrollY + 50) + "px";
            }, 100);


        } else if (popUp.className.indexOf('fadeOut') > -1) {
            popUp.classList.add('fadeIn');
            popUp.classList.remove('fadeOut');
            window.onscroll = function () {};
            clearInterval(timePopUp);
        } else {
            popUp.classList.add('fadeIn');
            popUp.classList.remove('fadeOut');
            window.onscroll = function () {};
            clearInterval(timePopUp);
        }
    }

    cart.addEventListener("click", taggle);
    /**************************************************************************/
    const close = document.querySelector('.close');
    close.onclick = function () {
        close.parentNode.classList.remove('fadeIn');
        close.parentNode.classList.add('fadeOut');
        timePopUp = setInterval(function () {
            popUp.style.top = (window.scrollY + 50) + "px";
        }, 100);

    };
    /**************************************************************************/

    const cards = document.querySelectorAll('.container .card2');
    //const titles = document.querySelectorAll('.container .card2 .front2 h3');
    const searchBar = document.querySelector('div#searchCourse input[type="text"]');

    const listAdd = document.querySelector('.add');


    searchBar.addEventListener('input', function (e) {

        //clearInterval(checkSearch);

        var want = e.target.value.toLowerCase();


        Array.from(cards).forEach(function (item) {
            
            var li = document.createElement('li');
            var courseName = document.createElement('a');
            var addBtn = document.createElement('a');
            
            if (item.querySelector(".front2 h3").textContent.toLowerCase().indexOf(want) != -1) {


                courseName.href = item.querySelector(".back2 a").href;
                courseName.target = "_blank";


                courseName.textContent = item.querySelector(".front2 h3").textContent;

                addBtn.textContent = 'ADD';


                courseName.classList.add('title');
                addBtn.classList.add('work');


                li.appendChild(courseName);
                li.appendChild(addBtn);
                listAdd.appendChild(li);


            }

        });

    });
    /**************************************************************************************/

    var checkSearch = setInterval(function () {

        var want2 = searchBar.value.toLowerCase();
        var itemInListAdd = listAdd.querySelectorAll('li');


        if (want2 === '') {
            itemInListAdd.forEach(function (item) {
                item.parentNode.removeChild(item);
            });
        }
        
        itemInListAdd.forEach(function (item) {
            if (item.querySelector('a.title').textContent.toLowerCase().indexOf(want2) == -1) {
                item.parentNode.removeChild(item);
            }

        });



        if (itemInListAdd.length >= 2) {
            for (var i = 0; i < itemInListAdd.length; i++) {
                for (var j = 0; j < itemInListAdd.length; j++) {
                    if (i == j) {
                        continue;
                    }
                    if (itemInListAdd[i].querySelector('a.title').textContent.toLowerCase() == itemInListAdd[j].querySelector('a.title').textContent.toLowerCase()) {
                        itemInListAdd[j].parentNode.removeChild(itemInListAdd[i]);
                    }
                }
            }
        }
    }, 100);



    /**************************************************************************/
    const listDelete = document.querySelector('.delete');

    const submitAdd = document.querySelector('.submitAdd');
    
    listAdd.addEventListener('click', function (e) {
        if (e.target.className == "work") {
            const itemCopy = e.target.parentElement.cloneNode(true);
            itemCopy.querySelector(".work").textContent = "DELETE";
            listDelete.appendChild(itemCopy);
            submitAdd.classList.add("added");
            setTimeout(function () {
                submitAdd.classList.remove("added");
            }, 1500);
        }
    });
    /**************************************************************************/
    var fliter = setInterval(function () {
        var itemInListDelete = listDelete.querySelectorAll('li');


        if (itemInListDelete.length >= 2) {
            for (var i = 0; i < itemInListDelete.length; i++) {
                for (var j = 0; j < itemInListDelete.length; j++) {
                    if (i == j) {
                        continue;
                    }
                    if (itemInListDelete[i].querySelector('a.title').textContent.toLowerCase() == itemInListDelete[j].querySelector('a.title').textContent.toLowerCase()) {
                        itemInListDelete[j].parentNode.removeChild(itemInListDelete[i]);
                    }
                }
            }
        }
    }, 10);
    /**************************************************************************/
    listDelete.addEventListener('click', function (e) {
    if (e.target.className == 'work') {
        const li = e.target.parentElement;
        li.parentElement.removeChild(li);
    }
    });
});
