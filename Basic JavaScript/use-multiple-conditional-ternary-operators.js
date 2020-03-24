function checkSign(num) {

    // positive, negative, zero
    var answer =
        (num > 0) ? "positive"    // if
      : (num < 0) ? "negative"    // else if
      : "zero";                   // else

    return answer;
}

checkSign(10);
