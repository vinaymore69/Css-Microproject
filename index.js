const periodicElements = [
    "Hydrogen", "Helium", "Lithium", "Beryllium", "Boron", "Carbon", "Nitrogen", "Oxygen", "Fluorine", "Neon",
    "Sodium", "Magnesium", "Aluminum", "Silicon", "Phosphorus", "Sulfur", "Chlorine", "Argon", "Potassium", "Calcium",
    "Scandium", "Titanium", "Vanadium", "Chromium", "Manganese", "Iron", "Cobalt", "Nickel", "Copper", "Zinc",
    "Gallium", "Germanium", "Arsenic", "Selenium", "Bromine", "Krypton", "Rubidium", "Strontium", "Yttrium", "Zirconium",
    "Niobium", "Molybdenum", "Technetium", "Ruthenium", "Rhodium", "Palladium", "Silver", "Cadmium", "Indium", "Tin",
    "Antimony", "Tellurium", "Iodine", "Xenon", "Cesium", "Barium", "Lanthanum", "Cerium", "Praseodymium", "Neodymium",
    "Promethium", "Samarium", "Europium", "Gadolinium", "Terbium", "Dysprosium", "Holmium", "Erbium", "Thulium", "Ytterbium", 
    "Lutetium", "Hafnium", "Tantalum", "Tungsten", "Rhenium", "Osmium", "Iridium", "Platinum", "Gold", "Mercury", 
    "Thallium", "Lead", "Bismuth", "Polonium", "Astatine", "Radon", "Francium", "Radium", "Actinium", "Thorium", 
    "Protactinium", "Uranium", "Neptunium", "Plutonium", "Americium", "Curium", "Berkelium", "Californium", "Einsteinium", 
    "Fermium", "Mendelevium", "Nobelium", "Lawrencium", "Rutherfordium", "Dubnium", "Seaborgium", "Bohrium", "Hassium", 
    "Meitnerium", "Darmstadtium", "Roentgenium", "Copernicium", "Nihonium", "Flerovium", "Moscovium", "Livermorium", 
    "Tennessine", "Oganesson"
];

const periodicElementInitials = [
    "H", "He", "Li", "Be", "B", "C", "N", "O", "F", "Ne",
    "Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar", "K", "Ca",
    "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn",
    "Ga", "Ge", "As", "Se", "Br", "Kr", "Rb", "Sr", "Y", "Zr",
    "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn",
    "Sb", "Te", "I", "Xe", "Cs", "Ba", "La", "Ce", "Pr", "Nd",
    "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", 
    "Lu", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg", 
    "Tl", "Pb", "Bi", "Po", "At", "Rn", "Fr", "Ra", "Ac", "Th", 
    "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", 
    "Md", "No", "Lr", "Rf", "Db", "Sg", "Bh", "Hs", "Mt", "Ds", 
    "Rg", "Cn", "Nh", "Fl", "Mc", "Lv", "Ts", "Og"
];

const periodicElementWeights = [
    1.008, 4.0026, 6.94, 9.0122, 10.81, 12.011, 14.007, 15.999, 18.998, 20.180, 
    22.990, 24.305, 26.982, 28.085, 30.974, 32.06, 35.45, 39.948, 39.098, 40.078, 
    44.956, 47.867, 50.942, 51.996, 54.938, 55.845, 58.933, 58.693, 63.546, 65.38, 
    69.723, 72.63, 74.922, 78.971, 79.904, 83.798, 85.468, 87.62, 88.906, 91.224, 
    92.906, 95.95, 98, 101.07, 102.91, 106.42, 107.87, 112.41, 114.82, 118.71, 
    121.76, 127.6, 126.9, 131.29, 132.91, 137.33, 138.91, 140.12, 140.91, 144.24, 
    145, 150.36, 151.96, 157.25, 158.93, 162.5, 164.93, 167.26, 168.93, 173.05, 
    174.97, 178.49, 180.95, 183.84, 186.21, 190.23, 192.22, 195.08, 196.97, 200.59, 
    204.38, 207.2, 208.98, 209, 210, 222, 223, 226, 227, 232.04, 
    231.04, 238.03, 237, 244, 243, 247, 247, 251, 252, 257, 
    258, 259, 262, 267, 270, 271, 270, 277, 276, 281, 
    282, 285, 286, 289, 290, 293, 294, 294
];



const boxes = document.querySelectorAll('.box');

// Add event listeners to each box
boxes.forEach(box => {
    box.addEventListener('mouseover', function() {
        const elementId = parseInt(this.id) - 1; // Get the index (id starts from 1, arrays start from 0)

        // Update the content of the main element display
        document.getElementById('element-no').textContent = this.id;
        document.getElementById('element-initials').textContent = periodicElementInitials[elementId];
        document.getElementById('element-name').textContent = periodicElements[elementId];
        document.getElementById('element-weight').textContent = periodicElementWeights[elementId];
    });
});

function addTiltAttributes() {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.setAttribute('data-tilt', '');
        box.setAttribute('data-tilt-max', '80');
        box.setAttribute('data-tilt-speed', '900');
        box.setAttribute('data-tilt-perspective', '1000');
    });
}

addTiltAttributes();

VanillaTilt.init(document.querySelectorAll(".box"), {
    max: 20,
    speed: 700,
    perspective: 900
});






const metalsDiv = document.querySelector('.metals');
const metalloidsDiv = document.querySelector('.metalloids');
const nonMetalsDiv = document.querySelector('.nonmetals');

// Select specific groups for Metals hover
const reactiveNonMetals = document.querySelector('.reactive-nonmetals');
const nobelGases = document.querySelector('.nobel-gases');

// Select specific groups for Non-Metals hover
const metalsGroups = document.querySelectorAll('.alkali-metals, .alkaline-earth-metals, .lanthanoids, .actinoids, .transition-metals, .post-transition-metals');

// Metals hover effect (affects metalloids, reactive-nonmetals, and nobel-gases)
metalsDiv.addEventListener('mouseenter', () => {
  metalloidsDiv.classList.add('transparent');
  reactiveNonMetals.classList.add('transparent');
  nobelGases.classList.add('transparent');
});

metalsDiv.addEventListener('mouseleave', () => {
  metalloidsDiv.classList.remove('transparent');
  reactiveNonMetals.classList.remove('transparent');
  nobelGases.classList.remove('transparent');
});

// Metalloids hover effect (only self-colored, all else transparent)
metalloidsDiv.addEventListener('mouseenter', () => {
  metalsDiv.classList.add('transparent');
  reactiveNonMetals.classList.add('transparent');
  nobelGases.classList.add('transparent');
  metalsGroups.forEach(group => group.classList.add('transparent'));
});

metalloidsDiv.addEventListener('mouseleave', () => {
  metalsDiv.classList.remove('transparent');
  reactiveNonMetals.classList.remove('transparent');
  nobelGases.classList.remove('transparent');
  metalsGroups.forEach(group => group.classList.remove('transparent'));
});

// Non-Metals hover effect (affects alkali-metals, alkaline-earth-metals, lanthanoids, actinoids, transition-metals, post-transition-metals, but not metalloids)
nonMetalsDiv.addEventListener('mouseenter', () => {
  metalsGroups.forEach(group => group.classList.add('transparent'));
  // Ensure metalloids are also transparent on hover
  metalloidsDiv.classList.add('transparent');
});

nonMetalsDiv.addEventListener('mouseleave', () => {
  metalsGroups.forEach(group => group.classList.remove('transparent'));
  // Make sure metalloids return to normal on mouse leave
  metalloidsDiv.classList.remove('transparent');
});






// Alkali metals
const alkaliMetals = [3, 11, 19, 37, 55, 87];


alkaliMetals.forEach(num => {
    const box = document.getElementById(num);
    if (box) {
        box.style.backgroundColor = "#9a630a"; // Set background color
    }
});


// Define the arrays for each category with their corresponding colors
const alkalineEarthMetals = [4, 12, 20, 38, 56, 88]; // Color: #b9b901
const lanthanides = [`57a`,57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71]; // Color: #543913
const actinides = [`89a`,89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103]; // Color: #7c1e5b
const transitionMetals = [
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
  39, 40, 41, 42, 43, 44, 45, 46, 47, 48,
  72, 73, 74, 75, 76, 77, 78, 79, 80,
  104, 105, 106, 107, 108,
]; // Color: #891809
const postTransitionMetals = [13, 31, 49, 50, 81, 82, 83]; // Color: royalblue
const metalloids = [5, 14, 32, 33, 51, 52, 84]; // Color: rgb(26, 161, 118)
const reactiveNon_Metals = [1, 6, 7, 8, 15, 16, 34, 9, 17, 35, 53, 85]; // Color: #17773e
const nobleGases = [2, 10, 18, 36, 54, 86]; // Color: #55187b

// Function to set background color based on category
function setElementColors(categoryArray, color) {
    categoryArray.forEach(num => {
        const box = document.getElementById(num);
        if (box) {
            box.style.backgroundColor = color; // Set the background color
        }
    });
}

// Apply colors for each category
setElementColors(alkalineEarthMetals, "#b9b901");
setElementColors(lanthanides, "#543913");
setElementColors(actinides, "#7c1e5b");
setElementColors(transitionMetals, "#891809");
setElementColors(postTransitionMetals, "royalblue");
setElementColors(metalloids, "rgb(26, 161, 118)");
setElementColors(reactiveNon_Metals, "#17773e");
setElementColors(nobleGases, "#55187b");



// Store original colors
const originalColors = {};

// Function to change background color of all boxes except the specified group
function changeOtherBoxesColor(groupArray, isHovering) {
    const boxes = document.querySelectorAll('.box'); // Select all boxes
    boxes.forEach(box => {
        const id = parseInt(box.id); // Convert ID to number
        if (!groupArray.includes(id)) { // Check if ID is not in the current group
            if (isHovering) {
                // Store original color if hovering
                originalColors[id] = box.style.backgroundColor || ''; // Save current color
                box.style.backgroundColor = 'transparent'; // Set to transparent on hover
            } else {
                // Revert to original color
                box.style.backgroundColor = originalColors[id] || ''; // Reset to original color
            }
        }
    });
}

// Add event listeners for each group of elements
document.querySelector('.alkali-metals').addEventListener('mouseover', () => changeOtherBoxesColor(alkaliMetals, true));
document.querySelector('.alkali-metals').addEventListener('mouseout', () => changeOtherBoxesColor(alkaliMetals, false));

document.querySelector('.alkaline-earth-metals').addEventListener('mouseover', () => changeOtherBoxesColor(alkalineEarthMetals, true));
document.querySelector('.alkaline-earth-metals').addEventListener('mouseout', () => changeOtherBoxesColor(alkalineEarthMetals, false));

document.querySelector('.lanthanoids').addEventListener('mouseover', () => changeOtherBoxesColor(lanthanides, true));
document.querySelector('.lanthanoids').addEventListener('mouseout', () => changeOtherBoxesColor(lanthanides, false));

document.querySelector('.actinoids').addEventListener('mouseover', () => changeOtherBoxesColor(actinides, true));
document.querySelector('.actinoids').addEventListener('mouseout', () => changeOtherBoxesColor(actinides, false));

document.querySelector('.transition-metals').addEventListener('mouseover', () => changeOtherBoxesColor(transitionMetals, true));
document.querySelector('.transition-metals').addEventListener('mouseout', () => changeOtherBoxesColor(transitionMetals, false));

document.querySelector('.post-transition-metals').addEventListener('mouseover', () => changeOtherBoxesColor(postTransitionMetals, true));
document.querySelector('.post-transition-metals').addEventListener('mouseout', () => changeOtherBoxesColor(postTransitionMetals, false));

document.querySelector('.metalloids').addEventListener('mouseover', () => changeOtherBoxesColor(metalloids, true));
document.querySelector('.metalloids').addEventListener('mouseout', () => changeOtherBoxesColor(metalloids, false));

document.querySelector('.reactive-nonmetals').addEventListener('mouseover', () => changeOtherBoxesColor(reactiveNon_Metals, true));
document.querySelector('.reactive-nonmetals').addEventListener('mouseout', () => changeOtherBoxesColor(reactiveNon_Metals, false));

document.querySelector('.nobel-gases').addEventListener('mouseover', () => changeOtherBoxesColor(nobleGases, true));
document.querySelector('.nobel-gases').addEventListener('mouseout', () => changeOtherBoxesColor(nobleGases, false));

// Event listeners for Metals div
document.querySelector('.metals').addEventListener('mouseover', () => {
    changeBoxesColor(metalloids, true); // Change metalloids to transparent
    changeBoxesColor(reactiveNon_Metals, true); // Change reactive non-metals to transparent
    changeBoxesColor(nobleGases, true); // Change noble gases to transparent
});

document.querySelector('.metals').addEventListener('mouseout', () => {
    changeBoxesColor(metalloids, false); // Revert metalloids
    changeBoxesColor(reactiveNon_Metals, false); // Revert reactive non-metals
    changeBoxesColor(nobleGases, false); // Revert noble gases
});

document.querySelector('.nonmetals').addEventListener('mouseover', () => {
    changeBoxesColor(alkaliMetals, true); // Change metalloids to transparent
    changeBoxesColor(alkalineEarthMetals, true); // Change reactive non-metals to transparent
    changeBoxesColor(lanthanides, true); // Change noble gases to transparent
    changeBoxesColor(actinides, true); // Change noble gases to transparent
    changeBoxesColor(transitionMetals, true); // Change noble gases to transparent
    changeBoxesColor(postTransitionMetals, true); // Change noble gases to transparent
    changeBoxesColor(metalloids, true); // Change noble gases to transparent
});

document.querySelector('.nonmetals').addEventListener('mouseout', () => {
    changeBoxesColor(alkaliMetals, false); // Change metalloids to transparent
    changeBoxesColor(alkalineEarthMetals, false); // Change reactive non-metals to transparent
    changeBoxesColor(lanthanides, false); // Change noble gases to transparent
    changeBoxesColor(actinides, false); // Change noble gases to transparent
    changeBoxesColor(transitionMetals, false); // Change noble gases to transparent
    changeBoxesColor(postTransitionMetals, false); // Change noble gases to transparent
    changeBoxesColor(metalloids, false); // Change noble gases to transparent
});

// Function to change background color of specified IDs
function changeBoxesColor(ids, transparent) {
    ids.forEach(id => {
        const box = document.getElementById(id);
        if (box) {
            box.style.backgroundColor = transparent ? 'transparent' : originalColors[id] || ''; // Reset to original color
        }
    });
}



// Select all div elements by class names with new variable names
const alkaliDiv = document.querySelector('.alkali-metals');
const alkalineEarthDiv = document.querySelector('.alkaline-earth-metals');
const lanthanoidsDiv = document.querySelector('.lanthanoids');
const actinoidsDiv = document.querySelector('.actinoids');
const transitionMetalsDiv = document.querySelector('.transition-metals');
const postTransitionDiv = document.querySelector('.post-transition-metals');
const reactiveNonmetalsDiv = document.querySelector('.reactive-nonmetals');
const nobleGasesDiv = document.querySelector('.nobel-gases');
const  metalloids_Div = document.querySelector('.metalloids');


// Create an array of all the divs using new variable names
const allElementDivs = [
    alkaliDiv,
    alkalineEarthDiv,
    lanthanoidsDiv,
    actinoidsDiv,
    transitionMetalsDiv,
    postTransitionDiv,
    reactiveNonmetalsDiv,
    nobleGasesDiv,
    metalloids_Div
];

// Add mouseover and mouseout event listeners to each div
allElementDivs.forEach(elementDiv => {
    elementDiv.addEventListener('mouseover', () => {
        allElementDivs.forEach(otherElementDiv => {
            if (otherElementDiv !== elementDiv) {
                otherElementDiv.classList.add('transparent'); // Add transparent class to others
            }
        });
    });

    elementDiv.addEventListener('mouseout', () => {
        allElementDivs.forEach(otherElementDiv => {
            otherElementDiv.classList.remove('transparent'); // Remove transparent class
        });
    });
});
