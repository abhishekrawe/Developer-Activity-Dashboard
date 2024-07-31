// components/UserDetail.tsx
import React from 'react';
import { useParams } from 'react-router-dom';

const UserDetail: React.FC = () => {
    const { name } = useParams<{ name: string }>();

    return (
        <div>
            <h1>User Details</h1>
            <p>User Name: {name}</p>
        </div>
    );
};

export default UserDetail;
