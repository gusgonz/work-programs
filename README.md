# work-programs
helpful programs to make manual tasks at work less miserable


## sql-helper-script

This program helps my teammates and me turn a long list of text (used initially for a list of 500 emails) into copy-paste executable sql queries for manual data insert/updating to production data tables


First Step: Turn list of emails into a useable form for an array. 
- Add list of emails to a .txt file
- Use VS Code find/replace feature using Regex on said file
- Find (regex): (.+)
- Replace (regex): '$1',
- Make sure to remove the final comma at the end of the .txt file

Next Step: Copy the content of the file and paste it into the empty emails array at the bottom of the script

Next Step: Set the chuck size if you want to chunk out the sql queries to a specified size

Finally: Run 'node sql_helper_script.js' to get your SQL query output as well as the count of affected items for quick sanity check validation after running command