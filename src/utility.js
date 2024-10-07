
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
export const handleFormSubmit = (formRef, submitButtonRef, scriptURL) => {
    if (formRef.current) {
        formRef.current.addEventListener('submit', e => {
            e.preventDefault();
            submitButtonRef.current.disabled = true; 

            fetch(scriptURL, { method: 'POST', body: new FormData(formRef.current) })
            .then(response => {
                if (response.ok) { 
                    alert('Message sent successfully.');
                    formRef.current.reset();
                    submitButtonRef.current.disabled = false; 
                } else {
                    throw new Error('Form submission failed.');
                }
            })
            .catch(error => {
                console.error('Error!', error.message);
                alert('Failed to send message, please try again.');
                submitButtonRef.current.disabled = false; 
            });
        });
    }
};
