//----get user form data-----//

const submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let vistarName = document.getElementById("name").value;
  let vistarEmail = document.getElementById("email").value;
  let vistarPhone = document.getElementById("phone").value;
  let vistarMessage = document.getElementById("comments").value;
  let ErrMasseg = document.getElementById("errmassge");
  let showName = document.getElementById("vistrName");

  if (vistarName === "" || vistarMessage === "") {
    ErrMasseg.style.display = "block";
  } else {
    let bioData = `
		userName : ${vistarName}
		<br> userEmail : ${vistarEmail}
		<br> userPhone : ${vistarPhone}
		<br> userMessage : ${vistarMessage}`;

    ErrMasseg.style.display = "none";
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "engrjunaidali0@gmail.com",
      Password: "FAE15FBAE46D0F3D6731DF9F40E267576B2E",
      To: "engrjunaidali0@gmail.com",
      From: "engrjunaidali0@gmail.com",
      Subject: vistarMessage,
      Body: bioData,
    })
      .then(console.log("success mail"))
      .then((document.getElementById("succseTabe").style.display = "flex"));

    showName.innerHTML = vistarName;
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("comments").value = "";
    setInterval(() => {
      document.getElementById("succseTabe").style.display = "none";
    }, 5000);
  }
});

let closeIcon = document.getElementById("closeIcon");
closeIcon.addEventListener("click", function () {
  document.getElementById("succseTabe").style.display = "none";
});

setTimeout(() => {
  window.onload = document
    .querySelector(".daligBox")
    .setAttribute("style", "display:flex");
}, 5000);

document
  .querySelector("#colos_model_box")
  .addEventListener("click", function () {
    document.querySelector(".daligBox").setAttribute("style", "display:none");
  });

document.querySelector("#conteMe").addEventListener("click", function () {
  document.querySelector(".daligBox").setAttribute("style", "display:none");
});
