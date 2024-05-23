/**
 * TODO
 * Add reintro of elements after a command is called
 * Finish Email Func
 */

/* ********** GLOBAL VARS START ********** */
const terminal = document.querySelector(".terminal");
const terminalCpy = document.querySelector(".terminal").innerHTML;
const textarea = document.querySelector("#command");

console.log(terminal)
// History is an array where I will push all commands entered into
const history = [];
let ctr = -1; // This is too iterate thru history

// A single object to store all possible commands+outputs
const myData = {
  commandList: [
    { command: "whoami", desc: `A description of the creator of this site.` },
    { command: "links", desc: `All my social links.` },
    { command: "email", desc: `Send an email.` },
    { command: "help", desc: `Display all possible commands.` },
  ],
  bio: [
    {
      desc: "I'm currently a data analyst with experience in data science, SQL, Python, & R but am branching out to web development which has given me experience in JavaScript/TypeScript, React, & HTML/CSS. I also have some experience in C & Rust. Go to my GitHub link under the links command to see my portfolio",
    },
  ],
  links: [
    { link: "https://github.com/Xenny-sudo" }, // Edit this out with a hashtag when uploaded to GitHub
    { link: "https://www.linkedin.com/in/benny-hernandez-/" },
  ],
};

/* ********** GLOBAL VARS END ********** */

const sendEmail = (domVar) => {
  // Unknown
  return 0;
};

// Outputs command response to DOM
const command = (cmd) => {
  // I need to clear out both printOut and div
  const printOut = document.querySelector(".printout");
  const div = document.createElement("div");
  const span = document.createElement("span")
  let arr; // Temp value to map out arrays

  printOut.innerHTML = ""; // Resets printOut so that only one cmd is visible at a time
  switch (cmd.toLowerCase()) {
    case "whoami":
      div.innerHTML = `<br>${myData.bio[0].desc}<br><br>`;
      printOut.append(div);
      span.innerHTML = `whoami`;
      textarea.replaceWith(span);
      break;
    case "links":
      arr = myData.links.map((x) => {
        return x.link;
      });
      for (let i = 0; i < arr.length; i++) {
        div.innerHTML += `<br><a href="${arr[i]}" target="_blank">${arr[i]}</a><br>`;
      }
      printOut.append(div);
      span.innerHTML = `links`;
      textarea.replaceWith(span);
      break;
    case "email":
      //Still need to do this
      // sendEmail(div);
      printOut.append(`Coming soon`);
      span.innerHTML = `email`;
      textarea.replaceWith(span);
      break;
    case "help":
      arr = myData.commandList.map((x) => {
        return x.command.toUpperCase() + "\t" + x.desc;
      });
      for (let i = 0; i < arr.length; i++) {
        div.innerHTML += `<br>${arr[i]}<br>`;
      }
      printOut.append(div);
      span.innerHTML = `help`;
      textarea.replaceWith(span);
      break;

    case "clear":
      window.location.reload();
      break;

    default:
      div.innerHTML += `<br>${cmd} is not recognized as a command.`;
      printOut.append(div);
      span.innerHTML = `${cmd}`;
      textarea.replaceWith(span);
    }
};

//Func to read keystrokes from form
const submitOn = (e) => {
  let textareaValue;
  // Checks that enter is pressed; If key is held down, input isn't read
  const newEvent = new Event("button", { cancelable: true });
  e.target.form.dispatchEvent(newEvent);

  if (!e.repeat){
    switch (e.key) {
      case "Enter":
        // Textarea input+a check to make sure form isn't empty
        textareaValue = e.target.value;
        if (textareaValue != "") {
          command(textareaValue);
          history.push(textareaValue);
        }
        terminal.innerHTML+=(terminalCpy);
        break;
      case "ArrowUp":
        if (history.length === 0) break;
        ctr = ctr >= (history.length-1) ? (history.length - 1) : (ctr += 1);
        textarea.value = history[(history.length - 1) - ctr];
        break;
      case "ArrowDown":
        if (history.length === 0) break;
        ctr = ctr <= 0 ? 0 : (ctr -= 1);
        textarea.value = history[(history.length - 1) - ctr];
        break;
      default:
        break;
    }
  }
};

main = () => {
  // This makes it so that cursor auto-starts in textarea
  // textarea.focus();
  // textarea.select();
  textarea.addEventListener("keydown", submitOn);
};

main();
