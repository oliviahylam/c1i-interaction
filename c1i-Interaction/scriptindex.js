function showTooltip(tooltipId, event) {
    event.stopPropagation(); // Prevent click from bubbling to the document level

    // Hide all other tooltips first
    const tooltips = document.querySelectorAll('.tooltip');
    tooltips.forEach(tooltip => {
        tooltip.style.display = 'none';
    });

    // Show the correct tooltip at the clicked position
    const tooltip = document.getElementById(tooltipId);
    if (tooltip) {
        const mapContainerRect = document.querySelector('.map-container').getBoundingClientRect();
        const tooltipX = event.clientX - mapContainerRect.left;  // X coordinate relative to map container
        const tooltipY = event.clientY - mapContainerRect.top;   // Y coordinate relative to map container

        // Adjust tooltip position to ensure it appears where the mouse clicked
        tooltip.style.left = `${tooltipX}px`;
        tooltip.style.top = `${tooltipY}px`;
        tooltip.style.display = 'block';
    }

    // Add click event listeners for buttons inside tooltips
    addTooltipClickListeners();
}

// Add click listeners for tooltip buttons
function addTooltipClickListeners() {
    // Links for Financial District
    const chargingBullLink = document.getElementById('entry6.html');
    const fearlessGirlLink = document.getElementById('entry8.html');
    const redCubeLink = document.getElementById('entry4.html');

    if (chargingBullLink) {
        chargingBullLink.onclick = () => {
            window.location.href = 'entry6.html';
        };
    }

    if (fearlessGirlLink) {
        fearlessGirlLink.onclick = () => {
            window.location.href = 'entry8.html';
        };
    }

    if (redCubeLink) {
        redCubeLink.onclick = () => {
            window.location.href = 'entry4.html';
        };
    }

    // Links for World Trade Center
    const sphereLink = document.getElementById('entry7.html');
    const oculusLink = document.getElementById('entry10.html');

    if (sphereLink) {
        sphereLink.onclick = () => {
            window.location.href = 'entry7.html';
        };
    }

    if (oculusLink) {
        oculusLink.onclick = () => {
            window.location.href = 'entry10.html';
        };
    }
}

// Hide tooltip when clicking outside
document.addEventListener('click', function(event) {
    const tooltips = document.querySelectorAll('.tooltip');
    let clickedInside = false;

    // Check if the click happened inside the tooltip
    tooltips.forEach(tooltip => {
        if (tooltip.contains(event.target)) {
            clickedInside = true;
        }
    });

    // Hide tooltips if click was outside
    if (!clickedInside) {
        tooltips.forEach(tooltip => {
            tooltip.style.display = 'none';
        });
    }
});

// Ensure that tooltips close properly when clicking the image map areas again
const clickableAreas = document.querySelectorAll('area');
clickableAreas.forEach(area => {
    area.addEventListener('click', function (event) {
        event.stopPropagation(); // Prevent click from bubbling up and hiding the tooltip
    });
});
