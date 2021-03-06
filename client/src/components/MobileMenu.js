import React, { useState } from 'react';
import { AuthConsumer, } from "../providers/AuthProvider";
import { Link, withRouter, } from 'react-router-dom';
import home from "../images/internet-white.png";
import clipboard from "../images/clipboardsWhite.png";
import logout from "../images/uiWhite.png"
import userWhite from "../images/userWhite.png"

const MobileMenu = (props) => {

  const [showMenu, setShowMenu] = useState(false)

  const displayMenu = () => {
    setShowMenu(!showMenu);
  }

  const { auth: { user, handleLogout, } } = props;
  return (
    <>
      <div className="mobile-menu" onClick={displayMenu} >
        {
          showMenu
            ? (
              <>
                <div className="menu">
                  <svg
                    className="menu-svg toggle"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24">
                    <path
                      fill="none"
                      d="M0 0h24v24H0V0z"
                    />
                    <path
                      d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z"
                    />
                  </svg>
                  <ul className="dropdown">
                    <div className="arrow-up"></div>
                    <Link to="/">
                    <svg 
                      className="mobile-icon" 
                      xmlns="http://www.w3.org/2000/svg"
	                    viewBox="0 0 512 512" 
                    >
                    <g>
                      <g>
                        <path d="M421,194.231V56.085h-90v48.52l-75-74.689L0,284.853v31.231h61v166h179.667v-80h30v80H451v-166h61v-31.231L421,194.231z
                          M361,86.085h30v78.271l-30-29.875V86.085z M421,286.085v166H300.667v-80h-90v80H91v-166H41.278L256,72.254l214.722,213.831H421z"
                        />
                      </g>
                    </g>
                    </svg>
                      Home
                  </Link>
                    <Link to="/board">
                    <svg 
                      className="mobile-icon" 
                      alt="Board logo" 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 415.998 415.998"
                    >
                      <g>
                        <g>
                          <rect x="111.999" y="176" width="192" height="16"/>
                        </g>
                      </g>
                      <g>
                        <g>
                          <rect x="111.999" y="224" width="192" height="16"/>
                        </g>
                      </g>
                      <g>
                        <g>
                          <rect x="111.999" y="272" width="192" height="16"/>
                        </g>
                      </g>
                      <g>
                        <g>
                          <rect x="111.999" y="320" width="96" height="16"/>
                        </g>
                      </g>
                      <g>
                        <g>
                          <circle cx="208.239" cy="48" r="12"/>
                        </g>
                      </g>
                    <g>
                      <path d="M367.998,95.999c0-17.673-14.326-32-31.999-32h-44.424c-5.926-6.583-13.538-11.62-22.284-14.136
                c-7.367-2.118-13.037-7.788-15.156-15.155C248.37,14.664,229.897,0,207.998,0c-21.898,0-40.37,14.663-46.134,34.706
                c-2.122,7.376-7.806,13.039-15.182,15.165c-8.736,2.518-16.341,7.55-22.262,14.128H79.999c-17.674,0-32,14.327-32,32v287.999
                c0,17.673,14.326,32,32,32c73.466,0,163.758,0,256,0c17.674,0,32-14.327,32-32C367.999,293.119,367.998,206.096,367.998,95.999z
                M128,95.741c0.11-14.066,9.614-26.606,23.113-30.496c12.71-3.662,22.477-13.426,26.127-26.116
                C181.157,25.51,193.805,16,207.998,16c14.194,0,26.842,9.51,30.758,23.13c3.652,12.698,13.413,22.459,26.111,26.11
                c13.618,3.917,23.13,16.566,23.13,30.758v16H128V95.741z M335.999,399.998c-85.455,0-170.77,0-256,0c-8.823,0-16-7.178-16-16
                V95.999c0-8.822,7.177-16,16-16h34.742c-1.73,4.892-2.698,10.143-2.74,15.617v32.383h191.998v-32c0-5.615-0.992-10.991-2.764-16
                h34.764c8.822,0,15.999,7.178,15.999,16c0,45.743-0.001,260.254,0.002,287.999C351.999,392.82,344.822,399.998,335.999,399.998z"
                />
                    </g>

                  </svg>
                    Board
                  </Link>
                  <Link to="profile">
                    <svg 
                      className="mobile-icon"
                      viewBox="-42 0 512 512.002" 
                      xmlns="http://www.w3.org/2000/svg">
                        <path 
                          d="m210.351562 246.632812c33.882813 0 63.222657-12.152343 87.195313-36.128906 23.972656-23.972656 36.125-53.304687 36.125-87.191406 0-33.875-12.152344-63.210938-36.128906-87.191406-23.976563-23.96875-53.3125-36.121094-87.191407-36.121094-33.886718 0-63.21875 12.152344-87.191406 36.125s-36.128906 53.308594-36.128906 87.1875c0 33.886719 12.15625 63.222656 36.132812 87.195312 23.976563 23.96875 53.3125 36.125 87.1875 36.125zm0 0"/><path d="m426.128906 393.703125c-.691406-9.976563-2.089844-20.859375-4.148437-32.351563-2.078125-11.578124-4.753907-22.523437-7.957031-32.527343-3.308594-10.339844-7.808594-20.550781-13.371094-30.335938-5.773438-10.15625-12.554688-19-20.164063-26.277343-7.957031-7.613282-17.699219-13.734376-28.964843-18.199219-11.226563-4.441407-23.667969-6.691407-36.976563-6.691407-5.226563 0-10.28125 2.144532-20.042969 8.5-6.007812 3.917969-13.035156 8.449219-20.878906 13.460938-6.707031 4.273438-15.792969 8.277344-27.015625 11.902344-10.949219 3.542968-22.066406 5.339844-33.039063 5.339844-10.972656 0-22.085937-1.796876-33.046874-5.339844-11.210938-3.621094-20.296876-7.625-26.996094-11.898438-7.769532-4.964844-14.800782-9.496094-20.898438-13.46875-9.75-6.355468-14.808594-8.5-20.035156-8.5-13.3125 0-25.75 2.253906-36.972656 6.699219-11.257813 4.457031-21.003906 10.578125-28.96875 18.199219-7.605469 7.28125-14.390625 16.121094-20.15625 26.273437-5.558594 9.785157-10.058594 19.992188-13.371094 30.339844-3.199219 10.003906-5.875 20.945313-7.953125 32.523437-2.058594 11.476563-3.457031 22.363282-4.148437 32.363282-.679688 9.796875-1.023438 19.964844-1.023438 30.234375 0 26.726562 8.496094 48.363281 25.25 64.320312 16.546875 15.746094 38.441406 23.734375 65.066406 23.734375h246.53125c26.625 0 48.511719-7.984375 65.0625-23.734375 16.757813-15.945312 25.253906-37.585937 25.253906-64.324219-.003906-10.316406-.351562-20.492187-1.035156-30.242187zm0 0"
                        />
                    </svg>
                    Profile
                  </Link>
                    <Link>
                    <svg 
                      className="mobile-icon"
                      src={logout}
                      onClick={() => handleLogout(props.history)}
                      viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" >
                        <path 
                          id="path892" 
                          d="m23.515625 9.515625a1.50015 1.50015 0 0 0 -.54296875.1015625c-10.196538 3.7749376-16.972656 13.509931-16.972656 24.382812 0 14.341637 11.658363 26 26 26s26-11.658363 26-26c0-10.871262-6.7743738-20.604746-16.96875-24.380859a1.50015 1.50015 0 1 0 -1.0429688 2.8125c9.027007 3.3437064 15.011719 11.941977 15.011719 21.568359 0 12.720316-10.279684 23-23 23s-23-10.279684-23-23c0-9.627821 5.9866985-18.225692 15.015625-21.568359a1.50015 1.50015 0 0 0 -.5-2.9160156z" 
                        />
                        <path 
                          id="rect821" 
                          d="m32 4c-2.7440542 0-5 2.2559458-5 5v16c0 2.7440542 2.2559458 5 5 5s5-2.2559458 5-5v-16c0-2.7440542-2.2559458-5-5-5zm0 3c1.1339458 0 2 .86605415 2 2v16c0 1.1339458-.86605415 2-2 2s-2-.86605415-2-2v-16c0-1.1339458.86605415-2 2-2z" 
                        />
                      </svg>
                      Logout
                    </Link>
                  </ul>
                </div>
              </>
            )
            : (
              <svg
                className="menu-svg"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24">
                <path
                  fill="none"
                  d="M0 0h24v24H0V0z"
                />
                <path
                  d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z"
                />
              </svg>
            )
        }
      </div>
    </>
  )
}

export class ConnectedMobileMenu extends React.Component {
  render() {
    return (
      <AuthConsumer>
        {auth =>
          <MobileMenu {...this.props} auth={auth} />
        }
      </AuthConsumer>
    )
  }
}

export default withRouter(ConnectedMobileMenu);