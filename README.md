# Google Scripts
Contact: Giancarlo Pernudi Segura (pernudi@ualberta.ca)

# Instructions
## participation_document_duplication.gs
You'll be using using your UAlberta GSuite account for these instructions.
### Setup
You can skip this part if you already have a folder and file you want to duplicate.
1. Go to [Google Drive](https://drive.google.com/drive/).
2. Create a new folder and give it a unique name not used elsewhere.
3. In that folder you've created, create a new document of any type and give it a unique name.
4. Now you can edit that file you've created and populate it with content.
### Run
**Assumption**: You have a folder with a template document created. If not, go to the [previous section](#Setup).
1. Go to https://script.google.com/home and create a new project.
![step 1 screenshot](docs/img/step1.png)
2. You'll notice you get a code editor with some code on it.
![step 2 screenshot](docs/img/step2.png)
```js
function myFunction() {
  
}
```
3. Download this repository by clicking on the green dropdown button and then selecting the ZIP option.
![step 3 screenshot](docs/img/step3.png)
4. Once downloaded, you can extract the zip folder.
5. Open the folder you've downloaded, and open the file called `participation_document_duplication.gs` with a text editor (notepad if on Windows or TextEdit on macOS).
6. Copy everything from that file and paste it into the code editor on Google App Script.
7. Fill out the parameters at the top with the values you want. Reference [the parameters table](#Parameters).
![step 7 screenshot](docs/img/step7.png)
8. Once you've filled out the parameters, select duplicate from the dropdown menu at the top.
![step 8 screenshot](docs/img/step8.png)
9. Now click run.
![step 8 screenshot](docs/img/step9.png)
10. A log at the bottom will open up with progress. If any errors occur, it will notify you via the logs.
11. Once it says *Execution completed*, you can look at your folder with all the new files it has created.
### Parameters
PARAMETER NAME|DESCRIPTION|TYPE|EXAMPLE|
---|---|---|---
FOLDER|The name of the folder you want to use. Must contain the template file you wish to duplicate.|String|`"test folder"`
FILENAME|The name of the template file you wish to duplicate.|String|`"template file"`
GROUPS_N|The number of duplications you want to create.|Number|`15`
OUTPUT_FILENAME|The output name of the duplicated folder. Ouptut will be of format: `Room {x}: {OUTPUT_FILENAME}`.|String|`"Jan 2 Exercise"`
SHARE_WITH|A list of emails you wish to share the folder with. Users will be given Editor access.|[String]|`["pernudi@ualberta.ca", "jamaral@ualberta.ca"]` or `[]` (if don't want to share)
