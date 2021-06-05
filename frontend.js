//Popup Contact form

//Validating all fields
function input_fields() {
  if (document.getElementById('name').value=="" || document.getElementById('email').value=="" || document.getElementById('msg').value=="") {
    alert("Complete all fields");
  }
  else {
    document.getElementById('form').submit();
    alert("Message sent successfully....");
  }
}

//Display contact Form
function show_form() {
  document.getElementById('messagebox').style.display = "block";
}

//Close Contact Form
function close_form() {
  document.getElementById('messagebox').style.display = "none";
}

//Audio Player
function playclip()
{
   if(navigator.appName == "Microsoft internet Explorer" && (navigator.appVersion.indexOf("MSIE 7")!=-1) ||
   (navigator.appVersion.indexOf("MSIE 8")!=-1))
   {
      if(document.all)
      {
         document.all.sound.src="audios/Jingle-Bells.mp3";
      }
   }
   else
   {
      var audio = document.getElementsByTagName("audio")[0];
      audio.play();
   }
}
