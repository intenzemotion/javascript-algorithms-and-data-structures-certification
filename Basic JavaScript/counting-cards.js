var count = 0;

function cc(card) {

  switch(card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;

    case 7:
    case 8:
    case 9:
      // no changes
      break;

    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count--;
      break;
  }
  
  var decision;
  if (count > 0) {
    decision = "Bet";
  } else {
    decision = "Hold";
  }

  return count + " "  + decision;
}

cc(2); cc(3); cc(7); cc('K'); cc('A');
