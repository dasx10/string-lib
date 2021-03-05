# string library prototype

## install

```
npm i string-library-pr
```

or

```
<script src="https://unpkg.com/string-library-pr@1.1.0/index.js" />
```

## use

```
require('string-library-pr');

```

if emj or module

```
import 'string-library-pr';
```

## example

```
'abcd ab'.toCapitalize() // 'Abcd ab'
'abcd ab'.toCapitalizeAll() // 'Abcd Ab'

'abcd'.limit(2) // 'ab'
'abcd ab'.reverse() // 'ba dcba'
'abcd ab'.reverse().toCapitalize() // 'Ba dcba'

'abcd'.repeat() // 'abcdabcd'
'abcd'.repeat(1) // 'abcdabcd'
'abcd'.repeat(3) // 'abcdabcdabcdabcd'
'abcd'.repeat(0) // 'abcd'
'abcd'.repeat(-1) // 'abcd'

'abcda'.count() // 5
'abcda'.count('a') // 2
'abcda'.count('b') // 1
'abcda'.count('z') // 0

''.isEmpty() // true
'    '.isEmpty() // true
'    \t'.isEmpty() // true
'  \n  \t'.isEmpty() // true
'  \n a \t'.isEmpty() // false

'root'.toRegEx() // /root/
'root'.toRegEx('gi') // /root/gi

'[1,2]'.toJson() // [object Array]

'aabb'.toSplit(2) // ['aa','bb']
'aabb'.toSplit(4) // ['a','a','b','b']
'aabb'.toSplit(5) // ['a','a','b','b']
'aabb'.toSplit(3) // ['aa','b','b']


'abcd'.toCharCodes() // Int32Array(4) [ 97, 98, 99, 100 ]


'ab'.log() // output to console 'ab' this equal console.log('ab')
```

