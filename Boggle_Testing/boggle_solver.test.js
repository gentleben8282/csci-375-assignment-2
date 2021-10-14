/* CSCI 375: Assignment #2
 * Programmer: Ben Corriette (@02956064)
 * Last modified date: 10/14/2021
 * 
 * Summary: Test suite for the Boggle solver script.
 * 
 * Reference: https://www.dcode.fr/boggle-solver-any-size
 */

const boggle_solver = require('/home/codio/workspace/Boggle_Testing/boggle_solver.js');

/** Lowercases a string array in-place. (Used for case-insensitive string array
 *  matching).
 * @param {string[]} stringArray - String array to be lowercase.
 */
function lowercaseStringArray(stringArray) {
  for (let i = 0; i < stringArray.length; i++)
    stringArray[i] = stringArray[i].toLowerCase();
}

describe('Boggle Solver test suite:', () => {
  describe('Normal input', () => {
    test('6x6 grid', () => {
      let grid = [['J','E','S','T','I','N'],
                   ['K','O','P','L','A','B'],
                   ['I','T','H','Q','E','R'],
                   ['V','F','T','Y','Z','O'],
                   ['L','N','G','D','T','Q'],
                   ['O','T','G','H','J','B']];
      let dictionary = ['orbitals', 'orbital', 'hostile', 'alsop', 'bails', 'baits',
                       'bailey','joseph','postal','spoke','brain','those',
                        'long','year','also','abel', 'aero', 'ails', 'abe', 'abi',
                       'its','not','are','ale'];
      let expected = ['orbitals', 'orbital', 'hostile', 'alsop', 'bails', 'baits',
                       'bailey','joseph','postal','spoke','brain','those',
                        'long','year','also','abel', 'aero', 'ails', 'abe', 'abi',
                       'its','not','are','ale'];

      let solutions = boggle_solver.findAllSolutions(grid, dictionary);
      
      lowercaseStringArray(expected);
      lowercaseStringArray(solutions);

      expect(solutions.sort()).toEqual(expected.sort());
    });
    test('8x8 grid', () => {
      let grid = [['N',	'F',	'K',	'D',	'L',	'S',	'E',	'G'],
                  ['S',	'K',	'D',	'J',	'G',	'K',	'A',	'L'],
                  ['D',	'F',	'K',	'G',	'L',	'J',	'D',	'W'],
                  ['M',	'C',	'N',	'S',	'J',	'F',	'K',	'T'],
                  ['O',	'S',	'L',	'F',	'K',	'G',	'J',	'Q'],
                  ['F',	'J',	'D',	'K',	'M',	'B',	'P',	'O'],
                  ['W',	'J',	'Q',	'A',	'X',	'N',	'V',	'R'],
                  ['U',	'I',	'N',	'H',	'D',	'K',	'S',	'X']];
      let dictionary = ['daleks','jocks','mocks','segal','wakes','leaks','socks',
                        'ales','coms','dani','kale','mani','nadh','las','leg',
                        'mad','max'];
      let expected = ['daleks','jocks','mocks','segal','wakes','leaks','socks',
                        'ales','coms','dani','kale','mani','nadh','las','leg',
                        'mad','max'];

      let solutions = boggle_solver.findAllSolutions(grid, dictionary);
      
      lowercaseStringArray(expected);
      lowercaseStringArray(solutions);

      expect(solutions.sort()).toEqual(expected.sort());
    });
    test('10x10 grid', () => {
      let grid = [['N',	'F',	'K',	'D',	'L',	'S',	'E',	'G', 'I',	'V'],
                  ['S',	'K',	'D',	'J',	'G',	'K',	'A',	'L', 'R',	'W'],
                  ['D',	'F',	'K',	'G',	'L',	'J',	'D',	'W', 'H',	'N'],
                  ['M',	'C',	'N',	'S',	'J',	'F',	'K',	'T', 'O',	'L'],
                  ['O',	'S',	'L',	'F',	'K',	'G',	'J',	'Q', 'E',	'Z'],
                  ['F',	'J',	'D',	'K',	'M',	'B',	'P',	'O', 'S',	'W'],
                  ['W',	'J',	'Q',	'A',	'X',	'N',	'V',	'R', 'L',	'P'],
                  ['U',	'I',	'N',	'H',	'D',	'K',	'S',	'X', 'M',	'I'],
                  ['D',	'U',	'J',	'F',	'N',	'J',	'S',	'F',	'J',	'T'],
                  ['K',	'D',	'J',	'S',	'N',	'F',	'L',	'K',	'A',	'Q']];
      let dictionary = ['gilead','lawton','wholes','dunham','ligase','giles',
                       'jocks','mocks','segal','wakes','leaks','ales','coms',
                        'dani','elon','hoes','gel','las','leg','leo'];
      let expected = ['gilead','lawton','wholes','dunham','ligase','giles',
                       'jocks','mocks','segal','wakes','leaks','ales','coms',
                        'dani','elon','hoes','gel','las','leg','leo'];
      
      let solutions = boggle_solver.findAllSolutions(grid, dictionary);
      
      lowercaseStringArray(expected);
      lowercaseStringArray(solutions);

      expect(solutions.sort()).toEqual(expected.sort());
    });
  });
});

  
  describe('Problem contraints', () => {
    test('Handles \'Qu\' and \'St\'', () => {
      let grid = [['N',	'F',	'A',	'D'],
                  ['St',	'Qu',	'C',	'J'],
                  ['O',	'F',	'K',	'G'],
                  ['B',	'C',	'V',	'T']];
      let dictionary = ['bock','cfos','faqs','sock','stock','quack','jack','adj','afc','cad','caf',
                        'cbf','cbo','cda','cfo','fad','fos','nfc','soc','cos'];
      let expected = ['bock','cfos','faqs','sock','stock','quack','jack','adj','afc','cad','caf',
                        'cbf','cbo','cda','cfo','fad','fos','nfc','soc','cos'];
      
      let solutions = boggle_solver.findAllSolutions(grid, dictionary);
      
      lowercaseStringArray(expected);
      lowercaseStringArray(solutions);

      expect(solutions.sort()).toEqual(expected.sort());
    });
    test('Handles invalid characters', () => {
      let grid = [['N',	'F',	'A',	'D'],
                  ['S',	'Q',	'1',	'J'],
                  ['O',	'F',	'K',	'G'],
                  ['B',	'C',	'V',	'T']];
      let dictionary = ['bock','cfos','faqs','sock','stock','quack','jack','adj','afc','cad','caf',
                        'cbf','cbo','cda','cfo','fad','fos','nfc','soc','cos'];
      let expected = ['bock','cfos','faqs','sock','adj','cbf','cbo','cfo','fad','fos','soc','cos'];
      
      let solutions = boggle_solver.findAllSolutions(grid, dictionary);
      
      lowercaseStringArray(expected);
      lowercaseStringArray(solutions);

      expect(solutions.sort()).toEqual(expected.sort());
    });
  });

  
  describe('Input edge cases', () => {
    test('Uneven grid (4x3)', () => {
      let grid = [['N',	'F',	'A',	'D'],
                  ['S',	'Q',	'1',	'J'],
                  ['O',	'F',	'K',	'G']];
      let dictionary = ['cfos','faqs','jack','adj','afc','cad','caf','cda','cfo',
                        'fad','fos','nfc'];
      let expected = ['cfos','faqs','jack','adj','afc','cad','caf','cda','cfo',
                        'fad','fos','nfc'];

      let solutions = boggle_solver.findAllSolutions(grid, dictionary);
      
      lowercaseStringArray(expected);
      lowercaseStringArray(solutions);

      expect(solutions.sort()).toEqual(expected.sort());
    });
    test('Undersized grid (2x2)', () => {
      let grid = [['N',	'F'],
                  ['S',	'A']];
      let dictionary = ['fan','fans'];
      let expected = [];

      let solutions = boggle_solver.findAllSolutions(grid, dictionary);
      
      lowercaseStringArray(expected);
      lowercaseStringArray(solutions);

      expect(solutions.sort()).toEqual(expected.sort());
    });
  });
