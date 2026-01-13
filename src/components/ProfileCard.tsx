type ProfileCardProps = {
    name: string,
    year: number,
    job?: string
}

const ProfileCard = (props: ProfileCardProps) => {
    return (
        <div className="card">
            <p>Name: {props.name}</p>
            <p>Birth Year: {props.year}</p>
            {props.job && <p>Job: {props.job}</p>}
        </div>
    );
};


export default ProfileCard;
