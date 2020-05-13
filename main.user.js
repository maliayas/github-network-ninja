// ==UserScript==
// @name           GitHub Network Graph Fullscreen
// @version        1.0
// @namespace      http://maliayas.com
// @author         Ali Ayas <mali@maliayas.com>
// @description    Displays the graph automatically fullscreen on "GitHub repo network" pages.
// @include        /^https?://(www\.)?github\.com/[^/]+/[^/]+/network$/
// @icon           data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAAB8hJR8iJiAiJiAjJyIkKCMlKSMmKSQmKiUnKyUoKyYoLCcqLSgqLSgrLiksLyosMCsuMCsuMSwuMCwuMS4wMy8xNC8xNTEyNjI1NzM1ODU4Oj0%2FQj5AQz9AREFCRUJDR0JER0dITEhJTElLTk9QU09RVFBRVFFSVVJUVlJUV1RWWFtcXltcX1xdYF1eYF5eYV5fYmFiZWNkZmRlZ2dpa2prbWprbmtsbmtsb2xucG5vcW9wc3JydXt7fnx8fnx9f3x%2Bf35%2BgH5%2FgYCAg4GChIKDhYOEhoaGiIaHiYeIioiJi4mKi4qLjY6OkI6PkZCQkpGRk5GSk5GSlJWVl5aWmJqanJycnp6dn5%2Ben56foKGhoqOjpKOjpaOkpaeoqaurrK2sra2trq2ur66vsLCwsba0tbW0tra2t7i4uby7vLy8vcHBwsTCw8TDxMXExcXFxsbGx8rKysvKy83MzM7Mzc3NztTS0tXV1dXV1tfW19jX19zb293c3N7d3t%2Fe39%2Ff4ODe3uLg4OLh4ePi4uTi4uXj4%2BXk5Obl5efm5ujl5ejm5unn5%2Bro6Ovp6evq6uzq6uzr6%2B3s7O7t7e%2Fu7u%2Fu7%2FDu7vHv7%2FHw8PLx8fLy8vPz8%2FTz8%2FX09PX19fb29vf39%2Fj39%2Fj4%2BPn5%2Bfr6%2Bvv7%2B%2Fz8%2FP39%2Ff7%2B%2Fv%2F%2F%2FwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC0HIHQAAAEAdFJOU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwBT9wclAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGHRFWHRTb2Z0d2FyZQBwYWludC5uZXQgNC4xLjFjKpxLAAACEElEQVQ4T4WQCXPSQBiGiyQVL4g3nvVurVLvq94K3lpq61lvUcFirfdttbWF2kQJVIUIQbLBxl%2B5ft8mDEnGGZ%2BZZHff99nsThrof7ALetX4Axi6bgVIXdCNiVfXTx883BH7YBh1pSYQI9u1fI7F6mvqb80qLEGvXl4000ZTYoKYjSmQb1sEF2HNNJhAci1WbKNdY6egUP61IRAQhICN2fCEq2VL0M%2FC8mghvg6GBUF4besvh2BI4CdAUN%2FP9fv9twmp9L5UCBl%2F%2FogQchyiJkVlgnYAFv6Y5uAEZlfgjAb6czw4A%2BiuONiNWXMFBSUxHVgslx28noXpgAKCemoa0KW62InpnQIIpR04TZZcnMe0swRCMTQVeFx0cRXTSBHvEJoC3FdcdGMawTsUtvuAcwUXezDtzIOQPzkZWPsj70BaiGlMBiETb0RufndwDDPfWxS%2BSvN5QLiRqyOfacRsTY796uw%2BXri1medbLzwRs8CnZMcyrHm%2BJ8ME6U2AW%2FFwL8dxwXco9PEwRZaIEhOoHOW4XQ9aOW6%2FzFhl9vw96JkwKrV5ff0veuNPM4xNXkY4UxPo2GCzd1402ffsC2Mj69ulNHZMoOnBrZOAIxKjDaZcRGS9JdAR8WLQ4wmLjPUez9K7YspsLIGmxI%2FRlZdM4VBLTyo9ahU1gdKhsTqfh63QLuBNRrAdHqrtRuzCP6D0L3BZI7iJ8A14AAAAAElFTkSuQmCC
// @require        https://libs.maliayas.com/jquery/2.0.3/jquery.min.js
// @run-at         document-end
// ==/UserScript==

var $canvasContainer = $(".js-network-graph-container");

if ($canvasContainer.length) {
    // If there is a scrollbar, we should hide it in order to get the correct window width and height.
    $("body").css({"overflow": "hidden"});

    // Make the container fixed to 0x0 point.
    $canvasContainer.removeClass("position-relative").css({
        "position": "fixed",
        "left": 0,
        "right": 0,
        "bottom": "-16px",
        "top": 0,
        "z-index": "1000",
        "background-color": "white"
    });

    var $canvas = $canvasContainer.find("canvas");

    var $win = $(window);
    var winWidth = $win.width();
    var winHeight = $win.height();

    $canvas.attr("width", winWidth);
    $canvas.attr("height", winHeight);
}
