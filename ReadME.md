# Raw-IT
This would be our ECommerce Website. And here are some of the key notes.

## Guide to Github
- First, install and initialize git on your desktop.
- Then, open this repository https://github.com/Prakji2580/RAWIT using your GitHub Account.
- On top right of the screen, there would be a **fork** function. Click on it to fork(copy) the repository.
- A "Create a new fork" page opens. _**NOTE- Deselect the "Copy the main branch only" checkbox**_
- Once forked, you will be able to see a copy of repo in your account. Now you can play with this copy.
- Click on code button in green and **copy the url to clone** it on your own desktop.
- Now create or open a folder where you want to work.
- Here **open CMD**
- Type command "**git init**" to initialize the folder as git connected folder.
- Now type, "**git clone <URL THAT YOU COPIED>**" as "git clone https://github.com/Prakji2580/RAWIT.git". Now you will have all the data in your computer folder.
- Use cd command to get into the new folder created by git.
- You will be on the main branch, we don't want to work on main branch, if something wrong happens. Therefore type "**git switch development**"
- This will switch to development branch, Now you can start coding.
- Here you can see all the contents. Now edit whatever you want add files, delete files, edit, update.
- After editting you can type "**git add .**" to add all the files.
- Type '**git commit -m "<MESSAGE>"**' as "git commit -m "I created HomePage"
- Type '**git push origin development**' to push the changes to the server on development branch
That's it, you have successfully made changes on the website.

## Guide to ReactJS
- Make sure to **install node on your computer** and **add it in environment path**.
- Test it using cmd "**node --version**", if there are no errors. You are ready to go.
- You have cloned the work through git now get into the folder. Open CMD and type "**npm start**"
- Check if the website is running if not try typing "**npm init**" To initialize all the dependencies and modules downloaded.
- Then try npm start.
- You will get a link open it and there would be your website!