import { getComputers, getEmployees } from "./data.js"

export const mainHtml = () => {
    const computers = getComputers()
    const employees = getEmployees()

    return `
        ${employees.map(
            (employee) => {
                const matchingComputer = computers.find(computer => employee.computerId === computer.id)
                return `
                <div class="list"> ${employee.firstName} ${employee.lastName} is using ${matchingComputer.year} ${matchingComputer.model}</div>`
            }).join("")
        }
    `
}