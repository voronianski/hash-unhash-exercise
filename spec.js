require('should');

var letters = 'acdegilmnoprstuw';

function hash (str) {
    var h = 7;
    for (var i = 0; i < str.length; i++) {
        h = (h * 37 + letters.indexOf(str[i]));
    }
    return h;
}

function getstr (hashNum, answerLen) {
    if (typeof hashNum !== 'number' ||
        typeof answerLen !== 'number') {
        throw new Error('Function requires 2 numbers as agruments');
    }

    // we can depend on our knowledge of the length that should have the answer word.
    // for example get the minimum possible hash for `length = 7` will be `7 * "a" = "aaaaaaa"`
    var str = Array(answerLen+1).join(letters.slice(0,1));

    var lettersLen = letters.length;

    // go through every index character of suggested answer length
    for (var i = 0; i < answerLen; i++) {
        var letterIndex = 0;
        var nextStr = str;

        // go through every letter in our letters string
        while (letterIndex <= lettersLen) {

            // replace character in string with one from the letters string
            var letter = letters[letterIndex++];
            nextStr = nextStr.substr(0, i) + letter + nextStr.substr(i + letter.length);

            // calculating the hash of the suggested string and subtract from hash
            // if diff is not negative we should continue traversing..
            if (hashNum - hash(nextStr) >= 0) {
                str = nextStr;
            // but if diff is negative this index is finished
            // letter on this index is found then switch to next index
            } else {
                break;
            }
        }
    }

    return str;
}

describe('hash exercise', function () {
    it('should get right result with example', function () {
        var exampleHash = 680131659347;
        var exampleLength = 7;
        var exampleWord = getstr(exampleHash, exampleLength);

        console.log(exampleWord);
        exampleHash.should.equal(hash(exampleWord));
    });

    it('should get right result with new value', function () {
        var taskHash = 956446786872726;
        var taskAnswerLength = 9;
        var taskAnswerWord = getstr(taskHash, taskAnswerLength);

        console.log(taskAnswerWord);
        taskHash.should.equal(hash(taskAnswerWord));
    });
});
