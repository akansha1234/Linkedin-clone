import React,{useState,useEffect} from 'react';
import './Feed.css';
import FeedInput from './FeedInput'
import CreateIcon from '@material-ui/icons/Create';
import Imageicon from '@material-ui/icons/Image';
import Subscriptionsicon from '@material-ui/icons/Subscriptions';
import EventNoteicon from '@material-ui/icons/EventNote';
import CalendarViewDayicon from '@material-ui/icons/CalendarViewDay';
import Posts from './Posts';
import {db} from './firebase';
import firebase from 'firebase';
import {useSelector} from 'react-redux';
import { selectUser } from './features/userSlice';
function Feed() {
    const user=useSelector(selectUser);
    const [input,setInput]=useState('');
    const [posts,setPosts]=useState([]);
    useEffect(()=>{
        db.collection("posts").onSnapshot((snapshot)=>
        setPosts(
            snapshot.docs.map(doc=>(
                {
                     id:doc.id,
                     data:doc.data(),
                }
            ))
        )
        );
    },[])
const handleChange=(e)=>{
    setInput(e.target.value)
}
const sendInput=(e)=>{
    e.preventDefault();
    db.collection("posts").add({
        name:user.displayName,
        description:user.email,
        message:input,
        photourl:user.photoUrl || '',
        // timestamp:firebase.firestore.FieldValue.serverTimeStamp(),
    })
    setInput("");
}
    return (
        <div className="feed">
            <div className="feed-inputContainer">
                <div className="feed-input">
                     <CreateIcon/>
                     <form>
                     <input type="text" value={input} onChange={handleChange}/>
                     <button type="submit" onClick={sendInput}>Send</button>
                     </form>
                </div>
                <div className="feed-inputOption">
                    <FeedInput Icon={Imageicon} title={"Photo"} color="#78BF59"/>
                    <FeedInput Icon={Subscriptionsicon} title={"Video"} color="#E7A33E"/>
                    <FeedInput Icon={EventNoteicon} title={"Goal"} color="#C0CBCD"/>
                    <FeedInput Icon={CalendarViewDayicon} title={"Write Article"} color="#7FC15E"/>
                </div>
            </div>
            {/* Posts */}
            {posts.map(({id,data:{ name , description , message,photourl}})=>(
                <Posts
                key={id}
                name={name}
                description={description}
                message={message}
                photourl={photourl}
                />
            ))}
            
        
        </div>
    )
}

export default Feed
