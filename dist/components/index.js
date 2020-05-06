import * as React from "react";
import * as style from "./index.css";
import { CutPic } from './cutPic/index';
var routerConfig = [
    '图片裁剪',
    '颜色转换',
];
export var Index = function () {
    var _a = React.useState(0), router = _a[0], setRouter = _a[1];
    var handleItemClick = function (e) {
        var dom = e.target;
        var index = Number(dom.getAttribute('data-index'));
        if (index != router) {
            setRouter(index);
        }
    };
    var renderSlide = function () {
        var arr = routerConfig.map(function (item, index) {
            var className = index == router ? style.mainSlideItem + " " + style.mainSlideItemActive : style.mainSlideItem;
            return (React.createElement("div", { "data-index": index, onClick: handleItemClick, className: className, key: index }, item));
        });
        return React.createElement("div", { className: style.mainSlide }, arr);
    };
    var renderMain = function () {
        switch (router) {
            default: {
                return React.createElement(CutPic, null);
            }
        }
    };
    return (React.createElement("div", { className: style.main },
        renderSlide(),
        React.createElement("div", { className: style.mainContent }, renderMain())));
};
//# sourceMappingURL=index.js.map