


const API = "http://localhost:8088"

// Transient Database
const applicationState = {
    computers: [],
    employees: []
}



// Fetch Functions
export const fetchEmployees = () => {
    return fetch(`${API}/employees`)
    .then(response => response.json())
    .then((employees) => {
        applicationState.employees = employees
    })
}

export const fetchComputers = () => {
    return fetch(`${API}/computers`)
    .then(response => response.json())
    .then((computers) => {
        applicationState.computers = computers
    })
}


// Get Functions

export const getEmployees = () => {
    return applicationState.employees.map( employees => ({ ...employees }))
}

export const getComputers = () => {
    return applicationState.computers.map( computers => ({ ...computers }))
}