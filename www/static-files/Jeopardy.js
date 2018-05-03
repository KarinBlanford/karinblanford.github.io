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
        title: "Classes",
        100: {
            question: "Name the method that creates an instance of a class.",
            code: "",
            answer: "The constructor"
        },
        200: {
            question: "Fill in the blank. Java is an ______ ________ programming language.",
            code: "",
            answer: "object oriented"
        },
        300: {
            question: "An object has a state and behavior. We call an object an ________ of a class.",
            code: "",
            answer: "instance"
        },
        400: {
            question: "What is the ability to derive a new class from an existing one?",
            code: "",
            answer: "Inheritance"
        },
        500: {
            question: "________ variables define the attributes of an object and maintain the state of the class instance.",
            code: "",
            answer: "Instance"
        },
        600: {
            question: "_______ and _______ are used for retreiving and updating the state of an object.",
            code: "",
            answer: "Getters and setters"
        },
        700: {
            question: "GROUP CHALLENGE: All teams participate in this group challenge. Create a new class called 'Superhero' that has 3 instance variables: String name, String franchise, and boolean wearsCape. Add and use getter and setter methods for all instance variables as well as an equals method. If the franchise provided via the parameters in the constructor is not 'Marvel' or 'DC' (case sensitive), default the value to 'Marvel'.",
            code: "",
            answer: ""
        }
    },
    arr: {
        title: "Types",
        100: {
            question: "A ____ primitive datatype consists of a single character.",
            code: "",
            answer: "char"
        },
        200: {
            question: "A _______ primitive datatype represents a binary value and is often used in conditionals to test or assert the value of an expression.",
            code: "",
            answer: "boolean"
        },
        300: {
            question: "What is the value of c?",
            code: "char c = \"C\"",
            answer: "Compilation error: invalid assignment -- cannot convert a string to a char."
        },
        400: {
            question: "Write a method which accepts two string arrays as parameters and returns true if they are equal.",
            code: "",
            answer: ""
        },
        500: {
            question: "TRUE or FALSE: the code snippet below is a valid assignment.",
            code: "<code>int test = 123;<br>String testString = test + \"456\"</code>",
            answer: "True. Concatenating \"456\" onto 'test' converts the resulting value to a String."
        },
        600: {
            question: "A ______ is actually a Java class represented as an immutable array of chars.",
            code: "",
            answer: "String"
        },
        700: {
            question: "GROUP CHALLENGE: All teams participate in this group challenge. Write a function that takes an array of Strings, each element a full name (First Middle Last) and returns a String array of equal length of each of the names' intials (FML) in uppercase. ",
            code: "",
            answer: ""
        }
    },
    twodarr: {
        title: "Methods",
        100: {
            question: "What is the return type of this method?",
            code: "<code>public boolean isPrime(int n)</code>",
            answer: "boolean"
        },
        200: {
            question: "In as little code as possible, write a complete method that returns true if its integer parameter is less than 0.",
            code: "",
            answer: ""
        },
        300: {
            question: "As efficiently as possible, write a complete method determines if its integer array parameter contains all positive numbers (greater than or equal to 0).",
            code: "",
            answer: ""
        },
        400: {
            question: "A class can contain multiple methods with the same method ____ but not the same method signature. This is called method ___________.",
            code: "",
            answer: "name -- overloading"
        },
        500: {
            question: "______ _________ restrict the scope of a method.",
            code: "",
            answer: "Access modifiers"
        },
        600: {
            question: "As efficiently as possible, write a complete method that accepts an integer array of the ages of each member of your team and returns the youngest age.",
            code: "",
            answer: ""
        },
        700: {
            question: "GROUP CHALLENGE: All teams participate in this group challenge. Write a recursive method called 'factorial' that calculates and returns the value of its integer parameter's factorial i.e. factorial(2) => 2.",
            code: "",
            answer: ""
        }
    },
    algo: {
        title: "Concepts",
        100: {
            question: "____ is a Java term that is used to indicate that a reference does not currently refere to any object.",
            code: "",
            answer: "null"
        },
        200: {
            question: "The binary system is comprised of what digits?",
            code: "",
            answer: "1 and 0"
        },
        300: {
            question: "The java ________ is software that translates developer written software to bytecode that the operating system can understand.",
            code: "",
            answer: "compiler"
        },
        400: {
            question: "What is the difference between a compile time and runtime error? Give examples of both.",
            code: "",
            answer: "A compile time error is thrown when..."
        },
        500: {
            question: "An ________ class cannot be instantiated but can be subclassed using the extends keyword.",
            code: "",
            answer: "abstract"
        },
        600: {
            question: "What is the output of the following code?",
            code: "<code>ArrayList names;<br>names.add(\"John\");<br>System.out.println(names.get(0));</code>",
            answer: ""
        },
        700: {
            question: "GROUP CHALLENGE: All teams participate in this group challenge. Write a COMPLETE main method that asks a user to enter the correct password. The password is 'abc123'. If the user guesses the password incorrectly, continually ask them until they get it right. Print 'Login successful' to the console once the user enters the correct password.",
            code: "",
            answer: ""
        }
    },
    cs: {
        title: "Java Math",
        100: {
            question: "What is the value of the following expression?",
            code: "<code>int a = 5;<br>int b = 2;<br>System.out.println(a/b);</code>",
            answer: ""
        },
        200: {
            question: "Write a function called 'isFactor' that takes two integer parameters k and n and returns true if k is a factor of n.",
            code: "",
            answer: ""
        },
        300: {
            question: "Write a function called 'xor' that takes two boolean parameters and returns true if exactly one of the parameters is true but not both.",
            code: "",
            answer: ""
        },
        400: {
            question: "What is the value of the following expression?",
            code: "<code>System.out.println( 5 / 2 + 4 - 3 * 7 );</code>",
            answer: "-15"
        },
        500: {
            question: "What is the value of the following expression?",
            code: "<code>System.out.println( 5 / 2 + (4 - 3) * 7 );</code>",
            answer: "9"
        },
        600: {
            question: "What is the output of the following code snippet?",
            code: "<code>System.out.println( \"apple\".indexOf(\"ple\") - \"orange\".length() / \"banana\".indexOf(\"an\") * \"pineapple\".substring(4).indexOf(\"ple\") + \"pineapples\".length() );</code>",
            answer: "0"
        },
        700: {
            question: "GROUP CHALLENGE: All teams participate in this group challenge. Write a function called 'reverseNum' that accepts an integer as an argument and returns that integer as a String with its digits in reverse order. You can assume that all numbers tested with this function will be between 100 and 999 inclusive.",
            code: "",
            answer: ""
        }
    }
};