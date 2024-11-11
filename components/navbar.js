function navbar_main(){
    return `
    
    <div id="navbar">

    <div id="replacenavbar">
    <p class="replacenavbar">Welcome to Kaaza Home!</p> <p class="replacenavbar" style=" color: rgb(63, 61, 61);;">Make homes beautiful</p> 
    
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
    
<div id="search">
<div id="first">
   
    <div id="b">
      <h6>
    <a href="home.html">
        <img src="IMG_2152.PNG" alt="" style="width: 100px; height: auto;">
    </a>
</h6>

    </div>

</div>
</div>

<div id="toggle">
<div>New!</div>
<div> <a href="bed.html" style="text-decoration: none; color:black" >Bedding</a>
</div>
<div>Home & Furniture</div>

</div>
<hr>

 `
}

 export  default navbar_main



