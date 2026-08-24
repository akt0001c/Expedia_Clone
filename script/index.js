let click=true;
document.querySelector("#btn").addEventListener("click",function(){
    
   
    if(click==true)
        {
        document.querySelector("#drop_content").style.display="block";
        click=false;
        }

    else if(click==false)
            {
            document.querySelector("#drop_content").style.display="none";
            click=true;
            }

   
    
    
});

let sign_in=true;
document.querySelector("#sign_in").addEventListener("click",function(){
    console.log("checking");
   if(sign_in==true)
   {
    document.querySelector("#sign-in-menu").style.display="block";
    sign_in=false;
   }

   else if(sign_in==false)
   {
    document.querySelector("#sign-in-menu").style.display="none"
    sign_in=true;
   }
});