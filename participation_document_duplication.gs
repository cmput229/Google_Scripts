/*
 * Automatic google file duplication and renaming.
 * Fillout variables and run the duplicate function.
 *
 * Author: Giancarlo Pernudi Segura
 * Email: pernudi@ualberta.ca
 * Date: May 3, 2021
 **/

// ASSUMPTION: The name of the folder is unique.
const FOLDER = ""
// ASSUMPTION: The name of the template file is unique.
const FILENAME = ""
const GROUPS_N = 0
// Files will be "Room [n]: [OUTPUT_FILENAME]"
const OUTPUT_FILENAME = ""
const SHARE_WITH = []

function duplicate() {
  console.info(`Using folder: ${FOLDER}`)
  const root = getFolder(FOLDER)
  if (root === null) return

  console.info(`Using file: ${FILENAME}`)
  const template = getTemplateFile(root, FILENAME)
  if (template === null) return

  for (let i = 1; i <= GROUPS_N; i++) {
    // Duplicate template file
    template.makeCopy(`Room ${i}: ${OUTPUT_FILENAME}`)
  }

  // Share the folder
  console.info(`Sharing with: ${SHARE_WITH}`)
  share(root)
}

function getFolder(folder) {
  const folder_results = DriveApp.getFoldersByName(folder)
  if (!folder_results.hasNext()) {
    console.error("Folder not found. Try checking for correct spelling or correct account.")
    return null
  }
  return folder_results.next()
}

function getTemplateFile(folder, filename) {
  const file_results = folder.getFilesByName(filename)
  if (!file_results.hasNext()) {
    console.error("File not found. Try checking for correct spelling or correct account.")
    return null
  }
  return file_results.next()
}

function share(folder) {
  folder.addEditors(SHARE_WITH)
}
