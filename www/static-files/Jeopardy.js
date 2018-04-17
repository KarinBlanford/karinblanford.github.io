function setQuestionContent(id) {
    /* get document elements */
    var buttonElement = document.getElementById(id);
    var buttonText = buttonElement.innerText;
    var questionTitle = document.getElementById('questionModalTitle');
    var questionContent = document.getElementById('question-content');
    var answerContent = document.getElementById('answer-content');

    /* split id into usable pieces [topic-value] */
    var idElement = id.split('-');

    var topic = idElement[0];
    var value = idElement[1];
    var title = master[topic]['title'];
    var question = master[topic][value].question;
    var code = master[topic][value].code;
    var answer = master[topic][value].answer;

    /* setting inner content of modal elements */
    questionTitle.innerText = title + ' for ' + value;
    questionContent.innerHTML = question + "<br><br>" + code + "<br><br>";
    answerContent.innerHTML = answer;
    buttonElement.classList = "btn btn-light text-muted";
    buttonElement.innerHTML = "<del>" + buttonText + "</del>";
}

var master = {
    str: {
        title: "Strings",
        100: {
            question: "What is the index of the 3rd character of the following string?",
            code: "<code>\"apple\"</code>",
            answer: "2"
        },
        200: {
            question: "What is the output of the following command?",
            code: "<code>\"Arizona State University\".indexOf(\"Colorado\");</code>",
            answer: "-1"
        },
        300: {
            question: "What is the output of the following command?",
            code: "<code>\"Arizona State University\".indexOf(\"Uni\");</code>",
            answer: "14"
        },
        400: {
            question: "Given the string \"The quick brown fox\", what command would produce the following output?",
            code: "<samp>ck bro</samp>",
            answer: "\"The quick brown fox\".substring(7, 13);"
        },
        500: {
            question: "What is the output of the following command?",
            code: "<code>\"The quick brown fox\".substring(11, 17)</code>",
            answer: "compilation error: missing semicolon"
        },
        600: {
            question: "What is the correct syntax for the condition checking if the length of two strings (str1 and str2) are equal?",
            code: "<code></code>",
            answer: "str1.length() == str2.length()"
        },
        700: {
            question: "GROUP CHALLENGE! A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. Write a function that returns true if a given string is a palindrome.",
            code: "<code></code>",
            answer: ""
        }
    },
    arr: {
        title: "Arrays",
        100: {
            question: "What is the correct command for creating a new Integer array of length 10?",
            code: "<samp></samp>",
            answer: "int[] arr = new int[10];"
        },
        200: {
            question: "After executing this command, what does this array look like?",
            code: "<samp>String[] arr = new String[4];</samp>",
            answer: "[null, null, null, null]"
        },
        300: {
            question: "What is the output of the following piece of code?",
            code: "<code>int[] arr1 = { 1, 2, 3 };</code><br><code>int[] arr2 = { 1, 2, 3 };</code><br><code>System.out.println(arr1 == arr2);</code>",
            answer: "false"
        },
        400: {
            question: "What is the output of the following piece of code?",
            code: "<code>String[] arr = { \"The\", \"quick\", \"brown\", \"fox\", \"jumped\", \"over\", \"the\", \"lazy\", \"dog.\" };</code><br><code>for(int i = 0; i < arr.length; i+=2)</code><br><code>System.out.println(arr[i].charAt(arr[i].length() - 2));</code>",
            answer: "hweho"
        },
        500: {
            question: "Add another line of code so that each element of the array is equal to itself times the index of the element before it. Write the output.",
            code: "<code>int[] arr = { 7, 5, 2, 9, 4 };</code><br><code>for(int i = 0; i < arr.length; i++)</code>",
            answer: "arr[i] = arr[i] * (i - 1);<br>output: -7 0 2 18 12"
        },
        600: {
            question: "Complete the given code fragement to reverse any one dimensional integer array.",
            code: "<samp>for(int i = 0; ________________ ; i++)</samp>",
            answer: "i < arr.length / 2<br>int temp = arr[i];<br>arr[i] = arr[arr.length - 1 - i];<br>int[arr.length - 1 - i] = temp;"
        },
        700: {
            question: "GROUP CHALLENGE! Write out a code fragment that creates a new String array containing the first names of each of your team members. Then add the necessary code to print out the longest name in the array. If there's a tie for the longest name, print that value.",
            code: "<code></code>",
            answer: ""
        }
    },
    twodarr: {
        title: "2D Arrays",
        100: {
            question: "Write a line of code to instantiate a 2D integer array with 4 columns and 16 rows.",
            code: "",
            answer: "int[][] arr = new int[16][4];"
        },
        200: {
            question: "What does the following line of code tell you about an existing 2D array?",
            code: "<code>System.out.println(arr[2].length);</code>",
            answer: "Prints the number of columns in the third row."
        },
        300: {
            question: "Complete the given code fragement to reverse any one dimensional integer array.",
            code: "<samp>for(int i = 0; ________________ ; i++)</samp>",
            answer: "i < arr.length / 2<br>int temp = arr[i];<br>arr[i] = arr[arr.length - 1 - i];<br>int[arr.length - 1 - i] = temp;"
        },
        400: {
            question: "Write the code fragment to print the following output:",
            code: "<samp>*</samp><br><samp>**</samp><br><samp>****</samp><br><samp>********</samp><br><samp>****</samp><br><samp>**</samp><br><samp>*</samp>",
            answer: ""
        },
        500: {
            question: "Write a code fragment to print every other element of every other row of a 2D integer array. Start with the first element of the first row.",
            code: "",
            answer: ""
        },
        600: {
            question: "Assume a 2D character array called 'board' exists with 3 rows and 3 columns. Write an algorithm to determine if 3 characters match in a row (horizontally, vertically, or diagonally).",
            code: "",
            answer: ""
        },
        700: {
            question: "GROUP CHALLENGE! Write a piece of code which prints every integer in a border position of a 2D integer array. You can assume the array has a minimum of 2 rows and 2 columns.",
            code: "<code></code>",
            answer: ""
        }
    },
    algo: {
        title: "Algorithms",
        100: {
            question: "Name 3 different sorting algorithms:",
            code: "",
            answer: "selection, bubble, merge, insertion, quick, heap"
        },
        200: {
            question: "Order the following 3 sorting algorithms in order of best case scenario time: insertion, selection, and merge.",
            code: "",
            answer: "merge, insertion, selection"
        },
        300: {
            question: "Write a recursive algorithm in psuedocode to determine if a number is prime.",
            code: "",
            answer: ""
        },
        400: {
            question: "Write an algorithm in psuedocode to find the longest string in a 1D String array.",
            code: "",
            answer: ""
        },
        500: {
            question: "Write an algorithm in psuedocode to find the largest number in a 2D integer array.",
            code: "",
            answer: ""
        },
        600: {
            question: "Insertion sort and selection sort are similar algorithms to sort a set of elements. How are they different?",
            code: "",
            answer: "Both maintain an ordered and unordered array. Selection sort searches the whole array for the next smallest element and places it in its sorted place while selection sort uses the next element in the unsorted array and comparing it against each element in the sorted array, inserts it in its right place."
        },
        700: {
            question: "GROUP CHALLENGE! Write the algorithm for selection sort.",
            code: "",
            answer: "<samp>Step 1: Set MIN to location 0</samp><br><samp>Step 2: Search the minimum element in the list</samp><br><samp>Step 3: Swap with value at location MIN</samp><br><samp>Step 4: Increment MIN to point to next element</samp><br><samp>Step 5: Repeat until list is sorted</samp>"
        }
    },
    cs: {
        title: "CS Topics",
        100: {
            question: "Name one job career path or job title you could have after studying computer science.",
            code: "<code></code>",
            answer: ""
        },
        200: {
            question: "What is the name of the most important (and unsolved) problem in computer science?",
            code: "<code></code>",
            answer: "P vs NP"
        },
        300: {
            question: "Name one of the encryption methods we talked about in class.",
            code: "<code></code>",
            answer: "Symmetric key, public key"
        },
        400: {
            question: "Name one of the assertion methods used in Java JUnit testing.",
            code: "<code></code>",
            answer: "AssertEquals, AssertTrue, AssertFalse"
        },
        500: {
            question: "Name one famous computer scientist.",
            code: "<code></code>",
            answer: ""
        },
        600: {
            question: "Name 6 different java primitive types:",
            code: "",
            answer: "boolean, character, integer, decimal, float, byte, short, long, double"
        },
        700: {
            question: "What is the name of the property of an object or type that dictates that it cannot be changed once it has been created?",
            code: "<code></code>",
            answer: "immutable or immutability"
        }
    }
};