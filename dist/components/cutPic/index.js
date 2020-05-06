import * as React from "react";
import * as style from "./index.css";
export var CutPic = function () {
    var handleInputChange = function (event) {
        var inputDom = event.target;
        if (inputDom.files.length == 1) {
            var file = inputDom.files[0];
            console.log(file);
        }
    };
    return (React.createElement("div", { className: style.main },
        React.createElement("div", { className: style.mainTop },
            React.createElement("div", { className: style.inputBox },
                React.createElement("svg", { viewBox: "0 0 1024 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", width: "30", height: "30" },
                    React.createElement("path", { d: "M863.328262 481.340895l-317.344013 0.099772L545.984249 162.816826c0-17.664722-14.336138-32.00086-32.00086-32.00086s-31.99914 14.336138-31.99914 32.00086l0 318.400215-322.368714-0.17718c-0.032684 0-0.063647 0-0.096331 0-17.632039 0-31.935493 14.239806-32.00086 31.904529-0.096331 17.664722 14.208843 32.031824 31.871845 32.095471l322.59234 0.17718 0 319.167424c0 17.695686 14.336138 32.00086 31.99914 32.00086s32.00086-14.303454 32.00086-32.00086L545.982529 545.440667l317.087703-0.099772c0.063647 0 0.096331 0 0.127295 0 17.632039 0 31.935493-14.239806 32.00086-31.904529S880.960301 481.404542 863.328262 481.340895z", fill: "#2c2c2c" })),
                React.createElement("div", { className: style.inputText }, "\u70B9\u51FB\u4E0A\u4F20\u56FE\u7247"),
                React.createElement("input", { onChange: handleInputChange, type: 'file', accept: "image/*" }))),
        React.createElement("div", { className: style.mainList })));
};
//# sourceMappingURL=index.js.map