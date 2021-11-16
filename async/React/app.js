import axios from "axios";

const GetData =  async(id) => {
    const { data : user } = await axios(`https://jsonplaceholder.typicode.com/users/${id}`);
    const { data : post } = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);

    
    return {"userInformation":user,"userPosts":post}
}

export default GetData