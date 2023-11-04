function addUser(){
    player1name = document.getElementById("player1nameinput").value;
    localStorage.setItem("player1name", player1name)
    window.location = "game_page.html"
    player2name = document.getElementById("player2nameinput").value;
    localStorage.setItem("player2name", player2name)
}