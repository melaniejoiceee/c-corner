"use strict";

// ==========================================
// 1. LESSON CLASS
// ==========================================

class Lesson {
  constructor(id, title, description, level, explanation, code, keyPoints) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.level = level;
    this.explanation = explanation;
    this.code = code;
    this.keyPoints = keyPoints;
  }
}

// ==========================================
// 2. USER CLASS
// ==========================================

class User {
  constructor(name) {
    this.name = name;
    this.bookmarks =
      JSON.parse(localStorage.getItem("cppCornerBookmarks")) || [];
  }

  addBookmark(lessonId) {
    if (!this.bookmarks.includes(lessonId)) {
      this.bookmarks.push(lessonId);
      this.saveBookmarks();
    }
  }

  removeBookmark(lessonId) {
    this.bookmarks = this.bookmarks.filter((id) => id !== lessonId);

    this.saveBookmarks();
  }

  isBookmarked(lessonId) {
    return this.bookmarks.includes(lessonId);
  }

  saveBookmarks() {
    localStorage.setItem("cppCornerBookmarks", JSON.stringify(this.bookmarks));
  }
}

// ==========================================
// 3. LESSON OBJECTS INSIDE AN ARRAY
// ==========================================

const lessons = [
  new Lesson(
    1,
    "Introduction to C++",
    "Discover C++ and learn the basic structure of a C++ program.",
    "Beginner",
    `C++ is a general-purpose programming language used to create
        applications, games, operating systems, and other software.

        It is an extension of the C programming language and supports
        procedural, object-oriented, and generic programming.

        Every basic C++ program needs a main() function.
        Program execution starts inside this function.`,
    `#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!";
    return 0;
}`,
    [
      "C++ is a programming language.",
      "The main() function is the starting point of a program.",
      "cout is used to display output.",
      "return 0 indicates successful program execution.",
    ],
  ),

  new Lesson(
    2,
    "Variables and Data Types",
    "Learn how to store information using variables and data types.",
    "Beginner",
    `A variable is a named storage location used to hold data
        in a program.

        Every variable has a data type that determines what kind
        of information it can store.

        Common C++ data types include int, float, double, char,
        string, and bool.`,
    `#include <iostream>
#include <string>
using namespace std;

int main() {
    int age = 18;
    float grade = 95.5;
    char section = 'A';
    string name = "Melanie";
    bool passed = true;

    cout << name << endl;
    cout << age << endl;
    cout << grade << endl;

    return 0;
}`,
    [
      "int stores whole numbers.",
      "float stores decimal numbers.",
      "char stores a single character.",
      "string stores text.",
      "bool stores true or false values.",
    ],
  ),

  new Lesson(
    3,
    "Input and Output",
    "Understand how to receive user input and display information.",
    "Beginner",
    `Input and output are important parts of programming.

        In C++, cout is used to display information on the screen,
        while cin is used to receive input from the user.

        The insertion operator << is used with cout.
        The extraction operator >> is used with cin.`,
    `#include <iostream>
using namespace std;

int main() {
    string name;
    int age;

    cout << "Enter your name: ";
    cin >> name;

    cout << "Enter your age: ";
    cin >> age;

    cout << "Hello, " << name << "!";
    cout << " You are " << age << " years old.";

    return 0;
}`,
    [
      "cout displays output.",
      "cin receives input.",
      "<< is the insertion operator.",
      ">> is the extraction operator.",
      "endl moves the output to a new line.",
    ],
  ),

  new Lesson(
    4,
    "Operators",
    "Explore arithmetic, relational, and logical operators in C++.",
    "Beginner",
    `Operators are symbols that perform operations on values
        and variables.

        Arithmetic operators perform mathematical calculations.
        Relational operators compare two values.
        Logical operators combine or reverse conditions.`,
    `#include <iostream>
using namespace std;

int main() {
    int a = 10;
    int b = 5;

    cout << "Addition: " << a + b << endl;
    cout << "Subtraction: " << a - b << endl;
    cout << "Multiplication: " << a * b << endl;
    cout << "Division: " << a / b << endl;

    cout << (a > b) << endl;

    return 0;
}`,
    [
      "+ performs addition.",
      "- performs subtraction.",
      "* performs multiplication.",
      "/ performs division.",
      "% returns the remainder.",
      "== checks equality.",
      "&& represents logical AND.",
      "|| represents logical OR.",
      "! represents logical NOT.",
    ],
  ),

  new Lesson(
    5,
    "Conditional Statements",
    "Learn how programs make decisions using if, else if, and else.",
    "Intermediate",
    `Conditional statements allow a program to execute different
        instructions depending on whether a condition is true or false.

        The if statement checks a condition.
        The else if statement checks another condition.
        The else statement runs when the previous conditions are false.`,
    `#include <iostream>
using namespace std;

int main() {
    int grade;

    cout << "Enter your grade: ";
    cin >> grade;

    if (grade >= 75) {
        cout << "Passed!";
    }
    else {
        cout << "Failed!";
    }

    return 0;
}`,
    [
      "if checks the first condition.",
      "else if checks additional conditions.",
      "else executes when previous conditions are false.",
      "Conditions are usually evaluated using comparison operators.",
    ],
  ),

  new Lesson(
    6,
    "Loops",
    "Understand how to repeat instructions using different loop structures.",
    "Intermediate",
    `Loops are used when you need to execute a block of code
        multiple times.

        C++ has three commonly used loop structures:
        for loop, while loop, and do-while loop.

        A for loop is commonly used when the number of repetitions
        is known. A while loop repeats while its condition is true.
        A do-while loop executes at least once.`,
    `#include <iostream>
using namespace std;

int main() {

    // FOR LOOP
    for (int i = 1; i <= 5; i++) {
        cout << i << endl;
    }

    // WHILE LOOP
    int x = 1;

    while (x <= 5) {
        cout << x << endl;
        x++;
    }

    // DO-WHILE LOOP
    int y = 1;

    do {
        cout << y << endl;
        y++;
    } while (y <= 5);

    return 0;
}`,
    [
      "for loops use initialization, condition, and update.",
      "while loops check the condition before execution.",
      "do-while loops execute at least once.",
      "Use loops to avoid repeating the same code manually.",
    ],
  ),

  new Lesson(
    7,
    "Arrays",
    "Learn how to store multiple values of the same data type.",
    "Intermediate",
    `An array is a collection of elements that have the same
        data type and are stored under one variable name.

        Each element is accessed using an index.

        In C++, array indexing starts at zero.
        This means the first element is at index 0.`,
    `#include <iostream>
using namespace std;

int main() {

    int numbers[5] = {10, 20, 30, 40, 50};

    cout << numbers[0] << endl;
    cout << numbers[1] << endl;

    for (int i = 0; i < 5; i++) {
        cout << numbers[i] << endl;
    }

    return 0;
}`,
    [
      "An array stores multiple values.",
      "Array elements share the same data type.",
      "Array indexing starts at zero.",
      "The array size determines how many elements it can hold.",
    ],
  ),

  new Lesson(
    8,
    "Functions",
    "Discover how to organize programs into reusable blocks of code.",
    "Intermediate",
    `A function is a block of code designed to perform a
        specific task.

        Functions help organize programs, reduce repeated code,
        and make programs easier to understand.

        A function can receive parameters and return a value.
        The void keyword indicates that a function does not return
        a value.`,
    `#include <iostream>
using namespace std;

// Function
void greet() {
    cout << "Welcome to C++ Corner!";
}

int add(int a, int b) {
    return a + b;
}

int main() {

    greet();

    cout << endl;
    cout << "Sum: " << add(5, 10);

    return 0;
}`,
    [
      "Functions organize code into reusable blocks.",
      "Parameters receive values.",
      "Arguments are the actual values passed to functions.",
      "return sends a value back to the caller.",
      "void means the function does not return a value.",
    ],
  ),
];

// ==========================================
// 4. GLOBAL VARIABLES
// ==========================================

let currentUser = null;
let currentLesson = null;

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

// ==========================================
// 5. WELCOME SCREEN AND USER LOGIN
// ==========================================

function startWebsite() {
  const nameInput = $("#userName");
  const name = nameInput.value.trim();

  if (!name) {
    alert("Please enter your name first! ♡");
    nameInput.focus();
    return;
  }

  currentUser = new User(name);

  localStorage.setItem("cppCornerUser", name);

  $("#welcomeScreen").classList.add("hidden");
  $("#mainWebsite").classList.remove("hidden");

  updateUserInformation();
  renderLessons();
  updateBookmarkInformation();

  showPage("homePage");
}

// ==========================================
// 6. UPDATE USER INFORMATION
// ==========================================

function updateUserInformation() {
  if (!currentUser) return;

  $("#headerGreeting").textContent = `Hello, ${currentUser.name}!`;

  $("#profileName").textContent = currentUser.name;

  $("#totalLessons").textContent = lessons.length;

  $("#totalBookmarks").textContent = currentUser.bookmarks.length;
}

// ==========================================
// 7. PAGE NAVIGATION
// ==========================================

function showPage(pageId) {
  $$(".page").forEach((page) => {
    page.classList.remove("active");
  });

  const selectedPage = document.getElementById(pageId);

  if (selectedPage) {
    selectedPage.classList.add("active");
  }

  $$(".nav-item").forEach((button) => {
    button.classList.remove("active");

    if (button.dataset.page === pageId) {
      button.classList.add("active");
    }
  });

  if (pageId === "userPage") {
    renderBookmarkedLessons();
    updateUserInformation();
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// ==========================================
// 8. DISPLAY LESSON CARDS
// ==========================================

function renderLessons() {
  const lessonGrid = $("#lessonGrid");

  lessonGrid.innerHTML = "";

  lessons.forEach((lesson) => {
    const isSaved = currentUser.isBookmarked(lesson.id);

    const card = document.createElement("article");

    card.className = "lesson-card";

    card.innerHTML = `
            <div class="lesson-card-top">

                <div class="lesson-number">
                    ${String(lesson.id).padStart(2, "0")}
                </div>

                <button
                    class="bookmark-btn ${isSaved ? "saved" : ""}"
                    aria-label="${isSaved ? "Remove bookmark" : "Bookmark lesson"}"
                    title="${isSaved ? "Remove bookmark" : "Save lesson"}"
                    onclick="toggleBookmark(${lesson.id})">

                    <i class="${
                      isSaved
                        ? "fa-solid fa-bookmark"
                        : "fa-regular fa-bookmark"
                    }"></i>

                </button>

            </div>

            <h3>${lesson.title}</h3>

            <p>${lesson.description}</p>

            <div class="lesson-card-bottom">

                <span class="lesson-level">
                    ${lesson.level}
                </span>

                <button class="open-lesson"
                    onclick="openLesson(${lesson.id})">

                    View Lesson
                    <i class="fa-solid fa-arrow-right"></i>

                </button>

            </div>
        `;

    lessonGrid.appendChild(card);
  });

  $("#lessonCount").textContent = `${lessons.length} Lessons`;

  updateBookmarkInformation();
}

// ==========================================
// 9. BOOKMARK FUNCTIONALITY
// ==========================================

function toggleBookmark(lessonId) {
  if (!currentUser) return;

  if (currentUser.isBookmarked(lessonId)) {
    currentUser.removeBookmark(lessonId);
  } else {
    currentUser.addBookmark(lessonId);
  }

  renderLessons();
  renderBookmarkedLessons();
  updateBookmarkInformation();
}

// ==========================================
// 10. UPDATE BOOKMARK COUNTS
// ==========================================

function updateBookmarkInformation() {
  if (!currentUser) return;

  const count = currentUser.bookmarks.length;

  $("#bookmarkCount").textContent = `${count} Saved`;

  $("#totalBookmarks").textContent = count;
}

// ==========================================
// 11. OPEN LESSON DETAILS
// ==========================================

function openLesson(lessonId) {
  const lesson = lessons.find((item) => item.id === lessonId);

  if (!lesson) return;

  currentLesson = lesson;

  const isSaved = currentUser.isBookmarked(lesson.id);

  const detail = $("#lessonDetail");

  detail.innerHTML = `
        <div class="lesson-detail-card">

            <span class="section-tag">
                LESSON ${String(lesson.id).padStart(2, "0")}
                • ${lesson.level.toUpperCase()}
            </span>

            <h1>${lesson.title.split(" ").slice(0, -1).join(" ")}
                <span>${lesson.title.split(" ").slice(-1)}</span>
            </h1>

            <p>${lesson.description}</p>

            <h2>Introduction</h2>

            <p>${lesson.explanation.replace(/\n/g, "<br>")}</p>

            <h2>Key Points to Remember</h2>

            <ul>
                ${lesson.keyPoints.map((point) => `<li>${point}</li>`).join("")}
            </ul>

            <div class="code-heading">
                <span>CODE EXAMPLE</span>

                <button class="copy-btn"
                    onclick="copyCode(${lesson.id})">

                    <i class="fa-regular fa-copy"></i>
                    Copy Code

                </button>
            </div>

            <pre class="code-box"><code>${escapeHTML(lesson.code)}</code></pre>

            <button
                class="primary-btn detail-bookmark"
                onclick="toggleBookmark(${lesson.id}); openLesson(${lesson.id})">

                <i class="${
                  isSaved ? "fa-solid fa-bookmark" : "fa-regular fa-bookmark"
                }"></i>

                ${isSaved ? "Remove Bookmark" : "Save This Lesson"}

            </button>

        </div>
    `;

  showPage("lessonDetailPage");
}

// ==========================================
// 12. ESCAPE HTML IN CODE EXAMPLES
// ==========================================

function escapeHTML(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// ==========================================
// 13. COPY CODE EXAMPLE
// ==========================================

async function copyCode(lessonId) {
  const lesson = lessons.find((item) => item.id === lessonId);

  if (!lesson) return;

  try {
    await navigator.clipboard.writeText(lesson.code);

    alert("Code copied successfully! ♡");
  } catch (error) {
    alert("Unable to copy. Please select and copy the code manually.");
  }
}

// ==========================================
// 14. DISPLAY BOOKMARKED LESSONS
// ==========================================

function renderBookmarkedLessons() {
  const container = $("#bookmarkedLessons");

  container.innerHTML = "";

  const savedLessons = lessons.filter((lesson) =>
    currentUser.bookmarks.includes(lesson.id),
  );

  if (savedLessons.length === 0) {
    container.innerHTML = `
            <div class="empty-message">

                <i class="fa-regular fa-bookmark"></i>

                <h3>No Bookmarked Lessons Yet</h3>

                <p>
                    You haven't saved any lessons.
                    Visit the Lessons page and bookmark your favorites!
                </p>

            </div>
        `;

    return;
  }

  savedLessons.forEach((lesson) => {
    const card = document.createElement("article");

    card.className = "lesson-card";

    card.innerHTML = `
            <div class="lesson-card-top">

                <div class="lesson-number">
                    ${String(lesson.id).padStart(2, "0")}
                </div>

                <button
                    class="bookmark-btn saved"
                    aria-label="Remove bookmark"
                    onclick="toggleBookmark(${lesson.id})">

                    <i class="fa-solid fa-bookmark"></i>

                </button>

            </div>

            <h3>${lesson.title}</h3>

            <p>${lesson.description}</p>

            <div class="lesson-card-bottom">

                <span class="lesson-level">
                    ${lesson.level}
                </span>

                <button class="open-lesson"
                    onclick="openLesson(${lesson.id})">

                    Review Lesson
                    <i class="fa-solid fa-arrow-right"></i>

                </button>

            </div>
        `;

    container.appendChild(card);
  });
}

// ==========================================
// 15. BACK BUTTON
// ==========================================

$("#backToLessons").addEventListener("click", () => {
  showPage("lessonsPage");
});

// ==========================================
// 16. BOTTOM NAVIGATION
// ==========================================

$$(".nav-item").forEach((button) => {
  button.addEventListener("click", () => {
    showPage(button.dataset.page);
  });
});

// ==========================================
// 17. LOGOUT / RETURN TO WELCOME SCREEN
// ==========================================

$("#logoutButton").addEventListener("click", () => {
  const confirmLogout = confirm(
    "Are you sure you want to return to the welcome screen?",
  );

  if (!confirmLogout) return;

  currentUser = null;

  localStorage.removeItem("cppCornerUser");

  $("#mainWebsite").classList.add("hidden");
  $("#welcomeScreen").classList.remove("hidden");

  $("#userName").value = "";

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// ==========================================
// 18. START BUTTON EVENT
// ==========================================

$("#startButton").addEventListener("click", startWebsite);

$("#userName").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    startWebsite();
  }
});

// ==========================================
// 19. LOAD SAVED USER WHEN PAGE OPENS
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
  const savedName = localStorage.getItem("cppCornerUser");

  if (savedName) {
    $("#userName").value = savedName;
  }
});
