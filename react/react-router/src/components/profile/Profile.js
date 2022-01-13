import { useParams } from "react-router-dom";

const data = {
    curiosity: {
        name: 'Chanyoung Joo',
        description: 'endeavor'
    },
    cyjoo: {
        name: '주찬영',
        description: 'work!'
    }
};

const Profile = () => {
    const {username} = useParams();
    console.log(username);
    const profile = data[username];
    if(!profile) {
        return <div>user does not exist</div>
    }
    return (
        <div>
            <h3>
                {username}({profile.name})
            </h3>
            <p>{profile.description}</p>
        </div>
    )
};

export default Profile;