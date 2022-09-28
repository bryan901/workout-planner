import './Sport.css';

function Sport() {
    let prompt = 'Select your sport: ';

    return (
        <div className='header'>
            <div className='title-text'>
                <form action='#'>
                    <label htmlFor='sport'>{prompt}</label>
                    <select name='sport' id='sport'>
                        <option value='soccer'>Soccer</option>
                        <option value='volleyball'>Volleyball</option>
                        <option value='football'>Football</option>
                        <option value='basketball'>Basketball</option>
                    </select>
                    <input type='submit' value='Submit'/>
                </form>
            </div>
        </div>
    );
  }
  
export default Sport;