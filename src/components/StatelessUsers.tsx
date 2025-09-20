import type { UserInterface } from "../types/User.interface";

const StatelessUsers = ({ users }: { users: UserInterface[] }) => {
  return (
    <ul className="list-unstyled">
      {users.map(({ id, name, email }) => (
        <li key={id} className="mb-3">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text text-muted">{email}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default StatelessUsers;
