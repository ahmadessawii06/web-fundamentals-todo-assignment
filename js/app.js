// File: js/app.js
// Student: Ahmad Essawii (12429664)
// This file is intentionally incomplete.
// Your task is to implement the required behaviour using JavaScript and the Fetch API.

/*
  API ENDPOINTS (already implemented on the server):

  Base URL:
    http://portal.almasar101.com/assignment/api

  1) Add task  (POST)
     add.php?stdid=STD_ID&key=API_KEY
     Body (JSON): { "title": "Task title" }
     Returns JSON with the added task.

  2) Get tasks (GET)
     get.php?stdid=STD_ID&key=API_KEY
     - If "id" is omitted: returns all tasks for this student.
     - If "id=NUMBER" is provided: returns one task.

  3) Delete task (GET or DELETE)
     delete.php?stdid=STD_ID&key=API_KEY&id=TASK_ID
     Deletes the task with that ID for the given student.
*/

// Configuration for this student (do not change STD_ID value)
const STD_ID = "12429664";
const API_KEY = "nYs43u5f1oGK9";
const API_BASE = "https://portal.almasar101.com/assignment/api";

// Grab elements from the DOM
const form = document.getElementById("task-form");
const input = document.getElementById("task-input");
const statusDiv = document.getElementById("status");
const list = document.getElementById("task-list");

/**
 * Helper to update status message.
 * You can use this in your code.
 */
function setStatus(message, isError = false) {
  if (!statusDiv) return;
  statusDiv.textContent = message || "";
  statusDiv.style.color = isError ? "#d9363e" : "#666666";
}

/**
 * TODO 1:
 * When the page loads, fetch all existing tasks for this student using:
 *   GET: API_BASE + "/get.php?stdid=" + STD_ID + "&key=" + API_KEY
 * Then:
 *   - Parse the JSON response.
 *   - Loop over the "tasks" array (if it exists).
 *   - For each task, create an <li> with class "task-item"
 *     and append it to #task-list.
 */
document.addEventListener("DOMContentLoaded", async function () {
  setStatus("Loading tasks...");

  const url = `${API_BASE}/get.php?stdid=${encodeURIComponent(
    STD_ID
  )}&key=${encodeURIComponent(API_KEY)}`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    if (!data.success) {
      return setStatus("Failed to load tasks", true);
    }

    list.innerHTML = "";

    if (Array.isArray(data.tasks)) {
      data.tasks.forEach((task) => appendTaskToList(task));
    }

    setStatus("Tasks loaded successfully");
  } catch (error) {
    setStatus(error.message, true);
  }
});

/**
 * TODO 2:
 * When the form is submitted:
 *   - prevent the default behaviour.
 *   - read the value from #task-input.
 *   - send a POST request using fetch to:
 *       API_BASE + "/add.php?stdid=" + STD_ID + "&key=" + API_KEY
 *     with headers "Content-Type: application/json"
 *     and body JSON: { title: "..." }
 *   - on success, add the new task to the DOM and clear the input.
 */
if (form) {
  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const title = input.value;
    setStatus("Adding task...");

    const url = `${API_BASE}/add.php?stdid=${encodeURIComponent(
      STD_ID
    )}&key=${encodeURIComponent(API_KEY)}`;

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title }),
      });

      const data = await res.json();

      if (!data.success) {
        return setStatus(data.message, true);
      }

      appendTaskToList(data.task);
      input.value = "";
      setStatus("Task added successfully!");
    } catch (error) {
      setStatus(error.message, true);
    }
  });
}

/**
 * TODO 3:
 * For each task that you render, create a "Delete" button.
 * When clicked:
 *   - send a request to:
 *       API_BASE + "/delete.php?stdid=" + STD_ID + "&key=" + API_KEY + "&id=" + TASK_ID
 *   - on success, remove that <li> from the DOM.
 */
function appendTaskToList(task) {
  const li = document.createElement("li");
  li.className = "task-item";

  const span = document.createElement("span");
  span.textContent = task.title;

  const del = document.createElement("button");
  del.textContent = "Delete";
  del.className = "delete-btn task-delete";


  del.addEventListener("click", () => deleteTask(task.id, li));

  li.appendChild(span);
  li.appendChild(del);

  list.appendChild(li);
}

async function deleteTask(id, liElement) {
  if (!confirm("Delete this task?")) return;

  setStatus("Deleting...");

  const url = `${API_BASE}/delete.php?stdid=${encodeURIComponent(
    STD_ID
  )}&key=${encodeURIComponent(API_KEY)}&id=${id}`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    if (!data.success) {
      return setStatus(data.message, true);
    }

    liElement.remove();
    setStatus("Task deleted.");
  } catch (err) {
    setStatus(err.message, true);
  }
}
