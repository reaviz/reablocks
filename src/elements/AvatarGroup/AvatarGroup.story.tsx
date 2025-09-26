import React from 'react';

import { Avatar } from '../Avatar';
import { AvatarGroup } from './AvatarGroup';

export default {
  title: 'Components/Elements/Avatar Group',
  component: AvatarGroup,
};

export const Basic = () => (
  <AvatarGroup>
    {[...Array(32).keys()].map(idx => {
      if (idx % 3 === 0) {
        return (
          <Avatar
            key={idx}
            size={24}
            rounded
            src="https://lh3.googleusercontent.com/a-/AAuE7mAtQVUnylKNBtevO2lU0S-a4X-nu0IwMIyVl0Qe"
          />
        );
      } else if (idx % 3 === 1) {
        return <Avatar rounded key={idx} size={24} name="Austin McDaniel" />;
      } else {
        return (
          <Avatar key={idx} rounded size={24} name="amcdaniel2@gmail.com" />
        );
      }
    })}
  </AvatarGroup>
);
