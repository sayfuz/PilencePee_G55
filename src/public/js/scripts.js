var pathname = window.location.pathname

if (pathname == "/") {
  document.getElementById("inicio").classList.add("active")
} else if (pathname == "/sobre-proyecto") {
  document.getElementById("sobre").classList.add("active")
} else if (pathname == "/contacto") {
  document.getElementById("contacto").classList.add("active")
} else if (pathname == "/ingresar") {
  document.getElementById("ingresar").classList.add("active")
}else if (pathname == "/registro") {
    document.getElementById("registro").classList.add("active")
}
