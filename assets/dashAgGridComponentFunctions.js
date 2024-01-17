var dagcomponentfuncs = (window.dashAgGridComponentFunctions = window.dashAgGridComponentFunctions || {});

dagcomponentfuncs.ContactoButton = function (props) {
    // Function to check if a string is a valid URL
    const isValidURL = (url) => {
        try {
            new URL(url);
            return true;
        } catch (error) {
            return false;
        }
    };

    // Handling the button click event to navigate to the specified URL
    const handleNavigate = () => {
        try {
            // Attempt to create a URL object
            const url = new URL(props.value);

            // Open the URL in a new tab
            window.open(url.href, '_blank');
        } catch (error) {
            // Log the error and show an alert for an invalid URL
            console.error('Invalid URL:', props.value);
            alert('Invalid URL. Please provide a valid URL.');
        }
    };

    // Handling the button click event to copy the URL to the clipboard
    const handleCopyToClipboard = () => {
        try {
            // Attempt to copy the URL to the clipboard
            navigator.clipboard.writeText(props.value);
            alert('URL copied to clipboard!');
        } catch (error) {
            console.error('Unable to copy to clipboard:', error);
            alert('Failed to copy URL to clipboard.');
        }
    };

    // Render two buttons if the URL is valid, otherwise render only the "Copy URL to Clipboard" button
    return isValidURL(props.value) ? (
        React.createElement(
            'div',
            null,
            React.createElement('button', { onClick: handleNavigate }, 'Go to Page'),
            React.createElement('button', { onClick: handleCopyToClipboard }, 'Copy URL to Clipboard')
        )
    ) : (
        React.createElement('button', { onClick: handleCopyToClipboard }, 'Copy URL to Clipboard')
    );
};

dagcomponentfuncs.EmailButton = function (props) {
    return React.createElement(
        'button',
        { onClick: () => window.open('mailto:' + props.value) },
        'Send Email'
    );
}


dagcomponentfuncs.WebButton = function (props) {
    return React.createElement(
        'button',
        { onClick: () => window.open(props.value, '_blank') },
        'Go to Website'
    );
}

dagcomponentfuncs.IniciativaComponent = function (props) {
    return React.createElement(
        'div',
        { style: { display: 'flex', alignItems: 'center' } },
        React.createElement('span', null, props.value),
        React.createElement('i', { className: 'fas fa-arrow-right', style: { marginLeft: '5px', cursor: 'pointer' } })
    );
};
