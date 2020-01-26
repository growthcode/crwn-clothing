import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import sections from './sections-data';

export default class Directory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: sections,
    }
  }

  render() {
    return (
      <div className='directory-menu'>
        {
          this.state.sections.map(({title, imageUrl, id, size}) => {
            return <MenuItem key={id}
                             title={title}
                             imageUrl={imageUrl}
                             size={size} />
          })
        }
      </div>
    );
  }
}
