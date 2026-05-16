export default function UserCard({ name, role }) {
    return (
        <div className="user-card">
            👤 <strong>{name}</strong> — <span className="role-badge">{role}</span>
        </div>
    );
}