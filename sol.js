class contact {
  constructor(nom, numero) {
    this.nom = nom;
    this.numero = numero;
  }
}
var contacts = [];

function ajouter() {
  let nom = document.getElementById("amie").value;
  let num = document.getElementById("numero").value;
  const format_tel = /^[0-9]{10}$/;
  if (format_tel.test(num)) {
    let cnt = new contact(nom, num);
    contacts.push(cnt);
  } else {
    alert("Format de numero incorrecte");
  }
}

function supprimer() {
  let n = prompt("Nom du contact a supprimer");
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].nom == n) {
      contacts.pop(i);
    }
  }
  return contacts;
}

function rechercher() {
  let n = prompt("Nom du contact a rechercher");
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].nom == n) {
      alert("Le numero du contact est : " + contacts[i].numero);
      return;
    }
  }
  alert("Le contact n'est pas dans la liste");
}

function liste() {
  if (contacts.length == 0) {
    alert("Le liste est vide");
  }
  for (let i = 0; i < contacts.length; i++) {
    console.log(
      "Nom : " + contacts[i].nom + " - Numero : " + contacts[i].numero
    );
    alert("Nom : " + contacts[i].nom + " - Numero : " + contacts[i].numero);
  }
}
