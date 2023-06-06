import "./newProduct.css";
import { doc, serverTimestamp, setDoc} from "firebase/firestore";
import { auth, db, storage } from "../../firebase";
import { useEffect, useState } from "react";
import { productRows } from "../../dummyData";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export default function NewProduct() {
  const[file,setFile] = useState("");
  const[data,setData] = useState({});

  useEffect(()=>{
   const uploadFile =()=>{
    const name = new Date().getTime() + file.name
    const storageRef = ref(storage,file.name);
    const uploadTask = uploadBytesResumable(storageRef, file);


uploadTask.on('state_changed', 
  (snapshot) => {
    
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
        default:
          break;
    }
  }, 
  (error) => {
    console.log(error)
  }, 
  () => {
   
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      setData((prev)=>({...prev, img:downloadURL}))
    });
  }
);

   };
file && uploadFile();
  },[file])

  const handleInput = (e) => {
   const id = e.target.id;
   const value = e.target.value;

   setData({...data, [id]:value});
  };


 const handleAdd = async(e) =>{
   e.preventDefault()
   try{
   const res = await createUserWithEmailAndPassword(auth,
     data.email,
     data.password);
   await setDoc(doc(db, "users", res.user.uid), {
     ...data,
     timeStamp: serverTimestamp()

     
   });
 }catch(err){
   console.log(err)
 }
    };

  

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm" onSubmit={handleAdd}>
        <div className="addProductItem">
          <label>Image</label>
          <input type="file" id="file" />
        </div>
        <div className="addProductItem">
          <label>Name</label>
          <input id={productRows.id} type="text" placeholder="Apple Airpods" onChange={handleInput} />
        </div>
        <div className="addProductItem">
          <label>Stock</label>
          <input type="text" placeholder="123" />
        </div>
        <div className="addProductItem">
          <label>Active</label>
          <select name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="addProductButton"  type="submit">Create</button>
      </form>
    </div>
  );
}
