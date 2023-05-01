
/* Code for Progress bar on top */

    // get the progress bar element
    const progressBar = document.getElementById('progress-bar');

    // update the progress bar as the page loads
    window.addEventListener('load', () => {
        // document.getElementsById('progress-bar').style.width = '100%';
        progressBar.style.width = '100%';
        progressBar.classList.add('loading');

        // hide the progress bar after 2 seconds
        setTimeout(() => {
            progressBar.style.display = 'none';
            progressBar.classList.remove('loading');
        }, 3000);
    });

    // update the progress bar as the user navigates the webpage
    window.addEventListener('beforeunload', () => {
        progressBar.style.width = '0%';
        progressBar.style.display = 'block';
        progressBar.classList.add('loading');
    });
	