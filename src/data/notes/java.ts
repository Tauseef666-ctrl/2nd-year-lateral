import type { ChapterNote } from '../../types';

export const JAVA_NOTES: ChapterNote[] = [
  {
    moduleId: 'java-m1',
    title: 'Module 1 · Introduction & Features',
    sections: [
      {
        h: '1.1 OOP vs Procedure-Oriented Programming',
        items: [
          '**Procedure-oriented**: program = list of instructions; focus on **functions**; data are global and exposed; hard to reuse and model real-world entities.',
          '**Object-oriented**: program = collection of **objects** interacting; focus on **data + methods** bound together.',
          '**Four pillars**: **encapsulation** (wrap data + methods, hide internals), **abstraction** (hide implementation, expose behaviour), **inheritance** (reuse/extend parent classes), **polymorphism** (one interface, many forms).',
          'Advantages of OOP: better modularity, maintainability, reusability, security (data hiding), scalability.',
        ],
      },
      {
        h: '1.2 Java Platform, JVM & Features',
        items: [
          '**Java features**: platform-independent (**WORA** — write once run anywhere), object-oriented, robust (strong typing, exceptions, GC), secure, multi-threaded, architecture-neutral, portable, just-in-time compiled.',
          '**JDK = JRE + dev tools** (javac, jar, javadoc); **JRE = JVM + core libraries**; **JVM** executes bytecode.',
          'Compilation flow: `.java` → **javac** → `.class` (bytecode) → **JVM** (interprets/JIT-compiles to machine code). Bytecode runs on any machine with a JVM.',
          '**JVM memory areas**: heap (objects), stack (method frames), method area, PC register, native method stacks; **garbage collector** reclaims unreferenced heap objects.',
          '**Eclipse IDE**: workspace → project → package → class; shortcuts: Ctrl+Space (assist), Ctrl+1 (quick fix), Run (Ctrl+F11).',
          'Main method signature: `public static void main(String[] args)` — public (JVM access), static (no instance needed), void (no return), String[] args (command-line arguments).',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Differentiate procedure-oriented vs object-oriented programming.',
          'Explain WORA / bytecode / JVM-JRE-JDK relationship — classic theory question.',
          'List any five Java features with explanations.',
          'Why is main() public static void?',
          'Short notes: garbage collector, JVM memory areas.',
        ],
      },
    ],
  },
  {
    moduleId: 'java-m2',
    title: 'Module 2 · Language Constructs',
    sections: [
      {
        h: '2.1 Variables, Data Types & Operators',
        items: [
          '**Primitive types**: `boolean`, `byte`(1B), `short`(2B), `int`(4B), `long`(8B), `char`(2B), `float`(4B), `double`(8B). References store object addresses.',
          '**Identifiers**: letters/digits/`_`/`$`, cannot start with digit, case-sensitive, no keywords.',
          '**Type conversions**: implicit (byte→short→int→long→float→double widening), explicit via **cast** for narrowing: `(int) 9.7` → 9 (truncates).',
          '**Operators**: arithmetic, relational, logical (&, |, &&, ||), bitwise (~, >>, <<, >>>), assignment, ternary `?:`, instanceof; operator precedence matters.',
          '**Wrapper classes**: Integer, Double, etc.; autoboxing/unboxing (Java 5+).',
        ],
      },
      {
        h: '2.2 Loops, Arrays & Methods',
        items: [
          '**Loops**: `for`, `while`, `do-while`; enhanced for-loop for arrays/collections; `break`/`continue`; labelled break.',
          '**Arrays**: fixed-size, zero-indexed; `int[] a = new int[n]`; `int[][] m` (arrays of arrays, can be jagged); `ArrayIndexOutOfBoundsException` risk.',
          '**Methods**: `returnType name(params)`, overloading by parameter list (not return type); pass-by-value (primitives copied, reference handles shared).',
          '`length` field for arrays, `length()` method for String; enhanced-for avoids manual indices.',
          'Command-line args arrive in `args[]` of main; conversion helper `Integer.parseInt(str)`, `Double.parseDouble(str)`.',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Write Java code to demonstrate each data type and its range.',
          'Trace loop programs (nested loops, pattern printing) — very common exam code.',
          'What is the difference between bitwise and logical operators?',
          'Explain pass-by-value with an example showing why swapping fails.',
          'Code to reverse/sum/find-largest element in an array.',
        ],
      },
    ],
  },
  {
    moduleId: 'java-m3',
    title: 'Module 3 · Classes, Objects & Inheritance',
    sections: [
      {
        h: '3.1 Classes, Constructors & Objects',
        items: [
          '**Class** = blueprint (fields + methods); **object** = instance created by `new`.',
          '**Constructors**: same name as class, no return type; **default** (no-arg, supplied if none written), **parameterized**, **copy constructor** technique.',
          '`this` refers to current object (disambiguate field vs parameter, chain constructors).',
          '**Instance vs static members**: instance = per-object; static = per-class, accessed via class name, shared across instances.',
          'Static blocks run once at class load; `final` fields become constants.',
        ],
      },
      {
        h: '3.2 String Handling & Packages',
        items: [
          '**String is immutable**; each method returns a new String: `length()`, `toUpperCase()`, `substring()`, `indexOf()`, `equals()`, `compareTo()`, `split()`, `charAt()`.',
          '**StringBuilder/StringBuffer** are mutable and buffer-synchronized respectively — use for concatenation in loops.',
          '`StringTokenizer`, `Integer wrappers`; `==` compares references, `equals()` compares contents.',
          '**Package** = namespace organising classes: `package mypkg;` at top; import via `import mypkg.MyClass;` or `.*`.',
          'Standard packages: `java.lang` (auto-imported), `java.util`, `java.io`, `java.awt`, `java.net`.',
        ],
      },
      {
        h: '3.3 Inheritance & Access Control',
        items: [
          '**Inheritance**: `class B extends A` reuses `A`; single inheritance only (multiple via interfaces).',
          '**Types**: single, multilevel, hierarchical; `Object` is the root of every class.',
          '**Access modifiers**: `public`, `protected`, default (package-private), `private` — order of visibility.',
          'Method **overriding**: same signature in subclass, `@Override`; `super.method()` calls parent; overridden method resolution is runtime (dynamic dispatch).',
          '`is-a` vs `has-a` (composition); `final` classes/methods cannot be extended/overridden.',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Write a class with constructor overloading and show object creation.',
          'Explain String immutability; why is `==` unreliable for Strings?',
          'Tabulate access modifiers by visibility context (class, package, subclass, world).',
          'Demonstrate method overriding with super keyword.',
          'Keyword questions: static, final, this, super.',
        ],
      },
    ],
  },
  {
    moduleId: 'java-m4',
    title: 'Module 4 · Abstract Class, Interface & Polymorphism',
    sections: [
      {
        h: '4.1 Abstract Class vs Interface',
        items: [
          '**Abstract class**: `abstract` keyword; may have abstract (unimplemented) and concrete methods; can hold instance fields & constructors; single inheritance only.',
          '**Interface** (pre-Java 8): only abstract methods + constants (public static final); a class may **implement many interfaces** (default/multiple inheritance of behaviour).',
          'Abstract class = "is-a" partial implementation; Interface = contract/capability ("can-do").',
          'Java 8+ interfaces: `default` and `static` methods; Java 9: private methods.',
          'Rule of thumb: abstract class for shared code + state; interface for declaring behaviour contracts.',
        ],
      },
      {
        h: '4.2 Overloading, Overriding & Casting',
        items: [
          '**Overloading** = same method name, different parameter lists, within a class (compile-time polymorphism).',
          '**Overriding** = subclass redefines parent method with same signature (runtime polymorphism / dynamic dispatch). Differences table: purpose, signature, static vs dynamic, return-type rules, `super`.',
          '**Casting**: upcasting (child→parent, implicit, safe, widens reference) and downcasting (parent→child, explicit, needs check with `instanceof`; `ClassCastException` if wrong).',
          'Polymorphism in action: parent-typed reference calling overridden child method (`Animal a = new Dog(); a.speak();`).',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Tabulate abstract class vs interface (the most repeated question).',
          'Write code demonstrating method overloading and overriding together.',
          'What happens on the stack/heap during upcasting vs downcasting?',
          'Explain runtime polymorphism with a program.',
          'Can you create an object of an abstract class? Justify.',
        ],
      },
    ],
  },
  {
    moduleId: 'java-m5',
    title: 'Module 5 · Exception Handling & Multithreading',
    sections: [
      {
        h: '5.1 Exception Handling',
        items: [
          '**Exception** = runtime abnormality dividing the flow; `Throwable` → `Exception` (checked) and `Error` (JVM-level, unchecked).',
          '**Checked** (IOException, SQLException) — must handle/declare; **unchecked** (ArithmeticException, NullPointerException, ArrayIndexOutOfBounds) — RuntimeException subclasses, no forced handling.',
          '**Handling**: `try` → suspect code; `catch` → recover; `finally` → always executes (cleanup). `try-with-resources` (Java 7) auto-closes AutoCloseable.',
          'Multiple `catch` blocks — most specific first; `throw` throws explicitly, `throws` declares in signature.',
          '**User-defined exceptions**: extend Exception (checked) or RuntimeException (unchecked) and call super(msg).',
        ],
      },
      {
        h: '5.2 Multithreading & Thread Life Cycle',
        items: [
          '**Thread** = lightweight process sharing memory; **two ways**: extend `Thread`, or implement `Runnable` (preferred — keeps single inheritance).',
          '**Thread lifecycle**: New → Runnable → Running → {Blocked/Waiting/Sleeping} → Dead.',
          'Core methods: `start()`, `run()`, `sleep(ms)`, `join()`, `yield()`, `setPriority(1–10)`, `isAlive()`.',
          '**Synchronization**: `synchronized` method/block guards shared state; **monitor** (implicit lock per object); `wait()/notify()/notifyAll()` for inter-thread communication.',
          '**Thread safety problems**: race condition, deadlock, livelock; daemon threads run in background and die when only daemons remain.',
          'Scheduler decides execution order — output of multithreaded programs is generally **non-deterministic**.',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Tabulate checked vs unchecked exceptions with examples.',
          'Write a program with try-catch-finally and show finally always runs.',
          'Create a thread by extending Thread AND by implementing Runnable — code both.',
          'Draw and explain the thread life cycle diagram.',
          'Explain `synchronized`, `wait()`, `notify()` with the producer–consumer problem.',
        ],
      },
    ],
  },
];