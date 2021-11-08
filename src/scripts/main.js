import { fetchEmployees, fetchComputers } from "./data.js"
import { display } from "./display.js"

const mainContainer = document.querySelector("#container")

const render = () => {
    fetchEmployees()
    .then(() => {
        fetchComputers()
        .then(() => {
            mainContainer.innerHTML = display()
        })
    })
}


render()