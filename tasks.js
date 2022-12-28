/**
 * Starts the application
 * This is the function that is run when the app starts
 *
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name) {
  process.stdin.resume();
  process.stdin.setEncoding("utf8");
  process.stdin.on("data", onDataReceived);
  console.log(`Welcome to ${name}'s application!`);
  console.log("--------------------");
}

/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 *
 * For example, if the user entered
 *
 * node tasks.js batata
 *
 *
 * The text received would be "batata"
 * This function  then directs to other functions
 *
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
  var createArray = text.split(" ");
  if (text === "quit\n" || text === "exit\n") {
    quit();
  } else if (createArray[0] === "hello" || text === "hello\n") {
    hello(text);
  } else if (text === "help\n") {
    help();
  } 
 
  else if(createArray[0]==="add"){
add(text,tasks);  
  }else if(text==="add\n"){
    error()
  }
else if(createArray[0]==="remove\n"|| "remove"){
  remove(text,tasks)
}

    else 
    unknownCommand(text);
}


/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c) {
  console.log('unknown command: "' + c.trim() + '"');
}

/**
 * Says hello
 *
 * @returns {void}
 */

function hello(t) {
  if (t === "hello\n") {
    console.log(t.replace("hello", "hello!"));
  } else {
    console.log(t.trim() + "!" + "\n");
  }
}

/**
 * Exits the application
 *
 * @returns {void}
 */
/**
 * help users to check available command
 */
function help() {
  console.log(
    "Command lines:\n",
    "hello:returns hello! \n",
    "hello+text:returns hello and any text you write next to it!\n",
    "quit or exit: quits the application\n",
    "add:allows to add a task",
    "remove || remove n:allows to remove the last task || remove a specified task",
    "help:help you understand all the commands"
  );
}

  var tasks=[
    'task 1:testing the software,\n',
    'task 2:little steps,\n',
    'task 3:string manipulation,\n',
    'task 4:additional commands,\n',
  ]

function add(item, tasks) {
  var itemN = item.substr('task 5:', item.length);
  tasks.push(itemN.trim());
  console.log(tasks+ '\n'+
    "task 5:Task created successfully\n'write list to list all your tasks' \n"
  );
}
function error() {
  console.log("\n----ERROR TRY AGAIN----\n");
}
function remove(item, tasks) {
  var arr = item.split(" ");
  if (item === "remove\n") {
    var task = tasks.pop();
    console.log("----" + task + " removed, check your list----\n");
  } else if (arr[1] > tasks.length) {
    console.log("your list has only " + tasks.length + " tasks");
    error();
  } else {
    task = tasks.splice(arr[1] - 1, 1);
    console.log("----item " + arr[1] + " removed, check your list---\n");
  }
}
/**
 * Exits the application
 *
 * @returns {void}
 */

function quit() {
  console.log("Quitting now, goodbye!");
  process.exit();
}

// The following line starts the application
startApp("Jihan Shamas");
