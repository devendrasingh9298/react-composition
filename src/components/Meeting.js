import Wrapper from './Wrapper';
import '../App.css';


function Meeting(){
    return(
        <div className='meeting-container'>
            <Wrapper>
                <div>
                    <h1>Next Lecture</h1>
                    <h1>Next Lecture</h1>
                </div>
            </Wrapper>
            <Wrapper>
                <div>
                    <h1>Join Meeting</h1>
                </div>
            </Wrapper>
            <Wrapper>
                <div>
                    <h1>MIA Portal</h1>
                </div>
            </Wrapper>

        </div>
    );
}

export default Meeting;