import type { ChapterNote } from '../../types';

export const PY_NOTES: ChapterNote[] = [
  {
    moduleId: 'py-m1',
    title: 'Module 1 · Introduction, Variables & Data Types',
    sections: [
      {
        h: '1.1 Python Fundamentals',
        items: [
          '**Python** — interpreted, dynamically typed, high-level, multi-paradigm (procedural/OOP/functional) language; huge standard library.',
          '**How it runs**: source → bytecode (`.pyc`) → PVM (CPython); errors detected at runtime (no compile step).',
          '**Interactive mode (REPL)** vs script files; `print()`, comments `#`, docstrings `"""`.',
          '**Keywords**: if, else, elif, while, for, def, class, return, import, from, try, except, with, lambda…',
        ],
      },
      {
        h: '1.2 Variables & Assignments',
        items: [
          'Variables are **names bound to objects**; dynamic typing — same name can hold different types.',
          'Multiple assignment: `a, b = 1, 2` and swap `a, b = b, a`.',
          '**Naming rules**: letters/digits/underscore, not start with digit, case-sensitive, avoid keywords.',
          '`id()` identity, `type()` type checks, `del` unbind a name.',
        ],
      },
      {
        h: '1.3 Data Types',
        items: [
          '**Numbers**: `int` (arbitrary precision), `float`, `complex` (1j); arithmetic precedence; `//` floor, `%`, `**`.',
          '**bool** (True/False, subclass of int); **str** — immutable, slicing `s[1:4]`, methods, f-strings `f"{x}"`.',
          '**Sequences**: `list` (mutable), `tuple` (immutable), `range`.',
          '**dict** — key→value pairs (mutable, insertion-ordered); **set** — unique unordered elements.',
          '`None` — the null object; type conversion `int()`, `str()`, `float()`, `list()`.',
        ],
      },
      {
        h: '1.4 Input & Output',
        items: [
          '`input("prompt")` always returns a **string** — cast for numbers.',
          'Formatted output: `print(a, b)`, `%` old-style, `.format()`, **f-strings**.',
          'Operators: arithmetic, comparison, logical (`and or not`), membership (`in`), identity (`is`).',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Write a program taking marks and printing their average using input().',
          'Differentiate list vs tuple; str vs bytes; shallow vs deep copy.',
          'Evaluate type of expressions like `3/2`, `3//2`, `3**2`, `3%2`.',
          'Explain dynamic typing with an example reassigning a variable.',
        ],
      },
    ],
  },
  {
    moduleId: 'py-m2',
    title: 'Module 2 · Control Structures',
    sections: [
      {
        h: '2.1 Decision Making',
        items: [
          '**if / elif / else** — indentation defines blocks (no braces).',
          'Truthiness: 0, empty containers, None, False are falsy.',
          'Ternary: `x if cond else y`; nested ifs and compound conditions.',
        ],
      },
      {
        h: '2.2 Loops',
        items: [
          '**for** over iterables: `for i in range(5)`, `for ch in s`, `for k,v in d.items()`.',
          '**while** with condition; **break** exits, **continue** skips, **else** on loop runs when no break.',
          '**Nested loops**, common patterns (sum digits, tables, star patterns).',
          '`enumerate()` for index+value; `zip()` to iterate in parallel.',
        ],
      },
      {
        h: '2.3 Pattern & Sequence Programs',
        items: [
          'Fibonacci, factorial, prime check, GCD, palindrome number.',
          'Star/number patterns using nested for with range logic.',
          'Efficient loops: `sum()`, list comprehension `[x*2 for x in items]`.',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Write any pattern (pyramid) with nested loops.',
          'Program: check if a number is prime; sum of digits until single digit.',
          'Explain the else clause of a for/while loop.',
          'Compare `for i in range(n)` vs iterating a list directly.',
        ],
      },
    ],
  },
  {
    moduleId: 'py-m3',
    title: 'Module 3 · Functions, Modules, Packages & Exception Handling',
    sections: [
      {
        h: '3.1 Functions',
        items: [
          '`def name(params):` — return values; **default arguments**, **keyword arguments**, `*args` / `**kwargs`.',
          'Scope: **LEGB** (Local → Enclosing → Global → Builtin); `global` and `nonlocal`.',
          '**Lambda** anonymous functions; **recursion** — base case + recursive call.',
          'Functions are first-class: pass as arguments, return from functions, store in lists.',
        ],
      },
      {
        h: '3.2 Modules & Packages',
        items: [
          '**Module** = a `.py` file of code; **package** = a directory of modules with `__init__.py`.',
          '`import math`, `from math import sqrt`, `import numpy as np` (aliasing).',
          '`if __name__ == "__main__":` guards executable code when imported.',
          'Math, random, datetime, os, sys — common stdlib modules used in labs.',
          '**pip** installs third-party packages from PyPI into `site-packages`.',
        ],
      },
      {
        h: '3.3 Exception Handling',
        items: [
          '**try / except / else / finally**; catching specific types (ValueError, TypeError, ZeroDivisionError, FileNotFoundError, IndexError).',
          '`raise` custom exceptions; `Exception` base class; `str(e)` in handlers.',
          'Never leave bare `except:` (catches everything, hides bugs) without handling.',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Write a function with default args and *args; call it in different ways.',
          'Explain LEGB scope resolution; global vs nonlocal.',
          'Write try/except that handles division by zero and invalid input.',
          'What is the purpose of `__name__ == "__main__"` and how do you create a package?',
        ],
      },
    ],
  },
  {
    moduleId: 'py-m4',
    title: 'Module 4 · File I/O & Regular Expressions',
    sections: [
      {
        h: '4.1 File Handling',
        items: [
          'Open modes: `"r"` read, `"w"` write (truncate), `"a"` append, `"r+"`, `"b"` binary.',
          'Use **`with open(...) as f:`** — guarantees the file is closed; `f.read()`, `f.readline()`, `f.readlines()`, `f.write()`.',
          'Iterating lines `for line in f:`; handling `FileNotFoundError`; paths via `os.path`/`pathlib`.',
          '**CSV**: `csv.reader`/`csv.writer`; **JSON**: `json.load`/`json.dump` for structured persistence.',
        ],
      },
      {
        h: '4.2 Regular Expressions',
        items: [
          '`import re`; **patterns**: literals, `.` any char, `^ $` anchors, `\\d \\w \\s`, classes `[a-z]`, repetition `* + ? {m,n}`, groups `(...)` and alternation `|`.',
          '**Functions**: `re.search`, `re.match` (start only), `re.findall`, `re.finditer`, `re.sub`, `re.split`, `re.compile`.',
          'Validate email/phone/pan formats; extract tokens from text; replace patterns.',
          '**Greedy vs lazy** matching `.*?`.',
        ],
      },
      {
        h: '4.3 Practical Use',
        items: [
          'Read a file, filter lines (e.g. error lines) with regex + write to output.',
          'Count word frequencies using dict + readlines.',
          'Store/load a list of dictionaries as JSON — mini persistence.',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Write file copy (read all then write) with exception handling.',
          'Regex: write a pattern for a valid phone/e-mail and test it.',
          'Difference between search/match/findall; `\\d{3}-\\d{2}-\\d{4}` example.',
          'Explain with vs manual `open()`/`close()`.',
        ],
      },
    ],
  },
  {
    moduleId: 'py-m5',
    title: 'Module 5 · Classes in Python (OOP)',
    sections: [
      {
        h: '5.1 OOP Basics',
        items: [
          '**Class** = blueprint; **object** = instance; `class Student:` then `s = Student()`.',
          '**`__init__(self, ...)`** constructor initialises **attributes**; `self` refers to the instance.',
          '**Methods** are functions inside a class taking self; special methods `__str__`, `__repr__`, `__len__`.',
          '**Encapsulation**: prefix `_` (protected convention) and `__` (name-mangled private); property decorators `@property`.',
        ],
      },
      {
        h: '5.2 Inheritance & Polymorphism',
        items: [
          '**Inheritance**: `class Dog(Animal):` — child reuses/extends parent; `super().__init__(...)`.',
          '**Method overriding**; **polymorphism** — same method call behaves by object type (duck typing).',
          '**Multiple inheritance** and MRO (method resolution order); mixins.',
          '**Class vs instance attributes**; `@staticmethod`, `@classmethod`, `@property`.',
        ],
      },
      {
        h: '5.3 OOP Applications',
        items: [
          'Model a minimal library/student/employee system with classes and relationships.',
          'Magic methods to make classes behave (comparison, arithmetic, iteration).',
          'Composition vs inheritance trade-offs in small projects.',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Write a class `Rectangle` with area/perimeter and __str__ — code question.',
          'Explain constructor, self, encapsulation and define a private attribute.',
          'Show inheritance + overriding with `super().__init__()`.',
          'Difference between @staticmethod and @classmethod with examples.',
        ],
      },
    ],
  },
];