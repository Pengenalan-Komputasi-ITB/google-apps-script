// This script help create multiple sheet based on a template and save it into a destination folder

const destinationFolder = DriveApp.getFolderById(
  "12Mg_bk8zFyYN5idKsjhZKKoMp36QJvvB"
);
const nonProgrammingDestinationFolder = DriveApp.getFolderById(
  "1kyWv1jJ6fVMp4kf92qUZP6MCIzFSMf5t"
);

const programmingScoreSheetTemplate = DriveApp.getFileById(
  "14n9YvMSkD0fuIi2cygRmZPr1qjj5rSBROrNtfRy4EBg"
);

const nonProgrammingScoreSheetTemplate = DriveApp.getFileById(
  "1k5kmfF3wdrOmdGCLFI8hwdd3IaX3rvQqEoe_DJwxOls"
);

const programmingClassMap = {
  "1.3": ["A", "B", "C", "D", "E", "F", "G", "H", "I"],
  "1.4": ["A", "B", "C", "D"],
  "1.5": ["A"],
  "3.1": ["A", "B", "C"],
  "3.4": ["A"],
  "3.5": ["A", "B", "C", "D"],
  "4.5": ["A", "B"],
  "5.1": ["A", "B", "C", "D", "E"],
  "5.2": [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
  ],
  "5.3": ["A", "B"],
  "5.4": ["A", "B"],
};

const nonProgrammingClassMap = {
  "1.2": ["A"],
  "3.5": ["E"],
  "5.1": ["F", "G", "H", "I", "J"],
  "5.4": ["A", "B", "C", "D", "E"],
  "5.5": ["A", "B", "C", "D"],
};

function duplicateScoreSheet() {
  let textOutput = "\n";

  for (const key in programmingClassMap) {
    let shiftName = key;
    let classes = programmingClassMap[shiftName];

    if (!classes) {
      continue;
    }

    for (var classIdx = 0; classIdx < classes.length; classIdx++) {
      let className = classes[classIdx];
      let fullSheetName = shiftName + "-" + className;

      let newScoreSheet = programmingScoreSheetTemplate.makeCopy(
        fullSheetName,
        destinationFolder
      );
      newScoreSheet.setSharing(
        DriveApp.Access.ANYONE_WITH_LINK,
        DriveApp.Permission.EDIT
      );

      let scoreSheetURL = newScoreSheet.getUrl();
      textOutput = textOutput + fullSheetName + "," + scoreSheetURL + "\n";
    }
  }

  Logger.log(textOutput);
}

function duplicateNonProgrammingScoreSheet() {
  let textOutput = "\n";

  for (const key in nonProgrammingClassMap) {
    let shiftName = key;
    let classes = nonProgrammingClassMap[shiftName];

    if (!classes) {
      continue;
    }

    for (var classIdx = 0; classIdx < classes.length; classIdx++) {
      let className = classes[classIdx];
      let fullSheetName = shiftName + "-" + className;

      let newScoreSheet = nonProgrammingScoreSheetTemplate.makeCopy(
        fullSheetName,
        destinationFolder
      );
      newScoreSheet.setSharing(
        DriveApp.Access.ANYONE_WITH_LINK,
        DriveApp.Permission.EDIT
      );

      let scoreSheetURL = newScoreSheet.getUrl();
      textOutput = textOutput + fullSheetName + "," + scoreSheetURL + "\n";
    }
  }

  Logger.log(textOutput);
}
