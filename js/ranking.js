const rankings = {

    "Rocket League": [
        {
            tournament: "Rocket League Campus Cup 2025",
            date: "14 September 2025",

            teams: [
                {
                    rank: 1,
                    team: "Rocket Riders",
                    logo: "pics/rocketriderslogo.jpg",
                    prize: "RM 3000"
                },
                {
                    rank: 2,
                    team: "Rocket Riders Alpha",
                    logo: "pics/rocketridersalpha.jpg",
                    prize: "RM 2500"
                },
                {
                    rank: 3,
                    team: "Rocket Riders Elite",
                    logo: "pics/rocketriderselite.jpg",
                    prize: "RM 1000"
                }
            ]
        },

        {
            tournament: "Rocket League Inter-Campus Cup 2024",
            date: "22 September 2024",

            teams: [
                {
                    rank: 1,
                    team: "Rocket Masters",
                    logo: "pics/rocketmasters.jpg",
                    prize: "RM 2500"
                },
                {
                    rank: 2,
                    team: "Rocket Warriors",
                    logo: "pics/rocketwarriors.jpg",
                    prize: "RM 1500"
                },
                {
                    rank: 3,
                    team: "Rocket Force",
                    logo: "pics/rocketforce.jpg",
                    prize: "RM 1000"
                }
            ]
        }
    ],


    "Valorant": [
        {
            tournament: "Valorant Campus Cup 2025",
            date: "20 August 2025",

            teams: [
                {
                    rank: 1,
                    team: "Valorant Aces",
                    logo: "pics/valorantaces.jpg",
                    prize: "RM 2500"
                },
                {
                    rank: 2,
                    team: "Valorant Phoenix",
                    logo: "pics/valorantphoenix.jpg",
                    prize: "RM 1500"
                },
                {
                    rank: 3,
                    team: "Valorant Storm",
                    logo: "pics/valorantstorm.jpg",
                    prize: "RM 1000"
                }
            ]
        }
    ]

};


function showRanking(game) {
    // Background for each game
    const backgrounds = {
        "Rocket League": "pics/rocketleague.jpg",
        "Valorant": "pics/valorant.jpg",
        "Mobile Legends": "pics/mobilelegends.jpg",
        "Apex Legends": "pics/apex.jpg",
        "PUBG": "pics/PUBG.jpg",
        "Counter Strike 2": "pics/cs2.png"
    };


    if (backgrounds[game]) {
        document.body.style.setProperty(
            "--game-background",
            `url("${backgrounds[game]}")`
        );
    }






    const rankingContainer =
        document.getElementById("rankingContainer");

    const rankingHeading =
        document.getElementById("rankingHeading");

    const tournamentTitle =
        document.getElementById("tournamentTitle");


    // =========================
    // NO TOURNAMENT
    // =========================

    if (!rankings[game]) {
        rankingHeading.style.display = "none";


        rankingContainer.innerHTML = `
        <div class="waiting-message text-center">

            <h3>🎮 No Tournament Yet</h3>

            <p>
                Stay tuned! A new ${game} tournament
                will be announced soon.
            </p>

            <p>
                Please check back later for tournament
                dates, rankings and prizes.
            </p>

        </div>
    `;

        // Remove the white/transparent outer box
        document.querySelector(".ranking-container").style.background = "transparent";

        return;

    }



    // =========================
    // TOURNAMENT EXISTS
    // =========================

    rankingHeading.style.display = "block";

    tournamentTitle.innerHTML =
        game + " Tournaments";


    let output = "";


    rankings[game].forEach(tournament => {

        output += `

            <div class="tournament-box mb-5">

                <h3 class="text-center mb-3 fw-bold tournament-title">
                ${tournament.tournament}
                </h3>

                <div class="text-center mb-4">

                    <em>
                        📅 ${tournament.date}
                        &nbsp;&nbsp;
                    </em>

                </div>


                <div class="row justify-content-center podium">
        `;


        tournament.teams.forEach(team => {

            let medal;

            let cardClass;


            if (team.rank === 1) {

                medal = "🥇";
                cardClass = "first";

            }
            else if (team.rank === 2) {

                medal = "🥈";
                cardClass = "second";

            }
            else {

                medal = "🥉";
                cardClass = "third";

            }


            output += `

                <div class="col-md-4 text-center">

                    <div class="rank-card ${cardClass}">

                        <div class="rank">
                            ${medal}
                        </div>

                        <img src="${team.logo}"
                             class="team-logo">

                        <h4>
                            ${team.team}
                        </h4>

                        <p class="prize">
                            💰 Prize: ${team.prize}
                        </p>

                        <button
                            class="btn btn-dark"
                            onclick="showTeam('${team.team}')">

                            View Team

                        </button>

                    </div>

                </div>

            `;

        });


        output += `

                </div>

            </div>

        `;

    });


    rankingContainer.innerHTML = output;
}


// Show Team Members
function showTeam(team) {

    let members = players.filter(player => player.team === team);

    let output = "";

    members.forEach(player => {

        output += `
        <div class="card mb-3 shadow-sm">

            <div class="card-body">

                <h5>${player.name}</h5>

                <p>
                    ${player.role}
                </p>

                <button class="btn btn-primary"
                    onclick="showPlayer('${player.id}')">
                    View Profile
                </button>

            </div>

        </div>
        `;
    });

    document.getElementById("teamName").innerHTML = team;

    document.getElementById("teamMembers").innerHTML = output;

    let modal = new bootstrap.Modal(
        document.getElementById("teamModal")
    );

    modal.show();
}


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


    // Hide team member modal first
    let teamModal = bootstrap.Modal.getInstance(
        document.getElementById("teamModal")
    );

    if (teamModal) {
        teamModal.hide();
    }


    // Open player profile modal
    let playerModal = new bootstrap.Modal(
        document.getElementById("playerModal")
    );

    playerModal.show();


    // When player profile closes, return to team members
    document.getElementById("playerModal")
        .addEventListener("hidden.bs.modal", function () {

            let teamModal = new bootstrap.Modal(
                document.getElementById("teamModal")
            );

            teamModal.show();

        }, { once: true });
}


// Get selected game from URL or Session Storage
const urlParams = new URLSearchParams(window.location.search);

let game = urlParams.get("game");

if (!game) {
    game = sessionStorage.getItem("selectedGame");
}

game = game || "Rocket League";

console.log("Selected game:", game);

showRanking(game);