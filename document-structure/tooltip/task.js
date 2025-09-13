document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.has-tooltip');

    elements.forEach(element => {
        element.addEventListener('click', function(e) {
            e.preventDefault();

            // Remove existing active tooltip
            const activeTooltip = document.querySelector('.tooltip_active');
            if (activeTooltip) {
                activeTooltip.remove();
            }

            // Create new tooltip
            const tooltip = document.createElement('div');
            tooltip.classList.add('tooltip', 'tooltip_active');
            tooltip.textContent = this.getAttribute('title');

            // Append to body to measure dimensions
            document.body.appendChild(tooltip);

            // Get positions
            const elementRect = this.getBoundingClientRect();
            const tooltipRect = tooltip.getBoundingClientRect();
            const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            const position = this.dataset.position || 'bottom';
            let tooltipLeft, tooltipTop;

            switch (position) {
                case 'top':
                    tooltipLeft = elementRect.left + (elementRect.width / 2) - (tooltipRect.width / 2) + scrollLeft;
                    tooltipTop = elementRect.top - tooltipRect.height + scrollTop;
                    break;
                case 'bottom':
                    tooltipLeft = elementRect.left + (elementRect.width / 2) - (tooltipRect.width / 2) + scrollLeft;
                    tooltipTop = elementRect.bottom + scrollTop;
                    break;
                case 'left':
                    tooltipLeft = elementRect.left - tooltipRect.width + scrollLeft;
                    tooltipTop = elementRect.top + (elementRect.height / 2) - (tooltipRect.height / 2) + scrollTop;
                    break;
                case 'right':
                    tooltipLeft = elementRect.right + scrollLeft;
                    tooltipTop = elementRect.top + (elementRect.height / 2) - (tooltipRect.height / 2) + scrollTop;
                    break;
                default:
                    tooltipLeft = elementRect.left + (elementRect.width / 2) - (tooltipRect.width / 2) + scrollLeft;
                    tooltipTop = elementRect.bottom + scrollTop;
            }

            // Set position
            tooltip.style.left = tooltipLeft + 'px';
            tooltip.style.top = tooltipTop + 'px';
        });
    });
});