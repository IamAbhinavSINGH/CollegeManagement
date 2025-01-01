const multer = require("multer");
const path = require("path");
const fs = require("fs");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const dir = "./media";
    // Create the directory if it doesn't exist
    fs.mkdirSync(dir, { recursive: true });
    cb(null, dir);
  },
  filename: function (req, file, cb) {
    let filename = "";
    if (req.body?.type === "timetable") {
      filename = `Timetable_${req.body.semester}_Semester_${req.body.branch}.png`;
    } else if (req.body?.type === "profile") {
      if (req.body.enrollmentNo) {
        filename = `Student_Profile_${req.body.enrollmentNo}_Semester_${req.body.branch}.png`;
      } else {
        filename = `Faculty_Profile_${req.body.employeeId}.png`;
      }
    } else if (req.body?.type === "material") {
      filename = `${req.body.title}_Subject_${req.body.subject}.pdf`;
    }
    cb(null, filename);
  }
});

const fileFilter = (req, file, cb) => {
  // Check file type and size here if needed
  cb(null, true);
};

const upload = multer({ 
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 20 * 1024 * 1024 // 5MB limit, adjust as needed
  }
});

module.exports = upload;

