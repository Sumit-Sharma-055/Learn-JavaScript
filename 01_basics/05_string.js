console.log("JAI SHREE RAM");
const name =  "Sumit is a good boy";
const name1 = "ravi";
const pass = new String("Shyam");

console.log(name);
console.log(pass);

console.table([name, name1, pass]);

/* methods in javaScript
Sure! Here's the list of JavaScript string methods in the format:

**`name : syntax`**

---

1. `charAt` : `str.charAt(index)`
2. `charCodeAt` : `str.charCodeAt(index)`
3. `codePointAt` : `str.codePointAt(index)`
4. `concat` : `str.concat(str2, str3, ...)`
5. `endsWith` : `str.endsWith(searchString, length)`
6. `includes` : `str.includes(searchString, position)`
7. `indexOf` : `str.indexOf(searchValue, fromIndex)`
8. `lastIndexOf` : `str.lastIndexOf(searchValue, fromIndex)`
9. `localeCompare` : `str.localeCompare(compareString)`
10. `match` : `str.match(regex)`
11. `matchAll` : `str.matchAll(regex)`
12. `normalize` : `str.normalize([form])`
13. `padEnd` : `str.padEnd(targetLength, padString)`
14. `padStart` : `str.padStart(targetLength, padString)`
15. `repeat` : `str.repeat(count)`
16. `replace` : `str.replace(searchValue, replaceValue)`
17. `replaceAll` : `str.replaceAll(searchValue, replaceValue)`
18. `search` : `str.search(regex)`
19. `slice` : `str.slice(beginIndex, endIndex)`
20. `split` : `str.split(separator, limit)`
21. `startsWith` : `str.startsWith(searchString, position)`
22. `substring` : `str.substring(indexStart, indexEnd)`
23. `toLocaleLowerCase` : `str.toLocaleLowerCase()`
24. `toLocaleUpperCase` : `str.toLocaleUpperCase()`
25. `toLowerCase` : `str.toLowerCase()`
26. `toString` : `str.toString()`
27. `toUpperCase` : `str.toUpperCase()`
28. `trim` : `str.trim()`
29. `trimStart` / `trimLeft` : `str.trimStart()` / `str.trimLeft()`
30. `trimEnd` / `trimRight` : `str.trimEnd()` / `str.trimRight()`
31. `valueOf` : `str.valueOf()`

---
*/

console.log(name.length);
console.log(name.charAt(2));
console.log(name.charCodeAt(2));
console.log(name.codePointAt(2));
console.log(name.concat(name1, pass));
console.log(name.endsWith('m')); // check the last letteer of the string
console.log(name.includes('Sumit'));
console.log(name.indexOf('boy'));
console.log(name.lastIndexOf('S'));

console.log(name.match(name));
console.log(name.matchAll(name));
console.log(name.slice(2,4));
console.log(name.slice(0,5));
console.log(name.repeat(2));
console.log(name.replace('Sumit','shyam'));
console.log(name.replaceAll('Sumit','shyam'));
console.log(name.split(' '));
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.valueOf());
