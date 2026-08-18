// Display players


function displayPlayers(list) {


    let output = "";



    list.forEach(player => {


        output += `



<div class="col-md-4 col-lg-3">


<div class="card shadow player-card"

onclick="showPlayer('${player.id}')">



<img src="${player.image}"

class="card-img-top"

alt="player">





<div class="card-body text-center">



<h5>

${player.name}

</h5>




<p>

${player.id}

</p>



</div>



</div>


</div>




`;



    });



    document.getElementById("playerList").innerHTML = output;


}








// Show popup


function showPlayer(id) {



    let player = players.find(p => p.id === id);




    document.getElementById("modalImage").src = player.image;


    document.getElementById("modalName").innerHTML = player.name;


    document.getElementById("modalID").innerHTML = player.id;


    document.getElementById("modalGame").innerHTML = player.game;

    document.getElementById("modalFlag").src = player.flag;

    document.getElementById("modalCountry").innerHTML = player.country;

    document.getElementById("modalTeam").innerHTML = player.team;

    document.getElementById("modalBirthday").innerHTML = player.birthday;





    let modal = new bootstrap.Modal(

        document.getElementById("playerModal")

    );



    modal.show();



}









// Search


function searchPlayer() {



    let keyword = document

        .getElementById("search")

        .value

        .toLowerCase();





    let result = players.filter(player =>



        player.name.toLowerCase().includes(keyword)


        ||

        player.id.toLowerCase().includes(keyword)


        ||

        player.game.toLowerCase().includes(keyword)



    );





    displayPlayers(result);



}







// Load first time


displayPlayers(players);


function goToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

window.addEventListener("scroll", function () {

    let button = document.getElementById("topButton");

    if (window.scrollY > 300) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }

});