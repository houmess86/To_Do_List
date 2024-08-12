const taskInput = document.getElementById("taskInput");
const taskList = document.querySelector(".taskList");

addToTask.addEventListener("click", () => {
  if (taskInput.value !== "") {
    //Créaction de li
    const taskLi = document.createElement("li");
    taskLi.classList.add("listyle");
    taskList.appendChild(taskLi);
    taskLi.textContent = taskInput.value;
    taskInput.value = "";
    //Création de du conteneur des boutons delete et check
    const checkDel = document.createElement("div");
    checkDel.classList.add("checkdel-btn");
    taskLi.appendChild(checkDel);
    //Création du bouton checkbox
    const checkIcon = document.createElement("i");
    checkIcon.className = "fas fa-square-check fa-2x";
    checkDel.appendChild(checkIcon);
    //Création du bouton delete
    const deleteIcon = document.createElement("i");
    deleteIcon.className = "fa-solid fa-square-minus fa-2x";
    checkDel.appendChild(deleteIcon);
    //Evenement sur le bouton supprimé
    checkIcon.addEventListener("click", () => {
      taskLi.classList.toggle("check-li");
    });
    deleteIcon.addEventListener("click", () => {
      taskLi.remove();
    });
  } else {
    alert("Veuillez ajouter une tâche");
  }
});
