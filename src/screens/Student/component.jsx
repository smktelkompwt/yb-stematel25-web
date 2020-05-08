import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import students from '../../data/siswa.json'
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
        <Nav tabs className="student-tab-wrapper row">
          <NavItem className="student-tab-item col">
            <NavLink
              className={classnames('student-tab-link col',{ 'student-tab-active col': activeTab === '1' })}
              onClick={() => { toggle('1'); }}
            >
              XII RPL 1
            </NavLink>
          </NavItem>
          <NavItem className="student-tab-item col">
            <NavLink
              className={classnames('student-tab-link col',{ 'student-tab-active col': activeTab === '2' })}
              onClick={() => { toggle('2'); }}
            >
              XII RPL 2
            </NavLink>
          </NavItem>
          <NavItem className="student-tab-item col">
            <NavLink
              className={classnames('student-tab-link col',{ 'student-tab-active col': activeTab === '3' })}
              onClick={() => { toggle('3'); }}
            >
              XII RPL 3
            </NavLink>
          </NavItem>
          <NavItem className="student-tab-item col">
            <NavLink
              className={classnames('student-tab-link col',{ 'student-tab-active col': activeTab === '4' })}
              onClick={() => { toggle('4'); }}
            >
              XII RPL 4
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab} className="student-photo">
          <TabPane tabId="1">
            <div className="student-photo-list">
              {
                students.filter(student => student.class === "XII RPL 1").map((rpl1, key) => (
                  <PhotoList data={rpl1} key={key} />
                ))
              }
            </div>
          </TabPane>
          <TabPane tabId="2">
            <div className="student-photo-list">
              {
                students.filter(student => student.class === "XII RPL 2").map((rpl1, key) => (
                  <PhotoList data={rpl1} key={key} />
                ))
              }
            </div>
          </TabPane>
          <TabPane tabId="3">
            <div className="student-photo-list">
              {
                students.filter(student => student.class === "XII RPL 3").map((rpl1, key) => (
                  <PhotoList data={rpl1} key={key} />
                ))
              }
            </div>
          </TabPane>
          <TabPane tabId="4">
            <div className="student-photo-list">
              {
                students.filter(student => student.class === "XII RPL 4").map((rpl1, key) => (
                  <PhotoList data={rpl1} key={key} />
                ))
              }
            </div>
          </TabPane>
        </TabContent>
      </div>
    </div>
  );
}

export default Student;
