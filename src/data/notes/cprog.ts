import type { ChapterNote } from '../../types';

export const CPROG_NOTES: ChapterNote[] = [
  {
    moduleId: 'c-m1',
    title: 'Module 1 · Introduction to Problem Solving',
    sections: [
      {
        h: '1.1 Program Development & Algorithms',
        items: [
          'Steps of program development: **problem analysis → algorithm → flowchart → coding → testing → documentation → maintenance**.',
          '**Algorithm** = finite, well-defined step-by-step procedure with inputs and outputs; key properties: finiteness, definiteness, effectiveness, input/output, termination.',
          '**Flowcharts** use standard symbols (oval = start/end, rectangle = process, diamond = decision, parallelogram = I/O, arrows = flow).',
          '**Pseudo-code** — algorithm written in a structured English/text form between natural language and code.',
        ],
      },
      {
        h: '1.2 Fundamentals of C',
        items: [
          '**Structure of a C program**: preprocessor directives (`#include <stdio.h>`), `main()` function, declarations, statements, return.',
          '**Compilation & execution pipeline**: source → preprocessor → compiler → assembler → linker → executable; `gcc file.c -o out`.',
          '**GCC warnings/errors** and the difference between **compile-time** and **run-time** errors, logical errors.',
          '**Character set, tokens**: keywords (32), identifiers, constants, operators, punctuation.',
          '**printf/scanf**: `printf("...%d...", var)`, format specifiers `%d %f %c %s`, `scanf` with `&`.',
        ],
      },
      {
        h: '1.3 Solving Small Problems',
        items: [
          'Steps to convert a problem statement → algorithm → flowchart → code (e.g. find max of 3 numbers).',
          'Tracing / dry-running code by hand (table of variables) to find bugs.',
          '**Identifiers** — naming rules: letters/digits/underscore, cannot start with digit, case-sensitive, no keywords.',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Define algorithm with its characteristics; draw flowchart for factorial / largest of 3.',
          'List the parts of a C program and explain the compile→run steps.',
          'Short notes: identifiers, keywords, constants in C.',
          'Write a simple “hello world” and explain each line — expected in every paper.',
        ],
      },
    ],
  },
  {
    moduleId: 'c-m2',
    title: 'Module 2 · Operators & Expressions',
    sections: [
      {
        h: '2.1 Operators in C',
        items: [
          '**Arithmetic**: + − * / % (integer vs real division; `%` remainder).',
          '**Relational**: < > <= >= == !=  (result 1/0).',
          '**Logical**: && || !  (short-circuit evaluation).',
          '**Bitwise**: & | ^ ~ << >> (used for flags, packing).',
          '**Assignment**: = += −= *= /= %=; **increment/decrement**: `++i` vs `i++`.',
          '**Conditional (ternary)**: `cond ? a : b`.',
          '**Precedence & associativity** — arithmetic > relational > logical; left-to-right, assignment right-to-left.',
        ],
      },
      {
        h: '2.2 Expressions & Type Conversion',
        items: [
          '**Expression evaluation** uses precedence/associativity; mixed expressions promote types.',
          '**Implicit conversion**: char→int→float→double (higher rank wins); **explicit casting**: `(int)3.7 → 3`.',
          '**Integer arithmetic traps**: `5/2=2`, `n%2` for odd/even, overflow.',
          '**Side effects**: `i = i++ + ++i` — undefined; avoid writing expressions with side effects twice.',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Evaluate `result = 2+3*4%5-1` step by step using precedence table.',
          'Convert `x` float to int and explain truncation.',
          'Difference between `i++` and `++i` (evaluate in an expression).',
          'Write a program to swap two numbers without third variable (arithmetic/XOR).',
        ],
      },
    ],
  },
  {
    moduleId: 'c-m3',
    title: 'Module 3 · Conditional & Looping Statements',
    sections: [
      {
        h: '3.1 Decision Making',
        items: [
          '**if / if-else / else-if ladder / nested if** — choose branches; braces for blocks.',
          '**switch-case**: evaluates an integer/char expression, `break` prevents fall-through; `default` optional.',
          '**Ternary** as compact if-else; dangling else problem.',
          'Choosing if-else vs switch: switch is cleaner for single variable multi-value dispatch.',
        ],
      },
      {
        h: '3.2 Loops',
        items: [
          '**for**: `for(init; cond; update)` — known iterations.',
          '**while**: condition first, may run 0 times.',
          '**do-while**: body executes at least once.',
          '**Nested loops** for patterns/matrices; **break** exits one loop, **continue** skips the rest of an iteration.',
          'Loop control comparison (when to use each) and **infinite loops** (accidental vs intentional).',
        ],
      },
      {
        h: '3.3 Common Programs',
        items: [
          'Sum/product of digits, count digits, check **armstrong/prime/palindrome**, reverse number.',
          'Print sequences/series: Fibonacci, factorial, table of numbers, patterns (triangle, square).',
          '**GCD** via Euclidean `while (b) { r = a%b; a=b; b=r; }`.',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Write the switch statement equivalent of an if-else chain (e.g. grade calculator).',
          'Difference between while and do-while with a program.',
          'Program: print prime numbers up to N using nested loops.',
          'Program: Armstrong number check — extremely frequent.',
        ],
      },
    ],
  },
  {
    moduleId: 'c-m4',
    title: 'Module 4 · Arrays & Strings',
    sections: [
      {
        h: '4.1 Arrays',
        items: [
          '**Array** = same-type elements in contiguous memory; `int a[10];` index 0..9.',
          '**Declaration, initialisation** (`int b[5]={1,2,3}`), compile-time vs run-time values.',
          '**Access & traversal**: loops; **largest/smallest, sum, average** of array.',
          '**Search**: linear (O(n)) and **binary search (O(log n))** on sorted arrays.',
          '**Sorting**: **bubble, selection, insertion** — know swapping logic and one-pass behavior.',
          '**2-D arrays**: `int mat[3][4]`; row-major order formula `address = base + (i*cols + j)*size`.',
        ],
      },
      {
        h: '4.2 Strings',
        items: [
          '**String** = char array ending with `\\0`; `char s[20]="hello";`.',
          '**scanf vs gets vs fgets** (space handling, buffer overflow — use `fgets`).',
          '**String functions** `#include <string.h>`: `strlen, strcpy, strcat, strcmp, strrev, strchr, strstr`.',
          'Manual implementations: length, copy, compare, palindrome check.',
          'Array of strings: `char names[10][30];` (2-D char array).',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Write bubble sort (or selection) with full code.',
          'Program: enter 10 numbers, find largest and smallest; second largest.',
          'Define string; write `strcpy`/palindrome without library functions.',
          'Binary search code with steps (4–8 markers).',
        ],
      },
    ],
  },
  {
    moduleId: 'c-m5',
    title: 'Module 5 · Functions & Pointers',
    sections: [
      {
        h: '5.1 Functions',
        items: [
          '**Function** = reusable named block; declaration (prototype), definition, **call** with arguments.',
          '**Parameter passing**: **call by value** (copy — original unaffected) vs **call by reference** via pointers (can modify caller).',
          '**Return** statement; functions returning void/int/array not directly (return pointer).',
          '**Scope & storage classes**: auto, static, register, extern — lifetime & visibility.',
          '**Recursion**: base case + recursive case; factorial & Fibonacci recursion vs iteration (stack depth, overhead).',
        ],
      },
      {
        h: '5.2 Pointers',
        items: [
          '**Pointer** stores an address: `int *p = &x;`, dereference `*p`.',
          '**& (address-of)** and *** (indirection)**; NULL pointers; pointer arithmetic `p+1` moves by `sizeof(type)`.',
          '**Pointer & array**: `a[i] == *(a+i)`; passing array names to functions.',
          '**Pointers to functions** and **pointer to pointer** (`**`).',
          '**Dynamic memory**: `malloc, calloc, free, realloc` with `#include <stdlib.h>` — memory leaks, dangling pointers.',
          '**Command line arguments**: `main(int argc, char *argv[])`.',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Write a function to swap two numbers using pointers (call by reference).',
          'Explain call by value vs call by reference with a program for each.',
          'Difference between malloc and calloc; what is a dangling pointer?',
          'Recursion: find factorial / power with base condition; compare with loop.',
        ],
      },
    ],
  },
];