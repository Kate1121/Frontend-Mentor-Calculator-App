// Detect the user's preferred color scheme
var existingTheme = window.matchMedia("(prefers-color-scheme: dark)")["matches"];

var setTheme = theme => document.documentElement.className = theme;

// Set the class of the root element to "dark" if the user's preferred color scheme is dark
if (existingTheme) {
    setTheme("dark");
    slider.setAttribute("value", 1);
}
// Set the class of the root element to "light" if the user's preferred color scheme is light
else {
    setTheme("light");
}

function change_theme_color() {

    var slider = document.getElementById("themes-slider").value;

    if (slider == "1") {
        setTheme("dark");
    } else if (slider == "2") {
        setTheme("light");
    } else {
        setTheme("purple");
    }

}

function add_number_to_form_input() {
    var id = document.activeElement.id;

    // Store the value of the active element 
    var number = document.getElementById(`${id}`).value;

    // Add the value of the active element to the number input field
    document.getElementById("numbers").value += number;
}

// Store the two numbers being used in the calculation
var computation_nums = []

// Store the result of decide_mathematical_operation()
var carry_over = 0

function decide_mathematical_operation() {
    var num = document.getElementById("numbers").value
    computation_nums.push(num)
    var form = document.getElementById("form")

    // Empty the form after a number has been stored
    form.reset()

    var id = document.activeElement.id;

    // Store the value of the active Element 
    var symbol = document.getElementById(`${id}`).id;

    // Assign values to carry_over based on the mathematical operator selected
    if (symbol == "plus") {
        carry_over = 1
    } else if (symbol == "minus") {
        carry_over = 2
    } else if (symbol == "multiply") {
        carry_over = 3
    } else if (symbol == "divide") {
        carry_over = 4
    }

}

var total = 0

function calc() {
    var num = document.getElementById("numbers").value
    computation_nums.push(num)

    // Perform mathematical operations based on the value of carry_over
    if (carry_over == 1) {
        for (var i = 0; i < computation_nums.length; i++) {
            total += Number(computation_nums[i])
        }
    } else if (carry_over == 2) {
        for (var i = 0; i < computation_nums.length; i++) {
            total = Number(computation_nums[0]) - Number(computation_nums[1])
        }
    } else if (carry_over == 3) {
        for (var i = 0; i < computation_nums.length; i++) {
            total = Number(computation_nums[0]) * Number(computation_nums[1])
        }
    } else if (carry_over == 4) {
        for (var i = 0; i < computation_nums.length; i++) {
            total = Number(computation_nums[0]) / Number(computation_nums[1])
        }
    }

    // Assign the total to the value of the number input field
    document.getElementById("numbers").value = total

}

// Remove the last character that was added to the input number field
function del() {
    var num = document.getElementById("numbers").value

    // Split the value of num into individual characters
    var data_items = String(num).split("")

    data_items.pop()
    data_items = String(data_items).replaceAll(",", "")
    document.getElementById("numbers").value = data_items
}

// Remove all of the characters in the number input field and set computation_nums and total to their default values
function reset() {
    var form = document.getElementById("form")
    form.reset()
    computation_nums.length = 0
    total = 0
}