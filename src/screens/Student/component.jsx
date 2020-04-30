import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import './style.css';

import PhotoList from '../../components/PhotoList'

const Student = () => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (
    <div className="student">
      <h1 className="student-title">JANGAN LUPAIN<br/>DOI JUGA YA</h1>
      <div className="student-tab">
        <Nav tabs className="student-tab-wrapper">
          <NavItem className="student-tab-item">
            <NavLink
              className={classnames('student-tab-link',{ 'student-tab-active': activeTab === '1' })}
              onClick={() => { toggle('1'); }}
            >
              XII RPL 1
            </NavLink>
          </NavItem>
          <NavItem className="student-tab-item">
            <NavLink
              className={classnames('student-tab-link',{ 'student-tab-active': activeTab === '2' })}
              onClick={() => { toggle('2'); }}
            >
              XII RPL 2
            </NavLink>
          </NavItem>
          <NavItem className="student-tab-item">
            <NavLink
              className={classnames('student-tab-link',{ 'student-tab-active': activeTab === '3' })}
              onClick={() => { toggle('3'); }}
            >
              XII RPL 3
            </NavLink>
          </NavItem>
          <NavItem className="student-tab-item">
            <NavLink
              className={classnames('student-tab-link',{ 'student-tab-active': activeTab === '4' })}
              onClick={() => { toggle('4'); }}
            >
              XII RPL 4
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab} className="student-photo">
          <TabPane tabId="1">
            <p>XII RPL 1</p>
            <div className="student-photo-list">
              <PhotoList />
              <PhotoList />
              <PhotoList />
              <PhotoList />
              <PhotoList />
            </div>
          </TabPane>
          <TabPane tabId="2">
            <p>XII RPL 2</p>
            <div className="student-photo-list">
              <PhotoList />
              <PhotoList />
              <PhotoList />
              <PhotoList />
              <PhotoList />
            </div>
          </TabPane>
          <TabPane tabId="3">
            <p>XII RPL 3</p>
            <div className="student-photo-list">
              <PhotoList />
              <PhotoList />
              <PhotoList />
              <PhotoList />
              <PhotoList />
            </div>
          </TabPane>
          <TabPane tabId="4">
            <p>XII RPL 4</p>
            <div className="student-photo-list">
              <PhotoList />
              <PhotoList />
              <PhotoList />
              <PhotoList />
              <PhotoList />
            </div>
          </TabPane>
        </TabContent>
      </div>
    </div>
  );
}

export default Student;
