import { useState, useEffect } from "react";

const LANGUAGES = ["Pascal", "C++", "Python", "SQL", "HTML"];

const CURRICULUM = {
  Pascal: {
    color: "#e8a020", accent: "#fff3d4", icon: "🟡",
    topics: [
      {
        id:"p1", title:"Introduction to Pascal", form:1,
        lesson:`Pascal is a structured programming language created by Niklaus Wirth in 1970. It was designed to teach good programming habits, which is why it is still used in Zambian secondary schools today.

Every Pascal program follows the same clear structure:
1. The PROGRAM header gives your program a name
2. Declarations where you define variables and constants
3. The main block wrapped in BEGIN...END.

Here is what each part does:
PROGRAM HelloZambia; labels the program. The name cannot have spaces.
BEGIN tells Pascal to start running code from here.
WriteLn(...) prints text to the screen and moves to the next line automatically.
END. with a full stop is very important — it closes the entire program. END; with a semicolon only closes an inner block.

Pascal forces you to think carefully about program organisation before you write code. You will use Pascal to solve real problems — calculating school fees, tracking exam results, and managing records at markets like Soweto or Kalingalinga.`,
        code:`PROGRAM HelloZambia;\nBEGIN\n  WriteLn('Welcome to Lusaka Coding Academy!');\n  WriteLn('Pascal is fun and easy to learn.');\nEND.`,
        explanation:"PROGRAM declares the program name. WriteLn prints a line of text. BEGIN and END. wrap the main code block.",
        question:{text:"Chanda is writing her first Pascal program to display her school name, Munali Girls Secondary School. Which line correctly prints the school name?",options:["Print('Munali Girls Secondary School');","WriteLn('Munali Girls Secondary School');","Display Munali Girls Secondary School;","Echo 'Munali Girls Secondary School';"],answer:1,hint:"Pascal uses WriteLn to output text to the screen."},
        q2:{text:"What punctuation correctly ends the final Pascal program block?",options:["END;","END.","ENDPROGRAM.","FINISH;"],answer:1,hint:"END. with a full stop closes the program. END; closes an inner block."},
        q3:{text:"Lombe writes: BEGIN WriteLn('A'); WriteLn('B'); END. — how many lines print?",options:["0","1","2","3"],answer:2,hint:"Each WriteLn prints one line. Two WriteLn calls = two lines of output."},
        trace:[
    {line:1, explanation:"PROGRAM HelloZambia; — declares the program name. Pascal uses this as a label. Nothing is printed yet.", vars:{}, output:null},
    {line:2, explanation:"BEGIN — marks the start of the main code block. Execution now enters this block.", vars:{}, output:null},
    {line:3, explanation:"WriteLn('Welcome to Lusaka Coding Academy!') — prints the text and moves the cursor to the next line.", vars:{}, output:"Welcome to Lusaka Coding Academy!"},
    {line:4, explanation:"WriteLn('Pascal is fun and easy to learn.') — prints the second line of text.", vars:{}, output:"Welcome to Lusaka Coding Academy!\nPascal is fun and easy to learn."},
    {line:5, explanation:"END. — the full stop ends the entire program. Execution stops here.", vars:{}, output:"Welcome to Lusaka Coding Academy!\nPascal is fun and easy to learn."}
  ],
        worked:{
  scenario:"A teacher at Munali Girls wants to display a welcome message on the school computer lab screens.",
  problem:"Write a Pascal program that prints two lines: 'Welcome to Munali Girls Secondary School' and 'Pascal Programming — Form 1'.",
  steps:[
    {explain:"Every Pascal program starts with the PROGRAM keyword followed by a name. Choose a meaningful name with no spaces.", code:"PROGRAM WelcomeScreen;"},
    {explain:"Open the main code block with BEGIN.", code:"BEGIN"},
    {explain:"Use WriteLn to print each line. WriteLn automatically moves to the next line after printing.", code:"  WriteLn('Welcome to Munali Girls Secondary School');\n  WriteLn('Pascal Programming — Form 1');"},
    {explain:"Close the program with END followed by a full stop (not a semicolon).", code:"END."}
  ],
  answer:"The program prints two lines exactly as specified. Each WriteLn call outputs one line.",
  answerCode:"PROGRAM WelcomeScreen;\nBEGIN\n  WriteLn('Welcome to Munali Girls Secondary School');\n  WriteLn('Pascal Programming — Form 1');\nEND.",
  insight:"END. (full stop) closes the whole program. END; (semicolon) would close an inner block. This is one of the most common Pascal mistakes."
},
      },
      {
        id:"p2", title:"Variables & Data Types", form:1,
        lesson:`Variables are containers that store information your program needs to remember. In Pascal, you MUST declare every variable before you use it — this forces you to plan your data needs in advance.

The VAR section lists all variables and their data types. Pascal reserves the right amount of memory for each one.

The four most common Pascal data types:
INTEGER stores whole numbers with no decimal point. Use for things you count: students, bags of maize, a pupil's age. Range: roughly -32,000 to 32,000.
REAL stores decimal numbers. Use for things you measure: exam scores like 87.5, prices in Kwacha, rainfall in millimetres. Format output with :0:2 to control decimal places.
STRING stores text of any length. Always put string values in single quotes like 'Chanda Mutale'.
BOOLEAN stores only TRUE or FALSE. Use for yes/no situations: is a student enrolled? Did they pass?

The assignment operator in Pascal is := (colon then equals). The single = is only for comparing values. Writing x = 5 instead of x := 5 is one of the most common beginner mistakes — Pascal will give a compile error.`,
        code:`PROGRAM StudentRecord;\nVAR\n  studentName : String;\n  age         : Integer;\n  score       : Real;\nBEGIN\n  studentName := 'Mwansa Banda';\n  age := 15;\n  score := 87.5;\n  WriteLn('Name: ', studentName);\n  WriteLn('Age: ', age);\n  WriteLn('Score: ', score:0:1, '%');\nEND.`,
        explanation:"VAR declares variables. := is the assignment operator. Each variable must have a declared type.",
        question:{text:"Mutale tracks maize harvest (whole bags) at her farm in Mkushi. Which data type should she use?",options:["Real","String","Boolean","Integer"],answer:3,hint:"Whole numbers like bags of maize are best stored as Integer."},
        q2:{text:"Which Pascal operator assigns a value to a variable?",options:["=","==",":=","->"],answer:2,hint:"Pascal uses := for assignment. = is used only for comparison."},
        q3:{text:"A variable is declared as Integer. What happens if you assign 3.14 to it?",options:["Stores 3.14","Stores 3 (truncated)","Compile error","Stores '3.14' as text"],answer:2,hint:"An Integer cannot hold decimals — the compiler will reject it."},
        trace:[
    {line:1, explanation:"PROGRAM StudentRecord; — names the program. No output yet.", vars:{}, output:null},
    {line:3, explanation:"VAR section — Pascal requires all variables to be declared here before BEGIN. No values assigned yet.", vars:{studentName:"?", age:"?", score:"?"}, output:null},
    {line:8, explanation:"studentName := 'Mwansa Banda'; — assigns the string value to studentName using the Pascal assignment operator :=", vars:{studentName:"Mwansa Banda", age:"?", score:"?"}, output:null},
    {line:9, explanation:"age := 15; — assigns the integer 15 to age.", vars:{studentName:"Mwansa Banda", age:15, score:"?"}, output:null},
    {line:10, explanation:"score := 87.5; — assigns the real number 87.5 to score.", vars:{studentName:"Mwansa Banda", age:15, score:87.5}, output:null},
    {line:11, explanation:"WriteLn('Name: ', studentName) — prints the label and the value of studentName.", vars:{studentName:"Mwansa Banda", age:15, score:87.5}, output:"Name: Mwansa Banda"},
    {line:12, explanation:"WriteLn('Age: ', age) — prints the label and the integer value.", vars:{studentName:"Mwansa Banda", age:15, score:87.5}, output:"Name: Mwansa Banda\nAge: 15"},
    {line:13, explanation:"WriteLn('Score: ', score:0:1, '%') — :0:1 formats the real number to 1 decimal place.", vars:{studentName:"Mwansa Banda", age:15, score:87.5}, output:"Name: Mwansa Banda\nAge: 15\nScore: 87.5%"}
  ],
        worked:{
  scenario:"Bwalya is building a student record system for Choma Secondary School.",
  problem:"Declare variables for a student's name (text), form (whole number), and exam score (decimal). Assign: name='Bwalya Mwale', form=3, score=74.5. Print all three.",
  steps:[
    {explain:"Declare all variables in the VAR section with correct types. Text uses String, whole numbers use Integer, decimals use Real.", code:"VAR\n  name  : String;\n  form  : Integer;\n  score : Real;"},
    {explain:"In the BEGIN block, assign values using the := operator.", code:"name  := 'Bwalya Mwale';\nform  := 3;\nscore := 74.5;"},
    {explain:"Print each variable with a label. Use :0:1 to format the real number to 1 decimal place.", code:"WriteLn('Name: ', name);\nWriteLn('Form: ', form);\nWriteLn('Score: ', score:0:1, '%');"}
  ],
  answer:"Output: Name: Bwalya Mwale / Form: 3 / Score: 74.5%",
  answerCode:"PROGRAM StudentRecord;\nVAR\n  name  : String;\n  form  : Integer;\n  score : Real;\nBEGIN\n  name  := 'Bwalya Mwale';\n  form  := 3;\n  score := 74.5;\n  WriteLn('Name: ', name);\n  WriteLn('Form: ', form);\n  WriteLn('Score: ', score:0:1, '%');\nEND.",
  insight:":0:1 means minimum 0 characters wide, 1 decimal place. This is Pascal's way of formatting real numbers. Without it, 74.5 might print as 7.4500000E+01."
},
      },
      {
        id:"p3", title:"IF...THEN...ELSE", form:2,
        lesson:`Programs need to make decisions. Without conditions, every program would always do the same thing no matter what input it receives.

The IF...THEN...ELSE structure is Pascal's way of asking a question and acting differently depending on the answer. Think of it like a guard at a school gate: IF you have your ID THEN you can enter, ELSE you must go to the office.

How it works step by step:
Pascal evaluates the condition after IF. A condition is either TRUE or FALSE.
If TRUE, the code after THEN runs.
If FALSE, Pascal skips to ELSE or moves on.
You can chain conditions using ELSE IF to check several possibilities.

Very important Pascal rule: there must be NO semicolon on the line before ELSE. Writing WriteLn('Pass'); ELSE causes a compile error because the semicolon ends the IF statement early — then ELSE appears alone with nothing to attach to. This is one of the most common errors in Zambian exam answers.

Comparison operators you can use: = (equal), <> (not equal), > (greater than), < (less than), >= (greater or equal), <= (less or equal).

Always check from HIGHEST value to LOWEST when chaining conditions. If you check >= 50 before >= 80, a student scoring 90 gets the wrong grade.`,
        code:`PROGRAM GradeChecker;\nVAR mark : Integer;\nBEGIN\n  mark := 72;\n  IF mark >= 80 THEN\n    WriteLn('Distinction')\n  ELSE IF mark >= 65 THEN\n    WriteLn('Merit')\n  ELSE IF mark >= 50 THEN\n    WriteLn('Credit')\n  ELSE\n    WriteLn('Fail');\nEND.`,
        explanation:"The IF checks a condition. If TRUE, the THEN block runs. Otherwise it tries the next ELSE IF, or falls to the final ELSE.",
        question:{text:"Bwalya scored 58 on her exam at Choma Secondary School. What message will she receive?",options:["Distinction","Merit","Credit","Fail"],answer:2,hint:"58 is ≥50 but not ≥65. Which branch does that satisfy?"},
        q2:{text:"In Pascal, what is wrong with: IF mark > 50 THEN WriteLn('Pass'); ELSE WriteLn('Fail');",options:["Nothing — correct","Semicolon before ELSE causes error","THEN is missing","WriteLn needs brackets"],answer:1,hint:"There must be NO semicolon before ELSE in Pascal."},
        q3:{text:"A student scores 80. Which branch runs: IF mark > 80 THEN WriteLn('A') ELSE IF mark >= 80 THEN WriteLn('B') ELSE WriteLn('C')?",options:["A","B","C","Both A and B"],answer:1,hint:"80 > 80 is FALSE (strict greater than). So it falls to ELSE IF mark >= 80 which is TRUE."},
        trace:[
    {line:2, explanation:"VAR mark : Integer; — declares mark. No value yet.", vars:{mark:"?"}, output:null},
    {line:4, explanation:"mark := 72; — assigns 72 to mark.", vars:{mark:72}, output:null},
    {line:5, explanation:"IF mark >= 80 — evaluates: is 72 >= 80? FALSE. Skip the THEN branch.", vars:{mark:72, test:"72 >= 80 → FALSE"}, output:null},
    {line:7, explanation:"ELSE IF mark >= 65 — evaluates: is 72 >= 65? TRUE. Enter this branch.", vars:{mark:72, test:"72 >= 65 → TRUE"}, output:null},
    {line:8, explanation:"WriteLn('Merit') — condition was true so this prints. All remaining ELSE branches are skipped.", vars:{mark:72}, output:"Merit"}
  ],
        worked:{
  scenario:"ECZ uses a grading system: 80+ = Distinction, 65–79 = Merit, 50–64 = Credit, below 50 = Fail.",
  problem:"Write a Pascal program that reads a mark and prints the correct grade for a student at Kabulonga Boys.",
  steps:[
    {explain:"Declare a variable for the mark and read it from the user.", code:"VAR mark : Integer;\nBEGIN\n  ReadLn(mark);"},
    {explain:"Check the highest grade first — IF 80 or above, print Distinction.", code:"IF mark >= 80 THEN\n  WriteLn('Distinction')"},
    {explain:"Chain the remaining grades with ELSE IF. Each checks a lower threshold.", code:"ELSE IF mark >= 65 THEN\n  WriteLn('Merit')\nELSE IF mark >= 50 THEN\n  WriteLn('Credit')\nELSE\n  WriteLn('Fail');"}
  ],
  answer:"For mark=72: 72>=80 is FALSE, 72>=65 is TRUE → prints Merit.",
  answerCode:"PROGRAM GradeChecker;\nVAR mark : Integer;\nBEGIN\n  ReadLn(mark);\n  IF mark >= 80 THEN\n    WriteLn('Distinction')\n  ELSE IF mark >= 65 THEN\n    WriteLn('Merit')\n  ELSE IF mark >= 50 THEN\n    WriteLn('Credit')\n  ELSE\n    WriteLn('Fail');\nEND.",
  insight:"Always check from highest to lowest. If you checked >= 50 first, a student scoring 80 would get 'Credit' and never reach the Distinction branch."
},
      },
      {
        id:"p4", title:"FOR Loops", form:2,
        lesson:`A loop is a block of code that repeats automatically. Without loops, printing 100 student names would require 100 WriteLn statements. With a loop, you write it once and let the computer repeat it.

The FOR loop is the simplest Pascal loop. Use it when you know EXACTLY how many times to repeat. It has a counter that starts at one value and counts up to another.

Syntax: FOR counter := start TO finish DO statement

How it works:
1. Pascal sets counter to the start value
2. Checks: is counter <= finish? If YES, runs the statement
3. After running, automatically adds 1 to counter
4. When counter exceeds finish, the loop stops

For more than one statement inside the loop, wrap them in BEGIN...END like this:
FOR i := 1 TO 5 DO
BEGIN
  WriteLn(i);
  WriteLn('hello');
END;

Without BEGIN...END, only the first statement after DO belongs to the loop. This is a very common exam mistake.

The FOR loop is ideal for printing multiplication tables, processing every item in an array, counting totals, and repeating a task a fixed number of times.`,
        code:`PROGRAM MarketStall;\nVAR item, price : Integer;\nBEGIN\n  WriteLn('Soweto Market Prices:');\n  FOR item := 1 TO 5 DO\n  BEGIN\n    price := item * 5;\n    WriteLn('Item ', item, ': K', price);\n  END;\nEND.`,
        explanation:"FOR item := 1 TO 5 DO runs the block 5 times. Each iteration, item increases by 1 automatically.",
        question:{text:"FOR i := 1 TO 4 DO WriteLn(i * 3). What are the four numbers printed?",options:["1, 2, 3, 4","3, 6, 9, 12","4, 8, 12, 16","1, 3, 9, 27"],answer:1,hint:"Multiply each value of i (1,2,3,4) by 3."},
        q2:{text:"How many times does FOR i := 5 TO 5 DO WriteLn(i) execute?",options:["0 times","1 time","5 times","Infinite"],answer:1,hint:"When start equals finish the loop runs exactly once."},
        q3:{text:"A Soweto Market stall has 12 items. Which FOR loop header processes all of them?",options:["FOR i := 0 TO 12 DO","FOR i := 1 TO 12 DO","FOR i := 1 TO 11 DO","FOR i := 12 DOWNTO 1 DO"],answer:1,hint:"Pascal arrays and loops typically start at 1. TO 12 includes the 12th item."},
        trace:[
    {line:3, explanation:"item := 0, price := 0 — loop counter and price start uninitialised. BEGIN starts execution.", vars:{item:"?", price:"?"}, output:null},
    {line:5, explanation:"FOR item := 1 TO 5 DO — loop starts. item = 1. Condition 1 <= 5 is TRUE.", vars:{item:1, price:"?"}, output:null},
    {line:7, explanation:"price := item * 5 → 1 * 5 = 5.", vars:{item:1, price:5}, output:null},
    {line:8, explanation:"WriteLn('Item ', item, ': K', price) → prints Item 1: K5.", vars:{item:1, price:5}, output:"Item 1: K5"},
    {line:5, explanation:"item increments to 2. Condition 2 <= 5 TRUE. price := 2*5 = 10.", vars:{item:2, price:10}, output:"Item 1: K5\nItem 2: K10"},
    {line:5, explanation:"item = 3. price = 15. Prints Item 3: K15.", vars:{item:3, price:15}, output:"Item 1: K5\nItem 2: K10\nItem 3: K15"},
    {line:5, explanation:"item = 4. price = 20. item = 5. price = 25. Loop finishes when item reaches 6 > 5.", vars:{item:5, price:25}, output:"Item 1: K5\nItem 2: K10\nItem 3: K15\nItem 4: K20\nItem 5: K25"}
  ],
        worked:{
  scenario:"A teacher at Matero Boys wants to print the 5-times table to display on the classroom wall.",
  problem:"Use a FOR loop to print the 5-times table from 1×5 to 12×5.",
  steps:[
    {explain:"Declare a counter variable i and a result variable.", code:"VAR i, result : Integer;"},
    {explain:"Loop from 1 to 12 using FOR...TO...DO.", code:"FOR i := 1 TO 12 DO"},
    {explain:"Inside the loop, calculate the result and print a formatted line.", code:"BEGIN\n  result := i * 5;\n  WriteLn(i, ' x 5 = ', result);\nEND;"}
  ],
  answer:"Prints: 1 x 5 = 5 / 2 x 5 = 10 / ... / 12 x 5 = 60",
  answerCode:"PROGRAM TimesTable;\nVAR i, result : Integer;\nBEGIN\n  FOR i := 1 TO 12 DO\n  BEGIN\n    result := i * 5;\n    WriteLn(i, ' x 5 = ', result);\n  END;\nEND.",
  insight:"When a FOR loop body has more than one statement, wrap it in BEGIN...END. Without them, only the first statement is part of the loop."
},
      },
      {
        id:"p5", title:"WHILE Loops", form:2,
        lesson:`The WHILE loop is more flexible than the FOR loop — it does not require a fixed number of repetitions. It keeps running as long as a condition remains TRUE and stops the moment the condition becomes FALSE.

Syntax: WHILE condition DO statement

Key difference from FOR:
FOR loop: you decide in advance how many times it runs.
WHILE loop: it keeps running until something changes.

How it works:
1. Pascal checks the condition BEFORE running the body
2. If TRUE, runs the body
3. Goes back and checks the condition again
4. If FALSE, exits the loop

A WHILE loop can run ZERO times if the condition is already FALSE at the start.

The most dangerous mistake: forgetting to update the condition variable inside the loop. If litres never increases, then litres < 100 is always TRUE and the loop runs forever — this is called an infinite loop. Your program appears to freeze and you must force-quit it.

Always ensure something changes inside the loop that will eventually make the condition FALSE. In Zambia, WHILE loops model real situations: filling a ZESCO water tank, prompting a user to enter valid data, or reading records from a file until you reach the end.`,
        code:`PROGRAM WaterTank;\nVAR litres : Integer;\nBEGIN\n  litres := 0;\n  WriteLn('Filling borehole tank at Kafue:');\n  WHILE litres < 100 DO\n  BEGIN\n    litres := litres + 20;\n    WriteLn('Tank level: ', litres, 'L');\n  END;\n  WriteLn('Tank is full!');\nEND.`,
        explanation:"The loop keeps running while litres < 100. Each iteration adds 20L. When litres reaches 100 the condition is FALSE and the loop stops.",
        question:{text:"How many times does the WHILE loop above execute before stopping?",options:["4 times","5 times","6 times","It never stops"],answer:1,hint:"20, 40, 60, 80, 100 — count the steps."},
        q2:{text:"What is the key danger if the condition variable is never updated inside a WHILE loop?",options:["Runs zero times","Compile error","Infinite loop — program freezes","Runs once"],answer:2,hint:"If the condition never becomes FALSE the loop never exits."},
        q3:{text:"WHILE litres < 50 DO litres := litres + 15; starts with litres=0. What is litres when it ends?",options:["45","50","60","15"],answer:2,hint:"0→15→30→45→60. At 60, the condition 60 < 50 is FALSE so the loop stops."},
        trace:[
    {line:3, explanation:"litres := 0; — tank starts empty.", vars:{litres:0}, output:null},
    {line:6, explanation:"WHILE litres < 100 — check: 0 < 100? TRUE. Enter loop body.", vars:{litres:0}, output:null},
    {line:8, explanation:"litres := litres + 20 → 0 + 20 = 20.", vars:{litres:20}, output:null},
    {line:9, explanation:"WriteLn('Tank level: ', litres, 'L') → prints Tank level: 20L.", vars:{litres:20}, output:"Tank level: 20L"},
    {line:6, explanation:"Check: 20 < 100? TRUE. litres := 40. Print Tank level: 40L.", vars:{litres:40}, output:"Tank level: 20L\nTank level: 40L"},
    {line:6, explanation:"60 < 100 TRUE → 60. 80 < 100 TRUE → 80. 100 < 100? FALSE — exit loop.", vars:{litres:100}, output:"Tank level: 20L\nTank level: 40L\nTank level: 60L\nTank level: 80L\nTank level: 100L"},
    {line:11, explanation:"WriteLn('Tank is full!') — loop has exited. Prints final message.", vars:{litres:100}, output:"Tank level: 20L\nTank level: 40L\nTank level: 60L\nTank level: 80L\nTank level: 100L\nTank is full!"}
  ],
        worked:{
  scenario:"ZESCO monitors water levels in a Kafue dam. They need to track filling until it reaches capacity.",
  problem:"Write a WHILE loop that adds 15 litres per pump cycle until the tank reaches or exceeds 100 litres. Print the level after each cycle.",
  steps:[
    {explain:"Initialise the water level to 0 before the loop.", code:"litres := 0;"},
    {explain:"The WHILE condition checks BEFORE each iteration — stop when litres reaches 100.", code:"WHILE litres < 100 DO"},
    {explain:"Inside the loop, add 15 litres and print the current level.", code:"BEGIN\n  litres := litres + 15;\n  WriteLn('Level: ', litres, 'L');\nEND;"},
    {explain:"After the loop, print the final status.", code:"WriteLn('Capacity reached!');"}
  ],
  answer:"Prints levels: 15, 30, 45, 60, 75, 90, 105 — loop exits when 105 >= 100.",
  answerCode:"PROGRAM DamMonitor;\nVAR litres : Integer;\nBEGIN\n  litres := 0;\n  WHILE litres < 100 DO\n  BEGIN\n    litres := litres + 15;\n    WriteLn('Level: ', litres, 'L');\n  END;\n  WriteLn('Capacity reached!');\nEND.",
  insight:"The loop may overshoot — 90+15=105, not exactly 100. A WHILE loop stops when the condition becomes false, not when it hits the exact target value."
},
      },
      {
        id:"p6", title:"Procedures & Functions", form:3,
        lesson:`As programs grow larger, writing all code in one long block becomes messy. Pascal solves this with PROCEDURES and FUNCTIONS — named blocks of code you can call from anywhere in your program.

A PROCEDURE performs an action but does NOT return a value. It is like asking someone to print the report — they do the task and that is it.

A FUNCTION performs a calculation and RETURNS a value back to the caller. It is like asking what is the total — they calculate and give you the answer.

Both can accept PARAMETERS — values you pass in when calling them. Parameters let the same procedure or function work with different data each time.

How to return a value from a Pascal function: Pascal does NOT use a return keyword. Instead, you assign the result to the function's own name:
Revenue := tonnes * pricePerTonne;

This is unique to Pascal and is a common source of mistakes for students who have seen other languages first.

Why use procedures and functions?
Reusability: write the code once, call it many times.
Readability: your main program reads like a list of clear actions.
Avoiding repetition: change logic in one place and it updates everywhere.

In Zambia, you might write a function CalcTax(income) that computes ZRA tax and a procedure PrintReceipt(amount) that displays a formatted receipt.`,
        code:`PROGRAM CopperCalc;\nFUNCTION Revenue(t : Real) : Real;\nCONST price = 8500.0;\nBEGIN\n  Revenue := t * price;\nEND;\nPROCEDURE PrintReport(t, r : Real);\nBEGIN\n  WriteLn('Tonnes: ', t:0:1);\n  WriteLn('Revenue: $', r:0:2);\nEND;\nVAR tonnes, rev : Real;\nBEGIN\n  tonnes := 12.5;\n  rev := Revenue(tonnes);\n  PrintReport(tonnes, rev);\nEND.`,
        explanation:"Revenue is a FUNCTION — it takes input and returns a value. PrintReport is a PROCEDURE — it only prints.",
        ecz:"ECZ loves asking you to write a FUNCTION that returns a value (e.g. calculate VAT or tax). Know the difference between PROCEDURE (no return) and FUNCTION (returns a value using FunctionName := value).",
        question:{text:"A Kitwe mine extracted 20 tonnes. Using Revenue(20) at $8,500/tonne, what is returned?",options:["$85,000","$170,000","$8,500","$425,000"],answer:1,hint:"20 × 8500 = ?"},
        q2:{text:"Which correctly defines a Pascal FUNCTION returning an Integer?",options:["PROCEDURE Calc(n:Integer):Integer;","FUNCTION Calc(n:Integer);","FUNCTION Calc(n:Integer):Integer;","FUNCTION Calc:Integer(n);"],answer:2,hint:"Include FUNCTION keyword, name, parameters, colon, then return type."},
        q3:{text:"Inside a Pascal FUNCTION named Total, how do you return the value 99?",options:["return 99;","RETURN := 99;","Total := 99;","EXIT(99);"],answer:2,hint:"In Pascal, assign to the function name itself: Total := 99."},
        trace:[
    {line:2, explanation:"FUNCTION Revenue(t:Real):Real — defines a function. Not called yet, just stored in memory.", vars:{}, output:null},
    {line:13, explanation:"tonnes := 12.5; — assigns the input value.", vars:{tonnes:12.5, rev:"?"}, output:null},
    {line:14, explanation:"rev := Revenue(tonnes) — calls Revenue(12.5). Jumps into the function.", vars:{tonnes:12.5, t:12.5, rev:"?"}, output:null},
    {line:4, explanation:"CONST price = 8500.0. Revenue := 12.5 * 8500.0 = 106250.0. Return value set.", vars:{tonnes:12.5, t:12.5, price:8500, rev:"106250.0 (returning)"}, output:null},
    {line:14, explanation:"Back in main: rev receives the returned value 106250.0.", vars:{tonnes:12.5, rev:106250.0}, output:null},
    {line:15, explanation:"PrintReport(tonnes, rev) called — jumps into the PROCEDURE.", vars:{tonnes:12.5, rev:106250.0}, output:null},
    {line:8, explanation:"WriteLn('Tonnes: ', t:0:1) prints the tonnage.", vars:{t:12.5, r:106250.0}, output:"Tonnes: 12.5"},
    {line:9, explanation:"WriteLn('Revenue: $', r:0:2) prints the revenue formatted to 2 decimal places.", vars:{t:12.5, r:106250.0}, output:"Tonnes: 12.5\nRevenue: $106250.00"}
  ],
        worked:{
  scenario:"A Zambian tax system calculates income tax at 25% on amounts above K5,000.",
  problem:"Write a FUNCTION called CalcTax that takes gross income as a Real and returns the tax amount. Test it with K12,000.",
  steps:[
    {explain:"Define the function with its parameter and return type. The return type comes after the colon.", code:"FUNCTION CalcTax(gross : Real) : Real;"},
    {explain:"Inside the function, calculate tax on the amount above K5,000. Assign to the function name to set the return value.", code:"BEGIN\n  CalcTax := (gross - 5000) * 0.25;\nEND;"},
    {explain:"In the main block, call the function and print the result.", code:"WriteLn('Tax: K', CalcTax(12000):0:2);"}
  ],
  answer:"Tax on K12,000 = (12000 - 5000) × 0.25 = 7000 × 0.25 = K1,750.00",
  answerCode:"PROGRAM TaxCalc;\nFUNCTION CalcTax(gross : Real) : Real;\nBEGIN\n  CalcTax := (gross - 5000) * 0.25;\nEND;\nBEGIN\n  WriteLn('Tax: K', CalcTax(12000):0:2);\nEND.",
  insight:"In Pascal, you return a value by assigning to the function name itself: CalcTax := value. There is no 'return' keyword like in C++ or Python."
},
      },
      {
        id:"p7", title:"Arrays in Pascal", form:3,
        lesson:`An array is a variable that holds MULTIPLE values of the SAME data type under a single name. Instead of declaring 30 separate variables for 30 student scores, you declare one array that holds all 30.

Think of an array as a row of labelled boxes. Each box has an index number. In Pascal, array indices start at 1 by default.

Declaration: VAR scores : ARRAY[1..30] OF Integer;

Accessing elements:
scores[1] is the first element
scores[15] is the 15th element
scores[30] is the last element

Use a FOR loop to process all elements:
FOR i := 1 TO 30 DO
  total := total + scores[i];

Common array operations tested in ECZ exams:
1. Sum all elements: add each to a running total variable
2. Find maximum: start with max := scores[1] then compare each element
3. Find minimum: same idea but look for smaller values
4. Count matching items: use an IF inside the loop and increment a counter
5. Search: loop comparing each element to a target value

Arrays are used everywhere: storing student marks, tracking daily rainfall, holding product prices at a Lusaka supermarket, or keeping match scores for the Chipolopolo squad.`,
        code:`PROGRAM RainfallTracker;\nVAR\n  rain : ARRAY[1..6] OF Real;\n  i : Integer; total : Real;\nBEGIN\n  { Lusaka monthly rainfall mm }\n  rain[1]:=220; rain[2]:=180; rain[3]:=90;\n  rain[4]:=20;  rain[5]:=5;  rain[6]:=0;\n  total := 0;\n  FOR i := 1 TO 6 DO\n    total := total + rain[i];\n  WriteLn('Total: ', total:0:1, 'mm');\nEND.`,
        explanation:"ARRAY[1..6] holds 6 values. Loop index i visits each element from 1 to 6. total accumulates the rainfall sum.",
        ecz:"Arrays appear every year. Common question: declare an array, fill it in a loop, find the largest/smallest value. Always use 1-based indexing in Pascal.",
        question:{text:"What is rain[3] in the program above?",options:["180","90","20","5"],answer:1,hint:"rain[1]=220, rain[2]=180, rain[3]=?"},
        q2:{text:"How do you declare a Pascal array to hold 10 student names?",options:["VAR n:ARRAY(10) OF String;","VAR n:ARRAY[1..10] OF String;","VAR n[10]:String;","VAR n:STRING[10];"],answer:1,hint:"Pascal array syntax: ARRAY[lower..upper] OF Type."},
        q3:{text:"What is the correct loop to sum all values in rain[1..6] into total?",options:["FOR i:=0 TO 6 DO total:=total+rain[i];","FOR i:=1 TO 6 DO total:=total+rain[i];","FOR i:=1 TO 5 DO total:=total+rain[i];","WHILE i<6 DO total:=rain[i];"],answer:1,hint:"Pascal 1-based arrays: loop from 1 TO 6 to visit all 6 elements."},
        trace:[
    {line:4, explanation:"rain : ARRAY[1..6] OF Real — declares array of 6 real numbers. All slots empty.", vars:{rain:"[?,?,?,?,?,?]", total:"?", i:"?"}, output:null},
    {line:8, explanation:"rain[1]:=220 through rain[6]:=0 — all 6 slots assigned.", vars:{rain:"[220,180,90,20,5,0]", total:"?", i:"?"}, output:null},
    {line:9, explanation:"total := 0 — accumulator initialised.", vars:{rain:"[220,180,90,20,5,0]", total:0, i:"?"}, output:null},
    {line:10, explanation:"FOR i:=1 TO 6. i=1: total := 0 + 220 = 220.", vars:{rain:"[220,180,90,20,5,0]", total:220, i:1}, output:null},
    {line:10, explanation:"i=2: total := 220 + 180 = 400.", vars:{total:400, i:2}, output:null},
    {line:10, explanation:"i=3: total = 490. i=4: total = 510. i=5: total = 515. i=6: total = 515. Loop ends.", vars:{total:515, i:6}, output:null},
    {line:12, explanation:"WriteLn('Total: ', total:0:1, 'mm') — total:0:1 formats to 1 decimal place.", vars:{total:515}, output:"Total: 515.0mm"}
  ],
        worked:{
  scenario:"A Form 3 class at Sikombe Secondary sat 5 maths tests. Store and find the highest score.",
  problem:"Store scores [78, 65, 91, 54, 83] in an array and find and print the highest score.",
  steps:[
    {explain:"Declare the array and helper variables.", code:"VAR scores : ARRAY[1..5] OF Integer;\n    i, highest : Integer;"},
    {explain:"Assign the five scores.", code:"scores[1]:=78; scores[2]:=65; scores[3]:=91;\nscores[4]:=54; scores[5]:=83;"},
    {explain:"Initialise highest to the first element, then loop comparing.", code:"highest := scores[1];\nFOR i := 2 TO 5 DO\n  IF scores[i] > highest THEN\n    highest := scores[i];"},
    {explain:"Print the result.", code:"WriteLn('Highest: ', highest);"}
  ],
  answer:"Prints: Highest: 91",
  answerCode:"PROGRAM FindHighest;\nVAR scores : ARRAY[1..5] OF Integer;\n    i, highest : Integer;\nBEGIN\n  scores[1]:=78; scores[2]:=65; scores[3]:=91;\n  scores[4]:=54; scores[5]:=83;\n  highest := scores[1];\n  FOR i := 2 TO 5 DO\n    IF scores[i] > highest THEN\n      highest := scores[i];\n  WriteLn('Highest: ', highest);\nEND.",
  insight:"Initialise highest to scores[1] (not 0), then loop from index 2. This works correctly even if all scores are negative."
},
      },
      {
        id:"p8", title:"Records", form:4,
        lesson:`While an array stores values of the SAME type, a RECORD groups values of DIFFERENT types into one unit — like one row in a spreadsheet.

A student record might contain a name (String), a form number (Integer), an exam score (Real), and enrolment status (Boolean). These different types cannot go in one array — a record holds them all together under one variable name.

The process has two steps:
Step 1: Define the record TYPE — the blueprint
Step 2: Declare a VARIABLE of that type — the actual storage

TYPE must come BEFORE VAR in your program. The correct order is:
PROGRAM then CONST then TYPE then VAR then procedures then BEGIN

Accessing fields uses DOT NOTATION: pupil.name, pupil.score
The dot connects the variable name to the field inside it.

You can combine records with arrays to create a list of records:
VAR myClass : ARRAY[1..30] OF StudentRec;
Then myClass[5].name gives you the 5th student's name.

Records model real-world data perfectly: hospital patient records, bank account details, product inventory — all have mixed data types that naturally belong together.`,
        code:`PROGRAM SchoolRecord;\nTYPE\n  StudentRec = RECORD\n    name  : String;\n    form  : Integer;\n    score : Real;\n  END;\nVAR pupil : StudentRec;\nBEGIN\n  pupil.name  := 'Lombe Mutale';\n  pupil.form  := 3;\n  pupil.score := 88.5;\n  WriteLn('Pupil: ', pupil.name);\n  WriteLn('Form:  ', pupil.form);\n  WriteLn('Score: ', pupil.score:0:1, '%');\nEND.`,
        explanation:"TYPE defines the record structure. Fields are accessed with dot notation (pupil.name). Records are similar to a single row in a spreadsheet.",
        ecz:"Records come up in Form 4 papers. Expect: define a RECORD type, declare a variable, assign fields using dot notation, and print them.",
        question:{text:"Which statement correctly sets the student's form to 4?",options:["form := 4;","pupil := 4;","pupil.form := 4;","StudentRec.form := 4;"],answer:2,hint:"Fields inside a record are accessed using the variable name and a dot."},
        q2:{text:"Where must the TYPE keyword for records be declared?",options:["Inside BEGIN...END","After VAR","Before VAR","After PROGRAM header, before CONST"],answer:2,hint:"Order: PROGRAM → CONST → TYPE → VAR → procedures → BEGIN...END"},
        q3:{text:"VAR class:ARRAY[1..30] OF StudentRec; How do you set the 5th student's name?",options:["class.name[5]:='Chanda';","class[5].name:='Chanda';","StudentRec[5].name:='Chanda';","name[5]:='Chanda';"],answer:1,hint:"Index into the array first: class[5], then dot notation: class[5].name"},
        trace:[
    {line:3, explanation:"TYPE StudentRec = RECORD — defines the record blueprint. No memory allocated yet.", vars:{}, output:null},
    {line:8, explanation:"VAR pupil : StudentRec — now memory is allocated for one StudentRec variable with 3 fields.", vars:{"pupil.name":"?", "pupil.form":"?", "pupil.score":"?"}, output:null},
    {line:10, explanation:"pupil.name := 'Lombe Mutale' — dot notation assigns to the name field.", vars:{"pupil.name":"Lombe Mutale", "pupil.form":"?", "pupil.score":"?"}, output:null},
    {line:11, explanation:"pupil.form := 3 — assigns to the form field.", vars:{"pupil.name":"Lombe Mutale", "pupil.form":3, "pupil.score":"?"}, output:null},
    {line:12, explanation:"pupil.score := 88.5 — assigns to the score field. Record is now fully populated.", vars:{"pupil.name":"Lombe Mutale", "pupil.form":3, "pupil.score":88.5}, output:null},
    {line:13, explanation:"WriteLn prints all three fields in one line.", vars:{"pupil.name":"Lombe Mutale", "pupil.form":3, "pupil.score":88.5}, output:"Lombe Mutale Form 3: 88.5%"}
  ],
        worked:{
  scenario:"A school needs to store and display one student's full record including name, form, and score.",
  problem:"Define a StudentRec record with name (String), form (Integer), score (Real). Create one record for 'Mwila Banda', Form 4, score 88.5 and print it.",
  steps:[
    {explain:"Define the record type in the TYPE section (before VAR).", code:"TYPE\n  StudentRec = RECORD\n    name  : String;\n    form  : Integer;\n    score : Real;\n  END;"},
    {explain:"Declare a variable of that type.", code:"VAR pupil : StudentRec;"},
    {explain:"Assign each field using dot notation.", code:"pupil.name  := 'Mwila Banda';\npupil.form  := 4;\npupil.score := 88.5;"},
    {explain:"Print all fields.", code:"WriteLn(pupil.name, ' Form ', pupil.form, ': ', pupil.score:0:1, '%');"}
  ],
  answer:"Prints: Mwila Banda Form 4: 88.5%",
  answerCode:"PROGRAM RecordDemo;\nTYPE\n  StudentRec = RECORD\n    name : String; form : Integer; score : Real;\n  END;\nVAR pupil : StudentRec;\nBEGIN\n  pupil.name := 'Mwila Banda';\n  pupil.form := 4; pupil.score := 88.5;\n  WriteLn(pupil.name, ' Form ', pupil.form, ': ', pupil.score:0:1, '%');\nEND.",
  insight:"TYPE must come before VAR in the declaration section. A record is like a row in a spreadsheet — one variable that holds multiple related pieces of data."
},
      },
      {
        id:"p9", title:"Constants (CONST)", form:2,
        lesson:`A constant is a named value that NEVER changes during the program. You declare it once in the CONST section and use its name everywhere.

Compare these two approaches:
Without CONST: total := 850 * 3;
With CONST: total := FeePerTerm * NumTerms;

The second version is far clearer — anyone reading it instantly understands what the numbers mean. If the school fee changes from K850 to K950, you change ONE line instead of hunting through the entire program.

Common uses of constants in Zambian programs:
School fees and term counts, ZRA tax rates (16% VAT), maximum class size (40 students), passing mark threshold (50%), and mathematical values like PI.

Constants vs Variables:
Variables are declared in VAR and can be changed with :=
Constants are declared in CONST and CANNOT be changed. Trying to assign a new value to a constant causes a compile error.

Pascal comments use curly braces { } or (* *). They are ignored by the compiler and serve as notes for the programmer. Always comment your constants:
CONST
  FeePerTerm = 850; { School fees in Kwacha per term }
  VATRate = 0.16;   { ZRA standard VAT rate }`,
        code:`PROGRAM SchoolFees;\nCONST\n  FeePerTerm  = 850;     { Kwacha }\n  NumTerms    = 3;\n  LateFeePct  = 0.10;   { 10% penalty }\nVAR\n  totalFees, lateFee, grandTotal : Real;\nBEGIN\n  totalFees := FeePerTerm * NumTerms;\n  lateFee   := totalFees * LateFeePct;\n  grandTotal := totalFees + lateFee;\n  WriteLn('Annual fees:  K', totalFees:0:2);\n  WriteLn('Late penalty: K', lateFee:0:2);\n  WriteLn('Grand total:  K', grandTotal:0:2);\nEND.`,
        explanation:"CONST values cannot be changed by the program. Using named constants like FeePerTerm is clearer than typing 850 everywhere. Curly braces { } are Pascal comments.",
        question:{text:"What is the grand total printed by the program above?",options:["K2,550","K2,805","K2,975","K3,000"],answer:1,hint:"3 × 850 = 2550, late fee = 2550 × 0.10 = 255, total = 2550 + 255."},
        q2:{text:"Why use CONST VAT=0.16 instead of 0.16 directly in code?",options:["Constants are faster","One change updates every use","Constants use less memory","Pascal requires it"],answer:1,hint:"Named constants make code easier to maintain — change one line, updates everywhere."},
        q3:{text:"Can you do this: VAT := 0.20; where VAT was declared as CONST?",options:["Yes — constants can be updated","No — compile error","Yes — inside a procedure only","No — but you can use a same-named variable"],answer:1,hint:"CONST values are fixed at compile time. Any attempt to reassign causes a compile error."},
        trace:[
    {line:3, explanation:"CONST declarations — FeePerTerm=850, NumTerms=3, LatePct=0.10. These are fixed; they cannot be changed.", vars:{FeePerTerm:850, NumTerms:3, LatePct:0.10}, output:null},
    {line:8, explanation:"VAR section — total, late, grand declared but not yet assigned.", vars:{total:"?", late:"?", grand:"?"}, output:null},
    {line:10, explanation:"total := FeePerTerm * NumTerms → 850 * 3 = 2550.", vars:{total:2550, late:"?", grand:"?"}, output:null},
    {line:11, explanation:"late := total * LatePct → 2550 * 0.10 = 255.", vars:{total:2550, late:255, grand:"?"}, output:null},
    {line:12, explanation:"grand := total + late → 2550 + 255 = 2805.", vars:{total:2550, late:255, grand:2805}, output:null},
    {line:13, explanation:"WriteLn prints annual fees.", vars:{total:2550}, output:"Annual fees:  K2550.00"},
    {line:14, explanation:"WriteLn prints late penalty.", vars:{late:255}, output:"Annual fees:  K2550.00\nLate penalty: K255.00"},
    {line:15, explanation:"WriteLn prints grand total.", vars:{grand:2805}, output:"Annual fees:  K2550.00\nLate penalty: K255.00\nGrand total:  K2805.00"}
  ],
        worked:{
  scenario:"A tuck shop at Munali needs to calculate prices with VAT. The VAT rate is 16% and must be easy to update.",
  problem:"Use a CONST for the VAT rate. Calculate and print the VAT-inclusive price for a K25 item.",
  steps:[
    {explain:"Declare the VAT rate as a constant so it's easy to change later.", code:"CONST VATRate = 0.16;"},
    {explain:"Declare variables for the base price and final price.", code:"VAR base, final : Real;"},
    {explain:"Assign the base price and calculate the final price using the constant.", code:"base  := 25.0;\nfinal := base + (base * VATRate);"},
    {explain:"Print the result formatted to 2 decimal places.", code:"WriteLn('Price with VAT: K', final:0:2);"}
  ],
  answer:"K25 + K25×0.16 = K25 + K4 = K29.00",
  answerCode:"PROGRAM TuckShop;\nCONST VATRate = 0.16;\nVAR base, final : Real;\nBEGIN\n  base  := 25.0;\n  final := base + (base * VATRate);\n  WriteLn('Price with VAT: K', final:0:2);\nEND.",
  insight:"If VAT changes to 18%, you update one line: VATRate = 0.18. Without CONST you would have to find every 0.16 in the code — easy to miss one."
},
      },
      {
        id:"p10", title:"CASE Statement", form:3,
        lesson:`The CASE statement provides a clean, readable alternative to long IF...ELSE IF chains. Instead of checking the same variable against many different values with repeated IF statements, CASE lists all possible values neatly in one place.

When to use CASE vs IF:
Use CASE when testing ONE variable against MULTIPLE specific values.
Use IF when conditions involve ranges (>= 80), multiple variables, or complex logic.
CASE only works with ordinal types: Integer, Char, Boolean — NOT with Real or String.

Structure:
CASE variable OF
  value1: action;
  value2: action;
  value3, value4: shared action;
  ELSE default_action;
END;

The ELSE clause handles any value not matching any listed case — always include it.

After the matching case executes, Pascal automatically exits the CASE block. There is NO break statement needed — this is a key difference from C++.

Examiner tip: you may be asked to convert an IF...ELSE IF chain into CASE. Remember that CASE can only handle exact values, not ranges. IF mark >= 80 cannot directly become a CASE because marks span a range, not a single specific value.

CASE is commonly used for menu systems, day-of-week programs, grade letter lookups, and month name conversions.`,
        code:`PROGRAM ProvinceCapital;\nVAR province : Integer;\nBEGIN\n  Write('Enter province number (1-4): ');\n  ReadLn(province);\n  CASE province OF\n    1: WriteLn('Lusaka     - Capital: Lusaka');\n    2: WriteLn('Copperbelt - Capital: Ndola');\n    3: WriteLn('Southern   - Capital: Livingstone');\n    4: WriteLn('Eastern    - Capital: Chipata');\n    ELSE WriteLn('Unknown province number.');\n  END;\nEND.`,
        explanation:"CASE checks one variable (province) against several values. It is neater than four ELSE IF blocks. ELSE handles any value not listed. END closes the CASE block.",
        ecz:"CASE statements are tested as an alternative to IF-ELSE. Expect to convert an IF-ELSE chain into a CASE, or trace what a CASE outputs for a given input.",
        question:{text:"What output does the program produce when the user enters 3?",options:["Lusaka - Capital: Lusaka","Copperbelt - Capital: Ndola","Southern - Capital: Livingstone","Unknown province number."],answer:2,hint:"Case 3 matches the third option."},
        q2:{text:"Which C++ keyword handles values not matched by any case in a switch?",options:["else","otherwise","default","catch"],answer:2,hint:"default: in a switch is the fallback when no case matches."},
        q3:{text:"What happens if you forget break; after a case in a switch statement?",options:["Compile error","Case is skipped","Execution falls through into the next case","Switch exits automatically"],answer:2,hint:"Without break, C++ continues into the next case — called fall-through."},
        trace:[
    {line:4, explanation:"ReadLn(day) — user enters 3. day is now 3.", vars:{day:3}, output:null},
    {line:5, explanation:"CASE day OF — starts checking cases. Is day = 1? No. Is day = 2? No.", vars:{day:3}, output:null},
    {line:8, explanation:"3: — matches! Execute WriteLn('Southern - Capital: Livingstone').", vars:{day:3}, output:"Southern - Capital: Livingstone"},
    {line:9, explanation:"After the matching case executes, CASE statement ends. No other cases run.", vars:{day:3}, output:"Southern - Capital: Livingstone"}
  ],
        worked:{
  scenario:"A Zambian geography quiz program asks students to identify province capitals.",
  problem:"Use a CASE statement to print the capital city when the user enters a province number (1=Lusaka, 2=Copperbelt, 3=Southern).",
  steps:[
    {explain:"Read the province number from the user.", code:"VAR choice : Integer;\nBEGIN\n  ReadLn(choice);"},
    {explain:"Use CASE to match the number to its capital.", code:"CASE choice OF\n  1: WriteLn('Capital: Lusaka');\n  2: WriteLn('Capital: Ndola');\n  3: WriteLn('Capital: Livingstone');"},
    {explain:"Add a ELSE clause for invalid entries.", code:"ELSE WriteLn('Invalid province number.');\nEND;"}
  ],
  answer:"If user enters 2: prints 'Capital: Ndola'. If user enters 5: prints 'Invalid province number.'",
  answerCode:"PROGRAM ProvinceQuiz;\nVAR choice : Integer;\nBEGIN\n  ReadLn(choice);\n  CASE choice OF\n    1: WriteLn('Capital: Lusaka');\n    2: WriteLn('Capital: Ndola');\n    3: WriteLn('Capital: Livingstone');\n  ELSE\n    WriteLn('Invalid province number.');\n  END;\nEND.",
  insight:"CASE is cleaner than multiple IF...ELSE IF for fixed integer values. However, you cannot use CASE with Real or String variables — only ordinal types."
},
      },
      {
        id:"p11", title:"REPEAT...UNTIL Loop", form:3,
        lesson:`The REPEAT...UNTIL loop is Pascal's third loop type. Like WHILE, it can repeat an unknown number of times. But it has one crucial difference: it ALWAYS runs at least once.

Compare the three Pascal loops:
FOR: runs a fixed number of times you know in advance
WHILE: checks condition BEFORE running — may run zero times
REPEAT...UNTIL: checks condition AFTER running — always runs at least once

The structure:
REPEAT
  statements;
UNTIL condition;

REPEAT...UNTIL does NOT need BEGIN...END — the REPEAT and UNTIL keywords act as the brackets themselves.

Another key difference: the condition is an EXIT condition. The loop STOPS when the condition is TRUE. This is the OPPOSITE of WHILE which runs while the condition is TRUE.

This makes REPEAT...UNTIL perfect for:
PIN entry systems — you must ask at least once before you can check
Menu systems — you must show the menu at least once
Data validation — you must ask for input before checking if it is valid

The Airtel Money PIN example: you always need to ask for the PIN at least once. You cannot check if a PIN is correct before the user has entered anything.

In ECZ exams, expect questions asking you to trace the output of a REPEAT loop, or to explain whether WHILE or REPEAT is more appropriate for a given scenario.`,
        code:`PROGRAM PinValidator;\nVAR pin, attempts : Integer;\nBEGIN\n  attempts := 0;\n  REPEAT\n    Write('Enter your Airtel Money PIN: ');\n    ReadLn(pin);\n    attempts := attempts + 1;\n    IF pin <> 1234 THEN\n      WriteLn('Wrong PIN. Try again.');\n  UNTIL (pin = 1234) OR (attempts = 3);\n  IF pin = 1234 THEN\n    WriteLn('Access granted!')\n  ELSE\n    WriteLn('Account locked after 3 attempts.');\nEND.`,
        explanation:"REPEAT runs the body first, then checks the condition. It stops when pin=1234 OR attempts reach 3. This models a real PIN entry system like Airtel Money.",
        ecz:"REPEAT...UNTIL appears alongside WHILE. The key exam point: REPEAT always runs at least once. Expect to trace output or spot the difference between REPEAT and WHILE.",
        question:{text:"What is the key difference between REPEAT...UNTIL and WHILE...DO?",options:["REPEAT is faster","REPEAT always runs at least once; WHILE may run zero times","WHILE always runs at least once","They are identical"],answer:1,hint:"REPEAT checks the condition AFTER running the body. WHILE checks BEFORE."},
        q2:{text:"What does REPEAT x:=x+1; UNTIL x>3; produce if x starts at 1?",options:["x=1","x=3","x=4","Infinite loop"],answer:2,hint:"1→2→3→4. At x=4, condition x>3 is TRUE so the loop stops."},
        q3:{text:"REPEAT always runs at least once. WHILE may run zero times. Why?",options:["REPEAT is faster","REPEAT checks condition AFTER body; WHILE checks BEFORE","WHILE requires a counter","They are identical"],answer:1,hint:"REPEAT checks AFTER executing. So the body always runs at least once before checking."},
        trace:[
    {line:2, explanation:"x := 1 — initialise x before the REPEAT loop.", vars:{x:1}, output:null},
    {line:3, explanation:"REPEAT — enter loop body immediately. No condition check yet.", vars:{x:1}, output:null},
    {line:4, explanation:"WriteLn(x) — prints 1.", vars:{x:1}, output:"1"},
    {line:5, explanation:"x := x + 1 → x = 2.", vars:{x:2}, output:"1"},
    {line:6, explanation:"UNTIL x > 3 — check: 2 > 3? FALSE. Loop again.", vars:{x:2}, output:"1"},
    {line:4, explanation:"WriteLn(2). x := 3. Check: 3 > 3? FALSE. Loop again.", vars:{x:3}, output:"1\n2"},
    {line:4, explanation:"WriteLn(3). x := 4. Check: 4 > 3? TRUE. Exit loop.", vars:{x:4}, output:"1\n2\n3"}
  ],
        worked:{
  scenario:"A program counts down to the start of a Chipolopolo football match.",
  problem:"Use REPEAT...UNTIL to count down from 5 to 1 and then print 'Kick off!'",
  steps:[
    {explain:"Initialise the countdown variable.", code:"VAR n : Integer;\nBEGIN\n  n := 5;"},
    {explain:"REPEAT always runs the body at least once before checking the condition.", code:"REPEAT\n  WriteLn(n, '...');\n  n := n - 1;\nUNTIL n = 0;"},
    {explain:"After the loop ends, print the final message.", code:"WriteLn('Kick off!');"}
  ],
  answer:"Prints: 5... 4... 3... 2... 1... Kick off!",
  answerCode:"PROGRAM Countdown;\nVAR n : Integer;\nBEGIN\n  n := 5;\n  REPEAT\n    WriteLn(n, '...');\n    n := n - 1;\n  UNTIL n = 0;\n  WriteLn('Kick off!');\nEND.",
  insight:"REPEAT...UNTIL exits when the condition is TRUE (opposite of WHILE which exits when FALSE). UNTIL n=0 means 'stop when n reaches 0'."
},
      },
      {
        id:"p12", title:"Nested Loops", form:3,
        lesson:`A nested loop is a loop placed inside another loop. The inner loop runs completely from beginning to end EVERY TIME the outer loop completes one step.

This creates a multiplication effect:
Outer loop runs n times.
For EACH outer iteration, the inner loop runs m times.
Total inner executions = n times m.

Nested loops are used to create 2D structures like grids, tables, and multiplication charts.

Visualising execution step by step:
Outer i = 1: Inner j runs 1, 2, 3 — prints three things on row 1
Outer i = 2: Inner j runs 1, 2, 3 — prints three things on row 2
Outer i = 3: Inner j runs 1, 2, 3 — prints three things on row 3

An important technique: Write(value) stays on the same line. WriteLn moves to the next line. In a grid, use Write inside the inner loop to stay on the same row, then WriteLn after the inner loop ends to move to a new row.

Common nested loop applications:
Multiplication tables — the most common ECZ question
Printing star patterns like pyramids and rectangles
Processing 2D arrays with rows and columns
Comparing every pair of elements in an array

Performance note: a nested loop with outer 1-100 and inner 1-100 runs 10,000 iterations. This is why nested loops can be slow on large datasets.`,
        code:`PROGRAM TimeTable;\nVAR row, col, product : Integer;\nBEGIN\n  WriteLn('=== Multiplication Table ===');\n  FOR row := 1 TO 5 DO\n  BEGIN\n    FOR col := 1 TO 5 DO\n    BEGIN\n      product := row * col;\n      Write(product:4);\n    END;\n    WriteLn; { new line after each row }\n  END;\nEND.`,
        explanation:"The outer loop controls rows (1 to 5). The inner loop controls columns (1 to 5). For row=1 the inner loop runs 5 times. Write without WriteLn stays on the same line.",
        ecz:"Nested loops are frequently traced in exams. Given outer 1-3 and inner 1-3, how many times does the inner body run? (Answer: 9). Multiplication tables are a common question.",
        question:{text:"When row=3 and col=4 in the nested loop above, what value is printed?",options:["7","12","34","9"],answer:1,hint:"product := row * col → 3 × 4 = ?"},
        q2:{text:"In a nested loop with outer 1 TO 3 and inner 1 TO 4, how many total iterations occur?",options:["7","12","6","16"],answer:1,hint:"Total = outer count × inner count = 3 × 4 = 12."},
        q3:{text:"In a nested loop, which counter changes fastest?",options:["Outer counter","Inner counter","Both equally","Depends on values"],answer:1,hint:"The inner loop completes all its iterations for each single step of the outer loop."},
        trace:[
    {line:4, explanation:"Outer FOR row := 1 TO 3 — row starts at 1.", vars:{row:1, col:"?", product:"?"}, output:null},
    {line:6, explanation:"Inner FOR col := 1 TO 4 — col starts at 1. product := 1 * 1 = 1. Print 1.", vars:{row:1, col:1, product:1}, output:"1"},
    {line:6, explanation:"col = 2: product = 2. col = 3: product = 3. col = 4: product = 4. Inner loop done.", vars:{row:1, col:4, product:4}, output:"1  2  3  4"},
    {line:4, explanation:"row = 2. Inner loop runs again: products 2,4,6,8.", vars:{row:2}, output:"1  2  3  4\n2  4  6  8"},
    {line:4, explanation:"row = 3. Inner loop runs: products 3,6,9,12. Both loops complete.", vars:{row:3}, output:"1  2  3  4\n2  4  6  8\n3  6  9  12"}
  ],
        worked:{
  scenario:"A teacher wants a multiplication table grid for a classroom display.",
  problem:"Use nested FOR loops to print a 3×3 multiplication table (rows 1–3, columns 1–3).",
  steps:[
    {explain:"The outer loop controls the row (first factor).", code:"FOR row := 1 TO 3 DO"},
    {explain:"The inner loop runs completely for each row value, controlling the column.", code:"  FOR col := 1 TO 3 DO"},
    {explain:"Print each product. Use Write (not WriteLn) to stay on the same line, then WriteLn at end of each row.", code:"    Write(row * col, '  ');\n  WriteLn;"}
  ],
  answer:"Prints a 3×3 grid: 1 2 3 / 2 4 6 / 3 6 9",
  answerCode:"PROGRAM MultiTable;\nVAR row, col : Integer;\nBEGIN\n  FOR row := 1 TO 3 DO\n  BEGIN\n    FOR col := 1 TO 3 DO\n      Write(row * col, '  ');\n    WriteLn;\n  END;\nEND.",
  insight:"Write stays on the same line; WriteLn moves to the next line. The inner loop completes all 3 columns before the outer loop increments the row."
},
      },
      {
        id:"p13", title:"String Functions", form:4,
        lesson:`Strings in Pascal are sequences of characters. Pascal provides built-in functions to manipulate string data — essential for processing names, addresses, and text input from users.

The key string functions every student must know:

LENGTH(s) returns the number of characters in string s including spaces.
Length('Chanda Mutale') returns 13.

POS(sub, s) finds the position of substring sub inside string s. Returns 0 if not found. Position numbering starts at 1.
Pos(' ', 'Chanda Mutale') returns 7 because the space is at position 7.

COPY(s, start, length) extracts a portion of s. It starts at position start and takes length characters.
Copy('Livingstone', 1, 6) returns 'Living'.
Copy('Livingstone', 7, 4) returns 'ston'.

CONCAT(s1, s2) joins two strings. You can also use the + operator.
Concat('Zam', 'bia') returns 'Zambia'.

UPCASE(c) converts a single CHARACTER to uppercase. This works one character at a time, not on a whole string.

A very common exam question: given 'Chanda Mutale', extract just the first name. The solution: find the space with Pos, then use Copy from position 1 for (spacePos minus 1) characters.

String indices in Pascal start at 1, not 0 — this differs from Python and C++.`,
        code:`PROGRAM StudentNameTool;\nVAR\n  fullName, firstName : String;\n  spacePos, nameLen   : Integer;\nBEGIN\n  fullName := 'Chanda Mutale';\n  nameLen  := Length(fullName);\n  spacePos := Pos(' ', fullName);\n  firstName := Copy(fullName, 1, spacePos - 1);\n  WriteLn('Full name:  ', fullName);\n  WriteLn('Length:     ', nameLen);\n  WriteLn('First name: ', firstName);\n  WriteLn('Greeting:   Hello, ', firstName, '!');\nEND.`,
        explanation:"Length counts all characters including spaces. Pos finds the space position. Copy extracts from position 1 for (spacePos-1) characters to get just the first name.",
        ecz:"String functions are tested with Copy, Pos, and Length. Common question: extract a first name from a full name using Pos to find the space and Copy to extract.",
        question:{text:"What does Copy('Livingstone', 1, 6) return?",options:["Living","Livingst","stone","ngston"],answer:0,hint:"Copy(string, start, length) — start at 1, take 6 characters."},
        q2:{text:"What does Pos(' ', 'Chanda Mutale') return?",options:["0","7","8","1"],answer:1,hint:"Pos finds the first space. 'Chanda' is 6 chars, space is at position 7."},
        q3:{text:"What does Copy('Copperbelt', 1, 6) return?",options:["'Copper'","'Copperb'","'belt'","'Copperbelt'"],answer:0,hint:"Copy(string, start, length) — start at 1, take 6 characters: C-o-p-p-e-r."},
        trace:[
    {line:2, explanation:"s := 'Livingstone' — assigns the string.", vars:{s:"Livingstone"}, output:null},
    {line:3, explanation:"result := Copy(s, 1, 6) — Copy takes 6 characters starting at position 1 (1-based in Pascal).", vars:{s:"Livingstone", result:"Living"}, output:null},
    {line:4, explanation:"WriteLn(result) — prints the extracted substring.", vars:{s:"Livingstone", result:"Living"}, output:"Living"},
    {line:5, explanation:"pos := Pos('stone', s) — finds where 'stone' starts in 'Livingstone'. L=1,i=2,v=3,i=4,n=5,g=6,s=7.", vars:{s:"Livingstone", pos:7}, output:"Living"},
    {line:6, explanation:"WriteLn(pos) — prints position 7.", vars:{pos:7}, output:"Living\n7"},
    {line:7, explanation:"WriteLn(Length(s)) — Length('Livingstone') = 10 characters.", vars:{}, output:"Living\n7\n10"}
  ],
        worked:{
  scenario:"A name validation program checks whether a Zambian student's full name is correctly formatted.",
  problem:"Given the string 'Chanda Mutale', extract the first name using Copy, find where the space is using Pos, and print the name length.",
  steps:[
    {explain:"Assign the full name to a string variable.", code:"VAR full, first : String;\n    spacePos, len : Integer;\nBEGIN\n  full := 'Chanda Mutale';"},
    {explain:"Use Pos to find the position of the space character.", code:"spacePos := Pos(' ', full);\n{ spacePos = 7 }"},
    {explain:"Use Copy to extract the first name — start at 1, take (spacePos-1) characters.", code:"first := Copy(full, 1, spacePos - 1);\n{ first = 'Chanda' }"},
    {explain:"Use Length to get the full name length.", code:"len := Length(full);\nWriteLn(first, ' (', len, ' chars total)');"}
  ],
  answer:"Prints: Chanda (13 chars total)",
  answerCode:"PROGRAM NameCheck;\nVAR full, first : String; spacePos, len : Integer;\nBEGIN\n  full := 'Chanda Mutale';\n  spacePos := Pos(' ', full);\n  first := Copy(full, 1, spacePos - 1);\n  len := Length(full);\n  WriteLn(first, ' (', len, ' chars total)');\nEND.",
  insight:"Copy(s, 1, spacePos-1) takes characters from position 1 up to (but not including) the space. If spacePos=7, Copy takes 6 characters: C-h-a-n-d-a."
},
      },
      {
        id:"p14", title:"DOWNTO & STEP in Loops", form:3,
        lesson:`Pascal's FOR loop can count downwards as well as upwards. Instead of TO, you use DOWNTO to make the counter decrease by 1 on each step.

Standard counting up: FOR i := 1 TO 10 DO
Counting down: FOR i := 10 DOWNTO 1 DO

DOWNTO is useful for countdown programs, displaying results in reverse order, and certain sorting techniques.

The loop variable still changes by exactly 1 step — you cannot specify a custom step size directly in Pascal's FOR loop. If you need to count in steps other than 1, you have two options:
Option 1: Use a WHILE loop and manually update the counter yourself.
Option 2: Use a FOR loop counting 1, 2, 3 and MULTIPLY inside the loop.

To print even numbers 2, 4, 6, 8, 10:
FOR i := 1 TO 5 DO
  WriteLn(i * 2);

This prints i times 2 on each iteration giving 2, 4, 6, 8, 10.
To print multiples of 5: WriteLn(i * 5).
To print odd numbers: WriteLn(i * 2 - 1).

DOWNTO is commonly used in countdown timers, reverse printing of arrays, and bubble sort implementations.

In ECZ exams, you may be asked to trace the output of a DOWNTO loop or to write a loop that produces a specific descending sequence.`,
        code:`PROGRAM Countdown;\nVAR i : Integer;\nBEGIN\n  WriteLn('ZESCO scheduled maintenance countdown:');\n  FOR i := 5 DOWNTO 1 DO\n  BEGIN\n    WriteLn(i, ' hours remaining...');\n  END;\n  WriteLn('Power restored! Welcome back, Lusaka.');\n  WriteLn;\n  WriteLn('Even numbers 2 to 10:');\n  FOR i := 1 TO 5 DO\n    WriteLn(i * 2);\nEND.`,
        explanation:"DOWNTO counts backwards — i starts at 5 and decreases to 1. To print even numbers, we multiply the counter by 2 each iteration: 1×2=2, 2×2=4, etc.",
        question:{text:"What is the first number printed by: FOR i := 10 DOWNTO 7 DO WriteLn(i)?",options:["7","8","10","1"],answer:2,hint:"DOWNTO starts at the higher number and counts down."},
        q2:{text:"FOR i := 5 DOWNTO 3 DO WriteLn(i); — what three values print?",options:["3,4,5","5,4,3","1,2,3","3,2,1"],answer:1,hint:"DOWNTO counts from higher to lower: 5, then 4, then 3."},
        q3:{text:"To print even numbers 2,4,6,8,10 using a FOR loop with no DOWNTO, what is inside the body?",options:["WriteLn(i)","WriteLn(i*2)","WriteLn(i+2)","WriteLn(i-1)"],answer:1,hint:"Loop FOR i:=1 TO 5, multiply by 2 each iteration: 1×2=2, 2×2=4, etc."},
        trace:[
    {line:2, explanation:"FOR i := 10 DOWNTO 7 — starts at 10, will count DOWN to 7.", vars:{i:10}, output:null},
    {line:3, explanation:"WriteLn(i) — prints 10.", vars:{i:10}, output:"10"},
    {line:2, explanation:"DOWNTO: i decrements to 9. Condition 9 >= 7 TRUE.", vars:{i:9}, output:"10"},
    {line:3, explanation:"WriteLn(9).", vars:{i:9}, output:"10\n9"},
    {line:2, explanation:"i = 8. Print 8.", vars:{i:8}, output:"10\n9\n8"},
    {line:2, explanation:"i = 7. Print 7. Then i would be 6 < 7 — loop ends.", vars:{i:7}, output:"10\n9\n8\n7"}
  ],
        worked:{
  scenario:"A school timetable program prints periods in reverse order for end-of-day announcements.",
  problem:"Use DOWNTO to print 'Period 5 ending' down to 'Period 1 ending'.",
  steps:[
    {explain:"Declare the counter variable.", code:"VAR period : Integer;"},
    {explain:"Use FOR...DOWNTO to count from 5 down to 1.", code:"FOR period := 5 DOWNTO 1 DO"},
    {explain:"Print the announcement for each period.", code:"  WriteLn('Period ', period, ' ending');"}
  ],
  answer:"Prints: Period 5 ending / Period 4 ending / Period 3 ending / Period 2 ending / Period 1 ending",
  answerCode:"PROGRAM Timetable;\nVAR period : Integer;\nBEGIN\n  FOR period := 5 DOWNTO 1 DO\n    WriteLn('Period ', period, ' ending');\nEND.",
  insight:"DOWNTO decrements the counter by 1 each iteration automatically, just as TO increments it. You cannot specify a step size other than 1 in Pascal's FOR loop."
},
      },
      {
        id:"p15", title:"Nested Procedures", form:4,
        lesson:`In Pascal, procedures and functions can be declared inside other procedures. The inner nested procedure is only visible within the outer one — this is the concept of SCOPE.

Scope determines which parts of your program can see and use a variable or procedure.

LOCAL VARIABLES are declared inside a procedure. They only exist while that procedure is running. Each call creates a fresh copy. When the procedure ends, local variables disappear completely.

GLOBAL VARIABLES are declared in the main VAR section before any procedures. They are visible everywhere — in the main body and inside any procedure.

What happens when local and global variables share the same name? The LOCAL variable takes priority inside its procedure — it shadows the global one. This can cause confusing bugs if you are not aware of it.

Why scope matters:
It prevents procedures from accidentally interfering with each other's data.
It makes programs safer and easier to reason about.
It allows the same variable name to be used in different procedures without conflict.

A practical example: a school attendance system might have a global variable totalStudents visible everywhere, and a local variable count inside each class-processing procedure that only exists during that call.

Good practice: keep variables as local as possible. Only make something global if multiple procedures genuinely need to share it.`,
        code:`PROGRAM ScopeDemo;\nVAR globalScore : Integer;\n\nPROCEDURE ProcessStudent(name : String);\nVAR localScore : Integer;  { only visible here }\nBEGIN\n  localScore := 75;\n  globalScore := globalScore + localScore;\n  WriteLn(name, ' processed. Local: ', localScore);\nEND;\n\nBEGIN\n  globalScore := 0;\n  ProcessStudent('Chanda Mutale');\n  ProcessStudent('Bupe Zulu');\n  WriteLn('Total score: ', globalScore);\n  { WriteLn(localScore); <- this would FAIL }\nEND.`,
        explanation:"globalScore is accessible everywhere. localScore only exists inside ProcessStudent — trying to use it in the main body would cause an error. Each call creates a fresh localScore.",
        question:{text:"What is the value of globalScore printed at the end?",options:["75","100","150","0"],answer:2,hint:"Each call adds 75 to globalScore: 0 + 75 + 75 = ?"},
        q2:{text:"A variable declared inside a procedure is called what type?",options:["Global variable","Local variable","Static variable","Public variable"],answer:1,hint:"Variables declared inside a procedure are local — only visible within that procedure."},
        q3:{text:"If a local and global variable share the same name, which one is used inside the procedure?",options:["Global — always takes priority","Local — takes priority inside its procedure","Compile error","Depends on declaration order"],answer:1,hint:"Local variables shadow global ones with the same name inside their procedure."},
        trace:[
    {line:1, explanation:"globalScore := 0 — global variable initialised at program start.", vars:{globalScore:0}, output:null},
    {line:5, explanation:"AddScore(75) called — jumps into the procedure. n=75.", vars:{globalScore:0, n:75}, output:null},
    {line:6, explanation:"globalScore := globalScore + n → 0 + 75 = 75. Modifies the global variable.", vars:{globalScore:75, n:75}, output:null},
    {line:8, explanation:"Procedure returns. Back in main. AddScore(75) called again.", vars:{globalScore:75}, output:null},
    {line:6, explanation:"globalScore := 75 + 75 = 150.", vars:{globalScore:150, n:75}, output:null},
    {line:10, explanation:"WriteLn(globalScore) — prints 150.", vars:{globalScore:150}, output:"150"}
  ],
        worked:{
  scenario:"A banking program tracks a shared account balance that multiple procedures update.",
  problem:"Write two procedures: Deposit(amount) and Withdraw(amount) that both modify a global balance. Start with K1000, deposit K500, withdraw K200.",
  steps:[
    {explain:"Declare a global variable before any procedures.", code:"VAR balance : Real;"},
    {explain:"Write a Deposit procedure that adds to the global balance.", code:"PROCEDURE Deposit(amount : Real);\nBEGIN\n  balance := balance + amount;\nEND;"},
    {explain:"Write a Withdraw procedure that subtracts from the global balance.", code:"PROCEDURE Withdraw(amount : Real);\nBEGIN\n  balance := balance - amount;\nEND;"},
    {explain:"In the main block, initialise and call both procedures.", code:"BEGIN\n  balance := 1000;\n  Deposit(500);\n  Withdraw(200);\n  WriteLn('Balance: K', balance:0:2);\nEND."}
  ],
  answer:"1000 + 500 - 200 = K1300.00",
  answerCode:"PROGRAM Banking;\nVAR balance : Real;\nPROCEDURE Deposit(amount:Real);\nBEGIN balance := balance + amount; END;\nPROCEDURE Withdraw(amount:Real);\nBEGIN balance := balance - amount; END;\nBEGIN\n  balance := 1000;\n  Deposit(500); Withdraw(200);\n  WriteLn('Balance: K', balance:0:2);\nEND.",
  insight:"balance is a global variable — both procedures can see and modify it. Local variables declared inside a procedure are only visible within that procedure."
},
      },
      {
        id:"p16", title:"Text File Handling", form:4,
        lesson:`Files allow programs to store data permanently. Without files, everything disappears when the program stops running. With files, you can save student results, market records, or any data to disk and read it back later.

Pascal uses TEXT file type for reading and writing plain text files. The process always follows these five steps:

Step 1 DECLARE: VAR f : TEXT;
This creates a file variable — a handle you use to work with the file.

Step 2 ASSIGN: Assign(f, 'filename.txt');
This links your file variable to an actual file on disk. The file does not open yet.

Step 3 OPEN: Use Rewrite(f) to create or overwrite, Reset(f) to open for reading, or Append(f) to add without erasing.

Step 4 USE: WriteLn(f, data) to write. ReadLn(f, variable) to read. The file variable is the first argument.

Step 5 CLOSE: Close(f);
This is essential. Until you close a file, data may not be fully saved to disk. Always Close after you finish.

Reading files uses WHILE NOT EOF(f):
WHILE NOT EOF(f) DO
BEGIN
  ReadLn(f, line);
  { process line }
END;

EOF stands for End Of File. It returns TRUE when there is no more data to read.`,
        code:`PROGRAM ResultsFile;\nVAR\n  f      : TEXT;\n  name   : String;\n  score  : Integer;\nBEGIN\n  { Write results }\n  Assign(f, 'results.txt');\n  Rewrite(f);\n  WriteLn(f, 'Mwamba Phiri,88');\n  WriteLn(f, 'Chilufya Besa,74');\n  WriteLn(f, 'Thandiwe Zulu,91');\n  Close(f);\n\n  { Read back }\n  Reset(f);\n  WriteLn('=== Exam Results ===');\n  WHILE NOT EOF(f) DO\n  BEGIN\n    ReadLn(f, name);\n    WriteLn('  ', name);\n  END;\n  Close(f);\nEND.`,
        explanation:"Assign links the variable to a filename. Rewrite creates/overwrites the file. Reset opens for reading. EOF(f) returns TRUE when the end of file is reached. Always Close when done.",
        ecz:"File handling is a Form 4 staple. Know: Assign, Rewrite (write), Reset (read), Close, and the WHILE NOT EOF loop. Expect to write a program that saves and reads back student results.",
        question:{text:"Which procedure opens a Pascal file for reading (not writing)?",options:["Rewrite","Assign","Reset","Open"],answer:2,hint:"Reset sets the file position back to the start for reading."},
        q2:{text:"What does Rewrite(f) do to an existing file?",options:["Opens for reading","Appends to end","Creates/overwrites it","Reads first line"],answer:2,hint:"Rewrite creates a new file or completely overwrites an existing one."},
        q3:{text:"You want to add records to an existing Pascal file without erasing it. Which procedure do you use?",options:["Rewrite","Reset","Append","Open"],answer:2,hint:"Append opens an existing file and positions the write pointer at the end."},
        trace:[
    {line:3, explanation:"Assign(f, 'results.txt') — links the file variable f to the file name on disk.", vars:{f:"results.txt (not open)"}, output:null},
    {line:4, explanation:"Rewrite(f) — creates (or overwrites) the file and opens it for writing.", vars:{f:"results.txt (open, empty)"}, output:null},
    {line:5, explanation:"WriteLn(f, 'Chanda: Pass') — writes the first line to the file.", vars:{file_content:"Chanda: Pass"}, output:null},
    {line:6, explanation:"WriteLn(f, 'Mwamba: Fail') — writes the second line.", vars:{file_content:"Chanda: Pass\\nMwamba: Fail"}, output:null},
    {line:7, explanation:"Close(f) — closes the file. It is now saved on disk.", vars:{f:"results.txt (closed)"}, output:null},
    {line:8, explanation:"Reset(f) — reopens the file for reading from the beginning.", vars:{f:"results.txt (open for reading)"}, output:null},
    {line:9, explanation:"ReadLn(f, line) reads first line → 'Chanda: Pass'. WriteLn prints it.", vars:{line:"Chanda: Pass"}, output:"Chanda: Pass"},
    {line:9, explanation:"ReadLn reads second line → 'Mwamba: Fail'. WriteLn prints it. EOF reached.", vars:{line:"Mwamba: Fail"}, output:"Chanda: Pass\nMwamba: Fail"}
  ],
        worked:{
  scenario:"A school needs to save student names to a file and read them back.",
  problem:"Write a program that saves three student names to 'students.txt', then reads and prints them back.",
  steps:[
    {explain:"Declare file and string variables. Use Assign to link the file variable to a filename.", code:"VAR f : TextFile;\n    name : String;\nBEGIN\n  Assign(f, 'students.txt');"},
    {explain:"Use Rewrite to create/open the file for writing, write three names, then Close.", code:"Rewrite(f);\nWriteLn(f, 'Chanda Mutale');\nWriteLn(f, 'Bupe Zulu');\nWriteLn(f, 'Mwamba Phiri');\nClose(f);"},
    {explain:"Use Reset to open for reading. Loop until EOF, reading and printing each line.", code:"Reset(f);\nWHILE NOT EOF(f) DO\nBEGIN\n  ReadLn(f, name);\n  WriteLn(name);\nEND;\nClose(f);"}
  ],
  answer:"Prints: Chanda Mutale / Bupe Zulu / Mwamba Phiri",
  answerCode:"PROGRAM FileDemo;\nVAR f:TextFile; name:String;\nBEGIN\n  Assign(f,'students.txt');\n  Rewrite(f);\n  WriteLn(f,'Chanda Mutale'); WriteLn(f,'Bupe Zulu'); WriteLn(f,'Mwamba Phiri');\n  Close(f);\n  Reset(f);\n  WHILE NOT EOF(f) DO BEGIN ReadLn(f,name); WriteLn(name); END;\n  Close(f);\nEND.",
  insight:"Always Close(f) after writing before you can Reset and read. Rewrite creates or overwrites. Append adds to an existing file without deleting its contents."
},
      },
      {
        id:"p17", title:"Searching Arrays", form:4,
        lesson:`Searching means looking through data to find a specific item. LINEAR SEARCH is the simplest algorithm — it checks each element one by one from beginning to end.

How linear search works:
1. Start at the first element (index 1 in Pascal)
2. Compare the current element to the target value
3. If they match — found! Record the position
4. If not — move to the next element
5. Continue until found or all elements checked

The FOUND FLAG technique is essential and always appears in ECZ exam answers. Before the loop, set found := FALSE. Inside the loop when the target is found, set found := TRUE. After the loop, check IF NOT found to handle the case where nothing matched.

Performance analysis:
Best case: target is the first element — only 1 comparison needed
Average case: target is somewhere in the middle — about n divided by 2 comparisons
Worst case: target is last OR not present at all — n comparisons needed

Linear search works on ANY array — sorted or unsorted. It does not require the data to be in any particular order.

In Zambian ECZ exams, you will be asked to:
1. Write a linear search program for a given array
2. State the worst-case number of comparisons for an array of n elements
3. Explain the purpose of the found flag variable
4. Trace the search step by step for a given target value`,
        code:`PROGRAM LinearSearch;\nCONST SIZE = 6;\nVAR\n  marks : ARRAY[1..SIZE] OF Integer;\n  target, i : Integer;\n  found : Boolean;\nBEGIN\n  marks[1]:=78; marks[2]:=91; marks[3]:=55;\n  marks[4]:=63; marks[5]:=88; marks[6]:=47;\n\n  target := 63;\n  found  := FALSE;\n  FOR i := 1 TO SIZE DO\n    IF marks[i] = target THEN\n    BEGIN\n      WriteLn('Found ', target, ' at position ', i);\n      found := TRUE;\n    END;\n  IF NOT found THEN\n    WriteLn(target, ' not found in array.');\nEND.`,
        explanation:"The loop checks every element. When marks[i] = target, it prints the position and sets found := TRUE. After the loop, if found is still FALSE, the value was not in the array.",
        ecz:"Linear search appears every year. Know the found-flag pattern: found := FALSE before the loop, found := TRUE inside when target matches. Always explain worst-case: n comparisons.",
        question:{text:"At which position (index) will the search find the value 63?",options:["3","4","5","6"],answer:1,hint:"marks[1]=78, marks[2]=91, marks[3]=55, marks[4]=63..."},
        q2:{text:"What is the worst case for linear search on 100 elements?",options:["1 comparison","50 comparisons","100 comparisons","log(100) comparisons"],answer:2,hint:"Worst case: target is last or not present — must check all 100 elements."},
        q3:{text:"What boolean variable technique helps track whether a linear search found its target?",options:["A counter variable","A found flag set to FALSE then TRUE when found","A second loop","Comparing to zero"],answer:1,hint:"Declare found:=FALSE before the loop. Set found:=TRUE inside when the target is matched."},
        trace:[
    {line:7, explanation:"target := 63 — the value we are searching for. found := FALSE.", vars:{target:63, found:false, i:"?"}, output:null},
    {line:9, explanation:"FOR i := 1 TO 6 — i=1. marks[1]=78. Is 78 = 63? FALSE.", vars:{i:1, marks_i:78, found:false}, output:null},
    {line:10, explanation:"i=2: marks[2]=91. 91 = 63? FALSE. i=3: marks[3]=55. FALSE.", vars:{i:3, marks_i:55, found:false}, output:null},
    {line:10, explanation:"i=4: marks[4]=63. 63 = 63? TRUE! Enter the IF block.", vars:{i:4, marks_i:63, found:false}, output:null},
    {line:11, explanation:"WriteLn('Found 63 at position 4') — prints the result.", vars:{i:4, found:false}, output:"Found 63 at position 4"},
    {line:12, explanation:"found := TRUE — flag is set.", vars:{i:4, found:true}, output:"Found 63 at position 4"},
    {line:14, explanation:"Loop continues: i=5,6 but found is already TRUE. Loop ends. IF NOT found is FALSE — no 'not found' message.", vars:{i:6, found:true}, output:"Found 63 at position 4"}
  ],
        worked:{
  scenario:"A teacher stores class scores and wants to know if a student's score exists in the records.",
  problem:"Search an array [88, 72, 45, 91, 63] for the value 45. Print its position or 'Not found'.",
  steps:[
    {explain:"Declare the array, a target value, a loop counter, and a found flag.", code:"VAR scores : ARRAY[1..5] OF Integer;\n    target, i : Integer; found : Boolean;"},
    {explain:"Initialise the array and set target and found.", code:"scores[1]:=88; scores[2]:=72; scores[3]:=45;\nscores[4]:=91; scores[5]:=63;\ntarget := 45; found := FALSE;"},
    {explain:"Loop through the array. When found, print position and set flag.", code:"FOR i := 1 TO 5 DO\n  IF scores[i] = target THEN\n  BEGIN\n    WriteLn('Found at position ', i);\n    found := TRUE;\n  END;"},
    {explain:"After the loop, check if it was ever found.", code:"IF NOT found THEN WriteLn('Not found');"}
  ],
  answer:"Prints: Found at position 3",
  answerCode:"PROGRAM LinearSearch;\nVAR scores:ARRAY[1..5] OF Integer; target,i:Integer; found:Boolean;\nBEGIN\n  scores[1]:=88;scores[2]:=72;scores[3]:=45;scores[4]:=91;scores[5]:=63;\n  target:=45; found:=FALSE;\n  FOR i:=1 TO 5 DO\n    IF scores[i]=target THEN BEGIN WriteLn('Found at position ',i); found:=TRUE; END;\n  IF NOT found THEN WriteLn('Not found');\nEND.",
  insight:"A linear search checks every element in order. The found flag prevents printing 'Not found' when the value was actually found. Worst case: check all n elements."
},
      },
    ],
  },

  "C++": {
    color: "#2e86de", accent: "#dceeff", icon: "🔵",
    topics: [
      {
        id:"c1", title:"Introduction to C++", form:2,
        lesson:`C++ is a powerful, professional programming language used to build operating systems, games, web browsers, and financial systems. It was created by Bjarne Stroustrup in the early 1980s as an extension of the C language.

Every C++ program must have exactly one main() function — this is where execution begins. When you run a C++ program, the computer goes straight to main() and starts executing from there.

Understanding the essential components:

#include <iostream> is a preprocessor directive that includes the iostream library. Without it, cout and cin are undefined and your program will not compile.

using namespace std; lets you write cout instead of std::cout every time. All standard C++ functions live in the std namespace.

int main() returns an integer. return 0 means the program ran successfully. Any non-zero value signals an error.

cout sends data to the screen. The << operator pushes data into the output stream. endl ends the line and flushes the buffer so output appears immediately.

Zambia's growing technology sector increasingly requires C++ developers for companies like Airtel, MTN, and various fintech startups in Lusaka's tech hubs.`,
        code:`#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << "Welcome to Kabwe Technical!" << endl;\n    cout << "C++ is powerful." << endl;\n    return 0;\n}`,
        explanation:"#include <iostream> gives us cout. cout << prints text. endl moves to a new line. main() returns 0 on success.",
        question:{text:"Lombe is writing a C++ program at his school in Ndola. Which line correctly outputs 'Zambia is beautiful'?",options:['print("Zambia is beautiful");','WriteLn("Zambia is beautiful");','cout << "Zambia is beautiful" << endl;','Console.WriteLine("Zambia is beautiful");'],answer:2,hint:"C++ uses cout with << to output text."},
        q2:{text:"What does 'using namespace std;' do?",options:["Imports all variables","Lets you write cout instead of std::cout","Makes the program faster","Declares the main function"],answer:1,hint:"It means you can use standard names directly without the std:: prefix."},
        q3:{text:"What value should main() return to signal successful completion?",options:["1","-1","0","NULL"],answer:2,hint:"return 0 is the convention for successful program completion in C++."},
        trace:[
    {line:1, explanation:"#include <iostream> — loads the iostream library so we can use cout and cin. This runs before the program starts.", vars:{}, output:null},
    {line:2, explanation:"using namespace std; — allows cout instead of std::cout throughout the program.", vars:{}, output:null},
    {line:4, explanation:"int main() { — program execution begins here.", vars:{}, output:null},
    {line:5, explanation:"cout << 'Welcome to Kabwe Technical!' << endl; — outputs the first line. endl moves to the next line.", vars:{}, output:"Welcome to Kabwe Technical!"},
    {line:6, explanation:"cout << 'C++ is powerful.' << endl; — outputs the second line.", vars:{}, output:"Welcome to Kabwe Technical!\nC++ is powerful."},
    {line:7, explanation:"return 0; — signals the OS that the program finished successfully. main() exits.", vars:{}, output:"Welcome to Kabwe Technical!\nC++ is powerful."}
  ],
        worked:{
  scenario:"A student at Kabwe Technical is writing their first C++ program for a computer science assignment.",
  problem:"Write a C++ program that prints 'Zambia: Land of the Victoria Falls' and 'C++ Programming — Form 3' on separate lines.",
  steps:[
    {explain:"Include the iostream library for cout and add the namespace shortcut.", code:"#include <iostream>\nusing namespace std;"},
    {explain:"Define the main function — this is where execution starts.", code:"int main() {"},
    {explain:"Use cout with << to output each line. endl moves to the next line.", code:"    cout << \"Zambia: Land of the Victoria Falls\" << endl;\n    cout << \"C++ Programming — Form 3\" << endl;"},
    {explain:"Return 0 to signal successful completion.", code:"    return 0;\n}"}
  ],
  answer:"Outputs two lines exactly as specified. return 0 signals the OS that the program ran successfully.",
  answerCode:"#include <iostream>\nusing namespace std;\nint main() {\n    cout << \"Zambia: Land of the Victoria Falls\" << endl;\n    cout << \"C++ Programming — Form 3\" << endl;\n    return 0;\n}",
  insight:"Without #include <iostream>, cout is undefined. Without using namespace std, you must write std::cout. Both are required for basic output in C++."
},
      },
      {
        id:"c2", title:"Variables & User Input", form:2,
        lesson:`In C++, every variable must be declared with a data type before it can be used. The data type tells the compiler how much memory to reserve and what operations are allowed.

The fundamental C++ data types:
int stores whole numbers. Range is approximately -2 billion to +2 billion. Use for ages, counts, scores, and quantities.
double stores decimal numbers with high precision. Use for prices in Kwacha, percentages, and calculations requiring decimal places.
string stores text of any length. Requires #include <string>. Use for names, addresses, and sentences.
bool stores only true or false. Use for on/off switches, pass/fail flags, and yes/no answers.
char stores a single character. Use for menu choices and individual letters.

Getting input from the user:
cin >> variable reads input from the keyboard. The >> operator extracts data from the input stream and stores it in the variable.

Important limitation: cin >> stops reading at whitespace. If a user types Chanda Mutale, cin >> name only stores Chanda. To read a full line including spaces, use getline(cin, name) instead.

Always initialise variables before use. int total = 0; is safer than just int total; because uninitialised variables contain whatever random data is in memory at that moment.`,
        code:`#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string name;\n    int age;\n    cout << "Enter name: ";\n    cin >> name;\n    cout << "Enter age: ";\n    cin >> age;\n    cout << "Hello " << name\n         << ", aged " << age << endl;\n    return 0;\n}`,
        explanation:"cin >> reads user input. #include <string> is needed for the string type. Variables must be declared before use.",
        question:{text:"Thandiwe's program stores the number of chickens at her farm in Chipata. Which declaration is correct?",options:["double chickens;","string chickens;","int chickens;","bool chickens;"],answer:2,hint:"int stores whole numbers."},
        q2:{text:"Which header is needed to use the string type in C++?",options:["#include <string>","#include <text>","#include <iostream>","#include <stdlib>"],answer:0,hint:"string requires #include <string> separately from iostream."},
        q3:{text:"A user enters 'Chanda Mutale' and code has cin >> name. What is stored in name?",options:["'Chanda Mutale'","'Chanda'","'Mutale'","Empty string"],answer:1,hint:"cin >> stops at whitespace. Only the first word 'Chanda' is stored."},
        trace:[
    {line:5, explanation:"string name; int age; — two variables declared but not yet assigned. Memory is allocated.", vars:{name:"?", age:"?"}, output:null},
    {line:6, explanation:"cout << 'Enter name: ' — prints the prompt. No endl so cursor stays on same line.", vars:{name:"?", age:"?"}, output:"Enter name: "},
    {line:7, explanation:"cin >> name — user types 'Chanda'. cin stops at whitespace. name = 'Chanda'.", vars:{name:"Chanda", age:"?"}, output:"Enter name: Chanda"},
    {line:8, explanation:"cout << 'Enter age: ' — prints age prompt.", vars:{name:"Chanda", age:"?"}, output:"Enter name: Chanda\nEnter age: "},
    {line:9, explanation:"cin >> age — user types 16. Stored as integer.", vars:{name:"Chanda", age:16}, output:"Enter name: Chanda\nEnter age: 16"},
    {line:10, explanation:"cout outputs the greeting using << to chain name and age.", vars:{name:"Chanda", age:16}, output:"Enter name: Chanda\nEnter age: 16\nHello Chanda, aged 16"}
  ],
        worked:{
  scenario:"A Zambian ID registration system needs to record a citizen's name and year of birth.",
  problem:"Write a C++ program that asks for a name and birth year, then calculates and prints the person's age in 2024.",
  steps:[
    {explain:"Include string for text input and declare variables.", code:"#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n    string name;\n    int birthYear, age;"},
    {explain:"Read the name (use getline for full name with spaces).", code:"    cout << \"Enter full name: \";\n    getline(cin, name);"},
    {explain:"Read the birth year and calculate age.", code:"    cout << \"Enter birth year: \";\n    cin >> birthYear;\n    age = 2024 - birthYear;"},
    {explain:"Print the result.", code:"    cout << name << \" is \" << age << \" years old.\" << endl;\n    return 0;\n}"}
  ],
  answer:"For name='Chanda Mutale', birthYear=2008: prints 'Chanda Mutale is 16 years old.'",
  answerCode:"#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n    string name; int birthYear, age;\n    cout << \"Enter full name: \";\n    getline(cin, name);\n    cout << \"Enter birth year: \";\n    cin >> birthYear;\n    age = 2024 - birthYear;\n    cout << name << \" is \" << age << \" years old.\" << endl;\n    return 0;\n}",
  insight:"Use getline() for names with spaces — cin >> stops at the first space. After cin >> number, call cin.ignore() before getline() to skip the leftover newline."
},
      },
      {
        id:"c3", title:"Conditionals (if / else)", form:2,
        lesson:`Decision-making in C++ uses if, else if, and else statements. These allow your program to choose between different paths based on conditions.

The structure:
if (condition) {
    code that runs when condition is true
} else if (another_condition) {
    code that runs when first is false but this is true
} else {
    code that runs when all above are false
}

Comparison operators in C++:
== double equals for comparison, single = for assignment — this is the most important distinction
!= not equal to
> greater than, < less than, >= greater or equal, <= less or equal

The most common C++ mistake is writing = instead of == in a condition:
if (score = 90) assigns 90 to score and is always true — this is a bug
if (score == 90) compares score to 90 — this is correct

Logical operators:
&& (AND) — both conditions must be true
|| (OR) — at least one condition must be true
! (NOT) — reverses a boolean value

Chaining with else if: conditions are checked top to bottom. The FIRST true condition runs its block and all others are skipped. Always order conditions from most specific to least specific.`,
        code:`#include <iostream>\nusing namespace std;\n\nint main() {\n    double rainfall;\n    cin >> rainfall;\n    if (rainfall >= 200)\n        cout << "Heavy rains!" << endl;\n    else if (rainfall >= 100)\n        cout << "Moderate rains." << endl;\n    else if (rainfall >= 30)\n        cout << "Light rains." << endl;\n    else\n        cout << "Drought alert!" << endl;\n    return 0;\n}`,
        explanation:"Conditions are checked top to bottom. The first TRUE condition runs its block; the rest are skipped.",
        question:{text:"Lusaka receives 45mm of rain this month. What message does the program print?",options:["Heavy rains!","Moderate rains.","Light rains.","Drought alert!"],answer:2,hint:"45 is ≥30 but not ≥100."},
        q2:{text:"What is the difference between == and = in C++?",options:["They are identical","== compares; = assigns","= compares; == assigns","Both assign values"],answer:1,hint:"= assigns a value. == compares two values. Using = inside if() is a very common bug."},
        q3:{text:"if (score = 90) — what is wrong with this C++ code?",options:["Nothing — it checks if score is 90","= assigns 90 to score; it does not compare","score must be declared first","The brackets are wrong"],answer:1,hint:"= assigns, == compares. This always evaluates to true (since 90 is non-zero)."},
        trace:[
    {line:3, explanation:"int rain = 45; — rain assigned the value 45.", vars:{rain:45}, output:null},
    {line:4, explanation:"if (rain >= 100) — is 45 >= 100? FALSE. Skip this block.", vars:{rain:45, test:"45 >= 100 → false"}, output:null},
    {line:6, explanation:"else if (rain >= 50) — is 45 >= 50? FALSE. Skip.", vars:{rain:45, test:"45 >= 50 → false"}, output:null},
    {line:8, explanation:"else if (rain >= 30) — is 45 >= 30? TRUE. Enter this block.", vars:{rain:45, test:"45 >= 30 → true"}, output:null},
    {line:9, explanation:"cout << 'Light rains.' — prints the matching message.", vars:{rain:45}, output:"Light rains."},
    {line:10, explanation:"Remaining else block is skipped. Program ends.", vars:{rain:45}, output:"Light rains."}
  ],
        worked:{
  scenario:"The Zambia Meteorological Department classifies daily rainfall into warning levels.",
  problem:"Write a C++ program that reads rainfall in mm and prints: 'Flood Warning' if >=100, 'Heavy Rain' if >=50, 'Normal' if >=10, else 'Dry'.",
  steps:[
    {explain:"Declare the rainfall variable and read it.", code:"int rain;\ncout << \"Rainfall (mm): \";\ncin >> rain;"},
    {explain:"Check from highest to lowest — first condition that matches wins.", code:"if (rain >= 100)\n    cout << \"Flood Warning\" << endl;"},
    {explain:"Chain remaining conditions with else if.", code:"else if (rain >= 50)\n    cout << \"Heavy Rain\" << endl;\nelse if (rain >= 10)\n    cout << \"Normal\" << endl;\nelse\n    cout << \"Dry\" << endl;"}
  ],
  answer:"rain=45: 45>=100 false, 45>=50 false, 45>=10 true → prints 'Normal'",
  answerCode:"#include <iostream>\nusing namespace std;\nint main() {\n    int rain;\n    cout << \"Rainfall (mm): \"; cin >> rain;\n    if (rain >= 100) cout << \"Flood Warning\" << endl;\n    else if (rain >= 50) cout << \"Heavy Rain\" << endl;\n    else if (rain >= 10) cout << \"Normal\" << endl;\n    else cout << \"Dry\" << endl;\n    return 0;\n}",
  insight:"Always order from most specific (highest) to least specific (lowest). If you checked >= 10 first, a 45mm reading would match 'Normal' and never reach 'Heavy Rain'."
},
      },
      {
        id:"c4", title:"Loops (for & while)", form:3,
        lesson:`Loops allow a block of code to run repeatedly. C++ has three main loop types, each suited to different situations.

THE FOR LOOP is used when you know exactly how many repetitions are needed.
Syntax: for (initialisation; condition; update) { body }
Initialisation runs once before the loop starts. Condition is checked before each iteration — loop stops when false. Update runs after each iteration.

for (int i = 1; i <= 5; i++) creates a loop that counts 1, 2, 3, 4, 5.

THE WHILE LOOP is used when the number of repetitions depends on a condition.
while (condition) { body }
Checks condition BEFORE each iteration. May run zero times if condition is initially false.

break and continue are two special statements:
break immediately exits the loop regardless of the condition.
continue skips the rest of the current iteration and jumps to the next one.

i++ increments by 1, i-- decrements by 1, i+=2 increases by 2, i*=2 doubles each iteration.

Nested loops: a loop inside a loop. The inner loop completes fully for each single step of the outer loop. Used for multiplication tables, processing grids, and comparing pairs of items.`,
        code:`#include <iostream>\nusing namespace std;\n\nint main() {\n    for (int i = 1; i <= 5; i++)\n        cout << "Student " << i\n             << " collected water." << endl;\n\n    int litres = 0;\n    while (litres < 100) {\n        litres += 25;\n        cout << "Tank: " << litres << "L" << endl;\n    }\n    return 0;\n}`,
        explanation:"for(int i=1; i<=5; i++) — starts at 1, runs while i≤5, adds 1 each time. while(litres<100) runs until the tank is full.",
        ecz:"Loops are core to every C++ paper. The for loop syntax (init; condition; update) is always tested. Expect: count how many times a loop runs, or trace the output of a nested loop.",
        question:{text:"How many times does for(int x = 0; x < 6; x++) execute?",options:["5 times","6 times","7 times","Infinite times"],answer:1,hint:"x goes 0,1,2,3,4,5 — that's 6 values."},
        q2:{text:"What does break; do inside a C++ loop?",options:["Skips to next iteration","Exits the loop immediately","Pauses the loop","Causes a compile error"],answer:1,hint:"break exits the loop immediately. continue skips to the next iteration."},
        q3:{text:"for(int i=10; i>0; i-=3) — what values of i are printed?",options:["10,7,4,1","10,7,4","9,6,3","10,8,6,4,2"],answer:0,hint:"Start at 10, subtract 3 each time: 10→7→4→1. At -2 the condition i>0 is FALSE."},
        trace:[
    {line:3, explanation:"for(int x=0; x<6; x++) — initialise x=0. Check 0<6? TRUE. Enter body.", vars:{x:0}, output:null},
    {line:4, explanation:"cout << x << ' '; — prints 0 with a space.", vars:{x:0}, output:"0 "},
    {line:3, explanation:"x++ → x=1. 1<6 TRUE. Print 1.", vars:{x:1}, output:"0 1 "},
    {line:3, explanation:"x=2→3→4→5. Print each.", vars:{x:5}, output:"0 1 2 3 4 5 "},
    {line:3, explanation:"x++ → x=6. Check 6<6? FALSE. Exit loop.", vars:{x:6}, output:"0 1 2 3 4 5 "},
    {line:6, explanation:"cout << endl — moves to next line. Loop done.", vars:{x:6}, output:"0 1 2 3 4 5 \n"}
  ],
        worked:{
  scenario:"A teacher wants to sum the marks of 5 students at Sikombe Secondary.",
  problem:"Use a for loop to read 5 integer marks and print their total and average.",
  steps:[
    {explain:"Declare variables for counting, each mark, the running total, and the average.", code:"int i, mark, total = 0;\ndouble average;"},
    {explain:"Loop 5 times, reading one mark per iteration and accumulating the total.", code:"for (i = 1; i <= 5; i++) {\n    cout << \"Mark \" << i << \": \";\n    cin >> mark;\n    total += mark;\n}"},
    {explain:"Calculate and print average after the loop.", code:"average = total / 5.0;\ncout << \"Total: \" << total << endl;\ncout << \"Average: \" << average << endl;"}
  ],
  answer:"For marks 70,65,80,55,90: Total=360, Average=72.0",
  answerCode:"#include <iostream>\nusing namespace std;\nint main() {\n    int i, mark, total = 0; double average;\n    for (i = 1; i <= 5; i++) {\n        cout << \"Mark \" << i << \": \";\n        cin >> mark;\n        total += mark;\n    }\n    average = total / 5.0;\n    cout << \"Total: \" << total << endl;\n    cout << \"Average: \" << average << endl;\n    return 0;\n}",
  insight:"Use 5.0 not 5 for division to get a decimal result. Integer division: 360/5 = 72 (fine here). But 361/5 = 72 (truncated!) — so always divide by 5.0 for averages."
},
      },
      {
        id:"c5", title:"Arrays in C++", form:3,
        lesson:`An array in C++ is a collection of variables of the SAME type stored in consecutive memory locations, all accessible through one variable name and an index number.

Declaration: int scores[5] = {78, 92, 65, 88, 74};
This creates 5 integer boxes. C++ arrays start at INDEX 0, not 1.
scores[0] = 78 is the first element.
scores[4] = 74 is the last element — NOT scores[5].

Accessing scores[5] when the array size is 5 is an out-of-bounds error. C++ does NOT catch this automatically. Your program may crash or produce wrong results silently.

Iterating with a for loop:
for (int i = 0; i < 5; i++) { cout << scores[i]; }

Note: i < 5, NOT i <= 5, because the last valid index is 4 not 5.

Initialising arrays:
int arr[5] = {0}; sets all elements to 0.
int arr[5]; leaves elements with random garbage values — dangerous.

Common array algorithms:
Sum: accumulate in a total variable.
Average: sum divided by count (use double for the result).
Maximum and minimum: initialise to the first element then compare each subsequent element.
Linear search: loop through checking each element against the target.`,
        code:`#include <iostream>\nusing namespace std;\n\nint main() {\n    int scores[5] = {78, 92, 65, 88, 74};\n    int total = 0;\n    for (int i = 0; i < 5; i++) {\n        cout << "Student " << i+1\n             << ": " << scores[i] << endl;\n        total += scores[i];\n    }\n    cout << "Average: " << total/5 << endl;\n    return 0;\n}`,
        explanation:"int scores[5] creates an array of 5 integers. Loop visits each element using index i from 0 to 4.",
        ecz:"Arrays in C++ start at index 0 — examiners test this specifically. Common questions: find max/min in an array, sum all elements, or access a specific index.",
        question:{text:"In the array above, what is scores[3]?",options:["92","65","88","74"],answer:2,hint:"scores[0]=78, scores[1]=92, scores[2]=65, scores[3]=?"},
        q2:{text:"int arr[4]={10,20,30,40}. What is arr[0] + arr[3]?",options:["30","40","50","60"],answer:2,hint:"arr[0]=10 and arr[3]=40. 10+40=50."},
        q3:{text:"Why is accessing arr[5] dangerous when arr has size 5?",options:["Prints zero","Causes compile error","Reads random memory — undefined behaviour","Automatically resizes array"],answer:2,hint:"C++ does not bounds-check arrays. arr[5] reads memory beyond the array — undefined behaviour."},
        trace:[
    {line:3, explanation:"int scores[5] = {78,91,55,63,88}; — array of 5 integers created. Index 0–4.", vars:{scores:"[78,91,55,63,88]"}, output:null},
    {line:4, explanation:"int total = 0; — accumulator starts at zero.", vars:{scores:"[78,91,55,63,88]", total:0}, output:null},
    {line:5, explanation:"for(int i=0; i<5; i++) — i=0. total += scores[0] = 78.", vars:{i:0, total:78}, output:null},
    {line:5, explanation:"i=1: total += 91 = 169. i=2: += 55 = 224.", vars:{i:2, total:224}, output:null},
    {line:5, explanation:"i=3: += 63 = 287. i=4: += 88 = 375. i=5: 5<5 FALSE. Loop ends.", vars:{i:5, total:375}, output:null},
    {line:7, explanation:"cout << total / 5 — integer division: 375 / 5 = 75.", vars:{total:375}, output:"75"}
  ],
        worked:{
  scenario:"A Copperbelt mining company tracks weekly copper output for 6 weeks.",
  problem:"Store outputs {1200, 980, 1450, 1100, 1320, 890} in an array. Find and print the maximum output and which week it occurred.",
  steps:[
    {explain:"Declare the array and initialise it.", code:"int output[] = {1200, 980, 1450, 1100, 1320, 890};\nint maxVal = output[0], maxWeek = 1;"},
    {explain:"Loop from index 1, comparing each value to the current maximum.", code:"for (int i = 1; i < 6; i++) {\n    if (output[i] > maxVal) {\n        maxVal = output[i];\n        maxWeek = i + 1;\n    }\n}"},
    {explain:"Print the result.", code:"cout << \"Best week: \" << maxWeek << \" (\" << maxVal << \" tonnes)\" << endl;"}
  ],
  answer:"output[2]=1450 is highest. maxWeek = 2+1 = 3. Prints: Best week: 3 (1450 tonnes)",
  answerCode:"#include <iostream>\nusing namespace std;\nint main() {\n    int output[] = {1200,980,1450,1100,1320,890};\n    int maxVal=output[0], maxWeek=1;\n    for (int i=1; i<6; i++)\n        if (output[i]>maxVal) { maxVal=output[i]; maxWeek=i+1; }\n    cout << \"Best week: \" << maxWeek << \" (\" << maxVal << \" tonnes)\" << endl;\n    return 0;\n}",
  insight:"Initialise maxVal to output[0] (first element), not 0. If all outputs were negative, starting at 0 would incorrectly claim the maximum is 0."
},
      },
      {
        id:"c6", title:"Functions in C++", form:4,
        lesson:`Functions allow you to break a large program into smaller, reusable pieces. Instead of writing the same logic multiple times, you write it once as a function and call it whenever needed.

Function anatomy: returnType functionName(parameterType parameterName) { body }

The returnType tells the compiler what kind of value the function sends back. If the function performs an action but does NOT return a value, use void as the return type.

Parameters vs Arguments:
Parameters are the variable names listed in the function definition — the slots.
Arguments are the actual values you pass when calling the function.
double calcTax(double amount) — amount is the parameter.
calcTax(500.0) — 500.0 is the argument.

Scope: variables declared inside a function are LOCAL — they only exist while the function is running. This prevents functions from accidentally interfering with each other.

Function prototypes: if you define a function AFTER main(), you need a prototype before main() to inform the compiler the function exists. A prototype ends with a semicolon.

Return statement: the moment a return statement executes, the function immediately ends and sends back the value. A void function can use return; with no value to exit early.

Function design principle: each function should do ONE thing well.`,
        code:`#include <iostream>\nusing namespace std;\n\ndouble calcTax(double amount) {\n    return amount * 0.16; // ZRA VAT 16%\n}\n\nvoid printReceipt(double amount, double tax) {\n    cout << "Amount: K" << amount << endl;\n    cout << "VAT:    K" << tax << endl;\n    cout << "Total:  K" << amount+tax << endl;\n}\n\nint main() {\n    double price = 500.0;\n    double vat = calcTax(price);\n    printReceipt(price, vat);\n    return 0;\n}`,
        explanation:"calcTax returns a double. printReceipt is void — it only prints. Functions keep code organised and reusable.",
        ecz:"Functions are heavily tested in Form 4. Know: return type, parameters, calling a function, and void vs non-void. A common question asks you to write a function that calculates and returns a value.",
        question:{text:"What total amount does the receipt print when price = K500?",options:["K500","K80","K580","K16"],answer:2,hint:"500 + 16% of 500 = 500 + 80 = ?"},
        q2:{text:"What does a void function return?",options:["0","NULL","An empty string","Nothing — void means no return value"],answer:3,hint:"void means the function performs actions but returns no value."},
        q3:{text:"Where should a function prototype be placed relative to main()?",options:["After main()","Inside main()","Before main()","At the very end of the file"],answer:2,hint:"Prototypes go before main() so the compiler knows the function exists before it is called."},
        trace:[
    {line:2, explanation:"double calcReceipt — function defined but not called yet. Just stored.", vars:{}, output:null},
    {line:11, explanation:"double price = 500; — price variable in main().", vars:{price:500.0}, output:null},
    {line:12, explanation:"double total = calcReceipt(price) — calls calcReceipt(500). Jumps to function.", vars:{price:500.0, p:500.0}, output:null},
    {line:3, explanation:"double vat = p * 0.16 → 500 * 0.16 = 80.", vars:{p:500.0, vat:80.0}, output:null},
    {line:4, explanation:"return p + vat → 500 + 80 = 580. Returns 580 to caller.", vars:{p:500.0, vat:80.0, returns:580.0}, output:null},
    {line:12, explanation:"total receives 580 in main().", vars:{price:500.0, total:580.0}, output:null},
    {line:13, explanation:"cout prints the receipt total.", vars:{total:580.0}, output:"Total with VAT: K580.00"}
  ],
        worked:{
  scenario:"A Zambian mobile money app calculates transaction fees.",
  problem:"Write a function calcFee(double amount) that returns 1.5% of amount as the fee. Test with K500 and K1200.",
  steps:[
    {explain:"Define the function before main with its return type, parameter, and return statement.", code:"double calcFee(double amount) {\n    return amount * 0.015;\n}"},
    {explain:"In main, call the function with both test amounts.", code:"int main() {\n    double fee1 = calcFee(500);\n    double fee2 = calcFee(1200);"},
    {explain:"Print both fees formatted to 2 decimal places.", code:"    cout << \"Fee on K500: K\" << fee1 << endl;\n    cout << \"Fee on K1200: K\" << fee2 << endl;\n    return 0;\n}"}
  ],
  answer:"Fee on K500: K7.50 / Fee on K1200: K18.00",
  answerCode:"#include <iostream>\nusing namespace std;\ndouble calcFee(double amount) {\n    return amount * 0.015;\n}\nint main() {\n    cout << \"Fee on K500: K\" << calcFee(500) << endl;\n    cout << \"Fee on K1200: K\" << calcFee(1200) << endl;\n    return 0;\n}",
  insight:"Functions must be defined (or declared with a prototype) before they are called in main(). Placing the full function definition above main() satisfies this requirement."
},
      },
      {
        id:"c7", title:"String Operations", form:3,
        lesson:`Strings in C++ are objects representing sequences of characters. C++ strings from the string library are flexible, safe, and come with many built-in methods.

Always include: #include <string>

Essential string methods called using dot notation:

length() or size() returns the number of characters. "Zambia".length() returns 6.

substr(position, length) extracts a portion of the string. Position is 0-based.
"Copperbelt".substr(0, 6) returns "Copper".
"Copperbelt".substr(6, 4) returns "belt".

find(substring) returns the index of the first occurrence, or string::npos if not found.

The + operator concatenates two strings: "Zam" + "bia" returns "Zambia".

at(index) safely accesses a character at a given position with bounds checking.

Comparing strings: use == to compare correctly. if (province == "Lusaka") works correctly for C++ strings.

Converting between types:
stoi(string) converts string to integer: stoi("42") returns 42.
to_string(number) converts number to string: to_string(42) returns "42".
These conversions are important when reading numbers as text and needing to calculate with them.`,
        code:`#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string school = "Munali Girls Secondary";\n    cout << "School: " << school << endl;\n    cout << "Length: " << school.length() << endl;\n    cout << "First 6: " << school.substr(0,6) << endl;\n\n    string city = "Lusaka";\n    string full = school + ", " + city;\n    cout << "Full: " << full << endl;\n    return 0;\n}`,
        explanation:"String methods use dot notation (school.length()). substr(0,6) extracts 6 characters starting at position 0. + concatenates strings.",
        question:{text:"What does school.substr(0, 6) return for \"Munali Girls Secondary\"?",options:["Girls ","Munali","Munali Girls","Secondary"],answer:1,hint:"substr(start, length) — start at 0, take 6 characters."},
        q2:{text:"string s='Ndola'. What does s.length() return?",options:["4","5","6","N"],answer:1,hint:"'Ndola' has 5 characters: N-d-o-l-a."},
        q3:{text:"string s='Copperbelt'. What does s.find('belt') return?",options:["0","6","7","string::npos"],answer:1,hint:"'belt' starts at index 6 in 'Copperbelt' (0-based: C=0,o=1,p=2,p=3,e=4,r=5,b=6)."},
        trace:[
    {line:3, explanation:"string school = 'Kabulonga Girls'; — string variable assigned.", vars:{school:"Kabulonga Girls"}, output:null},
    {line:4, explanation:"cout << school.substr(0, 6) — substr(start, length): start=0, take 6 chars → 'Kabulo'.", vars:{school:"Kabulonga Girls"}, output:"Kabulo"},
    {line:5, explanation:"school.length() — counts all characters including spaces: 'Kabulonga Girls' = 15.", vars:{school:"Kabulonga Girls"}, output:"Kabulo\n15"},
    {line:6, explanation:"school.find('Girls') — searches for 'Girls'. K=0,a=1,b=2,u=3,l=4,o=5,n=6,g=7,a=8, =9,G=10. Returns 10.", vars:{school:"Kabulonga Girls"}, output:"Kabulo\n15\n10"},
    {line:7, explanation:"school.replace(0, 9, 'Munali') — replaces 9 chars from index 0 ('Kabulonga') with 'Munali'.", vars:{school:"Munali Girls"}, output:"Kabulo\n15\n10\nMunali Girls"}
  ],
        worked:{
  scenario:"An enrollment system needs to check if a school name contains the word 'Secondary'.",
  problem:"Given the string 'Kabulonga Boys Secondary School', check if it contains 'Secondary' and print the position.",
  steps:[
    {explain:"Declare and assign the school name string.", code:"string school = \"Kabulonga Boys Secondary School\";"},
    {explain:"Use find() to search for the substring. It returns the index or string::npos if not found.", code:"size_t pos = school.find(\"Secondary\");"},
    {explain:"Check the result and print appropriately.", code:"if (pos != string::npos)\n    cout << \"Found 'Secondary' at index \" << pos << endl;\nelse\n    cout << \"Not found\" << endl;"}
  ],
  answer:"'Secondary' starts at index 15 in 'Kabulonga Boys Secondary School'. Prints: Found 'Secondary' at index 15",
  answerCode:"#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n    string school = \"Kabulonga Boys Secondary School\";\n    size_t pos = school.find(\"Secondary\");\n    if (pos != string::npos)\n        cout << \"Found 'Secondary' at index \" << pos << endl;\n    else\n        cout << \"Not found\" << endl;\n    return 0;\n}",
  insight:"string::npos is a special constant meaning 'not found'. Always compare find() result to npos — never to -1 or 0, as those are valid index positions."
},
      },
      {
        id:"c8", title:"File Input & Output", form:4,
        lesson:`File handling in C++ uses the fstream library, which provides stream classes for working with files.

Include: #include <fstream>

The three file stream types:
ofstream is for WRITING to files.
ifstream is for READING from files.
fstream is for both reading and writing.

Writing to a file:
ofstream outFile("results.txt");
outFile << "Chanda: 88" << endl;
outFile.close(); — ALWAYS close when done

Reading from a file:
ifstream inFile("results.txt");
string line;
while (getline(inFile, line)) { cout << line << endl; }
inFile.close();

Always check if a file opened successfully:
if (!outFile) { cout << "Error opening file"; return 1; }

File modes passed as second argument:
ios::app — append mode adds to end of existing file without erasing.
ios::trunc — erases existing content (default for ofstream).

Why close files? Data is written to a BUFFER first, not directly to disk. close() flushes the buffer and writes everything. If you forget close() and your program crashes, the last data may be lost.

Use case: an ECZ results system might write each student's name and score to a file as they are entered, then read back and display all results at the end.`,
        code:`#include <iostream>\n#include <fstream>\n#include <string>\nusing namespace std;\n\nint main() {\n    ofstream outFile("results.txt");\n    outFile << "=== Form 4 Results ===" << endl;\n    outFile << "Nakamba Phiri: 78% Pass" << endl;\n    outFile << "Chibwe Mutale: 45% Fail" << endl;\n    outFile.close();\n\n    ifstream inFile("results.txt");\n    string line;\n    while (getline(inFile, line))\n        cout << line << endl;\n    inFile.close();\n    return 0;\n}`,
        explanation:"ofstream creates/writes a file. ifstream reads a file. getline() reads one line at a time. Always close files when done.",
        ecz:"File I/O is a Form 4 favourite. Know ofstream (write) and ifstream (read). Expect: write student results to a file, read them back. Always close() the file.",
        question:{text:"Which C++ class is used to write data to a file?",options:["ifstream","fstream","ofstream","wstream"],answer:2,hint:"'o' in ofstream stands for output — writing to a file."},
        q2:{text:"Which C++ stream object reads data FROM a file?",options:["ofstream","iostream","ifstream","fstream"],answer:2,hint:"ifstream = input file stream — for reading. ofstream = output file stream — for writing."},
        q3:{text:"After writing with ofstream, you want to add more data without erasing. Which flag do you use?",options:["ios::read","ios::app","ios::trunc","ios::binary"],answer:1,hint:"ios::app (append) opens an existing file and adds to the end without erasing."},
        trace:[
    {line:3, explanation:"ofstream file('results.txt') — creates/opens file for writing.", vars:{file:"results.txt (open)"}, output:null},
    {line:4, explanation:"if(!file) — check if file opened successfully. It did, so skip error block.", vars:{file:"results.txt (open)"}, output:null},
    {line:6, explanation:"file << 'Chanda: 88' << endl — writes first line to file.", vars:{file_content:"Chanda: 88"}, output:null},
    {line:7, explanation:"file << 'Mwamba: 72' << endl — writes second line.", vars:{file_content:"Chanda: 88\\nMwamba: 72"}, output:null},
    {line:8, explanation:"file.close() — file is saved and closed.", vars:{file:"results.txt (closed)"}, output:null},
    {line:10, explanation:"ifstream fin('results.txt') — opens same file for reading.", vars:{fin:"results.txt (open for reading)"}, output:null},
    {line:11, explanation:"getline(fin, line) reads 'Chanda: 88'. while(!fin.eof()) loops.", vars:{line:"Chanda: 88"}, output:"Chanda: 88"},
    {line:11, explanation:"getline reads 'Mwamba: 72'. Prints it. Next getline hits EOF — loop exits.", vars:{line:"Mwamba: 72"}, output:"Chanda: 88\nMwamba: 72"}
  ],
        worked:{
  scenario:"ECZ wants to save exam results to a file for archiving.",
  problem:"Write a program that saves three results to 'ecz_results.txt', then reads and prints them back.",
  steps:[
    {explain:"Include fstream for file I/O. Open an ofstream for writing.", code:"#include <fstream>\nofstream outFile(\"ecz_results.txt\");"},
    {explain:"Write three results and close the file.", code:"outFile << \"Chanda: 88\" << endl;\noutFile << \"Mwamba: 72\" << endl;\noutFile << \"Bupe: 45\" << endl;\noutFile.close();"},
    {explain:"Open an ifstream for reading. Loop until end of file.", code:"ifstream inFile(\"ecz_results.txt\");\nstring line;\nwhile (getline(inFile, line))\n    cout << line << endl;\ninFile.close();"}
  ],
  answer:"Reads back and prints all three lines: Chanda: 88 / Mwamba: 72 / Bupe: 45",
  answerCode:"#include <iostream>\n#include <fstream>\n#include <string>\nusing namespace std;\nint main() {\n    ofstream out(\"ecz_results.txt\");\n    out<<\"Chanda: 88\"<<endl; out<<\"Mwamba: 72\"<<endl; out<<\"Bupe: 45\"<<endl;\n    out.close();\n    ifstream in(\"ecz_results.txt\");\n    string line;\n    while(getline(in,line)) cout<<line<<endl;\n    in.close(); return 0;\n}",
  insight:"Always close() the output file before opening it for reading. Unclosed files may not have been fully flushed to disk, so your reads could miss the last few lines."
},
      },
      {
        id:"c9", title:"Switch Statement", form:3,
        lesson:`The switch statement provides a clean way to handle multiple possible values of a single variable. It is a more readable alternative to long if-else if chains when testing one variable against several specific values.

Syntax:
switch (variable) {
    case value1: code; break;
    case value2: code; break;
    default: code;
}

THE BREAK STATEMENT IS CRITICAL. Without break, C++ continues executing the code of the NEXT case — this is called fall-through. Sometimes intentional when multiple values share the same action, but usually a bug.

Example of accidental fall-through:
case 1: cout << "Monday";   — forgot break!
case 2: cout << "Tuesday";  — this also runs when day==1!

default handles any value not matched by any case. Always include it as a safety net.

What switch can handle:
CAN: int, char, bool, enum values
CANNOT: double, float, string

Switch vs if-else:
Use switch when: testing one variable against specific values, many cases needed.
Use if-else when: testing ranges, multiple variables, complex conditions.

Common use cases in Zambia: menu systems, day-of-week programs, grade categories, command selection.`,
        code:`#include <iostream>\nusing namespace std;\nint main() {\n    int day;\n    cout << "Enter day (1-7): ";\n    cin >> day;\n    switch(day) {\n        case 1: cout << "Monday - School day" << endl; break;\n        case 2: cout << "Tuesday - School day" << endl; break;\n        case 6: cout << "Saturday - Football at Independence!" << endl; break;\n        case 7: cout << "Sunday - Rest day" << endl; break;\n        default: cout << "Another school day." << endl;\n    }\n    return 0;\n}`,
        explanation:"switch(day) checks the value of day. Each case handles one value. break; exits the switch. default runs when no case matches. Without break, execution falls into the next case.",
        ecz:"Switch statements appear as an alternative to if-else chains. The most common exam trap: forgetting break; causes fall-through. Expect a question asking what happens without break.",
        question:{text:"What happens if you forget to add break; after a case in a switch statement?",options:["Compile error","The program skips that case","Execution falls into the next case","The switch exits automatically"],answer:2,hint:"Without break, C++ continues running the next case's code — called 'fall-through'."},
        q2:{text:"Which C++ keyword handles values not matched by any case in a switch?",options:["else","otherwise","default","catch"],answer:2,hint:"default: is the fallback that runs when no case matches — always include it."},
        q3:{text:"Can a C++ switch statement test a double (decimal) variable?",options:["Yes — works for all types","No — switch only works with integer types and char","Yes — but only positive doubles","No — switch only works with strings"],answer:1,hint:"switch requires an ordinal type (int, char, enum). Floating-point types like double are not allowed."},
        trace:[
    {line:4, explanation:"cin >> day — user enters 6. day = 6.", vars:{day:6}, output:null},
    {line:5, explanation:"switch(day) — starts checking cases.", vars:{day:6}, output:null},
    {line:6, explanation:"case 1: — day is 6, not 1. Skip.", vars:{day:6}, output:null},
    {line:7, explanation:"case 2: — not 2. Skip.", vars:{day:6}, output:null},
    {line:8, explanation:"case 6: — matches! Execute cout.", vars:{day:6}, output:"Saturday - Football at Independence!"},
    {line:9, explanation:"break; — exits the switch. No other cases execute.", vars:{day:6}, output:"Saturday - Football at Independence!"}
  ],
        worked:{
  scenario:"A school menu program shows different meal options based on the day number.",
  problem:"Use switch to print the lunch menu for days 1–3. Day 1: Nshima and chicken, Day 2: Rice and beef, Day 3: Nshima and fish. Any other number: 'No menu'.",
  steps:[
    {explain:"Read the day number.", code:"int day;\ncout << \"Day (1-3): \";\ncin >> day;"},
    {explain:"Use switch with a case for each day. Remember break after each.", code:"switch (day) {\n    case 1: cout << \"Nshima and chicken\" << endl; break;\n    case 2: cout << \"Rice and beef\" << endl; break;\n    case 3: cout << \"Nshima and fish\" << endl; break;"},
    {explain:"Add default for invalid input.", code:"    default: cout << \"No menu\" << endl;\n}"}
  ],
  answer:"Input 2 → 'Rice and beef'. Input 5 → 'No menu'.",
  answerCode:"#include <iostream>\nusing namespace std;\nint main() {\n    int day; cout << \"Day (1-3): \"; cin >> day;\n    switch(day) {\n        case 1: cout<<\"Nshima and chicken\"<<endl; break;\n        case 2: cout<<\"Rice and beef\"<<endl; break;\n        case 3: cout<<\"Nshima and fish\"<<endl; break;\n        default: cout<<\"No menu\"<<endl;\n    }\n    return 0;\n}",
  insight:"Without break, execution falls through to the next case. In a menu like this, forgetting break on case 1 would print both 'Nshima and chicken' AND 'Rice and beef'."
},
      },
      {
        id:"c10", title:"Structs", form:4,
        lesson:`A struct in C++ is a user-defined data type that groups related variables of DIFFERENT types under one name. Instead of separate variables for a student's name, form, and score, you have one Student struct containing all three.

Defining a struct:
struct Student {
    string name;
    int form;
    double score;
};

Creating a struct variable:
Student pupil;
pupil.name = "Chanda Mutale";
pupil.form = 3;
pupil.score = 87.5;

Access fields using dot notation: pupil.name, pupil.form, pupil.score

Arrays of structs give you the real power:
Student myClass[30];
myClass[0].name = "First student";
myClass[0].score = 78.5;

Passing structs to functions:
void printStudent(Student s) { cout << s.name << endl; }
printStudent(pupil);

Struct vs separate variables:
Without struct you need string name1, name2; int form1, form2; double score1, score2;
With struct you just need Student students[30] — all data organised together.

Struct vs Class: struct members are public by default while class members are private by default. Use struct for simple data grouping and class for complex OOP with methods and encapsulation.`,
        code:`#include <iostream>\n#include <string>\nusing namespace std;\nstruct Student {\n    string name;\n    int    form;\n    double score;\n};\nvoid printStudent(Student s) {\n    cout << "Name:  " << s.name << endl;\n    cout << "Form:  " << s.form << endl;\n    cout << "Score: " << s.score << "%" << endl;\n}\nint main() {\n    Student pupil;\n    pupil.name  = "Kapembwa Sinkala";\n    pupil.form  = 4;\n    pupil.score = 91.5;\n    printStudent(pupil);\n    return 0;\n}`,
        explanation:"struct defines a custom data type. pupil.name accesses the name field. Structs can be passed to functions like any variable.",
        question:{text:"How do you access the score field of a Student struct variable called pupil?",options:["Student.score","score.pupil","pupil->score","pupil.score"],answer:3,hint:"Fields in a struct are accessed using dot notation: variable.field"},
        q2:{text:"In C++, what is the default access level of struct members?",options:["private","protected","public","static"],answer:2,hint:"Unlike class, struct members are public by default."},
        worked:{scenario:"A mining company stores ore sample data.",problem:"Create a struct Sample with location (string), depth (int), grade (double). Store: Nchanga, 450m, 0.023 grade.",steps:[{explain:"Define the struct before main.",code:"struct Sample { string location; int depth; double grade; };"},{explain:"Declare and assign fields.",code:"Sample ore; ore.location=\"Nchanga\"; ore.depth=450; ore.grade=0.023;"},{explain:"Print the details.",code:"cout<<ore.location<<\": \"<<ore.depth<<\"m, grade \"<<ore.grade<<endl;"}],answer:"Prints: Nchanga: 450m, grade 0.023",answerCode:"struct Sample{string location;int depth;double grade;}; Sample ore; ore.location=\"Nchanga\";ore.depth=450;ore.grade=0.023; cout<<ore.location<<\": \"<<ore.depth<<\"m, grade \"<<ore.grade;",insight:"A struct groups related variables under one name — cleaner than 3 separate variables and easy to pass as one argument to a function."},
        trace:[
    {line:11, explanation:"Student pupil; — creates a Student struct variable. All fields uninitialised.", vars:{"pupil.name":"?", "pupil.form":"?", "pupil.score":"?"}, output:null},
    {line:12, explanation:"pupil.name = 'Kapembwa Sinkala' — assigns name field using dot notation.", vars:{"pupil.name":"Kapembwa Sinkala", "pupil.form":"?", "pupil.score":"?"}, output:null},
    {line:13, explanation:"pupil.form = 4.", vars:{"pupil.name":"Kapembwa Sinkala", "pupil.form":4, "pupil.score":"?"}, output:null},
    {line:14, explanation:"pupil.score = 91.5.", vars:{"pupil.name":"Kapembwa Sinkala", "pupil.form":4, "pupil.score":91.5}, output:null},
    {line:15, explanation:"printStudent(pupil) — passes the whole struct to the function.", vars:{"pupil.name":"Kapembwa Sinkala", "pupil.form":4, "pupil.score":91.5}, output:null},
    {line:5, explanation:"Inside printStudent: prints name.", vars:{}, output:"Name:  Kapembwa Sinkala"},
    {line:6, explanation:"Prints form.", vars:{}, output:"Name:  Kapembwa Sinkala\nForm:  4"},
    {line:7, explanation:"Prints score.", vars:{}, output:"Name:  Kapembwa Sinkala\nForm:  4\nScore: 91.5%"}
  ],
        q3:{text:"struct Point{int x;int y;}; — which correctly initialises a Point at (3,7)?",options:["Point p={3,7};","Point p(3,7);","Point p=new Point(3,7);","All of the above"],answer:3,hint:"All three syntaxes are valid ways to initialise a simple C++ struct."}
      },
      {
        id:"c11", title:"Classes & OOP Basics", form:4,
        lesson:`Object-Oriented Programming is a paradigm that models the world as objects. Each object has data (attributes) and behaviour (methods). OOP makes programs easier to understand, maintain, and extend.

Core OOP concepts:

CLASS is a blueprint or template defining what attributes and methods objects of that type will have — like architectural plans for a building.

OBJECT is an instance of a class. You can create many objects from one class, each with its own data — like actual buildings built from the same plans.

CONSTRUCTOR is a special method that runs automatically when an object is created. It has the same name as the class and no return type. Used to initialise attributes.

ENCAPSULATION hides internal data from direct outside access:
private: members only accessible from inside the class.
public: members accessible from anywhere.

Why make attributes private? If balance is public, any code could write account.balance = 0 and wipe the account. Making it private means it can ONLY be changed through controlled methods like deposit() and withdraw() which can validate input first.

METHODS are functions that belong to a class and can access its private data.

The class approach models real-world systems naturally: a BankAccount class for Zanaco accounts, a Student class for ECZ registration, a Product class for a Lusaka market inventory system.`,
        code:`#include <iostream>\n#include <string>\nusing namespace std;\nclass BankAccount {\nprivate:\n    string owner;\n    double balance;\npublic:\n    BankAccount(string name, double initial) {\n        owner = name; balance = initial;\n    }\n    void deposit(double amount)  { balance += amount; }\n    void withdraw(double amount) {\n        if (amount <= balance) balance -= amount;\n        else cout << "Insufficient funds!" << endl;\n    }\n    void printBalance() {\n        cout << owner << ": K" << balance << endl;\n    }\n};\nint main() {\n    BankAccount acc("Mwila Banda", 1000.0); // Zanaco\n    acc.deposit(500);\n    acc.withdraw(200);\n    acc.printBalance();\n    return 0;\n}`,
        explanation:"class defines the blueprint. private data is hidden from main(). public methods provide controlled access. The constructor sets up the object when created.",
        ecz:"OOP basics are tested in Form 4. Know: class, private/public, constructor, and calling methods. Expect to write a simple class like BankAccount with deposit() and withdraw().",
        question:{text:"What is Mwila's final balance after deposit(500) then withdraw(200)?",options:["K1,000","K1,300","K1,500","K800"],answer:1,hint:"1000 + 500 - 200 = ?"},
        q2:{text:"Why is the balance field declared private: in BankAccount?",options:["Faster access","Prevents direct modification from outside the class","Private uses less memory","Compiler requires it"],answer:1,hint:"Encapsulation: private hides data so it can only change through controlled methods."},
        q3:{text:"What is the name of the special C++ method that runs automatically when an object is created?",options:["init()","create()","Constructor","begin()"],answer:2,hint:"The constructor has the same name as the class and runs automatically on object creation."},
        trace:[
    {line:11, explanation:"BankAccount acc('Mwila', 1000) — constructor called. name='Mwila', balance=1000.", vars:{name:"Mwila", balance:1000}, output:null},
    {line:12, explanation:"acc.deposit(500) — calls deposit(500). balance = 1000 + 500 = 1500.", vars:{name:"Mwila", balance:1500}, output:null},
    {line:13, explanation:"acc.withdraw(200) — checks: 200 <= 1500? YES. balance = 1500 - 200 = 1300.", vars:{name:"Mwila", balance:1300}, output:null},
    {line:14, explanation:"acc.showBalance() — prints the balance.", vars:{name:"Mwila", balance:1300}, output:"Mwila's balance: K1300.00"}
  ],
        worked:{
  scenario:"A mining company stores ore sample data with multiple properties.",
  problem:"Create a struct Sample with fields: location (string), depth (int), grade (double). Create one sample for 'Nchanga, 450m deep, 0.023 grade' and print it.",
  steps:[
    {explain:"Define the struct before main.", code:"struct Sample {\n    string location;\n    int depth;\n    double grade;\n};"},
    {explain:"In main, declare a Sample variable and assign its fields.", code:"Sample ore;\nore.location = \"Nchanga\";\nore.depth = 450;\nore.grade = 0.023;"},
    {explain:"Print the sample details.", code:"cout << ore.location << \": \" << ore.depth << \"m deep, grade \" << ore.grade << endl;"}
  ],
  answer:"Prints: Nchanga: 450m deep, grade 0.023",
  answerCode:"#include <iostream>\n#include <string>\nusing namespace std;\nstruct Sample { string location; int depth; double grade; };\nint main() {\n    Sample ore;\n    ore.location=\"Nchanga\"; ore.depth=450; ore.grade=0.023;\n    cout<<ore.location<<\": \"<<ore.depth<<\"m deep, grade \"<<ore.grade<<endl;\n    return 0;\n}",
  insight:"A struct groups related data under one name. Instead of 3 separate variables (location, depth, grade), you have one ore variable — cleaner and easier to pass to functions."
},
      },
      {
        id:"c12", title:"Sorting Arrays (Bubble Sort)", form:4,
        lesson:`Sorting means arranging data into a specific order. BUBBLE SORT is the simplest sorting algorithm — it repeatedly compares pairs of adjacent elements and swaps them if they are in the wrong order. The largest unsorted value bubbles up to its correct position after each pass.

How one pass works on {5, 3, 8, 1}:
Compare 5 and 3 — swap — {3, 5, 8, 1}
Compare 5 and 8 — no swap — {3, 5, 8, 1}
Compare 8 and 1 — swap — {3, 5, 1, 8}
After pass 1, the value 8 is in its correct final position.

The swap mechanism requires a temporary variable:
int temp = arr[j];
arr[j] = arr[j+1];
arr[j+1] = temp;
Without temp, you overwrite a value before saving it and the data is permanently lost.

Efficiency: bubble sort requires n-1 passes for n elements. After each pass, one more element is in its final position, so the inner loop can run one fewer comparison each time.

Performance: bubble sort is slow for large datasets — approximately n squared comparisons. Professional programmers use faster algorithms like quicksort. But bubble sort is simple to understand and implement, making it ideal for learning and for ECZ exams.`,
        code:`#include <iostream>\nusing namespace std;\nvoid bubbleSort(int arr[], int n) {\n    for (int i = 0; i < n-1; i++)\n        for (int j = 0; j < n-i-1; j++)\n            if (arr[j] > arr[j+1]) {\n                int temp = arr[j];\n                arr[j]   = arr[j+1];\n                arr[j+1] = temp;\n            }\n}\nint main() {\n    int scores[] = {72, 45, 88, 61, 93, 55};\n    int n = 6;\n    bubbleSort(scores, n);\n    cout << "Sorted: ";\n    for (int i = 0; i < n; i++)\n        cout << scores[i] << " ";\n    cout << endl;\n    return 0;\n}`,
        explanation:"Nested loops compare adjacent pairs. A temp variable holds one value during the swap. After sorting, values are in ascending order from index 0.",
        ecz:"Bubble sort is the only sorting algorithm tested at secondary level. Know the swap using a temp variable. Expect to trace one pass of the sort on a small array.",
        question:{text:"After bubble sort, what is the first (index 0) value in scores[] = {72,45,88,61,93,55}?",options:["72","45","55","61"],answer:1,hint:"Bubble sort arranges in ascending order. What is the smallest value?"},
        q2:{text:"What is the purpose of the temp variable when swapping arr[j] and arr[j+1]?",options:["Count swaps","Hold one value while the other overwrites it","Track sorted boundary","Store array size"],answer:1,hint:"Without temp you'd lose one value. temp=arr[j]; arr[j]=arr[j+1]; arr[j+1]=temp;"},
        q3:{text:"How many comparisons does bubble sort make on the first pass through 5 elements?",options:["5","4","3","10"],answer:1,hint:"First pass: compare (0,1),(1,2),(2,3),(3,4) — that is n-1 = 4 comparisons."},
        trace:[
    {line:2, explanation:"int scores[] = {72,45,88,61} — 4-element array.", vars:{scores:"[72,45,88,61]"}, output:null},
    {line:4, explanation:"Outer pass i=0. j=0: compare 72 and 45. 72>45? YES — swap.", vars:{scores:"[45,72,88,61]", i:0, j:0}, output:null},
    {line:4, explanation:"j=1: 72 vs 88. 72>88? NO. j=2: 88 vs 61. 88>61? YES — swap. End pass 0.", vars:{scores:"[45,72,61,88]", i:0}, output:null},
    {line:3, explanation:"Pass i=1. j=0: 45 vs 72. No swap. j=1: 72 vs 61. Swap.", vars:{scores:"[45,61,72,88]", i:1}, output:null},
    {line:3, explanation:"Pass i=2. j=0: 45 vs 61. No swap. Array sorted.", vars:{scores:"[45,61,72,88]", i:2}, output:null},
    {line:8, explanation:"Print sorted array: 45 61 72 88.", vars:{scores:"[45,61,72,88]"}, output:"45 61 72 88"}
  ],
        worked:{
  scenario:"A bank account class models Zanaco accounts with deposit and withdraw operations.",
  problem:"Create a BankAccount class with a private balance, constructor, deposit(), withdraw(), and getBalance(). Test with K1000 starting balance.",
  steps:[
    {explain:"Define the class with private balance and public methods.", code:"class BankAccount {\nprivate:\n    double balance;\npublic:\n    BankAccount(double initial) { balance = initial; }\n    void deposit(double amt)   { balance += amt; }\n    void withdraw(double amt)  { if (amt <= balance) balance -= amt; }\n    double getBalance()        { return balance; }\n};"},
    {explain:"In main, create an account and test operations.", code:"BankAccount acc(1000);\nacc.deposit(500);\nacc.withdraw(200);\ncout << \"Balance: K\" << acc.getBalance() << endl;"}
  ],
  answer:"1000 + 500 - 200 = K1300. Prints: Balance: K1300",
  answerCode:"#include <iostream>\nusing namespace std;\nclass BankAccount {\nprivate: double balance;\npublic:\n    BankAccount(double i){balance=i;}\n    void deposit(double a){balance+=a;}\n    void withdraw(double a){if(a<=balance)balance-=a;}\n    double getBalance(){return balance;}\n};\nint main(){\n    BankAccount acc(1000);\n    acc.deposit(500); acc.withdraw(200);\n    cout<<\"Balance: K\"<<acc.getBalance()<<endl;\n    return 0;\n}",
  insight:"balance is private — external code cannot write acc.balance = 0. It can only be changed through deposit() and withdraw(). This is encapsulation — protecting data integrity."
},
      },
      {
        id:"c13", title:"Recursion", form:4,
        lesson:`Recursion is a technique where a function solves a problem by calling ITSELF. Each call works on a smaller version of the problem until it reaches a base case — a simple situation solved directly without further recursion.

Every recursive function MUST have:
1. BASE CASE — the simple case solved without recursion that stops the chain
2. RECURSIVE CASE — calls itself with a smaller input moving towards the base case

Without a base case, the function calls itself forever and crashes with a stack overflow error.

Tracing factorial(4):
factorial(4) calls factorial(3) and waits
  factorial(3) calls factorial(2) and waits
    factorial(2) calls factorial(1) and waits
      factorial(1) returns 1 — BASE CASE reached
    factorial(2) returns 2 times 1 = 2
  factorial(3) returns 3 times 2 = 6
factorial(4) returns 4 times 6 = 24

The call stack stores each function call in memory. Deep recursion uses significant memory and can eventually overflow the stack.

When to use recursion: problems that naturally break into smaller identical subproblems, tree traversal, mathematical sequences.

When NOT to use: when a simple loop would work — recursion has overhead from function call costs and memory for each stack frame.`,
        code:`#include <iostream>\nusing namespace std;\n\nint factorial(int n) {\n    if (n <= 1) return 1;       // base case\n    return n * factorial(n-1); // recursive case\n}\n\nlong fibonacci(int n) {\n    if (n <= 1) return n;       // base case\n    return fibonacci(n-1) + fibonacci(n-2);\n}\n\nint main() {\n    // How many ways to arrange 5 Chipolopolo players?\n    cout << "5! = " << factorial(5) << endl;\n    cout << "Fibonacci(8) = " << fibonacci(8) << endl;\n    return 0;\n}`,
        explanation:"factorial(5) calls factorial(4), which calls factorial(3)... until it hits factorial(1)=1. Then results multiply back up: 1×2×3×4×5=120.",
        ecz:"Recursion questions always include factorial or Fibonacci. Know: base case stops the recursion, recursive case calls itself with a smaller value. Expect to trace factorial(4) step by step.",
        question:{text:"What does factorial(4) return?",options:["4","8","24","16"],answer:2,hint:"4 × 3 × 2 × 1 = ?"},
        q2:{text:"What is Python's default recursion depth limit?",options:["100","1000","10000","Unlimited"],answer:1,hint:"Python's default is 1000 recursive calls. Raise with sys.setrecursionlimit(n)."},
        q3:{text:"What does memoisation do in recursive fibonacci()?",options:["Stores results so they aren't recalculated","Converts recursion to a loop","Limits recursion depth","Uses less memory"],answer:0,hint:"Without memoisation fibonacci(50) recalculates billions of values. Memoisation caches each result."},
        trace:[
    {line:2, explanation:"factorial(4) called. n=4. Is n<=1? NO. Must compute 4 * factorial(3). Call stacks up.", vars:{n:4, status:"waiting for factorial(3)"}, output:null},
    {line:2, explanation:"factorial(3) called. n=3. 3<=1? NO. Waiting for factorial(2).", vars:{n:3, status:"waiting for factorial(2)"}, output:null},
    {line:2, explanation:"factorial(2). 2<=1? NO. Waiting for factorial(1).", vars:{n:2, status:"waiting for factorial(1)"}, output:null},
    {line:2, explanation:"factorial(1). 1<=1? YES — BASE CASE. Returns 1.", vars:{n:1, returns:1}, output:null},
    {line:2, explanation:"Unwinding: factorial(2) = 2 * 1 = 2. Returns 2.", vars:{n:2, returns:2}, output:null},
    {line:2, explanation:"factorial(3) = 3 * 2 = 6. Returns 6.", vars:{n:3, returns:6}, output:null},
    {line:2, explanation:"factorial(4) = 4 * 6 = 24. Returns 24. Back in main.", vars:{n:4, returns:24}, output:null},
    {line:9, explanation:"cout << factorial(4) prints 24.", vars:{}, output:"24"}
  ],
        worked:{
  scenario:"A teacher wants to sort student scores in ascending order for a grade report.",
  problem:"Use bubble sort to sort the array {65, 42, 88, 31, 76} in ascending order and print the result.",
  steps:[
    {explain:"Declare the array and its size.", code:"int scores[] = {65, 42, 88, 31, 76};\nint n = 5;"},
    {explain:"Outer loop runs n-1 passes. Inner loop compares adjacent pairs.", code:"for (int i = 0; i < n-1; i++)\n    for (int j = 0; j < n-1-i; j++)"},
    {explain:"Swap if left element is greater than right.", code:"        if (scores[j] > scores[j+1]) {\n            int temp = scores[j];\n            scores[j] = scores[j+1];\n            scores[j+1] = temp;\n        }"},
    {explain:"Print the sorted array.", code:"for (int k = 0; k < n; k++)\n    cout << scores[k] << \" \";"}
  ],
  answer:"Sorted: 31 42 65 76 88",
  answerCode:"#include <iostream>\nusing namespace std;\nint main() {\n    int scores[]={65,42,88,31,76}, n=5;\n    for(int i=0;i<n-1;i++)\n        for(int j=0;j<n-1-i;j++)\n            if(scores[j]>scores[j+1]){\n                int t=scores[j]; scores[j]=scores[j+1]; scores[j+1]=t;\n            }\n    for(int k=0;k<n;k++) cout<<scores[k]<<\" \";\n    return 0;\n}",
  insight:"The inner loop runs n-1-i times because after each pass, the largest unsorted element 'bubbles' to its correct position at the end — no need to check it again."
},
      },
      {
        id:"c14", title:"2D Arrays (Matrices)", form:4,
        lesson:`A 2D array is an array of arrays — a table or grid with rows and columns. Where a regular array gives you a single row of boxes, a 2D array gives you a complete grid.

Declaration: int grid[3][4];
This creates a grid with 3 rows and 4 columns giving 12 total elements.
The first index is row (0 to 2) and second index is column (0 to 3).
grid[0][0] is the top-left corner and grid[2][3] is the bottom-right corner.

Initialisation with values:
int marks[3][4] = {
    {78, 85, 91, 74},  // row 0
    {65, 72, 68, 80},  // row 1
    {90, 88, 95, 92}   // row 2
};

Processing with nested loops — outer loop controls rows, inner controls columns:
for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 4; j++) {
        cout << marks[i][j] << " ";
    }
    cout << endl;
}

Real-world 2D array applications in Zambia:
Mark sheets where rows are students and columns are subjects.
Rainfall grids where rows are months and columns are weather stations.
Game boards and seating plans.`,
        code:`#include <iostream>\nusing namespace std;\nint main() {\n    // Term marks for 3 students, 4 subjects\n    int marks[3][4] = {\n        {78, 85, 91, 74},  // Chanda\n        {65, 72, 68, 80},  // Mwamba\n        {90, 88, 95, 92}   // Bupe\n    };\n    string names[3] = {"Chanda","Mwamba","Bupe"};\n    for (int i = 0; i < 3; i++) {\n        int total = 0;\n        for (int j = 0; j < 4; j++)\n            total += marks[i][j];\n        cout << names[i] << " avg: "\n             << total/4 << "%" << endl;\n    }\n    return 0;\n}`,
        explanation:"marks[i][j] accesses row i, column j. The outer loop iterates students; the inner loop iterates subjects. total/4 computes the average across 4 subjects.",
        question:{text:"What is Chanda's average mark (row 0: 78, 85, 91, 74)?",options:["82%","84%","86%","80%"],answer:1,hint:"(78 + 85 + 91 + 74) / 4 = 328 / 4 = ?"},
        q2:{text:"Given int grid[3][4], how many total elements does it hold?",options:["3","4","7","12"],answer:3,hint:"Total elements = rows × columns = 3 × 4 = 12."},
        q3:{text:"In int marks[3][4], what does marks[2][0] access?",options:["Row 2 column 0 — start of third row","Row 0 column 2","Element 6 overall","Out of bounds"],answer:0,hint:"First index is row (0-based), second is column. marks[2][0] is row 3, first column."},
        trace:[
    {line:2, explanation:"int marks[3][4] — 3 rows, 4 columns. Total 12 integers. Row 0 = Chanda.", vars:{marks:"3×4 grid"}, output:null},
    {line:8, explanation:"Outer loop r=0 (Chanda's row). total=0.", vars:{r:0, total:0}, output:null},
    {line:9, explanation:"Inner loop c=0: total += marks[0][0] = 78.", vars:{r:0, c:0, total:78}, output:null},
    {line:9, explanation:"c=1: +=85=163. c=2: +=91=254. c=3: +=74=328. Inner loop ends.", vars:{r:0, c:3, total:328}, output:null},
    {line:11, explanation:"cout prints row 0 average: 328/4 = 82.", vars:{r:0, total:328}, output:"Row 0 avg: 82"},
    {line:8, explanation:"r=1 (row 1). Repeats for rows 1 and 2.", vars:{r:1}, output:"Row 0 avg: 82\nRow 1 avg: ...\nRow 2 avg: ..."}
  ],
        worked:{
  scenario:"A school fete is selling raffle tickets. Prizes double each round.",
  problem:"Write a recursive function power(base, exp) that calculates base^exp. Test with 2^8 (256 tickets possible).",
  steps:[
    {explain:"Base case: any number to the power 0 is 1.", code:"int power(int base, int exp) {\n    if (exp == 0) return 1;"},
    {explain:"Recursive case: base^exp = base × base^(exp-1).", code:"    return base * power(base, exp - 1);\n}"},
    {explain:"Call and print.", code:"cout << \"2^8 = \" << power(2, 8) << endl;"}
  ],
  answer:"power(2,8) = 2×power(2,7) = 2×2×...×power(2,0) = 2×2×2×2×2×2×2×2×1 = 256",
  answerCode:"#include <iostream>\nusing namespace std;\nint power(int base, int exp) {\n    if (exp == 0) return 1;\n    return base * power(base, exp - 1);\n}\nint main() {\n    cout << \"2^8 = \" << power(2, 8) << endl;\n    return 0;\n}",
  insight:"Every recursive function needs a base case that returns without calling itself. Without if (exp==0) return 1, the function would recurse forever and crash with a stack overflow."
},
      },
      {
        id:"c15", title:"Inheritance (OOP)", form:4,
        lesson:`Inheritance allows a new class (child) to automatically receive all attributes and methods of an existing class (parent), then add its own unique features on top.

This models real-world hierarchies naturally:
Person leads to Student leads to Prefect.
BankAccount leads to SavingsAccount leads to PremiumSavingsAccount.

Syntax: class Student : public Person { ... };
The colon means inherits from. public means public members of Person remain public in Student.

What Student inherits from Person:
All public attributes like name and age.
All public methods like introduce().

What Student adds:
Its own new attributes like school and gpa.
Its own new methods like study().

Access specifiers in inheritance:
public members of parent — accessible in child and from outside.
protected members of parent — accessible in child but NOT from outside.
private members of parent — NOT accessible in child at all.

Method overriding: a child class can redefine a method from the parent to give it different behaviour. Add virtual in the parent to enable proper polymorphism.

Benefits of inheritance:
Code reuse: write common code once in parent class.
Extensibility: add new types without modifying existing code.
Consistency: all subclasses share the same interface.`,
        code:`#include <iostream>\n#include <string>\nusing namespace std;\n\nclass Person {\npublic:\n    string name;\n    int age;\n    void introduce() {\n        cout << "Hi, I am " << name\n             << ", aged " << age << endl;\n    }\n};\n\nclass Student : public Person {\npublic:\n    string school;\n    double gpa;\n    void study() {\n        cout << name << " studies at "\n             << school << endl;\n    }\n};\n\nint main() {\n    Student s;\n    s.name   = "Chilufya Mwale";\n    s.age    = 16;\n    s.school = "Kabulonga Girls, Lusaka";\n    s.introduce(); // inherited from Person\n    s.study();\n    return 0;\n}`,
        explanation:"Student inherits name, age, and introduce() from Person. It adds school and study(). s.introduce() works even though it's defined in Person — that's inheritance.",
        question:{text:"Which method does Student inherit from Person?",options:["study()","school","introduce()","gpa"],answer:2,hint:"introduce() is defined in Person and inherited by Student automatically."},
        q2:{text:"Can a child class access a private: field of its parent in C++?",options:["Yes — inheritance gives full access","No — use protected: instead","Yes — with the super keyword","Only in the same file"],answer:1,hint:"private members are hidden even from child classes. Use protected: to allow child access."},
        worked:{scenario:"A school models students inheriting from a Person base class.",problem:"Create Person with name and introduce(). Create Student extending Person with school and study(). Test with student at Munali Boys.",steps:[{explain:"Define Person base class.",code:"class Person { public: string name; void introduce(){cout<<\"Hi, I am \"<<name<<endl;} };"},{explain:"Define Student inheriting from Person.",code:"class Student : public Person { public: string school; void study(){cout<<name<<\" studies at \"<<school<<endl;} };"},{explain:"Create and test.",code:"Student s; s.name=\"Chilufya\"; s.school=\"Munali Boys\"; s.introduce(); s.study();"}],answer:"Hi, I am Chilufya / Chilufya studies at Munali Boys",answerCode:"class Person{public: string name; void introduce(){cout<<\"Hi, I am \"<<name<<endl;}}; class Student:public Person{public: string school; void study(){cout<<name<<\" studies at \"<<school<<endl;}}; Student s; s.name=\"Chilufya\"; s.school=\"Munali Boys\"; s.introduce(); s.study();",insight:"Student inherits all public members of Person automatically — name and introduce() are available without rewriting them."},
        trace:[
    {line:12, explanation:"Student s — creates a Student object. Student inherits from Person, so it has name, age, school, gpa.", vars:{"s.name":"?", "s.school":"?", "s.gpa":"?"}, output:null},
    {line:13, explanation:"s.name = 'Chilufya' — sets inherited name field from Person.", vars:{"s.name":"Chilufya", "s.school":"?", "s.gpa":"?"}, output:null},
    {line:14, explanation:"s.age = 16 — sets inherited age field.", vars:{"s.name":"Chilufya", "s.age":16, "s.school":"?"}, output:null},
    {line:15, explanation:"s.school = 'Kabulonga Girls' — sets Student's own field.", vars:{"s.name":"Chilufya", "s.age":16, "s.school":"Kabulonga Girls"}, output:null},
    {line:16, explanation:"s.introduce() — inherited from Person. Uses s.name and s.age.", vars:{}, output:"Hi, I am Chilufya, aged 16"},
    {line:17, explanation:"s.study() — Student's own method. Uses both name and school.", vars:{}, output:"Hi, I am Chilufya, aged 16\nChilufya studies at Kabulonga Girls"}
  ],
        q3:{text:"What syntax calls the parent constructor from a child class in C++?",options:["super()","parent()","base()","Child():Parent(){}"],answer:3,hint:"C++ uses initialiser list syntax: ChildClass(args):ParentClass(args){}"}
      },
      {
        id:"c16", title:"Vectors (Dynamic Arrays)", form:4,
        lesson:`A vector is C++ dynamic array — an array that can grow and shrink automatically as needed. Unlike regular arrays with fixed size declared at compile time, vectors resize themselves at runtime.

Include: #include <vector>

Declaration examples:
vector<int> scores; creates an empty vector.
vector<int> scores(10); creates a vector with 10 elements.
vector<int> scores = {78, 91, 55, 63}; creates with initial values.

Essential vector operations:
push_back(value) adds value to the END and increases size by 1.
pop_back() removes the LAST element and decreases size by 1.
size() returns the current number of elements.
at(index) accesses element with bounds checking — throws exception if out of bounds.
[index] accesses element without bounds checking — same risk as regular arrays.
empty() returns true if the vector contains no elements.
clear() removes all elements.

Iterating:
for (int i = 0; i < scores.size(); i++) cout << scores[i];
Modern C++ range-based for: for (int score : scores) cout << score;

Vector vs Array:
Array has fixed size, faster access, and simpler syntax.
Vector has dynamic size, is slightly slower, but safer and has more features.

When to use vectors: when you do not know in advance how many items you will have.`,
        code:`#include <iostream>\n#include <vector>\n#include <string>\nusing namespace std;\nint main() {\n    vector<string> squad;\n    squad.push_back("Patson Daka");\n    squad.push_back("Fashion Sakala");\n    squad.push_back("Kings Kangwa");\n\n    cout << "Chipolopolo Squad:" << endl;\n    for (int i = 0; i < squad.size(); i++)\n        cout << i+1 << ". " << squad[i] << endl;\n\n    squad.push_back("Enock Mwepu");\n    cout << "After addition: " << squad.size()\n         << " players" << endl;\n    squad.pop_back();\n    cout << "After removal: " << squad.size()\n         << " players" << endl;\n    return 0;\n}`,
        explanation:"push_back() adds to the end. pop_back() removes the last element. size() returns the current count. Unlike arrays, vectors resize automatically — no need to declare a fixed size.",
        question:{text:"After push_back() three times then one more push_back() then pop_back(), what is squad.size()?",options:["2","3","4","5"],answer:1,hint:"3 + 1 - 1 = ?"},
        q2:{text:"What is the key advantage of vector over a regular array?",options:["Vectors are always faster","Vectors resize automatically","Vectors use less memory","Vectors hold multiple types"],answer:1,hint:"The main advantage: you don't declare a fixed size — vectors grow automatically."},
        q3:{text:"Which method accesses the last element of a vector v safely?",options:["v.last()","v[-1]","v.back()","v[v.size()]"],answer:2,hint:"v.back() returns the last element. v[-1] is Python syntax — it doesn't work in C++."},
        trace:[
    {line:4, explanation:"vector<string> squad — empty vector. Size = 0. It will grow automatically.", vars:{squad:"[]", size:0}, output:null},
    {line:5, explanation:"squad.push_back('Daka') — adds to end. Size = 1.", vars:{squad:"['Daka']", size:1}, output:null},
    {line:6, explanation:"push_back('Sakala'). Size = 2.", vars:{squad:"['Daka','Sakala']", size:2}, output:null},
    {line:7, explanation:"push_back('Kangwa'). Size = 3.", vars:{squad:"['Daka','Sakala','Kangwa']", size:3}, output:null},
    {line:8, explanation:"cout << squad.size() — prints 3.", vars:{size:3}, output:"3"},
    {line:9, explanation:"squad.pop_back() — removes last element ('Kangwa'). Size = 2.", vars:{squad:"['Daka','Sakala']", size:2}, output:"3"},
    {line:10, explanation:"cout << squad[0] — index 0 is 'Daka'.", vars:{}, output:"3\nDaka"}
  ],
        worked:{
  scenario:"ECZ records 3 students' marks for 4 subjects in a 2D array.",
  problem:"Store and print this mark sheet: Row 0 (Chanda): 78,85,91,74. Row 1 (Mwamba): 65,72,68,80. Calculate each student's average.",
  steps:[
    {explain:"Declare and initialise the 2D array.", code:"int marks[2][4] = {{78,85,91,74},{65,72,68,80}};"},
    {explain:"Use nested loops — outer for students, inner for subjects.", code:"for (int r = 0; r < 2; r++) {\n    int total = 0;\n    for (int c = 0; c < 4; c++)\n        total += marks[r][c];"},
    {explain:"Calculate and print each student's average.", code:"    cout << \"Student \" << r << \" avg: \" << total/4.0 << endl;\n}"}
  ],
  answer:"Student 0 avg: 82.0 / Student 1 avg: 71.25",
  answerCode:"#include <iostream>\nusing namespace std;\nint main() {\n    int marks[2][4]={{78,85,91,74},{65,72,68,80}};\n    for(int r=0;r<2;r++){\n        int total=0;\n        for(int c=0;c<4;c++) total+=marks[r][c];\n        cout<<\"Student \"<<r<<\" avg: \"<<total/4.0<<endl;\n    }\n    return 0;\n}",
  insight:"marks[r][c] uses two indices. First index is the row (student), second is the column (subject). marks[1][2] is row 1 (Mwamba), column 2 = 68."
},
      },
      {
        id:"c17", title:"Linked Lists", form:4,
        lesson:`A linked list is a data structure where each element called a node contains data AND a pointer to the next node. Unlike arrays where elements are stored consecutively, linked list nodes can be scattered anywhere in memory, connected by pointers.

Each node structure:
struct Node { int data; Node* next; };
The last node's next pointer is nullptr — this marks the end of the list.

Building a linked list:
Node* head = new Node{10, nullptr};
head->next = new Node{20, nullptr};
head->next->next = new Node{30, nullptr};

Traversal — always use a separate pointer, never move head:
Node* curr = head;
while (curr != nullptr) {
    cout << curr->data << " ";
    curr = curr->next;
}

Why NOT move head? If you do head = head->next, you lose the reference to the first node permanently and can never get back to the start of the list.

Linked list vs Array:
Array has fast random access (arr[5] is instant) and fixed size.
Linked list has slow access (must traverse from head) but dynamic size and efficient insertions.

The -> operator accesses a member through a pointer. curr->data is the same as (*curr).data.`,
        code:`#include <iostream>\nusing namespace std;\n\nstruct Node {\n    int data;\n    Node* next;\n};\n\nint main() {\n    // Build list: 10 -> 20 -> 30\n    Node* head = new Node{10, nullptr};\n    head->next = new Node{20, nullptr};\n    head->next->next = new Node{30, nullptr};\n\n    // Traverse and print\n    cout << "Mine shaft depths (m): ";\n    Node* curr = head;\n    while (curr != nullptr) {\n        cout << curr->data << " ";\n        curr = curr->next;\n    }\n    cout << endl;\n    return 0;\n}`,
        explanation:"Each Node holds data and a next pointer. new Node{} allocates memory. We traverse by following next pointers until nullptr (end of list). head points to the first node.",
        question:{text:"What does nullptr represent in a linked list node?",options:["Zero value data","The head of the list","The end of the list (no next node)","An error"],answer:2,hint:"nullptr means 'points to nothing' — used to mark the last node."},
        q2:{text:"What is the time complexity of accessing the 5th element of a linked list?",options:["O(1) — instant","O(n) — traverse from head","O(log n)","O(5) — fixed steps"],answer:1,hint:"No index exists — you must follow next pointers from head, visiting each node."},
        worked:{scenario:"A simple linked list stores student IDs.",problem:"Create nodes 10, 20, 30 as a linked list and traverse to print all values.",steps:[{explain:"Define Node struct.",code:"struct Node { int data; Node* next; };"},{explain:"Create nodes and link them.",code:"Node* head=new Node{10,nullptr}; head->next=new Node{20,nullptr}; head->next->next=new Node{30,nullptr};"},{explain:"Traverse with a pointer.",code:"Node* curr=head; while(curr){cout<<curr->data<<\" \"; curr=curr->next;}"}],answer:"Prints: 10 20 30",answerCode:"struct Node{int data;Node* next;}; Node* head=new Node{10,nullptr}; head->next=new Node{20,nullptr}; head->next->next=new Node{30,nullptr}; Node* curr=head; while(curr){cout<<curr->data<<\" \"; curr=curr->next;}",insight:"Always traverse with a separate curr pointer — if you move head forward, you lose the reference to the start of the list permanently."},
        trace:[
    {line:3, explanation:"Node* head = new Node{10, nullptr} — allocates first node on heap. data=10, next=nullptr.", vars:{head:"→Node(10,null)"}, output:null},
    {line:4, explanation:"head->next = new Node{20, nullptr} — second node. head→10→20→null.", vars:{head:"→10→20→null"}, output:null},
    {line:5, explanation:"head->next->next = new Node{30, nullptr} — third node. head→10→20→30→null.", vars:{head:"→10→20→30→null"}, output:null},
    {line:6, explanation:"Node* curr = head — curr starts at head (node 10). We traverse with curr, not head.", vars:{curr:"→10"}, output:null},
    {line:7, explanation:"while(curr) — curr is not null. Print curr->data = 10. curr = curr->next → node 20.", vars:{curr:"→20"}, output:"10"},
    {line:7, explanation:"curr = node 20. Print 20. curr → node 30.", vars:{curr:"→30"}, output:"10 20"},
    {line:7, explanation:"curr = node 30. Print 30. curr = nullptr. while(nullptr) is false — loop exits.", vars:{curr:"null"}, output:"10 20 30"}
  ],
        q3:{text:"In C++, what keyword allocates memory for a new linked list node at runtime?",options:["malloc","alloc","new","create"],answer:2,hint:"new Node{data, nullptr} allocates heap memory and returns a pointer to the new node."}
      },
      {
        id:"c18", title:"Templates", form:4,
        lesson:`Templates allow you to write a function or class ONCE and have it work automatically with multiple different data types. Instead of writing separate functions for int, double, and string, you write one template and the compiler generates the appropriate version for each type used.

Function template syntax:
template <typename T>
T findMax(T a, T b) {
    return (a > b) ? a : b;
}

T is a placeholder type parameter. When you call findMax(450, 820), the compiler sees both are int, substitutes int for T, and generates the correct function automatically.

Type deduction: C++ automatically deduces T from the arguments.
findMax(450, 820) makes T become int.
findMax(3.14, 2.71) makes T become double.
findMax('A', 'Z') makes T become char.

Class templates work the same way:
template <typename T>
class Stack { T data[100]; int top; };
Stack<int> intStack;
Stack<string> stringStack;

The Standard Template Library (STL): C++ comes with rich pre-built templates including vector, list, map, and sort. These are production-quality implementations you can use directly.

Templates are powerful but can produce confusing error messages when types do not match. Always ensure operations used inside the template are supported by the types you pass.`,
        code:`#include <iostream>\nusing namespace std;\n\ntemplate <typename T>\nT findMax(T a, T b) {\n    return (a > b) ? a : b;\n}\n\ntemplate <typename T>\nvoid printArray(T arr[], int n) {\n    for (int i = 0; i < n; i++)\n        cout << arr[i] << " ";\n    cout << endl;\n}\n\nint main() {\n    // Works for any type!\n    cout << findMax(450, 820) << endl;    // ints\n    cout << findMax(3.14, 2.71) << endl; // doubles\n    cout << findMax('A', 'Z') << endl;   // chars\n\n    int scores[] = {78, 91, 55, 63};\n    printArray(scores, 4);\n    return 0;\n}`,
        explanation:"template <typename T> lets T represent any type. The compiler creates separate versions for int, double, and char automatically. This avoids writing the same function three times.",
        question:{text:"What does findMax(450, 820) return?",options:["450","820","1270","135"],answer:1,hint:"findMax returns the larger of the two values."},
        q2:{text:"What does typename T mean in template<typename T>?",options:["T is a variable","T is a placeholder for any data type","T must be an integer","T is a class"],answer:1,hint:"typename T declares T as a placeholder. The compiler substitutes the actual type at the call site."},
        q3:{text:"You call findMax(3.14, 2.71). What type does T become?",options:["int","float","double","string"],answer:2,hint:"3.14 and 2.71 are double literals. The compiler deduces T=double automatically."},
        trace:[
    {line:5, explanation:"findMax(450, 820) called. Compiler deduces T=int. Compares 450 > 820.", vars:{T:"int", a:450, b:820}, output:null},
    {line:6, explanation:"450 > 820 is false → return b (820).", vars:{T:"int", returns:820}, output:null},
    {line:17, explanation:"cout << findMax(450, 820) prints 820.", vars:{}, output:"820"},
    {line:18, explanation:"findMax(3.14, 2.71) — T=double. 3.14 > 2.71 TRUE → return 3.14.", vars:{T:"double", returns:3.14}, output:"820\n3.14"},
    {line:20, explanation:"printArray(scores, 4) — T=int. Loops and prints each element.", vars:{T:"int"}, output:"820\n3.14\n78 91 55 63"}
  ],
        worked:{
  scenario:"A Zambian data analysis tool needs to find the maximum value in arrays of different types.",
  problem:"Write a template function maxOf(a, b) that returns the larger value. Test with int, double, and char.",
  steps:[
    {explain:"Define the template function with typename T as a placeholder.", code:"template <typename T>\nT maxOf(T a, T b) {\n    return (a > b) ? a : b;\n}"},
    {explain:"Call the function with different types — the compiler generates the right version.", code:"cout << maxOf(450, 820) << endl;\ncout << maxOf(3.14, 2.71) << endl;\ncout << maxOf('Z', 'A') << endl;"}
  ],
  answer:"820 / 3.14 / Z",
  answerCode:"template <typename T>\nT maxOf(T a, T b) { return (a>b)?a:b; }\nint main(){\n    cout<<maxOf(450,820)<<endl;\n    cout<<maxOf(3.14,2.71)<<endl;\n    cout<<maxOf('Z','A')<<endl;\n    return 0;\n}",
  insight:"The compiler creates three separate functions: maxOf<int>, maxOf<double>, maxOf<char>. You write the logic once; the compiler handles the type-specific versions automatically."
},
      },
  ],
  },

  Python: {
    color: "#27ae60", accent: "#d4f5e1", icon: "🟢",
    topics: [
      {
        id:"py1", title:"Introduction to Python", form:1,
        lesson:`Python is one of the most popular programming languages in the world, used by Google, Netflix, NASA, and thousands of Zambian tech startups. It was created by Guido van Rossum in 1991 and named after the British comedy group Monty Python, not the snake.

What makes Python special for beginners:
Simple, readable syntax that resembles English.
No need to declare variable types in advance.
No need for a main() function or BEGIN and END blocks.
Runs code line by line (interpreted, not compiled).
Vast library of free tools for data, web, science, and AI.

Your first Python program is just one line: print("Hello, Zambia!")

Compared to Pascal which needs PROGRAM, BEGIN, and END, Python just runs.

Comments in Python use the # symbol. Everything after # on a line is ignored:
# This is a comment
print("This runs")  # This comment is at the end of a line

print() tips:
print("A", "B", "C") prints A B C with a space between each.
print("A", "B", sep="-") prints A-B using a custom separator.
print("No newline", end="") prevents the automatic newline.
print() with no arguments prints a blank line.

Python is the language of data science, machine learning, and automation — skills increasingly valuable in Zambia's growing digital economy.`,
        code:`# My first Python program\nprint("Muli bwanji! Welcome to Python!")\nprint("I study at Kabulonga Boys Secondary School")\nprint("Python is simple and powerful!")`,
        explanation:"print() outputs text. Lines starting with # are comments — Python ignores them. No semicolons or BEGIN/END needed!",
        question:{text:"Chisomo wants to print 'Go Green Buffaloes!' in Python. Which line is correct?",options:["WriteLn('Go Green Buffaloes!');","cout << 'Go Green Buffaloes!';","print('Go Green Buffaloes!')","echo 'Go Green Buffaloes!'"],answer:2,hint:"Python uses print() to display output."},
        q2:{text:"What does a line starting with # do in Python?",options:["Crashes the program","Prints a heading","Is a comment — Python ignores it","Imports a module"],answer:2,hint:"# marks a comment. Python skips it entirely — it is a note for the programmer."},
        q3:{text:"print('Zambia','is','great') — what separator appears between words by default?",options:["Nothing","A comma","A space","A newline"],answer:2,hint:"print() uses sep=' ' (a space) by default between multiple arguments."},
        trace:[
    {line:1, explanation:"# My first Python program — this is a comment. Python ignores it completely.", vars:{}, output:null},
    {line:2, explanation:"print('Muli bwanji! Welcome to Python!') — outputs the first line.", vars:{}, output:"Muli bwanji! Welcome to Python!"},
    {line:3, explanation:"print('I study at Kabulonga Boys Secondary') — outputs the second line.", vars:{}, output:"Muli bwanji! Welcome to Python!\nI study at Kabulonga Boys Secondary"},
    {line:4, explanation:"print('Python is simple and powerful!') — third line. Program ends — no END. or return needed.", vars:{}, output:"Muli bwanji! Welcome to Python!\nI study at Kabulonga Boys Secondary\nPython is simple and powerful!"}
  ],
        worked:{
  scenario:"A simple linked list stores student IDs for a dynamic registration queue.",
  problem:"Create a linked list with nodes containing integer data. Add nodes with values 10, 20, 30. Traverse and print the list.",
  steps:[
    {explain:"Define the Node struct with data and a pointer to the next node.", code:"struct Node {\n    int data;\n    Node* next;\n};"},
    {explain:"Create three nodes using new and link them.", code:"Node* head = new Node{10, nullptr};\nhead->next  = new Node{20, nullptr};\nhead->next->next = new Node{30, nullptr};"},
    {explain:"Traverse using a pointer, printing each node's data.", code:"Node* curr = head;\nwhile (curr != nullptr) {\n    cout << curr->data << \" \";\n    curr = curr->next;\n}"}
  ],
  answer:"Prints: 10 20 30",
  answerCode:"#include <iostream>\nusing namespace std;\nstruct Node { int data; Node* next; };\nint main(){\n    Node* head=new Node{10,nullptr};\n    head->next=new Node{20,nullptr};\n    head->next->next=new Node{30,nullptr};\n    Node* curr=head;\n    while(curr!=nullptr){cout<<curr->data<<\" \"; curr=curr->next;}\n    return 0;\n}",
  insight:"Always traverse with a separate curr pointer — never move head. If you do head = head->next, you lose the reference to the start of the list permanently."
},
      },
      {
        id:"py2", title:"Variables & Input", form:1,
        lesson:`Python handles variables differently from Pascal and C++. You do NOT need to declare a variable type — Python figures it out automatically from the value you assign. This is called dynamic typing.

Simply write: variableName = value
Python creates the variable and assigns the type automatically:
age = 16 means Python knows this is an integer.
score = 87.5 means Python knows this is a float.
name = "Chanda" means Python knows this is a string.
passed = True means Python knows this is a boolean.

The input() function ALWAYS returns a STRING — no matter what the user types. This is critical:
age = input("Enter age: ") makes age a STRING, even if the user types 25.
age = int(input("Enter age: ")) makes age an INTEGER.

Type conversion functions:
int("25") returns 25
float("3.14") returns 3.14
str(25) returns "25"

If conversion fails (for example int("hello")), Python raises a ValueError and the program crashes unless you handle the error.

Variable naming rules:
Can contain letters, numbers, and underscores.
Cannot start with a number.
Case sensitive: name and Name are different variables.
Use snake_case style: first_name, exam_score, total_marks.

Multiple assignment: a, b = 10, 20 assigns 10 to a and 20 to b in one line. This also enables elegant swapping: a, b = b, a`,
        code:`name   = input("Enter your name: ")\nform   = int(input("Enter your form (1-4): "))\nschool = "Matero Boys Secondary, Lusaka"\n\nprint("Name:", name)\nprint("Form:", form)\ngrad_year = 2024 + (4 - form)\nprint("Completing Form 4 in:", grad_year)`,
        explanation:"int() converts the input string to a number. Variables are created simply by assignment. Python automatically infers the type.",
        question:{text:"Ngoza is Form 2. Using 2024 + (4 - form), what year will she complete Form 4?",options:["2024","2025","2026","2027"],answer:2,hint:"2024 + (4 - 2) = ?"},
        q2:{text:"A user types '25' when asked for age. What type does input() return?",options:["int","float","str","number"],answer:2,hint:"input() ALWAYS returns a string, even if the user types a number."},
        q3:{text:"What does int('abc') do in Python?",options:["Returns 0","Returns None","Raises ValueError","Converts to ASCII"],answer:2,hint:"'abc' cannot become an integer. Python raises ValueError: invalid literal for int()."},
        trace:[
    {line:1, explanation:"name = input('Enter your name: ') — input() always returns a STRING. User types 'Ngoza'.", vars:{name:"Ngoza"}, output:"Enter your name: Ngoza"},
    {line:2, explanation:"form = int(input('Enter your form: ')) — input returns '2' (string), int() converts it to 2.", vars:{name:"Ngoza", form:2}, output:"Enter your name: Ngoza\nEnter your form: 2"},
    {line:3, explanation:"school = 'Matero Boys Secondary, Lusaka' — simple string assignment.", vars:{name:"Ngoza", form:2, school:"Matero Boys..."}, output:null},
    {line:5, explanation:"print('Name:', name) — prints the name.", vars:{name:"Ngoza"}, output:"Enter your name: Ngoza\nEnter your form: 2\nName: Ngoza"},
    {line:6, explanation:"print('Form:', form) — prints form as integer.", vars:{form:2}, output:"...\nName: Ngoza\nForm: 2"},
    {line:7, explanation:"grad_year = 2024 + (4 - form) → 2024 + (4-2) = 2026.", vars:{form:2, grad_year:2026}, output:null},
    {line:8, explanation:"print('Completing Form 4 in:', grad_year) — prints graduation year.", vars:{grad_year:2026}, output:"...\nForm: 2\nCompleting Form 4 in: 2026"}
  ],
        worked:{
  scenario:"A Zambian data analysis tool needs to find the maximum value in arrays of different types.",
  problem:"Write a template function maxOf(a, b) that returns the larger value. Test with int, double, and char.",
  steps:[
    {explain:"Define the template function with typename T as a placeholder.", code:"template <typename T>\nT maxOf(T a, T b) {\n    return (a > b) ? a : b;\n}"},
    {explain:"Call the function with different types — the compiler generates the right version.", code:"cout << maxOf(450, 820) << endl;      // T=int\ncout << maxOf(3.14, 2.71) << endl;    // T=double\ncout << maxOf('Z', 'A') << endl;      // T=char"}
  ],
  answer:"820 / 3.14 / Z",
  answerCode:"#include <iostream>\nusing namespace std;\ntemplate <typename T>\nT maxOf(T a, T b) { return (a>b)?a:b; }\nint main(){\n    cout<<maxOf(450,820)<<endl;\n    cout<<maxOf(3.14,2.71)<<endl;\n    cout<<maxOf('Z','A')<<endl;\n    return 0;\n}",
  insight:"The compiler creates three separate functions: maxOf<int>, maxOf<double>, maxOf<char>. You write the logic once; the compiler handles the type-specific versions automatically."
},
      },
      {
        id:"py3", title:"Conditions (if / elif / else)", form:2,
        lesson:`Python uses if, elif, and else for decision-making. Python's syntax is unique because it uses INDENTATION (spaces) to define code blocks instead of curly braces or BEGIN and END.

The spacing at the start of each line is PART OF THE SYNTAX — not just for readability. Getting indentation wrong is a syntax error that prevents the program from running.

The standard pattern:
if condition:
    code that runs when True (must be indented 4 spaces)
elif another_condition:
    code that runs when first is False but this is True
else:
    code that runs when all above are False

Every if, elif, and else line MUST end with a colon. Missing the colon is the most common Python syntax error for beginners.

Python logical operators use English words:
and means both conditions must be true.
or means at least one must be true.
not reverses a boolean value.

Python comparison operators: == (equal), != (not equal), > (greater), < (less), >= (greater or equal), <= (less or equal)

f-strings are a clean way to embed variables in text:
print(f"Hello {name}, you scored {score}%")
The f before the quote and curly braces around variable names — Python replaces them with the actual values.`,
        code:`level = float(input("Enter water level in metres: "))\n\nif level >= 108:\n    status = "Flood Warning!"\nelif level >= 95:\n    status = "Peak Tourism Season"\nelif level >= 70:\n    status = "Normal – activities safe"\nelse:\n    status = "Low Season"\n\nprint(f"Level: {level}m  |  Status: {status}")`,
        explanation:"elif is Python's 'else if'. Indentation defines which code belongs inside each block. f-strings use {curly braces} to embed variables.",
        question:{text:"The Zambezi River at Victoria Falls measures 82 metres. What status appears?",options:["Flood Warning!","Peak Tourism Season","Normal – activities safe","Low Season"],answer:2,hint:"82 is ≥70 but not ≥95."},
        q2:{text:"What is wrong with this Python code? if score >= 50 print('Pass')",options:["Nothing","Missing colon after condition","print needs brackets","score must be declared"],answer:1,hint:"Python if statements must end with a colon: if score >= 50:"},
        q3:{text:"In Python, what replaces C++'s && and || operators?",options:["& and |","AND and OR","and and or","&& and ||"],answer:2,hint:"Python uses English words: and, or, not — instead of &&, ||, !"},
        trace:[
    {line:1, explanation:"level = 82 — water level assigned.", vars:{level:82}, output:null},
    {line:2, explanation:"if level >= 108 — is 82 >= 108? FALSE. Skip this block.", vars:{level:82, test:"82>=108 → False"}, output:null},
    {line:4, explanation:"elif level >= 95 — is 82 >= 95? FALSE. Skip.", vars:{level:82, test:"82>=95 → False"}, output:null},
    {line:6, explanation:"elif level >= 70 — is 82 >= 70? TRUE. Enter this block.", vars:{level:82, test:"82>=70 → True"}, output:null},
    {line:7, explanation:"status = 'Normal – activities safe' — assigned.", vars:{level:82, status:"Normal – activities safe"}, output:null},
    {line:9, explanation:"print(f'Level: {level}m | Status: {status}') — f-string interpolates variables.", vars:{level:82, status:"Normal – activities safe"}, output:"Level: 82m | Status: Normal – activities safe"}
  ],
        worked:{
  scenario:"A Form 1 student at Matero Boys wants to write their first Python program for a school project.",
  problem:"Print three lines: 'ZamCode Academy', 'Learn Python the Zambian Way', and today's date as a string '2024-07-15'.",
  steps:[
    {explain:"Each print() call outputs one line. Start with the app name.", code:"print('ZamCode Academy')"},
    {explain:"Print the tagline.", code:"print('Learn Python the Zambian Way')"},
    {explain:"Print the date as a plain string (no imports needed).", code:"print('2024-07-15')"}
  ],
  answer:"Outputs three lines exactly as specified. Python runs line by line, top to bottom.",
  answerCode:"print('ZamCode Academy')\nprint('Learn Python the Zambian Way')\nprint('2024-07-15')",
  insight:"Python needs no boilerplate — no PROGRAM, no main(), no includes. Just write print() and run. Each print() automatically moves to the next line."
},
      },
      {
        id:"py4", title:"Loops (for & while)", form:2,
        lesson:`Python has two main loop types: for and while. Python's for loop is more powerful than Pascal's because it can iterate over ANY sequence, not just a range of numbers.

THE FOR LOOP with range():
range(n) generates numbers 0, 1, 2 up to n-1.
range(a, b) generates a, a+1 up to b-1 (stops BEFORE b).
range(a, b, step) generates values with a custom step size.

for i in range(5): gives i the values 0, 1, 2, 3, 4
for i in range(1, 6): gives i the values 1, 2, 3, 4, 5
for i in range(0, 10, 2): gives i the values 0, 2, 4, 6, 8

The for loop can iterate directly over a list or string:
for name in ["Chanda", "Bupe", "Mwamba"]:
    print(name)

enumerate() gives both the index AND the value:
for i, name in enumerate(names, 1):
    print(f"{i}. {name}")

THE WHILE LOOP:
while condition:
    body that repeats while condition is True
Always ensure the condition will eventually become False.

break exits the loop immediately. continue skips the rest of this iteration.

The range trap: range(5) starts at 0 and goes to 4, not 5. If you want 1 to 5, use range(1, 6). This is one of the most common off-by-one errors in Python.`,
        code:`areas = ["Kabulonga","Chilenje","Matero","Woodlands"]\n\nfor i, area in enumerate(areas):\n    hour = 6 + (i * 4)\n    print(f"{area}: power cut at {hour:02d}:00hrs")\n\nlitres = 0\nwhile litres < 100:\n    litres += 25\n    print(f"Tank: {litres}L")`,
        explanation:"enumerate() gives both index and value. {hour:02d} formats with a leading zero. while runs until the tank fills.",
        question:{text:"How many times does the while loop run (starts at 0, adds 25, stops when ≥100)?",options:["3 times","4 times","5 times","6 times"],answer:1,hint:"25, 50, 75, 100 — count the steps."},
        q2:{text:"What does range(2, 10, 2) produce?",options:["2,4,6,8,10","2,4,6,8","2,3,4,5,6,7,8,9","0,2,4,6,8"],answer:1,hint:"range(start, stop, step): starts at 2, steps by 2, stops BEFORE 10."},
        q3:{text:"What does enumerate(['a','b','c'], 1) produce?",options:["(0,'a'),(1,'b'),(2,'c')","(1,'a'),(2,'b'),(3,'c')","['a','b','c']","[1,2,3]"],answer:1,hint:"enumerate(list, start) pairs each item with an index starting from start=1."},
        trace:[
    {line:1, explanation:"litres = 0 — start with empty tank.", vars:{litres:0}, output:null},
    {line:3, explanation:"while litres < 100 — 0 < 100? TRUE. Enter loop.", vars:{litres:0}, output:null},
    {line:4, explanation:"litres = litres + 20 → 20.", vars:{litres:20}, output:null},
    {line:5, explanation:"print(f'Tank level: {litres}L') → prints 20L.", vars:{litres:20}, output:"Tank level: 20L"},
    {line:3, explanation:"20 < 100 TRUE. litres=40. Print 40L.", vars:{litres:40}, output:"Tank level: 20L\nTank level: 40L"},
    {line:3, explanation:"Continues: 60L, 80L, 100L. Then 100<100 FALSE — exit loop.", vars:{litres:100}, output:"Tank level: 20L\nTank level: 40L\nTank level: 60L\nTank level: 80L\nTank level: 100L"},
    {line:7, explanation:"print('Tank is full!') — after loop.", vars:{litres:100}, output:"Tank level: 20L\nTank level: 40L\nTank level: 60L\nTank level: 80L\nTank level: 100L\nTank is full!"}
  ],
        worked:{
  scenario:"A school registration desk at Lusaka's Munali Girls records student information.",
  problem:"Ask the user for their name and form number. Calculate graduation year as 2024 + (4 - form). Print a welcome message with the graduation year.",
  steps:[
    {explain:"Use input() to get the name. No conversion needed — name stays as a string.", code:"name = input('Enter your name: ')"},
    {explain:"Get the form number and convert to int immediately.", code:"form = int(input('Enter your form (1-4): '))"},
    {explain:"Calculate graduation year and print with an f-string.", code:"grad = 2024 + (4 - form)\nprint(f'Welcome {name}! You graduate in {grad}.')"}
  ],
  answer:"Name='Chanda', form=2 → grad=2026. Prints: Welcome Chanda! You graduate in 2026.",
  answerCode:"name = input('Enter your name: ')\nform = int(input('Enter your form (1-4): '))\ngrad = 2024 + (4 - form)\nprint(f'Welcome {name}! You graduate in {grad}.')",
  insight:"int() converts the string from input() to a number. Without it, 2024 + (4 - '2') would raise TypeError because you can't subtract a string from a number."
},
      },
      {
        id:"py5", title:"Functions & Lists", form:3,
        lesson:`FUNCTIONS in Python let you give a name to a block of code so you can run it any time by using that name. Functions make programs shorter, cleaner, and easier to maintain.

Defining a function:
def functionName(parameters):
    function body goes here — must be indented
    return value  (this line is optional)

The def keyword begins the definition. The function does NOT run when defined — it only runs when called.

Parameters and return values:
def greet(name):
    return f"Hello {name}!"
message = greet("Chanda")  # argument is Chanda
print(message)              # prints: Hello Chanda!

Default parameter values are used when no argument is provided:
def greet(name, times=2):
    print(name * times)
greet("Hi ")      # uses default: prints Hi Hi
greet("Hi ", 3)   # overrides: prints Hi Hi Hi

LISTS are Python's most versatile data structure — ordered and changeable:
marks = [78, 91, 55, 63, 88]
marks[0] = 78    # first element (0-based indexing)
marks[-1] = 88   # last element using negative indexing
marks[1:3]       # slice gives elements at index 1 and 2

List methods:
append(x) adds x to the end.
remove(x) removes the first occurrence of x.
sort() sorts the list in place.
len(list) gives the count of elements.
sum(list) gives the total of all elements.
max(list) and min(list) give the largest and smallest values.`,
        code:`squad = ["Patson Daka","Fashion Sakala","Kings Kangwa"]\n\ndef print_squad(team):\n    print("=== Chipolopolo Squad ===")\n    for i, p in enumerate(team, 1):\n        print(f"  {i}. {p}")\n    print(f"Total: {len(team)} players")\n\ndef add_player(team, name):\n    team.append(name)\n    print(f"{name} added!")\n\nadd_player(squad, "Enock Mwepu")\nprint_squad(squad)`,
        explanation:"def defines a function. .append() adds to a list. enumerate(list, 1) starts numbering from 1. len() returns the count.",
        ecz:"Functions and lists appear together in almost every Python question. Expect: write a function that takes a list, processes it, and returns a result. Know append(), len(), and list indexing.",
        question:{text:"After calling add_player(squad, 'Enock Mwepu'), how many players are in the squad?",options:["3","4","5","6"],answer:1,hint:"Squad started with 3, then one was added."},
        q2:{text:"What does squad[-1] return if squad=['Daka','Sakala','Kangwa']?",options:["'Daka'","'Sakala'","'Kangwa'","IndexError"],answer:2,hint:"Negative indices count from the end. -1 is always the last element."},
        q3:{text:"What is the difference between sorted(marks) and marks.sort()?",options:["Identical","sorted() returns new list; marks.sort() modifies original","marks.sort() is faster","sorted() only works on numbers"],answer:1,hint:"sorted() is non-destructive — returns new list. list.sort() modifies in place."},
        trace:[
    {line:1, explanation:"squad = ['Daka', 'Sakala', 'Kangwa'] — list with 3 elements. Index 0,1,2.", vars:{squad:"['Daka','Sakala','Kangwa']", len:3}, output:null},
    {line:3, explanation:"def add_player(team, name): — function defined but not called yet.", vars:{}, output:null},
    {line:6, explanation:"add_player(squad, 'Enock Mwepu') called. Inside: team.append('Enock Mwepu').", vars:{squad:"['Daka','Sakala','Kangwa','Enock Mwepu']", len:4}, output:null},
    {line:7, explanation:"print(len(squad)) — length is now 4.", vars:{len:4}, output:"4"},
    {line:8, explanation:"print(squad[0]) — index 0 is still 'Daka'. append adds to end.", vars:{squad_0:"Daka"}, output:"4\nDaka"},
    {line:9, explanation:"print(squad[-1]) — -1 is the last element = 'Enock Mwepu'.", vars:{squad_last:"Enock Mwepu"}, output:"4\nDaka\nEnock Mwepu"}
  ],
        worked:{
  scenario:"A Kafue National Park monitoring system categorises water hole levels for rangers.",
  problem:"Given water_level = 65, print: 'Critical — animals at risk' if < 30, 'Low — monitor closely' if < 60, 'Adequate' if < 90, else 'Full — optimal'.",
  steps:[
    {explain:"Assign the water level variable.", code:"water_level = 65"},
    {explain:"Chain conditions from lowest to highest threshold with if/elif/else.", code:"if water_level < 30:\n    print('Critical — animals at risk')\nelif water_level < 60:\n    print('Low — monitor closely')\nelif water_level < 90:\n    print('Adequate')"},
    {explain:"The else catches anything >= 90.", code:"else:\n    print('Full — optimal')"}
  ],
  answer:"65 < 30 is False. 65 < 60 is False. 65 < 90 is True → prints 'Adequate'.",
  answerCode:"water_level = 65\nif water_level < 30:\n    print('Critical — animals at risk')\nelif water_level < 60:\n    print('Low — monitor closely')\nelif water_level < 90:\n    print('Adequate')\nelse:\n    print('Full — optimal')",
  insight:"Python uses indentation (4 spaces) to define blocks — not BEGIN/END or braces. Every if/elif/else line must end with a colon (:). Missing the colon causes SyntaxError."
},
      },
      {
        id:"py6", title:"Dictionaries", form:3,
        lesson:`A dictionary is Python's key-value store. Instead of accessing data by a numbered index, you access it by a meaningful key — like looking up a word in a real dictionary.

Creating a dictionary:
student = {"name": "Chanda", "form": 3, "score": 87.5}

Accessing values:
student["name"] returns "Chanda"
student["score"] returns 87.5

Adding or updating:
student["province"] = "Lusaka"   adds a new key
student["score"] = 91.0          updates an existing key

Checking if a key exists:
if "name" in student returns True
if "age" in student returns False

Safe access with .get():
student.get("age", "Unknown") returns "Unknown" instead of crashing if the key is missing.

Iterating through a dictionary:
for key in student iterates over keys only.
for key, value in student.items() iterates over key-value pairs.
for value in student.values() iterates over values only.

Dictionary vs List:
List: ordered, accessed by position (index), allows duplicates.
Dictionary: accessed by key, keys must be unique.

When to use a dictionary: when your data has meaningful labels. Province populations, student records, word counts, settings — anything where you look up values by name rather than position.

Nested dictionaries: a class register might be a dictionary of student names where each value is another dictionary with marks, form, and province.`,
        code:`# Zambia province populations\nprovinces = {\n    "Lusaka":     3_360_000,\n    "Copperbelt": 2_280_000,\n    "Eastern":    1_930_000,\n    "Southern":   1_860_000,\n}\n\nprovinces["Northern"] = 1_100_000\n\nfor province, pop in provinces.items():\n    print(f"{province:12s}: {pop:,} people")`,
        explanation:"Dictionaries use meaningful keys (province names). .items() returns key-value pairs. {pop:,} formats numbers with commas.",
        ecz:"Dictionaries are tested in Form 3-4. Common question: create a dictionary, add a key, loop through .items(), and access values by key. Know the difference between a list and a dictionary.",
        question:{text:"How many provinces are in the dictionary after adding Northern?",options:["3","4","5","6"],answer:2,hint:"Started with 4, then one was added."},
        q2:{text:"What does provinces.get('Eastern', 'Unknown') return if 'Eastern' is not in the dict?",options:["None","KeyError","'Unknown'","0"],answer:2,hint:".get(key, default) returns the default value safely instead of raising KeyError."},
        q3:{text:"Which method returns all key-value pairs from a dictionary?",options:[".keys()",".values()",".items()",".pairs()"],answer:2,hint:".items() returns (key, value) pairs. Use it in: for k, v in d.items():"},
        trace:[
    {line:1, explanation:"provinces = {'Lusaka':3360000, 'Copperbelt':2280000} — dictionary with 2 key-value pairs.", vars:{provinces:"{'Lusaka':3360000,'Copperbelt':2280000}", len:2}, output:null},
    {line:2, explanation:"provinces['Southern'] = 1860000 — adds a new key-value pair. Dict grows to 3.", vars:{provinces:"{'Lusaka':3360000,'Copperbelt':2280000,'Southern':1860000}", len:3}, output:null},
    {line:3, explanation:"print(len(provinces)) — 3 keys now.", vars:{len:3}, output:"3"},
    {line:4, explanation:"for name, pop in provinces.items() — .items() yields (key, value) pairs. First: ('Lusaka', 3360000).", vars:{name:"Lusaka", pop:3360000}, output:"3"},
    {line:5, explanation:"print(f'{name}: {pop:,}') — prints Lusaka with comma-formatted population.", vars:{name:"Lusaka", pop:3360000}, output:"3\nLusaka: 3,360,000"},
    {line:4, explanation:"Next iteration: Copperbelt, then Southern.", vars:{}, output:"3\nLusaka: 3,360,000\nCopperbelt: 2,280,000\nSouthern: 1,860,000"}
  ],
        worked:{
  scenario:"A Lusaka market vendor tracks how many bags of mealie meal are sold each day for 5 days.",
  problem:"Use a for loop with range() to print daily totals: day 1 sells 12 bags, each day sells 3 more than the previous.",
  steps:[
    {explain:"Use range(1, 6) to get days 1–5.", code:"for day in range(1, 6):"},
    {explain:"Calculate bags for each day: starts at 12, adds 3 per day.", code:"    bags = 12 + (day - 1) * 3"},
    {explain:"Print formatted output.", code:"    print(f'Day {day}: {bags} bags sold')"}
  ],
  answer:"Day 1: 12 / Day 2: 15 / Day 3: 18 / Day 4: 21 / Day 5: 24",
  answerCode:"for day in range(1, 6):\n    bags = 12 + (day - 1) * 3\n    print(f'Day {day}: {bags} bags sold')",
  insight:"range(1, 6) produces 1,2,3,4,5 — stops BEFORE 6. range(6) would produce 0,1,2,3,4,5. The formula (day-1)*3 means day 1 adds 0, day 2 adds 3, day 3 adds 6, etc."
},
      },
      {
        id:"py7", title:"File Handling", form:4,
        lesson:`Files allow Python programs to save data permanently and read it back later. Without files, all variables disappear when the program ends.

The safest way to work with files is using the with statement, which AUTOMATICALLY closes the file even if an error occurs:

with open("filename.txt", "mode") as f:
    use f here
# file is automatically closed when the block ends

File modes:
"w" creates the file if it does not exist and ERASES it if it does.
"r" opens an existing file for reading (this is the default mode).
"a" appends to end without erasing anything.
"x" creates a new file and fails if the file already exists.

Writing:
with open("results.txt", "w") as f:
    f.write("Chanda: 88\\n")     # \\n adds a newline
    f.write("Mwamba: 72\\n")

Reading:
with open("results.txt", "r") as f:
    content = f.read()           # reads ENTIRE file as one string
    lines = f.readlines()        # reads all lines into a list
    for line in f:               # reads one line at a time
        print(line.strip())

The .strip() method removes the newline character at the end of each line read from a file.

Always use "w" mode carefully — it silently erases existing file contents. Use "a" if you want to add to existing data.`,
        code:`results = {\n    "Nakamba Phiri": 78,\n    "Chibwe Mutale": 45,\n    "Monde Zulu":    91,\n}\n\nwith open("results.txt", "w") as f:\n    f.write("=== Form 4 Results ===\\n")\n    for name, score in results.items():\n        grade = "Pass" if score >= 50 else "Fail"\n        f.write(f"{name}: {score}% - {grade}\\n")\n\nwith open("results.txt", "r") as f:\n    print(f.read())`,
        explanation:"with open() handles files safely and closes them automatically. .items() loops through dictionary pairs. The ternary expression picks Pass or Fail.",
        ecz:"File handling is a must-know for Form 4. Use with open() — examiners expect this. Know modes 'w', 'r', 'a'. Expect to write student data to a file and read it back.",
        question:{text:"Which student's result will show 'Fail' in the saved file?",options:["Nakamba Phiri","Chibwe Mutale","Monde Zulu","All of them"],answer:1,hint:"A 'Fail' is score < 50. Which student scored below 50?"},
        q2:{text:"What mode string opens a file to ADD content without erasing existing data?",options:["'w'","'r'","'a'","'rw'"],answer:2,hint:"'a' mode appends — adds to the end without overwriting existing content."},
        q3:{text:"Why should you always use 'with open()' instead of just 'open()'?",options:["It is faster","Automatically closes the file even if an error occurs","open() does not work in Python 3","Reads the whole file at once"],answer:1,hint:"The with block guarantees close() is called — even if an exception is raised inside."},
        trace:[
    {line:1, explanation:"students = [('Chanda',88), ('Bupe',45), ('Mwamba',72)] — list of tuples.", vars:{students:"3 records"}, output:null},
    {line:2, explanation:"with open('results.csv','w') as f — opens file for writing. 'with' ensures close() is called automatically.", vars:{file:"results.csv (open)"}, output:null},
    {line:3, explanation:"f.write('Name,Score\\n') — writes the header line.", vars:{file_content:"Name,Score"}, output:null},
    {line:4, explanation:"for name, score in students: — iterates. First: name='Chanda', score=88.", vars:{name:"Chanda", score:88}, output:null},
    {line:5, explanation:"f.write(f'{name},{score}\\n') — writes 'Chanda,88\\n'.", vars:{file_content:"Name,Score\\nChanda,88"}, output:null},
    {line:4, explanation:"Next: Bupe,45. Then Mwamba,72. With block ends — file automatically closed.", vars:{file_content:"Name,Score\\nChanda,88\\nBupe,45\\nMwamba,72"}, output:null},
    {line:7, explanation:"with open('results.csv','r') — reopen for reading. print(f.read()) reads all.", vars:{}, output:"Name,Score\nChanda,88\nBupe,45\nMwamba,72"}
  ],
        worked:{
  scenario:"A football coach manages the Chipolopolo squad with a list and a helper function.",
  problem:"Create a list with 3 players. Write a function add_player(squad, name) that appends the player. Add 'Enock Mwepu' and print the full squad.",
  steps:[
    {explain:"Create the initial squad list.", code:"squad = ['Daka', 'Sakala', 'Kangwa']"},
    {explain:"Define the function using def. list.append() adds to the end in place.", code:"def add_player(team, name):\n    team.append(name)"},
    {explain:"Call the function and print the updated squad.", code:"add_player(squad, 'Enock Mwepu')\nprint(squad)\nprint(f'Squad size: {len(squad)}')"}
  ],
  answer:"['Daka', 'Sakala', 'Kangwa', 'Enock Mwepu'] / Squad size: 4",
  answerCode:"squad = ['Daka', 'Sakala', 'Kangwa']\ndef add_player(team, name):\n    team.append(name)\nadd_player(squad, 'Enock Mwepu')\nprint(squad)\nprint(f'Squad size: {len(squad)}')",
  insight:"Lists are passed by reference in Python — team inside the function IS the same list as squad outside. append() modifies it in place, so no return is needed."
},
      },
      {
        id:"py8", title:"Exception Handling", form:4,
        lesson:`Errors are a normal part of programming. Python has a structured way to handle them gracefully so your program does not crash — try and except blocks.

try:
    code that might cause an error
except ErrorType:
    code that runs if that error occurs
finally:
    code that ALWAYS runs, whether an error occurred or not

Without error handling:
age = int(input("Enter age: "))  crashes if user types hello

With error handling:
try:
    age = int(input("Enter age: "))
    print(f"You are {age} years old")
except ValueError:
    print("Please enter a number")

Common exception types:
ValueError when converting wrong type, for example int("hello").
ZeroDivisionError when dividing by zero.
FileNotFoundError when opening a file that does not exist.
IndexError when accessing a list index that does not exist.
KeyError when accessing a dictionary key that does not exist.

Always catch SPECIFIC exceptions. Bare except catches everything including Ctrl+C and memory errors, which hides real problems.

The finally block runs no matter what — useful for cleanup like closing files. The with open() statement handles cleanup automatically, which is why it is preferred.

Raising your own exceptions:
raise ValueError("Score must be between 0 and 100")`,
        code:`def divide(a, b):\n    try:\n        result = a / b\n        print(f"{a} / {b} = {result:.2f}")\n    except ZeroDivisionError:\n        print("Error: Cannot divide by zero!")\n    except ValueError:\n        print("Error: Invalid numbers.")\n    finally:\n        print("Calculation attempted.")\n\n# Copperbelt yield calculator\ndivide(1000, 4)   # OK\ndivide(500, 0)    # Caught!`,
        explanation:"try runs the risky code. except catches specific error types. finally always runs. This prevents crashes and gives helpful error messages.",
        ecz:"Exception handling appears in Form 4. Know try/except/finally. Common question: handle ZeroDivisionError or ValueError when converting input to int. Always use specific exception types.",
        question:{text:"What is printed when divide(500, 0) is called?",options:["The program crashes","Error: Cannot divide by zero!","0.00","Nothing"],answer:1,hint:"Dividing by zero raises ZeroDivisionError — caught by the except block."},
        q2:{text:"What is the purpose of the finally: block in try/except?",options:["Runs only if no error","Runs only if error occurs","Always runs whether or not an error occurred","Re-raises the exception"],answer:2,hint:"finally: runs no matter what — useful for cleanup like closing files."},
        q3:{text:"What happens if you write except: with no exception type specified?",options:["Only catches ValueError","SyntaxError","Catches ALL exceptions including unexpected ones","Only catches RuntimeError"],answer:2,hint:"Bare except: catches everything — including typos in variable names (NameError). Always specify the type."},
        trace:[
    {line:1, explanation:"def divide(a, b): — function defined.", vars:{}, output:null},
    {line:5, explanation:"divide(500, 0) called. a=500, b=0. Enters try block.", vars:{a:500, b:0}, output:null},
    {line:3, explanation:"result = 500 / 0 — ZeroDivisionError raised! Python immediately jumps out of try.", vars:{a:500, b:0, error:"ZeroDivisionError"}, output:null},
    {line:5, explanation:"except ZeroDivisionError: matches the error. Enters except block.", vars:{}, output:null},
    {line:6, explanation:"print('Error: Cannot divide by zero!') executes.", vars:{}, output:"Error: Cannot divide by zero!"},
    {line:7, explanation:"finally: always runs regardless. print('Done.') executes.", vars:{}, output:"Error: Cannot divide by zero!\nDone."}
  ],
        worked:{
  scenario:"A Zambian geography app stores province populations for quick lookup.",
  problem:"Create a dictionary with 3 provinces and populations. Add Northern Province. Print each province and its population using a loop.",
  steps:[
    {explain:"Create the dictionary with province names as keys.", code:"provinces = {\n    'Lusaka': 3360000,\n    'Copperbelt': 2280000,\n    'Southern': 1860000\n}"},
    {explain:"Add a new key-value pair for Northern Province.", code:"provinces['Northern'] = 1200000"},
    {explain:"Loop through all entries using .items().", code:"for province, pop in provinces.items():\n    print(f'{province}: {pop:,} people')"}
  ],
  answer:"Prints 4 lines with formatted populations (comma-separated numbers).",
  answerCode:"provinces = {'Lusaka':3360000,'Copperbelt':2280000,'Southern':1860000}\nprovinces['Northern'] = 1200000\nfor province, pop in provinces.items():\n    print(f'{province}: {pop:,} people')",
  insight:"{pop:,} in an f-string formats the number with commas: 3360000 → 3,360,000. .items() returns (key, value) pairs — perfect for looping through a dictionary."
},
      },
      {
        id:"py9", title:"List Comprehensions", form:4,
        lesson:`A list comprehension is a compact, Pythonic way to create a new list by applying an expression to each item in an existing sequence, with optional filtering.

Traditional for loop approach:
passing = []
for mark in marks:
    if mark >= 50:
        passing.append(mark)

Equivalent list comprehension on one line:
passing = [mark for mark in marks if mark >= 50]

The general format is: [expression for item in iterable if condition]

The if condition is optional — leave it out to transform ALL items:
squared = [x**2 for x in range(10)]
doubled = [x*2 for x in marks]
upper_names = [n.upper() for n in names]

With filtering:
passing = [m for m in marks if m >= 50]
evens = [x for x in range(20) if x%2==0]

Nested comprehension to flatten a 2D list:
flat = [x for row in matrix for x in row]

List comprehension vs generator expression:
[x**2 for x in range(10)] creates the full list immediately and uses memory.
(x**2 for x in range(10)) is a lazy generator that computes one value at a time and uses very little memory.

Use comprehensions when the transformation is simple enough to read in one line. If the logic is complex, a regular for loop is clearer.`,
        code:`# Student marks at Evelyn Hone College\nmarks = [55, 78, 42, 91, 63, 38, 85]\n\n# Traditional loop\npassing = []\nfor m in marks:\n    if m >= 50:\n        passing.append(m)\n\n# List comprehension (same result!)\npassing2 = [m for m in marks if m >= 50]\nscaled   = [round(m * 1.1, 1) for m in marks]\n\nprint("Passing:", passing2)\nprint("Scaled: ", scaled)`,
        explanation:"[m for m in marks if m >= 50] creates a list of only passing marks in one line. [round(m*1.1,1) for m in marks] gives everyone a 10% bonus.",
        ecz:"List comprehensions are tested as a one-line alternative to a for loop. Expect: rewrite a for loop as a comprehension, or trace what [x*2 for x in range(5)] produces.",
        question:{text:"What does [x*2 for x in [1, 2, 3]] produce?",options:["[1, 2, 3]","[2, 4, 6]","[1, 4, 9]","[2, 3, 4]"],answer:1,hint:"Multiply each element by 2: 1×2=2, 2×2=4, 3×2=6."},
        q2:{text:"What does [x for x in range(10) if x % 2 == 0] produce?",options:["[1,3,5,7,9]","[0,2,4,6,8]","[0,1,2,3,4,5,6,7,8,9]","[2,4,6,8,10]"],answer:1,hint:"x%2==0 is True for even numbers. range(10) is 0-9. Even numbers: 0,2,4,6,8."},
        q3:{text:"What is the difference between [x**2 for x in range(5)] and (x**2 for x in range(5))?",options:["No difference","[] creates list immediately; () creates lazy generator","() creates a tuple","[] is faster"],answer:1,hint:"[] is a list comprehension — all values computed now. () is a generator expression — lazy, one at a time."},
        trace:[
    {line:1, explanation:"marks = [55, 78, 42, 91, 62] — original list.", vars:{marks:"[55,78,42,91,62]"}, output:null},
    {line:2, explanation:"passing = [m for m in marks if m >= 50] — evaluates each element: 55✓ 78✓ 42✗ 91✓ 62✓.", vars:{passing:"[55,78,91,62]"}, output:null},
    {line:3, explanation:"scaled = [m + 5 for m in passing] — adds 5 to each: 60,83,96,67.", vars:{scaled:"[60,83,96,67]"}, output:null},
    {line:4, explanation:"print(passing) — outputs the filtered list.", vars:{passing:"[55,78,91,62]"}, output:"[55, 78, 91, 62]"},
    {line:5, explanation:"print(scaled) — outputs the scaled list.", vars:{scaled:"[60,83,96,67]"}, output:"[55, 78, 91, 62]\n[60, 83, 96, 67]"}
  ],
        worked:{
  scenario:"A Form 4 teacher saves ECZ student results to a CSV file.",
  problem:"Write student data (name, score, grade) to 'ecz.txt'. Read it back and print only students who passed (score >= 50).",
  steps:[
    {explain:"Open file for writing and write a header plus 3 student records.", code:"with open('ecz.txt', 'w') as f:\n    f.write('Chanda,88,Pass\n')\n    f.write('Bupe,45,Fail\n')\n    f.write('Mwamba,72,Pass\n')"},
    {explain:"Reopen for reading and process line by line.", code:"with open('ecz.txt', 'r') as f:\n    for line in f:"},
    {explain:"Split each line by comma and filter passing students.", code:"        parts = line.strip().split(',')\n        if parts[2] == 'Pass':\n            print(f'{parts[0]}: {parts[1]}')"}
  ],
  answer:"Prints: Chanda: 88 / Mwamba: 72 (Bupe is excluded as Fail)",
  answerCode:"with open('ecz.txt','w') as f:\n    f.write('Chanda,88,Pass\n')\n    f.write('Bupe,45,Fail\n')\n    f.write('Mwamba,72,Pass\n')\nwith open('ecz.txt','r') as f:\n    for line in f:\n        parts = line.strip().split(',')\n        if parts[2]=='Pass':\n            print(f'{parts[0]}: {parts[1]}')",
  insight:".strip() removes the trailing newline character before .split(','). Without strip(), the last field would be 'Pass\n' which would not equal 'Pass'."
},
      },
      {
        id:"py10", title:"Tuples & Sets", form:3,
        lesson:`Python has two more important collection types: tuples and sets.

TUPLES are ordered, IMMUTABLE collections. Once created, you cannot change the values.
lusaka = (-15.4166, 28.2833)    stores GPS coordinates
print(lusaka[0])                 prints -15.4166

Tuples use () brackets and you access them by index just like lists.

Why use tuples instead of lists? Immutability is the key:
GPS coordinates should not accidentally change.
RGB colour values like (255, 128, 0) should stay fixed.
Days of the week are constant.
Tuples can be dictionary keys — lists cannot.

Tuple unpacking:
lat, lon = (-15.4166, 28.2833)
x, y, z = (1, 2, 3)

SETS are unordered collections of UNIQUE values.
visited = {"Lusaka", "Copperbelt", "Southern"}
visited.add("Eastern")           adds a new item
visited.add("Lusaka")            does nothing — Lusaka is already present
print(len(visited))              prints 4 (Lusaka counted only once)

Sets automatically remove duplicates.

Set operations:
A | B gives the union — all items in either A or B.
A & B gives the intersection — items in BOTH A and B.
A - B gives the difference — items in A but not in B.

Use sets for: checking membership efficiently, removing duplicates from a list, and mathematical set operations.`,
        code:`# Tuple — fixed Zambia coordinates\nlusaka_coords = (-15.4166, 28.2833)\nprint("Lusaka:", lusaka_coords)\nprint("Latitude:", lusaka_coords[0])\n\n# Set — unique provinces visited\nvisited = {"Lusaka", "Copperbelt", "Lusaka", "Southern"}\nprint("Unique provinces:", visited)\n\n# Set operations\ncopperbelt_towns = {"Ndola", "Kitwe", "Chingola"}\nmore_towns = {"Mufulira", "Kitwe", "Luanshya"}\nall_towns = copperbelt_towns | more_towns   # union\ncommon   = copperbelt_towns & more_towns   # intersection\nprint("All towns:", all_towns)\nprint("Common:  ", common)`,
        explanation:"Tuples use () and cannot be modified. Sets use {} and automatically remove duplicates. | gives all items from both sets (union). & gives only shared items (intersection).",
        question:{text:"What does the visited set contain after adding 'Lusaka' twice?",options:["{'Lusaka','Lusaka','Copperbelt','Southern'}","{'Lusaka','Copperbelt','Southern'}","Error — duplicates not allowed","An empty set"],answer:1,hint:"Sets automatically discard duplicates. Lusaka appears only once."},
        q2:{text:"Why can you use a tuple as a dictionary key but not a list?",options:["Tuples are smaller","Tuples are immutable so their hash never changes","Lists are unordered","Python convention only"],answer:1,hint:"Dictionary keys must be hashable (immutable). Lists can change so they cannot be hashed."},
        worked:{scenario:"A Zambian travel tracker records visited provinces.",problem:"Store Lusaka coords as a tuple. Create a set of visited provinces. Add Eastern. Print coord and province count.",steps:[{explain:"Tuple for coordinates (immutable).",code:"lusaka = (-15.4166, 28.2833)"},{explain:"Set auto-removes duplicates.",code:"visited = {'Lusaka', 'Copperbelt', 'Lusaka', 'Southern'}"},{explain:"Add Eastern and print.",code:"visited.add('Eastern'); print(lusaka); print(len(visited))"}],answer:"(-15.4166, 28.2833) / 4",answerCode:"lusaka=(-15.4166,28.2833); visited={'Lusaka','Copperbelt','Lusaka','Southern'}; visited.add('Eastern'); print(lusaka); print(len(visited))",insight:"The set starts with Lusaka appearing twice but auto-deduplicates to 3 items. After add('Eastern') it becomes 4 unique provinces."},
        trace:[
    {line:1, explanation:"coords = (-15.4166, 28.2833) — tuple created. Tuples use () and are immutable.", vars:{coords:"(-15.4166, 28.2833)"}, output:null},
    {line:2, explanation:"lat, lon = coords — tuple unpacking. lat=-15.4166, lon=28.2833 in one line.", vars:{lat:-15.4166, lon:28.2833}, output:null},
    {line:3, explanation:"visited = {'Lusaka','Copperbelt','Lusaka','Southern'} — set created. Duplicate 'Lusaka' automatically removed.", vars:{visited:"{'Lusaka','Copperbelt','Southern'}", len:3}, output:null},
    {line:4, explanation:"visited.add('Eastern') — adds new unique element.", vars:{visited:"{'Lusaka','Copperbelt','Southern','Eastern'}", len:4}, output:null},
    {line:5, explanation:"print(len(visited)) — 4 unique elements.", vars:{len:4}, output:"4"},
    {line:6, explanation:"print(lat, lon) — prints the unpacked coordinates.", vars:{lat:-15.4166, lon:28.2833}, output:"4\n-15.4166 28.2833"}
  ],
        q3:{text:"What does {1,2,3} & {2,3,4} return?",options:["{1,2,3,4}","{2,3}","{1,4}","{1,2,3,2,3,4}"],answer:1,hint:"& is set intersection — returns only elements in BOTH sets."}
      },
      {
        id:"py11", title:"Classes & OOP", form:4,
        lesson:`Python supports Object-Oriented Programming with the class keyword. OOP organises code around objects — data structures combining attributes (data) with methods (behaviour).

Defining a class:
class Student:
    def __init__(self, name, form, score):
        self.name = name
        self.form = form
        self.score = score

    def grade(self):
        if self.score >= 80: return "Distinction"
        elif self.score >= 65: return "Merit"
        elif self.score >= 50: return "Credit"
        else: return "Fail"

Key concepts:
__init__ is the constructor. It runs automatically when you create an object. The double underscores make it a special dunder method.
self refers to the current object. Every method must have self as its first parameter. Python passes it automatically when you call the method.
self.attribute = value creates an instance variable. Each object has its own separate copy.

Creating objects:
s1 = Student("Chileshe", 4, 87)
s2 = Student("Bupe", 3, 52)
print(s1.grade())    prints Distinction
print(s2.score)      prints 52

__str__ defines what print(object) displays:
def __str__(self):
    return f"{self.name}: {self.grade()}"

OOP principles: encapsulation bundles data and methods together. Inheritance with class Prefect(Student) allows a child class to inherit from a parent. Polymorphism lets different classes have methods with the same name.`,
        code:`class Student:\n    def __init__(self, name, form, score):\n        self.name  = name\n        self.form  = form\n        self.score = score\n\n    def grade(self):\n        if self.score >= 80:   return "Distinction"\n        elif self.score >= 65: return "Merit"\n        elif self.score >= 50: return "Credit"\n        else:                  return "Fail"\n\n    def __str__(self):\n        return f"{self.name} (Form {self.form}): {self.grade()}"\n\n# Students at Chifundo Secondary, Eastern Province\ns1 = Student("Chileshe Mwamba", 4, 87)\ns2 = Student("Bupe Zulu", 3, 52)\nprint(s1)\nprint(s2)\nprint("Score:", s1.score)`,
        explanation:"__init__ sets up the object's attributes. self.name stores the name for each object. __str__ defines what print(object) shows. Methods are called with object.method().",
        ecz:"OOP with __init__ and self is a Form 4 exam staple. Expect: write a class, create an object, call a method. Know that self refers to the current object. __str__ for display is also tested.",
        question:{text:"What grade does Bupe Zulu (score 52) receive?",options:["Distinction","Merit","Credit","Fail"],answer:2,hint:"52 is ≥50 but not ≥65. Which grade does that match?"},
        q2:{text:"What does 'self' refer to inside a Python class method?",options:["The class itself","The current object instance","The parent class","The return value"],answer:1,hint:"self is a reference to the specific object the method is being called on."},
        q3:{text:"What is the purpose of __str__(self) in a Python class?",options:["Converts class to a string type","Defines what print(object) displays","It is the constructor","Deletes the object"],answer:1,hint:"__str__ is called automatically when you use print() or str() on an object."},
        trace:[
    {line:1, explanation:"class Student: — blueprint defined. No object created yet.", vars:{}, output:null},
    {line:7, explanation:"s = Student('Bupe Zulu', 52) — __init__ called. self.name='Bupe Zulu', self.score=52.", vars:{"s.name":"Bupe Zulu", "s.score":52}, output:null},
    {line:8, explanation:"s.get_grade() called. self.score=52. 52>=80? No. 52>=65? No. 52>=50? Yes → 'Credit'.", vars:{"s.score":52, returns:"Credit"}, output:null},
    {line:9, explanation:"print(s.name, '-', s.get_grade()) — prints name and grade.", vars:{}, output:"Bupe Zulu - Credit"},
    {line:10, explanation:"print(str(s)) calls __str__. Returns formatted string.", vars:{}, output:"Bupe Zulu - Credit\nStudent: Bupe Zulu, Score: 52, Grade: Credit"}
  ],
        worked:{
  scenario:"A Zambian mobile money app must handle invalid inputs gracefully.",
  problem:"Write a function safe_transfer(amount_str) that converts a string to float and returns it. If conversion fails, return 0.0 and print an error.",
  steps:[
    {explain:"Define the function with a try block to attempt the conversion.", code:"def safe_transfer(amount_str):\n    try:\n        amount = float(amount_str)\n        return amount"},
    {explain:"Catch ValueError if the string is not a valid number.", code:"    except ValueError:\n        print(f'Error: \"{amount_str}\" is not a valid amount.')\n        return 0.0"},
    {explain:"Test with both valid and invalid inputs.", code:"print(safe_transfer('250.50'))\nprint(safe_transfer('abc'))"}
  ],
  answer:"250.5 / Error: 'abc' is not a valid amount. / 0.0",
  answerCode:"def safe_transfer(amount_str):\n    try:\n        return float(amount_str)\n    except ValueError:\n        print(f'Error: \"{amount_str}\" is not a valid amount.')\n        return 0.0\nprint(safe_transfer('250.50'))\nprint(safe_transfer('abc'))",
  insight:"Always use specific exception types (ValueError, ZeroDivisionError) rather than bare except. A bare except: would catch even KeyboardInterrupt when the user presses Ctrl+C."
},
      },
      {
        id:"py12", title:"Recursion", form:4,
        lesson:`Recursion is a technique where a function solves a problem by calling itself. Each call works on a smaller version of the problem until it reaches a base case — a simple situation that can be solved directly without further recursion.

The two rules of recursion:
1. BASE CASE: a condition that returns a value WITHOUT calling the function again
2. RECURSIVE CASE: calls the function with a simpler input, moving closer to the base case

def factorial(n):
    if n <= 1:          # base case
        return 1
    return n * factorial(n - 1)  # recursive case

Tracing factorial(4) step by step:
factorial(4) calls factorial(3) and waits
  factorial(3) calls factorial(2) and waits
    factorial(2) calls factorial(1) and waits
      factorial(1) returns 1 — BASE CASE reached
    factorial(2) returns 2 times 1 = 2
  factorial(3) returns 3 times 2 = 6
factorial(4) returns 4 times 6 = 24

Python limits recursion to 1000 calls by default to prevent infinite recursion from crashing the system.

Recursion vs iteration: any recursive function can be written as a loop. Recursion is more elegant for naturally recursive problems like trees and mathematical sequences, but loops use less memory.

Memoisation stores previously computed results to avoid recalculating them. Python's functools.lru_cache decorator adds memoisation automatically.`,
        code:`def factorial(n):\n    if n <= 1:              # base case\n        return 1\n    return n * factorial(n - 1)  # recursive case\n\ndef countdown(n):\n    if n == 0:\n        print("Go Chipolopolo!")\n        return\n    print(f"Kickoff in {n}...")\n    countdown(n - 1)\n\n# Factorial: ways to arrange 5 Zambian provinces\nprint(f"5! = {factorial(5)}")\nprint(f"4! = {factorial(4)}")\ncountdown(3)`,
        explanation:"factorial(5) calls factorial(4), then factorial(3)... until factorial(1)=1. Results multiply back: 1×2×3×4×5=120. countdown decreases n each time until it hits 0.",
        ecz:"Recursion in Python always uses factorial or Fibonacci as examples. Know: base case (if n<=1 return 1), recursive case (return n * factorial(n-1)). Expect to trace the call stack.",
        question:{text:"What does factorial(4) return?",options:["4","8","24","16"],answer:2,hint:"4 × 3 × 2 × 1 = ?"},
        q2:{text:"What is Python's default recursion depth limit?",options:["100","1000","10000","Unlimited"],answer:1,hint:"Python's default is 1000 recursive calls. Raise with sys.setrecursionlimit(n)."},
        q3:{text:"What does memoisation do in recursive fibonacci()?",options:["Stores results so they aren't recalculated","Converts recursion to a loop","Limits recursion depth","Uses less memory"],answer:0,hint:"Without memoisation fibonacci(50) recalculates billions of values. Memoisation caches each result."},
        trace:[
    {line:2, explanation:"factorial(4) called. n=4. Is n<=1? No. Must compute 4 * factorial(3).", vars:{n:4, status:"waiting..."}, output:null},
    {line:2, explanation:"factorial(3): 3<=1? No. Calls factorial(2).", vars:{n:3, status:"waiting..."}, output:null},
    {line:2, explanation:"factorial(2): 2<=1? No. Calls factorial(1).", vars:{n:2, status:"waiting..."}, output:null},
    {line:2, explanation:"factorial(1): 1<=1? YES — BASE CASE. return 1.", vars:{n:1, returns:1}, output:null},
    {line:2, explanation:"factorial(2) resumes: return 2 * 1 = 2.", vars:{n:2, returns:2}, output:null},
    {line:2, explanation:"factorial(3) resumes: return 3 * 2 = 6.", vars:{n:3, returns:6}, output:null},
    {line:2, explanation:"factorial(4) resumes: return 4 * 6 = 24.", vars:{n:4, returns:24}, output:null},
    {line:10, explanation:"print(f'4! = {factorial(4)}') → 4! = 24.", vars:{}, output:"4! = 24"}
  ],
        worked:{
  scenario:"A school data analyst filters and transforms ECZ marks with one-liners.",
  problem:"From marks [45, 78, 32, 91, 62, 55, 88], create two lists: one with only passing marks (>=50), and one with each passing mark converted to a letter grade (>=80='A', else 'B').",
  steps:[
    {explain:"Original list.", code:"marks = [45, 78, 32, 91, 62, 55, 88]"},
    {explain:"Filter to passing marks using a list comprehension with an if clause.", code:"passing = [m for m in marks if m >= 50]\n# [78, 91, 62, 55, 88]"},
    {explain:"Map passing marks to letter grades using a conditional expression.", code:"grades = ['A' if m >= 80 else 'B' for m in passing]\n# ['B', 'A', 'B', 'B', 'A']\nprint(passing)\nprint(grades)"}
  ],
  answer:"[78, 91, 62, 55, 88] / ['B', 'A', 'B', 'B', 'A']",
  answerCode:"marks = [45,78,32,91,62,55,88]\npassing = [m for m in marks if m >= 50]\ngrades  = ['A' if m >= 80 else 'B' for m in passing]\nprint(passing)\nprint(grades)",
  insight:"List comprehensions replace multi-line for loops with a single readable expression. [expr for item in iterable if condition] — the if part is optional filtering."
},
      },
      {
        id:"py13", title:"Modules & Libraries", form:4,
        lesson:`Python's strength comes partly from its huge library of pre-built modules — collections of functions and tools you can import and use immediately without writing everything from scratch.

Importing modules:
import math imports the whole module.
from math import sqrt imports only the sqrt function.
import math as m imports with an alias so you use m.sqrt instead.

Key built-in modules:

math:
math.sqrt(144) returns 12.0
math.pi returns 3.14159
math.ceil(4.2) returns 5 (round up)
math.floor(4.8) returns 4 (round down)
math.pow(2, 8) returns 256

random:
random.randint(1, 100) gives a random integer between 1 and 100 inclusive.
random.random() gives a random float between 0 and 1.
random.choice(["A","B","C"]) picks one random item from a list.
random.shuffle(my_list) shuffles the list in place.
random.sample(my_list, 5) picks 5 unique random items.

datetime:
from datetime import datetime
now = datetime.now() gives the current date and time.
now.year, now.month, now.day accesses individual components.
now.strftime("%d %B %Y") formats as 15 January 2025.

os:
os.getcwd() gives the current working directory.
os.listdir(".") lists files in the current directory.
os.path.exists("file.txt") checks if a file exists.`,
        code:`import math\nimport random\nfrom datetime import datetime\n\n# Math module — mine shaft depth\ndepth = 850  # metres, Nchanga Open Pit\nprint(f"Shaft depth: {depth}m")\nprint(f"Square root: {math.sqrt(depth):.2f}")\nprint(f"Pi: {math.pi:.4f}")\n\n# Random — simulate ECZ exam question draw\nquestions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\nselected = random.sample(questions, 5)\nprint(f"Selected questions: {sorted(selected)}")\n\n# Datetime\nnow = datetime.now()\nprint(f"Exam date: {now.strftime('%d %B %Y')}")`,
        explanation:"import math loads the math module. math.sqrt() computes square roots. random.sample() picks unique random items without repeating. datetime.now() gets the current date and time.",
        question:{text:"Which module provides the random.sample() function?",options:["math","os","random","datetime"],answer:2,hint:"The function is called as random.sample() — the module name comes first."},
        q2:{text:"What is the difference between 'import math' and 'from math import sqrt'?",options:["No difference","import math requires math.sqrt(); from math import sqrt lets you call sqrt() directly","from math import is slower","import math only imports sqrt"],answer:1,hint:"import math loads the module — use math.sqrt(). from math import sqrt brings sqrt directly into scope."},
        q3:{text:"What does datetime.now().strftime('%d %B %Y') produce?",options:["A timestamp number","A formatted date string like '15 January 2025'","An error","The time in seconds"],answer:1,hint:"strftime formats a datetime. %d=day, %B=full month name, %Y=4-digit year."},
        trace:[
    {line:1, explanation:"import math — loads the math module. math.sqrt, math.pi etc are now available.", vars:{modules:["math"]}, output:null},
    {line:2, explanation:"import random — loads random module.", vars:{modules:["math","random"]}, output:null},
    {line:5, explanation:"print(math.sqrt(144)) — math.sqrt(144) = 12.0.", vars:{}, output:"12.0"},
    {line:6, explanation:"print(math.pi) — pi constant from math module.", vars:{}, output:"12.0\n3.141592653589793"},
    {line:7, explanation:"print(randint(1, 100)) — random integer between 1 and 100 (inclusive). Result varies.", vars:{}, output:"12.0\n3.141592653589793\n(random 1-100)"},
    {line:8, explanation:"print(choice(['Lusaka','Ndola','Kitwe'])) — randomly picks one city.", vars:{}, output:"12.0\n3.141592...\n(random)\n(random city)"}
  ],
        worked:{
  scenario:"A Zambian travel tracker records visited provinces and GPS coordinates.",
  problem:"Store Lusaka's coordinates as a tuple. Create a set of visited provinces. Add 'Eastern' to the set. Print coordinates and unique province count.",
  steps:[
    {explain:"Tuples use () and are immutable — good for fixed coordinates.", code:"lusaka = (-15.4166, 28.2833)"},
    {explain:"Sets use {} and auto-remove duplicates. Add Lusaka twice to demonstrate.", code:"visited = {'Lusaka', 'Copperbelt', 'Lusaka', 'Southern'}\n# 'Lusaka' appears only once"},
    {explain:"Add Eastern Province and print stats.", code:"visited.add('Eastern')\nprint(f'Coordinates: {lusaka}')\nprint(f'Provinces visited: {len(visited)}')"}
  ],
  answer:"Coordinates: (-15.4166, 28.2833) / Provinces visited: 4",
  answerCode:"lusaka = (-15.4166, 28.2833)\nvisited = {'Lusaka', 'Copperbelt', 'Lusaka', 'Southern'}\nvisited.add('Eastern')\nprint(f'Coordinates: {lusaka}')\nprint(f'Provinces visited: {len(visited)}')",
  insight:"The set starts with {'Lusaka','Copperbelt','Lusaka','Southern'} — 4 items but duplicate Lusaka is removed automatically, giving 3. After add('Eastern') it's 4."
},
      },
      {
        id:"py14", title:"Sorting & Searching", form:4,
        lesson:`Sorting and searching are fundamental operations on collections. Python provides powerful, flexible tools for both.

SORTING:
sorted(iterable) returns a NEW sorted list, leaving the original unchanged.
list.sort() sorts the list IN PLACE, modifying the original, and returns None.

marks = [78, 45, 91, 63, 55]
sorted_marks = sorted(marks)    gives [45, 55, 63, 78, 91] — marks is unchanged.
marks.sort()                     now marks itself is sorted.

Descending order: sorted(marks, reverse=True) gives [91, 78, 63, 55, 45].

Sorting by a custom key using lambda:
students = [{"name":"Chanda","score":78}, {"name":"Bupe","score":91}]
sorted_by_score = sorted(students, key=lambda s: s["score"], reverse=True)
This puts Bupe (91) first then Chanda (78).

lambda is a mini function written inline. lambda s: s["score"] is equivalent to writing def f(s): return s["score"]

Python's sorting algorithm called Timsort is very efficient for real-world data.

SEARCHING:
Linear search: for item in data: if item == target

in operator for simple membership test: if "Lusaka" in provinces

index() method to find position: marks.index(91) returns the position of 91.

max() and min() with key:
top_student = max(students, key=lambda s: s["score"]) returns the student dict with the highest score.`,
        code:`# Zambian student exam results\nstudents = [\n    {"name": "Mwamba", "score": 78},\n    {"name": "Chilufya", "score": 92},\n    {"name": "Bwalya",  "score": 55},\n    {"name": "Monde",   "score": 88},\n]\n\n# Sort by score descending (top to bottom)\nranked = sorted(students, key=lambda s: s["score"], reverse=True)\nprint("=== Rankings ===")\nfor i, s in enumerate(ranked, 1):\n    print(f"{i}. {s['name']}: {s['score']}")\n\n# Linear search — find a student\ntarget = "Bwalya"\nfor s in students:\n    if s["name"] == target:\n        print(f"Found: {s['name']} scored {s['score']}")`,
        explanation:"sorted() with key=lambda sorts by a specific field. lambda s: s['score'] is a short function that returns the score for comparison. Linear search checks each item until found.",
        ecz:"Sorting is tested with sorted() and list.sort(). Know the difference: sorted() returns a new list, .sort() modifies in place. Expect to sort a list of dictionaries by a key using lambda.",
        question:{text:"After sorting by score descending, who appears first (rank 1)?",options:["Mwamba","Chilufya","Bwalya","Monde"],answer:1,hint:"The highest score is ranked 1. Who has the highest score?"},
        q2:{text:"What does max(students, key=lambda s: s['score']) return?",options:["The highest score number","The student dictionary with the highest score","A sorted list","The index of the top student"],answer:1,hint:"max() with key= returns the ITEM (the whole dictionary) for which the key is largest."},
        q3:{text:"What is the time complexity of Python's built-in sorted() function?",options:["O(n)","O(n²) like bubble sort","O(n log n)","O(log n)"],answer:2,hint:"Python uses Timsort — an optimised O(n log n) algorithm, much faster than bubble sort's O(n²)."},
        trace:[
    {line:1, explanation:"students list with 3 dicts — each has name and score.", vars:{students:"3 students"}, output:null},
    {line:5, explanation:"ranked = sorted(students, key=lambda s: s['score'], reverse=True) — lambda extracts score. reverse=True = descending.", vars:{sorted_scores:"92,88,72"}, output:null},
    {line:6, explanation:"ranked is now [Chilufya:92, Mwamba:88, Bwalya:72].", vars:{ranked:"[Chilufya,Mwamba,Bwalya]"}, output:null},
    {line:7, explanation:"for i, s in enumerate(ranked, 1) — enumerate starts at 1 for rank display.", vars:{i:1, s:"Chilufya:92"}, output:null},
    {line:8, explanation:"print(f'{i}. {s[name]} - {s[score]}') — prints rank 1.", vars:{}, output:"1. Chilufya - 92"},
    {line:7, explanation:"Continues for rank 2 and 3.", vars:{}, output:"1. Chilufya - 92\n2. Mwamba - 88\n3. Bwalya - 72"}
  ],
        worked:{
  scenario:"A school system models students with automatic grade calculation.",
  problem:"Create a Student class with name and score. Add a grade() method returning 'Distinction' (>=80), 'Merit' (>=65), 'Credit' (>=50), or 'Fail'. Add __str__ for display. Test with Chileshe (score=87).",
  steps:[
    {explain:"Define the class with __init__ to set attributes.", code:"class Student:\n    def __init__(self, name, score):\n        self.name = name\n        self.score = score"},
    {explain:"Add a grade method using if/elif/else.", code:"    def grade(self):\n        if self.score >= 80:   return 'Distinction'\n        elif self.score >= 65: return 'Merit'\n        elif self.score >= 50: return 'Credit'\n        else:                  return 'Fail'"},
    {explain:"Add __str__ for clean printing, then test.", code:"    def __str__(self):\n        return f'{self.name}: {self.grade()}'\ns = Student('Chileshe', 87)\nprint(s)"}
  ],
  answer:"Chileshe: Distinction",
  answerCode:"class Student:\n    def __init__(self, name, score):\n        self.name=name; self.score=score\n    def grade(self):\n        if self.score>=80: return 'Distinction'\n        elif self.score>=65: return 'Merit'\n        elif self.score>=50: return 'Credit'\n        else: return 'Fail'\n    def __str__(self): return f'{self.name}: {self.grade()}'\nprint(Student('Chileshe', 87))",
  insight:"__str__ is called automatically when you print() an object. Without it, print(s) would display something like <__main__.Student object at 0x...> — not useful."
},
      },
      {
        id:"py15", title:"Regular Expressions", form:4,
        lesson:`Regular expressions (regex) are powerful patterns for searching, validating, and extracting text. They let you describe the PATTERN of text you are looking for, not just exact matches.

Python's re module provides regex functionality:
import re

Key functions:
re.match(pattern, string) checks if pattern matches at the START of string.
re.search(pattern, string) searches anywhere in string for a match.
re.findall(pattern, string) returns a list of ALL non-overlapping matches.
re.sub(pattern, replacement, string) replaces all matches with replacement.

Pattern building blocks:
. matches any single character.
\\d matches any digit (0-9).
\\w matches any word character (letters, digits, underscore).
\\s matches any whitespace character.
^ matches start of string and $ matches end of string.
+ means one or more, * means zero or more.
{n} means exactly n repetitions.
[abc] matches any of a, b, or c.

Zambian phone number pattern: ^0[679]\\d{8}$
This matches: starts with 0, then 6 or 7 or 9, then exactly 8 more digits, then end.

Why use regex?
Validate email addresses and phone numbers.
Extract all prices from a document.
Find all dates in a text file.
Replace all occurrences of a pattern.

Build patterns step by step and test each part separately. Regex is extremely powerful once mastered.`,
        code:`import re\n\n# Validate Zambian phone numbers (e.g. 0971234567)\ndef validate_phone(number):\n    pattern = r'^0[679]\\d{8}$'\n    if re.match(pattern, number):\n        return f"{number} is a valid Zambian number"\n    return f"{number} is NOT valid"\n\n# Test numbers\nphones = ["0971234567", "0761234567", "1234567890", "097123"]\nfor p in phones:\n    print(validate_phone(p))\n\n# Extract all numbers from a text\ntext = "Call Airtel on 0977 123456 or MTN on 0961 654321"\nnumbers = re.findall(r'\\d{4}\\s\\d{6}', text)\nprint("Found:", numbers)`,
        explanation:"r'^0[679]\\d{8}$' matches strings starting with 0, then 6/7/9, then exactly 8 digits. re.match() checks from the start. re.findall() returns all matches in a string.",
        question:{text:"Which of these matches the Zambian phone pattern ^0[679]\\d{8}$?",options:["1234567890","0971234567","097123","0812345678"],answer:1,hint:"Must start with 0, then 6, 7, or 9, then exactly 8 more digits."},
        q2:{text:"What is the difference between re.match() and re.search()?",options:["Identical","re.match() only checks the start; re.search() looks anywhere","re.search() is faster","re.match() returns all matches"],answer:1,hint:"re.match() anchors to the start. re.search() scans the whole string for any match."},
        q3:{text:"What does re.findall(r'\\d+', 'Order: 3 bags, 12 tins') return?",options:["'3 bags, 12 tins'","['3','12']","[3,12]","'3','12'"],answer:1,hint:"findall returns a list of all matches as strings. \\d+ matches one or more digits."},
        trace:[
    {line:1, explanation:"import re — loads the regular expressions module.", vars:{}, output:null},
    {line:4, explanation:"pattern = r'^0[679]\d{8}$' — r string prevents backslash escaping. ^ = start, 0 = literal, [679] = one of 6/7/9, \d{8} = 8 digits, $ = end.", vars:{pattern:"^0[679]\d{8}$"}, output:null},
    {line:5, explanation:"validate_phone('0971234567') called. re.match tests against pattern.", vars:{number:"0971234567"}, output:null},
    {line:6, explanation:"Match: 0✓ 9✓ (in [679]) 71234567✓ (8 digits). Pattern matches! Returns valid message.", vars:{number:"0971234567"}, output:"0971234567 is a valid Zambian number"},
    {line:5, explanation:"validate_phone('1234567890') — does not start with 0. Pattern fails.", vars:{number:"1234567890"}, output:"0971234567 is a valid Zambian number\n1234567890 is NOT valid"},
    {line:9, explanation:"re.findall finds all matches of \d{4}\s\d{6} in the text string.", vars:{}, output:"...\nFound: ['0977 123456', '0961 654321']"}
  ],
        worked:{
  scenario:"A Zambian admin system counts combinations — how many ways to arrange items.",
  problem:"Write a recursive factorial(n) function. Use it to calculate how many ways 5 Zambian provinces can be ranked in a list.",
  steps:[
    {explain:"Base case: factorial of 0 or 1 is 1.", code:"def factorial(n):\n    if n <= 1:\n        return 1"},
    {explain:"Recursive case: n! = n × (n-1)!", code:"    return n * factorial(n - 1)"},
    {explain:"Calculate and print 5! (arrangements of 5 provinces).", code:"result = factorial(5)\nprint(f'Ways to rank 5 provinces: {result}')"}
  ],
  answer:"5! = 5×4×3×2×1 = 120. Prints: Ways to rank 5 provinces: 120",
  answerCode:"def factorial(n):\n    if n <= 1:\n        return 1\n    return n * factorial(n - 1)\nprint(f'Ways to rank 5 provinces: {factorial(5)}')",
  insight:"factorial(5) calls factorial(4), which calls factorial(3)... until factorial(1) returns 1. Then the chain unwinds: 2×1=2, 3×2=6, 4×6=24, 5×24=120."
},
      },
      {
        id:"py16", title:"Lambda Functions", form:4,
        lesson:`A lambda function is a small, anonymous function written in a single line. Anonymous means it has no name — it is defined and used in the same place.

Syntax: lambda parameters: expression

Regular function:
def square(x):
    return x ** 2

Equivalent lambda:
square = lambda x: x ** 2

They behave identically. But lambdas are most useful when you need a function just once, typically as an argument to another function.

Lambda with sorted():
students = [{"name":"Chanda","score":78}, {"name":"Bupe","score":91}]
sorted_students = sorted(students, key=lambda s: s["score"])

Lambda with filter() keeps items where the function returns True:
marks = [45, 78, 32, 91, 55]
passing = list(filter(lambda m: m >= 50, marks))  gives [78, 91, 55]

Lambda with map() applies the function to every item:
doubled = list(map(lambda x: x*2, marks))  doubles every value

Multi-parameter lambda:
add = lambda x, y: x + y
add(3, 5) returns 8

When to use lambda vs def:
Use lambda for short, simple, one-time-use functions as arguments.
Use def for anything more complex, functions called multiple times, or functions needing clear documentation.

Lambda limitation: can only contain a single expression — no multi-line logic.`,
        code:`# Sorting Zambian students by different criteria\nstudents = [\n    {"name": "Chanda",   "score": 88, "age": 17},\n    {"name": "Mwamba",   "score": 72, "age": 16},\n    {"name": "Thandiwe", "score": 95, "age": 18},\n    {"name": "Bupe",     "score": 72, "age": 15},\n]\n\n# Sort by score descending\nby_score = sorted(students, key=lambda s: s["score"], reverse=True)\nprint("By score:", [s["name"] for s in by_score])\n\n# Sort by name alphabetically\nby_name = sorted(students, key=lambda s: s["name"])\nprint("By name: ", [s["name"] for s in by_name])\n\n# Filter only students scoring above 80\ntop = list(filter(lambda s: s["score"] > 80, students))\nprint("Top students:", [s["name"] for s in top])`,
        explanation:"lambda s: s['score'] is a short function returning the score field. filter() keeps only items where the lambda returns True. List comprehensions extract just the names for display.",
        question:{text:"What does list(filter(lambda x: x > 3, [1,2,3,4,5])) return?",options:["[1,2,3]","[4,5]","[3,4,5]","[1,2]"],answer:1,hint:"filter keeps items where the condition is True. Which values are > 3?"},
        q2:{text:"What does list(map(lambda x: x**2, [1,2,3,4])) return?",options:["[1,2,3,4]","[2,4,6,8]","[1,4,9,16]","[1,4,27,256]"],answer:2,hint:"map() applies the function to every item. x**2 squares each: 1,4,9,16."},
        q3:{text:"When should you use def instead of lambda?",options:["Always — lambda is never needed","When function needs multiple statements, a docstring, or will be reused","lambda is always faster","def is only for class methods"],answer:1,hint:"Lambda is for short one-expression throwaway functions. Use def for anything more complex."},
        trace:[
    {line:1, explanation:"students list created with 4 dicts.", vars:{students:"4 students"}, output:null},
    {line:8, explanation:"sorted(..., key=lambda s: s['score'], reverse=True) — lambda extracts score for sorting. Descending.", vars:{by_score:"[Thandiwe:95,Chanda:88,Mwamba:72,Bupe:72]"}, output:null},
    {line:9, explanation:"print by_score names — Thandiwe first (95 highest).", vars:{}, output:"By score: ['Thandiwe', 'Chanda', 'Mwamba', 'Bupe']"},
    {line:11, explanation:"sorted by name alphabetically (default ASC). Lambda extracts s['name'].", vars:{by_name:"[Bupe,Chanda,Mwamba,Thandiwe]"}, output:"By score: ['Thandiwe', 'Chanda', 'Mwamba', 'Bupe']\nBy name:  ['Bupe', 'Chanda', 'Mwamba', 'Thandiwe']"},
    {line:14, explanation:"filter(lambda s: s['score']>80, students) — keeps only Thandiwe(95) and Chanda(88).", vars:{top:"[Thandiwe,Chanda]"}, output:"...\nTop students: ['Thandiwe', 'Chanda']"}
  ],
        worked:{
  scenario:"A Zambian school administrator needs today's date formatted for a letter header.",
  problem:"Import the datetime module. Print today's date in the format: 'Monday, 15 January 2024'.",
  steps:[
    {explain:"Import datetime from the datetime module.", code:"from datetime import datetime"},
    {explain:"Get the current datetime and format it using strftime.", code:"now = datetime.now()"},
    {explain:"Use strftime format codes: %A=full day name, %d=day, %B=full month, %Y=4-digit year.", code:"formatted = now.strftime('%A, %d %B %Y')\nprint(formatted)"}
  ],
  answer:"Prints something like: Monday, 15 January 2024 (actual date will vary)",
  answerCode:"from datetime import datetime\nnow = datetime.now()\nprint(now.strftime('%A, %d %B %Y'))",
  insight:"%A gives 'Monday', %a gives 'Mon'. %B gives 'January', %b gives 'Jan'. %Y gives '2024', %y gives '24'. The % codes are standardised across all programming languages."
},
      },
      {
        id:"py17", title:"Generators & Iterators", form:4,
        lesson:`A generator is a function that yields values one at a time, on demand, instead of computing and returning all values at once. This makes generators extremely memory-efficient for large datasets.

The yield keyword: when Python encounters yield, it pauses the function, returns the value, and remembers where it stopped. The next call resumes from that exact point.

def count_up(n):
    i = 1
    while i <= n:
        yield i    # pause here and return i
        i += 1

gen = count_up(5)
next(gen) returns 1
next(gen) returns 2

More naturally, use in a for loop:
for num in count_up(5):
    print(num)  prints 1, 2, 3, 4, 5

Generator vs regular function:
Regular function calculates ALL values and stores them all in memory at once.
Generator calculates ONE value at a time and stores only the current value.

Memory comparison:
[x**2 for x in range(1000000)] creates a list of 1 million values taking about 8MB.
(x**2 for x in range(1000000)) is a generator using only a few bytes regardless of size.

When to use generators:
Reading large files line by line.
Generating infinite sequences.
Any situation where you do not need all values at once.

Generator expressions use () instead of []: squares = (x**2 for x in range(10))`,
        code:`# Generator for Fibonacci sequence\ndef fibonacci(limit):\n    a, b = 0, 1\n    while a < limit:\n        yield a       # pause and return a\n        a, b = b, a + b\n\nprint("Fibonacci up to 100:")\nfor n in fibonacci(100):\n    print(n, end=" ")\nprint()\n\n# Generator expression — squares of even ECZ marks\nmarks = [55, 78, 42, 91, 64, 38, 86]\neven_squares = (m**2 for m in marks if m % 2 == 0)\nprint("Even mark squares:")\nfor val in even_squares:\n    print(val, end=" ")`,
        explanation:"yield pauses the function and returns a value. On the next call, execution resumes from where it paused. (m**2 for m in marks if m % 2 == 0) is a generator expression — lazy, memory-efficient.",
        question:{text:"What keyword makes a Python function a generator?",options:["return","generate","yield","next"],answer:2,hint:"yield pauses the function and returns a value without ending it."},
        q2:{text:"What happens when you call a generator function?",options:["Runs and returns all values at once","Returns a generator object but runs NO code yet","Raises an error until next() is called","Runs only the first yield"],answer:1,hint:"Calling a generator function creates the generator object but executes no code until next() is called."},
        q3:{text:"What is the memory advantage of (x**2 for x in range(1000000)) over [x**2 for x in range(1000000)]?",options:["No difference","Generator uses constant memory; list stores all 1M values at once","List is faster to iterate","Generators cannot handle large ranges"],answer:1,hint:"A list comprehension allocates all 1M values immediately. A generator computes one at a time using only a few bytes."},
        trace:[
    {line:1, explanation:"def count_up(n): — generator function defined. The yield keyword makes it a generator.", vars:{}, output:null},
    {line:5, explanation:"gen = count_up(3) — calling the generator does NOT run any code. Returns a generator object.", vars:{gen:"generator object (paused before line 1)"}, output:null},
    {line:6, explanation:"next(gen) — resumes execution. i=1. 1<=3 TRUE. Hits yield 1 — pauses and returns 1.", vars:{i:1}, output:"1"},
    {line:7, explanation:"next(gen) — resumes after yield. i += 1 → i=2. yield 2 — pauses.", vars:{i:2}, output:"1\n2"},
    {line:8, explanation:"next(gen) — i=3. yield 3.", vars:{i:3}, output:"1\n2\n3"},
    {line:6, explanation:"If next(gen) called again: i=4, 4<=3 FALSE, while exits. StopIteration raised.", vars:{i:4, status:"StopIteration"}, output:"1\n2\n3"}
  ],
        worked:{
  scenario:"ECZ wants to rank the top 3 students nationally by average score.",
  problem:"Sort this list of student dicts by score descending and print the top 3 with their rank.",
  steps:[
    {explain:"Create the student list.", code:"students = [\n    {'name':'Chilufya','score':91},\n    {'name':'Thandiwe','score':88},\n    {'name':'Mwamba','score':76},\n    {'name':'Bupe','score':95},\n]"},
    {explain:"Sort descending using sorted() with a lambda key.", code:"ranked = sorted(students, key=lambda s: s['score'], reverse=True)"},
    {explain:"Print top 3 with enumerate starting at 1.", code:"for rank, s in enumerate(ranked[:3], 1):\n    print(str(rank), s['name'], s['score'])"}
  ],
  answer:"1. Bupe: 95 / 2. Chilufya: 91 / 3. Thandiwe: 88",
  answerCode:"ranked=sorted(students,key=lambda s:s['score'],reverse=True)\nfor rank,s in enumerate(ranked[:3],1):\n    print(str(rank), s['name'], s['score'])",
  insight:"ranked[:3] slices the first 3 elements. enumerate(iterable, 1) pairs each element with a rank starting at 1 instead of the default 0."
},
      },
      {
        id:"py18", title:"Decorators", form:4,
        lesson:`A decorator is a function that wraps another function to add extra behaviour without modifying the original function's code. Decorators are applied using the @ syntax above a function definition.

Without decorator: greet = log_call(greet)
With decorator syntax:
@log_call
def greet(name):
    print(f"Hello {name}")
These two are identical. @ is syntactic shorthand.

Building a decorator step by step:
def timer(func):
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)  # calls original function
        end = time.time()
        print(f"{func.__name__} took {end-start:.4f}s")
        return result
    return wrapper

@timer
def slow_calculation():
    time.sleep(1)

*args and **kwargs allow the wrapper to accept any number of arguments and pass them through to the original function — making the decorator work with any function signature.

@functools.wraps(func) preserves the original function's name and documentation string.

Common decorator use cases:
@timer measures execution time.
@login_required checks if a user is authenticated (used in Django web framework).
@cache saves results to avoid recomputation.
@retry automatically retries failed operations.

Python web frameworks like Flask and Django use decorators extensively.`,
        code:`import time\n\ndef timer(func):\n    """Decorator that measures execution time"""\n    def wrapper(*args, **kwargs):\n        start = time.time()\n        result = func(*args, **kwargs)\n        end = time.time()\n        print(f"{func.__name__} took {end-start:.4f}s")\n        return result\n    return wrapper\n\ndef log_call(func):\n    def wrapper(*args, **kwargs):\n        print(f"Calling {func.__name__}...")\n        return func(*args, **kwargs)\n    return wrapper\n\n@timer\n@log_call\ndef calculate_mining_yield(tonnes, grade):\n    """Simulate Copperbelt ore calculation"""\n    return tonnes * grade * 0.85\n\nresult = calculate_mining_yield(5000, 0.023)\nprint(f"Copper yield: {result:.1f} tonnes")`,
        explanation:"@timer wraps calculate_mining_yield inside wrapper(). When you call calculate_mining_yield(), it actually runs wrapper() which times it. Multiple decorators stack — @timer runs outermost.",
        question:{text:"In the decorator pattern, what does the inner wrapper function do?",options:["Defines the decorator","Replaces the original function","Adds extra behaviour around the original function call","Imports the module"],answer:2,hint:"wrapper() runs before and/or after calling the original function — adding timing, logging, etc."},
        q2:{text:"Why add @functools.wraps(func) inside a decorator?",options:["Makes decorator faster","Preserves the original function's __name__ and docstring","Required for the decorator to work","Prevents infinite recursion"],answer:1,hint:"Without @functools.wraps the wrapped function loses its name and docstring — harder to debug."},
        q3:{text:"What does @decorator mean when placed above a function definition?",options:["Imports the decorator","Shorthand for: function = decorator(function)","Calls the decorator immediately","Marks function as private"],answer:1,hint:"@decorator is syntactic sugar. Python replaces the function with decorator(function) — i.e. the wrapper."},
        trace:[
    {line:1, explanation:"def log_call(func): — decorator factory defined.", vars:{}, output:null},
    {line:6, explanation:"@log_call above greet — equivalent to: greet = log_call(greet). greet is now wrapper.", vars:{greet:"wrapper(original=greet)"}, output:null},
    {line:9, explanation:"greet('Chanda') — actually calls wrapper('Chanda'). args=('Chanda',).", vars:{args:"('Chanda',)"}, output:null},
    {line:3, explanation:"print(f'Calling {func.__name__}') — func.__name__ is 'greet'.", vars:{}, output:"Calling greet"},
    {line:4, explanation:"result = func(*args) — calls ORIGINAL greet('Chanda'). Prints 'Hello Chanda'.", vars:{}, output:"Calling greet\nHello Chanda"},
    {line:5, explanation:"print('Done.') — after-code in wrapper.", vars:{}, output:"Calling greet\nHello Chanda\nDone."}
  ],
        worked:{
  scenario:"A Zambian fintech validates phone numbers to prevent incorrect mobile money transfers.",
  problem:"Write a function validate_phone(number) using re.match() that returns True if the number matches the Zambian pattern: starts with 096, 097, or 076, followed by exactly 7 digits.",
  steps:[
    {explain:"Import re and define the pattern. ^ anchors to start, $ anchors to end.", code:"import re\npattern = r'^0(96|97|76)\d{7}$'"},
    {explain:"Write the validation function using re.match().", code:"def validate_phone(number):\n    return bool(re.match(pattern, number))"},
    {explain:"Test with valid and invalid numbers.", code:"print(validate_phone('0971234567'))  # True\nprint(validate_phone('0812345678'))  # False (08x not valid)\nprint(validate_phone('09712345'))    # False (too short)"}
  ],
  answer:"True / False / False",
  answerCode:"import re\npattern = r'^0(96|97|76)\d{7}$'\ndef validate_phone(n): return bool(re.match(pattern, n))\nprint(validate_phone('0971234567'))\nprint(validate_phone('0812345678'))\nprint(validate_phone('09712345'))",
  insight:"(96|97|76) matches any of the three prefix options. \d{7} requires exactly 7 digits. The $ at the end prevents '0971234567extra' from matching — the string must end exactly there."
},
      },
      {
        id:"py19", title:"Data Analysis with Lists", form:4,
        lesson:`Python's built-in functions make data analysis straightforward without needing any external libraries — perfect for Form 4 coursework and basic statistics.

Essential built-in functions for data:
len(data) gives the count of elements.
sum(data) gives the total of all values.
min(data) and max(data) give the smallest and largest values.
sorted(data) returns a sorted copy.
round(value, decimals) rounds to specified decimal places.

Calculating the mean (average):
mean = sum(data) / len(data)

Calculating the median (middle value):
sorted_data = sorted(data)
n = len(sorted_data)
if n % 2 == 0:  # even count
    median = (sorted_data[n//2 - 1] + sorted_data[n//2]) / 2
else:           # odd count
    median = sorted_data[n//2]

Calculating variance and standard deviation:
mean = sum(data) / len(data)
variance = sum((x - mean)**2 for x in data) / len(data)
std_dev = variance ** 0.5  # square root gives standard deviation

Counting frequencies manually:
frequency = {}
for item in data:
    frequency[item] = frequency.get(item, 0) + 1

Finding mode (most common value):
mode = max(frequency, key=frequency.get)

These techniques are used in real data analysis: processing copper production figures from Copperbelt mines, analysing rainfall data from the Zambia Meteorological Department, or calculating class averages for ECZ results.`,
        code:`# Zambia copper production data (thousand tonnes)\nproduction = [820, 750, 910, 680, 870, 930, 760, 840]\n\ntotal  = sum(production)\nmean   = total / len(production)\nminval = min(production)\nmaxval = max(production)\nrange_ = maxval - minval\n\n# Median\nsrt = sorted(production)\nn = len(srt)\nif n % 2 == 0:\n    median = (srt[n//2-1] + srt[n//2]) / 2\nelse:\n    median = srt[n//2]\n\nprint(f"Total:  {total:,} kt")\nprint(f"Mean:   {mean:.1f} kt")\nprint(f"Median: {median:.1f} kt")\nprint(f"Range:  {range_} kt")\nprint(f"Best year: {maxval} kt")`,
        explanation:"sum()/len() gives the mean. sorted() lets us find the median by taking the middle value(s). n//2 is integer division. Range = max - min. This is the foundation of data science.",
        question:{text:"What is the mean of [820, 750, 910, 680, 870, 930, 760, 840]?",options:["820","820.0","820.5","845"],answer:0,hint:"Sum = 6560, count = 8. 6560 / 8 = ?"},
        q2:{text:"Why is the median often more useful than the mean for salary data?",options:["Easier to calculate","One very high salary can pull the mean up but barely affects the median","Median is always smaller","Mean requires sorted data"],answer:1,hint:"The mean is sensitive to outliers. The median (middle value) is more representative of typical values."},
        q3:{text:"What does sum((x-mean)**2 for x in data)/len(data) calculate?",options:["The mean","The range","The variance","The standard deviation"],answer:2,hint:"Variance = average squared distance from the mean. Standard deviation is its square root."},
        trace:[
    {line:1, explanation:"production = [820,750,910,680,870,930,760,840] — list of 8 monthly values.", vars:{production:"[820,750,...]", n:8}, output:null},
    {line:3, explanation:"mean = sum(production) / len(production) → 6560 / 8 = 820.0.", vars:{mean:820.0}, output:null},
    {line:4, explanation:"sorted_p = sorted(production) → [680,750,760,820,840,870,910,930].", vars:{sorted_p:"[680,...,930]"}, output:null},
    {line:5, explanation:"mid = 8//2 = 4. median = (sorted_p[3]+sorted_p[4])/2 = (820+840)/2 = 830.0.", vars:{mid:4, median:830.0}, output:null},
    {line:7, explanation:"print(f'Mean: {mean}') → 820.0.", vars:{mean:820.0}, output:"Mean: 820.0"},
    {line:8, explanation:"print(f'Median: {median}') → 830.0.", vars:{median:830.0}, output:"Mean: 820.0\nMedian: 830.0"},
    {line:9, explanation:"print(f'Max: {max(production)}') → 930.", vars:{}, output:"Mean: 820.0\nMedian: 830.0\nMax: 930"},
    {line:10, explanation:"print(f'Min: {min(production)}') → 680.", vars:{}, output:"Mean: 820.0\nMedian: 830.0\nMax: 930\nMin: 680"}
  ],
        worked:{
  scenario:"A school ranking system sorts students by multiple criteria using lambda functions.",
  problem:"Sort students first by score descending, then alphabetically by name for ties. Print the sorted list.",
  steps:[
    {explain:"Create student list with a tie in scores.", code:"students = [\n    ('Chanda', 78), ('Mwamba', 91),\n    ('Bupe', 78),   ('Thandiwe', 65)\n]"},
    {explain:"Use sorted() with a tuple key: (-score for desc, name for asc).", code:"ranked = sorted(students, key=lambda s: (-s[1], s[0]))"},
    {explain:"Print the ranked list.", code:"for i, (name, score) in enumerate(ranked, 1):\n    print(f'{i}. {name}: {score}')"}
  ],
  answer:"1. Mwamba: 91 / 2. Bupe: 78 / 3. Chanda: 78 / 4. Thandiwe: 65 (Bupe before Chanda alphabetically)",
  answerCode:"students=[('Chanda',78),('Mwamba',91),('Bupe',78),('Thandiwe',65)]\nranked=sorted(students,key=lambda s:(-s[1],s[0]))\nfor i,(name,score) in enumerate(ranked,1):\n    print(f'{i}. {name}: {score}')",
  insight:"Using -s[1] sorts score descending (negating reverses the order). s[0] sorts name ascending. Tuple keys sort by first element, breaking ties with the second."
},
      },
      {
        id:"py20", title:"Working with CSV Files", form:4,
        lesson:`CSV (Comma-Separated Values) is one of the most common data formats in the world. Spreadsheet programs like Excel export data as CSV, and Python's csv module makes reading and writing CSV files easy.

A CSV file looks like this:
Name,Score,Grade
Chanda,88,Merit
Mwamba,72,Credit

Each line is a row. Values within each row are separated by commas.

Writing CSV using csv.writer:
import csv
data = [["Name","Score"], ["Chanda",88], ["Mwamba",72]]
with open("results.csv", "w", newline="") as f:
    writer = csv.writer(f)
    writer.writerows(data)

newline="" is required on Windows to prevent extra blank lines between rows.

Reading CSV using csv.DictReader (the most useful approach):
with open("results.csv", "r") as f:
    reader = csv.DictReader(f)  # uses first row as column names
    for row in reader:
        print(row["Name"], row["Score"])

Important: csv.DictReader reads ALL values as STRINGS. Convert as needed:
int(row["Score"]) or float(row["Score"])

Reading CSV using csv.reader for raw index-based access:
for row in csv.reader(f):
    print(row[0], row[1])

CSV is used everywhere: ECZ results exported from databases, financial records, sensor data from water treatment plants, and population data from the Zambia Statistics Agency.`,
        code:`import csv\n\n# Write student data to CSV\nstudents = [\n    ["Name",       "Score", "Grade"],\n    ["Chanda",     88,      "Merit"],\n    ["Mwamba",     72,      "Credit"],\n    ["Thandiwe",   95,      "Distinction"],\n    ["Bupe",       45,      "Fail"],\n]\n\nwith open("students.csv", "w", newline="") as f:\n    writer = csv.writer(f)\n    writer.writerows(students)\nprint("CSV saved.")\n\n# Read back using DictReader\nwith open("students.csv", "r") as f:\n    reader = csv.DictReader(f)\n    for row in reader:\n        if row["Grade"] != "Fail":\n            print(f"{row['Name']}: {row['Score']}% ({row['Grade']})")`,
        explanation:"csv.writer.writerows() writes all rows at once. DictReader uses the first row as column headers, so you access fields by name (row['Name']) instead of index. newline='' prevents extra blank lines on Windows.",
        question:{text:"Which csv class lets you access row fields by column name?",options:["csv.reader","csv.writer","csv.DictReader","csv.DictWriter"],answer:2,hint:"DictReader reads each row as a dictionary with column names as keys."},
        q2:{text:"Why open CSV files with newline='' on Windows?",options:["Faster reading","Without it Python adds extra blank lines between every row","Enables UTF-8","Required for DictReader"],answer:1,hint:"On Windows csv handles its own line endings. newline='' prevents Python adding an extra \\r."},
        q3:{text:"All values from csv.DictReader are strings. How do you use the score column for arithmetic?",options:["Works automatically","Wrap with int(): int(row['score'])","Use csv.NumberReader","Convert the whole file first"],answer:1,hint:"csv reads everything as text. Convert when needed: int(row['score']) or float(row['score'])."},
        trace:[
    {line:1, explanation:"students = [['Nakamba',88],['Chibwe',45],['Monde',73]] — list of lists.", vars:{students:"3 rows"}, output:null},
    {line:2, explanation:"with open('students.csv','w',newline='') as f — opens for writing. newline='' prevents extra blank lines on Windows.", vars:{file:"students.csv (open)"}, output:null},
    {line:3, explanation:"writer = csv.writer(f) — creates a CSV writer object.", vars:{}, output:null},
    {line:4, explanation:"writer.writerow(['Name','Score']) — writes the header row.", vars:{file_content:"Name,Score"}, output:null},
    {line:5, explanation:"writer.writerows(students) — writes all 3 data rows at once.", vars:{file_content:"Name,Score\\nNakamba,88\\nChibwe,45\\nMonde,73"}, output:null},
    {line:7, explanation:"with open(...,'r') — reopen for reading. csv.DictReader uses header row as keys.", vars:{}, output:null},
    {line:8, explanation:"First row: {'Name':'Nakamba','Score':'88'}. Note: '88' is a STRING — all CSV values are strings.", vars:{row:"{'Name':'Nakamba','Score':'88'}"}, output:"Nakamba: 88 → Pass"},
    {line:8, explanation:"Chibwe: score int('45')=45 < 50 → Fail. Monde: 73 → Pass.", vars:{}, output:"Nakamba: 88 → Pass\nChibwe: 45 → Fail\nMonde: 73 → Pass"}
  ],
        worked:{
  scenario:"A Zambia Statistics Agency tool generates copper production estimates without loading all data at once.",
  problem:"Write a generator that yields monthly copper output estimates starting at 800 tonnes, increasing by 15 each month, for 6 months.",
  steps:[
    {explain:"Define a generator function using yield.", code:"def monthly_output(start, increase, months):\n    output = start\n    for _ in range(months):\n        yield output\n        output += increase"},
    {explain:"Use the generator in a for loop — it yields one value at a time.", code:"for month, tonnes in enumerate(monthly_output(800, 15, 6), 1):\n    print(f'Month {month}: {tonnes} tonnes')"}
  ],
  answer:"Month 1: 800 / Month 2: 815 / Month 3: 830 / Month 4: 845 / Month 5: 860 / Month 6: 875",
  answerCode:"def monthly_output(start, increase, months):\n    output = start\n    for _ in range(months):\n        yield output\n        output += increase\nfor month, tonnes in enumerate(monthly_output(800,15,6),1):\n    print(f'Month {month}: {tonnes} tonnes')",
  insight:"The generator computes each value only when requested. For 1 million months, a list would use megabytes of memory; the generator uses only a few bytes regardless of count."
},
      },
  ],
  },

  SQL: {
    color: "#e74c3c", accent: "#fde8e8", icon: "🗄️",
    topics: [
      {
        id:"sq1", title:"Introduction to SQL", form:3,
        lesson:`SQL (Structured Query Language, pronounced sequel) is the standard language for communicating with relational databases. Almost every major system that stores data — banks, hospitals, government departments, mobile money platforms, and schools — uses SQL behind the scenes.

A relational database stores data in TABLES structured like spreadsheets with rows and columns. Each table stores one type of entity: students, results, or payments. Tables are linked through shared columns called keys.

Why SQL matters in Zambia: Airtel Money and MTN MoMo store millions of transactions in SQL databases. The National Registration Card system uses databases. Hospital records, ZRA tax records, and ECZ results are all stored and queried using SQL.

The four core SQL operations are known as CRUD:
CREATE creates tables and inserts data.
READ queries and retrieves data using SELECT.
UPDATE modifies existing data.
DELETE removes data.

SQL is NOT case sensitive for keywords. By convention, keywords are written in UPPERCASE for readability.

SQL comments use -- for single lines:
-- This is a comment
SELECT * FROM students; -- retrieves all students

The semicolon ends each SQL statement.

Database management systems that use SQL include MySQL, PostgreSQL, SQLite (used in mobile apps), Microsoft SQL Server, and Oracle. The core SQL syntax is the same across all of them — a skill learnt once, used everywhere.`,
        code:`-- A simple SQL database for a Zambian school\n-- Tables store data in rows and columns\n\nCREATE TABLE students (\n  id       INTEGER PRIMARY KEY,\n  name     TEXT    NOT NULL,\n  form     INTEGER,\n  province TEXT\n);\n\n-- Insert a student\nINSERT INTO students (id, name, form, province)\nVALUES (1, 'Chanda Mutale', 3, 'Lusaka');\n\n-- Read all students\nSELECT * FROM students;`,
        explanation:"CREATE TABLE defines a new table and its columns. INSERT INTO adds a row. SELECT * FROM retrieves all rows. -- starts a comment in SQL.",
        question:{text:"Which SQL statement is used to retrieve data from a table?",options:["INSERT","CREATE","SELECT","UPDATE"],answer:2,hint:"SELECT is the SQL command for reading/querying data from a table."},
        q2:{text:"What does SELECT * FROM students mean?",options:["Delete all students","Select the first student","Select all columns and all rows from students","Select only the student named *"],answer:2,hint:"* means all columns. FROM students specifies the table. No WHERE clause means all rows."},
        q3:{text:"Which SQL keyword prevents a column from storing NULL (empty) values?",options:["REQUIRED","NOT NULL","UNIQUE","PRIMARY"],answer:1,hint:"NOT NULL is a constraint that forces every row to have a value in that column."},
        trace:[
    {line:1, explanation:"-- A simple SQL database — this is a SQL comment. The database ignores it.", vars:{}, output:null},
    {line:4, explanation:"CREATE TABLE students (...) — defines a new table with 4 columns. The table is now empty.", vars:{table:"students (0 rows)"}, output:null},
    {line:11, explanation:"INSERT INTO students VALUES (1,'Chanda Mutale',3,'Lusaka') — adds one row to the table.", vars:{table:"students (1 row)", row:"{id:1, name:'Chanda Mutale', form:3, province:'Lusaka'}"}, output:null},
    {line:15, explanation:"SELECT * FROM students — * means all columns. No WHERE so all rows returned.", vars:{}, output:"id | name          | form | province\n1  | Chanda Mutale | 3    | Lusaka"}
  ],
        worked:{
  scenario:"The Zambia Statistics Agency analyses monthly rainfall across 6 stations.",
  problem:"Given rainfall = [220, 180, 90, 20, 5, 45], calculate the mean, find the maximum, and count how many months had below-average rainfall.",
  steps:[
    {explain:"Calculate the mean.", code:"rainfall = [220, 180, 90, 20, 5, 45]\nmean = sum(rainfall) / len(rainfall)\nprint(f'Mean: {mean:.1f}mm')"},
    {explain:"Find the maximum using max().", code:"print(f'Max: {max(rainfall)}mm')"},
    {explain:"Count months below average using a list comprehension.", code:"below = [m for m in rainfall if m < mean]\nprint(f'{len(below)} months below average')"}
  ],
  answer:"Mean: 93.3mm / Max: 220mm / 4 months below average",
  answerCode:"rainfall=[220,180,90,20,5,45]\nmean=sum(rainfall)/len(rainfall)\nprint(f'Mean: {mean:.1f}mm')\nprint(f'Max: {max(rainfall)}mm')\nbelow=[m for m in rainfall if m<mean]\nprint(f'{len(below)} months below average')",
  insight:":.1f in an f-string formats a float to 1 decimal place: 93.333... → 93.3. The list comprehension [m for m in rainfall if m < mean] creates a list of all below-average values."
},
      },
      {
        id:"sq2", title:"SELECT & WHERE", form:3,
        lesson:`The SELECT statement is the most important SQL command — it retrieves data from a database. You will write SELECT in almost every query you create.

Basic syntax:
SELECT column1, column2 FROM table_name;

SELECT * FROM students; uses the asterisk to mean all columns.
SELECT name, score FROM results; retrieves only the name and score columns.

THE WHERE CLAUSE filters which rows are returned. Without WHERE, you get every row in the table.

SELECT name, score FROM results WHERE score >= 50;
This returns only students who passed.

Comparison operators in WHERE:
= (equal) as in WHERE province = 'Lusaka'
<> or != (not equal) as in WHERE province <> 'Lusaka'
> (greater) as in WHERE score > 80
< (less) as in WHERE score < 50
>= (greater or equal) as in WHERE form >= 3

Combining conditions:
AND means both must be true:
SELECT * FROM students WHERE form = 4 AND province = 'Lusaka';

OR means at least one must be true:
SELECT * FROM students WHERE province = 'Lusaka' OR province = 'Copperbelt';

BETWEEN is a range check inclusive of both ends:
SELECT * FROM results WHERE score BETWEEN 50 AND 79;

LIKE is for pattern matching where % matches any sequence and _ matches exactly one character.
WHERE name LIKE 'Ch%' finds names starting with Ch.`,
        code:`-- Zambian student results database\n-- Find all students who passed (score >= 50)\nSELECT name, score\nFROM results\nWHERE score >= 50;\n\n-- Find students from Copperbelt\nSELECT name, school\nFROM students\nWHERE province = 'Copperbelt';\n\n-- Find students between 60 and 80\nSELECT name, score\nFROM results\nWHERE score BETWEEN 60 AND 80;`,
        explanation:"WHERE filters rows. score >= 50 keeps only passing students. province = 'Copperbelt' filters by text. BETWEEN 60 AND 80 is inclusive of both ends.",
        ecz:"SELECT with WHERE is the most-tested SQL topic. Know: =, >, <, >=, <=, BETWEEN, LIKE. Expect to write a query filtering students by province or score. Common trap: = vs LIKE.",
        question:{text:"Which clause filters rows in a SELECT statement?",options:["FROM","FILTER","WHERE","HAVING"],answer:2,hint:"WHERE comes after FROM and before ORDER BY. It specifies the condition rows must meet."},
        q2:{text:"SELECT name FROM students WHERE province = 'Lusaka' — what does this return?",options:["All columns for all students","Only names of students from Lusaka","All students except those from Lusaka","The number of students in Lusaka"],answer:1,hint:"SELECT name picks only the name column. WHERE province='Lusaka' filters to only Lusaka students."},
        q3:{text:"Which operator checks if a value falls within a range (inclusive)?",options:["IN","RANGE","BETWEEN","WITHIN"],answer:2,hint:"BETWEEN low AND high includes both endpoints. WHERE score BETWEEN 50 AND 79 returns 50, 51 ... 79."},
        trace:[
    {line:2, explanation:"SELECT name, score — only these two columns will appear in results. Others are excluded.", vars:{columns:["name","score"]}, output:null},
    {line:3, explanation:"FROM results — specifies which table to query.", vars:{table:"results"}, output:null},
    {line:4, explanation:"WHERE score >= 50 — database scans every row. Each row is tested: score >= 50?", vars:{filter:"score >= 50"}, output:null},
    {line:4, explanation:"Row: Chanda(88) → 88>=50 TRUE ✓. Row: Bupe(45) → 45>=50 FALSE ✗. Row: Mwamba(72) → TRUE ✓.", vars:{matching:"Chanda, Mwamba"}, output:null},
    {line:4, explanation:"Only matching rows returned.", vars:{}, output:"name    | score\nChanda  | 88\nMwamba  | 72"}
  ],
        worked:{
  scenario:"A Zambian school stores end-of-year results in a CSV file and generates a pass/fail report.",
  problem:"Write student data to 'results.csv' with columns name,score. Read it back and print each student with their grade (>=50=Pass, else Fail).",
  steps:[
    {explain:"Import csv and write data with a header row.", code:"import csv\nstudents = [['Chanda',88],['Bupe',45],['Mwamba',72]]\nwith open('results.csv','w',newline='') as f:\n    w=csv.writer(f)\n    w.writerow(['name','score'])\n    w.writerows(students)"},
    {explain:"Read back with DictReader to access columns by name.", code:"with open('results.csv','r') as f:\n    reader=csv.DictReader(f)\n    for row in reader:"},
    {explain:"Convert score to int (DictReader returns strings) and determine grade.", code:"        score=int(row['score'])\n        grade='Pass' if score>=50 else 'Fail'\n        print(f\"{row['name']}: {score} — {grade}\")"}
  ],
  answer:"Chanda: 88 — Pass / Bupe: 45 — Fail / Mwamba: 72 — Pass",
  answerCode:"import csv\nstudents=[['Chanda',88],['Bupe',45],['Mwamba',72]]\nwith open('results.csv','w',newline='') as f:\n    w=csv.writer(f); w.writerow(['name','score']); w.writerows(students)\nwith open('results.csv','r') as f:\n    for row in csv.DictReader(f):\n        score=int(row['score'])\n        print(f\"{row['name']}: {score} — {'Pass' if score>=50 else 'Fail'}\")",
  insight:"DictReader reads ALL values as strings. int(row['score']) converts '88' to 88 so comparison >=50 works. Forgetting this conversion causes TypeError: '>=' not supported between str and int."
},
      },
      {
        id:"sq3", title:"ORDER BY & LIMIT", form:3,
        lesson:`After retrieving data with SELECT and WHERE, you often want to control the ORDER results appear in, or limit HOW MANY rows are returned.

ORDER BY sorts the results:
SELECT name, score FROM results ORDER BY score;
This sorts ascending (lowest to highest) by default.

ASC means ascending from lowest to highest, A to Z (this is the default).
DESC means descending from highest to lowest, Z to A.

SELECT name, score FROM results ORDER BY score DESC;
Returns students with the highest scores first.

Ordering by multiple columns:
SELECT name, form, score FROM students ORDER BY form ASC, score DESC;
First sorts by form ascending, then within each form sorts by score descending.

LIMIT restricts how many rows are returned:
SELECT name, score FROM results ORDER BY score DESC LIMIT 5;
Returns only the top 5 students.

LIMIT is essential for showing top-N results, pagination, and sampling data.

DISTINCT removes duplicate values from results:
SELECT DISTINCT province FROM students;
Instead of showing Lusaka fifty times, it shows it only once.

Important: ORDER BY comes BEFORE LIMIT. The database first sorts all matching rows, THEN returns only the first n rows.`,
        code:`-- Rank students by score, highest first\nSELECT name, score\nFROM results\nORDER BY score DESC;\n\n-- Top 3 students only\nSELECT name, score\nFROM results\nORDER BY score DESC\nLIMIT 3;\n\n-- Alphabetical list of provinces\nSELECT DISTINCT province\nFROM students\nORDER BY province ASC;`,
        explanation:"ORDER BY score DESC puts the highest scores first. LIMIT 3 returns only the top 3 rows. DISTINCT removes duplicate province names. ASC is the default direction.",
        ecz:"ORDER BY and LIMIT appear in almost every SQL paper. Know: ASC (default) and DESC. LIMIT 5 with ORDER BY DESC gives the top 5. Expect to retrieve the top 3 students by score.",
        question:{text:"Which keyword sorts results from highest to lowest?",options:["ORDER ASC","SORT DESC","ORDER BY DESC","DESCEND"],answer:2,hint:"ORDER BY column DESC sorts in descending (highest first) order."},
        q2:{text:"SELECT name FROM students ORDER BY name ASC LIMIT 5 — what does this return?",options:["All students alphabetically","The last 5 students","The first 5 students alphabetically","5 random students"],answer:2,hint:"ORDER BY name ASC sorts A→Z. LIMIT 5 returns only the first 5 rows from that sorted list."},
        q3:{text:"What does SELECT DISTINCT province FROM students return?",options:["All province values including duplicates","One row per unique province","The most common province","All provinces in alphabetical order"],answer:1,hint:"DISTINCT removes duplicate values. If 30 students are from Lusaka, Lusaka appears only once."},
        trace:[
    {line:2, explanation:"SELECT name, score — two columns selected.", vars:{}, output:null},
    {line:3, explanation:"FROM results — from the results table.", vars:{}, output:null},
    {line:4, explanation:"ORDER BY score DESC — sorts all results by score, highest first.", vars:{sorted:"[Chilufya:95, Chanda:88, Mwamba:72, Bupe:45]"}, output:null},
    {line:5, explanation:"LIMIT 3 — returns only the first 3 rows from the sorted results.", vars:{returned:"[Chilufya:95, Chanda:88, Mwamba:72]"}, output:null},
    {line:5, explanation:"Bupe(45) is excluded — she is 4th place.", vars:{}, output:"name     | score\nChilufya | 95\nChanda   | 88\nMwamba   | 72"}
  ],
        worked:{
  scenario:"A school database administrator at Matero Boys sets up a new student table.",
  problem:"Create a students table with id (auto-increment primary key), name (required text), form (integer), and province (text). Insert one student: Chanda Mutale, Form 3, Lusaka.",
  steps:[
    {explain:"CREATE TABLE with appropriate data types and constraints.", code:"CREATE TABLE students (\n  id       INTEGER PRIMARY KEY AUTOINCREMENT,\n  name     TEXT    NOT NULL,\n  form     INTEGER,\n  province TEXT\n);"},
    {explain:"INSERT a row. Omit id since it auto-increments.", code:"INSERT INTO students (name, form, province)\nVALUES ('Chanda Mutale', 3, 'Lusaka');"},
    {explain:"Verify the insert with SELECT *.", code:"SELECT * FROM students;"}
  ],
  answer:"Table created. Row inserted with auto-id=1. SELECT shows: 1 | Chanda Mutale | 3 | Lusaka",
  answerCode:"CREATE TABLE students (\n  id INTEGER PRIMARY KEY AUTOINCREMENT,\n  name TEXT NOT NULL,\n  form INTEGER,\n  province TEXT\n);\nINSERT INTO students (name, form, province)\nVALUES ('Chanda Mutale', 3, 'Lusaka');\nSELECT * FROM students;",
  insight:"When id is AUTOINCREMENT, you must omit it from the INSERT column list. The database assigns the next available integer automatically — no need to track it yourself."
},
      },
      {
        id:"sq4", title:"INSERT, UPDATE & DELETE", form:3,
        lesson:`While SELECT reads data, INSERT, UPDATE, and DELETE modify it. These commands change what is stored in your database.

INSERT adds a new row:
INSERT INTO students (name, form, province)
VALUES ('Bupe Zulu', 2, 'Southern');
You list the column names then provide matching values in the same order.

Insert multiple rows:
INSERT INTO students (name, form) VALUES
('Chanda', 3), ('Mwamba', 4), ('Thandiwe', 2);

UPDATE changes values in existing rows:
UPDATE students SET form = 3 WHERE name = 'Bupe Zulu';

SET specifies what to change. WHERE specifies which rows to change.
WITHOUT WHERE, EVERY row in the table is updated:
UPDATE students SET province = 'Lusaka'; — updates ALL students!

DELETE removes rows:
DELETE FROM students WHERE id = 5;

Without WHERE:
DELETE FROM students; — deletes EVERY student in the table!

The database will not ask for confirmation — it executes immediately.

Best practice: before running UPDATE or DELETE, first run the equivalent SELECT to see which rows will be affected. If the SELECT returns the right rows, then run the UPDATE or DELETE.

TRUNCATE TABLE tablename deletes all rows faster than DELETE without WHERE but cannot be reversed.`,
        code:`-- Add a new student\nINSERT INTO students (name, form, province)\nVALUES ('Bupe Zulu', 2, 'Southern');\n\n-- Update Bupe's form after she moves up\nUPDATE students\nSET form = 3\nWHERE name = 'Bupe Zulu';\n\n-- Remove a student who left school\nDELETE FROM students\nWHERE id = 5;\n\n-- DANGER: no WHERE = affects ALL rows!\n-- DELETE FROM students;  -- deletes everyone!`,
        explanation:"INSERT adds a new row. UPDATE ... SET changes column values — WHERE limits which rows. DELETE removes rows — WHERE is critical. Without WHERE, UPDATE and DELETE affect every row.",
        ecz:"INSERT, UPDATE, DELETE are always tested together. The most common exam trap: forgetting WHERE on UPDATE or DELETE wipes the entire table. Always explain what happens without WHERE.",
        question:{text:"What happens if you run UPDATE students SET form = 4 with no WHERE clause?",options:["Updates only form 4 students","Updates the first student","Updates ALL students to form 4","Causes an error"],answer:2,hint:"Without WHERE, UPDATE applies the change to every single row in the table."},
        q2:{text:"Which SQL command adds a new row to a table?",options:["ADD INTO","INSERT INTO","CREATE ROW","APPEND INTO"],answer:1,hint:"INSERT INTO table (columns) VALUES (values) adds a new row."},
        q3:{text:"DELETE FROM students WHERE province = 'Eastern' — what does this do?",options:["Deletes the province column","Deletes only students from Eastern province","Deletes all students","Deletes the Eastern province row"],answer:1,hint:"DELETE FROM removes rows. WHERE province='Eastern' limits deletion to only those matching rows."},
        trace:[
    {line:2, explanation:"INSERT INTO students (name,form,province) — specifying columns. id not listed so database auto-assigns it.", vars:{}, output:null},
    {line:3, explanation:"VALUES ('Bupe Zulu', 2, 'Southern') — new row added to the table.", vars:{new_row:"{name:'Bupe Zulu', form:2, province:'Southern'}"}, output:null},
    {line:6, explanation:"UPDATE students — will modify existing rows.", vars:{}, output:null},
    {line:7, explanation:"SET form = 3 — the new value to write.", vars:{new_form:3}, output:null},
    {line:8, explanation:"WHERE name = 'Bupe Zulu' — only rows matching this condition are updated. Without WHERE, ALL rows would be changed!", vars:{updated:"Bupe Zulu: form 2 → 3"}, output:null},
    {line:11, explanation:"DELETE FROM students WHERE id = 5 — removes only the row with id=5. One row deleted.", vars:{deleted:"row id=5"}, output:null}
  ],
        worked:{
  scenario:"A school administrator needs a list of all Form 4 students from Lusaka province.",
  problem:"Write a SELECT query that returns only the name and school columns for students where form=4 AND province='Lusaka', ordered by name.",
  steps:[
    {explain:"Specify only the columns you need — not SELECT *.", code:"SELECT name, school"},
    {explain:"Specify the table and filter conditions with WHERE. Use AND for multiple conditions.", code:"FROM students\nWHERE form = 4 AND province = 'Lusaka'"},
    {explain:"Sort the results alphabetically by name.", code:"ORDER BY name ASC;"}
  ],
  answer:"Returns only Form 4 Lusaka students, both conditions must be true, sorted A-Z by name.",
  answerCode:"SELECT name, school\nFROM students\nWHERE form = 4 AND province = 'Lusaka'\nORDER BY name ASC;",
  insight:"AND requires BOTH conditions to be true. OR would return form=4 students OR Lusaka students (a much larger result). Always specify only the columns you need — avoid SELECT * in production."
},
      },
      {
        id:"sq5", title:"CREATE TABLE & Data Types", form:3,
        lesson:`Before you can store data, you need to create tables. The CREATE TABLE statement defines the structure of a new table — its columns, data types, and constraints.

Basic syntax:
CREATE TABLE tableName (
    column1 dataType constraint,
    column2 dataType constraint
);

SQL data types:
INTEGER (also INT) stores whole numbers.
REAL or DECIMAL stores decimal numbers.
TEXT or VARCHAR(n) stores strings — VARCHAR(50) limits to 50 characters.
DATE stores date values in YYYY-MM-DD format.
BOOLEAN stores true or false.

Column constraints add rules:
PRIMARY KEY uniquely identifies each row. Only one per table. Cannot be NULL or duplicate.
NOT NULL means this column must always have a value.
UNIQUE means all values in this column must be different.
DEFAULT value means if no value is provided, use this default.
AUTOINCREMENT automatically generates the next integer.

FOREIGN KEY creates a link between tables:
FOREIGN KEY (student_id) REFERENCES students(id)
This means student_id must match an existing id in the students table. It prevents orphaned data — you cannot have a result for a student who does not exist.

Modifying existing tables:
ALTER TABLE students ADD COLUMN email TEXT;
ALTER TABLE students DROP COLUMN email;

Removing a table completely:
DROP TABLE students; permanently deletes the table AND all its data.`,
        code:`-- School database for Zambia\nCREATE TABLE schools (\n  id         INTEGER  PRIMARY KEY AUTOINCREMENT,\n  name       TEXT     NOT NULL,\n  province   TEXT     NOT NULL,\n  pupils     INTEGER  DEFAULT 0,\n  est_year   INTEGER,\n  is_boarding BOOLEAN DEFAULT FALSE\n);\n\n-- Results table with a foreign key\nCREATE TABLE results (\n  id         INTEGER PRIMARY KEY,\n  student_id INTEGER REFERENCES students(id),\n  subject    TEXT,\n  score      REAL,\n  year       INTEGER\n);`,
        explanation:"PRIMARY KEY uniquely identifies each row. AUTOINCREMENT generates IDs automatically. NOT NULL prevents empty values. DEFAULT sets a value when none is provided. REFERENCES creates a foreign key link.",
        ecz:"CREATE TABLE with data types is Form 3 core. Know: INTEGER, TEXT, REAL, PRIMARY KEY, NOT NULL. Expect to design a table for a school, hospital, or bank scenario.",
        question:{text:"Which SQL constraint ensures every row has a unique identifier?",options:["NOT NULL","UNIQUE","PRIMARY KEY","FOREIGN KEY"],answer:2,hint:"PRIMARY KEY uniquely identifies each row — no two rows can have the same primary key value."},
        q2:{text:"What does DEFAULT 0 do in a column definition?",options:["Sets the column to always be 0","Inserts 0 automatically when no value is provided","Makes 0 the maximum value","Prevents negative numbers"],answer:1,hint:"DEFAULT value is used automatically when INSERT does not provide a value for that column."},
        q3:{text:"What is the purpose of REFERENCES students(id) in the results table?",options:["Copies data from students","Creates a foreign key — links student_id to the students table","Makes student_id a primary key","Joins the two tables automatically"],answer:1,hint:"REFERENCES creates a foreign key constraint — student_id must match an existing id in the students table."},
        trace:[
    {line:2, explanation:"CREATE TABLE schools ( — starts defining the table structure.", vars:{}, output:null},
    {line:3, explanation:"id INTEGER PRIMARY KEY AUTOINCREMENT — each row gets a unique auto-generated ID.", vars:{constraint:"PRIMARY KEY"}, output:null},
    {line:4, explanation:"name TEXT NOT NULL — text column that cannot be empty.", vars:{constraint:"NOT NULL"}, output:null},
    {line:6, explanation:"pupils INTEGER DEFAULT 0 — if INSERT doesn't provide pupils, it defaults to 0.", vars:{default:0}, output:null},
    {line:8, explanation:") — table definition complete. Table is created in the database, ready for data.", vars:{table:"schools (0 rows, 6 columns)"}, output:null},
    {line:11, explanation:"results table with REFERENCES students(id) — creates a foreign key. student_id must match an existing id in students.", vars:{constraint:"FOREIGN KEY → students.id"}, output:null}
  ],
        worked:{
  scenario:"An ECZ analyst wants the top 5 highest-scoring students in a national exam.",
  problem:"Write a query that returns the student name and score from a results table, sorted by score descending, limited to 5 rows.",
  steps:[
    {explain:"Select the columns needed.", code:"SELECT name, score"},
    {explain:"Sort by score from highest to lowest.", code:"FROM results\nORDER BY score DESC"},
    {explain:"Restrict to just the top 5.", code:"LIMIT 5;"}
  ],
  answer:"Returns the 5 rows with the highest scores, highest first.",
  answerCode:"SELECT name, score\nFROM results\nORDER BY score DESC\nLIMIT 5;",
  insight:"ORDER BY must come before LIMIT. The database first sorts ALL rows, then takes the first 5. Without ORDER BY, LIMIT 5 returns any arbitrary 5 rows — not necessarily the top 5."
},
      },
      {
        id:"sq6", title:"Aggregate Functions", form:3,
        lesson:`Aggregate functions perform calculations across multiple rows and return a single summary value. They answer questions like: how many, what is the total, what is the average, and what is the highest.

The five core aggregate functions:
COUNT(*) counts the total number of rows.
COUNT(column) counts rows where column is NOT NULL.
SUM(column) adds up all values in the column.
AVG(column) calculates the arithmetic mean (ignores NULL values).
MAX(column) returns the largest value.
MIN(column) returns the smallest value.

Examples:
SELECT COUNT(*) AS total_students FROM results;
SELECT AVG(score) AS class_average FROM results;
SELECT MAX(score) AS top_score FROM results;
SELECT SUM(amount) AS fees_collected FROM payments WHERE term = 'Term1';

The AS keyword creates an alias — a readable name for the output column.

Using WHERE with aggregates:
SELECT AVG(score) FROM results WHERE subject = 'Mathematics';
This calculates the average specifically for Maths only.

Important: NULL values are IGNORED by most aggregate functions.
If scores are [80, NULL, 60, NULL, 90], AVG returns 76.67 (average of the three non-NULL values). COUNT(*) counts all 5 rows but COUNT(score) counts only 3.

Combining aggregates:
SELECT COUNT(*) AS total, ROUND(AVG(score),1) AS avg, MAX(score) AS highest FROM results;
ROUND(value, places) rounds the result to specified decimal places.`,
        code:`-- Zambia exam results analysis\n\n-- How many students sat the exam?\nSELECT COUNT(*) AS total_students\nFROM results;\n\n-- Average, highest, lowest scores\nSELECT\n  AVG(score) AS average,\n  MAX(score) AS highest,\n  MIN(score) AS lowest\nFROM results;\n\n-- Total fees collected this term\nSELECT SUM(amount) AS total_fees\nFROM payments\nWHERE term = 'Term 1';`,
        explanation:"COUNT(*) counts all rows. AVG(), MAX(), MIN() work on a column. AS gives the result a readable alias name. SUM() with WHERE sums only matching rows.",
        ecz:"Aggregate functions (COUNT, SUM, AVG, MAX, MIN) appear every year. Common question: find the average score, count students per province, or find the highest mark. Know how AS creates aliases.",
        question:{text:"Which aggregate function returns the number of rows?",options:["SUM()","TOTAL()","COUNT()","NUM()"],answer:2,hint:"COUNT(*) counts all rows. COUNT(column) counts non-NULL values in that column."},
        q2:{text:"SELECT AVG(score) FROM results WHERE subject = 'Maths' — what does this return?",options:["All maths scores","The highest maths score","The average score for maths only","The number of maths students"],answer:2,hint:"AVG() computes the average. WHERE subject='Maths' limits the calculation to maths rows only."},
        q3:{text:"What does AS do in SELECT COUNT(*) AS total_students?",options:["Creates a new table","Filters the results","Gives the result column a readable name","Counts only distinct students"],answer:2,hint:"AS is an alias — it renames the output column from COUNT(*) to the friendlier name total_students."},
        trace:[
    {line:2, explanation:"SELECT COUNT(*) AS total_students — COUNT(*) counts all rows regardless of NULL values.", vars:{}, output:null},
    {line:3, explanation:"FROM results — scans the whole results table.", vars:{rows_scanned:150}, output:null},
    {line:3, explanation:"COUNT(*) = 150. AS total_students renames the output column.", vars:{total_students:150}, output:"total_students\n150"},
    {line:6, explanation:"SELECT AVG(score), MAX(score), MIN(score) — three aggregates computed in one query.", vars:{}, output:null},
    {line:7, explanation:"FROM results — all rows. AVG=68.4, MAX=98, MIN=22.", vars:{avg:68.4, max:98, min:22}, output:"average | highest | lowest\n68.4    | 98      | 22"}
  ],
        worked:{
  scenario:"A student transfers from Lusaka to Copperbelt and their province record needs updating.",
  problem:"Update the province to 'Copperbelt' for the student named 'Bupe Zulu'. Then verify by selecting her record.",
  steps:[
    {explain:"Use UPDATE...SET to change the value. Always include WHERE to target specific rows.", code:"UPDATE students\nSET province = 'Copperbelt'\nWHERE name = 'Bupe Zulu';"},
    {explain:"Verify the change with a SELECT.", code:"SELECT name, province\nFROM students\nWHERE name = 'Bupe Zulu';"}
  ],
  answer:"UPDATE changes Bupe's province. SELECT confirms: Bupe Zulu | Copperbelt",
  answerCode:"UPDATE students\nSET province = 'Copperbelt'\nWHERE name = 'Bupe Zulu';\nSELECT name, province FROM students WHERE name = 'Bupe Zulu';",
  insight:"NEVER run UPDATE without WHERE in production — it would change every row in the table. Test your WHERE clause with a SELECT first to confirm it targets the right rows."
},
      },
      {
        id:"sq7", title:"GROUP BY & HAVING", form:4,
        lesson:`GROUP BY divides table rows into groups based on a column's values, then applies an aggregate function to each group separately. This answers questions like: how many students per province, or what is the average score per subject.

Without GROUP BY:
SELECT COUNT(*) FROM students; gives one number — the total for everything.

With GROUP BY:
SELECT province, COUNT(*) AS total FROM students GROUP BY province;
This gives one row per province, each with its own count.

The HAVING clause filters GROUPS, just as WHERE filters ROWS:
WHERE runs BEFORE grouping and filters individual rows.
HAVING runs AFTER grouping and filters the grouped results.

You CANNOT use WHERE to filter by an aggregate value. Use HAVING:
SELECT province, COUNT(*) AS total
FROM students
GROUP BY province
HAVING total > 100;
This shows only provinces with more than 100 students.

The order of clauses matters:
SELECT then FROM then WHERE then GROUP BY then HAVING then ORDER BY then LIMIT

Real-world example:
SELECT province, COUNT(*) AS total, AVG(score) AS avg_score
FROM students s
JOIN results r ON s.id = r.student_id
GROUP BY province
ORDER BY avg_score DESC;

This joins students with results, groups by province, calculates count and average per province, then orders by best average first.`,
        code:`-- Count students per province\nSELECT province, COUNT(*) AS num_students\nFROM students\nGROUP BY province;\n\n-- Average score per subject\nSELECT subject, ROUND(AVG(score), 1) AS avg_score\nFROM results\nGROUP BY subject\nORDER BY avg_score DESC;\n\n-- Only provinces with more than 500 students\nSELECT province, COUNT(*) AS total\nFROM students\nGROUP BY province\nHAVING total > 500;`,
        explanation:"GROUP BY province creates one group per province. COUNT(*) counts rows in each group. HAVING filters groups after aggregation — here only provinces with more than 500 students appear.",
        ecz:"GROUP BY and HAVING are Form 4 staples. Know: GROUP BY groups rows, HAVING filters groups (like WHERE but for aggregates). Common question: count students per province, show only provinces with more than 100 students.",
        question:{text:"What does GROUP BY province do in a SELECT query?",options:["Sorts results by province","Creates one result row per unique province","Filters only one province","Joins provinces together"],answer:1,hint:"GROUP BY creates one output row per unique value in that column, combining all rows with the same value."},
        q2:{text:"What is the difference between WHERE and HAVING?",options:["No difference","WHERE filters rows before grouping; HAVING filters groups after aggregation","HAVING is faster","WHERE works with aggregates; HAVING does not"],answer:1,hint:"WHERE runs before GROUP BY (filters raw rows). HAVING runs after GROUP BY (filters the grouped results)."},
        q3:{text:"SELECT subject, AVG(score) FROM results GROUP BY subject HAVING AVG(score) > 60 — what does HAVING do here?",options:["Shows only students scoring above 60","Shows only subjects where the class average exceeds 60","Filters individual scores above 60","Orders subjects by average"],answer:1,hint:"HAVING AVG(score) > 60 filters entire subject groups — only subjects whose average score is above 60 appear."},
        trace:[
    {line:2, explanation:"SELECT province, COUNT(*) — for each group we'll see the province and its row count.", vars:{}, output:null},
    {line:3, explanation:"FROM students — all 1000 student rows.", vars:{total_rows:1000}, output:null},
    {line:4, explanation:"GROUP BY province — database groups all rows by province. Creates one group per unique province.", vars:{groups:["Lusaka","Copperbelt","Southern","Eastern","..."]}, output:null},
    {line:4, explanation:"COUNT(*) applied to each group: Lusaka=320, Copperbelt=280, Southern=150...", vars:{}, output:null},
    {line:5, explanation:"HAVING total > 500 — filters groups. Only Lusaka(320) and Copperbelt(280)... wait, none exceed 500 in this example.", vars:{}, output:"province    | num_students\nLusaka      | 320\nCopperbelt  | 280"}
  ],
        worked:{
  scenario:"A school database needs a results table linked to the students table.",
  problem:"Create a results table with: id (PK), student_id (FK to students), subject (text, required), score (real), year (integer, default current year 2024).",
  steps:[
    {explain:"Create the table with appropriate types.", code:"CREATE TABLE results (\n  id INTEGER PRIMARY KEY AUTOINCREMENT,\n  student_id INTEGER NOT NULL,"},
    {explain:"Add the remaining columns with constraints.", code:"  subject TEXT NOT NULL,\n  score   REAL,\n  year    INTEGER DEFAULT 2024,"},
    {explain:"Add the foreign key reference and close the definition.", code:"  FOREIGN KEY (student_id) REFERENCES students(id)\n);"}
  ],
  answer:"Table created with 5 columns. student_id is linked to students table. year defaults to 2024 if not provided.",
  answerCode:"CREATE TABLE results (\n  id         INTEGER PRIMARY KEY AUTOINCREMENT,\n  student_id INTEGER NOT NULL,\n  subject    TEXT NOT NULL,\n  score      REAL,\n  year       INTEGER DEFAULT 2024,\n  FOREIGN KEY (student_id) REFERENCES students(id)\n);",
  insight:"The FOREIGN KEY constraint prevents inserting a result with a student_id that doesn't exist in the students table. This enforces referential integrity — no orphaned results."
},
      },
      {
        id:"sq8", title:"JOIN — Combining Tables", form:4,
        lesson:`A JOIN combines rows from two or more tables based on a related column. This is what makes relational databases powerful — you store data efficiently in separate tables and bring it together when needed.

INNER JOIN returns only rows that have a MATCH in BOTH tables:
SELECT s.name, r.score
FROM students s
INNER JOIN results r ON s.id = r.student_id;

If a student has no results, they are excluded. If a result has no matching student, it is also excluded.

The ON clause specifies HOW the tables are related.
Table aliases like s and r shorten the query so you write s.name instead of students.name.

LEFT JOIN returns ALL rows from the LEFT table, plus matching rows from the right. Non-matching right-side columns show NULL:
SELECT s.name, r.score
FROM students s
LEFT JOIN results r ON s.id = r.student_id;
Students without results still appear — their score shows as NULL.

Joining three tables:
SELECT s.name, sub.subject_name, r.score
FROM students s
JOIN results r ON s.id = r.student_id
JOIN subjects sub ON r.subject_id = sub.id;

Common JOIN mistake: forgetting the ON clause creates a CARTESIAN PRODUCT — every student row paired with every result row, producing thousands of wrong combinations.`,
        code:`-- Students table has province_id\n-- Provinces table has province names\n\n-- INNER JOIN: only students with a known province\nSELECT s.name, p.province_name\nFROM students s\nINNER JOIN provinces p ON s.province_id = p.id;\n\n-- LEFT JOIN: all students, even those with no province set\nSELECT s.name, p.province_name\nFROM students s\nLEFT JOIN provinces p ON s.province_id = p.id;\n\n-- JOIN three tables: student, result, subject\nSELECT s.name, sub.subject_name, r.score\nFROM students s\nJOIN results r   ON s.id = r.student_id\nJOIN subjects sub ON r.subject_id = sub.id;`,
        explanation:"ON specifies the matching condition between tables. INNER JOIN excludes rows with no match. LEFT JOIN keeps all left-table rows and fills NULLs for missing right-table data. Aliases (s, p) shorten table names.",
        ecz:"JOIN is the hardest and most rewarding SQL topic. INNER JOIN returns only matching rows. Know the ON clause. Expect: join students and results tables to show name and score together.",
        question:{text:"What does INNER JOIN return?",options:["All rows from both tables","Only rows that have a match in both tables","All rows from the left table","All rows from the right table"],answer:1,hint:"INNER JOIN returns only rows where the ON condition matches in both tables. Non-matching rows are excluded."},
        q2:{text:"When would you use LEFT JOIN instead of INNER JOIN?",options:["When you want fewer results","When you want all rows from the left table even if there is no match on the right","When both tables are identical","When you want to delete rows"],answer:1,hint:"LEFT JOIN keeps every row from the left table. Columns from the right table are NULL where no match exists."},
        q3:{text:"SELECT s.name, r.score FROM students s JOIN results r ON s.id = r.student_id — what does ON specify?",options:["The column to sort by","The condition that links the two tables","The column to display","A filter like WHERE"],answer:1,hint:"ON s.id = r.student_id tells SQL how the two tables are related — match student id to result's student_id."},
        trace:[
    {line:3, explanation:"FROM students s — students table, aliased as 's' to keep SQL shorter.", vars:{}, output:null},
    {line:4, explanation:"INNER JOIN provinces p ON s.province_id = p.id — for each student row, find the matching province row where IDs match.", vars:{join:"s.province_id = p.id"}, output:null},
    {line:4, explanation:"Student: Chanda, province_id=1. Province: id=1, name='Lusaka'. Match! Row included.", vars:{}, output:null},
    {line:4, explanation:"Student: Bupe, province_id=NULL. No match in provinces — INNER JOIN excludes this row.", vars:{excluded:"Bupe (no province_id)"}, output:null},
    {line:4, explanation:"INNER JOIN result: only students with a matching province appear.", vars:{}, output:"name    | province_name\nChanda  | Lusaka\nMwamba  | Copperbelt"}
  ],
        worked:{
  scenario:"An ECZ analyst needs summary statistics for a national exam sitting.",
  problem:"Write a query that returns the total number of students who sat an exam, the average score, and the highest and lowest scores from the results table.",
  steps:[
    {explain:"Use multiple aggregate functions in one SELECT.", code:"SELECT\n  COUNT(*) AS total_students,"},
    {explain:"Add average, max, and min with aliases.", code:"  ROUND(AVG(score), 1) AS average,\n  MAX(score) AS highest,\n  MIN(score) AS lowest"},
    {explain:"Specify the source table.", code:"FROM results;"}
  ],
  answer:"Returns one row with all four statistics: e.g. 850 | 67.3 | 98 | 22",
  answerCode:"SELECT\n  COUNT(*) AS total_students,\n  ROUND(AVG(score), 1) AS average,\n  MAX(score) AS highest,\n  MIN(score) AS lowest\nFROM results;",
  insight:"All four aggregates compute in one pass — efficient. AS gives readable column names. ROUND(AVG(score), 1) formats the average to 1 decimal place."
},
      },
      {
        id:"sq9", title:"Subqueries", form:4,
        lesson:`A subquery is a SELECT statement nested inside another SQL statement. The inner query runs FIRST and its result is used by the outer query.

In WHERE clause to filter based on a calculated value:
SELECT name, score
FROM results
WHERE score > (SELECT AVG(score) FROM results);
The inner query calculates the class average. The outer query finds students who scored above it.

In WHERE with IN to filter against a list of values:
SELECT name FROM students
WHERE id IN (SELECT DISTINCT student_id FROM results);
Returns only students who have at least one result recorded.

In FROM clause to treat a query result as a table:
SELECT province, avg_score
FROM (
    SELECT province, AVG(score) AS avg_score
    FROM students s JOIN results r ON s.id = r.student_id
    GROUP BY province
) AS provincial_averages
WHERE avg_score > 70;

Correlated subqueries reference the outer query and run once for each outer row:
SELECT s.name
FROM students s
WHERE s.score = (SELECT MAX(score) FROM results WHERE subject = s.subject);
This finds the top scorer in each subject.

Subquery vs JOIN: both can often achieve the same result. JOINs are generally faster. Subqueries are sometimes more readable.`,
        code:`-- Find students who scored above the class average\nSELECT name, score\nFROM results\nWHERE score > (\n  SELECT AVG(score) FROM results\n);\n\n-- Find students who have submitted at least one result\nSELECT name FROM students\nWHERE id IN (\n  SELECT DISTINCT student_id FROM results\n);\n\n-- Find the top scorer's name\nSELECT name FROM students\nWHERE id = (\n  SELECT student_id FROM results\n  ORDER BY score DESC\n  LIMIT 1\n);`,
        explanation:"The inner SELECT AVG(score) runs first and returns a number. The outer WHERE compares each score to that number. IN checks if a value appears in the subquery's results.",
        ecz:"Subqueries appear in Form 4 papers. The most common: find students who scored above the class average using WHERE score > (SELECT AVG(score) FROM results). Inner query runs first.",
        question:{text:"In a subquery, which part runs first?",options:["The outer query","The inner (nested) query","Both run simultaneously","The FROM clause"],answer:1,hint:"The inner query always executes first. Its result is then used by the outer query."},
        q2:{text:"SELECT name FROM students WHERE id IN (SELECT student_id FROM results) — what does the IN subquery do?",options:["Joins the two tables","Returns a list of student_ids that the outer query checks against","Counts the results","Deletes non-matching students"],answer:1,hint:"IN (subquery) checks if id matches any value in the list returned by the subquery."},
        q3:{text:"When is a subquery better than a JOIN?",options:["Always — subqueries are faster","When you only need data from one table but need to filter based on another","When displaying columns from both tables","Subqueries are never better"],answer:1,hint:"Use a subquery when you need to filter using values from another table but do not need to display that table's columns."},
        trace:[
    {line:2, explanation:"Outer query: SELECT name, score FROM results WHERE score > (...)", vars:{}, output:null},
    {line:3, explanation:"Inner query runs FIRST: SELECT AVG(score) FROM results → returns 68.4.", vars:{avg:68.4}, output:null},
    {line:2, explanation:"Outer query now becomes: WHERE score > 68.4 — filters results.", vars:{threshold:68.4}, output:null},
    {line:2, explanation:"Rows where score > 68.4: Chanda(88)✓, Chilufya(95)✓, Mwamba(45)✗...", vars:{}, output:null},
    {line:2, explanation:"Returns all students who scored above the class average.", vars:{}, output:"name     | score\nChanda   | 88\nChilufya | 95"}
  ],
        worked:{
  scenario:"An ECZ report needs to show the pass rate for each subject across all schools.",
  problem:"Count total students and passing students (score>=50) per subject. Show only subjects with more than 100 students. Order by pass count descending.",
  steps:[
    {explain:"Select subject, total count, and conditional sum for passes.", code:"SELECT subject,\n  COUNT(*) AS total,\n  SUM(CASE WHEN score >= 50 THEN 1 ELSE 0 END) AS passed"},
    {explain:"Specify the table and group by subject.", code:"FROM results\nGROUP BY subject"},
    {explain:"Filter groups with HAVING and sort.", code:"HAVING total > 100\nORDER BY passed DESC;"}
  ],
  answer:"Returns one row per subject with >100 students, showing total and pass count, sorted by most passes first.",
  answerCode:"SELECT subject,\n  COUNT(*) AS total,\n  SUM(CASE WHEN score>=50 THEN 1 ELSE 0 END) AS passed\nFROM results\nGROUP BY subject\nHAVING total > 100\nORDER BY passed DESC;",
  insight:"HAVING filters after grouping. WHERE filters before. You cannot use WHERE total > 100 because total is computed by GROUP BY — it doesn't exist yet when WHERE runs."
},
      },
      {
        id:"sq10", title:"Indexes & Performance", form:4,
        lesson:`An index is a separate data structure that the database maintains to speed up queries. Without an index, a query searching for students from Lusaka must scan EVERY row — called a full table scan. With an index on the province column, the database jumps directly to the Lusaka rows.

Think of an index like the index at the back of a textbook. Without it, you scan every page looking for a topic. With the index, you look up the page number directly.

Creating an index:
CREATE INDEX idx_province ON students(province);
CREATE INDEX idx_score ON results(score);

Unique index enforces uniqueness AND speeds up lookups:
CREATE UNIQUE INDEX idx_email ON students(email);
This prevents two students from having the same email address.

Composite index covers multiple columns together:
CREATE INDEX idx_subject_year ON results(subject, year);
Useful when queries filter on BOTH columns together.

Checking how a query uses indexes in SQLite:
EXPLAIN QUERY PLAN SELECT * FROM students WHERE province = 'Lusaka';
Output shows SEARCH USING INDEX if the index is used, or SCAN TABLE (slow) if not.

The trade-off of indexes:
Benefit: dramatically faster SELECT queries.
Cost: slower INSERT, UPDATE, DELETE because the index must also be updated.
Cost: additional storage space on disk.

Remove an index: DROP INDEX idx_province;`,
        code:`-- Create an index on province for faster filtering\nCREATE INDEX idx_province\nON students(province);\n\n-- Create a unique index (also enforces uniqueness)\nCREATE UNIQUE INDEX idx_student_email\nON students(email);\n\n-- Composite index on two columns\nCREATE INDEX idx_subject_year\nON results(subject, year);\n\n-- Check if a query uses an index (SQLite)\nEXPLAIN QUERY PLAN\nSELECT * FROM students WHERE province = 'Lusaka';`,
        explanation:"CREATE INDEX name ON table(column) creates the index. UNIQUE enforces no duplicates. Composite indexes cover queries filtering on multiple columns. EXPLAIN QUERY PLAN shows how SQLite executes a query.",
        question:{text:"What is the main benefit of adding an index to a column?",options:["Reduces storage space","Speeds up SELECT queries that filter on that column","Makes INSERT faster","Prevents duplicate values"],answer:1,hint:"An index lets SQL find matching rows quickly without scanning the entire table."},
        q2:{text:"What is the trade-off of adding many indexes to a table?",options:["Queries become slower","INSERT, UPDATE, DELETE slow down because indexes must also be updated","Tables use less storage","No trade-off — always beneficial"],answer:1,hint:"Every write operation must update all relevant indexes. Too many indexes hurts write performance."},
        q3:{text:"CREATE UNIQUE INDEX idx_email ON students(email) — what extra constraint does UNIQUE add?",options:["Speeds up queries twice as fast","Ensures no two rows can have the same email value","Creates a primary key","Automatically sorts by email"],answer:1,hint:"UNIQUE on an index enforces that every value in that column must be different — like a PRIMARY KEY constraint."},
        trace:[
    {line:2, explanation:"CREATE INDEX idx_province — tells the database to build a lookup structure on the province column.", vars:{index:"building..."}, output:null},
    {line:3, explanation:"ON students(province) — the index scans all rows and builds a sorted tree of province values → row pointers.", vars:{index:"idx_province built"}, output:null},
    {line:6, explanation:"CREATE UNIQUE INDEX idx_student_email — UNIQUE means the index also enforces no duplicate emails.", vars:{index:"idx_student_email (unique)"}, output:null},
    {line:10, explanation:"EXPLAIN QUERY PLAN — shows how the database executes the query. Without index: SCAN TABLE (slow). With index: SEARCH USING INDEX (fast).", vars:{plan:"SEARCH USING INDEX idx_province"}, output:"SEARCH TABLE students USING INDEX idx_province (province=?)"}
  ],
        worked:{
  scenario:"A school report needs both student names and their exam scores — stored in separate tables.",
  problem:"Write a query that returns each student's name and their Mathematics score by JOINing the students and results tables.",
  steps:[
    {explain:"Select columns from both tables using table aliases.", code:"SELECT s.name, r.score"},
    {explain:"JOIN the two tables on the matching ID columns.", code:"FROM students s\nINNER JOIN results r ON s.id = r.student_id"},
    {explain:"Filter to Mathematics only.", code:"WHERE r.subject = 'Mathematics'\nORDER BY r.score DESC;"}
  ],
  answer:"Returns name and maths score for every student who has a maths result, sorted by score.",
  answerCode:"SELECT s.name, r.score\nFROM students s\nINNER JOIN results r ON s.id = r.student_id\nWHERE r.subject = 'Mathematics'\nORDER BY r.score DESC;",
  insight:"ON s.id = r.student_id is the join condition — it tells SQL how the tables relate. Without ON, you'd get a Cartesian product: every student paired with every result (thousands of wrong rows)."
},
      },
      {
        id:"sq11", title:"NULL Values", form:3,
        lesson:`NULL in SQL means unknown or missing — it is NOT the same as zero, empty string, or FALSE. NULL is its own special state representing the absence of a value.

Why NULL exists: when a student is registered but their score is not yet recorded, the score should be NULL — not 0 (which would be a real failing score) and not an empty string.

The critical rule: you CANNOT compare NULL using equals.
WHERE province = NULL is WRONG — it never matches anything, even if province IS null.
WHERE province IS NULL is CORRECT — it finds rows with no province recorded.

Similarly:
WHERE province != NULL is WRONG.
WHERE province IS NOT NULL is CORRECT — finds rows with a province recorded.

NULL in arithmetic and comparisons:
5 + NULL equals NULL because unknown plus anything equals unknown.
NULL > 5 returns NULL — neither true nor false.
NULL = NULL returns NULL — two unknown things are not necessarily equal.

Aggregate functions and NULL:
COUNT(*) counts ALL rows including those with NULL in any column.
COUNT(score) counts only rows where score IS NOT NULL.
AVG, SUM, MAX, and MIN all IGNORE NULL values.

COALESCE(value, default) returns the first non-NULL argument:
SELECT name, COALESCE(province, 'Not recorded') AS province FROM students;
When province is NULL, this displays Not recorded instead.

IFNULL(value, default) is SQLite shorthand: IFNULL(score, 0) returns 0 if score is NULL.`,
        code:`-- Find students with no province recorded\nSELECT name FROM students\nWHERE province IS NULL;\n\n-- Find students who DO have a province\nSELECT name FROM students\nWHERE province IS NOT NULL;\n\n-- Replace NULL with a default using COALESCE\nSELECT name,\n  COALESCE(province, 'Unknown') AS province\nFROM students;\n\n-- NULL arithmetic always gives NULL\n-- SELECT 5 + NULL  →  NULL`,
        explanation:"IS NULL checks for missing values — = NULL never works. IS NOT NULL finds rows with data. COALESCE(value, default) returns the first non-NULL argument — useful for display. Any arithmetic with NULL produces NULL.",
        question:{text:"How do you correctly check if a column value is NULL in SQL?",options:["WHERE province = NULL","WHERE province == NULL","WHERE province IS NULL","WHERE province EQUALS NULL"],answer:2,hint:"NULL cannot be compared with =. You must use IS NULL or IS NOT NULL."},
        q2:{text:"What does COALESCE(province, 'Unknown') return when province IS NULL?",options:["NULL","''","'Unknown'","An error"],answer:2,hint:"COALESCE returns the first non-NULL argument. If province is NULL, it returns 'Unknown'."},
        q3:{text:"A column has values: 80, NULL, 60, NULL, 90. What does AVG(score) return?",options:["66 (including NULLs as 0)","76.67 (average of 80,60,90 — NULLs ignored)","NULL","An error"],answer:1,hint:"Aggregate functions like AVG() ignore NULL values. AVG(80,60,90) = 230/3 = 76.67."},
        trace:[
    {line:2, explanation:"SELECT name FROM students WHERE province IS NULL — IS NULL checks for missing values. = NULL would never match anything.", vars:{filter:"IS NULL"}, output:null},
    {line:2, explanation:"Scans all rows. Returns only students where province was never set.", vars:{}, output:"name\nMwika Phiri\nSusiku Banda"},
    {line:5, explanation:"SELECT name, COALESCE(province, 'Unknown') — for each row, if province is NULL return 'Unknown', else return province.", vars:{}, output:null},
    {line:5, explanation:"Chanda: province='Lusaka' → 'Lusaka'. Mwika: province=NULL → 'Unknown'.", vars:{}, output:"name    | province\nChanda  | Lusaka\nMwika   | Unknown"},
    {line:9, explanation:"5 + NULL — any arithmetic with NULL produces NULL. NULL represents unknown, not zero.", vars:{result:"NULL"}, output:"NULL"}
  ],
        worked:{
  scenario:"A school wants to identify students who scored above the class average in Mathematics.",
  problem:"Write a query using a subquery to find students whose Maths score is above the average Maths score.",
  steps:[
    {explain:"The outer query selects name and score from results.", code:"SELECT name, score\nFROM results"},
    {explain:"WHERE filters using the result of an inner subquery.", code:"WHERE subject = 'Mathematics'\nAND score > ("},
    {explain:"The inner query calculates the average Maths score.", code:"    SELECT AVG(score)\n    FROM results\n    WHERE subject = 'Mathematics'\n);"}
  ],
  answer:"Inner query runs first, returns e.g. 64.2. Outer query then finds all Maths scores above 64.2.",
  answerCode:"SELECT name, score\nFROM results\nWHERE subject = 'Mathematics'\nAND score > (\n    SELECT AVG(score)\n    FROM results\n    WHERE subject = 'Mathematics'\n);",
  insight:"The subquery is in parentheses and runs first. Its single result (the average) is then used by the outer WHERE clause. This is more flexible than hardcoding a fixed threshold."
},
      },
      {
        id:"sq12", title:"String Functions", form:3,
        lesson:`SQL provides several built-in functions for manipulating text data stored in your tables. These let you transform, search, and extract text directly in your queries.

Case conversion:
UPPER(name) converts text to uppercase — 'chanda' becomes 'CHANDA'.
LOWER(name) converts to lowercase — 'CHANDA' becomes 'chanda'.
SELECT UPPER(name) AS name_upper FROM students;

Length:
LENGTH(string) returns the number of characters.
SELECT name, LENGTH(name) AS name_length FROM students ORDER BY name_length DESC;

Substring extraction:
SUBSTR(string, start, length) extracts a portion. In SQL, start=1 is the first character.
SUBSTR('Copperbelt', 1, 6) returns 'Copper'.
SUBSTR('Copperbelt', 7) returns 'belt' (from position 7 to end).

Find and replace:
REPLACE(string, find, replacement) replaces all occurrences.
REPLACE('Zambia (Africa)', '(Africa)', '') returns 'Zambia '.

Removing whitespace:
TRIM(string) removes leading and trailing spaces.
LTRIM and RTRIM remove only left or right spaces.

Pattern matching with LIKE:
% matches any sequence including empty.
_ matches exactly one character.
WHERE name LIKE 'Ch%' finds names starting with Ch.
WHERE name LIKE '%son' finds names ending with son.

These functions are especially useful for cleaning inconsistent data — converting all-caps names, stripping extra spaces, or standardising province names entered differently by different users.`,
        code:`-- Zambian student name operations\n\n-- Convert names to uppercase\nSELECT UPPER(name) AS name_upper FROM students;\n\n-- Find students whose name starts with 'Ch'\nSELECT name FROM students\nWHERE name LIKE 'Ch%';\n\n-- Find names containing 'Mwam'\nSELECT name FROM students\nWHERE name LIKE '%Mwam%';\n\n-- Extract first 4 characters of province\nSELECT SUBSTR(province, 1, 4) AS short_prov\nFROM students;\n\n-- Name length\nSELECT name, LENGTH(name) AS name_len\nFROM students\nORDER BY name_len DESC;`,
        explanation:"LIKE uses % as wildcard (any characters) and _ for one character. SUBSTR(string, start, length) extracts a substring — SQL uses 1-based indexing. LENGTH() counts characters including spaces.",
        question:{text:"In SQL LIKE, what does the % wildcard match?",options:["Exactly one character","Any single digit","Any sequence of zero or more characters","Only letters"],answer:2,hint:"% matches any sequence of characters (including none). 'Ch%' matches Chanda, Chilufya, Chisomo, etc."},
        q2:{text:"SELECT name FROM students WHERE name LIKE '_upe' — which name does this match?",options:["Chisomo","Bupe","Mwamba","Thandiwe"],answer:1,hint:"_ matches exactly one character. '_upe' matches any 4-letter name ending in 'upe' — like 'Bupe'."},
        q3:{text:"What does SUBSTR('Copperbelt', 1, 6) return?",options:["'Copper'","'Copperb'","'belt'","'Copperbelt'"],answer:0,hint:"SUBSTR(string, start, length) — start at position 1, take 6 characters: C-o-p-p-e-r."},
        trace:[
    {line:2, explanation:"SELECT UPPER(name) — converts every name to uppercase.", vars:{}, output:null},
    {line:2, explanation:"'Chanda Mutale' → 'CHANDA MUTALE'. Applied to every row.", vars:{}, output:"CHANDA MUTALE\nBUPE ZULU\n..."},
    {line:5, explanation:"WHERE name LIKE 'Ch%' — % matches any characters. 'Ch%' matches any name starting with Ch.", vars:{pattern:"Ch%"}, output:null},
    {line:5, explanation:"Chanda✓ Chilufya✓ Chisomo✓. Bupe✗ Mwamba✗.", vars:{matches:"Chanda, Chilufya, Chisomo"}, output:"Chanda\nChilufya\nChisomo"},
    {line:9, explanation:"SUBSTR('Copperbelt', 1, 6) — start at position 1, take 6 characters: C-o-p-p-e-r.", vars:{result:"Copper"}, output:"Copper"},
    {line:12, explanation:"LENGTH(name) — counts characters. 'Chanda'=6, 'Thandiwe'=8. ORDER BY name_len DESC puts longest names first.", vars:{}, output:"Thandiwe | 8\nChanda   | 6"}
  ],
        worked:{
  scenario:"A large school database is slow when searching by province. An index will speed it up.",
  problem:"Create an index on the province column of the students table. Then write the query that benefits from it.",
  steps:[
    {explain:"Create a named index on the specific column.", code:"CREATE INDEX idx_students_province\nON students(province);"},
    {explain:"Now run the query — the database uses the index automatically.", code:"SELECT name, form\nFROM students\nWHERE province = 'Copperbelt'\nORDER BY name;"},
    {explain:"Check query plan to confirm index usage (SQLite).", code:"EXPLAIN QUERY PLAN\nSELECT name FROM students\nWHERE province = 'Copperbelt';"}
  ],
  answer:"Index created. Without index: full table scan (slow). With index: direct lookup (fast).",
  answerCode:"CREATE INDEX idx_students_province ON students(province);\nSELECT name, form FROM students\nWHERE province = 'Copperbelt' ORDER BY name;\nEXPLAIN QUERY PLAN SELECT name FROM students WHERE province='Copperbelt';",
  insight:"An index is like a sorted book index — instead of reading every page (row), the database jumps to matching entries. Most beneficial on columns used frequently in WHERE clauses."
},
      },
      {
        id:"sq13", title:"Views", form:4,
        lesson:`A VIEW is a named, saved SELECT query stored in the database. When you query a view, the database runs the underlying SELECT and returns the results — the view always reflects the current state of the data.

Think of a view as a virtual table. It looks and behaves like a table (you can SELECT from it and join it with other tables), but it contains no data of its own.

Creating a view:
CREATE VIEW passing_students AS
SELECT s.name, r.subject, r.score
FROM students s
JOIN results r ON s.id = r.student_id
WHERE r.score >= 50;

Using the view exactly like a table:
SELECT * FROM passing_students WHERE subject = 'Mathematics';

Why use views?
Simplification: hide complex joins and conditions behind a simple name.
Security: show only certain columns — a teacher_public view without the salary column means nobody querying it can see salaries.
Consistency: business rules defined once and used everywhere.

The security example:
CREATE VIEW teacher_public AS
SELECT id, name, subject, school FROM teachers;
Nobody querying teacher_public can see salaries, even if they try.

Updating a view definition:
CREATE OR REPLACE VIEW passing_students AS
SELECT ... -- new definition

Removing a view:
DROP VIEW passing_students;
This removes only the view definition. The underlying tables are completely unaffected.`,
        code:`-- Create a view of passing students\nCREATE VIEW passing_students AS\nSELECT s.name, r.subject, r.score\nFROM students s\nJOIN results r ON s.id = r.student_id\nWHERE r.score >= 50;\n\n-- Query the view like a normal table\nSELECT * FROM passing_students\nWHERE subject = 'Mathematics';\n\n-- View hiding sensitive salary column\nCREATE VIEW teacher_public AS\nSELECT id, name, subject, school\nFROM teachers;\n-- salary column is hidden from this view\n\n-- Remove a view\nDROP VIEW passing_students;`,
        explanation:"CREATE VIEW name AS SELECT... saves the query. Querying the view re-runs the SELECT against current data. The salary column in teachers is never exposed through teacher_public. DROP VIEW removes the view.",
        question:{text:"What is a SQL VIEW?",options:["A copy of a table stored separately","A saved SELECT query that behaves like a virtual table","A type of index","A backup of the database"],answer:1,hint:"A VIEW is a stored query. It does not store data itself — it runs the query fresh each time you SELECT from it."},
        q2:{text:"Why might you create a view that excludes the salary column from a teachers table?",options:["To speed up queries","To hide sensitive data from users who should not see it","Views always improve performance","To reduce storage"],answer:1,hint:"Views can restrict which columns are visible — a common security technique to hide sensitive fields."},
        q3:{text:"If the underlying students table is updated, what happens to a view based on it?",options:["The view becomes outdated","The view automatically reflects the new data","The view must be recreated","The view is deleted"],answer:1,hint:"A view runs its SELECT query live. It always shows current data from the underlying tables."},
        trace:[
    {line:2, explanation:"CREATE VIEW passing_students AS SELECT ... — saves the query. No data stored yet.", vars:{view:"passing_students (defined)"}, output:null},
    {line:7, explanation:"SELECT * FROM passing_students — database runs the saved SELECT query now, against current data.", vars:{}, output:null},
    {line:8, explanation:"WHERE subject = 'Mathematics' — applied on top of the view's own WHERE score>=50. Both conditions must be true.", vars:{}, output:"name    | subject     | score\nChanda  | Mathematics | 78\nMwamba  | Mathematics | 65"},
    {line:11, explanation:"CREATE VIEW teacher_public AS SELECT id,name,subject,school FROM teachers — salary column deliberately omitted.", vars:{hidden:"salary column"}, output:null},
    {line:14, explanation:"DROP VIEW passing_students — removes the view definition. The underlying tables are unaffected.", vars:{view:"passing_students (dropped)"}, output:null}
  ],
        worked:{
  scenario:"A student record system has some missing province data. The admin needs to find and handle those gaps.",
  problem:"Find all students with no province recorded. Then display all students, replacing NULL province with 'Not Recorded'.",
  steps:[
    {explain:"Find NULL values using IS NULL — never use = NULL.", code:"SELECT name\nFROM students\nWHERE province IS NULL;"},
    {explain:"Use COALESCE to replace NULLs with a default in SELECT.", code:"SELECT name,\n  COALESCE(province, 'Not Recorded') AS province\nFROM students;"}
  ],
  answer:"First query: students with no province. Second: all students with NULLs shown as 'Not Recorded'.",
  answerCode:"-- Find students with missing province\nSELECT name FROM students WHERE province IS NULL;\n\n-- Display with fallback\nSELECT name, COALESCE(province,'Not Recorded') AS province\nFROM students;",
  insight:"WHERE province = NULL never matches anything — NULL is not equal to NULL in SQL. Always use IS NULL or IS NOT NULL. COALESCE does not change the stored data — it only affects the display."
},
      },
      {
        id:"sq14", title:"Transactions", form:4,
        lesson:`A transaction groups multiple SQL operations into one atomic unit. Atomic means ALL operations succeed together, or ALL are undone together — there is no partial success.

Why transactions matter — the bank transfer problem:
Step 1: Deduct K500 from Chanda's account.
Step 2: Add K500 to Mwamba's account.

What if the system crashes after Step 1 but before Step 2? Without transactions, Chanda loses K500 and Mwamba never receives it. Money is destroyed.

With transactions, either BOTH steps complete or NEITHER does.

Transaction commands:
BEGIN TRANSACTION; starts the transaction.
COMMIT; makes all changes permanent.
ROLLBACK; undoes ALL changes since BEGIN TRANSACTION.

Example:
BEGIN TRANSACTION;
  UPDATE accounts SET balance = balance - 500 WHERE id = 101;
  UPDATE accounts SET balance = balance + 500 WHERE id = 202;
COMMIT;

If anything fails between BEGIN and COMMIT, run ROLLBACK to undo everything.

ACID properties — the four guarantees of a transaction:
Atomicity means all or nothing.
Consistency means the database moves from one valid state to another.
Isolation means concurrent transactions do not interfere with each other.
Durability means committed transactions survive system crashes.

When to use transactions: any operation involving multiple related changes such as transfers, bookings, and orders. Real systems use transactions constantly — every mobile money transfer is wrapped in a transaction.`,
        code:`-- Mobile money transfer at a Zambian fintech\n-- Must debit sender AND credit receiver atomically\n\nBEGIN TRANSACTION;\n\n  UPDATE accounts\n  SET balance = balance - 500\n  WHERE account_id = 101;  -- debit Chanda\n\n  UPDATE accounts\n  SET balance = balance + 500\n  WHERE account_id = 202;  -- credit Mwamba\n\nCOMMIT;  -- both succeeded — save changes\n\n-- If anything went wrong:\n-- ROLLBACK;  -- undo ALL changes`,
        explanation:"BEGIN TRANSACTION starts the transaction. COMMIT saves all changes permanently. ROLLBACK undoes all changes back to the BEGIN. Without transactions, a crash between the two UPDATEs would lose money.",
        question:{text:"What does ROLLBACK do in a SQL transaction?",options:["Saves all changes permanently","Undoes all changes back to the last BEGIN TRANSACTION","Deletes the table","Starts a new transaction"],answer:1,hint:"ROLLBACK reverses all changes made since BEGIN TRANSACTION — as if they never happened."},
        q2:{text:"Why are transactions essential for a mobile money transfer (debit + credit)?",options:["They make queries faster","They ensure both operations succeed or both are undone — preventing money being lost or created","They automatically log the transaction","They lock the table for other users"],answer:1,hint:"If a debit succeeds but the credit fails (e.g. power cut), a transaction ensures the debit is rolled back — keeping balances consistent."},
        q3:{text:"What does COMMIT do?",options:["Cancels the transaction","Starts a new transaction","Permanently saves all changes made in the transaction","Creates a backup"],answer:2,hint:"COMMIT finalises the transaction — all changes become permanent and visible to other users."},
        trace:[
    {line:1, explanation:"BEGIN TRANSACTION — starts a transaction. All following changes are tentative until COMMIT.", vars:{transaction:"open"}, output:null},
    {line:3, explanation:"UPDATE accounts SET balance = balance - 500 WHERE account_id = 101 — debits Chanda K500. Change is tentative.", vars:{"acc_101_balance":"K1500 → K1000 (tentative)"}, output:null},
    {line:7, explanation:"UPDATE accounts SET balance = balance + 500 WHERE account_id = 202 — credits Mwamba K500. Also tentative.", vars:{"acc_202_balance":"K800 → K1300 (tentative)"}, output:null},
    {line:10, explanation:"COMMIT — both changes are now permanent and visible to all users. Transaction closed.", vars:{"acc_101_balance":"K1000 (permanent)", "acc_202_balance":"K1300 (permanent)", transaction:"committed"}, output:null}
  ],
        worked:{
  scenario:"A school wants to find all students whose names start with 'Ch' (common Zambian names like Chanda, Chilufya, Chisomo).",
  problem:"Write a query to find all students whose name starts with 'Ch', then also show their name length, sorted by length ascending.",
  steps:[
    {explain:"Use LIKE with % wildcard to match any characters after 'Ch'.", code:"SELECT name,\n  LENGTH(name) AS name_length"},
    {explain:"Filter names starting with Ch.", code:"FROM students\nWHERE name LIKE 'Ch%'"},
    {explain:"Sort by name length shortest to longest.", code:"ORDER BY name_length ASC;"}
  ],
  answer:"Returns Chanda(6), Chisomo(7), Chilufya(8) etc. ordered by name length.",
  answerCode:"SELECT name, LENGTH(name) AS name_length\nFROM students\nWHERE name LIKE 'Ch%'\nORDER BY name_length ASC;",
  insight:"'Ch%' matches any name starting with Ch — Chanda, Chileshe, Chombe etc. 'Ch_' (underscore) would match only 3-letter names starting with Ch. % = any number of chars, _ = exactly one."
},
      },
      {
        id:"sq15", title:"SQL in Practice — Zambia Case Study", form:4,
        lesson:`This final lesson brings together all SQL concepts to solve real data problems. SELECT, WHERE, ORDER BY, LIMIT, JOIN, GROUP BY, HAVING, aggregates, subqueries, and CASE — used together in the kind of queries that appear in real Zambian organisations.

ECZ-style scenario: analysing national Grade 12 exam results across provinces.

The database has:
students (id, name, province, school)
results (id, student_id, subject, score, year)

Query 1 — Top 5 students nationally by average score:
SELECT s.name, s.province, ROUND(AVG(r.score),1) AS avg_score
FROM students s
JOIN results r ON s.id = r.student_id
WHERE r.year = 2024
GROUP BY s.id, s.name, s.province
ORDER BY avg_score DESC
LIMIT 5;

Reading this query: JOIN links students to results. GROUP BY creates one group per student. AVG averages that student's scores. ORDER BY puts highest first. LIMIT 5 returns only the top five.

Query 2 — Pass rate per province:
SELECT s.province,
  COUNT(DISTINCT s.id) AS total_students,
  SUM(CASE WHEN r.score >= 50 THEN 1 ELSE 0 END) AS passed
FROM students s
JOIN results r ON s.id = r.student_id
GROUP BY s.province
ORDER BY passed DESC;

COUNT(DISTINCT s.id) ensures each student is counted once. The CASE WHEN expression converts each score to 1 (pass) or 0 (fail) for easy counting.`,
        code:`-- ECZ-style exam results database\n\n-- Top 5 students nationally\nSELECT s.name, s.province, AVG(r.score) AS avg_score\nFROM students s\nJOIN results r ON s.id = r.student_id\nGROUP BY s.id\nORDER BY avg_score DESC\nLIMIT 5;\n\n-- Pass rate per province\nSELECT s.province,\n  COUNT(*) AS total,\n  SUM(CASE WHEN r.score >= 50 THEN 1 ELSE 0 END) AS passed,\n  ROUND(100.0 * SUM(CASE WHEN r.score >= 50 THEN 1 ELSE 0 END) / COUNT(*), 1) AS pass_rate\nFROM students s\nJOIN results r ON s.id = r.student_id\nGROUP BY s.province\nORDER BY pass_rate DESC;`,
        explanation:"The first query JOINs students and results, groups by student, averages their scores, and returns the top 5. The second uses CASE WHEN inside SUM to count passes — a powerful pattern for conditional aggregation.",
        question:{text:"In the top 5 students query, what does GROUP BY s.id do?",options:["Filters to only 5 students","Groups all results per student so AVG can be computed per person","Sorts students by ID","Joins the two tables"],answer:1,hint:"GROUP BY s.id creates one group per student. AVG(r.score) then averages all that student's subject scores."},
        q2:{text:"What does CASE WHEN r.score >= 50 THEN 1 ELSE 0 END do inside SUM()?",options:["Returns 1 for every row","Returns 1 for passing scores and 0 for failing — SUM counts the passes","Filters out failing students","Calculates the average score"],answer:1,hint:"CASE WHEN turns a condition into a number (1=pass, 0=fail). SUM adds them up — giving a count of passing rows."},
        q3:{text:"ROUND(100.0 * passed / total, 1) — why multiply by 100.0 instead of 100?",options:["No difference","100.0 forces decimal division; 100 with two integers would give integer division in some databases","100.0 is more accurate","It is a style convention only"],answer:1,hint:"In many SQL engines, integer/integer = integer (e.g. 3/4 = 0). Using 100.0 forces floating-point division so you get 75.0 instead of 0."},
        trace:[
    {line:2, explanation:"SELECT s.name, s.province, AVG(r.score) — three columns: name, province, and computed average score.", vars:{}, output:null},
    {line:3, explanation:"FROM students s JOIN results r ON s.id = r.student_id — links each student to all their results.", vars:{join:"students ↔ results"}, output:null},
    {line:4, explanation:"GROUP BY s.id — groups all result rows per student so AVG can compute per-student average.", vars:{groups:"one per student"}, output:null},
    {line:5, explanation:"ORDER BY avg_score DESC LIMIT 5 — sorts by average descending, returns top 5 only.", vars:{}, output:"name       | province   | avg_score\nChilufya   | Lusaka     | 91.2\nThandiwe   | Copperbelt | 89.7\n..."},
    {line:9, explanation:"CASE WHEN r.score>=50 THEN 1 ELSE 0 END — converts each result to 1 (pass) or 0 (fail). SUM counts passes.", vars:{logic:"pass=1, fail=0"}, output:null},
    {line:11, explanation:"ROUND(100.0 * passed / total, 1) — 100.0 forces float division. Rounded to 1 decimal.", vars:{}, output:"province    | total | passed | pass_rate\nLusaka      | 320   | 256    | 80.0\nCopperbelt  | 280   | 218    | 77.9"}
  ],
        worked:{
  scenario:"ECZ needs a province-level summary: total students and average score per province for the 2024 Grade 12 exam.",
  problem:"Write a query joining students and results, grouping by province, showing province, student count, and average score. Sort by average descending.",
  steps:[
    {explain:"Select the grouping column and two aggregates.", code:"SELECT s.province,\n  COUNT(DISTINCT s.id) AS students,\n  ROUND(AVG(r.score), 1) AS avg_score"},
    {explain:"JOIN students to results and filter for 2024.", code:"FROM students s\nJOIN results r ON s.id = r.student_id\nWHERE r.year = 2024"},
    {explain:"Group by province and sort by best average first.", code:"GROUP BY s.province\nORDER BY avg_score DESC;"}
  ],
  answer:"One row per province showing total unique students and their average score, best province first.",
  answerCode:"SELECT s.province,\n  COUNT(DISTINCT s.id) AS students,\n  ROUND(AVG(r.score),1) AS avg_score\nFROM students s\nJOIN results r ON s.id=r.student_id\nWHERE r.year=2024\nGROUP BY s.province\nORDER BY avg_score DESC;",
  insight:"COUNT(DISTINCT s.id) counts unique students — a student with 8 subjects would otherwise be counted 8 times. DISTINCT ensures each student is counted once per province."
},
      },
    ],
  }

  ,
  HTML: {
    color: "#e44d26", accent: "#fde8e0", icon: "🌐",
    topics: [
      {
        id:"h1", title:"Introduction to HTML", form:2,
        lesson:`HTML — HyperText Markup Language — is the foundation of every website you have ever visited. When you open a page in a browser, the browser downloads an HTML file and renders it as visual content on your screen.

HTML is NOT a programming language — it is a MARKUP language. You do not give instructions like calculate this or if this then that. Instead, you DESCRIBE and STRUCTURE content using tags.

A tag is a keyword wrapped in angle brackets. Most tags come in pairs with an opening tag and a closing tag that has a forward slash:
Opening tag: <h1>
Closing tag: </h1>
Content goes between them: <h1>Hello</h1>

Self-closing tags have no content and no closing tag: img, br, and hr are examples.

The HTML document structure — every HTML file follows the same skeleton:
1. DOCTYPE declaration tells the browser which HTML version.
2. The html element is the root element wrapping everything.
3. The head contains invisible metadata — title, character encoding, linked files.
4. The body contains the visible content of the page.

Character encoding: meta charset="UTF-8" tells the browser to use UTF-8 encoding — a standard that supports virtually every character in every language.

The browser reads your HTML from top to bottom and renders each element as it goes. Web development is one of the most in-demand skills in Zambia's growing digital economy. Every business, school, and government department needs a website.`,
        code:`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>ZamCode School</title>
</head>
<body>
  <h1>Welcome to ZamCode Academy</h1>
  <p>Learn programming the Zambian way.</p>
  <p>Built for secondary school students across Zambia.</p>
</body>
</html>`,
        explanation:"DOCTYPE tells the browser this is HTML5. The head contains metadata not shown on the page. Everything inside body is visible. h1 is a large heading; p is a paragraph.",
        question:{text:"Which HTML element contains the visible content of a web page?",options:["<head>","<meta>","<body>","<html>"],answer:2,hint:"The <body> element holds everything the user sees — text, images, buttons, and more."},
        q2:{text:"What does the <!DOCTYPE html> declaration do?",options:["Creates the page title","Tells the browser this is HTML5","Links a CSS file","Defines the page language"],answer:1,hint:"DOCTYPE is not a tag — it is an instruction to the browser about which version of HTML to use."},
        q3:{text:"Where should the page title (shown in the browser tab) be placed?",options:["Inside <body>","Inside <h1>","Inside <head> using <title>","At the top of <html>"],answer:2,hint:"<title> lives inside <head>. It sets the text shown in the browser tab, not on the page itself."},
        worked:{scenario:"A student at Kabulonga Girls wants to create her first web page.",problem:"Write a complete HTML page with title 'My School Page', a heading 'Kabulonga Girls Secondary School', and paragraph 'Founded in Lusaka, Zambia.'",steps:[{explain:"Start with the HTML5 boilerplate.",code:"<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>My School Page</title>\n</head>"},{explain:"Add visible content inside body.",code:"<body>\n  <h1>Kabulonga Girls Secondary School</h1>\n  <p>Founded in Lusaka, Zambia.</p>\n</body>\n</html>"}],answer:"A complete page with the correct structure, title in the tab, heading and paragraph visible.",answerCode:"<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>My School Page</title>\n</head>\n<body>\n  <h1>Kabulonga Girls Secondary School</h1>\n  <p>Founded in Lusaka, Zambia.</p>\n</body>\n</html>",insight:"Every HTML page needs this same skeleton. The <head> is invisible setup; the <body> is what users see. Never put visible content inside <head>."}
      },
      {
        id:"h2", title:"Headings, Paragraphs & Text", form:2,
        lesson:`Headings and paragraphs are the most basic building blocks of web content. HTML provides six levels of headings from h1 (most important, largest) to h6 (least important, smallest).

The heading hierarchy represents document structure, not just visual size:
h1 is the main page title — use only ONCE per page.
h2 marks major sections.
h3 marks sub-sections within h2.
h4, h5, and h6 are for deeply nested content.

Never skip levels — screen readers and search engines use heading hierarchy to understand your page structure.

Paragraphs: the p element wraps a paragraph of text. Paragraphs automatically add spacing above and below and each p starts on a new line in the rendered page.

Text formatting tags:
strong signals important content and also makes text bold.
em signals emphasis and also makes text italic.
br is a line break — starts a new line WITHOUT creating a new paragraph.
hr draws a horizontal dividing line.

The difference between strong and bold: strong carries semantic meaning — it tells screen readers this is important content. Bold styling is purely visual.

White space: HTML collapses multiple spaces and line breaks in your code into a single space. To display multiple spaces, use the non-breaking space entity.`,
        code:`<!DOCTYPE html>
<html><body>
  <h1>Zambia — Land of the Victoria Falls</h1>
  <h2>About Zambia</h2>
  <p>Zambia is a <strong>landlocked country</strong> in southern Africa.</p>
  <p>Its capital city is <em>Lusaka</em>, the largest city.</p>
  <h2>Key Facts</h2>
  <h3>Population</h3>
  <p>Approximately <strong>20 million</strong> people call Zambia home.</p>
  <hr>
  <p>Source: <em>Zambia Statistics Agency, 2024</em></p>
</body></html>`,
        explanation:"h1-h2-h3 create hierarchy. <strong> signals bold importance. <em> signals italic emphasis. <hr> draws a visual separator line across the page.",
        question:{text:"Which heading tag creates the largest heading?",options:["<h6>","<h3>","<h1>","<heading>"],answer:2,hint:"h1 is the biggest. h6 is the smallest."},
        q2:{text:"What is the difference between <strong> and <em>?",options:["No difference","<strong> makes text bold; <em> makes text italic","<em> makes text bold; <strong> makes it italic","Both are deprecated"],answer:1,hint:"<strong> = bold importance. <em> = italic emphasis."},
        q3:{text:"You want a new line inside a paragraph without a new paragraph. Which tag?",options:["<nl>","<newline>","<br>","<p>"],answer:2,hint:"<br> is a self-closing line break. It starts a new line without the spacing a new <p> creates."},
        worked:{scenario:"A student is building a Zambia geography page.",problem:"Create a page about the Copperbelt with an h1, an h2 Location section with bold text, and an h2 Major Cities section with an italic note.",steps:[{explain:"Set up the page and h1.",code:"<!DOCTYPE html>\n<html><body>\n  <h1>Copperbelt Province</h1>"},{explain:"Add sections with formatted text.",code:"  <h2>Location</h2>\n  <p>The Copperbelt is in <strong>northern Zambia</strong>, bordering the DRC.</p>\n  <h2>Major Cities</h2>\n  <p>Ndola, Kitwe, and Chingola are the main urban centres.</p>\n  <p><em>Source: Zambia Statistics Agency</em></p>\n</body></html>"}],answer:"A structured page with heading hierarchy, bold and italic text.",answerCode:"<!DOCTYPE html>\n<html><body>\n  <h1>Copperbelt Province</h1>\n  <h2>Location</h2>\n  <p>The Copperbelt is in <strong>northern Zambia</strong>, bordering the DRC.</p>\n  <h2>Major Cities</h2>\n  <p>Ndola, Kitwe, and Chingola are the main urban centres.</p>\n  <p><em>Source: Zambia Statistics Agency</em></p>\n</body></html>",insight:"Use heading tags for structure, not to make text big. Screen readers and search engines use h1-h6 to understand your page. Never skip levels."}
      },
      {
        id:"h3", title:"Links & Navigation", form:2,
        lesson:`Links are what make the web a WEB — the ability to click and navigate between pages, websites, and sections. The anchor tag creates hyperlinks.

The href attribute (Hypertext Reference) specifies where the link goes. The link text is what the user sees and clicks.

Three types of destinations:

1. External URLs are full web addresses including the protocol:
Always include https:// — without it, the browser treats it as a relative path on the same site.

2. Relative paths link to pages on the same website:
about.html is in the same folder.
pages/contact.html is in a subfolder.
../index.html goes up one folder level.

3. Page anchors jump to a specific section of the SAME page:
First add an id to the target element: id="contact"
Then link to it: href="#contact"

The target attribute controls how the link opens:
target="_blank" opens in a new browser tab — best for external sites.
No target attribute opens in the same tab — best for internal links.

The nav element wraps navigation links and tells browsers and screen readers that this group of links is the site navigation.

Link accessibility: always use descriptive link text. Click here tells screen reader users nothing. Download the Form 4 results PDF is much better and also improves search engine ranking.`,
        code:`<!DOCTYPE html>
<html><body>
  <h1>Zambian Resources</h1>
  <p>Visit the
    <a href="https://www.zra.org.zm" target="_blank">Zambia Revenue Authority</a>
    for tax information.
  </p>
  <p><a href="about.html">About this site</a></p>
  <p><a href="#provinces">See provinces below</a></p>
  <h2 id="provinces">Zambian Provinces</h2>
  <p>Zambia has 10 provinces...</p>
</body></html>`,
        explanation:"href sets the destination. target='_blank' opens in a new tab. Relative links like 'about.html' find files in the same folder. id='provinces' creates a jump target for #provinces.",
        question:{text:"Which attribute of <a> specifies where the link goes?",options:["src","link","href","url"],answer:2,hint:"href stands for Hypertext Reference — it holds the URL or path the link points to."},
        q2:{text:"What does target='_blank' do on a link?",options:["Opens in same tab","Opens in a new tab","Makes the link bold","Disables the link"],answer:1,hint:"_blank tells the browser to open the URL in a new tab, leaving the current page open."},
        q3:{text:"A link should jump to a section with id='results' on the same page. What href?",options:["href='results'","href='#results'","href='id:results'","href='jump:results'"],answer:1,hint:"Use # followed by the id value. <a href='#results'> jumps to id='results' on the same page."},
        worked:{scenario:"A student is building a navigation menu for a school website.",problem:"Create a nav with three links: Home (index.html), About (about.html), and ECZ website opening in a new tab.",steps:[{explain:"Create the page and nav.",code:"<!DOCTYPE html>\n<html><body>\n  <h1>Munali Boys Secondary School</h1>\n  <nav>"},{explain:"Add internal and external links.",code:"    <a href=\"index.html\">Home</a> |\n    <a href=\"about.html\">About</a> |\n    <a href=\"https://www.exams.co.zm\" target=\"_blank\">ECZ Results</a>\n  </nav>\n</body></html>"}],answer:"Three links — two internal, one external opening in a new tab.",answerCode:"<!DOCTYPE html>\n<html><body>\n  <h1>Munali Boys Secondary School</h1>\n  <nav>\n    <a href=\"index.html\">Home</a> |\n    <a href=\"about.html\">About</a> |\n    <a href=\"https://www.exams.co.zm\" target=\"_blank\">ECZ Results</a>\n  </nav>\n</body></html>",insight:"Always use target='_blank' for external sites so users don't navigate away from your site. For internal pages, use relative paths like 'about.html'."}
      },
      {
        id:"h4", title:"Images", form:2,
        lesson:`Images make web pages visually engaging and informative. The img tag embeds images — it is self-closing, meaning it has no closing tag.

The two required attributes:
src (source) specifies the path or URL to the image file. This can be a relative path like photos/victoria-falls.jpg or an absolute URL.
alt (alternative text) provides a description of the image. This is REQUIRED for accessibility:
Screen readers read alt text aloud for visually impaired users.
Displayed when the image fails to load due to a broken link or slow connection.
Used by search engines to understand image content.

Common image format types:
jpg and jpeg are for photos and complex images. They have smaller file size but slight quality loss.
png is for graphics, logos, and images needing transparency. Larger file size but no quality loss.
gif is for animated images but limited to 256 colours.
svg is vector graphics that scale to any size without losing quality — great for logos.
webp is a modern format with excellent quality and small file size.

Size control:
width="300" sets width in pixels and height scales automatically to maintain proportions.
Both width AND height specified can distort the image if proportions do not match.

CSS is better for sizing: style="width: 300px; height: auto;"

Image performance: large images slow down web pages significantly. Always resize images appropriately before using them in web pages.`,
        code:`<!DOCTYPE html>
<html><body>
  <h1>Victoria Falls</h1>
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Victoria_Falls_1.jpg/320px-Victoria_Falls_1.jpg"
    alt="Victoria Falls, Livingstone, Zambia"
    width="320"
  >
  <p>Victoria Falls is one of the largest waterfalls in the world,
     located on the Zambezi River near Livingstone, Zambia.</p>
</body></html>`,
        explanation:"src points to the image. alt describes it for accessibility and as a fallback. Setting only width lets the browser scale height proportionally.",
        question:{text:"Which attribute provides alternative text for an image?",options:["title","src","alt","desc"],answer:2,hint:"alt text is shown when the image fails to load and read aloud by screen readers."},
        q2:{text:"Why is the alt attribute important?",options:["Makes images load faster","Required to display the image","Accessibility for screen readers and fallback if image fails","Sets the image size"],answer:2,hint:"alt serves two purposes: accessibility and fallback for broken links or slow connections."},
        q3:{text:"An img has width='300' but no height. What happens?",options:["Displays as 300x300","Image is invisible","Displays at 300px wide, height scales proportionally","Error — height is required"],answer:2,hint:"If only width is set, height scales proportionally to maintain the original aspect ratio."},
        worked:{scenario:"A student is building a Zambia tourism page with an image and caption.",problem:"Add Zambia's flag image with alt text, width 200px, and a caption paragraph below.",steps:[{explain:"Add the image tag with all attributes.",code:"<img\n  src=\"https://flagcdn.com/w320/zm.png\"\n  alt=\"Flag of Zambia — green with orange eagle\"\n  width=\"200\"\n>"},{explain:"Add a caption below.",code:"<p><em>The flag of Zambia: green background with a soaring eagle.</em></p>"}],answer:"Image at 200px with proper alt text and caption below.",answerCode:"<!DOCTYPE html>\n<html><body>\n  <h1>Zambia</h1>\n  <img src=\"https://flagcdn.com/w320/zm.png\" alt=\"Flag of Zambia — green with orange eagle\" width=\"200\">\n  <p><em>The flag of Zambia: green background with a soaring eagle.</em></p>\n</body></html>",insight:"Never leave alt empty unless the image is purely decorative. Good alt text describes what the image shows — not just 'image' or the filename."}
      },
      {
        id:"h5", title:"Lists", form:2,
        lesson:`Lists organise information into a structured format that is easy to scan and read. HTML provides two main types of lists.

UNORDERED LIST using ul creates bullet points. Use for features, ingredients, options, names, or items where order does not matter.

ORDERED LIST using ol creates numbered items. Use for steps, instructions, rankings, or procedures where order matters.

Both use the li (list item) element for each entry.

Changing the style of ordered lists with the type attribute:
type="1" gives numbers: 1, 2, 3 (this is the default)
type="A" gives uppercase letters: A, B, C
type="a" gives lowercase letters: a, b, c
type="I" gives uppercase Roman numerals: I, II, III
type="i" gives lowercase Roman numerals: i, ii, iii

Nested lists place a complete ul or ol inside an li element. The browser automatically indents nested lists to show the hierarchy. This is perfect for showing provinces and their districts, or topics and their subtopics.

DESCRIPTION LIST using dl is for term-definition pairs:
dt is the term being defined.
dd is the definition or description.

Example uses in Zambia:
Unordered: provinces of Zambia, subjects offered, school rules.
Ordered: steps to register for ECZ exams, instructions for a science experiment.
Description: a glossary of programming terms, an FAQ page.

The visual style of lists is controlled with CSS. HTML just provides the structure.`,
        code:`<!DOCTYPE html>
<html><body>
  <h1>Zambia Facts</h1>
  <h2>Provinces</h2>
  <ul>
    <li>Lusaka</li>
    <li>Copperbelt</li>
    <li>Southern</li>
    <li>Eastern</li>
  </ul>
  <h2>Steps to register for ECZ exams</h2>
  <ol>
    <li>Collect registration forms from your school</li>
    <li>Complete all personal details</li>
    <li>Submit forms with payment to the head teacher</li>
    <li>Receive your exam slip</li>
  </ol>
</body></html>`,
        explanation:"<ul> creates bullet points. <ol> creates numbers. Each <li> is one item. Nest a <ul> inside an <li> to create an indented sub-list.",
        question:{text:"Which tag creates a numbered list?",options:["<ul>","<list>","<nl>","<ol>"],answer:3,hint:"ol = Ordered List — it automatically numbers each <li>."},
        q2:{text:"You are listing steps to solve a problem. Use <ul> or <ol>?",options:["<ul> — order does not matter","<ol> — steps must be in order","Either works","Neither — use <p>"],answer:1,hint:"Use <ol> when order matters (steps, rankings). Use <ul> when order does not matter."},
        q3:{text:"What tag is used for each item inside both <ul> and <ol>?",options:["<item>","<bullet>","<li>","<entry>"],answer:2,hint:"<li> = List Item. Used inside both <ul> and <ol>."},
        worked:{scenario:"A Form 2 student is creating a revision guide page.",problem:"Create a page with an unordered list of 3 cell organelles and an ordered list of 4 steps in mitosis.",steps:[{explain:"Add the unordered list.",code:"<h2>Cell Organelles</h2>\n<ul>\n  <li>Nucleus</li>\n  <li>Mitochondria</li>\n  <li>Ribosome</li>\n</ul>"},{explain:"Add the ordered list.",code:"<h2>Stages of Mitosis</h2>\n<ol>\n  <li>Interphase</li>\n  <li>Prophase</li>\n  <li>Metaphase</li>\n  <li>Anaphase</li>\n</ol>"}],answer:"Two lists — bullets for organelles, numbers for steps.",answerCode:"<!DOCTYPE html>\n<html><body>\n  <h2>Cell Organelles</h2>\n  <ul><li>Nucleus</li><li>Mitochondria</li><li>Ribosome</li></ul>\n  <h2>Stages of Mitosis</h2>\n  <ol><li>Interphase</li><li>Prophase</li><li>Metaphase</li><li>Anaphase</li></ol>\n</body></html>",insight:"Use <ul> vs <ol> based on meaning, not appearance. The visual style can always be changed with CSS later."}
      },
      {
        id:"h6", title:"Tables", form:3,
        lesson:`Tables organise data into rows and columns — perfect for mark sheets, timetables, comparison charts, and any tabular information.

Core table tags:
table is the container for the entire table.
tr is a table row (horizontal).
th is a table header cell — bold and centred by default, with semantic meaning.
td is a table data cell for regular content.

Basic structure: a table contains tr elements. Each tr contains either th elements for header rows or td elements for data rows.

Semantic grouping elements are best practice:
thead groups the header rows.
tbody groups the data rows.
tfoot groups footer rows for summaries like totals.

These add no visual change by default but improve accessibility and allow CSS to style header and body rows separately.

Spanning cells:
colspan="2" makes the cell span 2 columns.
rowspan="3" makes the cell span 3 rows.

Table accessibility:
Always use th for header cells, not bold td.
Add scope="col" or scope="row" to th elements for complex tables.
Use the caption element to give the table a descriptive title.

When NOT to use tables: never use tables for page layout. Tables are only for tabular data. CSS Grid and Flexbox are the correct tools for layout.

A common ECZ question asks you to create a student results table with a header row showing Name, Subject, and Score, with appropriate use of th, td, thead, and tbody.`,
        code:`<!DOCTYPE html>
<html><body>
  <h1>Grade 12 Results — Lusaka Schools</h1>
  <table border="1">
    <thead>
      <tr>
        <th>School</th>
        <th>Province</th>
        <th>Pass Rate</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Kabulonga Boys</td>
        <td>Lusaka</td>
        <td>94%</td>
      </tr>
      <tr>
        <td>Munali Boys</td>
        <td>Lusaka</td>
        <td>89%</td>
      </tr>
      <tr>
        <td>Matero Boys</td>
        <td>Lusaka</td>
        <td>82%</td>
      </tr>
    </tbody>
  </table>
</body></html>`,
        explanation:"<thead> and <tbody> group rows semantically. <th> creates bold header cells. border='1' adds a visible border for this demo.",
        ecz:"Tables are tested every year in HTML papers. Know: table, tr, th, td, thead, tbody. Expect to create a results table with a header row. Common trap: confusing th (header) with td (data).",
        question:{text:"Which tag creates a header cell in an HTML table?",options:["<td>","<tr>","<th>","<thead>"],answer:2,hint:"<th> = Table Header — bold and centred by default, distinguishing it from data cells."},
        q2:{text:"What is the correct nesting order for a table row with two cells?",options:["<table><td><tr>...</tr></td></table>","<table><tr><td>...</td><td>...</td></tr></table>","<tr><table><td>...</td></table></tr>","<table><th><td>...</td></th></table>"],answer:1,hint:"Always: table > tr > td. The table contains rows, rows contain cells."},
        q3:{text:"What is the purpose of <thead> and <tbody>?",options:["Required for table to work","Add styling automatically","Semantically group header rows from data rows","Create separate tables"],answer:2,hint:"Optional but best practice — helps screen readers and allows separate CSS styling."},
        worked:{scenario:"A teacher wants an HTML table showing Form 3 exam scores.",problem:"Create a table with columns: Student, Maths, English, Science. Add three students: Chanda(78,85,72), Mwamba(91,76,88), Bupe(65,90,71).",steps:[{explain:"Set up the table with a header row.",code:"<table border=\"1\">\n  <thead>\n    <tr><th>Student</th><th>Maths</th><th>English</th><th>Science</th></tr>\n  </thead>"},{explain:"Add data rows in tbody.",code:"  <tbody>\n    <tr><td>Chanda</td><td>78</td><td>85</td><td>72</td></tr>\n    <tr><td>Mwamba</td><td>91</td><td>76</td><td>88</td></tr>\n    <tr><td>Bupe</td><td>65</td><td>90</td><td>71</td></tr>\n  </tbody>\n</table>"}],answer:"A 4-column, 4-row table with bold headers and student data.",answerCode:"<table border=\"1\"><thead><tr><th>Student</th><th>Maths</th><th>English</th><th>Science</th></tr></thead><tbody><tr><td>Chanda</td><td>78</td><td>85</td><td>72</td></tr><tr><td>Mwamba</td><td>91</td><td>76</td><td>88</td></tr><tr><td>Bupe</td><td>65</td><td>90</td><td>71</td></tr></tbody></table>",insight:"Always include a header row using <th>. It makes the table readable and is required for accessibility."}
      },
      {
        id:"h7", title:"Forms & Input", form:3,
        lesson:`Forms are how users send information to a website — logging in, registering, searching, making payments, or submitting homework. Every interactive input on a website uses an HTML form.

The form element wraps all input elements:
action specifies the URL that processes the form data when submitted.
method specifies how the data is sent.
GET appends data to the URL as query parameters — visible in the browser address bar. Use for search forms.
POST sends data in the request body — invisible in URL. Use for passwords and sensitive data.

Input types controlled by the type attribute:
text is a single-line text field.
email validates email format automatically.
password masks characters as you type.
number accepts numbers only.
checkbox is a tick box allowing multiple selections.
radio is a circle button allowing only one selection from a group.
submit creates the submission button.
reset clears the form.

Labels: the for attribute on label must match the id attribute on the input. Clicking the label then focuses the input — important for mobile usability and accessibility.

Select dropdown: the select element contains option elements. Use value attributes on options to specify what gets sent to the server.

Textarea for multi-line text has rows and cols attributes to control its default size.

Required fields: adding the required attribute causes the browser to show an error if the field is empty when the user tries to submit.`,
        code:`<!DOCTYPE html>
<html><body>
  <h1>ZamCode Academy — Registration</h1>
  <form action="/register" method="POST">
    <label for="name">Full Name:</label><br>
    <input type="text" id="name" name="name" placeholder="e.g. Chanda Mutale"><br><br>
    <label for="email">Email:</label><br>
    <input type="email" id="email" name="email"><br><br>
    <label for="form">School Form:</label><br>
    <select id="form" name="form">
      <option value="1">Form 1</option>
      <option value="2">Form 2</option>
      <option value="3">Form 3</option>
      <option value="4">Form 4</option>
    </select><br><br>
    <label><input type="checkbox" name="agree"> I agree to the terms</label><br><br>
    <input type="submit" value="Register Now">
  </form>
</body></html>`,
        explanation:"for='name' on the label links to id='name' on the input. placeholder shows hint text. <select> creates a dropdown. type='submit' creates the submit button.",
        ecz:"Forms are a Form 3 ECZ favourite. Know: form, input types (text, email, password, submit), label with for attribute, and select dropdown. Expect to design a registration or login form.",
        question:{text:"Which attribute links a <label> to its corresponding <input>?",options:["name","id","for","link"],answer:2,hint:"The for attribute on <label> must match the id attribute on the <input>."},
        q2:{text:"What is the difference between method='GET' and method='POST'?",options:["No difference","GET sends data in the URL (visible); POST sends data in the request body (hidden)","POST is faster","GET is for files; POST is for text"],answer:1,hint:"GET appends data to the URL — visible and bookmarkable. POST sends data hidden in the request body — used for passwords."},
        q3:{text:"Which input type should you use for a password field?",options:["type='text'","type='hidden'","type='secure'","type='password'"],answer:3,hint:"type='password' masks the characters as the user types."},
        worked:{scenario:"A school is building an online homework submission form.",problem:"Create a form with: a text input for name, a number input for form (1-4), a textarea for the answer, and a submit button.",steps:[{explain:"Set up form and name input.",code:"<form method=\"POST\" action=\"/submit\">\n  <label for=\"sname\">Student Name:</label><br>\n  <input type=\"text\" id=\"sname\" name=\"name\"><br><br>"},{explain:"Add form number and textarea.",code:"  <label for=\"form\">Form:</label><br>\n  <input type=\"number\" id=\"form\" name=\"form\" min=\"1\" max=\"4\"><br><br>\n  <label for=\"hw\">Homework Answer:</label><br>\n  <textarea id=\"hw\" name=\"answer\" rows=\"4\" cols=\"40\"></textarea><br><br>"},{explain:"Add submit button.",code:"  <input type=\"submit\" value=\"Submit Homework\">\n</form>"}],answer:"A functional form with name, form number, textarea, and submit button.",answerCode:"<form method=\"POST\"><input type=\"text\" placeholder=\"Name\"> <input type=\"number\" min=\"1\" max=\"4\" placeholder=\"Form\"> <textarea rows=\"4\"></textarea> <input type=\"submit\" value=\"Submit\"></form>",insight:"Always use <label> with every input — it improves accessibility and makes the form easier to use on mobile."}
      },
      {
        id:"h8", title:"Semantic Elements", form:3,
        lesson:`Semantic HTML uses tags that describe the PURPOSE and MEANING of content, not just its appearance. A div just means a block. A nav means navigation. A footer means page footer. This meaning is understood by browsers, search engines, and assistive technologies.

Why semantics matter:
SEO: Google reads semantic HTML to understand your page structure and ranks it accordingly.
Accessibility: screen readers navigate pages by landmark elements like nav, main, and header.
Maintainability: your code is self-documenting — any developer can read it and understand the layout.

The key semantic elements:
header is the page or section header. It usually contains the logo, site name, and main navigation.
nav contains navigation links. It can appear in the header or as a standalone sidebar.
main contains the primary content of the page. There should be only ONE main per page.
section is a thematic grouping of content and should have a heading inside.
article is self-contained content that makes sense on its own, like a blog post, news story, or lesson.
aside contains tangentially related content like a sidebar, related links, or advertisements.
footer is the page footer. It usually contains copyright, contact info, and secondary navigation.

Non-semantic elements still used for styling:
div is a block-level container with no semantic meaning.
span is an inline container with no semantic meaning.

The rule of thumb: if there is a semantic tag that describes what the content IS, use it. Fall back to div or span only when no semantic tag fits.`,
        code:`<!DOCTYPE html>
<html lang="en">
<head><title>ZamCode Academy</title></head>
<body>
  <header>
    <h1>ZamCode Academy</h1>
    <p>Learn Programming the Zambian Way</p>
  </header>
  <nav>
    <a href="/">Home</a> |
    <a href="/lessons">Lessons</a> |
    <a href="/about">About</a>
  </nav>
  <main>
    <section>
      <h2>Featured Lesson</h2>
      <article>
        <h3>Introduction to Python</h3>
        <p>Python is beginner-friendly and widely used...</p>
      </article>
    </section>
    <aside>
      <h3>Study Tip</h3>
      <p>Practice 20 minutes daily for best results.</p>
    </aside>
  </main>
  <footer>
    <p>&copy; 2024 ZamCode Academy — Lusaka, Zambia</p>
  </footer>
</body></html>`,
        explanation:"<header> holds the site banner. <nav> holds navigation links. <main> wraps primary content. <section> groups related content. <article> is self-contained. <aside> is supplementary. <footer> holds copyright info.",
        question:{text:"Which semantic element should wrap the main navigation links?",options:["<menu>","<nav>","<links>","<header>"],answer:1,hint:"<nav> is specifically for navigation — it tells screen readers this section contains links to other pages."},
        q2:{text:"What is the advantage of <article> over <div>?",options:["<article> loads faster","<article> is self-contained and makes sense on its own — better for SEO and screen readers","<article> adds styling","<div> is deprecated"],answer:1,hint:"<article> signals its content stands alone — a blog post, news story, or lesson."},
        q3:{text:"Where should copyright information typically go?",options:["<header>","<aside>","<footer>","<nav>"],answer:2,hint:"<footer> is at the bottom and conventionally holds copyright notices and contact info."},
        worked:{scenario:"A student is restructuring a school website to use semantic HTML.",problem:"Rewrite using semantic tags: a banner with school name, navigation with 2 links, a main section with a news article, and a footer.",steps:[{explain:"Replace banner div with header and nav.",code:"<header>\n  <h1>Sikombe Secondary School</h1>\n</header>\n<nav><a href=\"/\">Home</a> | <a href=\"/news\">News</a></nav>"},{explain:"Add main content and footer.",code:"<main>\n  <article>\n    <h2>School reopens 8th January</h2>\n    <p>All students report by 7:30am.</p>\n  </article>\n</main>\n<footer><p>&copy; 2024 Sikombe Secondary School</p></footer>"}],answer:"A fully semantic page with header, nav, main, article, and footer.",answerCode:"<!DOCTYPE html>\n<html><body>\n<header><h1>Sikombe Secondary School</h1></header>\n<nav><a href=\"/\">Home</a> | <a href=\"/news\">News</a></nav>\n<main><article><h2>School reopens 8th January</h2><p>All students report by 7:30am.</p></article></main>\n<footer><p>&copy; 2024 Sikombe Secondary School</p></footer>\n</body></html>",insight:"Semantic HTML looks the same visually but is far more meaningful. Google ranks semantically correct pages higher. Screen readers navigate by landmarks like <nav> and <main>."}
      },
      {
        id:"h9", title:"Inline vs Block Elements", form:3,
        lesson:`Every HTML element generates a rectangular box. Understanding whether an element is block-level or inline determines how elements flow on the page.

BLOCK ELEMENTS:
Start on a new line automatically.
Take up the full available width by default.
Can have width and height set in CSS.
Can contain other block or inline elements.

Examples of block elements: div, p, h1 through h6, ul, ol, li, table, section, article, header, footer, nav, main.

INLINE ELEMENTS:
Flow within text — they sit on the same line as surrounding content.
Only take up as much width as their content.
Cannot have explicit width or height set in CSS.
Should only contain other inline elements or text.

Examples of inline elements: span, a, strong, em, img, input, label, button.

Important rule: never put a block element inside an inline element.

The generic containers:
div is a block container used for grouping block elements or as a layout wrapper.
span is an inline container used for styling a portion of text within a paragraph.

CSS can change an element's display behaviour:
display: block makes any element behave as block.
display: inline makes any element behave as inline.
display: inline-block allows the element to flow inline but also accept width and height.
display: none completely hides the element and it takes no space.

Understanding block vs inline is essential for CSS layout — knowing why two elements appear on the same line or on different lines depends entirely on their display type.`,
        code:`<!DOCTYPE html>
<html><body>
  <!-- Block elements stack vertically -->
  <div style="background:#e8f4f8; padding:10px; margin:5px;">
    I am a block element (div)
  </div>
  <div style="background:#f8e8e8; padding:10px; margin:5px;">
    I am another block element
  </div>
  <!-- Inline elements flow within text -->
  <p>
    The
    <span style="color:green; font-weight:bold;">Copperbelt Province</span>
    produces most of Zambia's
    <span style="color:orange;">copper</span>
    exports.
  </p>
  <p>Visit <a href="#">Lusaka</a> and <a href="#">Livingstone</a>.</p>
</body></html>`,
        explanation:"Two <div> elements stack vertically — they are block-level. Two <span> elements flow within the paragraph — they are inline. Inline elements can be inside block elements but NOT vice versa.",
        question:{text:"Which of these is an INLINE element?",options:["<div>","<p>","<span>","<section>"],answer:2,hint:"<span> is inline — it wraps content within a line without breaking it."},
        q2:{text:"What happens when you place two <div> elements next to each other?",options:["They sit side by side","Each starts on a new line and takes full width","They overlap","They merge"],answer:1,hint:"Block elements always start on a new line. Use CSS flexbox to place them side by side."},
        q3:{text:"You want to colour just the word 'Lusaka' red inside a paragraph. Which tag?",options:["<div>","<section>","<span>","<p>"],answer:2,hint:"<span> is an inline container — use it to style part of text without breaking the layout."},
        worked:{scenario:"A student is marking up a Zambia facts paragraph with selective styling.",problem:"Write a paragraph about Zambia where 'Lusaka' is bold and green, 'Victoria Falls' is italic and orange, without breaking the paragraph flow.",steps:[{explain:"Wrap 'Lusaka' in a span.",code:"<p>The capital city <span style=\"color:green;font-weight:bold;\">Lusaka</span>"},{explain:"Wrap 'Victoria Falls' in a span.",code:"  is near the famous\n  <span style=\"color:orange;font-style:italic;\">Victoria Falls</span>,\n  one of the seven natural wonders.\n</p>"}],answer:"A single paragraph with two styled spans — layout unchanged, selected words styled.",answerCode:"<p>The capital city <span style=\"color:green;font-weight:bold;\">Lusaka</span> is near the famous <span style=\"color:orange;font-style:italic;\">Victoria Falls</span>, one of the seven natural wonders.</p>",insight:"Use <span> for styling part of a line. Use <div> for grouping block sections. Never put a block element inside an inline element."}
      },
      {
        id:"h10", title:"HTML Entities & Special Characters", form:3,
        lesson:`Certain characters have special meaning in HTML or cannot be typed easily on a keyboard. HTML entities provide a way to display these characters as text without confusing the browser.

Why entities are needed:
The < and > symbols define HTML tags — if you write them as text in your content, the browser treats them as tag delimiters. To show the literal characters, use &lt; for < and &gt; for >.
The & symbol starts all HTML entities — to show a literal & symbol, write &amp;

All HTML entities follow the same format: an ampersand, then a name, then a semicolon.

The essential HTML entities:
&lt; displays the less-than symbol.
&gt; displays the greater-than symbol.
&amp; displays the ampersand symbol.
&copy; displays the copyright symbol.
&reg; displays the registered trademark symbol.
&nbsp; displays a non-breaking space that prevents line wrapping at that point.
&quot; displays a double quote character.
&pound; displays the British pound sign.
&euro; displays the Euro sign.

Numeric entities use a number instead of a name. &#169; is the same as &copy;.

When to use &nbsp;:
Between a number and its unit (100&nbsp;km prevents 100 and km from appearing on separate lines).
To create multiple visible spaces (HTML collapses regular spaces into one).

In Zambia, entities are needed when building websites that display programming code examples, show legal copyright notices, or include mathematical symbols in science pages.`,
        code:`<!DOCTYPE html>
<html><body>
  <h1>HTML Entities Demo</h1>
  <!-- Show code examples as text -->
  <p>A paragraph tag looks like: &lt;p&gt;text&lt;/p&gt;</p>
  <!-- Copyright notice -->
  <p>&copy; 2024 ZamCode Academy. All rights reserved.</p>
  <!-- Ampersand in names -->
  <p>Ministry of Education &amp; Science</p>
  <!-- Non-breaking space -->
  <p>K&nbsp;500.00</p>
  <!-- Maths in text -->
  <p>Price &lt; K100: show discount</p>
</body></html>`,
        explanation:"&lt; and &gt; display < and > without the browser treating them as tags. &copy; renders ©. &nbsp; creates a space that does not wrap.",
        question:{text:"How do you display < as visible text in HTML?",options:["\\<","<text>","&lt;","(less than)"],answer:2,hint:"&lt; is the HTML entity for the less-than sign. lt = less than."},
        q2:{text:"What does &amp; display in the browser?",options:["&amp;","&","The word ampersand","Nothing"],answer:1,hint:"&amp; is the entity for the & character. Use it in text like Arts &amp; Crafts."},
        q3:{text:"You want to show the HTML tag <strong> as code on the page. Which is correct?",options:["<strong>","<code><strong></code>","&lt;strong&gt;","[strong]"],answer:2,hint:"Replace < with &lt; and > with &gt; so the browser shows them as text."},
        worked:{scenario:"A teacher wants to show HTML syntax examples on a tutorial page.",problem:"Create a page showing three HTML tags as visible text: <h1>, <p>, and <img src='...'>",steps:[{explain:"Use &lt; and &gt; to show each tag as text.",code:"<p>Heading tag: &lt;h1&gt;text&lt;/h1&gt;</p>\n<p>Paragraph tag: &lt;p&gt;content&lt;/p&gt;</p>"},{explain:"Show the img tag with its attribute.",code:"<p>Image tag: &lt;img src=&quot;file.jpg&quot; alt=&quot;desc&quot;&gt;</p>"}],answer:"Three lines showing HTML tags as readable text rather than being parsed.",answerCode:"<p>Heading tag: &lt;h1&gt;text&lt;/h1&gt;</p>\n<p>Paragraph: &lt;p&gt;content&lt;/p&gt;</p>\n<p>Image: &lt;img src=&quot;file.jpg&quot; alt=&quot;desc&quot;&gt;</p>",insight:"Whenever you write tutorial content showing HTML, replace every < with &lt; and > with &gt;. Forgetting one will cause the browser to try to parse it as a real tag."}
      },
      {
        id:"h11", title:"Introduction to CSS", form:3,
        lesson:`CSS (Cascading Style Sheets) controls the visual appearance of HTML — colours, fonts, sizes, spacing, layouts, and animations. Without CSS, websites are just plain black text on a white background.

The three ways to add CSS to HTML:

1. Inline CSS uses the style attribute on a single element. Good for quick testing but bad practice for real pages because it mixes content and presentation.

2. Internal CSS uses a style tag inside the head element. Good for single-page sites but styles only apply to that one HTML file.

3. External CSS uses a separate .css file linked with a link element. This is best practice for real projects — one CSS file styles all pages consistently. Change one file and every page updates.

CSS syntax — every rule has the same structure:
selector { property: value; }

selector identifies WHICH HTML elements to style.
property is WHAT aspect to change (color, font-size, background).
value is HOW to change it (red, 18px, or a hex colour code).

The cascade and specificity:
Multiple rules can apply to the same element. When they conflict, CSS follows specificity rules:
Inline style wins over ID selectors, which win over class selectors, which win over tag selectors.

The most important CSS properties to learn first:
color is text colour.
background-color is background fill colour.
font-size is text size using px, em, or rem units.
font-family is the typeface.
font-weight is bold or normal.
margin is space OUTSIDE the element.
padding is space INSIDE the element between content and border.
border is the visible outline around the element.
width and height control element dimensions.`,
        code:`<!DOCTYPE html>
<html>
<head>
  <title>Styled ZamCode Page</title>
  <style>
    body {
      background-color: #0d1b2a;
      color: #e2e8f0;
      font-family: 'Segoe UI', sans-serif;
    }
    h1 {
      color: #e8a020;
      text-align: center;
    }
    p {
      font-size: 16px;
      line-height: 1.8;
      max-width: 600px;
      margin: 0 auto;
    }
    .highlight {
      color: #27ae60;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <h1>Welcome to ZamCode Academy</h1>
  <p>
    Learning to code in
    <span class="highlight">Zambia</span>
    opens doors to the digital economy.
  </p>
</body></html>`,
        explanation:"The <style> block holds CSS rules. body{} styles the whole page. h1{} targets all h1 elements. .highlight{} is a class selector — applied using class='highlight' on any element.",
        ecz:"CSS introduction is tested as internal CSS using the style tag. Know: selector { property: value; }. Expect to style a heading colour, paragraph font size, and background colour.",
        question:{text:"What is the correct syntax for a CSS rule?",options:["selector: property = value","selector { property: value; }","property { selector: value; }","selector (property: value)"],answer:1,hint:"CSS: selector { property: value; } — colon separates property from value; semicolon ends each declaration."},
        q2:{text:"What does a class selector look like in CSS?",options:["#myClass","myClass","*myClass",".myClass"],answer:3,hint:"Class selectors start with a dot: .myClass {} — applied in HTML as class='myClass'."},
        q3:{text:"What is the advantage of external CSS over inline styles?",options:["External CSS is faster to type","External CSS in a .css file can style all pages — change one file, update the whole site","Inline styles are deprecated","External CSS only works with HTML5"],answer:1,hint:"One .css file linked to all pages — change a colour once and every page updates."},
        worked:{scenario:"A student wants to style a Zambia facts page.",problem:"Write CSS rules for: body with dark background (#0d1b2a) and white text, h1 with gold colour (#e8a020), a links with green (#27ae60).",steps:[{explain:"Style the body element.",code:"body {\n  background-color: #0d1b2a;\n  color: #ffffff;\n  font-family: Arial, sans-serif;\n}"},{explain:"Style h1 and a tags.",code:"h1 { color: #e8a020; }\na  { color: #27ae60; }"}],answer:"Dark page with gold headings and green links.",answerCode:"<style>\nbody{background-color:#0d1b2a;color:#ffffff;font-family:Arial,sans-serif;}\nh1{color:#e8a020;}\na{color:#27ae60;}\n</style>",insight:"For a real multi-page site, move CSS to a separate style.css file and link it: <link rel='stylesheet' href='style.css'>. One file controls the look of all pages."}
      },
      {
        id:"h12", title:"CSS Colors, Fonts & Text", form:3,
        lesson:`CSS gives you complete control over text appearance and colours throughout your page. Good typography and colour choices transform a plain page into a professional, readable experience.

COLOUR in CSS — four ways to specify colour:

Named colours include red, blue, green, white, black, navy, crimson, and gold.

Hex codes use a six-digit code with red, green, blue values in hexadecimal:
#000000 is black, #ffffff is white. Short form uses three digits: #f00 is pure red.

RGB function: rgb(red, green, blue) where each value is 0 to 255.
RGBA adds alpha for opacity: rgba(0, 0, 0, 0.5) is 50% transparent black.

HSL: hsl(hue, saturation%, lightness%) — often more intuitive for designers.

TEXT PROPERTIES:
font-family always lists fallback fonts. If the first font is not installed, the browser tries the next, then the generic family (sans-serif, serif, monospace).

font-size uses these common units:
px is fixed pixels (good for beginners).
em is relative to parent element's font size.
rem is relative to the root html font size — most consistent for responsive design.

font-weight: bold or 700 for bold text, normal or 400 for regular weight.

text-align: left, right, center, or justify.
text-decoration: none, underline, or line-through.
text-transform: uppercase, lowercase, or capitalize.
line-height: 1.6 sets space between lines — unitless values are recommended.
letter-spacing: 2px sets space between individual characters.

Google Fonts provides free web fonts you can import with a link element, then reference by name in your CSS.`,
        code:`<!DOCTYPE html>
<html>
<head>
<style>
  h1 {
    color: #e8a020;
    font-family: Georgia, serif;
    font-size: 36px;
    text-align: center;
    letter-spacing: 2px;
  }
  .intro {
    font-size: 18px;
    line-height: 1.9;
    color: #cbd5e1;
    font-style: italic;
  }
  .highlight {
    color: #27ae60;
    font-weight: 900;
    text-decoration: underline;
  }
  a { color: #3b82f6; text-decoration: none; }
  a:hover { text-decoration: underline; }
</style>
</head>
<body style="background:#0d1b2a; padding:20px;">
  <h1>Zambia</h1>
  <p class="intro">
    A country of <span class="highlight">10 provinces</span>,
    extraordinary wildlife, and the mighty
    <span class="highlight">Victoria Falls</span>.
  </p>
  <p><a href="#">Learn more about Zambia</a></p>
</body></html>`,
        explanation:"letter-spacing adds space between characters. line-height controls the gap between lines. text-decoration:none removes the default underline from links. :hover applies styles on mouseover.",
        question:{text:"Which CSS property changes text colour?",options:["background-color","font-color","text-color","color"],answer:3,hint:"The property is simply 'color'. 'font-color' and 'text-color' do not exist."},
        q2:{text:"What does font-weight: 900 do?",options:["Sets font size to 900px","Makes text very bold","Sets font to 900% of normal","Adds 900 letter-spacing"],answer:1,hint:"font-weight accepts 100-900. 900 is the heaviest weight available."},
        q3:{text:"Which CSS removes the underline from links?",options:["font-decoration: none","underline: false","text-decoration: none","link-style: plain"],answer:2,hint:"text-decoration:none removes all decorations. Commonly used on <a> tags."},
        worked:{scenario:"A student is styling the header of a school website.",problem:"Style h1 with Zambia green (#27ae60), bold, 32px, centred. Style .tagline with italic, grey (#94a3b8), 15px, 1.6 line-height.",steps:[{explain:"Write the h1 rule.",code:"h1 {\n  color: #27ae60;\n  font-weight: bold;\n  font-size: 32px;\n  text-align: center;\n}"},{explain:"Write the .tagline rule.",code:".tagline {\n  font-style: italic;\n  color: #94a3b8;\n  font-size: 15px;\n  line-height: 1.6;\n}"}],answer:"h1 styled in green, bold, large, centred. Tagline in italic light grey.",answerCode:"<style>\nh1{color:#27ae60;font-weight:bold;font-size:32px;text-align:center;}\n.tagline{font-style:italic;color:#94a3b8;font-size:15px;line-height:1.6;}\n</style>",insight:"rem units (like 1.5rem) scale with the browser's base font size. Users who set larger browser fonts will see your text scale up — better accessibility."}
      },
      {
        id:"h13", title:"CSS Box Model", form:4,
        lesson:`Every HTML element is a rectangular box. The CSS Box Model describes the four layers that make up this box — from innermost to outermost: content, padding, border, margin.

THE FOUR LAYERS:

CONTENT is the actual text, image, or child elements. Dimensions set by width and height.

PADDING is transparent space INSIDE the border, between content and border.
padding: 20px applies the same on all four sides.
padding: 10px 20px applies 10px to top and bottom, 20px to left and right.
padding: 5px 10px 15px 20px applies top, right, bottom, left in clockwise order.

BORDER is the visible outline around padding and content.
border: 2px solid #333 sets width, style, and colour.
border-radius: 10px rounds the corners. 50% makes a circle.

MARGIN is transparent space OUTSIDE the border, between this element and others.
margin: auto centres a block element horizontally when width is set.
margin: 0 auto applies no top and bottom margin and centres left and right — a very common technique.

Total element width = content width + left padding + right padding + left border + right border.

box-sizing: border-box changes the calculation so padding and border are INCLUDED in the width, not added to it. This is almost always what you want:
* { box-sizing: border-box; }

Understanding why an element is the wrong size or in the wrong position almost always comes back to the box model. When debugging layout, inspect margin, padding, and border first.`,
        code:`<!DOCTYPE html>
<html>
<head>
<style>
  .card {
    width: 280px;
    padding: 20px;
    border: 2px solid #e8a020;
    border-radius: 12px;
    margin: 16px auto;
    background-color: #1e293b;
    color: #e2e8f0;
  }
  .card h2 { color: #e8a020; margin: 0 0 8px 0; }
  .card p  { margin: 0; font-size: 14px; line-height: 1.7; }
</style>
</head>
<body style="background:#0d1b2a;">
  <div class="card">
    <h2>Pascal</h2>
    <p>A structured language ideal for learning programming fundamentals.</p>
  </div>
  <div class="card">
    <h2>Python</h2>
    <p>Clean syntax and powerful libraries for data and web development.</p>
  </div>
</body></html>`,
        explanation:"padding pushes content away from the border. margin pushes the element away from its neighbours. border-radius rounds the corners. margin: 16px auto centres the card horizontally.",
        ecz:"The CSS box model is Form 4 core. Know: content → padding → border → margin from inside to outside. Expect to explain what each layer does and use margin:auto to centre an element.",
        question:{text:"In the CSS box model, what is padding?",options:["Space outside the border","The border width","Space between content and border","The background colour area"],answer:2,hint:"Padding is the inner space — between the content and the border."},
        q2:{text:"What is the difference between margin and padding?",options:["Identical","Margin is space outside; padding is space inside (between content and border)","Padding is outside; margin is inside","Margin adds a border; padding adds background colour"],answer:1,hint:"Padding = inside spacing. Margin = outside spacing between this element and its neighbours."},
        q3:{text:"What does margin: 0 auto do on a block element with fixed width?",options:["Removes all margins","Sets top/bottom to 0 and horizontally centres the element","Sets left and right to auto px","Makes the element float"],answer:1,hint:"auto on left and right margins splits the remaining horizontal space equally — centring the element."},
        worked:{scenario:"A student is styling a profile card for a school register.",problem:"Create .profile-card with: white background, 16px padding, 1px solid grey border with 8px radius, 20px top/bottom margin, max-width 300px.",steps:[{explain:"Define box model properties.",code:".profile-card {\n  background: #ffffff;\n  padding: 16px;\n  border: 1px solid #94a3b8;\n  border-radius: 8px;"},{explain:"Add spacing and sizing.",code:"  margin: 20px auto;\n  max-width: 300px;\n}"}],answer:"A clean white card, 300px wide, centred, with rounded corners and even spacing.",answerCode:".profile-card{background:#ffffff;padding:16px;border:1px solid #94a3b8;border-radius:8px;margin:20px auto;max-width:300px;}",insight:"Add box-sizing:border-box to prevent padding from making elements wider than their set width. Best practice: * { box-sizing: border-box; } at the top of all CSS."}
      },
      {
        id:"h14", title:"CSS Flexbox", form:4,
        lesson:`Flexbox (Flexible Box Layout) is a CSS layout system that arranges elements in a row or column with automatic spacing and alignment. It solves layout problems that were previously very difficult with CSS.

To activate Flexbox, add display: flex to the CONTAINER:
.container { display: flex; }
The direct children become FLEX ITEMS and immediately arrange in a row.

Key container properties:

flex-direction controls which direction items flow:
row (default) goes left to right.
row-reverse goes right to left.
column goes top to bottom.
column-reverse goes bottom to top.

justify-content controls alignment along the MAIN axis (horizontal for row):
flex-start puts items at the start (default).
flex-end puts items at the end.
center centres the items.
space-between spreads items out with no space at edges.
space-around puts equal space around each item.
space-evenly puts equal space between all items and edges.

align-items controls alignment along the CROSS axis (vertical for row):
flex-start puts items at the top.
flex-end puts items at the bottom.
center centres items vertically — the most useful option.
stretch (default) makes items stretch to fill container height.

gap: 16px sets space between items without using margins.

flex-wrap: wrap allows items to wrap to the next line when they do not fit.

flex: 1 on an item makes it grow to fill available space. All items with flex: 1 share the space equally.

Centring with Flexbox:
.container { display: flex; justify-content: center; align-items: center; height: 100vh; }
This centres content both horizontally and vertically.`,
        code:`<!DOCTYPE html>
<html>
<head>
<style>
  body { background:#0d1b2a; font-family:sans-serif; padding:20px; }
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #1e293b;
    padding: 12px 20px;
    border-radius: 10px;
    margin-bottom: 24px;
  }
  nav h2 { color:#e8a020; margin:0; }
  nav a  { color:#94a3b8; text-decoration:none; margin-left:16px; }
  .cards {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
  }
  .card {
    background: #1e293b;
    border: 1px solid #334155;
    border-radius: 12px;
    padding: 20px;
    flex: 1;
    min-width: 150px;
    color: #e2e8f0;
    text-align: center;
  }
  .card span { font-size: 36px; display:block; margin-bottom:8px; }
</style>
</head>
<body>
  <nav>
    <h2>ZamCode</h2>
    <div>
      <a href="#">Lessons</a>
      <a href="#">Search</a>
      <a href="#">About</a>
    </div>
  </nav>
  <div class="cards">
    <div class="card"><span>🟡</span>Pascal</div>
    <div class="card"><span>🔵</span>C++</div>
    <div class="card"><span>🟢</span>Python</div>
    <div class="card"><span>🗄️</span>SQL</div>
  </div>
</body></html>`,
        explanation:"display:flex on nav makes children line up in a row. justify-content:space-between pushes children to opposite ends. flex:1 on cards makes each card grow equally. flex-wrap:wrap allows cards to wrap on small screens.",
        ecz:"Flexbox is the most modern layout topic tested. Know: display:flex, justify-content (space-between, center), align-items, and gap. Expect to arrange navigation links or cards in a row.",
        question:{text:"Which CSS property activates flexbox on a container?",options:["layout: flex","flex: enable","display: flex","position: flex"],answer:2,hint:"display:flex turns the element into a flex container."},
        q2:{text:"What does justify-content: space-between do?",options:["Centres all items","Puts items at the end","First item at start, last at end, equal space between","Makes items equal width"],answer:2,hint:"space-between: first item flush left, last flush right, equal gaps between the rest."},
        q3:{text:"A flex container has flex-wrap: wrap. Items cannot fit on one line. What happens?",options:["Items overflow","Items shrink to fit","Items wrap to the next line","Items are removed"],answer:2,hint:"flex-wrap:wrap allows flex items to flow onto multiple lines."},
        worked:{scenario:"A student is building a footer with three equal columns.",problem:"Use flexbox to arrange three divs side by side with equal spacing and 20px gap between them.",steps:[{explain:"Create the footer container.",code:".footer {\n  display: flex;\n  justify-content: space-between;\n  gap: 20px;\n  padding: 24px;\n  background: #1e293b;\n}"},{explain:"Create equal-width columns.",code:".footer-col {\n  flex: 1;\n  color: #94a3b8;\n}\n.footer-col h3 { color: #e8a020; }"}],answer:"Three equal columns side by side with 20px gaps.",answerCode:"<style>.footer{display:flex;justify-content:space-between;gap:20px;padding:24px;background:#1e293b;}.footer-col{flex:1;color:#94a3b8;}.footer-col h3{color:#e8a020;}</style><div class=\"footer\"><div class=\"footer-col\"><h3>ZamCode</h3><p>Lusaka</p></div><div class=\"footer-col\"><h3>Links</h3><p>Lessons</p></div><div class=\"footer-col\"><h3>Contact</h3><p>info@zamcode.zm</p></div></div>",insight:"flex:1 on each column means they each take an equal share of available width automatically. Add a 4th column and it adjusts to 25% automatically."}
      },
      {
        id:"h15", title:"Build a Zambian School Website", form:4,
        lesson:`This final lesson brings together everything you have learned — HTML structure, semantic elements, tables, forms, links, images, CSS colours, typography, the box model, and Flexbox — to build a complete school website.

Planning before coding — every web project starts with a plan:
1. What pages are needed? (Home, About, Timetable, Contact)
2. What content goes on each page?
3. What is the colour scheme and font?
4. How will navigation work?

A Zambian school website typically needs:
Header with school name, logo, and navigation.
Hero section with a welcome message and school motto.
About section with the school's history and vision.
Features section highlighting key programmes.
Contact form for parents and students.
Footer with address, phone, and social media links.

CSS Custom Properties (variables) — define once, use everywhere:
:root { --primary: #1e3a5f; --accent: #e8a020; }
h1 { color: var(--primary); }
Change one variable and it updates everywhere instantly.

Responsive design with media queries:
@media (max-width: 600px) {
  nav { flex-direction: column; }
}
On screens narrower than 600px (mobile phones), the layout adjusts automatically.

Debugging CSS:
1. Open browser developer tools with F12 or right-click and Inspect.
2. Click an element to see its computed styles and box model.
3. Tick and untick properties to test changes without editing your file.

Web development is a skill you can start practising immediately — a text editor and a browser are all you need.`,
        code:`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Munali Academy — Lusaka</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'Segoe UI', sans-serif; background: #f8fafc; color: #1e293b; }
    nav {
      background: #1e3a5f;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 14px 24px;
    }
    nav .logo { color: #f59e0b; font-size: 20px; font-weight: 800; }
    nav a { color: #cbd5e1; text-decoration: none; margin-left: 20px; font-size: 14px; }
    nav a:hover { color: #ffffff; }
    .hero {
      background: linear-gradient(135deg, #1e3a5f, #27ae60);
      color: white;
      text-align: center;
      padding: 60px 20px;
    }
    .hero h1 { font-size: 36px; margin-bottom: 12px; }
    .hero p  { font-size: 18px; opacity: 0.9; margin-bottom: 24px; }
    .hero a  { background:#f59e0b; color:#000; padding:12px 28px; border-radius:8px; text-decoration:none; font-weight:700; }
    .features { display:flex; gap:20px; flex-wrap:wrap; padding:40px 24px; max-width:960px; margin:0 auto; }
    .feature-card { flex:1; min-width:200px; background:white; border:1px solid #e2e8f0; border-radius:12px; padding:24px; text-align:center; }
    .feature-card .icon { font-size:36px; margin-bottom:12px; }
    .feature-card h3 { color:#1e3a5f; margin-bottom:8px; }
    .feature-card p  { color:#64748b; font-size:14px; }
    footer { background:#1e293b; color:#94a3b8; text-align:center; padding:20px; font-size:13px; }
  </style>
</head>
<body>
  <nav>
    <div class="logo">Munali Academy</div>
    <div>
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Admissions</a>
      <a href="#">Contact</a>
    </div>
  </nav>
  <section class="hero">
    <h1>Excellence in Education</h1>
    <p>Serving the students of Lusaka since 1956</p>
    <a href="#">Apply for Admission</a>
  </section>
  <div class="features">
    <div class="feature-card">
      <div class="icon">📚</div>
      <h3>Strong Curriculum</h3>
      <p>ECZ-aligned syllabi from Form 1 through Form 4.</p>
    </div>
    <div class="feature-card">
      <div class="icon">💻</div>
      <h3>ICT Lab</h3>
      <p>Modern computer lab with internet access for all students.</p>
    </div>
    <div class="feature-card">
      <div class="icon">🏆</div>
      <h3>Top Results</h3>
      <p>94% Grade 12 pass rate in the 2023 ECZ examinations.</p>
    </div>
  </div>
  <footer>
    <p>&copy; 2024 Munali Academy, Lusaka, Zambia. All rights reserved.</p>
  </footer>
</body></html>`,
        explanation:"This page uses every concept covered: semantic HTML, flexbox layout, CSS box model, colour gradients, hover effects, and HTML entities. It is responsive thanks to flex-wrap.",
        question:{text:"Which CSS rule makes all elements include padding and border in their width?",options:["display: box","box-sizing: border-box","width: include-all","padding: box"],answer:1,hint:"box-sizing:border-box prevents width from growing when padding or border is added."},
        q2:{text:"What does the viewport meta tag do?",options:["Sets page background","Tells mobile browsers the page width matches device width","Links a CSS file","Sets page language"],answer:1,hint:"It prevents mobile browsers from zooming out to show a desktop-sized page."},
        q3:{text:"What does linear-gradient(135deg, #1e3a5f, #27ae60) create?",options:["A solid colour","A diagonal gradient from dark blue to green","A horizontal gradient","An image background"],answer:1,hint:"linear-gradient(angle, colour1, colour2) creates a smooth colour transition. 135deg = diagonal."},
        worked:{scenario:"The school website needs a contact form section between features and footer.",problem:"Add a <section> with a contact form containing name, email, message textarea, and a submit button styled to match the page.",steps:[{explain:"Create the section and heading.",code:"<section style=\"padding:40px 24px;max-width:600px;margin:0 auto;\">\n  <h2 style=\"color:#1e3a5f;margin-bottom:20px;\">Contact Us</h2>"},{explain:"Add name and email inputs.",code:"  <form>\n    <input type=\"text\" placeholder=\"Your Name\" style=\"width:100%;padding:10px;margin-bottom:12px;border:1px solid #e2e8f0;border-radius:8px;\">\n    <input type=\"email\" placeholder=\"Email Address\" style=\"width:100%;padding:10px;margin-bottom:12px;border:1px solid #e2e8f0;border-radius:8px;\">"},{explain:"Add textarea and submit button.",code:"    <textarea placeholder=\"Your message\" rows=\"4\" style=\"width:100%;padding:10px;margin-bottom:12px;border:1px solid #e2e8f0;border-radius:8px;\"></textarea>\n    <button style=\"background:#1e3a5f;color:white;padding:12px 24px;border:none;border-radius:8px;\">Send Message</button>\n  </form>\n</section>"}],answer:"A styled contact form matching the page's design.",answerCode:"<section style=\"padding:40px 24px;max-width:600px;margin:0 auto;\"><h2 style=\"color:#1e3a5f;margin-bottom:20px;\">Contact Us</h2><form><input type=\"text\" placeholder=\"Name\" style=\"width:100%;padding:10px;margin-bottom:12px;border:1px solid #e2e8f0;border-radius:8px;\"><input type=\"email\" placeholder=\"Email\" style=\"width:100%;padding:10px;margin-bottom:12px;border:1px solid #e2e8f0;border-radius:8px;\"><textarea rows=\"4\" style=\"width:100%;padding:10px;margin-bottom:12px;border:1px solid #e2e8f0;border-radius:8px;\"></textarea><button style=\"background:#1e3a5f;color:white;padding:12px 24px;border:none;border-radius:8px;\">Send Message</button></form></section>",insight:"When adding a new section, match the existing padding and border-radius conventions. Consistency is what makes a site look professionally designed."}
      },
    ]
  }
};

// ── GAME DATA ────────────────────────────────────────────────────────────────
const BUG_HUNT_LEVELS = [
  // Pascal
  { id:"bh1", lang:"Pascal", difficulty:"Easy", title:"Missing END.",
    code:`PROGRAM Hello;\nBEGIN\n  WriteLn('Welcome to Lusaka');\n  WriteLn('Zambia rocks!');\nEND`,
    bugLine:5, hint:"Pascal programs must end with END. (with a full stop, not a semicolon)",
    explanation:"Line 5 should be END. — a full stop closes the whole program. END; would only close an inner block." },
  { id:"bh2", lang:"Pascal", difficulty:"Easy", title:"Wrong assignment operator",
    code:`PROGRAM Calc;\nVAR x : Integer;\nBEGIN\n  x = 10;\n  WriteLn(x);\nEND.`,
    bugLine:4, hint:"Pascal uses := for assignment, not =",
    explanation:"Line 4 should be: x := 10; — Pascal uses := (colon-equals) for assignment. = is only used for comparison." },
  { id:"bh3", lang:"Pascal", difficulty:"Medium", title:"Semicolon before ELSE",
    code:`PROGRAM Grade;\nVAR m : Integer;\nBEGIN\n  m := 72;\n  IF m >= 50 THEN\n    WriteLn('Pass');\n  ELSE\n    WriteLn('Fail');\nEND.`,
    bugLine:6, hint:"There must be NO semicolon on the line before ELSE",
    explanation:"Line 6: WriteLn('Pass') must not have a semicolon before ELSE. The semicolon ends the IF statement early, making ELSE an orphan." },
  { id:"bh4", lang:"C++", difficulty:"Easy", title:"Missing return statement",
    code:`#include <iostream>\nusing namespace std;\nint main() {\n    cout << "Ndola Mining" << endl;\n    cout << "Copperbelt Province" << endl;\n}`,
    bugLine:6, hint:"int main() must return an integer value",
    explanation:"Line 6: The closing brace should be preceded by return 0; — int main() is declared to return int, so it must return a value." },
  { id:"bh5", lang:"C++", difficulty:"Easy", title:"Wrong comparison operator",
    code:`#include <iostream>\nusing namespace std;\nint main() {\n    int score = 75;\n    if (score = 50)\n        cout << "Pass" << endl;\n    return 0;\n}`,
    bugLine:5, hint:"= assigns a value. == compares two values",
    explanation:"Line 5: if (score = 50) assigns 50 to score and is always true. It should be if (score == 50) to compare." },
  { id:"bh6", lang:"C++", difficulty:"Medium", title:"Missing break in switch",
    code:`#include <iostream>\nusing namespace std;\nint main() {\n    int day = 1;\n    switch(day) {\n        case 1: cout << "Monday"; \n        case 2: cout << "Tuesday";\n    }\n    return 0;\n}`,
    bugLine:6, hint:"Without break; execution falls through to the next case",
    explanation:"Line 6 needs break; after cout << 'Monday'. Without it, both 'Monday' and 'Tuesday' print — this is called fall-through." },
  { id:"bh7", lang:"Python", difficulty:"Easy", title:"Missing colon on if",
    code:`name = input("Enter name: ")\nscore = int(input("Enter score: "))\nif score >= 50\n    print("Pass")\nelse:\n    print("Fail")`,
    bugLine:3, hint:"Python if statements must end with a colon",
    explanation:"Line 3: if score >= 50 must end with a colon — if score >= 50: — Python uses colons instead of brackets to open blocks." },
  { id:"bh8", lang:"Python", difficulty:"Easy", title:"Wrong indentation",
    code:`for i in range(5):\nprint(i)\nprint("Done")`,
    bugLine:2, hint:"Code inside a for loop must be indented",
    explanation:"Line 2: print(i) must be indented with 4 spaces to be inside the loop. Without indentation Python sees it as outside the loop." },
  { id:"bh9", lang:"Python", difficulty:"Medium", title:"String not converted to int",
    code:`name = input("Name: ")\nage = input("Age: ")\nnext_year = age + 1\nprint(name, "will be", next_year)`,
    bugLine:3, hint:"input() always returns a string — you cannot add 1 to a string",
    explanation:"Line 3: age is a string from input(). It must be converted first: age = int(input('Age: ')) — then age + 1 works correctly." },
  { id:"bh10", lang:"SQL", difficulty:"Easy", title:"Missing WHERE on DELETE",
    code:`-- Remove student Bupe Zulu\nDELETE FROM students\nname = 'Bupe Zulu';`,
    bugLine:3, hint:"DELETE needs a WHERE clause to filter which rows to delete",
    explanation:"Line 3 should be: WHERE name = 'Bupe Zulu'; — without WHERE, DELETE FROM students removes EVERY student in the table." },
  { id:"bh11", lang:"SQL", difficulty:"Medium", title:"NULL comparison error",
    code:`SELECT name FROM students\nWHERE province = NULL;`,
    bugLine:2, hint:"You cannot use = to check for NULL in SQL",
    explanation:"Line 2: WHERE province = NULL never matches anything. NULL must be checked with IS NULL: WHERE province IS NULL;" },
  { id:"bh12", lang:"HTML", difficulty:"Easy", title:"Missing alt attribute",
    code:`<!DOCTYPE html>\n<html><body>\n  <h1>Zambia Wildlife</h1>\n  <img src="elephant.jpg" width="300">\n</body></html>`,
    bugLine:4, hint:"Every <img> tag must have an alt attribute for accessibility",
    explanation:"Line 4 is missing alt='description'. Screen readers and broken image fallbacks depend on alt text. Add: alt='An elephant in Kafue National Park'" },
  { id:"bh13", lang:"HTML", difficulty:"Easy", title:"Unclosed tag",
    code:`<!DOCTYPE html>\n<html><body>\n  <p>Welcome to <strong>ZamCode Academy\n  <p>Learn to code today!</p>\n</body></html>`,
    bugLine:3, hint:"Every opening tag needs a matching closing tag",
    explanation:"Line 3: <strong> is opened but never closed. It should be: <strong>ZamCode Academy</strong> — the unclosed tag makes all following text bold." },
  { id:"bh14", lang:"C++", difficulty:"Hard", title:"Off-by-one in loop bound",
    code:`#include <iostream>\nusing namespace std;\nint main() {\n    int marks[5] = {78,91,55,63,88};\n    int total = 0;\n    for(int i=0; i<=5; i++)\n        total += marks[i];\n    cout << total << endl;\n    return 0;\n}`,
    bugLine:6, hint:"Array of size 5 has valid indices 0 to 4 only",
    explanation:"Line 6: i<=5 accesses marks[5] which is out of bounds (valid: 0–4). Change to i<5. This reads one past the array — undefined behaviour that can corrupt memory." },
  { id:"bh15", lang:"Python", difficulty:"Hard", title:"Mutable default argument",
    code:`def add_score(name, scores=[]):\n    scores.append(name)\n    return scores\n\nprint(add_score("Chanda"))\nprint(add_score("Mwamba"))`,
    bugLine:1, hint:"Default mutable arguments are shared across ALL calls — not reset each time",
    explanation:"Line 1: scores=[] is created once when the function is defined and reused on every call. So the second call sees ['Chanda','Mwamba'], not just ['Mwamba']. Fix: use scores=None and create a fresh list inside." },
  { id:"bh16", lang:"Pascal", difficulty:"Hard", title:"Function result never assigned",
    code:`PROGRAM Tax;\nFUNCTION CalcTax(amount : Real) : Real;\nBEGIN\n  IF amount > 5000 THEN\n    Result := (amount - 5000) * 0.25;\nEND;\nBEGIN\n  WriteLn(CalcTax(8000):0:2);\nEND.`,
    bugLine:4, hint:"A Pascal FUNCTION must assign to the function name in EVERY path — including when the IF is false",
    explanation:"Line 4: if amount <= 5000 the IF is false and CalcTax is never assigned — it returns garbage. Add an ELSE clause: ELSE CalcTax := 0; to handle the case where no tax applies." },
  { id:"bh17", lang:"C++", difficulty:"Hard", title:"Integer division loses decimal",
    code:`#include <iostream>\nusing namespace std;\nint main() {\n    int total = 361;\n    int count = 5;\n    double average = total / count;\n    cout << average << endl;\n    return 0;\n}`,
    bugLine:6, hint:"When both operands are int, C++ performs integer division before assigning to double",
    explanation:"Line 6: total/count is int/int = 72 (truncated), then 72 is stored in average. Fix: cast one operand: double average = (double)total / count; or use 5.0 instead of 5." },
  { id:"bh18", lang:"Python", difficulty:"Hard", title:"Loop modifies list being iterated",
    code:`scores = [45, 78, 32, 91, 55]\nfor score in scores:\n    if score < 50:\n        scores.remove(score)\nprint(scores)`,
    bugLine:3, hint:"Removing items from a list while iterating over it skips elements",
    explanation:"Line 3: removing from scores while the for loop iterates it causes elements to be skipped. When 45 is removed, 78 shifts to index 0 — 32 is never checked. Fix: iterate over a copy: for score in scores[:]" },
];

const MATCH_OUTPUT_LEVELS = [
  // ── EASY ─────────────────────────────────────────────────────────────────
  { id:"mo1", lang:"Pascal", difficulty:"Easy",
    code:`PROGRAM A;\nBEGIN\n  WriteLn('Zambia');\n  WriteLn('Rocks');\nEND.`,
    options:["Zambia\nRocks","ZAMBIA\nROCKS","Zambia Rocks","Rocks\nZambia"],
    answer:0,
    explanation:"WriteLn prints each string on its own line. Output is exactly the two strings in order." },

  { id:"mo2", lang:"Python", difficulty:"Easy",
    code:`x = 10\ny = 3\nprint(x + y)\nprint(x - y)\nprint(x * y)`,
    options:["13\n7\n30","7\n13\n30","13\n7\n13","30\n7\n13"],
    answer:0,
    explanation:"10+3=13, 10-3=7, 10*3=30. Each print() outputs on its own line." },

  { id:"mo3", lang:"C++", difficulty:"Easy",
    code:`#include <iostream>\nusing namespace std;\nint main() {\n    int a = 8, b = 3;\n    cout << a / b << endl;\n    cout << a % b << endl;\n    return 0;\n}`,
    options:["2\n3","2\n2","3\n2","2.67\n2"],
    answer:1,
    explanation:"8/3 with integers = 2 (truncated, not 2.67). 8%3 = remainder = 2. Both print on separate lines." },

  { id:"mo4", lang:"SQL", difficulty:"Easy",
    code:`SELECT COUNT(*) FROM students\nWHERE form = 3;\n\n-- Table:\n-- Chanda form=3\n-- Mwamba form=2\n-- Bupe   form=3\n-- Ngoza  form=1\n-- Monde  form=3`,
    options:["5","2","1","3"],
    answer:3,
    explanation:"COUNT(*) counts rows WHERE form=3. Chanda, Bupe, and Monde are Form 3 — that is 3 rows." },

  { id:"mo5", lang:"Pascal", difficulty:"Easy",
    code:`PROGRAM B;\nVAR i : Integer;\nBEGIN\n  FOR i := 3 DOWNTO 1 DO\n    WriteLn(i);\nEND.`,
    options:["1\n2\n3","3\n2\n1","3 2 1","1 2 3"],
    answer:1,
    explanation:"DOWNTO counts backwards from 3 to 1. WriteLn prints each on its own line: 3, then 2, then 1." },

  // ── MEDIUM ────────────────────────────────────────────────────────────────
  { id:"mo6", lang:"Python", difficulty:"Medium",
    code:`marks = [60, 45, 80, 72, 55]\npassing = [m for m in marks if m >= 60]\nprint(len(passing))\nprint(sum(passing))`,
    options:["3\n212","5\n312","3\n192","2\n140"],
    answer:0,
    explanation:"Passing marks (>=60): 60, 80, 72 — that is 3 values. sum = 60+80+72 = 212." },

  { id:"mo7", lang:"C++", difficulty:"Medium",
    code:`#include <iostream>\nusing namespace std;\nint main() {\n    int n = 1;\n    while (n < 50) {\n        n = n * 3;\n    }\n    cout << n << endl;\n    return 0;\n}`,
    options:["27","54","81","48"],
    answer:2,
    explanation:"n: 1→3→9→27→81. At 81, condition 81<50 is FALSE so loop exits. Prints 81." },

  { id:"mo8", lang:"Pascal", difficulty:"Medium",
    code:`PROGRAM C;\nVAR x, y : Integer;\nBEGIN\n  x := 4;\n  y := x * x;\n  x := y - x;\n  WriteLn(x);\n  WriteLn(y);\nEND.`,
    options:["12\n16","16\n12","4\n16","12\n4"],
    answer:0,
    explanation:"x=4, y=4*4=16, x=16-4=12. WriteLn(x) prints 12 first, then WriteLn(y) prints 16." },

  { id:"mo9", lang:"SQL", difficulty:"Medium",
    code:`SELECT province, COUNT(*) AS total\nFROM students\nGROUP BY province\nORDER BY total DESC\nLIMIT 1;\n\n-- Data:\n-- Lusaka: 320 students\n-- Copperbelt: 280 students\n-- Southern: 150 students`,
    options:["Copperbelt 280","Southern 150","Lusaka 320","Lusaka 150"],
    answer:2,
    explanation:"GROUP BY counts per province. ORDER BY total DESC puts highest first. LIMIT 1 returns only Lusaka with 320 — the largest." },

  { id:"mo10", lang:"Python", difficulty:"Medium",
    code:`def greet(name, times=2):\n    return (name + '! ') * times\n\nprint(greet('Chanda'))\nprint(greet('Bupe', 1))`,
    options:["Chanda! Chanda! \nBupe! ","Chanda!\nBupe!","Chanda! \nBupe! ","Chanda!Chanda!\nBupe!"],
    answer:0,
    explanation:"greet('Chanda') uses default times=2: 'Chanda! ' repeated twice = 'Chanda! Chanda! '. greet('Bupe',1) = 'Bupe! ' once." },

  // ── HARD ──────────────────────────────────────────────────────────────────
  { id:"mo11", lang:"Python", difficulty:"Hard",
    code:`a = [1, 2, 3]\nb = a\nb.append(4)\nprint(a)\nprint(b)\nprint(a is b)`,
    options:["[1,2,3]\n[1,2,3,4]\nFalse","[1,2,3,4]\n[1,2,3,4]\nTrue","[1,2,3]\n[1,2,3,4]\nTrue","[1,2,3,4]\n[1,2,3]\nFalse"],
    answer:1,
    explanation:"b = a makes b point to the SAME list, not a copy. Appending to b also changes a. Both print [1,2,3,4]. a is b is True because they are the identical object." },

  { id:"mo12", lang:"C++", difficulty:"Hard",
    code:`#include <iostream>\nusing namespace std;\nint main() {\n    int x = 5;\n    cout << x++ << endl;\n    cout << ++x << endl;\n    cout << x   << endl;\n    return 0;\n}`,
    options:["5\n7\n7","6\n7\n7","5\n6\n6","6\n6\n6"],
    answer:0,
    explanation:"x++ prints x THEN increments: prints 5, x becomes 6. ++x increments THEN prints: x becomes 7, prints 7. Final cout prints current x = 7." },

  { id:"mo13", lang:"Pascal", difficulty:"Hard",
    code:`PROGRAM D;\nVAR i, total : Integer;\nBEGIN\n  total := 0;\n  FOR i := 1 TO 5 DO\n  BEGIN\n    IF i MOD 2 = 0 THEN\n      total := total + i;\n  END;\n  WriteLn(total);\nEND.`,
    options:["15","9","6","10"],
    answer:2,
    explanation:"Loop i=1 to 5. MOD 2 = 0 means even. Even numbers: 2 and 4. total = 2+4 = 6. Odd numbers (1,3,5) are skipped." },

  { id:"mo14", lang:"Python", difficulty:"Hard",
    code:`def mystery(n):\n    if n <= 0:\n        return 0\n    return n + mystery(n - 2)\n\nprint(mystery(6))`,
    options:["12","21","6","9"],
    answer:0,
    explanation:"mystery(6) = 6+mystery(4) = 6+4+mystery(2) = 6+4+2+mystery(0) = 6+4+2+0 = 12. Sums even numbers from 6 down to 0." },

  { id:"mo15", lang:"C++", difficulty:"Hard",
    code:`#include <iostream>\nusing namespace std;\nint main() {\n    int arr[] = {3, 1, 4, 1, 5};\n    int n = 5, swapped = 1;\n    while (swapped) {\n        swapped = 0;\n        for (int i=0; i<n-1; i++)\n            if (arr[i] > arr[i+1]) {\n                int t=arr[i]; arr[i]=arr[i+1]; arr[i+1]=t;\n                swapped = 1;\n            }\n    }\n    cout << arr[0] << " " << arr[4] << endl;\n    return 0;\n}`,
    options:["3 5","1 5","5 1","1 4"],
    answer:1,
    explanation:"Bubble sort runs on {3,1,4,1,5} giving sorted array {1,1,3,4,5}. arr[0]=1 (smallest), arr[4]=5 (largest). Output: 1 5." },
];


const ALL_TOPICS = Object.entries(CURRICULUM).flatMap(([lang, data]) =>
  data.topics.map(t => ({ ...t, language: lang, langColor: data.color, langIcon: data.icon }))
);

export default function App() {
  const [screen, setScreen] = useState("home");
  const [selectedLang, setSelectedLang] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [quizAnswer, setQuizAnswer] = useState(null);
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizSessionScore, setQuizSessionScore] = useState(0);
  const [quizDone, setQuizDone] = useState(false);
  const [completed, setCompleted] = useState({});
  const [scores, setScores] = useState({});
  const [showHint, setShowHint] = useState(false);
  const [tab, setTab] = useState("lesson");
  const [traceStep, setTraceStep] = useState(0);
  const [ready, setReady] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isOnline, setIsOnline] = useState(typeof navigator !== "undefined" ? navigator.onLine : true);
  const [darkMode, setDarkMode]     = useState(true);
  const [fontScale, setFontScale]   = useState(1); // 0.85 | 1 | 1.2
  const [lastTopicId, setLastTopicId] = useState(null); // for Resume button

  // ── Game state ───────────────────────────────────────────────────────────
  const [gameScreen, setGameScreen]       = useState(null); // null | "hub" | "bughunt" | "matchoutput"
  const [gameScores, setGameScores]       = useState({ bugHunt:{}, matchOutput:{} });
  const [bhLevel, setBhLevel]             = useState(null);
  const [bhSelected, setBhSelected]       = useState(null);
  const [bhResult, setBhResult]           = useState(null); // null | "correct" | "wrong"
  const [showBhHint, setShowBhHint]       = useState(false);
  const [moLevel, setMoLevel]             = useState(null);
  const [moSelected, setMoSelected]       = useState(null);
  const [moResult, setMoResult]           = useState(null);
  const [confirmResetBh, setConfirmResetBh] = useState(false);
  const [confirmResetMo, setConfirmResetMo] = useState(false);

  // ── Speed Quiz state ─────────────────────────────────────────────────────
  const [sqQuestions, setSqQuestions]     = useState([]);   // array of question objects
  const [sqIndex, setSqIndex]             = useState(0);    // current question index
  const [sqSelected, setSqSelected]       = useState(null); // selected option index
  const [sqSubmitted, setSqSubmitted]     = useState(false);// submitted this question
  const [sqScore, setSqScore]             = useState(0);    // running correct count
  const [sqDone, setSqDone]               = useState(false);// all questions finished
  const [sqTimeLeft, setSqTimeLeft]       = useState(15);   // seconds remaining
  const [sqResults, setSqResults]         = useState([]);   // per-question results
  const [sqHighScore, setSqHighScore]     = useState(0);    // best score ever

  // ── Speed Quiz timer ─────────────────────────────────────────────────────
  useEffect(() => {
    if (gameScreen !== "speedquiz" || sqDone || sqSubmitted || sqQuestions.length === 0) return;
    if (sqTimeLeft <= 0) {
      // Time up — auto-submit as wrong
      setSqSubmitted(true);
      setSqResults(prev => [...prev, { question: sqQuestions[sqIndex], selected: null, correct: false, timedOut: true }]);
      return;
    }
    const t = setTimeout(() => setSqTimeLeft(s => s - 1), 1000);
    return () => clearTimeout(t);
  }, [gameScreen, sqDone, sqSubmitted, sqTimeLeft, sqIndex]);

  function startSpeedQuiz() {
    // Gather all questions from ALL topics (not just completed ones)
    const pool = [];
    ALL_TOPICS.forEach(topic => {
      const qs = [topic.question];
      if (topic.q2) qs.push(topic.q2);
      if (topic.q3) qs.push(topic.q3);
      qs.forEach(q => pool.push({ ...q, topicTitle: topic.title, language: topic.language, langColor: topic.langColor }));
    });
    // Shuffle and pick 10
    const shuffled = pool.sort(() => Math.random() - 0.5).slice(0, 10);
    setSqQuestions(shuffled);
    setSqIndex(0);
    setSqSelected(null);
    setSqSubmitted(false);
    setSqScore(0);
    setSqDone(false);
    setSqTimeLeft(15);
    setSqResults([]);
    setGameScreen("speedquiz");
  }

  function sqSubmitAnswer() {
    if (sqSubmitted) return;
    const q = sqQuestions[sqIndex];
    const correct = sqSelected === q.answer;
    setSqSubmitted(true);
    if (correct) setSqScore(s => s + 1);
    setSqResults(prev => [...prev, { question: q, selected: sqSelected, correct, timedOut: false }]);
  }

  function sqNext() {
    const finalScore = sqResults.filter(r => r.correct).length;
    if (sqIndex >= sqQuestions.length - 1) {
      setSqDone(true);
      setSqHighScore(prev => Math.max(prev, finalScore));
    } else {
      setSqIndex(i => i + 1);
      setSqSelected(null);
      setSqSubmitted(false);
      setSqTimeLeft(15);
    }
  }
  // ── Font scale helper ────────────────────────────────────────────────────
  const fs = (base) => Math.round(base * fontScale);

  const T = darkMode ? {
    // backgrounds
    pageBg:    "linear-gradient(135deg,#0d1b2a 0%,#1b2838 50%,#0d2137 100%)",
    screenBg:  "#0d1b2a",
    cardBg:    "rgba(255,255,255,0.04)",
    cardBg2:   "#1e293b",
    inputBg:   "#1e293b",
    codeBg:    "#0a0f16",
    // text
    text:      "#f1f5f9",
    textMuted: "#94a3b8",
    textFaint: "#475569",
    textCode:  "#e2e8f0",
    // borders
    border:    "rgba(255,255,255,0.08)",
    border2:   "rgba(255,255,255,0.12)",
    // accents
    accent:    "#e8a020",
    // toggle button
    toggleBg:  "rgba(255,255,255,0.08)",
    toggleIcon:"☀️",
    toggleLabel:"Light mode",
  } : {
    pageBg:    "linear-gradient(135deg,#e0f2fe 0%,#f0f9ff 50%,#dbeafe 100%)",
    screenBg:  "#f0f9ff",
    cardBg:    "rgba(30,58,138,0.05)",
    cardBg2:   "#ffffff",
    inputBg:   "#ffffff",
    codeBg:    "#1e3a5f",
    text:      "#0f172a",
    textMuted: "#1e3a8a",
    textFaint: "#3b82f6",
    textCode:  "#1e293b",
    border:    "rgba(30,58,138,0.15)",
    border2:   "rgba(30,58,138,0.25)",
    accent:    "#1e40af",
    toggleBg:  "rgba(30,58,138,0.1)",
    toggleIcon:"🌙",
    toggleLabel:"Dark mode",
  };

  // ── Monitor connectivity ─────────────────────────────────────────────────
  useEffect(() => {
    const goOnline  = () => setIsOnline(true);
    const goOffline = () => setIsOnline(false);
    window.addEventListener("online",  goOnline);
    window.addEventListener("offline", goOffline);
    return () => {
      window.removeEventListener("online",  goOnline);
      window.removeEventListener("offline", goOffline);
    };
  }, []);

  // ── Load progress on mount ───────────────────────────────────────────────
  useEffect(() => {
    async function load() {
      try {
        const result = await Promise.race([
          window.storage.get("zca_progress"),
          new Promise((_, rej) => setTimeout(() => rej("timeout"), 1500))
        ]);
        if (result) {
          const d = JSON.parse(result.value);
          if (d.completed)  setCompleted(d.completed);
          if (d.scores)     setScores(d.scores);
          if (d.gameScores) setGameScores(d.gameScores);
          if (d.sqHighScore) setSqHighScore(d.sqHighScore);
          if (d.fontScale)    setFontScale(d.fontScale);
          if (d.lastTopicId)  setLastTopicId(d.lastTopicId);
        }
      } catch (_) {}
      setReady(true);
    }
    load();
  }, []);

  // ── Save progress whenever completed/scores change ───────────────────────
  useEffect(() => {
    if (!ready) return;
    async function save() {
      try {
        await Promise.race([
          window.storage.set("zca_progress", JSON.stringify({
            completed, scores, gameScores, sqHighScore, fontScale, lastTopicId
          })),
          new Promise(r => setTimeout(r, 2000))
        ]);
      } catch (_) {}
    }
    save();
  }, [completed, scores, ready, gameScores, sqHighScore, fontScale, lastTopicId]);

  const [confirmReset, setConfirmReset] = useState(false);

  // ── Reset progress for one language ─────────────────────────────────────
  async function resetLanguage(langName) {
    const langTopicIds = CURRICULUM[langName].topics.map(t => t.id);
    const newCompleted = Object.fromEntries(Object.entries(completed).filter(([id]) => !langTopicIds.includes(id)));
    const newScores    = Object.fromEntries(Object.entries(scores).filter(([id]) => !langTopicIds.includes(id)));
    setCompleted(newCompleted);
    setScores(newScores);
    setConfirmReset(false);
  }

  const lang = selectedLang ? CURRICULUM[selectedLang] : null;
  const topics = lang ? lang.topics.map(t => ({ ...t, language: selectedLang, langColor: lang.color, langIcon: lang.icon })) : [];

  function startLesson(topic) {
    setSelectedTopic(topic);
    setLastTopicId(topic.id);
    setQuizAnswer(null); setQuizSubmitted(false);
    setQuizIndex(0); setQuizSessionScore(0); setQuizDone(false);
    setShowHint(false); setTraceStep(0); setTab("lesson"); setScreen("lesson");
  }

  function getQuestions(topic) {
    const qs = [topic.question];
    if (topic.q2) qs.push(topic.q2);
    if (topic.q3) qs.push(topic.q3);
    return qs;
  }

  function submitQuiz() {
    if (quizAnswer === null) return;
    const questions = getQuestions(selectedTopic);
    const correct = quizAnswer === questions[quizIndex].answer;
    const newScore = quizSessionScore + (correct ? 1 : 0);
    setQuizSubmitted(true);
    setQuizSessionScore(newScore);
    if (quizIndex >= questions.length - 1) {
      setQuizDone(true);
      setCompleted(prev => ({ ...prev, [selectedTopic.id]: true }));
      setScores(prev => ({ ...prev, [selectedTopic.id]: newScore === questions.length }));
    }
  }

  function nextQuestion() {
    setQuizIndex(i => i + 1);
    setQuizAnswer(null);
    setQuizSubmitted(false);
    setShowHint(false);
  }

  const formColors = {};

  // ── Offline banner (shown on every screen) ────────────────────────────────
  const OfflineBanner = !isOnline ? (
    <div style={{ background:"#7c2d12", borderBottom:"2px solid #ea580c", padding:"9px 16px", display:"flex", alignItems:"center", gap:10, fontFamily:"'Segoe UI',sans-serif" }}>
      <span style={{ fontSize:16 }}>📡</span>
      <div style={{ flex:1 }}>
        <span style={{ color:"#fed7aa", fontWeight:700, fontSize:13 }}>No internet connection</span>
        <span style={{ color:"#fdba74", fontSize:12, marginLeft:8 }}>Lessons still work — progress saves when you reconnect</span>
      </div>
    </div>
  ) : null;

  // ── Loading splash ────────────────────────────────────────────────────────
  if (!ready) return (
    <div style={{ minHeight:"100vh", background:darkMode?"linear-gradient(135deg,#0d1b2a,#1b2838)":"linear-gradient(135deg,#e0f2fe,#dbeafe)", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:16, fontFamily:"'Segoe UI',sans-serif", color:T.text }}>
      {OfflineBanner && <div style={{ position:"fixed", top:0, left:0, right:0, zIndex:999 }}>{OfflineBanner}</div>}
      <div style={{ position:"relative", marginBottom:4 }}>
        <div style={{ width:72, height:72, borderRadius:20, background:"linear-gradient(135deg,#e8a020,#27ae60)", display:"flex", alignItems:"center", justifyContent:"center", boxShadow:"0 4px 24px rgba(232,160,32,0.4)" }}>
          <span style={{ fontFamily:"'Courier New',monospace", fontWeight:900, fontSize:28, color:"#000", letterSpacing:"-2px" }}>&lt;/&gt;</span>
        </div>
      </div>
      <div style={{ color:"#e8a020", fontWeight:900, fontSize:24, letterSpacing:"-0.5px" }}>ZamCode Academy</div>
      <div style={{ color:"#64748b", fontSize:13 }}>Loading your progress…</div>
      <style>{`@keyframes zca{0%,100%{opacity:.3}50%{opacity:1}}`}</style>
      <div style={{ display:"flex", gap:8 }}>
        {[0,1,2].map(i => <div key={i} style={{ width:10, height:10, borderRadius:"50%", background:"#27ae60", animation:`zca 1.2s ease-in-out ${i*0.2}s infinite` }} />)}
      </div>
    </div>
  );

  // ── HOME ─────────────────────────────────────────────────────────────────

  // ── GAMES ─────────────────────────────────────────────────────────────
  if (gameScreen === "hub") {
    const bhDone    = Object.keys(gameScores.bugHunt).length;
    const moDone    = Object.keys(gameScores.matchOutput).length;
    const bhPerfect = Object.values(gameScores.bugHunt).filter(Boolean).length;
    const moPerfect = Object.values(gameScores.matchOutput).filter(Boolean).length;
    return (
      <div style={{ minHeight:"100vh", background:T.screenBg, fontFamily:"'Segoe UI',sans-serif", color:T.text, paddingBottom:48 }}>
        {OfflineBanner}
        <div style={{ background:"linear-gradient(135deg,#4f46e5,#7c3aed)", padding:"20px 18px 24px" }}>
          <button onClick={() => { setConfirmResetBh(false); setGameScreen(null); }} style={{ background:"none", border:"none", color:"rgba(255,255,255,0.7)", cursor:"pointer", fontSize:14, padding:0, marginBottom:12 }}>← Back</button>
          <div style={{ display:"flex", alignItems:"center", gap:12 }}>
            <div style={{ fontSize:40 }}>🎮</div>
            <div>
              <h1 style={{ margin:0, fontSize:26, fontWeight:900, color:"#fff" }}>Games Zone</h1>
              <p style={{ margin:0, color:"rgba(255,255,255,0.7)", fontSize:13 }}>Challenge yourself — no pressure, just fun!</p>
            </div>
          </div>
        </div>
        <div style={{ maxWidth:500, margin:"0 auto", padding:"20px 18px" }}>

          {/* Bug Hunt card */}
          <div style={{ marginBottom:14 }}>
            <button onClick={() => { setBhLevel(null); setBhSelected(null); setBhResult(null); setConfirmResetBh(false); setGameScreen("bughunt"); }}
              style={{ width:"100%", background:T.cardBg2, border:`2px solid #e74c3c33`, borderRadius:20, padding:0, cursor:"pointer", textAlign:"left", color:T.text, overflow:"hidden", boxShadow:darkMode?"0 4px 16px rgba(0,0,0,0.3)":"0 4px 16px rgba(0,0,0,0.08)" }}>
              <div style={{ height:5, background:"linear-gradient(90deg,#e74c3c,#f39c12)" }} />
              <div style={{ padding:"18px 20px" }}>
                <div style={{ display:"flex", alignItems:"center", gap:14, marginBottom:12 }}>
                  <div style={{ width:54, height:54, borderRadius:14, background:"linear-gradient(135deg,#e74c3c,#f39c12)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:26 }}>🐛</div>
                  <div>
                    <div style={{ fontWeight:800, fontSize:18 }}>Bug Hunt</div>
                    <div style={{ color:T.textMuted, fontSize:12, marginTop:2 }}>Find the error on the wrong line</div>
                  </div>
                </div>
                <div style={{ display:"flex", gap:12, flexWrap:"wrap" }}>
                  <div style={{ background:"#e74c3c22", borderRadius:8, padding:"6px 12px", fontSize:12, color:"#e74c3c", fontWeight:700 }}>🐛 {BUG_HUNT_LEVELS.length} challenges</div>
                  <div style={{ background:"#27ae6022", borderRadius:8, padding:"6px 12px", fontSize:12, color:"#27ae60", fontWeight:700 }}>✅ {bhDone} attempted</div>
                  <div style={{ background:"#f39c1222", borderRadius:8, padding:"6px 12px", fontSize:12, color:"#f39c12", fontWeight:700 }}>🎯 {bhPerfect} correct</div>
                </div>
                <div style={{ marginTop:12, background:darkMode?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.04)", borderRadius:8, height:6, overflow:"hidden" }}>
                  <div style={{ background:"linear-gradient(90deg,#e74c3c,#f39c12)", height:"100%", width:`${(bhDone/BUG_HUNT_LEVELS.length)*100}%`, borderRadius:8, transition:"width 0.5s" }} />
                </div>
              </div>
            </button>
            {/* Reset row — only when there is progress */}
            {bhDone > 0 && (
              <div style={{ display:"flex", justifyContent:"flex-end", alignItems:"center", gap:8, marginTop:8, paddingRight:4 }}>
                {!confirmResetBh
                  ? <button onClick={e => { e.stopPropagation(); setConfirmResetBh(true); }}
                      style={{ background:"#e74c3c22", border:"1px solid #e74c3c88", borderRadius:8, padding:"5px 12px", color:"#e74c3c", cursor:"pointer", fontSize:12, fontWeight:600 }}>↺ Reset progress</button>
                  : <>
                      <span style={{ fontSize:12, color:"#e74c3c", fontWeight:600 }}>Reset Bug Hunt?</span>
                      <button onClick={() => { setGameScores(prev => ({ ...prev, bugHunt:{} })); setConfirmResetBh(false); }}
                        style={{ background:"#e74c3c", border:"none", borderRadius:8, padding:"5px 12px", color:"#fff", fontSize:12, cursor:"pointer", fontWeight:700 }}>Yes</button>
                      <button onClick={() => setConfirmResetBh(false)}
                        style={{ background:"none", border:`1px solid ${T.border2}`, borderRadius:8, padding:"5px 12px", color:T.textFaint, fontSize:12, cursor:"pointer" }}>No</button>
                    </>
                }
              </div>
            )}
          </div>

          {/* Match the Output card */}
          <div>
            <button onClick={() => { setMoLevel(null); setMoSelected(null); setMoResult(null); setConfirmResetMo(false); setGameScreen("matchoutput"); }}
              style={{ width:"100%", background:T.cardBg2, border:`2px solid #2e86de33`, borderRadius:20, padding:0, cursor:"pointer", textAlign:"left", color:T.text, overflow:"hidden", boxShadow:darkMode?"0 4px 16px rgba(0,0,0,0.3)":"0 4px 16px rgba(0,0,0,0.08)" }}>
              <div style={{ height:5, background:"linear-gradient(90deg,#2e86de,#27ae60)" }} />
              <div style={{ padding:"18px 20px" }}>
                <div style={{ display:"flex", alignItems:"center", gap:14, marginBottom:12 }}>
                  <div style={{ width:54, height:54, borderRadius:14, background:"linear-gradient(135deg,#2e86de,#27ae60)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:26 }}>🖥️</div>
                  <div>
                    <div style={{ fontWeight:800, fontSize:18 }}>Match the Output</div>
                    <div style={{ color:T.textMuted, fontSize:12, marginTop:2 }}>Read code — pick the correct output</div>
                  </div>
                </div>
                <div style={{ display:"flex", gap:12, flexWrap:"wrap" }}>
                  <div style={{ background:"#2e86de22", borderRadius:8, padding:"6px 12px", fontSize:12, color:"#2e86de", fontWeight:700 }}>🖥️ {MATCH_OUTPUT_LEVELS.length} puzzles</div>
                  <div style={{ background:"#27ae6022", borderRadius:8, padding:"6px 12px", fontSize:12, color:"#27ae60", fontWeight:700 }}>✅ {moDone} attempted</div>
                  <div style={{ background:"#f39c1222", borderRadius:8, padding:"6px 12px", fontSize:12, color:"#f39c12", fontWeight:700 }}>🎯 {moPerfect} correct</div>
                </div>
                <div style={{ marginTop:12, background:darkMode?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.04)", borderRadius:8, height:6, overflow:"hidden" }}>
                  <div style={{ background:"linear-gradient(90deg,#2e86de,#27ae60)", height:"100%", width:`${(moDone/MATCH_OUTPUT_LEVELS.length)*100}%`, borderRadius:8, transition:"width 0.5s" }} />
                </div>
              </div>
            </button>
            {moDone > 0 && (
              <div style={{ display:"flex", justifyContent:"flex-end", alignItems:"center", gap:8, marginTop:8, paddingRight:4 }}>
                {!confirmResetMo
                  ? <button onClick={e => { e.stopPropagation(); setConfirmResetMo(true); }}
                      style={{ background:"#e74c3c22", border:"1px solid #e74c3c88", borderRadius:8, padding:"5px 12px", color:"#e74c3c", cursor:"pointer", fontSize:12, fontWeight:600 }}>↺ Reset progress</button>
                  : <>
                      <span style={{ fontSize:12, color:"#e74c3c", fontWeight:600 }}>Reset Match the Output?</span>
                      <button onClick={() => { setGameScores(prev => ({ ...prev, matchOutput:{} })); setConfirmResetMo(false); }}
                        style={{ background:"#e74c3c", border:"none", borderRadius:8, padding:"5px 12px", color:"#fff", fontSize:12, cursor:"pointer", fontWeight:700 }}>Yes</button>
                      <button onClick={() => setConfirmResetMo(false)}
                        style={{ background:"none", border:`1px solid ${T.border2}`, borderRadius:8, padding:"5px 12px", color:T.textFaint, fontSize:12, cursor:"pointer" }}>No</button>
                    </>
                }
              </div>
            )}
          </div>

          {/* Speed Quiz card */}
          <button onClick={startSpeedQuiz}
            style={{ width:"100%", background:T.cardBg2, border:`2px solid #7c3aed33`, borderRadius:20, padding:0, cursor:"pointer", textAlign:"left", color:T.text, marginTop:14, overflow:"hidden", boxShadow:darkMode?"0 4px 16px rgba(0,0,0,0.3)":"0 4px 16px rgba(0,0,0,0.08)" }}>
            <div style={{ height:5, background:"linear-gradient(90deg,#7c3aed,#e8a020)" }} />
            <div style={{ padding:"18px 20px" }}>
              <div style={{ display:"flex", alignItems:"center", gap:14, marginBottom:12 }}>
                <div style={{ width:54, height:54, borderRadius:14, background:"linear-gradient(135deg,#7c3aed,#e8a020)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:26 }}>⚡</div>
                <div>
                  <div style={{ fontWeight:800, fontSize:18 }}>Speed Quiz</div>
                  <div style={{ color:T.textMuted, fontSize:12, marginTop:2 }}>10 questions · 15 seconds each · exam mode</div>
                </div>
              </div>
              <div style={{ display:"flex", gap:12, flexWrap:"wrap" }}>
                <div style={{ background:"#7c3aed22", borderRadius:8, padding:"6px 12px", fontSize:12, color:"#a78bfa", fontWeight:700 }}>⚡ 10 random questions</div>
                <div style={{ background:"#e8a02022", borderRadius:8, padding:"6px 12px", fontSize:12, color:"#e8a020", fontWeight:700 }}>🏆 Best: {sqHighScore}/10</div>
              </div>
            </div>
          </button>

          <p style={{ color:T.textFaint, fontSize:12, textAlign:"center", marginTop:20 }}>Games are separate from your lesson progress 🎮</p>
        </div>
      </div>
    );
  }

  // ── BUG HUNT ──────────────────────────────────────────────────────────────
  if (gameScreen === "bughunt") {
    const diffColors = { Easy:"#27ae60", Medium:"#e8a020", Hard:"#e74c3c" };
    const langColors2 = { Pascal:"#e8a020", "C++":"#2e86de", Python:"#27ae60", SQL:"#e74c3c", HTML:"#e44d26" };

    if (!bhLevel) {
      // Level select
      const byLang = {};
      BUG_HUNT_LEVELS.forEach(l => { if (!byLang[l.lang]) byLang[l.lang]=[]; byLang[l.lang].push(l); });
      return (
        <div style={{ minHeight:"100vh", background:T.screenBg, fontFamily:"'Segoe UI',sans-serif", color:T.text, paddingBottom:48 }}>
          {OfflineBanner}
          <div style={{ background:"linear-gradient(135deg,#e74c3c,#f39c12)", padding:"20px 18px 22px" }}>
            <button onClick={() => setGameScreen("hub")} style={{ background:"none", border:"none", color:"rgba(255,255,255,0.8)", cursor:"pointer", fontSize:14, padding:0, marginBottom:12 }}>← Games Zone</button>
            <div style={{ display:"flex", alignItems:"center", gap:10 }}>
              <span style={{ fontSize:32 }}>🐛</span>
              <div>
                <h2 style={{ margin:0, fontWeight:900, fontSize:22, color:"#fff" }}>Bug Hunt</h2>
                <p style={{ margin:0, color:"rgba(255,255,255,0.75)", fontSize:13 }}>Tap the line with the bug!</p>
              </div>
            </div>
          </div>
          <div style={{ maxWidth:500, margin:"0 auto", padding:"18px 16px" }}>
            {Object.entries(byLang).map(([lang, levels]) => (
              <div key={lang} style={{ marginBottom:20 }}>
                <div style={{ fontSize:13, fontWeight:700, color:langColors2[lang]||"#888", textTransform:"uppercase", letterSpacing:1, marginBottom:10 }}>{lang}</div>
                <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
                  {levels.map((lv, idx) => {
                    const done    = gameScores.bugHunt[lv.id] !== undefined;
                    const correct = gameScores.bugHunt[lv.id] === true;
                    return (
                      <button key={lv.id} onClick={() => { setBhLevel(lv); setBhSelected(null); setBhResult(null); setShowBhHint(false); }}
                        style={{ background:done?(correct?darkMode?"#0f2e1a":"#f0fdf4":darkMode?"#2e0e0e":"#fef2f2"):T.cardBg2, border:`1.5px solid ${done?(correct?"#27ae60":"#e74c3c"):(langColors2[lang]||"#444")+"33"}`, borderRadius:12, padding:"12px 14px", cursor:"pointer", display:"flex", alignItems:"center", gap:12, textAlign:"left", color:T.text }}>
                        <div style={{ width:32, height:32, borderRadius:8, background:(langColors2[lang]||"#888")+"22", display:"flex", alignItems:"center", justifyContent:"center", fontWeight:800, fontSize:13, color:langColors2[lang]||"#888", flexShrink:0 }}>{idx+1}</div>
                        <div style={{ flex:1 }}>
                          <div style={{ fontWeight:700, fontSize:14 }}>{lv.title}</div>
                          <div style={{ fontSize:11, color:diffColors[lv.difficulty]||"#888", fontWeight:600, marginTop:2 }}>{lv.difficulty}</div>
                        </div>
                        <div style={{ fontSize:16 }}>{done?(correct?"✅":"❌"):"›"}</div>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    // Playing a level
    const lines = bhLevel.code.split("\n");
    return (
      <div style={{ minHeight:"100vh", background:T.screenBg, fontFamily:"'Segoe UI',sans-serif", color:T.text, paddingBottom:48 }}>
        {OfflineBanner}
        <div style={{ background:"linear-gradient(135deg,#e74c3c,#f39c12)", padding:"16px 18px 18px" }}>
          <button onClick={() => { setBhLevel(null); setBhResult(null); setBhSelected(null); }} style={{ background:"none", border:"none", color:"rgba(255,255,255,0.8)", cursor:"pointer", fontSize:14, padding:0, marginBottom:10 }}>← All Levels</button>
          <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between" }}>
            <div>
              <div style={{ fontWeight:900, fontSize:18, color:"#fff" }}>🐛 {bhLevel.title}</div>
              <div style={{ fontSize:12, color:"rgba(255,255,255,0.7)", marginTop:2 }}>{bhLevel.lang} · {bhLevel.difficulty}</div>
            </div>
            {bhResult && <div style={{ fontSize:28 }}>{bhResult==="correct"?"🏆":"💪"}</div>}
          </div>
        </div>
        <div style={{ maxWidth:500, margin:"0 auto", padding:"18px 16px" }}>

          <div style={{ marginBottom:14 }}>
            <div style={{ color:T.textFaint, fontSize:12, marginBottom:8, fontWeight:600 }}>
              {bhResult ? "The bug was on line:" : "👇 Tap the line that contains the bug:"}
            </div>
            <div style={{ background:"#0a0f16", borderRadius:14, overflow:"hidden", border:`1px solid ${bhResult==="correct"?"#27ae6055":"#334155"}` }}>
              <div style={{ background:"#1e293b", padding:"8px 14px", display:"flex", gap:5 }}>
                {["#e74c3c","#f39c12","#27ae60"].map(c => <div key={c} style={{ width:10, height:10, borderRadius:"50%", background:c }} />)}
                <span style={{ color:"#64748b", fontSize:11, marginLeft:6 }}>{bhLevel.lang === "Pascal" ? "program.pas" : bhLevel.lang === "C++" ? "main.cpp" : bhLevel.lang === "Python" ? "script.py" : bhLevel.lang === "SQL" ? "query.sql" : "index.html"}</span>
              </div>
              {lines.map((line, i) => {
                const lineNum = i + 1;
                const isBug   = lineNum === bhLevel.bugLine;
                const isSel   = bhSelected === lineNum;
                let bg = "transparent", border = "3px solid transparent", textCol = "#94a3b8";
                if (bhResult) {
                  if (isBug)  { bg="#0f2e1a"; border="3px solid #27ae60"; textCol="#6ee7a0"; }
                  else if (isSel && !isBug) { bg="#2e0e0e"; border="3px solid #e74c3c"; textCol="#fca5a5"; }
                } else if (isSel) {
                  bg="#1e3a5f"; border="3px solid #2e86de"; textCol="#93c5fd";
                }
                return (
                  <button key={i} onClick={() => !bhResult && setBhSelected(lineNum)}
                    style={{ display:"flex", width:"100%", alignItems:"stretch", background:bg, borderLeft:border, borderTop:"none", borderRight:"none", borderBottom:"none", cursor:bhResult?"default":"pointer", transition:"all 0.15s", padding:0 }}>
                    <span style={{ color:isBug&&bhResult?"#27ae60":"#334155", width:34, textAlign:"right", paddingRight:10, userSelect:"none", fontSize:11, display:"flex", alignItems:"center", justifyContent:"flex-end", flexShrink:0 }}>{lineNum}</span>
                    <span style={{ color:textCol, paddingLeft:4, paddingRight:14, paddingTop:5, paddingBottom:5, whiteSpace:"pre", fontFamily:"'Courier New',monospace", fontSize:12.5, lineHeight:1.7, textAlign:"left" }}>{line || " "}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {!bhResult && (
            <div style={{ display:"flex", gap:9, marginBottom:10 }}>
              <button onClick={() => setShowBhHint(h => !h)}
                style={{ background:T.cardBg2, border:`1px solid ${T.border2}`, borderRadius:12, padding:"13px 16px", color:T.textMuted, cursor:"pointer", fontSize:13, fontWeight:600, whiteSpace:"nowrap" }}>
                💡 {showBhHint ? "Hide Hint" : "Show Hint"}
              </button>
              <button onClick={() => {
                if (bhSelected === null) return;
                const correct = bhSelected === bhLevel.bugLine;
                setBhResult(correct ? "correct" : "wrong");
                setGameScores(prev => ({ ...prev, bugHunt: { ...prev.bugHunt, [bhLevel.id]: correct } }));
              }} disabled={bhSelected === null}
                style={{ flex:1, background:bhSelected!==null?"#e74c3c":"#334155", border:"none", borderRadius:12, padding:"13px", color:bhSelected!==null?"#fff":"#64748b", fontWeight:700, fontSize:15, cursor:bhSelected!==null?"pointer":"default" }}>
                🐛 That's the Bug!
              </button>
            </div>
          )}

          {showBhHint && !bhResult && (
            <div style={{ background:darkMode?"#1e293b":"#eff6ff", border:"1px solid #2563eb44", borderRadius:12, padding:"11px 14px", marginBottom:10 }}>
              <p style={{ margin:0, color:darkMode?"#93c5fd":"#1d4ed8", fontSize:13 }}>💡 <strong>Hint:</strong> {bhLevel.hint}</p>
            </div>
          )}

          {bhResult && (
            <div style={{ background:bhResult==="correct"?darkMode?"#0f2e1a":"#f0fdf4":darkMode?"#2e0e0e":"#fef2f2", border:`2px solid ${bhResult==="correct"?"#27ae60":"#e74c3c"}`, borderRadius:14, padding:16, marginBottom:12 }}>
              <p style={{ margin:"0 0 6px", fontWeight:800, fontSize:16, color:bhResult==="correct"?"#27ae60":"#e74c3c" }}>
                {bhResult==="correct"?"✅ Correct! You found the bug!":"❌ Not quite — the bug is highlighted in green"}
              </p>
              <p style={{ margin:0, color:T.text, fontSize:13, lineHeight:1.7 }}>{bhLevel.explanation}</p>
            </div>
          )}

          {bhResult && (
            <div style={{ display:"flex", gap:9 }}>
              <button onClick={() => { setBhSelected(null); setBhResult(null); }}
                style={{ flex:1, background:T.cardBg2, border:`1px solid ${T.border2}`, borderRadius:10, padding:"11px", color:T.text, fontWeight:600, fontSize:13, cursor:"pointer" }}>
                🔁 Retry
              </button>
              <button onClick={() => { setBhLevel(null); setBhSelected(null); setBhResult(null); }}
                style={{ flex:1, background:"linear-gradient(135deg,#e74c3c,#f39c12)", border:"none", borderRadius:10, padding:"11px", color:"#fff", fontWeight:700, fontSize:13, cursor:"pointer" }}>
                All Levels →
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  // ── MATCH THE OUTPUT ──────────────────────────────────────────────────────
  if (gameScreen === "matchoutput") {
    const langColors2 = { Pascal:"#e8a020", "C++":"#2e86de", Python:"#27ae60", SQL:"#e74c3c", HTML:"#e44d26" };
    const diffColors  = { Easy:"#27ae60", Medium:"#e8a020", Hard:"#e74c3c" };

    if (!moLevel) {
      const byLang = {};
      MATCH_OUTPUT_LEVELS.forEach(l => { if (!byLang[l.lang]) byLang[l.lang]=[]; byLang[l.lang].push(l); });
      return (
        <div style={{ minHeight:"100vh", background:T.screenBg, fontFamily:"'Segoe UI',sans-serif", color:T.text, paddingBottom:48 }}>
          {OfflineBanner}
          <div style={{ background:"linear-gradient(135deg,#2e86de,#27ae60)", padding:"20px 18px 22px" }}>
            <button onClick={() => setGameScreen("hub")} style={{ background:"none", border:"none", color:"rgba(255,255,255,0.8)", cursor:"pointer", fontSize:14, padding:0, marginBottom:12 }}>← Games Zone</button>
            <div style={{ display:"flex", alignItems:"center", gap:10 }}>
              <span style={{ fontSize:32 }}>🖥️</span>
              <div>
                <h2 style={{ margin:0, fontWeight:900, fontSize:22, color:"#fff" }}>Match the Output</h2>
                <p style={{ margin:0, color:"rgba(255,255,255,0.75)", fontSize:13 }}>Read the code — pick the right output!</p>
              </div>
            </div>
          </div>
          <div style={{ maxWidth:500, margin:"0 auto", padding:"18px 16px" }}>
            {Object.entries(byLang).map(([lang, levels]) => (
              <div key={lang} style={{ marginBottom:20 }}>
                <div style={{ fontSize:13, fontWeight:700, color:langColors2[lang]||"#888", textTransform:"uppercase", letterSpacing:1, marginBottom:10 }}>{lang}</div>
                <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
                  {levels.map((lv, idx) => {
                    const done    = gameScores.matchOutput[lv.id] !== undefined;
                    const correct = gameScores.matchOutput[lv.id] === true;
                    return (
                      <button key={lv.id} onClick={() => { setMoLevel(lv); setMoSelected(null); setMoResult(null); }}
                        style={{ background:done?(correct?darkMode?"#0f2e1a":"#f0fdf4":darkMode?"#2e0e0e":"#fef2f2"):T.cardBg2, border:`1.5px solid ${done?(correct?"#27ae60":"#e74c3c"):(langColors2[lang]||"#444")+"33"}`, borderRadius:12, padding:"12px 14px", cursor:"pointer", display:"flex", alignItems:"center", gap:12, textAlign:"left", color:T.text }}>
                        <div style={{ width:32, height:32, borderRadius:8, background:(langColors2[lang]||"#888")+"22", display:"flex", alignItems:"center", justifyContent:"center", fontWeight:800, fontSize:13, color:langColors2[lang]||"#888", flexShrink:0 }}>{idx+1}</div>
                        <div style={{ flex:1 }}>
                          <div style={{ fontWeight:700, fontSize:14 }}>{lang} Puzzle {idx+1}</div>
                          <div style={{ fontSize:11, color:diffColors[lv.difficulty]||"#888", fontWeight:600, marginTop:2 }}>{lv.difficulty}</div>
                        </div>
                        <div style={{ fontSize:16 }}>{done?(correct?"✅":"❌"):"›"}</div>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    // Playing a level
    return (
      <div style={{ minHeight:"100vh", background:T.screenBg, fontFamily:"'Segoe UI',sans-serif", color:T.text, paddingBottom:48 }}>
        {OfflineBanner}
        <div style={{ background:"linear-gradient(135deg,#2e86de,#27ae60)", padding:"16px 18px 18px" }}>
          <button onClick={() => { setMoLevel(null); setMoSelected(null); setMoResult(null); }} style={{ background:"none", border:"none", color:"rgba(255,255,255,0.8)", cursor:"pointer", fontSize:14, padding:0, marginBottom:10 }}>← All Puzzles</button>
          <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between" }}>
            <div>
              <div style={{ fontWeight:900, fontSize:18, color:"#fff" }}>🖥️ {moLevel.lang} · {moLevel.difficulty}</div>
              <div style={{ fontSize:12, color:"rgba(255,255,255,0.7)", marginTop:2 }}>What does this code print?</div>
            </div>
            {moResult && <div style={{ fontSize:28 }}>{moResult==="correct"?"🏆":"💪"}</div>}
          </div>
        </div>
        <div style={{ maxWidth:500, margin:"0 auto", padding:"18px 16px" }}>

          {/* Code block */}
          <div style={{ background:"#0a0f16", borderRadius:14, overflow:"hidden", border:"1px solid #334155", marginBottom:14 }}>
            <div style={{ background:"#1e293b", padding:"8px 14px", display:"flex", gap:5 }}>
              {["#e74c3c","#f39c12","#27ae60"].map(c => <div key={c} style={{ width:10, height:10, borderRadius:"50%", background:c }} />)}
              <span style={{ color:"#64748b", fontSize:11, marginLeft:6 }}>Read this code carefully 👀</span>
            </div>
            <pre style={{ margin:0, padding:"14px 16px", color:"#e0f2fe", fontFamily:"'Courier New',monospace", fontSize:12.5, lineHeight:1.75, overflowX:"auto" }}>{moLevel.code}</pre>
          </div>

          <div style={{ color:T.textFaint, fontSize:12, fontWeight:600, marginBottom:10 }}>
            {moResult ? "The correct output was:" : "👇 Which output does this code produce?"}
          </div>

          {/* Options */}
          <div style={{ display:"flex", flexDirection:"column", gap:9, marginBottom:14 }}>
            {moLevel.options.map((opt, i) => {
              const isCorrect = i === moLevel.answer;
              const isSel     = moSelected === i;
              let bg = T.cardBg2, border = `1px solid ${T.border}`, tc = T.text;
              if (moResult) {
                if (isCorrect) { bg=darkMode?"#0f2e1a":"#f0fdf4"; border="2px solid #27ae60"; tc=darkMode?"#6ee7a0":"#166534"; }
                else if (isSel) { bg=darkMode?"#2e0e0e":"#fef2f2"; border="2px solid #e74c3c"; tc=darkMode?"#fca5a5":"#dc2626"; }
              } else if (isSel) {
                bg="#2e86de22"; border="2px solid #2e86de";
              }
              return (
                <button key={i} onClick={() => !moResult && setMoSelected(i)}
                  style={{ background:bg, border, borderRadius:12, padding:"12px 14px", textAlign:"left", color:tc, cursor:moResult?"default":"pointer", display:"flex", alignItems:"center", gap:10, transition:"all 0.15s" }}>
                  <span style={{ width:26, height:26, borderRadius:"50%", background:isSel&&!moResult?"#2e86de":T.cardBg2, color:isSel&&!moResult?"#fff":T.textMuted, border:`1px solid ${T.border2}`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:12, fontWeight:700, flexShrink:0 }}>{String.fromCharCode(65+i)}</span>
                  <pre style={{ margin:0, fontFamily:"'Courier New',monospace", fontSize:13, lineHeight:1.5, whiteSpace:"pre-wrap" }}>{opt}</pre>
                </button>
              );
            })}
          </div>

          {!moResult && (
            <button onClick={() => {
              if (moSelected === null) return;
              const correct = moSelected === moLevel.answer;
              setMoResult(correct ? "correct" : "wrong");
              setGameScores(prev => ({ ...prev, matchOutput: { ...prev.matchOutput, [moLevel.id]: correct } }));
            }} disabled={moSelected === null}
              style={{ width:"100%", background:moSelected!==null?"#2e86de":"#334155", border:"none", borderRadius:12, padding:"13px", color:moSelected!==null?"#fff":"#64748b", fontWeight:700, fontSize:15, cursor:moSelected!==null?"pointer":"default", marginBottom:10 }}>
              That's the Output!
            </button>
          )}

          {moResult && (
            <div style={{ background:moResult==="correct"?darkMode?"#0f2e1a":"#f0fdf4":darkMode?"#2e0e0e":"#fef2f2", border:`2px solid ${moResult==="correct"?"#27ae60":"#e74c3c"}`, borderRadius:14, padding:16, marginBottom:12 }}>
              <p style={{ margin:"0 0 6px", fontWeight:800, fontSize:16, color:moResult==="correct"?"#27ae60":"#e74c3c" }}>
                {moResult==="correct"?"✅ Correct! Great code reading!":"❌ Not quite — the correct answer is highlighted"}
              </p>
              <p style={{ margin:0, color:T.text, fontSize:13, lineHeight:1.7 }}>{moLevel.explanation}</p>
            </div>
          )}

          {moResult && (
            <div style={{ display:"flex", gap:9 }}>
              <button onClick={() => { setMoSelected(null); setMoResult(null); }}
                style={{ flex:1, background:T.cardBg2, border:`1px solid ${T.border2}`, borderRadius:10, padding:"11px", color:T.text, fontWeight:600, fontSize:13, cursor:"pointer" }}>
                🔁 Retry
              </button>
              <button onClick={() => { setMoLevel(null); setMoSelected(null); setMoResult(null); }}
                style={{ flex:1, background:"linear-gradient(135deg,#2e86de,#27ae60)", border:"none", borderRadius:10, padding:"11px", color:"#fff", fontWeight:700, fontSize:13, cursor:"pointer" }}>
                All Puzzles →
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  // ── SPEED QUIZ ────────────────────────────────────────────────────────────
  if (gameScreen === "speedquiz") {
    const TOTAL = sqQuestions.length;
    const timerPct = (sqTimeLeft / 15) * 100;
    const timerColor = sqTimeLeft > 8 ? "#27ae60" : sqTimeLeft > 4 ? "#e8a020" : "#e74c3c";

    // ── Score card ────────────────────────────────────────────────────────
    if (sqDone) {
      const finalScore = sqResults.filter(r => r.correct).length;
      const newHigh    = finalScore > sqHighScore;
      const pct = Math.round((finalScore / TOTAL) * 100);
      return (
        <div style={{ minHeight:"100vh", background:T.screenBg, fontFamily:"'Segoe UI',sans-serif", color:T.text, paddingBottom:48 }}>
          {OfflineBanner}
          <div style={{ background:"linear-gradient(135deg,#7c3aed,#e8a020)", padding:"20px 18px 22px" }}>
            <div style={{ fontWeight:900, fontSize:22, color:"#fff" }}>⚡ Speed Quiz — Results</div>
            <div style={{ color:"rgba(255,255,255,0.75)", fontSize:13, marginTop:4 }}>10 questions · 15 seconds each</div>
          </div>
          <div style={{ maxWidth:500, margin:"0 auto", padding:"20px 16px" }}>
            {/* Score banner */}
            <div style={{ background:finalScore>=7?(darkMode?"#0f2e1a":"#f0fdf4"):finalScore>=5?(darkMode?"#1a2010":"#f7fee7"):(darkMode?"#2e0e0e":"#fef2f2"), border:`2px solid ${finalScore>=7?"#27ae60":finalScore>=5?"#86efac":"#e74c3c"}`, borderRadius:20, padding:"28px 20px", textAlign:"center", marginBottom:16 }}>
              <div style={{ fontSize:56, marginBottom:8 }}>{finalScore>=7?"🏆":finalScore>=5?"🎉":"📚"}</div>
              <div style={{ fontSize:48, fontWeight:900, color:finalScore>=7?"#27ae60":finalScore>=5?"#4ade80":"#e74c3c" }}>{finalScore}<span style={{ fontSize:24, color:T.textMuted }}>/{TOTAL}</span></div>
              <div style={{ fontSize:16, fontWeight:700, color:finalScore>=7?"#27ae60":finalScore>=5?(darkMode?"#86efac":"#16a34a"):(darkMode?"#fca5a5":"#dc2626"), marginTop:4 }}>
                {finalScore>=9?"Outstanding! ECZ material! 🌟":finalScore>=7?"Great work — exam ready!":finalScore>=5?"Good effort — keep revising!":"Review your lessons and try again!"}
              </div>
              {newHigh && <div style={{ marginTop:10, fontSize:13, color:"#e8a020", fontWeight:700 }}>🎯 New personal best!</div>}
              <div style={{ marginTop:14, display:"flex", gap:12, justifyContent:"center" }}>
                <div style={{ background:darkMode?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.06)", borderRadius:10, padding:"8px 16px" }}>
                  <div style={{ fontSize:18, fontWeight:800, color:T.text }}>{pct}%</div>
                  <div style={{ fontSize:11, color:T.textFaint }}>Score</div>
                </div>
                <div style={{ background:darkMode?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.06)", borderRadius:10, padding:"8px 16px" }}>
                  <div style={{ fontSize:18, fontWeight:800, color:T.text }}>{sqHighScore}</div>
                  <div style={{ fontSize:11, color:T.textFaint }}>Best ever</div>
                </div>
                <div style={{ background:darkMode?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.06)", borderRadius:10, padding:"8px 16px" }}>
                  <div style={{ fontSize:18, fontWeight:800, color:T.text }}>{sqResults.filter(r=>r.timedOut).length}</div>
                  <div style={{ fontSize:11, color:T.textFaint }}>Timed out</div>
                </div>
              </div>
            </div>

            {/* Per-question breakdown */}
            <div style={{ color:T.textFaint, fontSize:12, fontWeight:700, textTransform:"uppercase", letterSpacing:1, marginBottom:10 }}>Question Breakdown</div>
            <div style={{ display:"flex", flexDirection:"column", gap:8, marginBottom:20 }}>
              {sqResults.map((r, i) => (
                <div key={i} style={{ background:r.correct?(darkMode?"#0f2e1a":"#f0fdf4"):r.timedOut?(darkMode?"#1a1a2e":"#f0f0ff"):(darkMode?"#2e0e0e":"#fef2f2"), border:`1px solid ${r.correct?"#27ae6044":r.timedOut?"#6366f144":"#e74c3c44"}`, borderRadius:12, padding:"11px 14px", display:"flex", alignItems:"center", gap:10 }}>
                  <div style={{ width:28, height:28, borderRadius:"50%", background:r.correct?"#27ae60":r.timedOut?"#6366f1":"#e74c3c", color:"#fff", display:"flex", alignItems:"center", justifyContent:"center", fontWeight:800, fontSize:13, flexShrink:0 }}>{i+1}</div>
                  <div style={{ flex:1, minWidth:0 }}>
                    <div style={{ fontSize:12, fontWeight:600, color:T.text, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{r.question.topicTitle} · {r.question.language}</div>
                    <div style={{ fontSize:11, color:T.textFaint, marginTop:2 }}>{r.correct?"✅ Correct":r.timedOut?"⏰ Timed out":"❌ Wrong"}</div>
                  </div>
                  <div style={{ fontSize:16 }}>{r.correct?"✅":r.timedOut?"⏰":"❌"}</div>
                </div>
              ))}
            </div>

            <div style={{ display:"flex", gap:9 }}>
              <button onClick={startSpeedQuiz}
                style={{ flex:1, background:"linear-gradient(135deg,#7c3aed,#e8a020)", border:"none", borderRadius:12, padding:"13px", color:"#fff", fontWeight:700, fontSize:14, cursor:"pointer" }}>
                ⚡ Play Again
              </button>
              <button onClick={() => setGameScreen("hub")}
                style={{ flex:1, background:T.cardBg2, border:`1px solid ${T.border2}`, borderRadius:12, padding:"13px", color:T.text, fontWeight:600, fontSize:14, cursor:"pointer" }}>
                ← Games Zone
              </button>
            </div>
          </div>
        </div>
      );
    }

    // ── Active question ───────────────────────────────────────────────────
    if (sqQuestions.length === 0) return null;
    const q = sqQuestions[sqIndex];

    return (
      <div style={{ minHeight:"100vh", background:T.screenBg, fontFamily:"'Segoe UI',sans-serif", color:T.text, paddingBottom:48 }}>
        {OfflineBanner}
        {/* Header */}
        <div style={{ background:"linear-gradient(135deg,#7c3aed,#e8a020)", padding:"14px 18px 16px" }}>
          <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:10 }}>
            <div style={{ display:"flex", alignItems:"center", gap:10 }}>
              <button onClick={() => {
                setSqQuestions([]); setSqIndex(0); setSqSelected(null);
                setSqSubmitted(false); setSqScore(0); setSqDone(false);
                setSqTimeLeft(15); setSqResults([]);
                setGameScreen("hub");
              }}
                style={{ background:"rgba(0,0,0,0.25)", border:"none", borderRadius:20, padding:"4px 12px", color:"rgba(255,255,255,0.85)", cursor:"pointer", fontSize:13, fontWeight:600 }}>
                ✕ Quit
              </button>
              <div style={{ fontWeight:900, fontSize:16, color:"#fff" }}>⚡ Speed Quiz</div>
            </div>
            <div style={{ display:"flex", alignItems:"center", gap:8 }}>
              <div style={{ background:"rgba(0,0,0,0.25)", borderRadius:20, padding:"4px 12px", color:"#fff", fontSize:13, fontWeight:700 }}>
                {sqIndex+1}/{TOTAL}
              </div>
              {/* Timer pill */}
              <div style={{ background:sqTimeLeft<=4?"#e74c3c":sqTimeLeft<=8?"#e8a020":"rgba(0,0,0,0.25)", borderRadius:20, padding:"4px 12px", color:"#fff", fontSize:14, fontWeight:900, minWidth:44, textAlign:"center", transition:"background 0.3s" }}>
                {sqTimeLeft}s
              </div>
            </div>
          </div>
          {/* Timer bar */}
          <div style={{ background:"rgba(0,0,0,0.25)", borderRadius:999, height:6, overflow:"hidden" }}>
            <div style={{ background:timerColor, height:"100%", width:`${timerPct}%`, borderRadius:999, transition:"width 1s linear, background 0.3s" }} />
          </div>
        </div>

        <div style={{ maxWidth:500, margin:"0 auto", padding:"16px 16px" }}>
          {/* Topic label */}
          <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:12 }}>
            <div style={{ background:(q.langColor||"#888")+"22", border:`1px solid ${q.langColor||"#888"}44`, borderRadius:8, padding:"4px 10px", fontSize:11, color:q.langColor||"#888", fontWeight:700 }}>{q.language}</div>
            <div style={{ fontSize:11, color:T.textFaint }}>{q.topicTitle}</div>
          </div>

          {/* Question */}
          <div style={{ background:T.cardBg2, border:`1px solid ${T.border}`, borderRadius:16, padding:"16px 18px", marginBottom:14 }}>
            <p style={{ margin:0, color:T.text, fontSize:fs(15), lineHeight:1.75, fontWeight:500 }}>{q.text}</p>
          </div>

          {/* Options */}
          <div style={{ display:"flex", flexDirection:"column", gap:9, marginBottom:14 }}>
            {q.options.map((opt, i) => {
              let bg=T.cardBg2, border=`1px solid ${T.border}`, tc=T.text;
              if (sqSubmitted) {
                if (i===q.answer)  { bg=darkMode?"#0f2e1a":"#f0fdf4"; border="2px solid #27ae60"; tc=darkMode?"#6ee7a0":"#166534"; }
                else if (i===sqSelected) { bg=darkMode?"#2e0e0e":"#fef2f2"; border="2px solid #e74c3c"; tc=darkMode?"#fca5a5":"#dc2626"; }
              } else if (sqSelected===i) {
                bg="#7c3aed22"; border="2px solid #7c3aed"; tc=darkMode?"#c4b5fd":"#5b21b6";
              }
              return (
                <button key={i} onClick={() => { if (!sqSubmitted) { setSqSelected(i); } }}
                  style={{ background:bg, border, borderRadius:12, padding:"13px 14px", textAlign:"left", color:tc, cursor:sqSubmitted?"default":"pointer", display:"flex", alignItems:"center", gap:10, transition:"all 0.12s" }}>
                  <span style={{ width:26, height:26, borderRadius:"50%", background:sqSelected===i&&!sqSubmitted?"#7c3aed":T.cardBg2, color:sqSelected===i&&!sqSubmitted?"#fff":T.textMuted, border:`1px solid ${T.border2}`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:12, fontWeight:700, flexShrink:0 }}>{String.fromCharCode(65+i)}</span>
                  <span style={{ fontSize:fs(14) }}>{opt}</span>
                </button>
              );
            })}
          </div>

          {/* Submit / result */}
          {!sqSubmitted ? (
            <button onClick={() => { if (sqSelected !== null) sqSubmitAnswer(); }}
              disabled={sqSelected === null}
              style={{ width:"100%", background:sqSelected!==null?"linear-gradient(135deg,#7c3aed,#e8a020)":"#334155", border:"none", borderRadius:12, padding:"14px", color:sqSelected!==null?"#fff":"#64748b", fontWeight:700, fontSize:15, cursor:sqSelected!==null?"pointer":"default", transition:"all 0.2s" }}>
              Submit Answer →
            </button>
          ) : (
            <div>
              <div style={{ background:sqSelected===q.answer?(darkMode?"#0f2e1a":"#f0fdf4"):(darkMode?"#2e0e0e":"#fef2f2"), border:`2px solid ${sqSelected===q.answer?"#27ae60":"#e74c3c"}`, borderRadius:12, padding:"12px 14px", marginBottom:10 }}>
                <p style={{ margin:"0 0 4px", fontWeight:800, fontSize:14, color:sqSelected===q.answer?"#27ae60":"#e74c3c" }}>
                  {sqSelected===q.answer?"✅ Correct!":"❌ Not quite — "+q.options[q.answer]+" was right"}
                </p>
                <p style={{ margin:0, color:T.textMuted, fontSize:12, lineHeight:1.6 }}>{q.hint}</p>
              </div>
              <button onClick={sqNext}
                style={{ width:"100%", background:"linear-gradient(135deg,#7c3aed,#e8a020)", border:"none", borderRadius:12, padding:"14px", color:"#fff", fontWeight:700, fontSize:15, cursor:"pointer" }}>
                {sqIndex >= TOTAL-1 ? "See Results 🏆" : `Next Question → (${sqIndex+2}/${TOTAL})`}
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }


  if (screen === "home" && !gameScreen) return (
    <div style={{ minHeight:"100vh", background:T.pageBg, fontFamily:"'Segoe UI',sans-serif", color:T.text, display:"flex", flexDirection:"column", alignItems:"center", padding:"0 0 56px" }}>
      {OfflineBanner && <div style={{ width:"100%", marginBottom:0 }}>{OfflineBanner}</div>}

      {/* ── Top bar ── */}
      <div style={{ width:"100%", maxWidth:500, display:"flex", alignItems:"center", justifyContent:"space-between", padding:"16px 18px 0" }}>
        <div style={{ display:"flex", alignItems:"center", gap:10 }}>
          <div style={{ width:34, height:34, borderRadius:9, background:"linear-gradient(135deg,#e8a020,#27ae60)", display:"flex", alignItems:"center", justifyContent:"center", boxShadow:"0 2px 10px rgba(232,160,32,0.35)" }}>
            <span style={{ fontFamily:"'Courier New',monospace", fontWeight:900, fontSize:13, color:"#000", letterSpacing:"-1px" }}>&lt;/&gt;</span>
          </div>
          <span style={{ fontWeight:800, fontSize:17, background:"linear-gradient(90deg,#e8a020,#27ae60)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>ZamCode Academy</span>
        </div>
        <button onClick={() => setDarkMode(d => !d)}
          style={{ background:T.toggleBg, border:`1px solid ${T.border2}`, borderRadius:20, padding:"6px 12px", color:T.textMuted, cursor:"pointer", fontSize:12, fontWeight:600, display:"flex", alignItems:"center", gap:5 }}>
          <span>{T.toggleIcon}</span><span>{T.toggleLabel}</span>
        </button>
        {/* Font size toggle */}
        <div style={{ display:"flex", alignItems:"center", gap:3, background:T.toggleBg, border:`1px solid ${T.border2}`, borderRadius:20, padding:"4px 6px" }}>
          {[{scale:0.85,label:"A",size:11},{scale:1,label:"A",size:13},{scale:1.2,label:"A",size:16}].map(({scale,label,size}) => (
            <button key={scale} onClick={() => setFontScale(scale)}
              style={{ background:fontScale===scale?(darkMode?"rgba(255,255,255,0.15)":"rgba(0,0,0,0.1)"):"transparent", border:"none", borderRadius:14, padding:"2px 7px", color:fontScale===scale?T.text:T.textFaint, cursor:"pointer", fontSize:size, fontWeight:fontScale===scale?800:500, lineHeight:1, transition:"all 0.15s" }}>
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* ── Hero banner ── */}
      <div style={{ width:"100%", maxWidth:500, padding:"14px 18px 0" }}>
        <div style={{ borderRadius:20, background:darkMode?"linear-gradient(135deg,#1a2e1a,#0d2137)":"linear-gradient(135deg,#1e3a5f,#134e2e)", padding:"22px 22px 20px", position:"relative", overflow:"hidden" }}>
          {/* decorative circles */}
          <div style={{ position:"absolute", top:-30, right:-30, width:110, height:110, borderRadius:"50%", background:"rgba(232,160,32,0.12)" }} />
          <div style={{ position:"absolute", bottom:-20, right:50, width:70, height:70, borderRadius:"50%", background:"rgba(39,174,96,0.15)" }} />
          <div style={{ position:"relative" }}>
            <h1 style={{ fontSize:"clamp(22px,6vw,34px)", fontWeight:900, margin:"0 0 4px", color:"#fff", letterSpacing:"-0.5px", lineHeight:1.15 }}>Learn to Code</h1>
            <p style={{ color:"rgba(255,255,255,0.6)", fontSize:13, margin:"0 0 16px", lineHeight:1.5 }}>Pascal · Python · C++ · SQL · HTML</p>
            {/* Mini stats row */}
            <div style={{ display:"flex", gap:20 }}>
              {[
                { icon:"📚", val:ALL_TOPICS.length,                            label:"lessons" },
                { icon:"✅", val:Object.keys(completed).length,                label:"done" },
                { icon:"🏆", val:Object.values(scores).filter(Boolean).length, label:"correct" },
              ].map(s => (
                <div key={s.label}>
                  <div style={{ fontSize:19, fontWeight:900, color:"#fff", lineHeight:1 }}>{s.val}</div>
                  <div style={{ fontSize:11, color:"rgba(255,255,255,0.5)", marginTop:3 }}>{s.icon} {s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Resume button ── */}
      {lastTopicId && (() => {
        const resumeTopic = ALL_TOPICS.find(t => t.id === lastTopicId);
        if (!resumeTopic) return null;
        const isDone = completed[lastTopicId];
        const c = CURRICULUM[resumeTopic.language];
        return (
          <div style={{ width:"100%", maxWidth:500, padding:"12px 18px 0" }}>
            <button onClick={() => startLesson(resumeTopic)}
              style={{ width:"100%", background:T.cardBg2, border:`1.5px solid ${c.color}55`, borderRadius:14, padding:"12px 16px", cursor:"pointer", display:"flex", alignItems:"center", gap:12, color:T.text, boxShadow:darkMode?"none":"0 2px 8px rgba(0,0,0,0.06)", transition:"transform 0.15s, box-shadow 0.15s" }}
              onMouseOver={e => { e.currentTarget.style.transform="translateY(-1px)"; e.currentTarget.style.boxShadow=`0 4px 14px ${c.color}33`; }}
              onMouseOut={e => { e.currentTarget.style.transform="translateY(0)"; e.currentTarget.style.boxShadow=darkMode?"none":"0 2px 8px rgba(0,0,0,0.06)"; }}>
              <div style={{ width:38, height:38, borderRadius:10, background:c.color+"22", display:"flex", alignItems:"center", justifyContent:"center", fontSize:18, flexShrink:0 }}>
                {isDone ? "✅" : "▶️"}
              </div>
              <div style={{ flex:1, textAlign:"left", minWidth:0 }}>
                <div style={{ fontSize:11, fontWeight:700, color:c.color, textTransform:"uppercase", letterSpacing:1, marginBottom:2 }}>
                  {isDone ? "Revisit last lesson" : "Continue where you left off"}
                </div>
                <div style={{ fontSize:14, fontWeight:700, color:T.text, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>
                  {resumeTopic.language} · {resumeTopic.title}
                </div>
              </div>
              <span style={{ color:c.color, fontSize:18 }}>›</span>
            </button>
          </div>
        );
      })()}

      {/* ── Search bar ── */}
      <div style={{ width:"100%", maxWidth:500, padding:"12px 18px 0" }}>
        <button onClick={() => { setSearchQuery(""); setScreen("search"); }}
          style={{ width:"100%", background:T.cardBg2, border:`1.5px solid ${T.border2}`, borderRadius:14, padding:"12px 16px", color:T.textMuted, cursor:"pointer", fontSize:14, display:"flex", alignItems:"center", gap:10, boxShadow:darkMode?"none":"0 2px 8px rgba(0,0,0,0.06)" }}>
          <span style={{ fontSize:18 }}>🔍</span>
          <span style={{ flex:1, textAlign:"left" }}>Search {ALL_TOPICS.length} lessons…</span>
          <span style={{ fontSize:11, background:darkMode?"rgba(255,255,255,0.07)":"rgba(30,58,138,0.08)", border:`1px solid ${T.border}`, borderRadius:6, padding:"2px 7px", color:T.textFaint }}>Search</span>
        </button>
      </div>

      {/* ── Language cards ── */}
      <div style={{ width:"100%", maxWidth:500, padding:"16px 18px 0" }}>
        <div style={{ fontSize:12, fontWeight:700, textTransform:"uppercase", letterSpacing:2, color:T.textFaint, marginBottom:12 }}>Pick a Language</div>
        <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
          {LANGUAGES.map(l => {
            const d = CURRICULUM[l];
            const done = d.topics.filter(t => completed[t.id]).length;
            const pct  = Math.round((done / d.topics.length) * 100);
            const langGradients = {
              Pascal:  "linear-gradient(135deg,#b8860b,#e8a020)",
              "C++":   "linear-gradient(135deg,#1565c0,#2e86de)",
              Python:  "linear-gradient(135deg,#1a6b3a,#27ae60)",
              SQL:     "linear-gradient(135deg,#8b1a1a,#e74c3c)",
              HTML:    "linear-gradient(135deg,#8b3a00,#e44d26)",
            };
            const taglines = {
              Pascal:  "Algorithms & logic — the foundation",
              "C++":   "Speed & power for serious coders",
              Python:  "The world's most popular language",
              SQL:     "Talk to databases like a pro",
              HTML:    "Build real websites from scratch",
            };
            return (
              <button key={l} onClick={() => { setSelectedLang(l); setScreen("topics"); }}
                style={{ background:T.cardBg2, border:`1.5px solid ${d.color}33`, borderRadius:18, padding:0, cursor:"pointer", textAlign:"left", color:T.text, transition:"transform 0.15s, box-shadow 0.15s", overflow:"hidden", boxShadow:darkMode?"0 2px 12px rgba(0,0,0,0.3)":"0 2px 12px rgba(0,0,0,0.08)" }}
                onMouseOver={e => { e.currentTarget.style.transform="translateY(-2px)"; e.currentTarget.style.boxShadow=darkMode?"0 8px 24px rgba(0,0,0,0.4)":"0 8px 24px rgba(0,0,0,0.14)"; }}
                onMouseOut={e => { e.currentTarget.style.transform="translateY(0)"; e.currentTarget.style.boxShadow=darkMode?"0 2px 12px rgba(0,0,0,0.3)":"0 2px 12px rgba(0,0,0,0.08)"; }}
              >
                {/* coloured accent bar top */}
                <div style={{ height:4, background:langGradients[l] || d.color }} />
                <div style={{ padding:"16px 18px", display:"flex", alignItems:"center", gap:14 }}>
                  {/* icon */}
                  <div style={{ width:52, height:52, borderRadius:14, background:langGradients[l] || d.color, display:"flex", alignItems:"center", justifyContent:"center", fontSize:26, flexShrink:0, boxShadow:`0 4px 12px ${d.color}44` }}>
                    {d.icon}
                  </div>
                  <div style={{ flex:1, minWidth:0 }}>
                    <div style={{ display:"flex", alignItems:"baseline", gap:8 }}>
                      <span style={{ fontWeight:800, fontSize:18, color:T.text }}>{l}</span>
                      {done > 0 && <span style={{ fontSize:11, color:d.color, fontWeight:700 }}>{pct}%</span>}
                    </div>
                    <div style={{ color:T.textMuted, fontSize:12, marginTop:2, marginBottom:8 }}>{taglines[l]}</div>
                    {/* progress bar */}
                    <div style={{ background:darkMode?"rgba(255,255,255,0.07)":"rgba(0,0,0,0.08)", borderRadius:999, height:6, overflow:"hidden" }}>
                      <div style={{ background:langGradients[l] || d.color, height:"100%", width:`${pct}%`, borderRadius:999, transition:"width 0.5s" }} />
                    </div>
                    <div style={{ fontSize:11, color:T.textFaint, marginTop:4 }}>{done}/{d.topics.length} lessons completed</div>
                  </div>
                  <div style={{ color:d.color, fontSize:22, fontWeight:300, flexShrink:0 }}>›</div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Games button ── */}
      <div style={{ width:"100%", maxWidth:500, padding:"16px 18px 0" }}>
        <button onClick={() => setGameScreen("hub")}
          style={{ width:"100%", borderRadius:18, padding:0, cursor:"pointer", border:"none", overflow:"hidden", boxShadow:darkMode?"0 4px 20px rgba(0,0,0,0.4)":"0 4px 20px rgba(0,0,0,0.12)", transition:"transform 0.15s, box-shadow 0.15s" }}
          onMouseOver={e => { e.currentTarget.style.transform="translateY(-2px)"; e.currentTarget.style.boxShadow=darkMode?"0 8px 28px rgba(0,0,0,0.5)":"0 8px 28px rgba(0,0,0,0.18)"; }}
          onMouseOut={e => { e.currentTarget.style.transform="translateY(0)"; e.currentTarget.style.boxShadow=darkMode?"0 4px 20px rgba(0,0,0,0.4)":"0 4px 20px rgba(0,0,0,0.12)"; }}>
          <div style={{ background:"linear-gradient(135deg,#4f46e5,#7c3aed)", padding:"18px 20px", display:"flex", alignItems:"center", gap:14 }}>
            <div style={{ width:52, height:52, borderRadius:14, background:"rgba(255,255,255,0.15)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:26, flexShrink:0 }}>🎮</div>
            <div style={{ flex:1, textAlign:"left" }}>
              <div style={{ fontWeight:800, fontSize:17, color:"#fff" }}>Games Zone</div>
              <div style={{ fontSize:12, color:"rgba(255,255,255,0.7)", marginTop:2 }}>Bug Hunt · Match the Output · Speed Quiz</div>
            </div>
            <div style={{ color:"rgba(255,255,255,0.6)", fontSize:22 }}>›</div>
          </div>
        </button>
      </div>

      {/* ── Footer ── */}
      <p style={{ color:T.textFaint, fontSize:11, marginTop:28, textAlign:"center", padding:"0 16px" }}>Built by Ndala for Zambian secondary school students and teachers</p>
    </div>
  );

  // ── SEARCH ────────────────────────────────────────────────────────────────
  if (screen === "search") {
    const q = searchQuery.toLowerCase().trim();
    const results = q.length < 1 ? [] : ALL_TOPICS.filter(t =>
      t.title.toLowerCase().includes(q) ||
      t.language.toLowerCase().includes(q) ||
      (t.lesson && t.lesson.toLowerCase().includes(q))
    );
    const langColors = { Pascal:"#e8a020", "C++":"#2e86de", Python:"#27ae60", SQL:"#e74c3c" };
    const langIcons  = { Pascal:"🟡", "C++":"🔵", Python:"🟢", SQL:"🗄️" };
    return (
      <div style={{ minHeight:"100vh", background:T.screenBg, fontFamily:"'Segoe UI',sans-serif", color:T.text, paddingBottom:48 }}>
        {OfflineBanner}
        {/* Header */}
        <div style={{ background:T.cardBg2, borderBottom:`2px solid ${T.border}`, padding:"14px 16px" }}>
          <button onClick={() => setScreen("home")} style={{ background:"none", border:"none", color:T.textMuted, cursor:"pointer", fontSize:14, padding:0, marginBottom:12 }}>← Back</button>
          <div style={{ display:"flex", alignItems:"center", gap:10, background:T.inputBg, border:`1px solid ${T.border2}`, borderRadius:12, padding:"10px 14px" }}>
            <span style={{ fontSize:18, flexShrink:0 }}>🔍</span>
            <input
              autoFocus
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search lessons, topics, keywords…"
              style={{ flex:1, background:"none", border:"none", outline:"none", color:T.text, fontSize:15, fontFamily:"'Segoe UI',sans-serif" }}
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery("")} style={{ background:"none", border:"none", color:T.textFaint, cursor:"pointer", fontSize:16, padding:0, flexShrink:0 }}>✕</button>
            )}
          </div>
        </div>

        <div style={{ maxWidth:600, margin:"0 auto", padding:"16px 14px" }}>
          {q.length < 1 && (
            <div>
              <p style={{ color:T.textFaint, fontSize:13, marginBottom:16 }}>Try searching for:</p>
              <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
                {["arrays","loops","functions","OOP","SELECT","recursion","files","sorting","strings","conditions"].map(term => (
                  <button key={term} onClick={() => setSearchQuery(term)}
                    style={{ background:T.cardBg, border:`1px solid ${T.border}`, borderRadius:20, padding:"6px 14px", color:T.textMuted, cursor:"pointer", fontSize:13 }}>
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}

          {q.length >= 1 && results.length === 0 && (
            <div style={{ textAlign:"center", padding:"48px 0" }}>
              <div style={{ fontSize:36, marginBottom:12 }}>🔍</div>
              <p style={{ color:T.textFaint, fontSize:14 }}>No lessons found for <strong style={{ color:T.textMuted }}>&ldquo;{searchQuery}&rdquo;</strong></p>
              <p style={{ color:T.textFaint, fontSize:12, marginTop:8 }}>Try a shorter keyword like &ldquo;loop&rdquo; or &ldquo;class&rdquo;</p>
            </div>
          )}

          {q.length >= 1 && results.length > 0 && (
            <div>
              <p style={{ color:T.textFaint, fontSize:12, marginBottom:12 }}>{results.length} lesson{results.length !== 1 ? "s" : ""} found</p>
              <div style={{ display:"flex", flexDirection:"column", gap:9 }}>
                {results.map(topic => {
                  const col  = langColors[topic.language];
                  const icon = langIcons[topic.language];
                  const isDone = completed[topic.id], gotRight = scores[topic.id];
                  const titleLower = topic.title.toLowerCase();
                  const matchIdx = titleLower.indexOf(q);
                  const titleDisplay = matchIdx >= 0
                    ? <>{topic.title.slice(0,matchIdx)}<mark style={{ background:col+"44", color:T.text, borderRadius:3, padding:"0 2px" }}>{topic.title.slice(matchIdx,matchIdx+q.length)}</mark>{topic.title.slice(matchIdx+q.length)}</>
                    : topic.title;
                  return (
                    <button key={topic.id} onClick={() => startLesson(topic)}
                      style={{ background:isDone?(gotRight?darkMode?"#0f2e1a":"#dcfce7":darkMode?"#2e0e0e":"#fee2e2"):T.cardBg, border:`1.5px solid ${isDone?(gotRight?"#27ae60":"#e74c3c"):col+"44"}`, borderRadius:13, padding:"13px 15px", cursor:"pointer", display:"flex", alignItems:"center", gap:12, textAlign:"left", color:T.text, width:"100%" }}>
                      <div style={{ width:36, height:36, borderRadius:9, background:col+"22", border:`2px solid ${col}44`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:18, flexShrink:0 }}>{icon}</div>
                      <div style={{ flex:1, minWidth:0 }}>
                        <div style={{ fontWeight:700, fontSize:14 }}>{titleDisplay}</div>
                        <div style={{ color:col, fontSize:11, marginTop:2, fontWeight:600 }}>{topic.language} · Form {topic.form}</div>
                      </div>
                      <div style={{ fontSize:16 }}>{isDone?(gotRight?"✅":"❌"):"›"}</div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // ── TOPICS ────────────────────────────────────────────────────────────────
  if (screen === "topics" && lang) return (
    <div style={{ minHeight:"100vh", background:T.screenBg, fontFamily:"'Segoe UI',sans-serif", color:T.text, paddingBottom:48 }}>
      {OfflineBanner}
      <div style={{ background:lang.color+"18", borderBottom:`3px solid ${lang.color}`, padding:"18px 18px 16px" }}>
        <button onClick={() => setScreen("home")} style={{ background:"none", border:"none", color:lang.color, cursor:"pointer", fontSize:14, padding:0, marginBottom:10 }}>← Back</button>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between" }}>
          <div style={{ display:"flex", alignItems:"center", gap:12 }}>
            <div style={{ fontSize:34 }}>{lang.icon}</div>
            <div>
              <h2 style={{ margin:0, fontSize:26, fontWeight:800, color:lang.color }}>{selectedLang}</h2>
              <p style={{ margin:0, color:T.textFaint, fontSize:13 }}>{topics.length} lessons available</p>
            </div>
          </div>
          <div style={{ display:"flex", gap:8, alignItems:"center" }}>
            {topics.some(t => completed[t.id]) && (
              !confirmReset
                ? <button onClick={() => setConfirmReset(true)}
                    style={{ background:"#e74c3c22", border:"1px solid #e74c3c88", borderRadius:8, padding:"6px 11px", color:"#e74c3c", cursor:"pointer", fontSize:12, fontWeight:600 }}>↺ Reset</button>
                : <span style={{ display:"flex", alignItems:"center", gap:6 }}>
                    <span style={{ fontSize:12, color:"#e74c3c", fontWeight:600 }}>Reset {selectedLang}?</span>
                    <button onClick={() => resetLanguage(selectedLang)}
                      style={{ background:"#e74c3c", border:"none", borderRadius:8, padding:"6px 11px", color:"#fff", fontSize:12, cursor:"pointer", fontWeight:700 }}>Yes</button>
                    <button onClick={() => setConfirmReset(false)}
                      style={{ background:"none", border:`1px solid ${T.border2}`, borderRadius:8, padding:"6px 11px", color:T.textFaint, fontSize:12, cursor:"pointer" }}>No</button>
                  </span>
            )}
            <button onClick={() => { setSearchQuery(""); setScreen("search"); }}
              style={{ background:T.toggleBg, border:`1px solid ${T.border2}`, borderRadius:10, padding:"8px 12px", color:T.textMuted, cursor:"pointer", fontSize:14 }}>
              🔍
            </button>
          </div>
        </div>
      </div>
      <div style={{ padding:"18px 14px", display:"flex", flexDirection:"column", gap:10, maxWidth:600, margin:"0 auto" }}>
        {topics.map((topic, idx) => {
          const isDone = completed[topic.id], gotRight = scores[topic.id];
          return (
            <button key={topic.id} onClick={() => startLesson(topic)}
              style={{ background:isDone?(gotRight?darkMode?"#0f2e1a":"#dcfce7":darkMode?"#2e0e0e":"#fee2e2"):T.cardBg, border:`1.5px solid ${isDone?(gotRight?"#27ae60":"#e74c3c"):lang.color+"33"}`, borderRadius:13, padding:"14px 16px", cursor:"pointer", display:"flex", alignItems:"center", gap:12, textAlign:"left", color:T.text, width:"100%", transition:"all 0.15s" }}>
              <div style={{ width:38, height:38, borderRadius:9, background:lang.color+"22", border:`2px solid ${lang.color}44`, display:"flex", alignItems:"center", justifyContent:"center", fontWeight:800, fontSize:15, color:lang.color, flexShrink:0 }}>{idx+1}</div>
              <div style={{ flex:1 }}>
                <div style={{ fontWeight:700, fontSize:fs(15) }}>{topic.title}</div>
                {topic.ecz && <div style={{ marginTop:4, display:"inline-flex", alignItems:"center", gap:4, background:"#e8a02022", border:"1px solid #e8a02055", borderRadius:6, padding:"2px 8px" }}><span style={{ fontSize:11 }}>💡</span><span style={{ fontSize:11, color:"#e8a020", fontWeight:700 }}>ECZ Exam</span></div>}
              </div>
              <div style={{ fontSize:17 }}>{isDone?(gotRight?"✅":"❌"):"›"}</div>
            </button>
          );
        })}
      </div>
    </div>
  );

  // ── LESSON ────────────────────────────────────────────────────────────────
  if (screen === "lesson" && selectedTopic) {
    const topic = selectedTopic;
    const c = CURRICULUM[topic.language];
    return (
      <div style={{ minHeight:"100vh", background:T.screenBg, fontFamily:"'Segoe UI',sans-serif", color:T.text, paddingBottom:48 }}>
        {OfflineBanner}
        <div style={{ background:c.color+"18", borderBottom:`3px solid ${c.color}`, padding:"13px 14px" }}>
          <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:8 }}>
            <button onClick={() => setScreen("topics")} style={{ background:"none", border:"none", color:c.color, cursor:"pointer", fontSize:14, padding:0 }}>← {topic.language} Lessons</button>
            {/* Font size toggle */}
            <div style={{ display:"flex", alignItems:"center", gap:3, background:"rgba(0,0,0,0.12)", borderRadius:20, padding:"3px 5px" }}>
              {[{scale:0.85,size:11},{scale:1,size:13},{scale:1.2,size:16}].map(({scale,size}) => (
                <button key={scale} onClick={() => setFontScale(scale)}
                  style={{ background:fontScale===scale?"rgba(255,255,255,0.25)":"transparent", border:"none", borderRadius:14, padding:"2px 7px", color:fontScale===scale?"#fff":"rgba(255,255,255,0.5)", cursor:"pointer", fontSize:size, fontWeight:fontScale===scale?800:500, lineHeight:1 }}>
                  A
                </button>
              ))}
            </div>
          </div>
          <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:12 }}>
            <span style={{ fontSize:20 }}>{c.icon}</span>
            <div>
              <h2 style={{ margin:0, fontSize:18, fontWeight:800, color:T.text }}>{topic.title}</h2>
            </div>
          </div>
          <div style={{ display:"flex", gap:7, flexWrap:"wrap" }}>
            {(topic.language === "HTML"
              ? [["lesson","📖 Lesson"],["code","💻 Code"],["preview","👁️ Preview"],["worked","✏️ Example"],["quiz","🎯 Quiz"]]
              : [["lesson","📖 Lesson"],["code","💻 Code"],["trace","🔍 Trace"],["worked","✏️ Example"],["quiz","🎯 Quiz"]]
            ).map(([t,label]) => (
              <button key={t} onClick={() => setTab(t)} style={{ background:tab===t?c.color:T.cardBg, color:tab===t?"#000":T.textMuted, border:"none", borderRadius:8, padding:"9px 13px", fontSize:13, fontWeight:600, cursor:"pointer", transition:"all 0.15s" }}>{label}</button>
            ))}
          </div>
        </div>

        <div style={{ maxWidth:600, margin:"0 auto", padding:"18px 14px" }}>
          {tab === "lesson" && (
            <div>
              <div style={{ background:T.cardBg, border:`1px solid ${T.border}`, borderRadius:14, padding:18 }}>
                <h3 style={{ color:c.color, margin:"0 0 12px", fontSize:15 }}>📖 Theory</h3>
                <p style={{ color:T.textCode, lineHeight:1.8, margin:0, whiteSpace:"pre-line", fontSize:fs(14) }}>{topic.lesson}</p>
              </div>
              <button onClick={() => setTab("code")} style={{ marginTop:14, background:c.color, color:"#000", border:"none", borderRadius:10, padding:"12px 22px", fontWeight:700, fontSize:14, cursor:"pointer", width:"100%" }}>See the Code Example →</button>
              {topic.ecz && (
                <div style={{ marginTop:12, background:darkMode?"#1c1408":"#fffbeb", border:"1px solid #e8a02055", borderRadius:14, padding:"14px 16px", display:"flex", gap:10 }}>
                  <span style={{ fontSize:20, flexShrink:0 }}>💡</span>
                  <div>
                    <div style={{ color:"#e8a020", fontWeight:700, fontSize:12, textTransform:"uppercase", letterSpacing:1, marginBottom:5 }}>ECZ Exam Tip</div>
                    <p style={{ margin:0, color:darkMode?"#fcd34d":"#92400e", fontSize:fs(13), lineHeight:1.75 }}>{topic.ecz}</p>
                  </div>
                </div>
              )}
            </div>
          )}

          {tab === "code" && (
            <div>
              <div style={{ background:T.codeBg, border:`1px solid ${c.color}33`, borderRadius:14, overflow:"hidden" }}>
                <div style={{ background:c.color+"22", padding:"9px 14px", display:"flex", alignItems:"center", gap:7 }}>
                  <div style={{ display:"flex", gap:5 }}>{["#e74c3c","#f39c12","#27ae60"].map(col => <div key={col} style={{ width:11, height:11, borderRadius:"50%", background:col }} />)}</div>
                  <span style={{ color:c.color, fontSize:12, fontWeight:600, marginLeft:4 }}>{topic.language==="Pascal"?"program.pas":topic.language==="C++"?"main.cpp":topic.language==="HTML"?"index.html":"script.py"}</span>
                </div>
                <pre style={{ margin:0, padding:18, overflowX:"auto", fontSize:fs(12), lineHeight:1.7, color:"#e0f2fe", fontFamily:"'Courier New',monospace" }}>{topic.code}</pre>
              </div>
              <div style={{ background:c.color+"11", border:`1px solid ${c.color}33`, borderRadius:12, padding:14, marginTop:12 }}>
                <p style={{ margin:0, color:T.textCode, fontSize:fs(13), lineHeight:1.7 }}><strong style={{ color:c.color }}>💡 Explanation:</strong> {topic.explanation}</p>
              </div>
              <button onClick={() => setTab(topic.language==="HTML"?"preview":"trace")} style={{ marginTop:14, background:c.color, color:"#000", border:"none", borderRadius:10, padding:"12px 22px", fontWeight:700, fontSize:14, cursor:"pointer", width:"100%" }}>{topic.language==="HTML"?"👁️ See Preview →":"🔍 Step Through →"}</button>
            </div>
          )}

          {tab === "preview" && (
            <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
              <div style={{ background:T.cardBg, border:`1px solid ${c.color}33`, borderRadius:12, padding:"12px 16px", display:"flex", alignItems:"center", justifyContent:"space-between" }}>
                <span style={{ color:c.color, fontWeight:700, fontSize:13 }}>👁️ Live Preview</span>
                <span style={{ color:T.textFaint, fontSize:12 }}>Your HTML rendered in the browser</span>
              </div>
              <div style={{ background:"#ffffff", borderRadius:12, overflow:"hidden", border:`2px solid ${c.color}55`, minHeight:320 }}>
                <div style={{ background:"#f1f5f9", borderBottom:"1px solid #e2e8f0", padding:"8px 12px", display:"flex", alignItems:"center", gap:8 }}>
                  <div style={{ display:"flex", gap:5 }}>{["#e74c3c","#f39c12","#27ae60"].map(col => <div key={col} style={{ width:10, height:10, borderRadius:"50%", background:col }} />)}</div>
                  <span style={{ color:"#64748b", fontSize:11, fontFamily:"'Courier New',monospace" }}>preview.html</span>
                </div>
                <iframe
                  key={topic.id}
                  srcDoc={topic.code}
                  sandbox="allow-same-origin"
                  style={{ width:"100%", border:"none", display:"block", minHeight:300, background:"#fff" }}
                  title={`Preview: ${topic.title}`}
                />
              </div>
              <div style={{ background:c.color+"11", border:`1px solid ${c.color}33`, borderRadius:12, padding:"12px 16px" }}>
                <p style={{ margin:0, color:T.textCode, fontSize:fs(13), lineHeight:1.7 }}><strong style={{ color:c.color }}>💡 Explanation:</strong> {topic.explanation}</p>
              </div>
              <button onClick={() => setTab("quiz")} style={{ background:c.color, color:"#000", border:"none", borderRadius:10, padding:"12px 22px", fontWeight:700, fontSize:14, cursor:"pointer", width:"100%" }}>Try the Quiz →</button>
            </div>
          )}

          {tab === "trace" && (() => {
            const steps = topic.trace;
            if (!steps || steps.length === 0) return (
              <div style={{ background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.08)", borderRadius:14, padding:24, textAlign:"center" }}>
                <div style={{ fontSize:32, marginBottom:8 }}>🔍</div>
                <p style={{ color:"#64748b", margin:0 }}>No trace available for this topic yet.</p>
              </div>
            );
            const step = steps[traceStep];
            const isFirst = traceStep === 0;
            const isLast  = traceStep === steps.length - 1;
            const pct = Math.round(((traceStep + 1) / steps.length) * 100);
            return (
              <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
                {/* Header */}
                <div style={{ background:"rgba(255,255,255,0.04)", border:`1px solid ${c.color}33`, borderRadius:12, padding:"12px 16px", display:"flex", alignItems:"center", justifyContent:"space-between" }}>
                  <span style={{ color:c.color, fontWeight:700, fontSize:13 }}>🔍 Step-through Trace</span>
                  <span style={{ color:"#64748b", fontSize:12 }}>Step {traceStep+1} of {steps.length}</span>
                </div>

                {/* Progress bar */}
                <div style={{ background:"#1e293b", borderRadius:999, height:6, overflow:"hidden" }}>
                  <div style={{ background:c.color, height:"100%", width:`${pct}%`, borderRadius:999, transition:"width 0.3s ease" }} />
                </div>

                {/* Code panel — full code with current line highlighted */}
                <div style={{ background:"#0a0f16", border:`1px solid ${c.color}33`, borderRadius:12, overflow:"hidden" }}>
                  <div style={{ background:c.color+"22", padding:"8px 14px", display:"flex", alignItems:"center", gap:7 }}>
                    <div style={{ display:"flex", gap:5 }}>{["#e74c3c","#f39c12","#27ae60"].map(col => <div key={col} style={{ width:10, height:10, borderRadius:"50%", background:col }} />)}</div>
                    <span style={{ color:c.color, fontSize:12, fontWeight:600, marginLeft:4 }}>Executing line {step.line}</span>
                  </div>
                  <div style={{ padding:"12px 0", fontFamily:"'Courier New',monospace", fontSize:12.5, lineHeight:1.8 }}>
                    {topic.code.split("\n").map((codeLine, i) => {
                      const lineNum = i + 1;
                      const isActive = lineNum === step.line;
                      return (
                        <div key={i} style={{ display:"flex", alignItems:"stretch", background:isActive ? c.color+"28" : "transparent", borderLeft:isActive ? `3px solid ${c.color}` : "3px solid transparent", transition:"all 0.25s" }}>
                          <span style={{ color:isActive ? c.color : "#334155", width:36, textAlign:"right", paddingRight:12, userSelect:"none", fontSize:11, display:"flex", alignItems:"center", justifyContent:"flex-end", flexShrink:0 }}>{lineNum}</span>
                          <span style={{ color:isActive ? "#fff" : "#94a3b8", paddingLeft:4, paddingRight:16, whiteSpace:"pre" }}>{codeLine}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Explanation card */}
                <div style={{ background:"rgba(255,255,255,0.04)", border:`2px solid ${c.color}55`, borderRadius:12, padding:"14px 16px" }}>
                  <div style={{ color:c.color, fontWeight:700, fontSize:12, textTransform:"uppercase", letterSpacing:1, marginBottom:8 }}>💬 What's happening</div>
                  <p style={{ margin:0, color:"#e2e8f0", fontSize:14, lineHeight:1.75 }}>{step.explanation}</p>
                </div>

                {/* Variable state */}
                {step.vars && Object.keys(step.vars).length > 0 && (
                  <div style={{ background:"#0d1f35", border:`1px solid ${c.color}33`, borderRadius:12, padding:"12px 16px" }}>
                    <div style={{ color:c.color, fontWeight:700, fontSize:12, textTransform:"uppercase", letterSpacing:1, marginBottom:10 }}>📦 Variables in memory</div>
                    <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
                      {Object.entries(step.vars).map(([k, v]) => (
                        <div key={k} style={{ background:"#162032", border:`1px solid ${c.color}44`, borderRadius:8, padding:"6px 12px", fontFamily:"'Courier New',monospace" }}>
                          <span style={{ color:"#94a3b8", fontSize:12 }}>{k} </span>
                          <span style={{ color:"#64748b", fontSize:12 }}>= </span>
                          <span style={{ color:c.color, fontWeight:700, fontSize:13 }}>{JSON.stringify(v)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Output so far */}
                {step.output !== undefined && step.output !== null && (
                  <div style={{ background:"#020a0a", border:"1px solid #27ae6044", borderRadius:10, padding:"10px 14px" }}>
                    <div style={{ color:"#27ae60", fontSize:11, fontWeight:700, textTransform:"uppercase", letterSpacing:1, marginBottom:6 }}>▶ Output so far</div>
                    <pre style={{ margin:0, color:"#6ee7a0", fontFamily:"'Courier New',monospace", fontSize:13, lineHeight:1.6 }}>{step.output}</pre>
                  </div>
                )}

                {/* Navigation */}
                <div style={{ display:"flex", gap:9, marginTop:4 }}>
                  <button onClick={() => setTraceStep(0)} disabled={isFirst}
                    style={{ background:isFirst?"#0d1b2a":"rgba(255,255,255,0.06)", border:`1px solid ${isFirst?"#1e293b":"rgba(255,255,255,0.1)"}`, borderRadius:10, padding:"11px 14px", color:isFirst?"#334155":"#94a3b8", cursor:isFirst?"default":"pointer", fontSize:18 }}>
                    ⏮
                  </button>
                  <button onClick={() => setTraceStep(s => Math.max(0, s-1))} disabled={isFirst}
                    style={{ background:isFirst?"#0d1b2a":"rgba(255,255,255,0.06)", border:`1px solid ${isFirst?"#1e293b":"rgba(255,255,255,0.1)"}`, borderRadius:10, padding:"11px 18px", color:isFirst?"#334155":"#94a3b8", cursor:isFirst?"default":"pointer", fontWeight:600, fontSize:13, flex:1 }}>
                    ← Prev
                  </button>
                  <button onClick={() => setTraceStep(s => Math.min(steps.length-1, s+1))} disabled={isLast}
                    style={{ background:isLast?"#0d1b2a":c.color, border:"none", borderRadius:10, padding:"11px 18px", color:isLast?"#334155":"#000", cursor:isLast?"default":"pointer", fontWeight:700, fontSize:13, flex:1 }}>
                    Next →
                  </button>
                  <button onClick={() => setTraceStep(steps.length-1)} disabled={isLast}
                    style={{ background:isLast?"#0d1b2a":"rgba(255,255,255,0.06)", border:`1px solid ${isLast?"#1e293b":"rgba(255,255,255,0.1)"}`, borderRadius:10, padding:"11px 14px", color:isLast?"#334155":"#94a3b8", cursor:isLast?"default":"pointer", fontSize:18 }}>
                    ⏭
                  </button>
                </div>

                {isLast && (
                  <button onClick={() => setTab("quiz")} style={{ background:c.color, color:"#000", border:"none", borderRadius:10, padding:"12px 22px", fontWeight:700, fontSize:14, cursor:"pointer", width:"100%" }}>
                    Try the Quiz →
                  </button>
                )}
              </div>
            );
          })()}

          {tab === "worked" && (() => {
            const w = topic.worked;
            if (!w) return (
              <div style={{ background:T.cardBg, border:`1px solid ${T.border}`, borderRadius:14, padding:24, textAlign:"center" }}>
                <div style={{ fontSize:32, marginBottom:8 }}>✏️</div>
                <p style={{ color:T.textFaint, margin:0 }}>No worked example for this topic yet.</p>
              </div>
            );
            return (
              <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
                <div style={{ background:T.cardBg, border:`1px solid ${c.color}33`, borderRadius:12, padding:"13px 16px" }}>
                  <div style={{ color:c.color, fontWeight:700, fontSize:13, textTransform:"uppercase", letterSpacing:1, marginBottom:6 }}>✏️ Worked Example</div>
                  <p style={{ margin:0, color:T.text, fontSize:14, lineHeight:1.75 }}>{w.scenario}</p>
                </div>
                <div style={{ background:darkMode?"#1a2535":"#eff6ff", border:`1px solid ${c.color}44`, borderRadius:12, padding:"13px 16px" }}>
                  <div style={{ color:c.color, fontWeight:700, fontSize:12, textTransform:"uppercase", letterSpacing:1, marginBottom:8 }}>❓ Problem</div>
                  <p style={{ margin:0, color:T.text, fontSize:14, lineHeight:1.75, fontWeight:500 }}>{w.problem}</p>
                </div>
                <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
                  <div style={{ color:c.color, fontWeight:700, fontSize:12, textTransform:"uppercase", letterSpacing:1 }}>🧩 Solution — Step by Step</div>
                  {w.steps.map((step, i) => (
                    <div key={i} style={{ display:"flex", gap:12, alignItems:"flex-start" }}>
                      <div style={{ width:28, height:28, borderRadius:"50%", background:c.color, color:"#000", display:"flex", alignItems:"center", justifyContent:"center", fontWeight:800, fontSize:13, flexShrink:0 }}>{i+1}</div>
                      <div style={{ flex:1, background:T.cardBg, border:`1px solid ${T.border}`, borderRadius:10, padding:"10px 13px" }}>
                        <p style={{ margin:"0 0 6px", color:T.text, fontSize:13.5, lineHeight:1.7 }}>{step.explain}</p>
                        {step.code && (
                          <pre style={{ margin:0, background:T.codeBg, borderRadius:8, padding:"10px 12px", color:"#a5f3fc", fontFamily:"'Courier New',monospace", fontSize:12.5, lineHeight:1.6, overflowX:"auto" }}>{step.code}</pre>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div style={{ background:darkMode?"#0f2e1a":"#f0fdf4", border:"2px solid #27ae60", borderRadius:12, padding:"13px 16px" }}>
                  <div style={{ color:"#27ae60", fontWeight:700, fontSize:12, textTransform:"uppercase", letterSpacing:1, marginBottom:8 }}>✅ Answer</div>
                  <p style={{ margin:"0 0 10px", color:darkMode?"#bbf7d0":"#166534", fontSize:14, lineHeight:1.75 }}>{w.answer}</p>
                  {w.answerCode && (
                    <pre style={{ margin:0, background:T.codeBg, borderRadius:8, padding:"10px 12px", color:"#6ee7a0", fontFamily:"'Courier New',monospace", fontSize:12.5, lineHeight:1.6, overflowX:"auto" }}>{w.answerCode}</pre>
                  )}
                </div>
                <div style={{ background:darkMode?"#1a1230":"#f5f3ff", border:"1px solid #7c3aed55", borderRadius:12, padding:"13px 16px", display:"flex", gap:10 }}>
                  <span style={{ fontSize:18, flexShrink:0 }}>💡</span>
                  <div>
                    <div style={{ color:"#7c3aed", fontWeight:700, fontSize:12, textTransform:"uppercase", letterSpacing:1, marginBottom:5 }}>Key Insight</div>
                    <p style={{ margin:0, color:darkMode?"#ddd6fe":"#4c1d95", fontSize:13.5, lineHeight:1.75 }}>{w.insight}</p>
                  </div>
                </div>
                <button onClick={() => setTab("quiz")} style={{ background:c.color, color:"#000", border:"none", borderRadius:10, padding:"12px 22px", fontWeight:700, fontSize:14, cursor:"pointer", width:"100%" }}>
                  Now Try the Quiz →
                </button>
              </div>
            );
          })()}

          {tab === "quiz" && (() => {
            const questions = getQuestions(topic);

            // ── Score card ─────────────────────────────────────────────────
            if (quizDone) {
              const perfect = quizSessionScore === questions.length;
              const passed  = quizSessionScore >= Math.ceil(questions.length / 2);
              const currentIdx = ALL_TOPICS.findIndex(t => t.id === topic.id);
              const nextTopic  = currentIdx >= 0 && currentIdx < ALL_TOPICS.length - 1 ? ALL_TOPICS[currentIdx + 1] : null;
              return (
                <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
                  <div style={{ background:perfect?(darkMode?"#0f2e1a":"#f0fdf4"):passed?(darkMode?"#1a2010":"#f7fee7"):(darkMode?"#2e0e0e":"#fef2f2"), border:`2px solid ${perfect?"#27ae60":passed?"#86efac":"#e74c3c"}`, borderRadius:16, padding:"24px 20px", textAlign:"center" }}>
                    <div style={{ fontSize:48, marginBottom:8 }}>{perfect?"🏆":passed?"🎉":"📚"}</div>
                    <div style={{ fontSize:28, fontWeight:900, color:perfect?"#27ae60":passed?"#4ade80":"#e74c3c", marginBottom:4 }}>{quizSessionScore}/{questions.length}</div>
                    <div style={{ fontSize:15, color:perfect?"#27ae60":passed?(darkMode?"#86efac":"#16a34a"):(darkMode?"#fca5a5":"#dc2626"), fontWeight:700, marginBottom:14 }}>{perfect?"Perfect score! Outstanding!":passed?"Good work — keep it up!":"Review the lesson and try again!"}</div>
                    <div style={{ display:"flex", justifyContent:"center", gap:8, marginBottom:14 }}>
                      {questions.map((_,qi) => <div key={qi} style={{ width:14, height:14, borderRadius:"50%", background:qi < quizSessionScore ? "#27ae60" : (darkMode?"#334155":"#cbd5e1") }} />)}
                    </div>
                    <div style={{ display:"flex", gap:8, justifyContent:"center", flexWrap:"wrap" }}>
                      <span style={{ fontSize:12, color:"#27ae60", background:darkMode?"#0f2e1a":"#f0fdf4", border:"1px solid #27ae6044", borderRadius:6, padding:"4px 10px" }}>✓ Progress saved</span>

                    </div>
                  </div>
                  {nextTopic && passed && (
                    <button onClick={() => startLesson(nextTopic)}
                      style={{ background:`linear-gradient(135deg, ${CURRICULUM[nextTopic.language].color}, ${CURRICULUM[nextTopic.language].color}cc)`, border:"none", borderRadius:12, padding:"15px 18px", cursor:"pointer", display:"flex", alignItems:"center", gap:12, textAlign:"left", width:"100%" }}>
                      <div style={{ width:40, height:40, borderRadius:10, background:"rgba(0,0,0,0.2)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:20, flexShrink:0 }}>{CURRICULUM[nextTopic.language].icon}</div>
                      <div style={{ flex:1 }}>
                        <div style={{ color:"rgba(0,0,0,0.6)", fontSize:11, fontWeight:700, textTransform:"uppercase", letterSpacing:1 }}>Next Lesson</div>
                        <div style={{ color:"#000", fontWeight:800, fontSize:15, marginTop:2 }}>{nextTopic.title}</div>
                        <div style={{ color:"rgba(0,0,0,0.5)", fontSize:11, marginTop:1 }}>{nextTopic.language}</div>
                      </div>
                      <div style={{ color:"rgba(0,0,0,0.5)", fontSize:22, fontWeight:700 }}>→</div>
                    </button>
                  )}
                  <div style={{ display:"flex", gap:9 }}>
                    <button onClick={() => { setQuizIndex(0); setQuizSessionScore(0); setQuizDone(false); setQuizAnswer(null); setQuizSubmitted(false); setShowHint(false); }}
                      style={{ flex:1, background:T.cardBg, border:`1px solid ${T.border2}`, borderRadius:10, padding:"11px", color:T.text, fontWeight:600, fontSize:13, cursor:"pointer" }}>
                      🔁 Retry
                    </button>
                    <button onClick={() => setScreen("topics")}
                      style={{ flex:1, background:T.cardBg, border:`1px solid ${T.border2}`, borderRadius:10, padding:"11px", color:T.text, fontWeight:700, fontSize:13, cursor:"pointer" }}>
                      ← Lessons
                    </button>
                  </div>
                </div>
              );
            }

            // ── Active question ────────────────────────────────────────────
            const q = questions[quizIndex];
            const diff = quizIndex === 0
              ? { label:"Starter", color:"#27ae60" }
              : quizIndex === 1
              ? { label:"Core",    color:"#e8a020" }
              : { label:"Challenge", color:"#e74c3c" };

            return (
              <div>
                <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:14 }}>
                  <div style={{ flex:1, background:darkMode?"#1e293b":"#dbeafe", borderRadius:999, height:6, overflow:"hidden" }}>
                    <div style={{ background:c.color, height:"100%", width:`${(quizIndex/questions.length)*100}%`, borderRadius:999, transition:"width 0.4s" }} />
                  </div>
                  <span style={{ fontSize:12, color:T.textFaint, whiteSpace:"nowrap" }}>Q{quizIndex+1}/{questions.length}</span>
                  <span style={{ fontSize:11, color:diff.color, background:diff.color+"22", border:`1px solid ${diff.color}44`, borderRadius:6, padding:"2px 8px", fontWeight:700 }}>{diff.label}</span>
                </div>
                <div style={{ background:T.cardBg, border:`1px solid ${T.border}`, borderRadius:14, padding:18, marginBottom:12 }}>
                  <div style={{ display:"flex", gap:10 }}>
                    <span style={{ fontSize:20 }}>🇿🇲</span>
                    <p style={{ margin:0, color:T.text, fontSize:14.5, lineHeight:1.7, fontWeight:500 }}>{q.text}</p>
                  </div>
                </div>
                <div style={{ display:"flex", flexDirection:"column", gap:9 }}>
                  {q.options.map((opt, i) => {
                    let bg=T.cardBg, border=`1px solid ${T.border}`, tc=T.text;
                    if (quizSubmitted) {
                      if (i===q.answer) { bg=darkMode?"#0f2e1a":"#f0fdf4"; border="2px solid #27ae60"; tc=darkMode?"#6ee7a0":"#166534"; }
                      else if (i===quizAnswer) { bg=darkMode?"#2e0e0e":"#fef2f2"; border="2px solid #e74c3c"; tc=darkMode?"#fca5a5":"#dc2626"; }
                    } else if (quizAnswer===i) { bg=c.color+"22"; border=`2px solid ${c.color}`; }
                    return (
                      <button key={i} onClick={() => !quizSubmitted && setQuizAnswer(i)}
                        style={{ background:bg, border, borderRadius:10, padding:"12px 14px", textAlign:"left", color:tc, cursor:quizSubmitted?"default":"pointer", fontSize:13.5, fontWeight:500, transition:"all 0.15s", display:"flex", alignItems:"center", gap:9 }}>
                        <span style={{ width:25, height:25, borderRadius:"50%", background:quizAnswer===i&&!quizSubmitted?c.color:T.cardBg, color:quizAnswer===i&&!quizSubmitted?"#000":T.textMuted, border:`1px solid ${T.border2}`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:11, fontWeight:700, flexShrink:0 }}>{String.fromCharCode(65+i)}</span>
                        {opt}
                      </button>
                    );
                  })}
                </div>
                {!quizSubmitted && (
                  <div style={{ marginTop:14, display:"flex", gap:9 }}>
                    <button onClick={() => setShowHint(!showHint)} style={{ background:T.cardBg, border:`1px solid ${T.border}`, borderRadius:10, padding:"10px 16px", color:T.textMuted, cursor:"pointer", fontSize:13 }}>💡 {showHint?"Hide":"Hint"}</button>
                    <button onClick={submitQuiz} disabled={quizAnswer===null} style={{ flex:1, background:quizAnswer!==null?c.color:(darkMode?"#1e293b":"#dbeafe"), border:"none", borderRadius:10, padding:"11px 18px", color:quizAnswer!==null?"#000":T.textFaint, fontWeight:700, fontSize:14, cursor:quizAnswer!==null?"pointer":"default", transition:"all 0.2s" }}>Submit Answer</button>
                  </div>
                )}
                {showHint && !quizSubmitted && (
                  <div style={{ marginTop:10, background:darkMode?"#1e2d40":"#eff6ff", border:"1px solid #2563eb55", borderRadius:10, padding:"11px 14px" }}>
                    <p style={{ margin:0, color:darkMode?"#93c5fd":"#1d4ed8", fontSize:13 }}>💡 <strong>Hint:</strong> {q.hint}</p>
                  </div>
                )}
                {quizSubmitted && (
                  <div style={{ marginTop:12, background:quizAnswer===q.answer?(darkMode?"#0f2e1a":"#f0fdf4"):(darkMode?"#2e0e0e":"#fef2f2"), border:`2px solid ${quizAnswer===q.answer?"#27ae60":"#e74c3c"}`, borderRadius:12, padding:14 }}>
                    <p style={{ margin:"0 0 8px", color:quizAnswer===q.answer?"#27ae60":"#e74c3c", fontWeight:700, fontSize:14 }}>
                      {quizAnswer===q.answer?"✅ Correct!":"❌ Not quite."}
                    </p>
                    <p style={{ margin:"0 0 12px", color:T.text, fontSize:13, lineHeight:1.6 }}><strong>Explanation:</strong> {q.hint}</p>
                    {quizIndex < questions.length - 1
                      ? <button onClick={nextQuestion} style={{ background:c.color, color:"#000", border:"none", borderRadius:10, padding:"10px 18px", fontWeight:700, fontSize:13, cursor:"pointer", width:"100%" }}>Next Question →</button>
                      : <button onClick={() => setQuizDone(true)} style={{ background:c.color, color:"#000", border:"none", borderRadius:10, padding:"10px 18px", fontWeight:700, fontSize:13, cursor:"pointer", width:"100%" }}>See Results →</button>
                    }
                  </div>
                )}
              </div>
            );
          })()}
        </div>
      </div>
    );
  }

  // ── GAMES HUB ─────────────────────────────────────────────────────────────
  return null;
}
