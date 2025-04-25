import React, { useEffect, useState } from 'react';
import { fetchData, createQueryString } from '../../utils/api';
import { User } from './types';
import { UserCard } from './UserCard';

export const UserList: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const params = createQueryString({
            page: String(page),
            limit: '10'
        });
        
        fetchData<User[]>(`/users?${params}`)
            .then(response => {
                if ('data' in response) {
                    setUsers(response.data);
                }
            });
    }, [page]);

    return (
        <div className="user-list">
            {users.map(user => (
                <UserCard key={user.id} user={user} />
            ))}
        </div>
    );
}; 