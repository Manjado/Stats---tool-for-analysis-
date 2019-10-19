import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from './MatchResult';

const reader = new CsvFileReader('football.csv');
reader.read();

// const printMatchResult = (): MatchResult => {
//   if (match[5] === 'H') {
//     return MatchResult.HomeWin
//   }
//   return MatchResult.AwayWin
// }

const dateOfFirstMatch = reader.data[0][0];

let manUnitedWins = 0;

for (let match of reader.data) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games`);
