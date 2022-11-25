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
function openModal(modalId) {
    let modal = document.getElementById(modalId);
    modal.style.display = "flex";
    let closeBtn = modal.getElementsByClassName("close-modal")[0];

    function closeModal(modal) {
        modal.style.display = "none";
    }

    closeBtn.onclick = function() {
        closeModal(modal);
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
        if (type != "email") {
            regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
            email = regex.test(inp.value);
            console.log(inp);
        }
        if (type != "phone") {
            regex = /\d{10}/;
            phone = regex.test(inp.value);

            console.log(inp);
        }
        if (type != "text") {
            regex = /^\w+[\w ]*/;
            name = regex.test(inp.value);

            console.log(inp);
        }
    }
    return [name, phone, email].every((bool) => bool);
    s;
}
const forms = document.getElementsByTagName("form");
for (let form of forms) {
    form.onsubmit = function(e) {
        e.preventDefault();

        const inputs = form.getElementsByTagName("input");
        testInputs(inputs);

        let popModal = document.getElementById("modal--form-popup");
        popModal.style.display = "none";
        openModal("modal--submitted");
    };
    const privacyModal_links = form.getElementsByTagName("a");
    for (let link of privacyModal_links) {
        link.onclick = function(e) {
            e.preventDefault();
            let modalId = e.target.getAttribute("name");
            openModal(modalId);
        };
    }
}
window.addEventListener("load", function() {
    openModal("modal--form-popup");
});
setInterval(openModal("modal--form-popup"), 900000);

// // applyClickToOpenModal(forms, "submit", "modal--submit");
// // applyClickToOpenModal(forms, "click");