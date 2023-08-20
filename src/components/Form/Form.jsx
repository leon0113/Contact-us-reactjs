import Button from '../Button/Button';
import './Form.css';
import { MdMessage } from 'react-icons/md';
import { BsTelephoneFill } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { useState } from 'react';

const Form = () => {

    const [name, setName] = useState(' ')
    const [email, setEmail] = useState(' ');
    const [text, setText] = useState(' ')

    const onSubmit = (event) => {
        event.preventDefault();

        setName(event.target[0].value);
        setEmail(event.target[1].value);
        setText(event.target[2].value);
    }

    return (
        <section className='content'>
            {/* button section  */}
            <div className='buttons'>
                <div className='top_btn'>
                    <Button text='VIA SUPPORT CHAT' icon={<MdMessage fontSize='24px' />} />
                    <Button text='VIA CALL' icon={<BsTelephoneFill fontSize='24px' />} />
                </div>
                <Button
                    isSecondary={true}
                    text='VIA EMAIL FORM'
                    icon={<AiOutlineMail fontSize='24px' />}
                />

                {/* form section  */}
                <form onSubmit={onSubmit}>
                    <div className="form_container">
                        <label htmlFor="name">Name</label>
                        <input type="text" name='name' />
                    </div>
                    <div className="form_container">
                        <label htmlFor="email">Email</label>
                        <input type="text" name='email' />
                    </div>
                    <div className="form_container">
                        <label htmlFor="text">Text</label>
                        <textarea type="text" name='text' rows="10" />
                    </div>
                    <div className='submit_btn'>
                        <Button text='SUBMIT' />
                    </div>
                    <div>
                        <p>{`Name: ${name}`}</p>

                        <p>{`Email: ${email}`}</p>

                        <p>{`Text: ${text}`}</p>
                    </div>
                </form>
            </div>



            {/* images section  */}
            <div className='image'>
                <img src="/images/Service 24_7-pana 1.svg" alt="" />
            </div>
        </section>
    );
};

export default Form;