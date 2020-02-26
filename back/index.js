const express = require('express');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, './public'))); // <-- location of public dir


const multerStorage = multer.diskStorage({
	  destination: path.join( __dirname, './public/images'),
	  filename: (req, file, cb) => {
		      const { fieldname, originalname } = file
		      const date = Date.now()
		      // filename will be: image-1345923023436343-filename.png
		      const filename = `${fieldname}-${date}-${originalname}` 
		           cb(null, filename)
		             }
		            });
const upload = multer({ storage: multerStorage  });
		 

app.get('/', (req, res, next)=>{
	res.send("ok");
});

app.post('/createContact',upload.single('image'), (req, res, next)=>{
	console.log(req.body.name, req.body.email, req.file.filename);
	res.send("yay");
});



app.listen(8080, ()=>{console.log('Listening on port 8080!')});
