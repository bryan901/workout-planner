import './Header.css';

function Header() {
    let title = 'Workout Planner';
    return (
        <div className='header'>
            <div className='title-text'>{title}</div>
        </div>
    );
  }
  
export default Header;