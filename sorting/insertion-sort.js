'use strict';

module.exports = (values) => {
   for (let i = 0, length = values.length; i < length; i++) {
       // the goal is to move item i into a position in the sorted part of the array
       // the sorted part is before the index i

       for (let j = 0; j < i; j++) {
           // find a j that is smaller as i and item j being bigger than item i
           const jValue = values[j];
           const iValue = values[i];

           if (jValue > iValue) {
               // if so, move item i in position j and move all others one further
               for (let k = i; k > j; k--) {
                   values[k] = values[k - 1];
               }

               values[j] = iValue;
           }
       }
   }

   return values;
};
