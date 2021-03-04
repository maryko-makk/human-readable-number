module.exports = function toReadable (number) {
    if (number < 10) {
        return units(number);
    } else if (number >= 10 && number < 100) {
        return twoDigit(number);
    } else {
        return threeDigit(number);  
        } 

function units (n) {
    switch(n) {
        case 0: return 'zero';
        break;
        case 1: return 'one';
        break;
        case 2: return 'two';
        break;
        case 3: return 'three';
        break;
        case 4: return 'four';
        break;
        case 5: return 'five';
        break;
        case 6: return 'six';
        break;
        case 7: return 'seven';
        break;
        case 8: return 'eight';
        break;
        case 9: return 'nine';
        break;
        default: return '';
        break;
    }
  }

function twoDigit (num) {
let dozen = Math.floor(num/10);
let unit = num % 10;
if (dozen == 1) {
    return teens(num);
} else if (unit == 0) {
    return dozens(num);
} else {
    return dozens(dozen*10) + ' ' + units(unit);
}

function teens (n) {
    switch(n) {
            case 10: return 'ten';
            break;
            case 11: return 'eleven';
            break;
            case 12: return 'twelve';
            break;
            case 13: return 'thirteen';
            break;
            case 14: return 'fourteen';
            break;
            case 15: return 'fifteen';
            break;
            case 16: return 'sixteen';
            break;
            case 17: return 'seventeen';
            break;
            case 18: return 'eighteen';
            break;
            case 19: return 'nineteen';
            break;
            default: return '';
            break;
          }
      }

function dozens (n) {
    switch(n) {  
            case 20: return 'twenty';
            break;
            case 30: return 'thirty';
            break;
            case 40: return 'forty';
            break;
            case 50: return 'fifty';
            break;
            case 60: return 'sixty';
            break;
            case 70: return 'seventy';
            break;
            case 80: return 'eighty';
            break;
            case 90: return 'ninety';
            break;
            default: return '';
            break;
          }
      }
    }

function threeDigit (m) {
    let hundred = Math.floor(number/100);
    let two_digit = number % 100;
    if (two_digit == 0) {
       return units(hundred) + ' hundred';
    } else if (two_digit < 10) {
       return units(hundred) + ' hundred ' + units(two_digit);
    } else {
       return units(hundred) + ' hundred ' + twoDigit(two_digit);  
    }
}

}    