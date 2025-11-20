--------------------------------Script--------------------------------
```
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }
```
--------------------------------CSS----------------------------------
```
.sidebar {
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: white;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 60px;
}
  
.sidebar a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: block;
    transition: 0.3s;
}
  
.sidebar a:hover {
    color: black;
    font-weight: bold;
}
  
.sidebar .closebtn {
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 80px;
    font-size: 20px;
}
  
.openbtn {
    font-size: 20px;
    cursor: pointer;
    background-color: lightblue;
    color: white;
    padding: 10px 15px;
    border: none;
}
  
.openbtn:hover {
    background-color: lightblue;
}
  
#main {
    transition: margin-left .5s;
    padding: 16px;
}
  
@media screen and (max-height: 450px) {
    .sidebar {padding-top: 15px;}
    .sidebar a {font-size: 18px;}
}
```
--------------------------------HTML--------------------------------
```
<div id="mySidebar" class="sidebar">
  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">X</a>
  <a href="#">Avisos</a>
  <a href="#">Avaliações</a>
  <a href="#">Calendario</a>
  <a href="#">Descrição</a>
</div>

<div id="main">
  <button class="openbtn" onclick="openNav()">☰</button>  
</div>
```