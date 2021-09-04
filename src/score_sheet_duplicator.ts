// This script help create multiple sheet based on a template and save it into a destination folder

const destinationFolder = DriveApp.getFolderById("1cxJcMS1xCHQVr9fUFPEnNQ--_EO6wR5X");
const scoreSheetTemplate = DriveApp.getFileById("1BKXfN9I9_T0DfMG58swDKWVqWGHVlyQLKCHdsIfsYMw");

const shifts = ["1.1", "1.3", "1.4", "2.1", "2.2", "2.3", "3.1", "3.2", "3.3", "3.4", "4.1", "4.3", "4.4", "5.1", "5.3", "5.4"];

const classesMap = {};
classesMap["1.1"] = ["A", "B", "C", "D", "E", "F", "G"]
classesMap["1.3"] = ["A", "B", "C", "D"]
classesMap["1.4"] = ["A", "B"]
classesMap["2.1"] = ["A", "B", "C", "D"]
classesMap["2.3"] = ["A", "B", "C", "D", "E", "F"]
classesMap["3.1"] = ["A", "B", "C", "D"]
classesMap["3.2"] = ["A", "B"]
classesMap["3.3"] = ["A", "B", "C"]
classesMap["3.4"] = ["A", "B", "C"]
classesMap["4.1"] = ["A", "B", "C", "D"]
classesMap["4.3"] = ["A", "B", "C", "D", "E"]
classesMap["4.4"] = ["A", "B"]
classesMap["5.3"] = ["A", "B", "C", "D"]
classesMap["5.4"] = ["E", "F"]


function duplicateScoreSheet() {
    let textOutput = "\n";

    for (var shiftIdx = 0; shiftIdx < shifts.length; shiftIdx++) {
        let shiftName = shifts[shiftIdx];
        let classes = classesMap[shiftName];

        if (!classes) {
            continue;
        }

        for (var classIdx = 0; classIdx < classes.length; classIdx++) {
            let className = classes[classIdx];
            let fullSheetName = shiftName + "-" + className;

            let newScoreSheet = scoreSheetTemplate.makeCopy(fullSheetName, destinationFolder);
            newScoreSheet.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.EDIT);

            let scoreSheetURL = newScoreSheet.getUrl();
            textOutput = textOutput + fullSheetName + "," + scoreSheetURL +"\n";
        }
    }

    Logger.log(textOutput);
};
