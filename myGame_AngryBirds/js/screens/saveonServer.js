function saveonServer(meno, num, method) {
    var action = document.getElementById('form')
    action.style.margin = "520px 0px 0px 80px"
    if (method == "post") {
        action.setAttribute("method", "post")
        action.setAttribute("action", "http://127.0.0.1:8080/score" + "/" + meno + "/" + num)
    }
    if (method == "get") {
        action.setAttribute("method", "get")
        action.setAttribute("action", "http://127.0.0.1:8080/score")
    }
}