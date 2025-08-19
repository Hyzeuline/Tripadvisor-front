document.addEventListener("DOMContentLoaded", () => {
  //  on est certain que le DOM est chargé ici
  console.log("DOM chargé !");

  const button = document.querySelector(".container nav button");

  button.addEventListener("click", () => {
    const modal = document.getElementById("modal");
    modal.classList.toggle("toggle");
  });

  const cross = document.getElementById("cross-toggle");

  cross.addEventListener("click", () => {
    const modal = document.getElementById("modal");
    modal.classList.toggle("toggle");
  });

  document.querySelector("form").addEventListener("submit", async event => {
    // pour éviter le refresh de la page
    event.preventDefault(); // suppression du comportement de base du form
    const data = {
      firstname: document.getElementById("firstname").value,
      lastname: document.getElementById("lastname").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
    console.log(data);
    try {
      const response = await axios.post(
        "http://localhost:3000/send-mail",
        data
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  });
});
