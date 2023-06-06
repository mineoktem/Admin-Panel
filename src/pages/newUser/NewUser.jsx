import "./newUser.css";
import { doc, serverTimestamp, setDoc} from "firebase/firestore";
import { auth, db } from "../../firebase";
import { useState } from "react";
import { userRows } from "../../dummyData";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function NewUser() {

  const[data,setData] = useState({});

   const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setData({...data, [id]:value});
   };

   console.log(data);

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
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm" onSubmit={handleAdd}>
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" placeholder="john" />
        </div>
        <div className="newUserItem">
          <label>Full Name</label>
          <input id={userRows.id} type="text" placeholder="John Smith" onChange={handleInput}/>
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="john@gmail.com" />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="password" placeholder="password" />
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input type="text" placeholder="+1 123 456 78" />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder="New York | USA" />
        </div>
        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Other</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Active</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newUserButton" type="submit">Create</button>
      </form>
    </div>
  );
}
