import React, { useEffect, useRef, useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import firebaseConfig from "../helper/firebaseStorage";
import { Container } from "react-bootstrap";

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

const StoreImage = () => {
  const [imgUrl, setImgUrl] = useState("");
  const [fileName, setFileName] = useState("");
  const [isError, setIsError] = useState(false);
  const [file, setFile] = useState(null);
  const [percentage, setPercentage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [retriveImg, setRetriveImg] = useState([]);

  const inputRef = useRef();

  const handleInputFile = (e) => {
    console.log(e.target.files[0]);
    let fileData = e.target.files[0];
    setFile(fileData);
  };

  const uploadFile = () => {
    setIsLoading(true);
    const storageRef = storage.ref();
    const folderName = "myimages";
    const fileName = file.name; // Use file.name instead of the separate state variable
    setFileName(fileName);
    const fileRef = storageRef.child(`${folderName}/${fileName}`);
    const uploadTask = fileRef.put(file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setPercentage(progress);
      },
      (error) => {
        setIsError(true);
        console.log(error);
      },
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then((url) => {
          setImgUrl(url);
        });
        setIsLoading(false);
        console.log("File uploaded successfully");
      }
    );
  };

  useEffect(() => {
    if (file) {
      setFileName(file.name);
    }
  }, [file]);

  const listImage = () => {
    const storageRef = storage.ref();
    const folderName = "myimages";
    const fileRef = storageRef.child(folderName).listAll();
    fileRef

      .then((res) => {
        const urls = res.items.map((item) => item.getDownloadURL());
        Promise.all(urls).then((downloadedUrl) => {
          setRetriveImg(downloadedUrl);
          console.log("Image retrieved successfully");
        });
      })
      .catch((error) => {
        setIsError(true);
        console.log(error);
      });
  };
  return (
    <>
      <Container>
        <h1 className="mt-5 mb-5 display-6 text-success ">
          Store Image in firebase Stoarage and <br/> retrive Image from Storage
        </h1>
        <input
          type="file"
          accept="image/*"
          ref={inputRef}
          onChange={handleInputFile}
          className="text-dark"
        />
        <button onClick={uploadFile} className="btn btn-success">
          Upload
        </button>
        <br />
        <br />
        {isLoading ? (
          <span>
            Loading...
            <div className="spinner-border text-info" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </span>
        ) : null}
        {imgUrl ? <img src={imgUrl} alt="images" width={400} /> : null}
        <br />
        <button className="btn btn-primary mt-3 mb-3" onClick={listImage}>
          Retrive Images
        </button>
        <br />
        {retriveImg.map((imageUrl, index) => (
          <img key={index} src={imageUrl} alt="img" width={200} />
        ))}
      </Container>
    </>
  );
};

export default StoreImage;
