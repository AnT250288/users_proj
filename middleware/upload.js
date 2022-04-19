import multer from "multer";

export const storageConfig = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/uploads');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname)
    }
});

export const uploadFile = multer({storage: storageConfig}).single('JS')


/*
export const fileFilter = (req, file, cb) => {
    if (file.mimetype === "image/png" ||
        file.mimetype === "image/jpg" ||
        file.mimetype === "image/jpeg") {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

export const uploadFile = () => async (request, response, next) => {
    let fileData = request.file
    if (!fileData) {
        response.send("Error with downloading file")
    } else {
        response.send("File downloaded!")
    }
   // next()
}*/
