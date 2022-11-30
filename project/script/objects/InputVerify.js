const regexObj = {
    email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    phone: /^0\d{9}$/,
    name: /^\w+[\w ]*/,
};
const inputErrMessage = {
    email: "*נא להזין אימייל",
    phone: "*נא להזין מספר טלפון",
    name: "*נא להזין שם תקין",
};

function verifyInputs(inputs) {
    const verifiedArray = [];
    for (const input of inputs) {
        const type = input.getAttribute("type");

        let placeholderErrText;
        let testThisInp = true;
        switch (type) {
            case "email":
                inputRegex = regexObj.email;
                placeholderErrText = inputErrMessage.email;

                break;
            case "phone":
                inputRegex = regexObj.phone;
                placeholderErrText = inputErrMessage.phone;
                break;
            case "text":
                inputRegex = regexObj.name;
                placeholderErrText = inputErrMessage.name;
                break;
            default:
                testThisInp = false;
        }
        if (testThisInp) {
            const regexVerified = inputRegex.test(input.value);
            if (!regexVerified) {
                console.log("err");
                input.classList.add("error--red");
                clearInput(input);
                input.setAttribute("placeholder", placeholderErrText);
            }
            verifiedArray.push(regexVerified);
        }
    }
    return verifiedArray.every((bool) => bool);
}

function removeErrorClassFromInputs(inputs) {
    for (let input of inputs) {
        input.onchange = function(e) {
            e.target.classList.remove("error--red");
        };
    }
}

function clearInput(input) {
    input.value = "";
}