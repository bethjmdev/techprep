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
- Space complexity is the amount of memory that an algorithm takes up

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

-Hash Tables are extremly important

<h3>Notes for solving a technical question </h3>
<h4>First </h4> 
-find the brute force way of solving the question, you can revise from there
<h4>When optimizing</h4> 
-Solve the question manually the reverse engineer your answer
<h4>For optimization</h4>
-make time vs space trade offs

<h4>When almost ish done solving </h4>
-Walk through your appraoch in detail
<h4>When implimineting final version of code</h4> -modularize it and make it look pretty

<h3>Other tips for solving</h3>
-Listen for guidance from the interviewer. THey make take a more or less active role in your problem solving.

-Try drawing a literal example of the solution

- when you get a question try to come up with a real life example of it to solve. like... if you were to hand someone a stack of papers and ask them to find their last name. think about how they might do that

<h3>When testing </h4>
-Start with a conceptual test. THis means reading and analyzing each line of code. Think about it like yu're explaining lines of code to a reviewer- does the code do what you think it should do?

-Use small test cases like a 3 or 4 element array, it'll liekly discover the same bugs but will be much faster to do

<h4>When optimizing </h4>
Look for BUD
B- bottlenecks
U- unnecessary work
D- duplicate work

-you can walk through your brute force algorithm looking for these things

---

<h1>Interview Questions</h1>

<h3>Hash Tables</h3>
-A hastable is a data structure that maps keys to values for highly efficient look up
Note to self: Look up more about coding hashmaps in JavaScript

<h3>ArrayList and Resizable Arrays</h3>
-When you need an array-like data sctructure that offers dynamic resizing you would usually use an ArrayList.
-And ArrayList is and array that resizes itself as needed while still rpoviding 0(1) access. A typical implimentation is that when the array is full, it doubles in size (can be different resize size based on the language)

<h3>LinkedList </h3>
-A linked List is a data stucture  that represents a seqences of nodes.
-In a *singley linked list* each node points to the next node in the linked list.
-In a *doubley linked list* each node points to the next and previous nodes
- linked list does not provide constant time access to a particalr indedx within the list. This means that if you want to find the Kth element you will need to iterate through K elements
-The beneifet of a linked list if that you can add and remove items from the beggining of the list in constant time. This can be useful inc ertain cases

Note to self: Look up how to code a linked list in JavaScript

<h4>Deleting a node from a singley linked list </h4>
-given a node n we find the node prev and set prev.next ot equal n.next
-if updating in a doubly linked list you will need to update n.next  to set n.next.prev equal to n.prev
-important thing to remember: check for null pointer and update the head or tail pointer as nessesary

<h4>The Runner Technique</h4>
-the runner (or the second pointer) technique is used in many linked list problems. 
-this means you iterate through the linked list with two pointers simultaneously with one ahead of the other.

-The "fast" node might be ahead by a fixed amount, or it might be hopping multiple nodes for each one node that the "slow" node iterates through

<h5>Example</h5>
You have linked list....
a^1 -> a^2 -> ... ->a^n -> b^1 -> b^2 -> ... -> b^n

and you wanted it to rearrange to (below) but you do not know the length of the list. You only know that the list length is an even number
a^1 -> b^1 ->a^2 -> b^2 -> ... a^n -> b^n
-you could have one pointer (p1) move every two elements for every one move that pointer two (p2) makes

-when p1 hits the end of the linked list, p2 will be at the midpoint

-p1 can move back to the front and begin "weaving" the elements

-on each iteration p2 slects an element and inserts it after p1

<h3> Recusive Problems </h3>
-A nubmer of linked list rpblems rely on recursion. remember that recursive algorithms take 0(n) space where n is the depth of the recursive call
