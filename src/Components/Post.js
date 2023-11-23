
import { useEffect } from "react";
import {useSelector, useDispatch} from "react-redux"
import { post_fetch_error, post_fetch_success, post_fetching } from "../redux/action/postActions";
import axios from "axios"
const Post = () => {
    const {laoding , data , error} = useSelector((state) => state)
    const dispatch = useDispatch();

    useEffect(() => {
        handleFetching()
    },[])
    async function handleFetching () {
        try {
            dispatch(post_fetching())
            // let response = await axios.get
            let response = await axios.get("https://gauravgitacc.github.io/postAppData/posts.json")
            dispatch(post_fetch_success(response.data))
        } catch (error) {
            dispatch(post_fetch_error(error.message))
        }
    }
    return (<div>
        {
            data && data.map((item) => <div key={item.id}>
                <h2>{item.title}</h2>
                <p>{item.body}</p>
            </div>)
        }

    </div>)
}
export default Post