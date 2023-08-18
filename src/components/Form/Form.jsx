import Button from '../Button/Button';
import './Form.css';
import { MdMessage } from 'react-icons/md';
import { BsTelephoneFill } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';

const Form = () => {
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
                <form>
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