import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoMdMenu } from "react-icons/io";
import {
  NavDiv,
  Nav,
  NavOptions,
  OptionButton,
  NavOptionsMobile,
  Logo,
  Button1,
  Button2,
  ArrowIcon,
  MenuButton,
  DropdownMenu,
  SubMenu,
  OptionButtonMobile
} from './styleComponents';
import interviewExperiences from '../../Data/experience';
import syllabusCompanyData from '../../Data/syllabus';
import programmingDetails from '../../Data/programming';

export default function Header() {
  const [menu, setMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [subMenuData, setSubMenuData] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(false);
  const [mobileSubMenu, setMobileSubMenu] = useState(null);
  const [selectOption, setSelectOption] = useState(null);
  const navigate = useNavigate();

  const options = {
    InstaPrime: "Insta prime",
    OffCampus: "Off campus",
    Placements: "Placements",
  };
  const toggleMobileDropdown = () => {
    setMobileDropdown((prev) => !prev);
    if (mobileDropdown) setMobileSubMenu(null);
  };

  const toggleMobileSubMenu = (option) => {
    setMobileSubMenu((prev) => (prev === option ? null : option));
  };

  const prepareOptions = ["Interview_Preparation", "Interview_Experience", "Syllabus", "Programming", "Aptitude"];

  const subMenuOptions = {
    "Interview_Preparation": ["Mock Interviews", "HR Questions", "Virtual Interview", "Puzzels", "Technical Interview", "Group Discussions"],
    "Interview_Experience": [...interviewExperiences.map(each => each.company)],
    "Syllabus": [...syllabusCompanyData.map(each => each.id)],
    "Programming": [...programmingDetails.map(each => each.name)],
    "Aptitude": ["Logical Reasoning", "Quantitative", "Verbal"],
  };

  const formatOptionForUI = (option) => option.replace(/_/g, ' ');

  return (
    <NavDiv>
      <Nav>
        <MenuButton onClick={() => setMenu(!menu)}>
          <IoMdMenu />
        </MenuButton>

        <Logo onClick={() => navigate('/')} >LOGO</Logo>

        <NavOptions>
          <OptionButton
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => {
              setShowDropdown(false);
              setSubMenuData(null);
            }}
          >
            Prepare <ArrowIcon rotate={showDropdown} />
          </OptionButton>

          {showDropdown && (
            <DropdownMenu
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => {
                setShowDropdown(false);
                setSubMenuData(null);
              }}
            >
              {prepareOptions.map((option) => (
                <OptionButton
                  key={option}
                  onMouseEnter={() => {
                    setSelectOption(option);
                    setSubMenuData(subMenuOptions[option]);
                  }}
                >
                  {formatOptionForUI(option)}
                </OptionButton>
              ))}

              {subMenuData && (
                <SubMenu
                  onMouseEnter={() => setShowDropdown(true)}
                  onMouseLeave={() => setSubMenuData(null)}
                >
                  {subMenuData.map((item) => (
                    <OptionButton
                      onClick={() =>
                        navigate(`/${selectOption.replace(/\s+/g, '_')}/${item.replace(/\s+/g, '_')}`)
                      }
                      key={item}
                    >
                      {item}
                    </OptionButton>
                  ))}
                </SubMenu>
              )}
            </DropdownMenu>
          )}

          {Object.keys(options).map((each) => (
            <OptionButton key={each}>{options[each]}</OptionButton>
          ))}

          <div>
            <Button1>Login</Button1>
            <Button2>Sign Up</Button2>
          </div>
        </NavOptions>


      </Nav>

      {menu && (
        <NavOptionsMobile>
          <OptionButtonMobile onClick={toggleMobileDropdown}>
            Prepare <ArrowIcon rotate={mobileDropdown} />
          </OptionButtonMobile>
          {mobileDropdown && (
            <DropdownMenu>
              {prepareOptions.map((option) => (
                <OptionButtonMobile
                  key={option}
                  onClick={() => toggleMobileSubMenu(option)}
                >
                  {formatOptionForUI(option)}
                </OptionButtonMobile>
              ))}
              {mobileSubMenu && (
                <SubMenu>
                  {subMenuOptions[mobileSubMenu].map((item) => (
                    <OptionButtonMobile
                      key={item}
                      onClick={() =>
                        navigate(`/${mobileSubMenu.replace(/\s+/g, '_')}/${item.replace(/\s+/g, '_')}`)
                      }
                    >
                      {item}
                    </OptionButtonMobile>
                  ))}
                </SubMenu>
              )}
            </DropdownMenu>
          )}
          {Object.keys(options).map((each) => (
            <OptionButtonMobile key={each}>
              {options[each]}
            </OptionButtonMobile>
          ))}
        </NavOptionsMobile>
      )}
    </NavDiv>
  );
}
