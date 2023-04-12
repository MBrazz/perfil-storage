"use strict"

const btn = document.querySelector("#send")

btn.addEventListener("click", function (e) {
  e.preventDefault()
  Update()
})

function Update() {
  const name = document.querySelector("#name")
  var nameValue = name.value

  const age = document.querySelector("#age")
  var ageValue = age.value

  const location = document.querySelector("#location")
  var locationValue = location.value

  const bio = document.querySelector("#bio")
  var bioValue = bio.value

  if (localStorage) {
    window.location.reload()
  }

  if (nameValue.length > 0) {
    localStorage.setItem("name", nameValue)
  }
  var ageBool = ageValue.length > 0

  if (ageValue <= 0 || ageValue > 200) {
    ageBool = false
    if (ageValue > 200) {
      alert("Erro! idade maior que 200")
    } else if (ageValue <= 0) {
      alert("Erro! idade menor que 1")
    }
  } else {
    localStorage.setItem("age", ageValue)
  }

  if (locationValue.length > 0) {
    localStorage.setItem("location", locationValue)
  }

  if (bioValue.length > 0) {
    localStorage.setItem("bio", bioValue)
  }

  if (
    ageBool ||
    nameValue.length > 0 ||
    locationValue.length > 0 ||
    bioValue.length > 0
  ) {
    alert("Atualizado(s) com sucesso!")
  }
}

function getData() {
  var nameStorage = localStorage.getItem("name")
  var ageStorage = localStorage.getItem("age")
  var locationStorage = localStorage.getItem("location")
  var bioStorage = localStorage.getItem("bio")

  if (nameStorage !== null) {
    document.getElementById("profile-name").innerText = nameStorage
  }

  if (ageStorage !== null) {
    document.getElementById("profile-age").innerText =
      ageStorage > 1 ? ageStorage + " anos" : ageStorage + " ano"
  }

  if (locationStorage !== null) {
    document.getElementById("profile-location").innerText = locationStorage
  }

  if (bioStorage !== null) {
    document.getElementById("profile-bio").innerText = bioStorage
  }
}

getData()
