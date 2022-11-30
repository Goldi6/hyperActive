function setupQuestionLinks() {
    function openWorkQuestion() {
        const workQuestion = document.getElementById("work-promise-question");
        const checkbox = workQuestion.querySelector("input");
        checkbox.checked = true;
    }
    const blockWithWorkQuestionLink =
        document.getElementsByClassName("pro-card__black")[0];
    const workQuestionLinks = blockWithWorkQuestionLink.getElementsByTagName("a");
    for (const link of workQuestionLinks) {
        link.onclick = openWorkQuestion;
    }
}

///////////////////
///////////////////
////////////////////
// FORM
/////////////
function setupPrivacyLinks(privacyModalLinks) {
    for (let link of privacyModalLinks) {
        link.onclick = function(e) {
            e.preventDefault();
            let modalId = e.target.getAttribute("name");
            Modal.openModal(modalId);
        };
    }
}

///////////////

////////////////

function setupForm() {
    const forms = document.getElementsByTagName("form");

    for (let form of forms) {
        let inputs = form.getElementsByTagName("input");
        removeErrorClassFromInputs(inputs);

        form.addEventListener("submit", function(e) {
            e.preventDefault();

            const inputs = e.target.getElementsByTagName("input");
            let verified = verifyInputs(inputs);
            if (verified) {
                Modal.closePopupModal();
                Modal.openModal("modal--submitted");
            }
        });

        const privacyModalLinks = form.getElementsByTagName("a");
        setupPrivacyLinks(privacyModalLinks);
    }
}

function setupPopupModal() {
    window.addEventListener("load", Modal.openPopupModal_byWidth);
    window.addEventListener("resize", Modal.closeOrOpenPopupModal_ByScreenWidth);
    setInterval(Modal.openPopupModal_byWidth, 900000);
}