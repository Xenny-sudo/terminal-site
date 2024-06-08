# Terminal Site
A "portfolio" site that mimics a command line terminal built with base HTML, CSS, &amp; JS. Instead of traditional commands I made commands relevant to me: A bio, links, etc. The site isn't built to run on desktop/laptop screens.

The JS file contains an array of objects that can be altered to add more commands and one just has to add another case to the command switch statement. 

## Why Base JS?
I made this site as proof that I can make an application using base JS(Proving I know JS) as opposed to React or Svelte.

## Progress
I managed to get a textarea form that accepts input and that prints out the correct message for the input. When the form is submitted, a new line is placed below the last output.

However this is where I ran into a problem; The new form accepts text and creates new forms upon submission but doesn't run any of the functions it's suppose to run on submission. It also double the amount of forms that are created upon each submission. This is most likely due to the class names in the html file. Unlike jquery, base JS doesn't have an equivalent of clone so the eventlisteners aren't passed to the new form.

The cursor should look like a traditional terminal input but this wasn't done; This is only cosmetic but would enhance the feel of the site.

## Summary Report
For now I'm done with this project as I don't want to spend too much time on it and since one of the biggest flaws in it could easily be fixed by switching to jquery and using one of it's built-in functions.
