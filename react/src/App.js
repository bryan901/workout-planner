import './App.css';

function App() {

  return (
    <div>
      <div className='header'>
        <div className='title-text'>{title}</div>
      </div>
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

                    <label htmlFor='days'>{prompt}</label>
                    <select name='days' id='days'>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                        <option value='6'>6</option>
                        <option value='7'>7</option>
                    </select>

                    <input type='submit' value='Submit'/>
                </form>
            </div>
        </div>
    </div>
  );
}

export default App;
