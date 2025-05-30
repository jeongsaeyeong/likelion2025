import React, { useState } from 'react'
import Logo from '../../assets/img/section/logo_nav.svg'
import Ham from '../../assets/img/section/hamberger.svg'
import { Link } from 'react-router-dom'

const Nav = ({ thisW }) => {
    const [none, setNone] = useState('none');

    const onOff = () => {
        if (none === 'none') {
            setNone('on')
        } else {
            setNone('none');
        }
    }

    return (
        <>
            {thisW > 1000 ? (
                <div className='Nav_wrap_w'>
                    <Link to='/'>
                        <img src={Logo} alt="logo img" />
                    </Link>
                    <div>
                        <Link to='/recruit'>Recruit</Link>
                        <Link to='/people'>People</Link>
                        <Link to='/hackathon'>Hackathon</Link>
                        <Link to='/active/Active'>Activities</Link>
                        <Link to='/retrospection/Retrospection'>Retrospection</Link>
                    </div>
                </div>
            ) : (
                <div className={`Nav_wrap_m Nav_${none}`}>
                    <div className="nav_off">
                        <Link to='/'>
                            <h2>LIKELION UNIV <strong>SSWU</strong></h2>
                        </Link>
                        <button onClick={(() => { onOff() })}>
                            <img src={Ham} alt="navigation" />
                        </button>
                    </div>
                    <div className={`nav ${none}`}>
                        <Link to="/recruit" onClick={() => setNone('none')}>Recruit</Link>
                        <Link to="/people" onClick={() => setNone('none')}>People</Link>
                        <Link to="/hackathon" onClick={() => setNone('none')}>Hackathon</Link>
                        <Link to="/active/Active" onClick={() => setNone('none')}>Activities</Link>
                        <Link to="/retrospection/Retrospection" onClick={() => setNone('none')}>Retrospection</Link>
                    </div>
                </div>
            )}
        </>

    )
}

export default Nav