// ==UserScript==
// @name           GitHub Network Graph Fullscreen
// @version        2.0
// @namespace      http://maliayas.com
// @author         Ali Ayas <mali@maliayas.com>
// @description    Fullscreen graph with searching on "GitHub repo network" pages.
// @include        /^https?://(www\.)?github\.com/[^/]+/[^/]+/network$/
// @icon           data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAAB8hJR8iJiAiJiAjJyIkKCMlKSMmKSQmKiUnKyUoKyYoLCcqLSgqLSgrLiksLyosMCsuMCsuMSwuMCwuMS4wMy8xNC8xNTEyNjI1NzM1ODU4Oj0%2FQj5AQz9AREFCRUJDR0JER0dITEhJTElLTk9QU09RVFBRVFFSVVJUVlJUV1RWWFtcXltcX1xdYF1eYF5eYV5fYmFiZWNkZmRlZ2dpa2prbWprbmtsbmtsb2xucG5vcW9wc3JydXt7fnx8fnx9f3x%2Bf35%2BgH5%2FgYCAg4GChIKDhYOEhoaGiIaHiYeIioiJi4mKi4qLjY6OkI6PkZCQkpGRk5GSk5GSlJWVl5aWmJqanJycnp6dn5%2Ben56foKGhoqOjpKOjpaOkpaeoqaurrK2sra2trq2ur66vsLCwsba0tbW0tra2t7i4uby7vLy8vcHBwsTCw8TDxMXExcXFxsbGx8rKysvKy83MzM7Mzc3NztTS0tXV1dXV1tfW19jX19zb293c3N7d3t%2Fe39%2Ff4ODe3uLg4OLh4ePi4uTi4uXj4%2BXk5Obl5efm5ujl5ejm5unn5%2Bro6Ovp6evq6uzq6uzr6%2B3s7O7t7e%2Fu7u%2Fu7%2FDu7vHv7%2FHw8PLx8fLy8vPz8%2FTz8%2FX09PX19fb29vf39%2Fj39%2Fj4%2BPn5%2Bfr6%2Bvv7%2B%2Fz8%2FP39%2Ff7%2B%2Fv%2F%2F%2FwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC0HIHQAAAEAdFJOU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwBT9wclAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGHRFWHRTb2Z0d2FyZQBwYWludC5uZXQgNC4xLjFjKpxLAAACEElEQVQ4T4WQCXPSQBiGiyQVL4g3nvVurVLvq94K3lpq61lvUcFirfdttbWF2kQJVIUIQbLBxl%2B5ft8mDEnGGZ%2BZZHff99nsThrof7ALetX4Axi6bgVIXdCNiVfXTx883BH7YBh1pSYQI9u1fI7F6mvqb80qLEGvXl4000ZTYoKYjSmQb1sEF2HNNJhAci1WbKNdY6egUP61IRAQhICN2fCEq2VL0M%2FC8mghvg6GBUF4besvh2BI4CdAUN%2FP9fv9twmp9L5UCBl%2F%2FogQchyiJkVlgnYAFv6Y5uAEZlfgjAb6czw4A%2BiuONiNWXMFBSUxHVgslx28noXpgAKCemoa0KW62InpnQIIpR04TZZcnMe0swRCMTQVeFx0cRXTSBHvEJoC3FdcdGMawTsUtvuAcwUXezDtzIOQPzkZWPsj70BaiGlMBiETb0RufndwDDPfWxS%2BSvN5QLiRqyOfacRsTY796uw%2BXri1medbLzwRs8CnZMcyrHm%2BJ8ME6U2AW%2FFwL8dxwXco9PEwRZaIEhOoHOW4XQ9aOW6%2FzFhl9vw96JkwKrV5ff0veuNPM4xNXkY4UxPo2GCzd1402ffsC2Mj69ulNHZMoOnBrZOAIxKjDaZcRGS9JdAR8WLQ4wmLjPUez9K7YspsLIGmxI%2FRlZdM4VBLTyo9ahU1gdKhsTqfh63QLuBNRrAdHqrtRuzCP6D0L3BZI7iJ8A14AAAAAElFTkSuQmCC
// @require        https://code.jquery.com/jquery-2.0.3.min.js
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

(function initCommitFilterBox() {
    var config = {
        /**
         * Number of commits to fetch in each API request.
         */
        "number_of_commits_per_request": 500,

        /**
         * Number of milliseconds to wait between API requests.
         */
        "api_request_interval": 1000,

        /**
         * Number of maximum commits to fetch from the API.
         */
        "number_of_max_commits": 10000
    };

    insertCss(
        ".commit-filter-box-mask {"
            + "width: 100%;"
            + "height: 100%;"

            + "position: fixed;"
            + "top: 0;"
            + "left: 0;"
            + "z-index: 1001;"

            + "background-color: #000000;"
            + "opacity: 0.5;"

            + "cursor: pointer;"
        + "}"
        + ".commit-filter-button {"
            + "position: fixed;"
            + "top: 5px;"
            + "right: 5px;"
            + "z-index: 1000;"
        + "}"
        + ".commit-filter-box {"
            + "padding: 20px;"
            + "border-radius: 10px;"

            + "position: fixed;"
            + "left: 10%;"
            + "right: 10%;"
            + "top: 10%;"
            + "bottom: 10%;"
            + "overflow: hidden;"
            + "z-index: 1002;"

            + "background-color: #eaf5ff;"
        + "}"
        + ".commit-filter-box input {"
            + "margin-bottom: 10px;"
        + "}"
        + ".commit-filter-box .table-container {"
            + "overflow: auto;"
        + "}"
        + ".commit-filter-box .loading {"
            + "position: relative;"
            + "top: 25%;"

            + "color: #96a3ae;"

            + "text-align: center;"
        + "}"
        + ".commit-filter-box .loading .flash {"
            + "margin-top: 20px;"

            + "display: inline-block;"
        + "}"
        + ".commit-filter-box table {"
            + "width: 100%;"

            + "display: none;"
        + "}"
        + ".commit-filter-box .author {"
            + "white-space: nowrap;"
        + "}"
        + ".commit-filter-box .message {"
            + "padding-left: 10px;"
        + "}"
        + ".commit-filter-box table tr.non-merged .message {"
            + "font-weight: bold;"
        + "}"
        + ".commit-filter-box .date {"
            + "padding-right: 10px;"

            + "white-space: nowrap;"
            + "text-align: right;"
        + "}"
    );

    var $commitFilterBoxMask, $commitFilterButton, $commitFilterBox, $commitFilterInput, $commitFilterLoading, $commitFilterTable;

    var numberOfTotalCommits = 0;

    var repo = getCurrentRepo();

    /**
     * This is a hash string that's specific to the repo. It's required in order to
     * make API request for list of commits. However, -to my knowledge- it's not
     * possible to get it directly from somewhere. GitHub somehow creates/calculates
     * it. So we'll simply steal it from GitHub's runtime. See below for more
     * details.
     */
    var nethash;

    /*
     * In order to find "nethash" value, we need to hook into GitHub's API requests.
     * So we're creating a proxy "fetch()" method below. Whenever we find a request
     * that includes the "nethash" in its URL we'll save it for future usage.
     */
    var originalFetch = fetch;
    fetch = function (input, init) {
        var match;

        if (typeof nethash === "undefined" && (match = /[?&]nethash=([^&]+)/.exec(input.url))) {
            nethash = match[1];
        }

        // Just do what regular fetch() does.
        return originalFetch(input, init);
    };

    /**
     * Meta data related to axises of the network graph. See `fetchNetworkMetaData()`.
     */
    var networkMetaData;

    $commitFilterButton = $(
        "<button class='commit-filter-button btn btn-sm btn-primary'>"
            + "Search in commits"
        + "</button>").appendTo("body");

    $commitFilterButton.click(showCommitFilterBox);

    function showCommitFilterBox() {
        if (typeof $commitFilterBox !== "undefined") {
            // It's already created before.

            $commitFilterBoxMask.show();
            $commitFilterBox.show();
            return;
        }

        $commitFilterBoxMask = $("<div class='commit-filter-box-mask'></div>").appendTo("body");
        $commitFilterBoxMask.click(hideCommitFilterBox);

        $commitFilterBox = $(
            "<div class='commit-filter-box'>"
                + "<input type='text' class='form-control input-block' />"
                + "<div class='table-container'>"
                    + "<div class='loading'>"
                        + "<p class='h1'><span class='number'>0</span> commits fetched...</p>"
                        + "<p class='h3'>Please wait until all the commits are fetched.</p>"
                        + "<p class='h5'>(Limit is " + config.number_of_max_commits + " commits. You can configure it in the source.)</p>"
                    + "</div>"
                    + "<table></table>"
                + "</div>"
            + "</div>").appendTo("body");

        // Adjust height dynamically based on the viewport height. 44 is the total
        // height of the input box.
        $commitFilterBox.find(".table-container").height($commitFilterBox.height() - 44);

        $commitFilterInput      = $commitFilterBox.find("input");
        $commitFilterLoading    = $commitFilterBox.find(".loading");
        $commitFilterTable      = $commitFilterBox.find("table");

        bindFilterFunctionOnInput();

        fetchNetworkMetaData();

        // Close commit filter box on escape.
        $(document).bind("keyup", function (e) {
            if (e.which == 27) {
                hideCommitFilterBox();
                return false;
            }

            return true;
        });
    }

    function hideCommitFilterBox() {
        $commitFilterBox.hide();
        $commitFilterBoxMask.hide();
        $commitFilterInput.val("").trigger("input");
    }

    /**
     * Returns "user/repo".
     */
    function getCurrentRepo() {
        return document.location.href.replace(/^https:\/\/(www\.)?github\.com\/([^/]+\/[^/]+)(\/.*)?$/, "$2");
    }

    function insertCss(css) {
        var style = document.createElement("style");
        style.type = "text/css";
        style.innerHTML = css;
        document.head.appendChild(style);
    }

    var timeoutId;
    function bindFilterFunctionOnInput() {
        $commitFilterInput.on("input", function () {
            window.clearTimeout(timeoutId);

            timeoutId = window.setTimeout(function () {
                var query = $commitFilterInput.val().toLowerCase();

                $commitFilterTable.find("tr").each(function () {
                    if (query === "" || this.getAttribute("search-text").includes(query)) {
                        this.removeAttribute("hidden");

                    } else {
                        this.setAttribute("hidden", "");
                    }
                });
            }, 1000);
        });
    }

    function fetchNetworkMetaData(retry) {
        if (typeof retry === "undefined") {
            // Number of retries for failed requests.
            retry = 3;
        }

        $.getJSON("https://github.com/" + repo + "/network/meta")
            .done(function (response) {
                networkMetaData = response;

                fetchCommits();

            }).fail(function () {
                retry--;

                if (! retry) {
                    $commitFilterLoading.append("<div class='flash flash-error'>Network meta data could not be fetched. You can refresh the page to retry.</div>");
                    return;
                }

                // Retry.
                window.setTimeout(function () {
                    fetchNetworkMetaData(retry);
                }, config.api_request_interval);
            });
    }

    function fetchCommits(offset, retry) {
        if (typeof offset === "undefined") {
            offset = 0;
        }

        if (typeof retry === "undefined") {
            // Number of retries for failed requests.
            retry = 3;
        }

        /*
         * "start" and "end" URL parameters works this way: "start=0&end=2" returns
         * 3 items whose indexes are 0, 1 and 2. Hence the "-1" in the calculation
         * of "end".
         */
        $.getJSON("https://github.com/" + repo + "/network/chunk", {
            "nethash"   : nethash,
            "start"     : offset,
            "end"       : offset + config.number_of_commits_per_request - 1
        }).done(function (response) {
            numberOfTotalCommits += response.commits.length;

            $commitFilterLoading.find(".number").text(numberOfTotalCommits)

            // Template object.
            var $tr = $("<tr><td class='author'></td><td class='message'></td><td class='date'></td></tr>");

            for (var i = 0; i < response.commits.length; i++) {
                var $newTr = $tr.clone();

                var commitUrl = "https://github.com/" + getUserRepoBySpace(response.commits[i]["space"]) + "/commit/" + response.commits[i]["id"];
                var $commitLink = $("<a target='_blank'></a>").attr("href", commitUrl).text(response.commits[i]["message"]);

                // Check if the commit exists in the upstream repo.
                if (getUserBySpace(response.commits[i]["space"]) != getUserBySpace(0)) {
                    $newTr.addClass("non-merged");
                }

                $newTr.find(".author")      .text(response.commits[i]["login"] || "(" + response.commits[i]["author"] + ")"); // "login" may be empty sometimes.
                $newTr.find(".message")     .html($commitLink);
                $newTr.find(".date")        .text(response.commits[i]["date"]);

                $commitFilterTable.prepend($newTr);
            }

            var fetchCompleted = false;

            if (numberOfTotalCommits >= config.number_of_max_commits) {
                // We've reached the limit (defined by us).
                fetchCompleted = true;
            }

            if (response.commits.length < config.number_of_commits_per_request) {
                // All the commits are fetched. Let's show them.
                fetchCompleted = true;
            }

            if (fetchCompleted) {
                $commitFilterLoading.hide();
                $commitFilterTable.show();

                /*
                 * Searching uses `innerText` and `innerText` requires elements to
                 * be visible in order to work. This is why we cache them in the
                 * beginnig when all the rows are visible.
                 */
                buildSearchIndex();

                $commitFilterInput.attr("placeholder", "Search in " + numberOfTotalCommits + " commits from " + networkMetaData.users.length + " repos...")
                $commitFilterInput.focus();

            } else {
                // There is more...

                window.setTimeout(function () {
                    fetchCommits(offset + config.number_of_commits_per_request);
                }, config.api_request_interval);
            }

        }).fail(function () {
            retry--;

            if (! retry) {
                $commitFilterLoading.append("<div class='flash flash-error'>Fetch operation failed. You can refresh the page to retry.</div>");
                return;
            }

            // Retry the same request.
            window.setTimeout(function () {
                fetchCommits(offset, retry);
            }, config.api_request_interval);
        });
    }

    function buildSearchIndex() {
        $commitFilterTable.find("tr").each(function () {
            this.setAttribute("search-text", this.innerText.toLowerCase().replace(/\s+/g, " "));
        });
    }

    /**
     * "space" values are numbers returned from the GitHub API. They represent index
     * of the line which a commit's point resides on in the network graph. "0" is
     * the top (horizontal) line, "1" is the one below it, and so on.
     */
    function getUserBySpace(space) {
        for (var i = networkMetaData.blocks.length - 1; i >= 0; i--) {
            if (space < networkMetaData.blocks[i].start) {
                continue;
            }

            return networkMetaData.blocks[i].name;
        }

        return "_user_not_found_";
    }

    function getUserRepo(user) {
        for (var i = 0; i < networkMetaData.users.length; i++) {
            if (networkMetaData.users[i].name == user) {
                return networkMetaData.users[i].name + "/" + networkMetaData.users[i].repo;
            }
        }

        return user + "/_repo_not_found_";
    }

    function getUserRepoBySpace(space) {
        return getUserRepo(getUserBySpace(space));
    }
})();
