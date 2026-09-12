import type { ChapterNote } from '../../types';

export const DBMS_NOTES: ChapterNote[] = [
  {
    moduleId: 'dbms-m1',
    title: 'Module 1 · Introduction to Database Management System',
    sections: [
      {
        h: '1.1 Database Concepts',
        items: [
          'A **database** is an organised, shared collection of logically related data stored together with controlled redundancy.',
          '**DBMS** = software (Oracle, MySQL, PostgreSQL, SQL Server, MongoDB) that manages creation, querying, update and administration of databases.',
          '**Data** (raw facts) vs **information** (processed, meaningful data) — the DBMS converts and stores data so it can be turned into information.',
          '**Metadata** describes the data (schema, constraints, indexes) — stored in the **data dictionary** or **catalog**.',
          '**Database system vs file system**: file systems suffer data redundancy, inconsistency, isolation, integrity and security problems; DBMS solves these.',
          '**Three-schema architecture**: external (user views) → conceptual (community view, schema) → internal (physical storage).',
        ],
      },
      {
        h: '1.2 Architecture & Users',
        items: [
          '**1-tier / 2-tier / 3-tier client–server architectures**; a typical 3-tier: presentation (UI) → application (business logic) → DB server.',
          '**Users**: end users (naive), application programmers, database administrators (**DBA** — schema, backup, tuning, security), casual users.',
          '**Data independence**: logical (change schema w/o changing views) and physical (change storage w/o changing schema).',
          '**Components**: query processor, **DDL/DML compiler**, storage manager, transaction manager, buffer manager, file manager.',
          'DBMS languages: **DDL** (create/alter/drop), **DML** (select/insert/update/delete), **DCL** (grant/revoke), **TCL** (commit/rollback).',
        ],
      },
      {
        h: '1.3 Advantages & Disadvantages',
        items: [
          'Advantages: reduced **redundancy** & inconsistency, **data integrity**, **data security**, **concurrency control**, **backup/recovery**, data sharing, enforcement of **constraints** (entity, referential, domain, key).',
          'Disadvantages: high cost (software, hardware, training), complexity, higher risk of single point of failure, performance overhead vs flat files.',
          '**Self-describing nature** — the DBMS catalog describes itself; **query capability** via declarative SQL.',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Define DBMS and list 4 advantages over file systems (very frequent short question).',
          'Draw the three-schema architecture and explain data independence.',
          'Difference between logical and physical data independence — at least 3 points.',
          'List the components of DBMS architecture and roles of a DBA.',
        ],
      },
    ],
  },
  {
    moduleId: 'dbms-m2',
    title: 'Module 2 · Data Models & Keys',
    sections: [
      {
        h: '2.1 Data Models',
        items: [
          '**Data model** = formal description of data structures, constraints and operations (conceptual tools for designing a database).',
          '**Hierarchical model** — parent/child tree; only M:1 and 1:1 relationships easily; one parent per child.',
          '**Network model** — CODASYL, many-to-many via sets; more flexible than hierarchical, complex to implement.',
          '**Relational model** — data in **tables (relations)**, rows = **tuples**, columns = **attributes**; most widely used (Codd, 1970).',
          '**Object-oriented / object-relational** — objects with methods; **ER model** — entity sets, attributes and relationships (a design tool, not implementation).',
          '**EER** (extended ER) adds specialisation/generalisation and categories.',
        ],
      },
      {
        h: '2.2 Keys',
        items: [
          '**Super key** — any set of attributes that uniquely identifies tuples.',
          '**Candidate key** — minimal super key (no proper subset is a super key); a table may have several.',
          '**Primary key (PK)** — chosen candidate key; unique + not null.',
          '**Alternate key** — candidate keys not chosen as PK.',
          '**Foreign key (FK)** — attribute(s) referencing the PK of another table (**referential integrity**).',
          '**Composite key** — multi-attribute key; **surrogate key** (artificial id) vs **natural key**.',
        ],
      },
      {
        h: '2.3 Mapping ER → Relational',
        items: [
          'Weak entity set gets PK = partial key + owner PK (double-underline partial key).',
          'M:N relationship becomes a **relationship table** with both FKs (composite PK).',
          '1:1 / 1:N — put FK on the many side (or merge 1:1 table).',
          'Multi-valued attributes become separate tables.',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Given a set of attributes, identify super, candidate, primary and alternate keys.',
          'Difference between primary and foreign key with one example table.',
          'State the advantages of the relational model over hierarchical/network.',
          'Convert a simple ER diagram to relational tables (cards: 1:1, 1:N, M:N).',
        ],
      },
    ],
  },
  {
    moduleId: 'dbms-m3',
    title: 'Module 3 · Relational Model',
    sections: [
      {
        h: '3.1 Relational Algebra',
        items: [
          '**Relational algebra** — procedural query language with relations as operands: σ (select), π (project), ∪ (union), − (set-diff), × (cross product), ρ (rename), ⨝ (join).',
          '**Select σ** filters rows by predicate; **Project π** picks columns and removes duplicates.',
          '**Join types**: natural (equi-join on same-named attributes), theta (on condition), **outer joins** (left/right/full — keep unmatched tuples with NULLs).',
          '**Set operations** need union-compatible schemas.',
          'Additional: **division (÷)** finds tuples present in all of a set — used for “who knows ALL subjects” style queries.',
          'SQL ⇔ relational algebra mapping: SELECT→πσ⨝…',
        ],
      },
      {
        h: '3.2 Relational Constraints',
        items: [
          '**Domain constraint** — attribute values must be from the declared domain/type.',
          '**Key constraint** — PK uniqueness; **entity integrity** — PK cannot be NULL.',
          '**Referential integrity** — FK value must exist in referenced PK or be NULL (if allowed).',
          '**Integrity enforcement**: restrictions on insert/delete/update — RESTRICT, CASCADE, SET NULL, SET DEFAULT, NO ACTION.',
        ],
      },
      {
        h: '3.3 SQL Fundamentals (query-level)',
        items: [
          'Row filtering with `WHERE`, column selection with `SELECT`, `ORDER BY`, `GROUP BY`, `HAVING` (filters groups).',
          '`JOIN` tables on FK; `EXISTS/IN`, `LIKE`, `BETWEEN`, `IS NULL` predicates.',
          'Aggregates: `COUNT, SUM, AVG, MIN, MAX` — never in WHERE, only in SELECT/HAVING.',
          'Set/unions via `UNION`, `INTERSECT`, `EXCEPT` (set semantics vs `UNION ALL`).',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Write relational algebra and equivalent SQL for a given English query (find employees in dept X earning > Y).',
          'Natural join vs equi join vs outer join difference table.',
          'Explain entity, referential and domain integrity with examples.',
          'List relational algebra operations and give symbols.',
        ],
      },
    ],
  },
  {
    moduleId: 'dbms-m4',
    title: 'Module 4 · Relational Database Design',
    sections: [
      {
        h: '4.1 Functional Dependencies',
        items: [
          '**Functional dependency (FD)** A→B: two tuples with same A always have same B.',
          '**Trivial FD** — A→B where B ⊆ A; **closure of FDs** (F⁺) contains every FD implied by the set.',
          '**Armstrong’s axioms**: reflexivity, augmentation, transitivity (with derived: union, decomposition, pseudotransitivity) — used to compute F⁺ and keys.',
          'Compute **candidate keys** from FDs by finding attribute sets whose closure covers all attributes.',
          '**Attribute closure (A⁺)** — the set of attributes reachable from A through FDs.',
        ],
      },
      {
        h: '4.2 Normalization (1NF–BCNF)',
        items: [
          '**1NF** — atomic attribute values (no repeating groups/multi-valued attributes).',
          '**2NF** — 1NF + no **partial dependency** (non-key depends on part of a composite key).',
          '**3NF** — 2NF + no **transitive dependency** (non-key → non-key); leaves FDs of form X→A where X is superkey or A is prime.',
          '**BCNF** — every determinant is a superkey; stricter than 3NF; removes remaining anomalies.',
          '**4NF** — no multi-valued dependency; **5NF** — no join dependency (project-join normal form).',
          '**Decomposition**: lossless join property (common superkey), dependency preservation (F⁺ covered).',
        ],
      },
      {
        h: '4.3 Anomalies & Design Goals',
        items: [
          'Redundancy causes **insertion, deletion and update anomalies** — normalization removes them.',
          'Steps: unnormalised → 1NF → 2NF → 3NF → BCNF with lossless, dependency-preserving decomposition.',
          '**Denormalisation** (deliberate) trades normal forms for query speed in read-heavy systems.',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Given a relation + FDs, find candidate key, check normal form, decompose to 3NF/BCNF (show closure work).',
          'Explain partial vs transitive dependency with examples.',
          'Normalise an example table through each normal form — the classic 8-marker.',
          'Compare 3NF and BCNF with a counter-example where BCNF fails dependency preservation.',
        ],
      },
    ],
  },
  {
    moduleId: 'dbms-m5',
    title: 'Module 5 · SQL / MySQL',
    sections: [
      {
        h: '5.1 DDL, DML, TCL & DCL',
        items: [
          '**DDL**: `CREATE TABLE`, `ALTER TABLE`, `DROP`, `TRUNCATE`, `RENAME`, `CREATE INDEX` — auto-committed.',
          '**DML**: `INSERT`, `UPDATE`, `DELETE`, `SELECT` (SELECT is often called DQL).',
          '**TCL**: `COMMIT` (save permanently), `ROLLBACK` (undo to last commit/savepoint), `SAVEPOINT`.',
          '**DCL**: `GRANT` / `REVOKE` (user privileges).',
          'Constraints: `NOT NULL, UNIQUE, PRIMARY KEY, FOREIGN KEY, CHECK, DEFAULT` — declare inline or with `ADD CONSTRAINT`.',
          '`TRUNCATE` vs `DELETE`: TRUNCATE removes all rows and resets, no row-level triggers; DELETE is row-wise with WHERE and can be rolled back.',
        ],
      },
      {
        h: '5.2 Joins & Subqueries',
        items: [
          '**INNER JOIN** — matching rows only; **LEFT/RIGHT/FULL OUTER JOIN** — keep unmatched with NULL; **CROSS JOIN** — cartesian product.',
          '**Self-join** — join a table to itself (manager to employee).',
          '**Subqueries** — scalar, row, column, table; **correlated subquery** evaluates once per outer row (slow, but powerful).',
          '`EXISTS` vs `IN`: EXISTS short-circuits on first match; IN materialises the subquery result.',
          '`GROUP BY` groups rows; `HAVING` filters groups (aggregates); `WHERE` filters rows before grouping.',
        ],
      },
      {
        h: '5.3 Indexes, Views & Transactions',
        items: [
          '**Index** (B-tree, Hash) speeds lookups at the cost of write overhead — clustered (order rows) vs non-clustered.',
          '**View** = virtual table (stored query); restricts access, simplifies queries; some views are updatable under conditions.',
          '**Transaction properties (ACID)**: Atomicity, Consistency, Isolation, Durability.',
          '**Isolation levels**: READ UNCOMMITTED, READ COMMITTED, REPEATABLE READ, SERIALIZABLE (dirty read, non-repeatable read, phantom problems).',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Write `CREATE TABLE` with all constraints for a sample schema and then INSERT/UPDATE/DELETE.',
          'Equal salary/department queries using JOIN + GROUP BY + HAVING (the classic “second highest salary” via subquery/limit).',
          'Difference tables: TRUNCATE vs DELETE, WHERE vs HAVING, IN vs EXISTS.',
          'Explain ACID with each letter via commit/rollback scenarios.',
        ],
      },
    ],
  },
];