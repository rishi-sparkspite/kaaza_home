function navbar_main() {
  return `

    <div id="navbar">

    <div id="replacenavbar">
    <p class="replacenavbar">Welcome to Kaaza Home!</p> <p class="replacenavbar" style=" color: rgb(255 207 207);">Make homes beautiful</p>
    
</div>

<div class="navbar-logo-heading">

<div>
    <img class="logoImg" src="assets/logo.png" alt="" >
</div>

<div id="language">
        <div id="left"><button> English($)</button> </div>
        <div id="right"> <a href="#">
                <button> <span><i class="fa fa-user" aria-hidden="true"></i></span></a>
            <a href="sign_in.html">     </a>
            <a href="sign_in.html">     </a>
            </button>
        </div>
    </div>
</div>

</div>

<div id="toggle" style="display: flex; gap: 20px;">
  <div>
    <a href="home.html" style="text-decoration: none; color: black;">Home</a>
  </div>
  <div>
    <a href="bed.html" style="text-decoration: none; color: black;">Bedding</a>
  </div>
</div>


<hr>

 `
}

export default navbar_main

//  <img src="assets/IMG_2152.PNG" alt="" style="width: 100px; height: auto; border: none;">

