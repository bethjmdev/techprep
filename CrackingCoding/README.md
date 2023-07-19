<h1> Behavioral interview </h1>

start with an interesting and clickbatey nugget when starting a story

<h1> Big O </h1>

<h3> Anaology for run time </h3>
* Imagine that you have a file that you need to get to someone who lives across the country

You could email it or send it via postal service on a usb

depending on the size of the file one option may be more time and/or cost effieicent than the other

you have to decide based on the size of the file what the most appropriate delivery route would be

<h3>Time compexity </h3>

- Electronic transfer would be 0(s) with s being the size of the file. This means that the time to transfer the file increase with the size of the file

Airplane transfer would be 0(1) with repsect to the size of the file. As the size of the file increases it wont take any longer to get the file to your friend. The time is constant

- No matter how biug the constant is and how slow the linear increase is, linear will at some point surpass the constant

- You can have multiple variables in your runtime. Example: painting a fence would be w (width) meters wide and h (height) meters high. which would be described as 0(wh). if you needed p layers on paint you could say it was 0(whp)

<h3>Space complexity</h3>
* Space complexity is the amount of memory that an algorithm takes up

- If we need to create an array of size n, this will require 0(n) space. if we need a two dimensional array of size n by n, this will require 0(n^2) space

---

<h1> Technical Questions </h1>

<h3> DATA STRUCTURES </h3>
<ul>
<li>Linked Lists</li>
<li>Trees, Tries, and Graphs </li>
<li>Stacks and Queues </li>
<li>Heaps </li>
<li>Vectors / ArrayLists </li>
<li>Hash Tables </li>
</ul>

<h3> ALGORITHMS </h3>
<ul>
<li>Breadth-First Search </li>
<li>Depth-First Search </li>
<li>Binary Search </li>
<li>Merge Sort </li>
<li>Quick Sort </li>
</ul>

<h3> Concepts </h3>
<ul>
<li>Bit manipulation </li>
<li>Memory (Stack vs Heap) </li>
<li>Recursion </li>
<li>Dynamic Programming </li>
<li>Big O Time and Space </li>
</ul>

\*Hash Tables are extremly important

<h3>Notes for solving a technical question </h3>
<h4>First </h4> 
*find the brute force way of solving the question, you can revise from there
<h4>When optimizing</h4> 
*Solve the question manually the reverse engineer your answer
<h4>For optimization<h4>
*make time vs space trade offs
<h4>When almost ish done solving </h4>
*Walk through your appraoch in detail
<h4>When implimineting final version of code</h4> *modularize it and make it look pretty

<h3>Other tips for solving</h3>
*Listen for guidance from the interviewer. THey make take a more or less active role in your problem solving.

\*Try drawing a literal example of the solution

\* when you get a question try to come up with a real life example of it to solve. like... if you were to hand someone a stack of papers and ask them to find their last name. think about how they might do that

<h3>When testing </h4>
*Start with a conceptual test. THis means reading and analyzing each line of code. Think about it like yu're explaining lines of code to a reviewer- does the code do what you think it should do?

\*Use small test cases like a 3 or 4 element array, it'll liekly discover the same bugs but will be much faster to do

<h4>When optimizing </h4>
Look for BUD
B - bottlenecks
U- unnecessary work
D- duplicate work

\*you can walk through your brute force algorithm looking for these things
