export default function UserCard() {
  return (
    <div className="user-card-container">
      <div className="user-card">
        <img src="image-jeremy.png" alt="The image of the user" className="user-card-image"/>
        <div className="user-card-info">
          <p>Report for</p>
          <p>Jeremy Robson</p>
        </div>

      </div>
      <div className="user-card-controls">
        <span className="link">Daily</span>
        <span className="link active">Weekly</span>
        <span className="link">Monthly</span>

      </div>

    </div>
  )
}