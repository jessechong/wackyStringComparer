function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

$(document).ready(function() {
    $("#epicButton").click(async function() {
        var wordOneValue = $("#word1").val();
        var wordTwoValue = $("#word2").val();
        var maximumLength = Math.max(wordOneValue.length, wordTwoValue.length);
        var counter = 0;

        for (let i = 0; i < maximumLength; i++) {
            let w1v = wordOneValue[i];
            let w2v = wordTwoValue[i];

            if (w1v == w2v) {
                counter++;
            }

            if (w1v != null) {
                $("#workCol1").append("<p>" + w1v + "</p>");
            } else {
                $("#workCol1").append("<p>" + " " + "</p>");
            }

            if (w2v != null) {
                $("#workCol2").append("<p>" + w2v + "</p>");
            } else {
                $("#workCol2").append("<p>" + " " + "</p>");
            }

            await sleep(100);
        }

        $("#resultValue").replaceWith("<span id=\"resultValue\">" + counter + "</span");

        console.log(maximumLength);
        console.log(wordOneValue);
        console.log(wordTwoValue);
    })
});

