import { getEmployees } from "./database.js"
import { getOrders } from "./database.js"
// import { getEmployees, getOrders } from "./database.js"
// This wouldve been cleaner but does the same thing.

const employees = getEmployees()
const orders = getOrders()
// Track data not words!!!!
// document is refering to the landing page. since the whole project is on one page or DOM Document object model.
// addEventListener is a METHOD that primes the document to "listen" for a browser generated event WITHIN the doc,("This is the type of event"(this is the parameter for the function, can be named ANYTHING))
document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        // giving itemClicked the value of the clickEvent target, where the mouse clicked.
        
        if (itemClicked.id.startsWith("employee")) {
            // item click has an id that starts with employee. you end up with and ARRAY like this ["employee","ID"]. 
            // checking if the id attrubute of the html element you clicked on starts with the string of "employee" and will evaluate to true or false.

            const [, employeeId] = itemClicked.id.split("--")
            // interating the employees array, and storing, ONE object in a newly declared variable of employees.
            // refering to employees array, and storing ONE object in the newly declard variable of employee.

            for (const employee of employees) {
            
                if (employee.id === parseInt(employeeId)) {
                    // parseInt is turning a string into an interger. Alot of crazy stuff going on when i google it. It is scary. the list element. 
                    // referencing the id key on each OBJECT.
                    const employeeOrders = orders.filter(
                        (order) => {
                            // checking to see if the employeesId in the orders array is strickly equal to the employee.Id in the employees array.
                            // the order values can be anything. Its just a place holder .
                            // setting the value of the varible employeeOrders to a newly generated array, VIA the filter() method.
                            if (order.employeeId === employee.id) {
                                return true
                            } 
                        }
                    )
                    window.alert(` ${employee.name} sold ${employeeOrders.length} products`)
                    // Displays a alert in your browser/doc window or other words page. -> alert pops up on your page.
                }
            }
        }
    }
)


export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

