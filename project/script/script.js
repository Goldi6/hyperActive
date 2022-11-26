function openWorkQuestion() {
    const workQwst = document.getElementById("work-promise-question");
    const checkbox = workQwst.getElementsByTagName("input")[0];
    checkbox.checked = true;
}

const blockWithWorkQuestionLink =
    document.getElementsByClassName("pro-card__black")[0];
const workQuestionLinks = blockWithWorkQuestionLink.getElementsByTagName("a");
for (let link of workQuestionLinks) {
    link.onclick = openWorkQuestion;
}

///////////////////
///////////////////
////////////////////
// FORM
function closeModal(modal) {
    modal.style.display = "none";
}

function openModal(modalId) {
    let modal = document.getElementById(modalId);
    modal.style.display = "flex";
    modal.classList.add("open-popup-modal");
    let closeBtn = modal.getElementsByClassName("close-modal")[0];

    closeBtn.onclick = function() {
        closeModal(modal);
        modal.classList.remove("open-popup-modal");
    };
}

// // function applyClickToOpenModal(elements, eventListener, modalId) {
// //     for (let el of elements) {
// //         if (modalId === "") {
// //         }
// //         el.addEventListener(eventListener, () => {
// //             openModal(modalId);
// //         });
// //     }
// // }
function testInputs(inputs) {
    let name, phone, email;
    for (let inp of inputs) {
        let type = inp.getAttribute("type");
        let regex;
        if (type == "email") {
            regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
            email = regex.test(inp.value);
            if (!email) {
                inp.classList.add("error--red");

                inp.setAttribute("placeholder", "*נא להזין אימייל");
            }
        }
        if (type == "phone") {
            regex = /^0\d{9}$/;
            phone = regex.test(inp.value);
            if (!phone) {
                inp.classList.add("error--red");

                inp.setAttribute("placeholder", "*נא להזין מספר טלפון");
            }
        }
        if (type == "text") {
            regex = /^\w+[\w ]*/;
            name = regex.test(inp.value);
            if (!name) {
                inp.classList.add("error--red");

                inp.setAttribute("placeholder", "*נא להזין שם תקין");
            }
        }
    }
    return [name, phone, email].every((bool) => bool);
    s;
}
const forms = document.getElementsByTagName("form");

for (let form of forms) {
    let inputs = form.getElementsByTagName("input");
    for (let inp of inputs) {
        inp.onchange = function(e) {
            e.target.classList.remove("error--red");
        };
    }
    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const inputs = e.target.getElementsByTagName("input");
        let verified = testInputs(inputs);
        if (verified) {
            let popModal = document.getElementById("modal--form-popup");
            popModal.style.display = "none";
            openModal("modal--submitted");
        }
    });

    const privacyModal_links = form.getElementsByTagName("a");
    for (let link of privacyModal_links) {
        link.onclick = function(e) {
            e.preventDefault();
            let modalId = e.target.getAttribute("name");
            openModal(modalId);
        };
    }
}
window.addEventListener("load", openPopupModal);
window.addEventListener("resize", closeOrOpenPopupModal);
setInterval(openPopupModal, 900000);

function openPopupModal() {
    let windowWidth = window.innerWidth;
    if (windowWidth > 925) openModal("modal--form-popup");
}

function closeOrOpenPopupModal() {
    let windowWidth = window.innerWidth;
    let modal = document.getElementById("modal--form-popup");
    if (windowWidth < 925) {
        closeModal(modal);
    } else {
        if (modal.classList.contains("open-popup-modal"))
            openModal("modal--form-popup");
    }
}
// // applyClickToOpenModal(forms, "submit", "modal--submit");
// // applyClickToOpenModal(forms, "click");