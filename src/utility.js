// Select elements for sidebar toggle functionality
const show = document.querySelector('.show');
const hide = document.querySelector('.hide');
const sidebar = document.querySelector('.sidebar');

// Show sidebar
if (show) {
    show.addEventListener('click', function() {
        sidebar.style.display = 'flex';
    });
}

// Hide sidebar
if (hide) {
    hide.addEventListener('click', function() {
        sidebar.style.display = 'none';
    });
}

// Tab functionality
const tablinks = document.getElementsByClassName('tab-links');
const tabcontents = document.getElementsByClassName('tab-contents');

export function opentab(event, tabname) {
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


// Form submission functionality
const scriptURL = 'https://script.google.com/macros/s/AKfycbyMrFpLeMAb4C5YtcHMw0BF1Tlfhny1kVaEz_XEsNLIbOs_CztfJGSMDHTtPVXfaEbVcQ/exec';
const form = document.forms['submit-to-google-sheet'];
const submitButton = document.querySelector('.submit-btn');

if (form) {
    form.addEventListener('submit', e => {
        e.preventDefault();
        submitButton.disabled = true;

        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            alert("Message sent successfully.");
            form.reset();
        })
        .catch(error => { console.error('Error!', error.message);
        })
        .finally(() => {
            submitButton.disabled = false;
        });
    });
}
